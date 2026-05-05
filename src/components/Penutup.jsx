import FadeIn from './FadeIn';

const Penutup = () => {
  return (
    <section className="py-24 px-6 bg-white text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      {/* Background floral ornament */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>

      <FadeIn className="relative z-10 max-w-2xl mx-auto bg-white/80 backdrop-blur p-12 rounded-3xl shadow-sm border border-[var(--color-cream-dark)]">
        <p className="font-sans text-gray-600 font-light leading-relaxed mb-10 text-lg md:text-xl">
          "Atas kehadiran saudara/(i) & doa restunya, kami ucapkan terimakasih."
        </p>

        <p className="font-sans text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
          Hormat Kami
        </p>

        <h2 className="font-serif text-5xl md:text-6xl text-dark mb-4">Onyot & Intan</h2>

        <div className="text-gold text-2xl mt-8">✧ ✧ ✧</div>
      </FadeIn>
    </section>
  );
};

export default Penutup;
