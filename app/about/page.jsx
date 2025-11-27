"use client";
import { CheckCircle, ShoppingBag, Truck, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-orange-600">QuickCart</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are dedicated to providing a fast, secure, and premium shopping
            experience for customers across India. QuickCart builds a seamless
            connection between technology and lifestyle.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to make shopping simple, fast, and enjoyable. We
              connect customers with high-quality products and unbeatable deals,
              all while offering a smooth digital shopping journey.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-orange-600" />
                Fast and secure online shopping
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-orange-600" />
                Best deals and exclusive offers
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-orange-600" />
                Customer-first shopping experience
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-200">
            <ShoppingBag className="w-24 h-24 text-orange-600 mx-auto" />
            <p className="text-center mt-6 text-gray-600">
              A brand built to bring comfort, style, and smart shopping to your
              fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-center font-bold mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <ShieldCheck className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Trust & Transparency
              </h3>
              <p className="text-gray-600 text-sm">
                We ensure 100% genuine products and secure payments.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <Truck className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                We strive to deliver your orders quickly and safely.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 text-sm">
                Your happiness is our priority — always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-600">50K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-600">20K+</h3>
            <p className="text-gray-600">Products Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-600">200+</h3>
            <p className="text-gray-600">Verified Sellers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-600">99%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-orange-600 py-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the QuickCart Family
        </h2>
        <p className="max-w-xl mx-auto text-white/90 mb-8">
          Experience the future of online shopping — faster, smarter, and more
          enjoyable.
        </p>
        <a
          href="/shop"
          className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Start Shopping
        </a>
      </section>
    </div>
  );
}
