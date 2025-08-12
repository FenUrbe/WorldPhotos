import React from 'react';
import { motion } from 'framer-motion';

export default function PhotoCard({ photo, onOpen }){
  return (
    <motion.div
      className="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
      whileHover={{ scale: 1.03 }}
      onClick={() => onOpen(photo.id)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="w-full h-60 bg-gray-100">
        <img src={photo.image} alt={photo.title} className="w-full h-60 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{photo.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{photo.location}</p>
      </div>
    </motion.div>
  )
}