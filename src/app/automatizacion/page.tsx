'use client'
import Navbarcuerpo from "../ui/componentes_generales/navbarcuerpo";
import Footer from "../ui/dashboard/footer";
import Navbar from "../ui/dashboard/navbar";

export default function AutomatizacionPage() {
    return(
      <div>
       <Navbarcuerpo />
       <div className="h-lvh">
        <p>Cuerpo de la pag</p>
       </div>
       <Footer />
      </div>
    );
  }