'use client'
import Carousel from './ui/dashboard/carousel'
import Colaboradores from './ui/dashboard/comInstituciones'
import SeccionMap from './ui/dashboard/comMapa'
import Slogan from './ui/dashboard/compslogan'
import Footer from './ui/dashboard/footer'
import Fundadores from './ui/dashboard/fundadores'
import LogoCarousel from './ui/dashboard/LogoCarousel'
import MapView from './ui/dashboard/mapView'
import Navbar from './ui/dashboard/navbar'
import Servicios from './ui/dashboard/servicios'

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="inicio">
        <Carousel/>
      </section>
      <section id="slogan">
        <Slogan />
      </section>
      <section id="servicios">
        <Servicios />
      </section>
      <section id="fundadores">
        <Fundadores />
      </section>
      <section id="ubicacion">
        <SeccionMap />
      </section>
      <section id="colaboradores">
        <Colaboradores />
      </section>
      <Footer />
    </>
  )
}