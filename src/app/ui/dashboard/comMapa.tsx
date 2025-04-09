import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Carga diferida del mapa con mejor manejo de estado de carga
const Map = dynamic(
  () => import('./mapView'), 
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <p className="text-lg text-blue-600">Cargando mapa...</p>
      </div>
    )
  }
);

export default function SeccionMap() {
  return (
    <section 
      className="bg-darkblue-100 text-white py-12 px-4 md:px-8"
      aria-labelledby="mapa-proyectos-titulo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-4xl font-medium mb-4 uppercase"
          >
            Mapa de proyectos en el país
          </h2>
        </div>

        <div className="bg-darkblue-100 flex flex-col items-center gap-10 lg:flex-row lg:gap-40 ">
            <div>
                <p className="text-2xl font-normal text-center md:text-3xl mx-6">
                Te invitamos a descubrir las diversas ubicaciones dentro de nuestro 
                país donde hemos dejado nuestra marca. Cada región, cada ciudad es 
                un testimonio de nuestro compromiso con la excelencia y la innovación 
                en el ámbito nacional.
                </p>
            </div>
          {/* Suspense para mejor manejo de estados de carga */}
          <Suspense fallback={
            <div className="flex items-center justify-center h-96">
              <p>Cargando mapa interactivo...</p>
            </div>
          }>
            <Map />
          </Suspense>
        </div>
      </div>
    </section>
  );
}