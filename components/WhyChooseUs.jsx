"use client";
import { ShieldCheck, Truck, RefreshCcw, BadgeCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Fast & Free Delivery",
      desc: "Get your products delivered at record speed across India.",
      icon: <Truck className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Secure Payments",
      desc: "Your payments are protected with advanced encryption.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free 7-day returns for selected products.",
      icon: <RefreshCcw className="w-8 h-8 text-orange-600" />,
    },
    {
      title: "100% Genuine Products",
      desc: "Only authentic and brand-authorized items, always.",
      icon: <BadgeCheck className="w-8 h-8 text-orange-600" />,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Shop With <span className="text-orange-600">QuickCart?</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Experience a seamless and trustworthy shopping journey with our
          industry-leading features designed just for you.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
