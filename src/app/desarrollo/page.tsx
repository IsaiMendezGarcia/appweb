'use client'
import Navbarproyectos from "../ui/componentes_generales/navbarcuerpo";
import Footer from "../ui/dashboard/footer";
import ProjectVista from "../ui/desarrollo/projectVista";


export default function DesarrolloPage() {
    return(
        <div className="flex flex-col h-screen">
            <Navbarproyectos />
            <div className="flex-grow">
                <ProjectVista />
            </div>
            <Footer />
        </div>
    );
}

