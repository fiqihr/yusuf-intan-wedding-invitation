import { useState, useEffect } from 'react'
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import FadeIn from './FadeIn'

const Ucapan = () => {
  const [messages, setMessages] = useState([])
  const [newName, setNewName] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'ucapan'), orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = []
      snapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() })
      })
      setMessages(messagesData)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newName.trim() || !newMessage.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      await addDoc(collection(db, 'ucapan'), {
        name: newName,
        text: newMessage,
        timestamp: serverTimestamp()
      })
      setNewName('')
      setNewMessage('')
    } catch (error) {
      console.error('Error adding document: ', error)
      alert('Gagal mengirim ucapan, coba lagi nanti.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='py-24 px-6 bg-cream-dark text-center'>
      <FadeIn className='max-w-3xl mx-auto'>
        <h2 className='font-serif text-4xl text-dark mb-2'>Ucapan & Doa</h2>
        <img
          src='/images/gold_line_divider.png'
          alt='Divider'
          className='mx-auto w-32 md:w-48 mb-6 mix-blend-multiply opacity-70'
        />
        <p className='font-sans text-gray-500 font-light mb-12'>Berikan ucapan dan doa restu untuk kedua mempelai.</p>

        <div className='flex flex-col md:flex-row gap-10 text-left'>
          {/* Form */}
          <div className='flex-1 bg-white p-8 rounded-2xl shadow-xl h-fit'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <input
                  type='text'
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className='w-full px-4 py-3 bg-cream border-none rounded-lg focus:ring-2 focus:ring-gold outline-none font-sans text-sm transition-shadow'
                  placeholder='Nama Lengkap'
                  required
                />
              </div>
              <div>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className='w-full px-4 py-3 bg-cream border-none rounded-lg focus:ring-2 focus:ring-gold outline-none font-sans text-sm transition-shadow resize-none h-32'
                  placeholder='Berikan ucapan & doa Anda...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-sans text-sm tracking-widest transition-colors ${isSubmitting ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-dark text-cream hover:bg-black'}`}
              >
                {isSubmitting ? 'MENGIRIM...' : 'KIRIM UCAPAN'}
              </button>
            </form>
          </div>

          {/* List Messages */}
          <div className='flex-none md:flex-1 bg-white p-6 rounded-2xl shadow-xl h-[400px] md:h-[450px] overflow-y-scroll custom-scrollbar'>
            <style>{`
              .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: #d1d5db transparent;
              }
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #d1d5db;
                border-radius: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #9ca3af;
              }
            `}</style>
            <div className='space-y-4'>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className='relative p-5 bg-white rounded-xl shadow-sm border border-gray-100 animate-fade-in-up flex gap-4 text-left hover:shadow-md transition-shadow'
                >
                  {/* Avatar Lingkaran */}
                  <div className='flex-shrink-0 w-10 h-10 bg-dark rounded-full flex items-center justify-center text-cream font-serif text-lg uppercase shadow-inner'>
                    {msg.name ? msg.name.charAt(0) : '?'}
                  </div>
                  {/* Konten Ucapan */}
                  <div className='flex-1'>
                    <h4 className='font-bold font-sans text-dark mb-1'>{msg.name}</h4>
                    <p className='font-sans text-sm text-gray-600 leading-relaxed'>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

export default Ucapan
