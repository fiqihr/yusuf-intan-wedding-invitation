import FadeIn from './FadeIn'

const Galeri = () => {
  // Array foto dilengkapi dengan rekomendasi rasio agar mudah di-crop
  const photos = [
    { src: '/images/galeri-1.jpg', ratio: 'Rasio 2:1 (Landscape)' }, // Baris 1 Kiri
    { src: '/images/galeri-2.jpg', ratio: 'Rasio 1:1 (Square)' }, // Baris 1 Kanan
    { src: '/images/galeri-3.jpg', ratio: 'Rasio 1:1 (Square)' }, // Baris 2 Kiri
    { src: '/images/galeri-4.jpg', ratio: 'Rasio 2:1 (Landscape)' }, // Baris 2 Kanan
    { src: '/images/galeri-5.jpg', ratio: 'Rasio 2:1 (Landscape)' }, // Baris 3 Kiri
    { src: '/images/galeri-6.jpg', ratio: 'Rasio 1:1 (Square)' }, // Baris 3 Kanan
    { src: '/images/galeri-7.jpg', ratio: 'Rasio 3:1 atau 16:9 (Banner)' } // Baris 4 Full
  ]

  // Helper untuk dummy image sesuai dengan rasio box-nya
  const getDummyImage = (index) => {
    const ratios = ['800/400', '400/400', '400/400', '800/400', '800/400', '400/400', '900/300']
    return `https://picsum.photos/seed/${index + 200}/${ratios[index]}`
  }

  return (
    <section className='py-24 px-6 bg-cream text-center overflow-hidden'>
      <FadeIn className='mb-12 relative z-20'>
        <h2 className='font-serif text-4xl md:text-5xl text-dark mb-4'>Galeri</h2>
        <img
          src='/images/gold_line_divider.png'
          alt='Divider'
          className='mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70'
        />
        <p className='font-sans text-gray-600 max-w-lg mx-auto font-light'>Momen-momen indah perjalanan kami</p>
      </FadeIn>

      {/* Bento/Asymmetric Grid Container */}
      <div className='max-w-4xl mx-auto grid grid-cols-3 gap-2 md:gap-4'>
        {/* Baris 1: 2/3 (Kiri) & 1/3 (Kanan) */}
        <FadeIn
          direction='up'
          delay={0.1}
          className='col-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-[2/1]'
        >
          <img
            src='/images/galeri-1.JPG'
            alt='Galeri 1'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(0)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>
        <FadeIn
          direction='up'
          delay={0.2}
          className='col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-square'
        >
          <img
            src='/images/galeri-2.JPG'
            alt='Galeri 2'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(1)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>

        {/* Baris 2: 1/3 (Kiri) & 2/3 (Kanan) */}
        <FadeIn
          direction='up'
          delay={0.3}
          className='col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-square'
        >
          <img
            src='/images/galeri-3.JPG'
            alt='Galeri 3'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(2)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>
        <FadeIn
          direction='up'
          delay={0.4}
          className='col-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-[2/1]'
        >
          <img
            src='/images/galeri-4.JPG'
            alt='Galeri 4'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(3)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>

        {/* Baris 3: 2/3 (Kiri) & 1/3 (Kanan) */}
        <FadeIn
          direction='up'
          delay={0.5}
          className='col-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-[2/1]'
        >
          <img
            src='/images/galeri-5.JPG'
            alt='Galeri 5'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(4)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>
        <FadeIn
          direction='up'
          delay={0.6}
          className='col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-square'
        >
          <img
            src='/images/galeri-6.JPG'
            alt='Galeri 6'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(5)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>

        {/* Baris 4: Full Width (3/3) */}
        <FadeIn
          direction='up'
          delay={0.7}
          className='col-span-3 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md group aspect-[21/9] md:aspect-[3/1]'
        >
          <img
            src='/images/galeri-7.JPG'
            alt='Galeri 7'
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            onError={(e) => {
              e.target.src = getDummyImage(6)
            }}
          />
          <div className='absolute inset-0 bg-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Galeri
