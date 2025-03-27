import Image from 'next/image';

export default function Servicios() {
    return (
        <div className="bg-footernav-100 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-16">NUESTROS SERVICIOS</h2>
                
                <div className="flex flex-col-reverse lg:flex-row lg:gap-15 items-center bg-gray-300 lg:bg-transparent rounded-2xl lg:rounded-none p-6 lg:p-0 "> 
                    {/* Contenido de texto - orden primero en móvil */}
                    <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 lg:pr-12 order-1 lg:order-none">
                        <h3 className="text-xl lg:text-2xl font-semibold text-center lg:text-left text-white lg:text-inherit">Desarrollo Tecnológico</h3>
                        <p className="text-base lg:text-lg text-center lg:text-left text-white lg:text-inherit">
                            Trabajamos en la creación de soluciones<br className="hidden sm:block"/>
                            personalizadas con innovación y<br className="hidden sm:block"/>
                            participando en el avance del mundo<br className="hidden sm:block"/>
                            digital.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-skyblue-100 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-4">
                                LEER MÁS
                            </button>
                        </div>
                    </div>

                    {/* Imagen - orden segundo en móvil */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-none">
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
        <div className="max-w-7xl mx-auto mt-4">
                <div className="flex flex-col-reverse lg:flex-row lg:gap-100 items-center bg-gray-300 lg:bg-transparent rounded-2xl lg:rounded-none p-6 lg:p-0 "> 
                    {/* Imagen - orden segundo en móvil */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-none">
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
                                        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 lg:pr-12 order-1 lg:order-none">
                        <h3 className="text-xl lg:text-2xl font-semibold text-center lg:text-left text-white lg:text-inherit">Automatización</h3>
                        <p className="text-base lg:text-lg text-center lg:text-left text-white lg:text-inherit">
                            Desbloqueando el Potencial Empresarial:<br className="hidden sm:block"/>
                            Las Ventajas Estratégicas de la<br className="hidden sm:block"/>
                            Automatizacion en Tu Negocio<br className="hidden sm:block"/>
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <button className="bg-skyblue-100 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-4">
                                LEER MÁS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}