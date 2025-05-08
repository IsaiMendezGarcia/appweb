// ui/automatizacion/projectAutoVista.tsx
import { GenericCards } from '../componentes_generales/GenericCards';

// Datos compartidos (se usan en listado y detalles)
export const autoProjects = [
  {
    slug: 'panel-de-control-biorreactor',
    id: 1,
    title: 'Panel de control en Biorreactor',
    description: 'Implementacíon un sistema automatizado en un biorreactor para producción de hidrógeno, integrando investigación y desarrollo industrial',
    mainimage: '/images/thumbnails/thumbnail1.png',
    gallery: [],
  }
,
  {
    slug: 'dinamometro',
    id: 2,
    title: 'Dinamómetro',
    description: 'Desarrollo de un dinamómetro innovador para probar motores, colaboración con UNAM e INSOEL',
    mainimage: '/images/thumbnails/thumbnail2.png',
    gallery: [],
  },
];

export default function ProjectAutoVista() {
  return (
    <div className='bg-blanco-100 p-4'>
      <h1 className='text-2xl text-blue-950 font-bold text-center pt-3 '>Proyectos</h1>
      <GenericCards items={autoProjects} basePath="automatizacion" />
    </div>
  );
}
