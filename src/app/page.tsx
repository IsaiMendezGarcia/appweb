import Carousel from './ui/dashboard/carousel'
import Slogan from './ui/dashboard/compslogan'
import Navbar from './ui/dashboard/navbar'
import Servicios from './ui/dashboard/servicios'

export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel/>
    <Slogan />
    <Servicios />
    </>

  )
}