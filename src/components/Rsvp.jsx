import FadeIn from './FadeIn';

const Rsvp = () => {
  return (
    <section className="py-24 px-6 bg-[var(--color-cream-dark)] text-center">
      <FadeIn className="max-w-xl mx-auto bg-white p-10 md:p-12 rounded-3xl shadow-2xl">
        <h2 className="font-serif text-4xl text-dark mb-2">RSVP</h2>
        <img src="/images/gold_line_divider.png" alt="Divider" className="mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70" />
        <p className="font-sans text-gray-500 font-light mb-8 text-sm">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
        </p>

        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block font-sans text-sm text-gray-700 mb-2 font-bold">Nama Lengkap</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-[var(--color-cream)] border-none rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] outline-none font-sans text-sm transition-shadow"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div>
            <label htmlFor="amount" className="block font-sans text-sm text-gray-700 mb-2 font-bold">Jumlah Tamu</label>
            <select 
              id="amount" 
              className="w-full px-4 py-3 bg-[var(--color-cream)] border-none rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] outline-none font-sans text-sm transition-shadow appearance-none cursor-pointer"
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block font-sans text-sm text-gray-700 mb-2 font-bold">Konfirmasi Kehadiran</label>
            <select 
              id="status" 
              className="w-full px-4 py-3 bg-[var(--color-cream)] border-none rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] outline-none font-sans text-sm transition-shadow appearance-none cursor-pointer"
            >
              <option value="hadir">Ya, Saya akan hadir</option>
              <option value="tidak">Maaf, Saya tidak bisa hadir</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-4 mt-4 bg-dark text-white font-sans tracking-widest text-sm uppercase rounded-lg hover:bg-black transition-colors shadow-lg"
          >
            Kirim Konfirmasi
          </button>
        </form>
      </FadeIn>
    </section>
  );
};

export default Rsvp;
