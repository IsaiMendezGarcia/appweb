import Image from 'next/image';

export default function Fundadores() {
    return (
        <div className="relative w-full min-h-19">
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/fondo3.png" 
                alt="Fondo Fundadores"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="opacity-60" 
            />
            <div className="absolute inset-0 bg-black/10"></div> {/* Opcional: overlay adicional */}
        </div>
        
        <div className="relative z-10 p-6 text-white">  {/* z-10 para estar sobre el fondo */}
            <p className="text-lg font-medium">  {/* Estilo de texto sin opacidad */}
                En INSOEL, lideramos la automatización con innovación y eficiencia.
                Integramos tecnología avanzada para optimizar procesos, transformar industrias y acelerar el progreso empresarial.
                Nuestras soluciones no solo mejoran el rendimiento,
                sino que definen el futuro de la automatización.
            </p>
            <p className="mt-4 font-bold">INSOEL - Automatización redefinida</p>
            
            <div className="text-center mt-8">
                <button className="bg-skyblue-100 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center">
                    FUNDADORES
                </button>
            </div>
        </div>
    </div>
    );
}