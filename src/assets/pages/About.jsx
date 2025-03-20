import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // State for statistics
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [furnitureDesigns, setFurnitureDesigns] = useState(0);
  const [awardsWon, setAwardsWon] = useState(0);
  const [customerSupport, setCustomerSupport] = useState(0);

  // Function to animate numbers
  const animateNumbers = (target, setter, increment) => {
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      setter(current);
      if (current >= target) {
        clearInterval(interval);
      }
    }, 10);
  };

  return (
    <div className="bg-[#F5EFE7] min-h-screen py-10">
      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-[#213555] mb-12 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="John Doe"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#213555] mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Jane Smith"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#213555] mb-2">Jane Smith</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Mike Johnson"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#213555] mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Sarah Lee"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#213555] mb-2">Sarah Lee</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-[#3E5879] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#F5EFE7] text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-8 bg-[#213555] rounded-lg"
            >
              <h3 className="text-3xl font-bold text-[#F5EFE7] mb-4">Quality</h3>
              <p className="text-[#D8C4B6]">
                We are committed to providing high-quality furniture that lasts.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-[#213555] rounded-lg"
            >
              <h3 className="text-3xl font-bold text-[#F5EFE7] mb-4">Innovation</h3>
              <p className="text-[#D8C4B6]">
                We constantly innovate to bring you the latest in modern design.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-8 bg-[#213555] rounded-lg"
            >
              <h3 className="text-3xl font-bold text-[#F5EFE7] mb-4">Customer Focus</h3>
              <p className="text-[#D8C4B6]">
                Your satisfaction is our top priority. We are here to help you
                create the perfect space.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Achievements Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-[#213555] mb-12 text-center">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Happy Customers */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => animateNumbers(10000, setHappyCustomers, 100)}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#3E5879]">
              {happyCustomers}+
            </h3>
            <p className="text-[#213555]">Happy Customers</p>
          </motion.div>

          {/* Furniture Designs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onViewportEnter={() => animateNumbers(500, setFurnitureDesigns, 5)}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#3E5879]">
              {furnitureDesigns}+
            </h3>
            <p className="text-[#213555]">Furniture Designs</p>
          </motion.div>

          {/* Awards Won */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onViewportEnter={() => animateNumbers(50, setAwardsWon, 1)}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#3E5879]">
              {awardsWon}+
            </h3>
            <p className="text-[#213555]">Awards Won</p>
          </motion.div>

          {/* Customer Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onViewportEnter={() => animateNumbers(100, setCustomerSupport, 1)}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-[#3E5879]">
              {customerSupport}%
            </h3>
            <p className="text-[#213555]">Customer Satisfaction</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#213555] text-white py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Let's Create Your Dream Space Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-[#D8C4B6] mb-8"
          >
            Contact us today to get started on your next project.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            to="/contact" // Use hash-based URL for GitHub Pages
            className="bg-white text-[#213555] px-6 py-3 rounded-lg hover:bg-[#ede9e9] transition duration-300"
          >
            Contact with Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;