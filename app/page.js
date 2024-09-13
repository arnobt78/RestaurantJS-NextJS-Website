import dynamic from 'next/dynamic'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
//import Map from '../components/Map'
import Menu from '../components/Menu'
import Reservation from '../components/Reservation'

const MyMap = dynamic(() => import('../components/Map'), {ssr:false})

export default function Home() {
  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <MyMap />
      <Footer />
    </main>
  )
}
