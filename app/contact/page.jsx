"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-gray-50">
      {/* HERO */}
      <section className="bg-white py-20 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-orange-600">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, need support, or want to collaborate? Our team is here
          to help you with anything related to QuickCart.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Reach out to us anytime — we’ll respond as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-orange-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">contact@quickcart.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-orange-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 697-146-973</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-orange-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600 leading-tight">
                  QuickCart Pvt. Ltd.
                  <br />
                  Block 5, Tech Park Street,
                  <br />
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-600 outline-none resize-none"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[350px]">
        <iframe
          className="w-full h-full rounded-none border-t"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.954887090208!2d88.414!3d22.360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271f3f989c665%3A0x123!2sQuickCart!5e0!3m2!1sen!2sin!4v123456789"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
