'use client'
import Navbarcuerpo from "../ui/componentes_generales/navbarcuerpo";
import Footer from "../ui/dashboard/footer";
import ProjectAutoVista from "../ui/automatizacion/projectAutoVista";


export default function AutomatizacionPage() {
    return(
      <div>
       <Navbarcuerpo />
       <ProjectAutoVista />
       <Footer />
      </div>
    );
  }