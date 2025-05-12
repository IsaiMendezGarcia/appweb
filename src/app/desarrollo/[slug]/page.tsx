import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbarcuerpo from '../../ui/componentes_generales/navbarcuerpo';
import Footer from '../../ui/dashboard/footer';
import { devsProjects } from '../../ui/desarrollo/projectVista';


export async function generateStaticParams() {
  return devsProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function DevProjectDetail({ params }: { params: { slug: string } }) {
  const project = devsProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-blanco-100">
      <Navbarcuerpo />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl text-blue-950 mb-6 text-center font-extrabold">
          {project.title}
        </h1>
        
        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.mainimage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover rounded-lg shadow-2xl"
            style={{ objectFit: 'none' }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Descripción</h2>
            <p className="text-blue-950 text-xl leading-relaxed text-justify">
              {project.description}
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Imágenes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-2xl shadow-blue-950/50">
                <Image
                  src={(Array.isArray(project.gallery) ? project.gallery[0] : project.gallery) || project.mainimage}
                  alt={`Vista adicional - ${project.title}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"  
                  className="object-filled rounded-lg"
                  style={{ objectFit: 'scale-down' }}
                    
                />
              </div>
              <div className="flex items-center p-6 rounded-lg">
                <p className="text-blue-950 text-lg text-justify">
                  Debido a que este proyecto fue vendido, no se poseen los derechos comerciales sobre el software.
                  No está permitido mostrar más imágenes, código, diseños o detalles técnicos sin autorización
                  expresa del actual propietario.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}