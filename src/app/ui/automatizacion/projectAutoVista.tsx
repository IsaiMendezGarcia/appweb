// ui/automatizacion/projectAutoVista.tsx
import { GenericCards } from '../componentes_generales/GenericCards';

// Datos compartidos (se usan en listado y detalles)
export const autoProjects = [
  {
    slug: 'panel-de-control-biorreactor',
    id: 1,
    title: 'Panel de control en Biorreactor',
    description: 'Colaboración con UNAM, Tec y SOLENA',
    mainimage: '/images/Test.jpg',
    gallery: [],
  }
,
  {
    slug: 'dinamometro',
    id: 2,
    title: 'Dinamómetro',
    description: 'Desarrollo de un dinamómetro innovador para probar motores, colaboración con UNAM e INSOEL',
    mainimage: '/images/Test.jpg',
    gallery: [],
  },
];

export default function ProjectAutoVista() {
  return (
    <div className='bg-blanco-100 p-4'>
      <h1 className='text-2xl text-blue-950 font-bold text-center pt-3'>Proyectos</h1>
      <GenericCards items={autoProjects} basePath="automatizacion" />
    </div>
  );
}
