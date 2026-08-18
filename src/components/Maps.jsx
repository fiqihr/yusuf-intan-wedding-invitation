import FadeIn from './FadeIn'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Maps = () => {
  const [activeTab, setActiveTab] = useState('pria')

  // Data lokasi disatukan dalam object agar mudah dikelola dan dirender dinamis
  const mapData = {
    pria: {
      id: 'pria',
      title: 'Rumah Mempelai Pria',
      embed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7913.870362944694!2d109.73047859999998!3d-7.3611629999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa843929cf51f%3A0x5027a76e3552d50!2sKaranganyar%2C%20Kec.%20Madukara%2C%20Kab.%20Banjarnegara%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1787019672558!5m2!1sid!2sid',
      link: 'https://maps.app.goo.gl/mbWx3Ec5NqPcDGre7?g_st=aw'
    },
    wanita: {
      id: 'wanita',
      title: 'Rumah Mempelai Wanita',
      // Note: Link embed dan href untuk wanita saat ini masih sama persis dengan yang pria, silakan diubah dengan link yang benar
      embed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.308376950965!2d109.73058630486071!3d-7.3732678821763855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa861fa3214fb%3A0x9441d0f8d3602690!2sPekauman%2C%20Kec.%20Madukara%2C%20Kab.%20Banjarnegara%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1787020380133!5m2!1sid!2sid',
      link: 'https://maps.app.goo.gl/8fTU7TmDsKxq44hz8'
    }
  }

  const currentMap = mapData[activeTab]

  return (
    <section className='py-24 px-6 bg-linear-to-b from-cream to-white via-cream text-center overflow-hidden'>
      <FadeIn className='max-w-4xl mx-auto'>
        <h2 className='font-serif text-4xl md:text-5xl text-dark mb-4'>Lokasi Acara</h2>

        {/* Ornamen pemisah */}
        <img
          src='/images/floral_divider.png'
          alt='Divider'
          className='mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70'
        />

        <p className='font-sans text-gray-500 font-light mb-10 max-w-lg mx-auto'>
          Silakan pilih tombol di bawah ini untuk melihat lokasi detail acara dari masing-masing mempelai.
        </p>

        {/* Custom Tab Switcher */}
        <div className='flex justify-center mb-10'>
          <div className='bg-white/60 backdrop-blur-md p-1.5 rounded-full inline-flex shadow-sm border border-white'>
            <button
              onClick={() => setActiveTab('pria')}
              className={`px-6 md:px-8 py-3 rounded-full font-sans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'pria'
                  ? 'bg-maroon text-white shadow-md font-bold scale-105'
                  : 'text-gray-500 hover:text-dark font-medium'
              }`}
            >
              Lokasi 1
            </button>
            <button
              onClick={() => setActiveTab('wanita')}
              className={`px-6 md:px-8 py-3 rounded-full font-sans text-xs md:text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === 'wanita'
                  ? 'bg-maroon text-white shadow-md font-bold scale-105'
                  : 'text-gray-500 hover:text-dark font-medium'
              }`}
            >
              Lokasi 2
            </button>
          </div>
        </div>

        {/* Map Container dengan Animasi */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className='bg-white p-4 md:p-8 rounded-[2rem] shadow-md border border-cream-dark'
          >
            <h3 className='font-serif text-3xl md:text-4xl text-maroon mb-8 mt-4'>{currentMap.title}</h3>

            <div className='w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-inner mb-10 bg-gray-100 border-4 border-cream'>
              <iframe
                src={currentMap.embed}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title={currentMap.title}
              ></iframe>
            </div>

            <a
              href={currentMap.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-3 px-8 py-4 bg-maroon text-white font-sans tracking-widest text-sm uppercase rounded-full hover:bg-maroon/90 transition-colors shadow-[0_8px_20px_-5px_rgba(128,0,0,0.5)] font-bold mb-4'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                <circle cx='12' cy='10' r='3'></circle>
              </svg>
              Buka di Google Maps
            </a>
          </motion.div>
        </AnimatePresence>
      </FadeIn>
    </section>
  )
}

export default Maps
