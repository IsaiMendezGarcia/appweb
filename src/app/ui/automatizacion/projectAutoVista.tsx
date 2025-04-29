import { JSX } from 'react';
import { GenericCards } from '../../ui/componentes_generales/GenericCards';

export default function ProjectAutoVista(): JSX.Element {
  const autoProjects = [
    {
      id: 1,
      title: 'Integración de un panel de control dentro de un Biorreactor',
      description: 'Biorreactor automatizado para hidrógeno colaboración con  UNAM, Tec y SOLENA.',
      image: '/images/Test.jpg',
      slug: 'panel-de-control-biorreactor',
  },
  {
      id: 2,
      title: 'Dinamómetro',
      description: 'UNAM e INSOEL desarrollaron un dinamómetro innovador para probar motores, con instrumentación avanzada y potencial de patente.',
      image: '/images/Test.jpg',
      slug: 'dinamometro',
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
