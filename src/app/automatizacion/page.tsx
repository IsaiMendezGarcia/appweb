'use client'
import ProjectsAutoPage from "../ui/automatizacion/projectAutoVista";
import Navbarcuerpo from "../ui/componentes_generales/navbarcuerpo";
import Footer from "../ui/dashboard/footer";


export default function AutomatizacionPage() {
    return(
      <div>
       <Navbarcuerpo />
       <ProjectsAutoPage />
       <Footer />
      </div>
    );
  }