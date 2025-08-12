import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold"
          >
            World Photos
          </motion.div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a className="hover:text-sky-600 transition" href="#gallery">Gallery</a>
            <a className="hover:text-sky-600 transition" href="#about">About</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="px-4 py-2 rounded-full border text-sm">Contact</a>
          </div>

          <div className="md:hidden text-gray-700">☰</div>
        </div>
      </div>
    </header>
  );
}