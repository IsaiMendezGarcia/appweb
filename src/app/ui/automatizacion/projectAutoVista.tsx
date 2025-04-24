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
        title: 'Proyecto 1',
        description: 'Descripción detallada del primer proyecto. Este proyecto implementa soluciones innovadoras para problemas complejos.',
        image: '/images/Test.jpg',
    },
    {
        id: 2,
        title: 'Proyecto 2',
        description: 'Descripción detallada del segundo proyecto. Este proyecto se centra en la sostenibilidad y el medio ambiente.',
        image: '/images/Test.jpg',
    },
    {
        id: 3,
        title: 'Proyecto 3',
        description: 'Descripción detallada del tercer proyecto. Este proyecto utiliza tecnología avanzada para mejorar la eficiencia.',
        image: '/images/Test.jpg',
    },
    {
        id: 4,
        title: 'Proyecto 4',
        description: 'Descripción detallada del cuarto proyecto. Este proyecto busca fomentar la educación y el aprendizaje continuo.',
        image: '/images/Test.jpg',
    },
    {
        id: 5,
        title: 'Proyecto 5',
        description: 'Descripción detallada del quinto proyecto. Este proyecto promueve la inclusión y la diversidad en la tecnología.',
        image: '/images/Test.jpg',
    },
    {
        id: 6,
        title: 'Proyecto 6',
        description: 'Descripción detallada del sexto proyecto. Este proyecto se enfoca en la salud y el bienestar de las comunidades.',
        image: '/images/Test.jpg',
    },

] satisfies Project[]; // Aseguramos que cumple con el tipo Project

const ProjectsAutoPage = () => {
  return (
    <main className='bg-blanco-100 py-5'>
      <h1 className="text-3xl font-bold text-center text-gray-800">Nuestros Proyectos</h1>
      <ProjectAutoCards projects={projectsData} />
    </main>
  );
};

export default ProjectsAutoPage;