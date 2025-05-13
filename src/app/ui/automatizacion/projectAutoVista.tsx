// ui/automatizacion/projectAutoVista.tsx
import { GenericCards } from '../componentes_generales/GenericCards';


export const autoProjects = [
  {
    slug: 'panel-de-control-biorreactor',
    id: 1,
    title: 'Panel de control en Biorreactor',
    description: 'Nos comprometemos a ofrecer soluciones integrales y eficientes, aplicando innovación, eficiencia y viabilidad. Colaboramos con la UNAM-Querétaro, el Tecnológico de Monterrey y la empresa SOLENA en la automatización de un biorreactor para producir hidrógeno como energía alternativa, integrando un panel de control. Este proyecto multidisciplinario combinó el desarrollo tecnológico de ambas instituciones, mientras que SOLENA facilitó la infraestructura necesaria. INSOEL actuó como enlace entre la investigación y la industria, implementando el prototipo y llevándolo a la realidad, con un sistema que sigue operativo actualmente.',
    mainimage: '/images/thumbnails/thumbnail1.png',
    gallery: ['/images/proyectos/Bio1.jpg', '/images/proyectos/Bio2.jpg', '/images/proyectos/Bio3.jpg'],
  }
,
  {
    slug: 'dinamometro',
    id: 2,
    title: 'Dinamómetro',
    description: 'La Unidad de Alta Tecnología (UAT) de la UNAM desarrolló una herramienta para investigación en motores de combustión, construyendo un dinamómetro con un motor de motocicleta y un freno hidráulico. INSOEL contribuyó diseñando y fabricando componentes clave como la instrumentación de sensores, adquisición de datos, interfaz gráfica, mandos de control y organización del arnés del motor, participando activamente en todas las fases del proyecto, incluyendo ensamblaje, pruebas y ajustes. El proyecto, que incluyó innovaciones patentables, buscó fomentar el desarrollo de tecnologías y combustibles alternativos, aunque los detalles técnicos específicos no se divulgan debido al proceso de patente.',
    mainimage: '/images/thumbnails/thumbnail2.png',
    gallery: ['/images/proyectos/dina1.jpg' , '/images/proyectos/dina2.jpg', '/images/proyectos/dina3.jpg'],
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
