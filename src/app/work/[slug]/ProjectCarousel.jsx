"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../styles/Carousel.css";

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 1000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Jump to specific image and reset auto-slide
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel relative"
      role="region"
      aria-label="Image carousel"
    >
      <Image
        src={`${images[currentIndex].url}`}
        alt={images[currentIndex].alt}
        layout="responsive"
        width={491}
        height={4080}
      />
      <div className="carousel__dots">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToImage(index)}
            className={`carousel__dot ${
              index === currentIndex ? "carousel__dot--active" : ""
            }`}
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectCarousel;
