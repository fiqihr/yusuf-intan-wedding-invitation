import { useState, useEffect, useRef } from 'react'
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
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  // Prevent scrolling when invitation is not open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = 'auto'
      // Ensure we are at the top of the page when Cover hides
      window.scrollTo({ top: 0, behavior: 'smooth' })

      // Putar musik saat undangan dibuka
      if (audioRef.current) {
        // audioRef.current.currentTime = 0 // Mulai dari 1 menit 16 detik (76 detik)
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((err) => {
            console.error('Auto-play was prevented:', err)
          })
      }
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

      {/* Musik Latar */}
      <audio ref={audioRef} src='/music/aku-memilihmu.mp3' loop />

      {/* Floating Button Music */}
      {isOpen && (
        <button
          onClick={toggleAudio}
          className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center border border-gray-100 transition-transform hover:scale-105 active:scale-95 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}
          aria-label='Toggle Music'
        >
          {isPlaying ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-dark'
            >
              <path d='M9 18V5l12-2v13'></path>
              <circle cx='6' cy='18' r='3'></circle>
              <circle cx='18' cy='16' r='3'></circle>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-gray-400'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <path d='M9 18V5l12-2v13'></path>
              <circle cx='6' cy='18' r='3'></circle>
              <circle cx='18' cy='16' r='3'></circle>
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

export default App
