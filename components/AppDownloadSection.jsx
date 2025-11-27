"use client";

import { Smartphone, QrCode, Apple, Play } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Download the <span className="text-orange-600">QuickCart App</span>
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Shop faster, save more, track orders instantly, and enjoy an
            ultra-smooth shopping experience — right from your phone.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition shadow">
              <Apple className="w-6 h-6" />
              <span className="font-medium">App Store</span>
            </button>

            <button className="flex items-center gap-3 bg-gray-200 text-black px-5 py-3 rounded-xl hover:scale-105 transition shadow">
              <Play className="w-6 h-6 text-green-600" />
              <span className="font-medium">Google Play</span>
            </button>
          </div>

          {/* QR Code area (icon version) */}
          <div className="flex items-center gap-4 mt-8">
            <div className="p-4 bg-white rounded-xl shadow hover:scale-105 transition cursor-pointer">
              <QrCode className="w-14 h-14 text-orange-600" />
            </div>

            <p className="text-sm text-gray-600">
              Scan to download the QuickCart mobile app instantly
            </p>
          </div>
        </div>

        {/* Right Side – App Illustration using Icons */}
        <div className="lg:w-[40%] flex justify-center">
          <div className="bg-white shadow-xl rounded-3xl p-10 flex flex-col items-center border border-gray-200 hover:scale-[1.02] transition">
            <Smartphone className="w-24 h-24 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">QuickCart Mobile</h3>
            <p className="text-gray-500 text-center text-sm max-w-xs">
              A beautifully simple and fast shopping app designed to make your
              everyday purchases easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
