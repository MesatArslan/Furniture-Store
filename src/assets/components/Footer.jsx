import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'; // Social media icons
import logo from '../images/logo.png'; // Logo image

const Footer = () => {
  return (
    <footer className="bg-[#213555] text-[#F5EFE7] py-12 relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-sm">
        <img
          src={logo}
          alt="FurniStore Logo"
          className="h-96 w-96 object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="FurniStore Logo"
                className="h-12 w-12 rounded-lg"
              />
              <h2 className="text-2xl font-bold text-[#D8C4B6]">FurniStore</h2>
            </div>
            <p className="text-[#D8C4B6]">
              Discover modern furniture for your home. Explore our collection and
              find the perfect pieces for your space.
            </p>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:ml-16"
          >
            <h3 className="text-xl font-bold text-[#D8C4B6]">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5EFE7] hover:text-[#E1306C] transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5EFE7] hover:text-[#FF0000] transition duration-300"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5EFE7] hover:text-black transition duration-300"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5EFE7] hover:text-[#25D366] transition duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#D8C4B6]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-[#D8C4B6]">Email: info@furnistore.com</li>
              <li className="text-[#D8C4B6]">Phone: +1 (123) 456-7890</li>
              <li className="text-[#D8C4B6]">
                Address: 123 Furniture St, New York, USA
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-[#3E5879] mt-8 pt-8 text-center text-[#D8C4B6]"
        >
          <p>
            &copy; {new Date().getFullYear()} FurniStore. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;