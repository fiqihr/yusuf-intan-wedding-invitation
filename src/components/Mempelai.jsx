import FadeIn from './FadeIn'

const Mempelai = () => {
  return (
    <section className='py-24 px-6 bg-cream-dark text-center'>
      <FadeIn>
        <h2 className='font-serif text-4xl text-dark mb-4'>Mempelai</h2>
        <p className='font-sans text-gray-600 max-w-lg mx-auto mb-16 font-light'>
          Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai
          kasih sayang yang Kau ciptakan di antara kami.
        </p>
      </FadeIn>

      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8'>
        {/* Bride */}
        <FadeIn direction='left' className='flex-1 flex flex-col items-center relative'>
          {/* Line Art Leaf */}
          <img
            src='/images/gold_line_leaf.png'
            alt='Leaf Ornament'
            className='absolute -top-10 -left-6 md:left-4 w-40 md:w-56 opacity-60 mix-blend-multiply pointer-events-none rotate-[-15deg] z-0'
          />
          <div className='relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl'>
            <img src='/images/intan-.png' alt='Mempelai Wanita' className='w-full h-full object-cover' />
          </div>
          <h3 className='font-serif text-3xl mb-2 text-maroon'>Intan Nurul Ngaeni</h3>
          <p className='font-sans text-sm text-gray-600 mb-4 font-light'>
            Putri pertama dari
            <br />
            Bapak Ngabdul Jamil dan Ibu Rusmini
          </p>
          <a
            href='https://www.instagram.com/intnnrllll_/'
            className='font-sans text-sm tracking-widest text-dark hover:text-dark transition-colors border border-gold px-6 py-2 rounded-full'
          >
            @intnnrllll_
          </a>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.3} className='flex flex-col items-center justify-center my-0 md:my-0'>
          <img
            src='/images/floral_divider.png'
            alt='Floral Divider'
            className='w-32 md:w-48 mix-blend-multiply opacity-80'
          />
        </FadeIn>

        {/* Groom */}
        <FadeIn direction='right' className='flex-1 flex flex-col items-center relative'>
          {/* Line Art Leaf (Flipped) */}
          <img
            src='/images/gold_line_leaf.png'
            alt='Leaf Ornament'
            className='absolute -bottom-10 -right-6 md:right-4 w-40 md:w-56 opacity-60 mix-blend-multiply pointer-events-none scale-x-[-1] rotate-[15deg] z-0'
          />
          <div className='relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl'>
            <img src='/images/yusuf-.png' alt='Mempelai Pria' className='w-full h-full object-cover' />
          </div>
          <h3 className='font-serif text-3xl mb-2 text-maroon'>Yusuf Maulana Firmanzah</h3>
          <p className='font-sans text-sm text-gray-600 mb-4 font-light'>
            Putra kedua dari
            <br />
            Bapak Mahad Asantani dan Ibu Tumini
          </p>
          <a
            href='https://www.instagram.com/yusuf_mfzz/'
            className='font-sans text-sm tracking-widest text-dark hover:text-dark transition-colors border border-gold px-6 py-2 rounded-full'
          >
            @yusuf_mfzz
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

export default Mempelai
