// ui/automatizacion/projectAutoVista.tsx
import { GenericCards } from '../componentes_generales/GenericCards';

// Datos compartidos (se usan en listado y detalles)
export const devsProjects = [
  {
      
    id: 1,
    title: 'Sistema administración de Consultas',
    description: 'Sistema de administración de consultas con códigos médicos, instrucciones de dosificación y datos municipales administrativos',
    mainimage: '/images/thumbnails/thumbnail5.png',
    gallery: ['/images/proyectos/SystemFarm.png'],
    slug: 'sistema-administracion-consultas',
},
{
  
    id: 2,
    title: 'Sistema de Punto de Venta',
    description: 'Sistema POS para paletería La Michoacana: gestiona ventas de paletas, nieves y aguas con control de inventario y precios.',
    mainimage: '/images/thumbnails/thumbnail4.png',
    gallery: ['/images/proyectos/SystemFarm.png'],
    slug: 'sistema-punto-venta',
},
{
    
    id: 3,
    title: 'Sistema de administración de Becas',
    description: 'Sistema de Administración de Becas: gestión integral para registro, seguimiento y asignación de apoyos educativos.',
    mainimage: '/images/thumbnails/thumbnail3.png',
    gallery: ['/images/proyectos/SystemFarm.png'],
    slug: 'sistema-administracion-becas',
},
];

export default function devProjects() {
  return (
    <div className='bg-blanco-100 p-4'>
      <h1 className='text-2xl text-blue-950 font-bold text-center pt-3'>Proyectos</h1>
      <GenericCards items={devsProjects} basePath="desarrollo" />
    </div>
  );
}