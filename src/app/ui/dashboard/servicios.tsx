import Image from 'next/image';
import Link from 'next/link';

export default function Servicios() {
    return (
        <div className="bg-footernav-100 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
<div className="max-w-7xl mx-auto">
    <h2 className="text-4xl lg:text-4xl font-bold text-center mb-8 lg:mb-16">NUESTROS SERVICIOS</h2>
    <div className="flex flex-col-reverse lg:flex-row lg:gap-10 items-center bg-gray-300 lg:bg-transparent rounded-2xl lg:rounded-none p-6 lg:p-0"> 
        {/* Contenido de texto - orden primero en móvil */}
        <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:pr-12 order-1 lg:order-none p-5">
            <div className="mb-3 lg:mb-4">
                <h3 className="text-4xl font-semibold text-center lg:text-right text-white">Desarrollo Tecnológico</h3>
                <p className="text-xl text-center lg:text-right text-white mt-1 mb-3"></p>
            </div>
            
            <p className="text-2xl text-center lg:text-right text-white leading-tight mb-4">
                Trabajamos en la creación de soluciones personalizadas con innovación y participando en el avance del mundo digital
            </p>
            
            <div className="flex justify-center lg:justify-end mt-2">
            <Link href="/desarrollo">
                <button className="bg-sky-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 text-lg uppercase">
                    Leer Más
                </button>
            </Link>
            </div>
        </div>

        {/* Imagen - orden segundo en móvil */}
        <div className="w-2xs lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-none ">
            <div className="flex justify-center">
                <Image
                    src="/images/icon-dashboard1.png"
                    alt="Icono Dashboard"
                    width={300}
                    height={300}
                    className="lg:w-[400px] lg:h-[400px]"
                />
            </div>
        </div>
    </div>
</div>
         {/* Ficha 2 */}
         <div className="max-w-7xl mx-auto mt-2 mb-2 ">
    <div className="flex flex-col-reverse lg:flex-row lg:gap-100 items-center bg-gray-300 lg:bg-transparent rounded-2xl lg:rounded-none p-6 lg:p-0"> 
        {/* Imagen - orden segundo en móvil */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-none ">
            <div className="flex justify-center">
                <Image
                    src="/images/icon-dashboard2.png"
                    alt="Icono Dashboard"
                    width={300}
                    height={300}
                    className="lg:w-[400px] lg:h-[400px]"
                />
            </div>
        </div>
        
        {/* Contenido de texto - orden primero en móvil */}
        <div className="w-full lg:w-auto space-y-1 lg:space-y-2 lg:pr-12 order-1 lg:order-none  p-6">
            <h3 className="text-4xl font-semibold text-center lg:text-left text-white mb-2">Automatización</h3>
            <div className="text-white text-center lg:text-left">
                <p className="text-2xl leading-tight mb-1">Desbloqueando el Potencial Empresarial</p>
                <p className="text-2xl leading-tight mb-4">Las Ventajas Estratégicas de la Automatización en Tu Negocio</p>
            </div>
            <div className="flex justify-center lg:justify-start">
                <Link href="/automatizacion">
                <button className="bg-sky-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 text-lg uppercase">
                    LEER MÁS
                </button>
                </Link>
            </div>
        </div>
    </div>
    </div>
    </div>
);
}