import FadeIn from './FadeIn'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Rsvp = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('1')
  const [status, setStatus] = useState('hadir')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      alert('Tolong isi nama Anda terlebih dahulu.')
      return
    }

    // Buka modal alih-alih langsung mengirim WA
    setIsModalOpen(true)
  }

  const sendWhatsApp = (recipient) => {
    // Nomor WA penerima
    const noWaPria = '6283126308211'
    const noWaWanita = '6285869591510'

    const noWa = recipient === 'pria' ? noWaPria : noWaWanita

    let pesan = `Halo, saya *${name}* ingin mengonfirmasi RSVP undangan pernikahan Anda.`
    pesan += `\n\nStatus: *${status === 'hadir' ? 'AKAN HADIR ✅' : 'TIDAK BISA HADIR ❌'}*`

    if (status === 'hadir') {
      pesan += `\nJumlah Rombongan: *${amount} Orang*`
    }

    pesan += `\n\nTerima kasih.`

    // Buat URL dan arahkan ke tab baru
    const waUrl = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`
    window.open(waUrl, '_blank')

    // Tutup modal setelah proses selesai
    setIsModalOpen(false)
  }

  return (
    <section className='py-24 px-6 bg-cream-dark text-center relative'>
      <FadeIn className='max-w-xl mx-auto bg-white p-10 md:p-12 rounded-3xl shadow-2xl relative z-10'>
        <h2 className='font-serif text-4xl text-dark mb-2'>RSVP</h2>
        <img
          src='/images/gold_line_divider.png'
          alt='Divider'
          className='mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70'
        />
        <p className='font-sans text-gray-500 font-light mb-8 text-sm'>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
        </p>

        <form className='space-y-6 text-left' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='block font-sans text-sm text-gray-700 mb-2 font-bold'>
              Nama Lengkap
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-4 py-3 bg-cream border-none rounded-lg focus:ring-2 focus:ring-gold outline-none font-sans text-sm transition-shadow'
              placeholder='Masukkan nama Anda'
            />
          </div>

          <div>
            <label htmlFor='amount' className='block font-sans text-sm text-gray-700 mb-2 font-bold'>
              Jumlah Tamu
            </label>
            <div className='flex items-center w-full bg-cream rounded-lg focus-within:ring-2 focus-within:ring-gold transition-shadow'>
              <input
                type='number'
                id='amount'
                min='1'
                max='100'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className='flex-1 bg-transparent px-4 py-3 border-none outline-none font-sans text-sm'
              />
              <span className='font-sans text-sm text-gray-700 font-bold pr-4'>Orang</span>
            </div>
          </div>

          <div>
            <label htmlFor='status' className='block font-sans text-sm text-gray-700 mb-2 font-bold'>
              Konfirmasi Kehadiran
            </label>
            <select
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='w-full px-4 py-3 bg-cream border-none rounded-lg focus:ring-2 focus:ring-gold outline-none font-sans text-sm transition-shadow appearance-none cursor-pointer'
            >
              <option value='hadir'>Ya, Saya akan hadir</option>
              <option value='tidak'>Maaf, Saya tidak bisa hadir</option>
            </select>
          </div>

          <button
            type='submit'
            className='w-full py-4 mt-4 bg-maroon text-white font-sans tracking-widest text-sm uppercase rounded-lg hover:opacity-90 transition-opacity shadow-lg'
          >
            Kirim Konfirmasi
          </button>
        </form>
      </FadeIn>

      {/* Modal Pop-up Penerima WhatsApp — Portal ke body agar fixed positioning bekerja */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-[100] flex items-center justify-center px-4'
            >
              {/* Backdrop Gelap yang bisa diklik untuk menutup */}
              <div
                onClick={() => setIsModalOpen(false)}
                className='absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer z-[1]'
              ></div>

              {/* Kotak Modal */}
              <motion.div
                initial={{ scale: 0.8, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className='relative bg-white w-full max-w-sm rounded-[2rem] p-8 shadow-2xl text-center z-[2]'
              >
                <h3 className='font-serif text-2xl text-maroon mb-2'>Pilih Penerima</h3>
                <p className='font-sans text-sm text-gray-500 mb-8'>
                  Kirim pesan konfirmasi kehadiran ini kepada pihak siapa?
                </p>

                <div className='flex flex-col gap-4'>
                  <button
                    onClick={() => sendWhatsApp('pria')}
                    className='flex items-center justify-start gap-4 w-full px-6 py-4 bg-cream text-dark font-sans text-sm font-bold rounded-2xl hover:bg-gold/30 hover:scale-105 transition-all border border-cream-dark shadow-sm'
                  >
                    <img
                      src='/images/yusuf-.png'
                      alt='Pria'
                      className='w-10 h-10 rounded-full object-cover shadow-sm'
                    />
                    <span>Pihak Pria (Yusuf)</span>
                  </button>
                  <button
                    onClick={() => sendWhatsApp('wanita')}
                    className='flex items-center justify-start gap-4 w-full px-6 py-4 bg-cream text-dark font-sans text-sm font-bold rounded-2xl hover:bg-gold/30 hover:scale-105 transition-all border border-cream-dark shadow-sm'
                  >
                    <img
                      src='/images/intan-.png'
                      alt='Wanita'
                      className='w-10 h-10 rounded-full object-cover shadow-sm'
                    />
                    <span>Pihak Wanita (Intan)</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className='mt-8 font-sans text-xs text-gray-400 uppercase tracking-widest hover:text-maroon transition-colors font-bold'
                >
                  Batal
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

export default Rsvp
