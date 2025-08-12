import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { photos } from './data/photos';
import { Parallax } from 'react-parallax';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import LatestCarousel from './components/LatestCarousel'; // ⬅️ NEW
import './components/LatestCarousel.css'; // ⬅️ NEW

function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = photos.map(p => ({
    src: p.image,
    title: p.title,
    description: p.location
  }));

  const openById = (id) => {
    const i = photos.findIndex(p => p.id === id);
    setIndex(i >= 0 ? i : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <Parallax
        bgImage={'/images/hero-wide.jpg'}
        strength={300}
        bgImageStyle={{ objectFit: 'cover' }}
      >
        <div className="h-[56vh] flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
              style={{ textShadow: '0 6px 18px rgba(0,0,0,0.45)' }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold">
                Discover Breathtaking Photos
              </h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
                A collection of scenery and moments from around the globe.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="#gallery"
                  className="px-6 py-3 rounded-full bg-white text-sky-700 font-medium shadow hover:scale-105 transition"
                >
                  Explore Gallery
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 rounded-full border text-white/90 hover:bg-white/10 transition"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Parallax>

      <main className="flex-1 -mt-20">
        {/* GALLERY SECTION */}
        <section id="gallery" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold">Gallery</h2>
              <p className="text-sm text-gray-600 mt-2">
                Drag to explore. Click any image to view fullscreen.
              </p>
            </motion.div>

            {/* NEW CAROUSEL */}
            <div className="mt-8">
              <LatestCarousel photos={photos} onOpen={openById} />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.h3
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              About This Project
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-gray-600"
            >
              This photography site is built to showcase stunning scenery and moments
              from across the globe.
            </motion.p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.h3
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              Get in Touch
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-gray-600"
            >
              For collaborations or licensing, email:{' '}
              <a
                className="text-sky-600"
                href="mailto:hello@example.com"
              >
                fenn.urbe@gmail.com
              </a>
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={index}
        styles={{ container: { background: 'rgba(10,10,12,0.92)' } }}
      />
    </div>
  );
}

export default App;
