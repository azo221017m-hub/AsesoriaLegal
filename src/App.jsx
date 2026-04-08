import { useRef } from 'react'
import { useFadeUpObserver, useScrollEffects } from './hooks/useEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Perfil from './components/Perfil'
import Areas from './components/Areas'
import Diferenciales from './components/Diferenciales'
import Autoridad from './components/Autoridad'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import './App.css'

export default function App() {
  const appRef = useRef(null)

  useScrollEffects()
  useFadeUpObserver(appRef)

  return (
    <div ref={appRef}>
      <Navbar />
      <Hero />
      <Perfil />
      <Areas />
      <Diferenciales />
      <Autoridad />
      <Contacto />
      <Footer />
      <ScrollTop />
    </div>
  )
}
