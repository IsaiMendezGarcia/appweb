import ProjectCards from '../desarrollo/projectCards';
interface Project {
  title: string;
  description: string;
  image: string;
  id?: number; // Optional id property
}

const projectsData = [
    {
        id: 1,
        title: 'Sistema administración de Consultas',
        description: 'Sistema de administración de consultas con códigos médicos, instrucciones de dosificación y datos municipales administrativos',
        image: '/images/Test.jpg',
    },
    {
        id: 2,
        title: 'Sistema de Punto de Venta',
        description: 'Sistema POS para paletería La Michoacana: gestiona ventas de paletas, nieves y aguas con control de inventario y precios.',
        image: '/images/Test.jpg',
    },
    {
        id: 3,
        title: 'Sistema de administración de Becas',
        description: 'Sistema de Administración de Becas: gestión integral para registro, seguimiento y asignación de apoyos educativos.',
        image: '/images/Test.jpg',
    },
] satisfies Project[]; // Aseguramos que cumple con el tipo Project

const ProjectsPage = () => {
  return (
    <main className='bg-blanco-100 py-5'>
      <h1 className="text-3xl font-bold text-center text-blue-950 justify-center">Nuestros Proyectos</h1>
      <ProjectCards projects={projectsData} />
    </main>
  );
};

export default ProjectsPage;