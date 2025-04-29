import ProjectAutoCards from '../automatizacion/projectAutoCards';
interface Project {
  title: string;
  description: string;
  image: string;
  id?: number; // Optional id property
}

const projectsData = [
    {
        id: 1,
        title: 'Integración de un panel de control dentro de un Biorreactor',
        description: 'Biorreactor automatizado para hidrógeno colaboración con  UNAM, Tec y SOLENA.',
        image: '/images/Test.jpg',
    },
    {
        id: 2,
        title: 'Dinamómetro',
        description: 'UNAM e INSOEL desarrollaron un dinamómetro innovador para probar motores, con instrumentación avanzada y potencial de patente.',
        image: '/images/Test.jpg',
    },
] satisfies Project[]; // Aseguramos que cumple con el tipo Project

const ProjectsAutoPage = () => {
  return (
    <main className='bg-blanco-100 py-5'>
      <h1 className="text-3xl font-bold text-center text-blue-950">Nuestros Proyectos</h1>
      <ProjectAutoCards projects={projectsData} />
    </main>
  );
};

export default ProjectsAutoPage;