// app/desarrollo/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Navbarcuerpo from '../../ui/componentes_generales/navbarcuerpo';
import Footer from '../../ui/dashboard/footer';
import { devsProjects } from '../../ui/desarrollo/projectVista';


export async function generateStaticParams() {
  return devsProjects.map(project => ({
    slug: project.slug
  }));
}

export default function DevProjectDetail({ params }: { params: { slug: string } }) {
  const project = devsProjects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
   <div className="flex flex-col min-h-screen bg-blanco-100">
         <Navbarcuerpo />
         <main className="flex-grow container mx-auto px-4 py-8 ">
           <article className="max-w-3xl mx-auto">
             <h1 className="text-3xl font-bold text-blue-950 mb-6 text-center">{project.title}</h1>
             
             <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
               <img 
                 src={project.mainimage} 
                 alt={project.title}
                 className="w-full h-full object-cover"
               />
             </div>
             
             <div className="prose">
               <h2 className="text-2xl font-semibold text-blue-950 mb-4">Descripción</h2>
               <p className="text-gray-700 mb-4">{project.description}</p>   
               <h2 className="text-2xl font-semibold text-blue-950 mb-4">Tecnologías Utilizadas</h2>
               {/* Más secciones según necesidad */}
             </div>
           </article>
         </main>
      <Footer />
    </div>
  );
}