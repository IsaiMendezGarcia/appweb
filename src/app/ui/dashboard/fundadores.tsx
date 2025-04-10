"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Fundadores() {
    const [showFounders, setShowFounders] = useState(false);
    const [currentFounder, setCurrentFounder] = useState(0);

    const toggleFounders = () => {
        setShowFounders(!showFounders);
    };

    const nextFounder = () => {
        setCurrentFounder((prev) => (prev === 2 ? 0 : prev + 1));
    };

    const prevFounder = () => {
        setCurrentFounder((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const founders = [
        {
            name: "ING. ALEJANDRO ZENDEJAS",
            role: "Jefe de Instrumentación",
            description: "Ingeniero en comunicaciones y electrónica con una maestría en ingeniería Electrónica Aplicada. Ha desarrollado proyectos de automatización e innovación y actualmente cursa un MBA en Business Analytics.",
            image: "/images/user.png"
        },
        {
            name: "M.I. DAVID BALCAZAR",
            role: "Ingeniero en automatización y electrónica",
            description: "Ingeniero de software con experiencia en desarrollo de sistemas inteligentes y publicaciones en revistas científicas. Apasionado por la programación y la colaboración interdisciplinaria.",
            image: "/images/user.png"
        },
        {
            name: "M.I. EDWIN LARA",
            role: "Ingeniero de Software",
            description: "Ingeniero de software con experiencia en desarrollo de sistemas inteligentes y publicaciones en revistas científicas. Apasionado por la programación y la colaboración interdisciplinaria.",
            image: "/images/user.png"
        }
    ];

    return (
        <div className="relative w-full min-h-19">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/fondo3.png" 
                    alt="Fondo Fundadores"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-60" 
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            <div className="relative z-10 p-6 text-white w-auto h-auto flex items-center justify-center flex-col">
                <div className='w-full max-w-6xl mx-auto'>
                    <p className='text-4xl uppercase p-2 text-center font-medium'>Sobre Nosotros</p>
                    <p className="text-xl font-light p-2 text-center max-w-3xl mx-auto">
                        En INSOEL, lideramos la automatización con innovación y eficiencia.
                        Integramos tecnología avanzada para optimizar procesos, transformar industrias y acelerar el progreso empresarial.
                        Nuestras soluciones no solo mejoran el rendimiento,
                        sino que definen el futuro de la automatización.
                    </p>
                    <p className="mt-4 font-light p-2 text-center text-xl">INSOEL - Automatización redefinida</p>
                    
                    <div className="text-center mt-8">
                        <button 
                            onClick={toggleFounders}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-full transition duration-300 inline-flex items-center mb-3"
                        >
                            {showFounders ? 'OCULTAR FUNDADORES' : 'VER FUNDADORES'}
                        </button>
                    </div>

                    {/* Sección desplegable de fundadores */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFounders ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        {/* Versión desktop - 3 fundadores en grid */}
                        <div className="hidden md:grid grid-cols-3 gap-8 p-6 bg-white/10 backdrop-blur-3xl rounded-lg mt-4">
                            {founders.map((founder, index) => (
                                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name} 
                                        width={300}  
                                        height={300}
                                        className="mx-auto rounded-full"
                                    />
                                    <p className="text-xl font-bold mt-4 text-darktext-100">{founder.name}</p>
                                    <p className="italic text-darktext-100 mt-4">{founder.role}</p>
                                    <p className="mt-4 font-light text-darktext-100">{founder.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Versión móvil - Carrusel */}
                        <div className="md:hidden relative p-6 bg-white/10 backdrop-blur-3xl rounded-lg mt-4">
                            {/* Contenedor del carrusel */}
                            <div className="overflow-hidden">
                                <div 
                                    className="flex transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(-${currentFounder * 100}%)` }}
                                >
                                    {founders.map((founder, index) => (
                                        <div 
                                            key={index}
                                            className="flex-shrink-0 w-full flex flex-col items-center text-center p-6 bg-white rounded-lg"
                                        >
                                            <Image
                                                src={founder.image}
                                                alt={founder.name} 
                                                width={300}  
                                                height={300}
                                                className="mx-auto rounded-full"
                                            />
                                            <p className="text-xl font-bold mt-4 text-darktext-100">{founder.name}</p>
                                            <p className="italic text-darktext-100 mt-4">{founder.role}</p>
                                            <p className="mt-4 font-light text-darktext-100 text-lg">{founder.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Controles del carrusel */}
                            <div className="flex justify-between items-center mt-6">
                                <button 
                                    onClick={prevFounder}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300"
                                >
                                    &larr;
                                </button>
                                
                                <div className="flex space-x-2">
                                    {founders.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentFounder(index)}
                                            className={`w-3 h-3 rounded-full ${currentFounder === index ? 'bg-white' : 'bg-gray-400'}`}
                                            aria-label={`Ir al fundador ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                
                                <button 
                                    onClick={nextFounder}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300"
                                >
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}