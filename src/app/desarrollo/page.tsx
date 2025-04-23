'use client'
import Navbarproyectos from "../ui/componentes_generales/navbarcuerpo";
import Footer from "../ui/dashboard/footer";
import ProjectsPage from "../ui/desarrollo/projectVista";


export default function DesarrolloPage() {
    return(
      <div>
       <Navbarproyectos />
       <ProjectsPage />
       <Footer />
      </div>
    );
}