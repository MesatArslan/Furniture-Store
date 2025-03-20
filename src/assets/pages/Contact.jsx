import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-[#F5EFE7] min-h-screen py-28">
      {/* Contact Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#213555] mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-[#3E5879] mb-12"
        >
          We'd love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
        </motion.p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-8 order-2 lg:order-1"
        >
          <h3 className="text-2xl font-bold text-[#213555] mb-6">Contact Information</h3>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-[#3E5879] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#213555]">Our Address</h4>
                <p className="text-[#3E5879]">123 Furniture Street, Suite 456</p>
                <p className="text-[#3E5879]">Istanbul, Turkey</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="bg-[#3E5879] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#213555]">Phone</h4>
                <p className="text-[#3E5879]">+90 (123) 456-7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-[#3E5879] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#213555]">Email</h4>
                <p className="text-[#3E5879]">info@furniturestore.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start">
              <div className="bg-[#3E5879] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#213555]">Working Hours</h4>
                <p className="text-[#3E5879]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-[#3E5879]">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-[#3E5879]">Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-start">
              <div className="bg-[#3E5879] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-[#213555]">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#3E5879] hover:text-[#D8C4B6]">Facebook</a>
                  <a href="#" className="text-[#3E5879] hover:text-[#D8C4B6]">Instagram</a>
                  <a href="#" className="text-[#3E5879] hover:text-[#D8C4B6]">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-8 order-1 lg:order-2"
        >
          <h3 className="text-2xl font-bold text-[#213555] mb-6">Send Us a Message</h3>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#3E5879] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-[#D8C4B6] focus:outline-none focus:border-[#3E5879]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#3E5879] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-[#D8C4B6] focus:outline-none focus:border-[#3E5879]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[#3E5879] font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-[#D8C4B6] focus:outline-none focus:border-[#3E5879]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3E5879] text-white px-6 py-3 rounded-lg hover:bg-[#213555] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map (Increased Height) */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.424944699999!2d28.97835831541162!3d41.00823757929952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9eb9d587135%3A0x8aa0bb6b1dd6ffb7!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1633023226785!5m2!1sen!2sus"
            width="100%"
            height="650"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Store Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;