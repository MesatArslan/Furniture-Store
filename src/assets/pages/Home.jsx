import React from 'react';
import { motion } from 'framer-motion';
import FurnitureCard from '../components/FurnitureCard';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {
  const furnitureItems = [
    {
      id: 1,
      name: 'Modern Sofa',
      description:
        'A sleek and comfortable sofa for your living room. Perfect for modern homes.',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Elegant Chair',
      description:
        'A stylish chair perfect for your dining area. Combines elegance and comfort.',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Wooden Table',
      description:
        'A sturdy and elegant table for your home office. Made from high-quality wood.',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Stylish Lamp',
      description:
        'A modern lamp to brighten up your space. Adds a touch of sophistication.',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Cozy Armchair',
      description:
        'A comfortable armchair for your reading nook. Perfect for relaxation.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Minimalist Desk',
      description:
        'A clean and functional desk for your workspace. Ideal for productivity.',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Luxury Bed',
      description:
        'A luxurious bed for a good night’s sleep. Designed for ultimate comfort.',
      image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Chic Bookshelf',
      description:
        'A stylish bookshelf to organize your books. Adds charm to any room.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-[#F5EFE7] overflow-x-hidden"> {/* Add overflow-x-hidden to prevent horizontal scrolling */}
      {/* Hero Section */}
      <HeroSection />

      {/* Furniture Collection */}
      <div id="collection" className="max-w-7xl mx-auto py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-4xl font-bold text-[#213555] mb-12 text-center"
        >
          Featured Collection
        </motion.h2>
        <div className="space-y-8">
          {furnitureItems.map((item, index) => (
            <FurnitureCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;