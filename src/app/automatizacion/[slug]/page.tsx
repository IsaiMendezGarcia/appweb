// app/automatizacion/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Navbarcuerpo from '../../ui/componentes_generales/navbarcuerpo';
import Footer from '../../ui/dashboard/footer';
import { autoProjects } from '../../ui/automatizacion/projectAutoVista';

export async function generateStaticParams() {
  return autoProjects.map(project => ({
    slug: project.slug
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = autoProjects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-blanco-100">
      <Navbarcuerpo />
      <main className="flex-grow container mx-auto px-4 py-8 ">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-950 mb-6 text-center">{project.title}</h1>
          
          <div className="relative  w-full mb-6 rounded-lg overflow-hidden">
            <img 
              src={project.mainimage} 
              alt={project.title}
              className="w-full h-full object-cover text-blue-950"
            />
          </div>

            {/*Descripción del proyecto*/}
          <div className="prose">
            <h2 className="text-3xl font-medium text-blue-950 mb-4">Descripción</h2>
            <p className="text-gray-700 mb-4 text-justify text-xl">{project.description}</p>   
          </div>
            
          {/*Carrousel de imagenes*/}
          <div className="carousel-container my-8"></div>
            <h2 className="text-3xl font-medium text-blue-950 mb-4">Galería</h2>
            <div className='flex flex-col items-center '>
              <div className="flex  space-x-4  ">
              {project.gallery.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-80 rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}