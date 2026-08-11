import { useState, useEffect } from 'react'
import Cover from './components/Cover'
import Ayat from './components/Ayat'
import Mempelai from './components/Mempelai'
import Journey from './components/Journey'
import Galeri from './components/Galeri'
import Acara from './components/Acara'
import Maps from './components/Maps'
import Rsvp from './components/Rsvp'
import Hadiah from './components/Hadiah'
import Ucapan from './components/Ucapan'
import Penutup from './components/Penutup'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when invitation is not open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = 'auto'
      // Ensure we are at the top of the page when Cover hides
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isOpen])

  return (
    <div className='font-sans bg-cream text-dark min-h-screen'>
      {/* 1. Cover Section (Always visible initially, full screen) */}
      <div
        className={`transition-all duration-1000 ${isOpen ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}
      >
        <Cover onOpen={() => setIsOpen(true)} />
      </div>

      {/* Main Content (Visible after opening) */}
      <div
        className={`transition-all duration-1000 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'}`}
      >
        {/* We can show a smaller hero header if needed, but per request, we just scroll down */}

        <Ayat />
        <Mempelai />
        <Journey />
        <Galeri />
        <Acara />
        <Maps />
        <Rsvp />
        <Hadiah />
        <Ucapan />
        <Penutup />
      </div>
    </div>
  )
}

export default App
