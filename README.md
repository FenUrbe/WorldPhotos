# PhotoScape — React.js Starter (Updated)

Quick start:
1. `npx create-react-app my-app`
2. Copy the contents of this project into `my-app/src` (components, App.js, data, index.js, index.css) and add `tailwind.config.js` & `postcss.config.js` to the root.
3. Install packages:
   ```bash
   npm install framer-motion react-parallax yet-another-react-lightbox
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
4. Add images to `public/images`.
5. `npm start`.

Notes:
- This version uses `yet-another-react-lightbox` (modern React 18 compatible) and does not rely on the old `react-image-lightbox`.
- The new WheelGallery component implements a circular draggable wheel — drag horizontally to spin it and click images to open the lightbox.
- Tell me which enhancements you want next: custom animated modal, parallax layers, cursor interactions, or CMS integration.