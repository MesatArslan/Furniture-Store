import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Instagram, Youtube, WhatsApp icons
import { FaXTwitter } from 'react-icons/fa6'; // X (Twitter) icon

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        alt="Modern Furniture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#213555]/20"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black mb-6 bg-gradient-to-r from-[#D8C4B6] via-[#F5EFE7] to-[#3E5879] bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to <span className="text-[#D8C4B6]">FurniStore</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-3xl text-[#F5EFE7] font-bold mb-8"
        >
          Discover modern furniture for your home. Explore our collection and
          find the perfect pieces for your space.
        </motion.p>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-8 right-8 flex space-x-6">
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5EFE7] p-3 rounded-full hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] transition duration-300"
        >
          <FaInstagram className="w-8 h-8" />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5EFE7] p-3 rounded-full hover:bg-[#FF0000] transition duration-300"
        >
          <FaYoutube className="w-8 h-8" />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5EFE7] p-3 rounded-full hover:bg-black transition duration-300"
        >
          <FaXTwitter className="w-8 h-8" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5EFE7] p-3 rounded-full hover:bg-[#25D366] transition duration-300"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;