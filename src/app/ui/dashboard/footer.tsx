import Image from 'next/image';
import { useState, useEffect} from 'react';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Función para manejar el envío del formulario (solo frontend)
    const handleSubmit = async (formData: any) => {
        setIsSubmitting(true);
        console.log('Datos del formulario (simulación frontend):', formData);
        
        // Simulamos un retraso de red
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsModalOpen(false);
        alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
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
                            <a 
                                href="https://www.facebook.com/profile.php?id=100093302174230" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:opacity-90 transition-opacity"
                            >
                                <Image
                                    src="/images/face-ico.png"
                                    alt="Facebook"
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/insoel-mexico/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:opacity-90 transition-opacity"
                            >
                                <Image
                                    src="/images/linke-ico.png"
                                    alt="LinkedIn"
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 md:w-12 md:h-12"
                                />
                            </a>
                        </div>
                        
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-darkblue-100 hover:bg-blue-900 text-white font-medium rounded-full px-10 py-2 text-lg transition-colors shadow-md"
                        >
                            Escríbenos
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Pie inferior */}
            <div className="bg-footernav-100 py-4 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-white text-lg md:text-lg mb-4 sm:mb-0">
                        © {new Date().getFullYear()} INSOEL™. Todos los derechos reservados.
                    </p>
                    <button 
                        onClick={scrollToTop}
                        className="px-5 py-2 bg-footernav-100 hover:bg-gray-300 text-white rounded-full transition-colors"
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

            {/* Modal de Contacto */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        {/* Encabezado */}
                        <div className="sticky top-0 bg-white z-10 flex justify-between items-center border-b p-6">
                            <h2 className="text-2xl font-bold text-gray-800">Contacta con INSOEL</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                aria-label="Cerrar modal"
                                disabled={isSubmitting}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Formulario */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = {
                                fullName: (e.currentTarget.elements.namedItem('fullName') as HTMLInputElement).value,
                                company: (e.currentTarget.elements.namedItem('company') as HTMLInputElement).value,
                                email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
                                phone: (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value,
                                service: (e.currentTarget.elements.namedItem('service') as HTMLSelectElement).value,
                                projectDescription: (e.currentTarget.elements.namedItem('projectDescription') as HTMLTextAreaElement).value
                            };
                            handleSubmit(formData);
                        }} className="p-6 space-y-4">
                            
                            {/* Campos del formulario */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre y Apellido <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Correo <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Teléfono <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                    Servicio de interés <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
                                    disabled={isSubmitting}
                                >
                                    <option value="">Seleccione un servicio</option>
                                    <option value="Automatizacion">Automatizacion</option>
                                    <option value="Desarrollo">Desarrollo Tecnologico</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                                    Descripción del Proyecto <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="projectDescription"
                                    name="projectDescription"
                                    rows={4}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            
                            {/* Botones */}
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
                                    disabled={isSubmitting}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-darkblue-100 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors disabled:opacity-70"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : 'Enviar Mensaje'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </footer>
    );
}