import FadeIn from './FadeIn';

const Journey = () => {
  const stories = [
    {
      year: "2017",
      title: "Pertama Bertemu",
      // desc: "Pertemuan pertama kami di kampus. Tidak ada yang spesial, hanya teman biasa yang sering mengerjakan tugas bersama.",
      desc: "Awalnya coba coba",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2020",
      title: "Mulai Dekat",
      // desc: "Setelah lulus, kami kebetulan bekerja di kota yang sama dan mulai sering menghabiskan waktu bersama di akhir pekan.",
      desc: "Lama-lama kok enak.",
      img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2024",
      title: "Lamaran",
      desc: "Sebuah kejutan sederhana namun sangat berarti. Dengan restu dari kedua orang tua, kami memutuskan untuk melangkah ke jenjang yang lebih serius.",
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2026",
      title: "Pernikahan",
      desc: "Tahun ini, kami akan mengikat janji suci. Semoga perjalanan cinta ini selalu diberkahi oleh-Nya.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <FadeIn className="text-center mb-16">
        <h2 className="font-serif text-4xl text-dark mb-2">Our Love Journey</h2>
        <img src="/images/gold_line_divider.png" alt="Divider" className="mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70" />
        <p className="font-sans text-gray-500 font-light max-w-lg mx-auto">
          Perjalanan singkat cerita cinta kami.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4" style={{ scrollbarWidth: 'none' }}>
        {stories.map((story, index) => (
          <FadeIn
            key={index}
            delay={index * 0.2}
            direction="left"
            className="flex-none w-[85vw] md:w-[400px] snap-center"
          >
            <div className="bg-[var(--color-cream)] rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full font-serif font-bold text-dark">
                  {story.year}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-center text-center">
                <h3 className="font-serif text-2xl mb-3">{story.title}</h3>
                <p className="font-sans text-sm text-gray-600 font-light leading-relaxed">
                  {story.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Journey;
