"use client";
import { productsDummyData } from "@/assets/assets";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const { user } = useUser();
  const { getToken } = useAuth(); // ✅ Correct usage of Clerk hook

  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // -----------------------------
  // Fetch Dummy Products
  // -----------------------------
  const fetchProductData = async () => {
    setProducts(productsDummyData);
  };

  // -----------------------------
  // Fetch User Data (with JWT)
  // -----------------------------
  const fetchUserData = async () => {
    try {
      if (user?.publicMetadata?.role === "seller") {
        setIsSeller(true);
      }

      const token = await getToken(); // ✅ MUST CALL getToken()
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      const { data } = await axios.get("/api/user/data", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setUserData(data.user);
        setCartItems(data.user.cartItems);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Failed to fetch user data");
    }
  };

  // -----------------------------
  // Cart Functions
  // -----------------------------
  const addToCart = (itemId) => {
    const cartData = structuredClone(cartItems);

    cartData[itemId] = cartData[itemId] ? cartData[itemId] + 1 : 1;

    setCartItems(cartData);
  };

  const updateCartQuantity = (itemId, quantity) => {
    const cartData = structuredClone(cartItems);

    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  };

  const getCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const item = products.find((p) => p._id === id);
      if (item) {
        total += item.offerPrice * cartItems[id];
      }
    }
    return Math.round(total * 100) / 100;
  };

  // -----------------------------
  // Run Effects
  // -----------------------------
  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  // -----------------------------
  // Context Value
  // -----------------------------
  const value = {
    getToken, // ✔ Correctly passing getToken() function
    user,
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    fetchUserData,
    products,
    fetchProductData,
    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
