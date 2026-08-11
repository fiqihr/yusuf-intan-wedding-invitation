import FadeIn from './FadeIn';

const Maps = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <FadeIn className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl text-dark mb-4">Lokasi Acara</h2>
        <p className="font-sans text-gray-500 font-light mb-10">
          Klik tombol di bawah ini untuk membuka lokasi acara di Google Maps.
        </p>

        {/* Google Maps Embed */}
        <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8 border-4 border-cream-dark">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24058223652!2d106.75877543888329!3d-6.229746487922251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Acara"
          ></iframe>
        </div>

        <a 
          href="https://goo.gl/maps/dummy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-maroon text-white font-sans tracking-widest text-sm uppercase rounded-full hover:opacity-90 transition-opacity shadow-lg"
        >
          Buka di Google Maps
        </a>
      </FadeIn>
    </section>
  );
};

export default Maps;
