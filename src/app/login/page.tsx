import Navbarcuerpo from "../ui/componentes_generales/navbarcuerpo";
import Footer from "../ui/dashboard/footer";
import Vistalogin from "../ui/login/vistalogin";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarcuerpo />
      <main className="flex-grow">
       <Vistalogin />
      </main>
    </div>
  );
}