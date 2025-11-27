"use client";

import { Star } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Amit Sharma",
      review:
        "Amazing product quality! The delivery was super fast and packaging was perfect.",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      review:
        "Customer support was very helpful. I’m extremely satisfied with my experience!",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      review:
        "The product looks premium and works perfectly. Worth every rupee!",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 4,
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our <span className="text-orange-600">Customers Say</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Real reviews from customers who love QuickCart. We value every little
          feedback that helps us grow.
        </p>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 border border-gray-200 transition-all duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <div className="flex text-orange-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed text-sm">
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
