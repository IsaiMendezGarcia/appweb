// ui/automatizacion/projectAutoVista.tsx
import { GenericCards } from '../componentes_generales/GenericCards';

// Datos compartidos (se usan en listado y detalles)
export const devsProjects = [
  {
      
    id: 1,
    title: 'Sistema administración de Consultas',
    description: 'Sistema de gestión médica diseñado para optimizar el registro y seguimiento de consultas clínicas. Esta herramienta permite a profesionales de la salud documentar de manera eficiente información relevante de los pacientes, incluyendo diagnósticos, prescripciones y datos clave como peso, edad y condiciones médicas.',
    mainimage: '/images/thumbnails/thumbnail5.png',
    gallery: ['/images/proyectos/farmacia.png'],
    slug: 'sistema-administracion-consultas',
},
{
  
    id: 2,
    title: 'Sistema de Punto de Venta',
    description: 'Sistema de punto de venta (POS) diseñado para gestionar pedidos en negocios de helados, paletas y bebidas. Esta herramienta permite a los empleados registrar productos, calcular totales y procesar pagos de manera rápida y eficiente, optimizando la atención al cliente en establecimientos como neverías o tiendas de postres.',
    mainimage: '/images/thumbnails/thumbnail4.png',
    gallery: ['/images/proyectos/pos.png'],
    slug: 'sistema-punto-venta',
},
{
    
    id: 3,
    title: 'Sistema de administración de Becas',
    description: 'es una herramienta administrativa diseñada para monitorear y analizar el proceso de solicitudes y asignación de becas. Este sistema permite visualizar métricas clave, estados de solicitudes y tendencias mensuales, facilitando la toma de decisiones en instituciones educativas u organizaciones que manejan programas de apoyo financiero.',
    mainimage: '/images/thumbnails/thumbnail3.png',
    gallery: ['/images/proyectos/becas.png'],
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