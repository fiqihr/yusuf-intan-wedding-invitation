import FadeIn from './FadeIn';

const Mempelai = () => {
  return (
    <section className="py-24 px-6 bg-[var(--color-cream-dark)] text-center">
      <FadeIn>
        <h2 className="font-serif text-4xl text-dark mb-4">Mempelai</h2>
        <p className="font-sans text-gray-600 max-w-lg mx-auto mb-16 font-light">
          Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara kami.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">

        {/* Bride */}
        <FadeIn direction="left" className="flex-1 flex flex-col items-center relative">
          {/* Line Art Leaf */}
          <img src="/images/gold_line_leaf.png" alt="Leaf Ornament" className="absolute -top-10 -left-6 md:left-4 w-40 md:w-56 opacity-60 mix-blend-multiply pointer-events-none rotate-[-15deg] z-0" />
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1541250848049-b4f714280b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mempelai Wanita"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif text-3xl mb-2">Intan</h3>
          <p className="font-sans text-sm text-gray-600 mb-4 font-light">
            Putri pertama dari<br />Bapak Tono dan Ibu Siti
          </p>
          <a href="#" className="font-sans text-sm tracking-widest text-[var(--color-gold)] hover:text-dark transition-colors border border-[var(--color-gold)] px-6 py-2 rounded-full">
            @intanabcd
          </a>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.3} className="flex flex-col items-center justify-center my-8 md:my-0">
          <img
            src="/images/floral_divider.png"
            alt="Floral Divider"
            className="w-32 md:w-48 mix-blend-multiply opacity-80"
          />
        </FadeIn>

        {/* Groom */}
        <FadeIn direction="right" className="flex-1 flex flex-col items-center relative">
          {/* Line Art Leaf (Flipped) */}
          <img src="/images/gold_line_leaf.png" alt="Leaf Ornament" className="absolute -bottom-10 -right-6 md:right-4 w-40 md:w-56 opacity-60 mix-blend-multiply pointer-events-none scale-x-[-1] rotate-[15deg] z-0" />
          <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mempelai Pria"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif text-3xl mb-2">Yusup Onyot</h3>
          <p className="font-sans text-sm text-gray-600 mb-4 font-light">
            Putra kedua dari<br />Bapak Sarji dan Ibu Marni
          </p>
          <a href="#" className="font-sans text-sm tracking-widest text-[var(--color-gold)] hover:text-dark transition-colors border border-[var(--color-gold)] px-6 py-2 rounded-full">
            @yusupgaming
          </a>
        </FadeIn>

      </div>
    </section>
  );
};

export default Mempelai;
