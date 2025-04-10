'use client'
import Footer from "../ui/dashboard/footer";
import Navbar from "../ui/dashboard/navbar";

export default function Page() {
    return(
      <div>
       <Navbar />
       <div className="h-lvh">
        <p>Cuerpo la pag</p>
       </div>
       <Footer />
      </div>
    );
}