import FadeIn from './FadeIn'

const Acara = () => {
  return (
    <section className='py-24 px-6 bg-cream-dark text-center relative overflow-hidden'>
      {/* Background floral ornament (dummy SVG/CSS shape) */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2'></div>

      <FadeIn className='relative z-20 mb-12'>
        <h2 className='font-serif text-4xl md:text-5xl text-dark mb-4'>Acara</h2>
        <img
          src='/images/gold_line_divider.png'
          alt='Divider'
          className='mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70'
        />
        <p className='font-sans text-gray-600 font-light max-w-lg mx-auto'>
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara
          pernikahan kami:
        </p>
      </FadeIn>

      <div className='relative max-w-2xl mx-auto py-10'>
        {/* Garis Utama (Timeline) */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gold/40 h-full top-0 z-0 rounded-full'></div>

        {/* Acara 1: Rumah Pria */}
        <div className='relative z-10 flex flex-col items-center mb-16'>
          {/* Node/Titik Timeline */}
          <FadeIn delay={0.1}>
            <div className='w-5 h-5 rounded-full bg-cream-dark border-4 border-gold shadow-md mb-6'></div>
          </FadeIn>

          <FadeIn direction='up' delay={0.2} className='w-full px-4 md:px-12'>
            <div className='bg-white rounded-3xl p-8 shadow-lg border-t-4 border-gold text-center relative overflow-hidden group hover:shadow-xl transition-shadow'>
              {/* Ornamen bunga pudar di pojok */}
              <img
                src='/images/floral_corner_tl.png'
                alt='ornament'
                className='absolute -top-10 -left-10 w-32 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none'
              />
              <h3 className='font-serif text-3xl text-maroon mb-4'>Rumah Mempelai Pria</h3>
              <p className='font-bold text-dark text-lg mb-4'>21 - 23 Agustus 2026</p>
              <p className='font-sans text-sm text-gray-600 leading-relaxed font-light'>
                <strong className='text-dark font-semibold'>Desa Karanganyar RT 01 RW 03</strong>
                <br />
                Kec. Madukara, Kab. Banjarnegara
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Acara 2: Rumah Wanita */}
        <div className='relative z-10 flex flex-col items-center mb-24'>
          <FadeIn delay={0.1}>
            <div className='w-5 h-5 rounded-full bg-cream-dark border-4 border-gold shadow-md mb-6'></div>
          </FadeIn>

          <FadeIn direction='up' delay={0.2} className='w-full px-4 md:px-12'>
            <div className='bg-white rounded-3xl p-8 shadow-lg border-t-4 border-gold text-center relative overflow-hidden group hover:shadow-xl transition-shadow'>
              <img
                src='/images/floral_corner_br.png'
                alt='ornament'
                className='absolute -bottom-10 -right-10 w-32 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none'
              />
              <h3 className='font-serif text-3xl text-maroon mb-4'>Rumah Mempelai Wanita</h3>
              <p className='font-bold text-dark text-lg mb-4'>26 - 27 Agustus 2026</p>
              <p className='font-sans text-sm text-gray-600 leading-relaxed font-light'>
                <strong className='text-dark font-semibold'>Desa Pekauman RT 01 RW 02</strong>
                <br />
                Kec. Madukara, Kab. Banjarnegara
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Acara 3: Puncak (Akad & Resepsi) */}
        <div className='relative z-10 flex flex-col items-center'>
          <FadeIn delay={0.1}>
            {/* Node Puncak yang lebih besar */}
            <div className='w-12 h-12 rounded-full bg-white/50 flex items-center justify-center shadow-xl border-4 border-white mb-8 z-20'>
              <span className='text-white text-xl relative top-[1px]'>💍</span>
            </div>
          </FadeIn>

          <FadeIn direction='up' delay={0.2} className='w-full px-2 md:px-8'>
            <div className='bg-linear-to-b from-white via-white  to-maroon/30 rounded-t-[100px] rounded-b-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden border-2 border-gold/30'>
              {/* Background pattern pudar */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')] pointer-events-none"></div>

              <img
                src='/images/floral_divider.png'
                alt='divider'
                className='mx-auto w-32 opacity-70 mb-2 mix-blend-multiply'
              />

              <div className='relative z-10'>
                <h3 className='font-serif text-4xl md:text-5xl text-maroon mb-3'>Akad Nikah</h3>
                <p className='font-sans font-bold text-dark text-lg mb-1 tracking-wider'>Jumat, 28 Agustus 2026</p>
                <p className='text-dark/70 text-sm mb-8 font-bold'>09.00 WIB - Selesai</p>

                <div className='w-16 h-[1px] bg-maroon/30 mx-auto my-8'></div>

                <h3 className='font-serif text-4xl md:text-5xl text-maroon mb-3'>Resepsi</h3>
                <p className='font-sans font-bold text-dark text-lg mb-1 tracking-wider'>Jumat, 28 Agustus 2026</p>
                <p className='text-dark/70 text-sm mb-8 font-bold'>13.00 WIB - Selesai</p>

                <div className='bg-white p-6 md:p-8 rounded-3xl backdrop-blur-md border border-gold/20 mt-10 shadow-sm'>
                  <p className='font-sans text-sm text-dark/80 leading-relaxed font-light'>
                    <strong className='block mb-2 text-maroon text-base  uppercase font-semibold'>
                      Rumah Mempelai Wanita
                    </strong>
                    Desa Pekauman RT 01 RW 02
                    <br />
                    Kec. Madukara, Kab. Banjarnegara
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Acara
