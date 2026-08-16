import FadeIn from './FadeIn'

const Ayat = () => {
  return (
    <section 
      className='relative py-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-center min-h-[60vh]'
      style={{ backgroundImage: 'url("/images/bg-ayat.jpg")' }}
    >
      {/* Overlay tipis agar teks tetap tajam terbaca */}
      <div className='absolute inset-0 bg-white/40'></div>
      
      <FadeIn className='relative z-10 max-w-3xl mx-auto'>
        {/* Simple floral/ornament divider using unicode or simple shapes */}
        <div className='text-gold text-2xl mb-8'>✧ ✧ ✧</div>

        <h2 className='font-serif text-2xl md:text-3xl text-maroon mb-10'>QS. Ar-Rum Ayat 21</h2>

        <p className='font-serif text-2xl md:text-4xl text-dark leading-loose mb-8' dir='rtl'>
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ
          مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
        </p>

        <p className='font-sans text-sm md:text-base text-gray-600 leading-relaxed font-light'>
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu
          sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
          sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
          berpikir."
        </p>

        <div className='text-gold text-2xl mt-12'>✧ ✧ ✧</div>
      </FadeIn>
    </section>
  )
}

export default Ayat
