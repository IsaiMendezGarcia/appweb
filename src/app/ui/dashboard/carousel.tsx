"use client"
import React, { useState, useEffect } from 'react';

interface SlideItem {
  id: number;
  image: string;
  alt: string;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: SlideItem[] = [
    // Aqui se agregan las imagenes
    {
        id: 1,
        image: "/images/test1.jpg",
        alt: "Descripción de la primera imagen",
      },
      {
        id: 2,
        image: "/images/test2.png",
        alt: "Descripción de la segunda imagen",
      },
      {
        id: 3,
        image: "/images/test3.jpg",
        alt: "Descripción de la tercera imagen",
      }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[44.125rem] overflow-hidden">
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-[44.125rem] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white opacity-50'}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;