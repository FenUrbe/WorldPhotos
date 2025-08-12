import React, { useRef, useEffect } from "react";
import { photos } from "../data/photos";
import "./LatestCarousel.css";

export default function LatestCarousel() {
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  // Duplicate photos for looping
  const loopedPhotos = [...photos, ...photos, ...photos]; // triple for smoother wrap

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
    carouselRef.current.classList.add("dragging");
  };

  const handleMouseLeave = () => {
    isDown = false;
    carouselRef.current.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Loop logic
  useEffect(() => {
    const carousel = carouselRef.current;
    const singleSetWidth = carousel.scrollWidth / 3; // since we tripled the list

    const checkLoop = () => {
      if (carousel.scrollLeft < singleSetWidth * 0.1) {
        // near start → jump forward
        carousel.scrollLeft += singleSetWidth;
      } else if (carousel.scrollLeft > singleSetWidth * 1.9) {
        // near end → jump back
        carousel.scrollLeft -= singleSetWidth;
      }
    };

    carousel.addEventListener("scroll", checkLoop);
    return () => carousel.removeEventListener("scroll", checkLoop);
  }, []);

  return (
    <div
      className="latest-carousel"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="carousel-track">
        {loopedPhotos.map((photo, index) => (
          <div className="carousel-item" key={index}>
            <img
            src={photo.image}
            alt={photo.title}
            draggable="false"
            onDragStart={(e) => e.preventDefault()} // stop drag
            />
            <div className="carousel-caption">
              <h4>{photo.title}</h4>
              <p>{photo.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
