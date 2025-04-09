import { useEffect, useRef, useState } from 'react';

{/* array de logos*/}
const logos = [
  { id: 1, name: 'Solena', src: '/images/solena.png' },
  { id: 2, name: 'Tec', src: '/images/tec.png' },
  { id: 3, name: 'UG', src: '/images/ug.png' },
  { id: 4, name: 'UNAM', src: '/images/unam.png' },
  { id: 5, name: 'UNAMAT', src: '/images/UNAMAT.png' },
  // Duplicamos los logos para un efecto de carrusel infinito
  { id: 6, name: 'Solena', src: '/images/solena.png' },
  { id: 7, name: 'Tec', src: '/images/tec.png' },
  { id: 8, name: 'UG', src: '/images/ug.png' },
  { id: 9, name: 'UNAM', src: '/images/unam.png' },
  { id: 10, name: 'UNAMAT', src: '/images/UNAMAT.png' },
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        // Si llegamos al final, reiniciamos suavemente
        if (newIndex >= logos.length / 2) {
          setTimeout(() => {
            setCurrentIndex(0);
          }, 0);
          return 0;
        }
        return newIndex;
      });
    }, 3000); // Velocidad de cambio

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-footernav-100 py-15">
      <div className="container mx-auto px-1">
     
        
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex items-center gap-10 transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${currentIndex * 20}%)`,
              width: `${logos.length * 25}%`
            }}
          >
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '12%' }}
              >
               {/* MOSTAR TEXTO <div className="text-3xl font-bold text-gray-700">{logo.name}</div> */}
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-28 object-contain transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;