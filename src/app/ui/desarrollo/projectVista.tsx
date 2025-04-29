import { JSX } from 'react';
import { GenericCards } from '../../ui/componentes_generales/GenericCards';

export default function ProjectAutoVista(): JSX.Element {
  const autoProjects = [
    {
      slug: 'sistema-administracion-consultas',
      id: 1,
      title: 'Sistema administración de Consultas',
      description: 'Sistema de administración de consultas con códigos médicos, instrucciones de dosificación y datos municipales administrativos',
      image: '/images/Test.jpg',
  },
  {
    slug: 'sistema-punto-venta',
      id: 2,
      title: 'Sistema de Punto de Venta',
      description: 'Sistema POS para paletería La Michoacana: gestiona ventas de paletas, nieves y aguas con control de inventario y precios.',
      image: '/images/Test.jpg',
  },
  {
      slug: 'sistema-administracion-becas',
      id: 3,
      title: 'Sistema de administración de Becas',
      description: 'Sistema de Administración de Becas: gestión integral para registro, seguimiento y asignación de apoyos educativos.',
      image: '/images/Test.jpg',
  },
  ] 
  
  return (
    <main>
       <div className='bg-blanco-100 p-4'>
      <h1 className='text-2xl text-blue-950 font-bold text-center pt-3'>Proyectos de Automatización</h1>
         <GenericCards 
           items={autoProjects} 
           basePath="automatizacion" 
           />
      </div>
    </main>
  );
};
