"use client";
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerReviews from "@/components/CustomerReviews";
import AppDownloadSection from "@/components/AppDownloadSection";

const Home = () => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <WhyChooseUs></WhyChooseUs>
        <Banner />
        <CustomerReviews></CustomerReviews>
        <NewsLetter />
        <AppDownloadSection></AppDownloadSection>
      </div>
    </>
  );
};

export default Home;
