import React from 'react';
import { motion } from 'framer-motion';

const FurnitureCard = ({ name, description, image, index }) => {
  // Animasyon yönü: Tek sayılar sola, çift sayılar sağa
  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }} // Animasyon süresi 1.5 saniye
      className="w-full mb-8 h-[40rem] relative overflow-hidden rounded-lg shadow-lg" // Yükseklik artırıldı (40rem)
    >
      {/* Arka Plan Resmi */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* İçerik */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-8 ${
          index % 2 === 0 ? 'text-left' : 'text-right'
        }`}
      >
        <div className="max-w-2xl"> {/* Genişlik artırıldı */}
          <h3 className="text-6xl font-bold text-white mb-8">{name}</h3> {/* Başlık boyutu artırıldı */}
          <p className="text-3xl text-gray-200">{description}</p> {/* Metin boyutu artırıldı */}
        </div>
      </div>
    </motion.div>
  );
};

export default FurnitureCard;