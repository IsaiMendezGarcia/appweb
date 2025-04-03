'use client'
import Carousel from './ui/dashboard/carousel'
import Slogan from './ui/dashboard/compslogan'
import Fundadores from './ui/dashboard/fundadores'
import MapView from './ui/dashboard/mapView'
import Navbar from './ui/dashboard/navbar'
import Servicios from './ui/dashboard/servicios'
import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('./ui/dashboard/mapView'), 
  { 
    ssr: false,
    loading: () => <p>Loading map...</p>
  }
);

export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel/>
    <Slogan />
    <Servicios />
    <Fundadores />
    <div>
      <Map center={[40.7128, -74.0060]} zoom={9} />
    </div>
    </>
  )
}