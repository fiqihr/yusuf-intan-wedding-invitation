import FadeIn from './FadeIn';

const Acara = () => {
  return (
    <section className="py-24 px-6 bg-[var(--color-cream-dark)] text-center relative overflow-hidden">
      {/* Background floral ornament (dummy SVG/CSS shape) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <FadeIn className="relative z-10 mb-16">
        <h2 className="font-serif text-4xl text-dark mb-4">Acara</h2>
        <p className="font-sans text-gray-600 font-light max-w-lg mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami:
        </p>
      </FadeIn>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 justify-center">

        {/* Akad Nikah */}
        <FadeIn direction="up" delay={0.2} className="flex-1 bg-white rounded-t-full rounded-b-lg p-10 shadow-xl border-t-8 border-[var(--color-gold)] flex flex-col items-center">
          <h3 className="font-serif text-3xl text-[var(--color-gold)] mb-6">Akad Nikah</h3>
          <div className="font-sans text-gray-700 space-y-4 mb-8 text-lg font-light">
            <p className="font-bold text-dark">Rabu, 5 Mei 2026</p>
            <p>08.00 WIB - Selesai</p>
            <div className="w-12 h-[1px] bg-gray-300 mx-auto my-4"></div>
            <p className="text-sm">
              <strong className="block mb-1 text-dark">Land of Down</strong>
              Jl. Jend. Sudirman No. 1, Kota Xyz
            </p>
          </div>
        </FadeIn>

        {/* Resepsi */}
        <FadeIn direction="up" delay={0.4} className="flex-1 bg-white rounded-t-full rounded-b-lg p-10 shadow-xl border-t-8 border-[var(--color-gold)] flex flex-col items-center">
          <h3 className="font-serif text-3xl text-[var(--color-gold)] mb-6">Resepsi</h3>
          <div className="font-sans text-gray-700 space-y-4 mb-8 text-lg font-light">
            <p className="font-bold text-dark">Minggu, 27 Agustus 2026</p>
            <p>10.00 WIB - 14.00 WIB</p>
            <div className="w-12 h-[1px] bg-gray-300 mx-auto my-4"></div>
            <p className="text-sm">
              <strong className="block mb-1 text-dark">Gedung Pertemuan Sejahtera</strong>
              Jl. Gatot Subroto No. 45, Kota Xyz
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Acara;
