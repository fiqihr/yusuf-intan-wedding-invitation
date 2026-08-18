import FadeIn from './FadeIn'
import { useState } from 'react'

const Rsvp = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('1')
  const [status, setStatus] = useState('hadir')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) {
      alert('Tolong isi nama Anda terlebih dahulu.')
      return
    }

    // Nomor WA penerima (Ganti dengan nomor mempelai, gunakan awalan 62)
    const noWa = '6283126308211'

    let pesan = `Halo, saya *${name}* ingin mengonfirmasi RSVP undangan pernikahan Anda.`
    pesan += `\n\nStatus: *${status === 'hadir' ? 'AKAN HADIR ✅' : 'TIDAK BISA HADIR ❌'}*`

    if (status === 'hadir') {
      pesan += `\nJumlah Rombongan: *${amount} Orang*`
    }

    pesan += `\n\nTerima kasih.`

    // Buat URL dan arahkan ke tab baru
    const waUrl = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`
    window.open(waUrl, '_blank')
  }

  return (
    <section className='py-24 px-6 bg-cream-dark text-center'>
      <FadeIn className='max-w-xl mx-auto bg-white p-10 md:p-12 rounded-3xl shadow-2xl'>
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
    </section>
  )
}

export default Rsvp
