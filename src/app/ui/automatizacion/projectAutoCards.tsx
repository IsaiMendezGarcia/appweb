'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Definimos el tipo para los proyectos
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  // Puedes añadir más propiedades si es necesario
  // Ejemplo: tags: string[];
};

// Props del componente
type ProjectCardsProps = {
  projects: Project[];
};

const ProjectAutoCards = ({ projects }: ProjectCardsProps) => {
  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage: number = 6; // Número de proyectos por página

  // Calcular proyectos actuales
  const indexOfLastProject: number = currentPage * projectsPerPage;
  const indexOfFirstProject: number = indexOfLastProject - projectsPerPage;
  const currentProjects: Project[] = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Cambiar página
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8 bg-blanco-100 text-gray-800">
      {/* Lista de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Imagen del proyecto */}
            <div className="relative h-56 w-full">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={currentProjects.indexOf(project) < 3} // Prioriza las primeras imágenes
              />
            </div>
            
            {/* Contenido de la tarjeta */}
            <div className="p-6">
            <div> 
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>
              <div>
                  <p className="text-blue-950 mb-4 line-clamp-3">{project.description}</p>
              </div>
              <div className='flex justify-end pt-5'>
                  {/* Botón Ver más */}
                  <Link 
                   href={`/projects/${project.id}`} //ruta dinámica para cada proyecto
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-8 rounded-full transition-colors duration-300"
              >
                      Ver más
                    </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      {projects.length > projectsPerPage && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-end gap-1">
            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Ir a página ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProjectAutoCards;