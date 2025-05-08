'use client'
import { useState } from "react";
import Image from 'next/image';

// Componente Button modificado para aceptar onClick
export function Button({ children, ariaLabel, onClick }) {
  return (
    <button 
      style={{
        fontFamily: 'var(--font-montserrat)', 
        fontWeight: 400,
        fontSize: '1rem'
      }}
      className="bg-footernav-100 text-darktext-100 py-1 px-4 rounded-full hover:bg-gray-300 transition-colors"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Btnservices({ onClick }){
  return <Button ariaLabel="Servicios" onClick={onClick}>Servicios</Button>;
}

export function BtnUs({ onClick }){
  return <Button ariaLabel="Sobre Nosotros" onClick={onClick}>Sobre Nosotros</Button>;
}

export function Btncontact({ onClick }){
  return <Button ariaLabel="Contacto" onClick={onClick}>Contacto</Button>;
}

export function NavButtons({ closeMenu, scrollToSection }) {
  return (
    <div className="flex gap-[1.25rem]">
      <Btnservices onClick={() => {
        scrollToSection('servicios');
        closeMenu && closeMenu();
      }} />
      <BtnUs onClick={() => {
        scrollToSection('fundadores');
        closeMenu && closeMenu();
      }} />
      <Btncontact onClick={() => {
        scrollToSection('contacto');
        closeMenu && closeMenu();
      }} />
    </div>
  );
}

export function Logo(){
  return(
    <div className="w-full h-10 flex items-center">
      <Image
        src="/images/logos/logoP.png"
        alt="Logo Insoel"
        width={128}
        height={64}
      />
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Ajusta el offset según la altura de tu navbar
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Función para scroll al inicio (logo click)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-footernav-100 w-full "> {/*sticky top-0 z-50 Si quiero fijar mi navbar*/}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-4">
        {/* Logo con scroll al inicio */}
        <div className="h-[2rem] w-auto cursor-pointer" onClick={scrollToTop}>
          <Logo />
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-[1.25rem]">
          <NavButtons scrollToSection={scrollToSection} closeMenu={undefined} />
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-footernav-100 w-full px-6 pb-4`}>
        <NavButtons closeMenu={closeMenu} scrollToSection={scrollToSection} />
      </div>
    </section>
  );
}