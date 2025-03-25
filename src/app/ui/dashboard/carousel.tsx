"use client"
import React, { useState, useEffect } from 'react';

interface SlideItem {
  id: number;
  image: string;
  mobileImage?: string;
  alt: string;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // imágenes móvil
  const slides: SlideItem[] = [
    {
      id: 1,
      image: "/images/test1.jpg",
      mobileImage: "/images/test1.jpg", 
      alt: "Descripción de la primera imagen",
    },
    {
      id: 2,
      image: "/images/test2.png",
      mobileImage: "/images/test2.png", // Opcional
      alt: "Descripción de la segunda imagen",
    },
    {
      id: 3,
      image: "/images/test3.jpg",
      mobileImage: "/images/test3.jpg", // Opcional
      alt: "Descripción de la tercera imagen",
    }
  ];

  // Altura responsiva
  const carouselHeight = isMobile ? '25rem' : '44.125rem';

  // desplazamiento
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={`relative w-full h-[${carouselHeight}] overflow-hidden`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="w-full flex-shrink-0"
            style={{ height: carouselHeight }}
          >
            <img
              src={isMobile && slide.mobileImage ? slide.mobileImage : slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Indicadores responsivos */}
      <div className={`absolute ${isMobile ? 'bottom-4' : 'bottom-8'} w-full flex justify-center space-x-2`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              rounded-full transition-all
              ${currentSlide === index ? 'bg-white' : 'bg-white opacity-50'}
              ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}
            `}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;