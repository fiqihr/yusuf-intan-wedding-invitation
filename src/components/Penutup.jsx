import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const Penutup = () => {
  return (
    <section className='py-24 px-6 bg-cream text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]'>
      {/* Background floral ornament */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>

      {/* Top Left Floral Ornament */}
      <motion.img
        src='/images/floral_corner_tl.png'
        alt='Floral Ornament'
        className='absolute top-0 left-0 w-48 md:w-64 opacity-80 pointer-events-none mix-blend-multiply z-10'
        initial={{ opacity: 0, x: -50, y: -50 }}
        whileInView={{ opacity: 0.8, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Bottom Right Floral Ornament */}
      <motion.img
        src='/images/floral_corner_br.png'
        alt='Floral Ornament'
        className='absolute bottom-0 right-0 w-48 md:w-64 opacity-80 pointer-events-none mix-blend-multiply z-10'
        initial={{ opacity: 0, x: 50, y: 50 }}
        whileInView={{ opacity: 0.8, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
      />

      <FadeIn className='relative z-10 max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-12 rounded-3xl shadow-sm border border-cream-dark'>
        <p className='font-sans text-gray-600 font-light leading-relaxed mb-10 text-lg md:text-xl'>
          "Atas kehadiran saudara/(i) & doa restunya, kami ucapkan terimakasih."
        </p>

        <p className='font-sans text-sm tracking-[0.2em] text-gray-400 uppercase mb-4'>Hormat Kami</p>

        <h2 className='font-serif text-5xl md:text-6xl text-dark mb-4'>Intan & Yusuf</h2>

        <div className='text-gold text-2xl mt-8'>✧ ✧ ✧</div>
      </FadeIn>
    </section>
  )
}

export default Penutup
