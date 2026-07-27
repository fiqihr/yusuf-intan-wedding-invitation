import { useState } from 'react';
import FadeIn from './FadeIn';

const Ucapan = () => {
  const [messages, setMessages] = useState([
    { id: 1, name: "Andi", text: "Selamat menempuh hidup baru! Semoga samawa." },
    { id: 2, name: "Bunga", text: "Happy wedding Ani & Budi. Bahagia selalu yaa!" },
    { id: 3, name: "Citra & Suami", text: "Alhamdulillah, selamat ya. Semoga lancar sampai hari H." }
  ]);

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    setMessages([
      { id: Date.now(), name: newName, text: newMessage },
      ...messages
    ]);
    setNewName("");
    setNewMessage("");
  };

  return (
    <section className="py-24 px-6 bg-[var(--color-cream-dark)] text-center">
      <FadeIn className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl text-dark mb-2">Ucapan & Doa</h2>
        <img src="/images/gold_line_divider.png" alt="Divider" className="mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70" />
        <p className="font-sans text-gray-500 font-light mb-12">
          Berikan ucapan dan doa restu untuk kedua mempelai.
        </p>

        <div className="flex flex-col md:flex-row gap-10 text-left">
          
          {/* Form */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl h-fit">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-cream)] border-none rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] outline-none font-sans text-sm transition-shadow"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div>
                <textarea 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-[var(--color-cream)] border-none rounded-lg focus:ring-2 focus:ring-[var(--color-gold)] outline-none font-sans text-sm transition-shadow resize-none h-32"
                  placeholder="Berikan ucapan & doa Anda..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-dark text-white font-sans tracking-widest text-sm uppercase rounded-lg hover:bg-black transition-colors shadow-lg"
              >
                Kirim Ucapan
              </button>
            </form>
          </div>

          {/* List Messages */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl h-[400px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="p-4 bg-[var(--color-cream)] rounded-xl border border-[var(--color-cream-dark)] animate-fade-in-up">
                  <h4 className="font-bold font-sans text-dark mb-1">{msg.name}</h4>
                  <p className="font-sans text-sm text-gray-600 font-light">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default Ucapan;
