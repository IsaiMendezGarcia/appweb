import Image from 'next/image';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <footer className="bg-blanco-100 w-full">
            {/* Sección de contacto */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl md:text-4xl font-medium text-center text-gray-900 uppercase mb-8">
                    Contacto
                </h2>
                
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                    {/* Logo y dirección */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-6">
                            <Image
                                src="/images/logoP.png"
                                alt="Logo Insoel"
                                width={160}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        
                        <div className="space-y-4 text-center md:text-left">
                            <p className="text-lg md:text-xl text-gray-800">
                                Adolfo Ruíz Cortínez 34. Uriangato, Gto.
                            </p>
                            <p className="text-lg md:text-xl text-gray-800">
                                insoel.ventas@gmail.com
                            </p>
                            <p className="text-lg md:text-xl text-gray-800">
                                Tel. (442) 331 3911
                            </p>
                        </div>
                    </div>
                    
                    {/* Redes sociales */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/profile.php?id=100093302174230" className="hover:opacity-90 transition-opacity">
                                <Image
                                    src="/images/face-ico.png"
                                    alt="Facebook"
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/insoel-mexico/" className="hover:opacity-90 transition-opacity">
                                <Image
                                    src="/images/linke-ico.png"
                                    alt="LinkedIn"
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                        </div>
                        
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-9 py-2 text-lg transition-colors shadow-md">
                            Escríbenos
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Pie inferior */}
            <div className="bg-footernav-100 py-4 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-white text-lg md:text-lg mb-4 sm:mb-0">
                        © {new Date().getFullYear()} INSOEL™. Todos los derechos reservados. {/*Obtener año actual*/}
                    </p>
                    <button 
                        onClick={scrollToTop}
                        className="px-5 py-2 bg-footernav-100 hover:bg-gray-300 text-white rounded-full"
                        aria-label="Volver al inicio"
                    >
                    <Image
                    src="/images/arrow-ico.png"
                    alt="Volver arriba"
                    width={50}
                    height={50}
                    className="w-7 h-7 object-contain"
                     />
                    </button>
                </div> 
            </div>
        </footer>
    );
}