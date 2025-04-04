'use client'
import Carousel from './ui/dashboard/carousel'
import SeccionMap from './ui/dashboard/comMapa'
import Slogan from './ui/dashboard/compslogan'
import Fundadores from './ui/dashboard/fundadores'
import MapView from './ui/dashboard/mapView'
import Navbar from './ui/dashboard/navbar'
import Servicios from './ui/dashboard/servicios'
import dynamic from 'next/dynamic';



export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel/>
    <Slogan />
    <Servicios />
    <Fundadores />
    <SeccionMap />
    </>
  )
}