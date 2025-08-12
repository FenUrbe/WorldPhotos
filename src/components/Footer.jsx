import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold">PhotoScape</h4>
          <p className="text-sm text-gray-300 mt-2">Capturing the beauty of the world</p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 text-sm text-gray-300">
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-sm text-gray-300 mt-2">fenn.urbe@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}