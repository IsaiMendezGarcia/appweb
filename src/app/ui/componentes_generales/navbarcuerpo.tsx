'use client'
import { useState } from "react";
import Image from 'next/image';



export function Logo(){
  return(
    <div className="w-full h-10 flex items-center">
      <Image
        src="/images/logoP.png"
        alt="Logo Insoel"
        width={128}
        height={64}
      />
    </div>
  );
}

export default function Navbarcuerpo() {

  return (
    <section className="bg-footernav-100 w-full "> {/*sticky top-0 z-50 Si quiero fijar mi navbar*/}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-4">
        {/* Logo con scroll al inicio */}
        <a href="./" className="flex items-center">
        <div className="h-[2rem] w-auto cursor-pointer">
          <Logo />
        </div>
        </a>
        {/* Menú desktop */}
        <div className="hidden md:flex gap-[1.25rem]">
      </div>
      </div>
    </section>
  );
}