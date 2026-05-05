import { useState } from 'react';
import FadeIn from './FadeIn';

const Hadiah = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const banks = [
    { id: 1, name: "BCA", number: "1234567890", holder: "Ani Abcd" },
    { id: 2, name: "BRI", number: "0987654321", holder: "Budi Xyz" },
    { id: 3, name: "Mandiri", number: "1122334455", holder: "Ani Abcd" }
  ];

  return (
    <section className="py-24 px-6 bg-white text-center">
      <FadeIn className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl text-dark mb-4">Kirim Hadiah</h2>
        <p className="font-sans text-gray-500 font-light mb-12">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>

        <div className="flex flex-col gap-6">
          {banks.map((bank) => (
            <div key={bank.id} className="bg-[var(--color-cream)] p-6 rounded-2xl shadow-md border border-[var(--color-cream-dark)] flex flex-col items-center">
              <h3 className="font-bold font-sans text-xl text-dark mb-2">{bank.name}</h3>
              <p className="font-sans text-lg tracking-wider mb-1">{bank.number}</p>
              <p className="font-sans text-sm text-gray-500 mb-4 font-light">a.n. {bank.holder}</p>
              
              <button 
                onClick={() => handleCopy(bank.number, bank.id)}
                className="px-6 py-2 bg-white text-dark font-sans text-sm rounded-full hover:bg-gray-50 transition-colors border shadow-sm w-40"
              >
                {copied === bank.id ? 'Disalin! ✓' : 'Salin Rekening'}
              </button>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Hadiah;
