// app/automatizacion/page.tsx
'use client';
import Navbarcuerpo from '../ui/componentes_generales/navbarcuerpo';
import Footer from '../ui/dashboard/footer';
import  ProjectAutoVista  from '../ui/automatizacion/projectAutoVista';

export default function AutomatizacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarcuerpo />
      <main className="flex-grow">
        <ProjectAutoVista />
      </main>
      <Footer />
    </div>
  );
}