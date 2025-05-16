"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function Fundadores() {
  // Window width tracking
  const [windowWidth, setWindowWidth] = useState(1024); // Default desktop width
  
  // Calculate responsive values
  const slidesToShow = windowWidth < 768 ? 1 : 3;
  const slideWidthPercentage = 100 / slidesToShow;
  const containerWidthPercentage = 100 / (windowWidth < 768 ? 8 : 8);

  // Track window width
  useEffect(() => {
    // Only run on client side
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // States for Fundadores
  const [currentFounder, setCurrentFounder] = useState(0);
  const founders = [
    {
      name: "ING. ALEJANDRO ZENDEJAS",
      role: "Jefe de Instrumentación",
      description: "Ingeniero en comunicaciones y electrónica con una maestría en ingeniería Electrónica Aplicada. Ha desarrollado proyectos de automatización e innovación y actualmente cursa un MBA en Business Analytics.",
      image: "/images/fundadores/alejandro.png"
    },
    {
      name: "MBA. M.I. DAVID BALCAZAR",
      role: "Ingeniero en automatización y electrónica",
      description: "Ingeniero de software con experiencia en desarrollo de sistemas inteligentes y publicaciones en revistas científicas. Apasionado por la programación y la colaboración interdisciplinaria.",
      image: "/images/fundadores/David1.png"
    },
    {
      name: "M.I. EDWIN LARA",
      role: "Ingeniero de Software",
      description: "Ingeniero de software con experiencia en desarrollo de sistemas inteligentes y publicaciones en revistas científicas. Apasionado por la programación y la colaboración interdisciplinaria.",
      image: "/images/fundadores/edwin2.png"
    },
  ];

  // States and data for team
  const team = [ 
    {
      id: 1,
      name: "ING. Efrain G. Samano Mora",
      role: "Ingeniero en Electronica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/equipo/efrain.png"
    }, 
    {
      id: 2,
      name: "ING. Isai Mendez Garcia",
      role: "Ingeniero de Software",
      description: "Ingeniero de software con experiencia en desarrollo de sistemas inteligentes y publicaciones en revistas científicas.",
      image: "/images/equipo/isai.png"
    }, 
    {
      id: 3,
      name: "LAD. Itzel Adilene Zavala Gaytán",
      role: "Ingeniero de Software",
      description: "Ingeniero de software con experiencia en desarrollo de sistemas inteligentes y publicaciones en revistas científicas.",
      image: "/images/equipo/itzel.png"
    },
    {
      id: 4,
      name: "Jose Guadalupe Torres Diaz",
      role: "Programador",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/equipo/jose.png"
    }
  ];

  // Team carousel
  const [showTeam, setShowTeam] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const duplicatedTeam = [...team, ...team]; // For infinite effect

  // Auto-scroll
  useEffect(() => {
    if (!showTeam) return;
    
    intervalRef.current = setInterval(() => {
      setCurrentTeam(prev => (prev + 1) % team.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [showTeam, team.length]);

  // Navigation handlers
  const nextFounder = () => setCurrentFounder(prev => (prev + 1) % founders.length);
  const prevFounder = () => setCurrentFounder(prev => (prev - 1 + founders.length) % founders.length);
  const nextTeam = () => setCurrentTeam(prev => (prev + 1) % team.length);
  const prevTeam = () => setCurrentTeam(prev => (prev - 1 + team.length) % team.length);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fondo.png" 
          alt="Fondo"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
    
      {/* Content */}
      <div className="relative z-10 p-4 md:p-6 text-white w-auto h-auto flex items-center justify-center flex-col">
        <div className='w-full max-w-6xl mx-auto'>
          <p className='text-2xl md:text-4xl uppercase p-2 text-center font-medium'>Sobre Nosotros</p>
          <p className="text-sm md:text-xl font-light p-2 text-center max-w-3xl mx-auto">
            En INSOEL, lideramos la automatización con innovación y eficiencia.
            Integramos tecnología avanzada para optimizar procesos, transformar industrias y acelerar el progreso empresarial.
          </p>
          
          {/* Founders - Desktop version */}
          <div className="hidden md:grid grid-cols-3 gap-4 md:gap-8 p-4 md:p-6 bg-white/10 backdrop-blur-3xl rounded-lg mt-4">
            {founders.map((founder, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg">
                <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-lg md:text-xl font-bold mt-3 md:mt-4 text-darktext-100">{founder.name}</p>
                <p className="italic text-sm md:text-base text-darktext-100 mt-1 md:mt-2">{founder.role}</p>
                <p className="mt-2 md:mt-3 font-light text-darktext-100 text-xs md:text-base">{founder.description}</p>
              </div>
            ))}
          </div>

          {/* Founders - Mobile version */}
          <div className="md:hidden relative p-4 bg-white/10 backdrop-blur-3xl rounded-lg mt-4">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentFounder * 100}%)` }}>
                {founders.map((founder, index) => (
                  <div key={index} className="flex-shrink-0 w-full flex flex-col items-center text-center p-4 bg-white rounded-lg">
                    <div className="w-28 h-28 relative rounded-full overflow-hidden">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-lg font-bold mt-3 text-darktext-100">{founder.name}</p>
                    <p className="italic text-sm text-darktext-100 mt-1">{founder.role}</p>
                    <p className="mt-2 font-light text-darktext-100 text-xs">{founder.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button 
                onClick={prevFounder} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 md:py-2 md:px-4 rounded-full"
                aria-label="Anterior fundador"
              >
                &larr;
              </button>
              <div className="flex space-x-1">
                {founders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFounder(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentFounder === index ? 'bg-white' : 'bg-gray-400'}`}
                    aria-label={`Ir al fundador ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextFounder} 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 md:py-2 md:px-4 rounded-full"
                aria-label="Siguiente fundador"
              >
                &rarr;
              </button>
            </div>
          </div>

          {/* Team toggle button */}
          <div className="text-center mt-6 md:mt-8">
            <button 
              onClick={() => setShowTeam(!showTeam)}
              className="bg-blue-800 hover:bg-blue-200 text-white text-sm md:text-lg font-medium py-2 px-6 md:py-3 md:px-8 rounded-full transition duration-300"
              aria-label={showTeam ? 'Ocultar equipo' : 'Mostrar equipo'}
            >
              {showTeam ? 'OCULTAR EQUIPO' : 'VER EQUIPO'}
            </button>
          </div>

          {/* Team carousel */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showTeam ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <div className="flex flex-col items-center mt-6 md:mt-8">
              <div className="w-full max-w-6xl relative">
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                      transform: `translateX(-${currentTeam * slideWidthPercentage}%)`,
                      width: `${duplicatedTeam.length * containerWidthPercentage}%`
                    }}
                  >
                    {duplicatedTeam.map((member, index) => (
                      <div key={`${member.id}-${index}`} className="w-full md:w-1/3 px-2 md:px-4 flex-shrink-0">
                        <div className="flex flex-col items-center text-center p-3 md:p-5 rounded-lg bg-white/10 backdrop-blur-md">
                          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden relative">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="text-base md:text-xl font-bold mt-2 md:mt-4 text-white">{member.name}</p>
                          <p className="italic text-xs md:text-base text-white mt-1 md:mt-2">{member.role}</p>
                          <p className="mt-1 md:mt-3 font-light text-white text-xs md:text-sm lg:text-base">{member.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation arrows */}
                <button 
                  onClick={prevTeam}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 md:p-2 rounded-full z-10"
                  aria-label="Anterior miembro del equipo"
                >
                  &larr;
                </button>
                <button 
                  onClick={nextTeam}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 md:p-2 rounded-full z-10"
                  aria-label="Siguiente miembro del equipo"
                >
                  &rarr;
                </button>
              </div>

              {/* Indicators */}
              <div className="flex mt-4 md:mt-6 space-x-1 md:space-x-2">
                {team.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentTeam % team.length === index ? 'bg-white' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}