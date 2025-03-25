'use client'
import { useState } from "react";
import Image from 'next/image';


export function Button({ children, ariaLabel }) {
    return (
      <button 
        style={{
          fontFamily: 'var(--font-montserrat)', // o 'var(--font-merriweather)'
          fontWeight: 400 // Puedes usar 300, 400, 700, 900
        }}
        className="bg-footernav-100 text-darktext-100 py-2 px-4 rounded-full"
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }


export function Btnservices(){
   return <Button ariaLabel="Servicios">Servicios</Button>;
 }

export function BtnUs(){
  return <Button ariaLabel="Sobre Nosotros">Sobre Nosotros</Button>;
}

export function Btncontact(){
  return <Button ariaLabel="Contacto">Contacto</Button>;
}

export function NavButtons() {
  return (
      <div className="flex gap-[1.25rem]">
          <Btnservices />
          <BtnUs />
          <Btncontact />
      </div>
  );
}

export function Logo(){
    return(
        <div className="w-full h-10 flex items-center">
                <Image
                src="/images/logoP.png"
                alt="Logo Insoel"
                width={128} // Ajusta el tamaño en x
                height={64} // Ajusta el tamaño  en y
            />
            <span className="text-xl font-bold text-gray-800"></span>
      </div>
    );
}


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Alternar entre abrir y cerrar el menú
  };

  const closeMenu = () => {
      setIsMenuOpen(false); // Cerrar el menú
  };

  return (
      <section className="bg-footernav-100 w-full">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-4">
              {/* Logo */}
              <div className="h-[2rem] w-auto">
                  <Logo />
              </div>

              {/* Menu */}
              <button
                  onClick={toggleMenu}
                  className="md:hidden focus:outline-none"
                  aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                  {isMenuOpen ? (
                      <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                          />
                      </svg>
                  ) : (
                      <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"
                          />
                      </svg>
                  )}
              </button>

              {/* Menú en desktop) */}
              <div className="hidden md:flex gap-[1.25rem]">
                  <NavButtons />
              </div>
          </div>

          {/* Menú en (visible en móviles) */}
          <div
              className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-footernav-100 w-full px-6 pb-4 transition-all duration-300 ease-in-out`}
          >
              <NavButtons closeMenu={closeMenu} />
          </div>
      </section>
  );
}