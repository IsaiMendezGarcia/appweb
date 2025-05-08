'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type CardItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  mainimage: string;
  gallery: string[];
  tags?: string[];
  // Campos adicionales específicos si los necesitas
};

type GenericCardsProps = {
  items: CardItem[];
  basePath: string; // 'automatizacion' o 'desarrollo'
  itemsPerPage?: number;
};

export const GenericCards = ({ 
  items, 
  basePath, 
  itemsPerPage = 6 
}: GenericCardsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Lógica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (items.length === 0) {
    return <div className="text-center py-8">No se encontraron elementos.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={item.mainimage}
                alt={`Imagen de ${item.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-xl text-gray-700 font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
              
              {/* Etiquetas si existen */}
              {item.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-end justify-end mt-auto">
              <Link
                href={`/${basePath}/${item.slug}`}
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Ver más
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      {items.length > itemsPerPage && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={index}
                    onClick={() => paginate(pageNumber)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === pageNumber
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              }
              return null;
            })}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              &gt;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};