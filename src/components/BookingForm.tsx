import { useState, useEffect } from 'react';
import { User, Calendar, MapPin, ArrowRight, Star, Tag, Quote } from 'lucide-react';

const WHATSAPP_NUMBER = '6287812234804';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Putri A.",
    text: "Suka banget sama look makeupnya, tahan seharian walaupun outdoor! Hijab stylingnya juga rapi banget.",
    event: "Wedding Melayu"
  },
  {
    id: 2,
    name: "Jessica T.",
    text: "Ci Anisa ngerti banget tone muka aku. Sangjit look-nya elegan, gak menor tapi pangling.",
    event: "Sangjit"
  },
  {
    id: 3,
    name: "Rina S.",
    text: "Makeup wisuda paling awet yang pernah aku coba. Foto studio sore masih on point.",
    event: "Wisuda Untan"
  }
];

const LOCATIONS = [
  "Pontianak Kota",
  "Pontianak Barat",
  "Pontianak Selatan",
  "Pontianak Tenggara",
  "Pontianak Utara",
  "Pontianak Timur",
  "Kubu Raya (Sungai Raya)",
  "Luar Kota (Kalbar - Transport Charge)"
];

const SERVICE_OPTIONS = [
  "Wedding (Akad/Resepsi)",
  "Engagement / Lamaran",
  "Wisuda",
  "Bridesmaid",
  "Yudisium",
  "Pengajian",
  "Makeup Ibu-ibu",
  "Lainnya"
];

interface BookingFormData {
  name: string;
  date: string;
  service: string;
  location: string;
}

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    date: '',
    service: SERVICE_OPTIONS[0],
    location: LOCATIONS[0]
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dateObj = new Date(formData.date);
    const dateStr = isNaN(dateObj.getTime()) ? formData.date : dateObj.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const message = `Halo kak Anisa (@byanisaputri), saya tertarik untuk booking makeup.%0A%0A` +
      `*Detail Booking:*%0A` +
      `👤 Nama: ${formData.name}%0A` +
      `📅 Tanggal: ${dateStr}%0A` +
      `💄 Layanan: ${formData.service}%0A` +
      `📍 Lokasi: ${formData.location}%0A%0A` +
      `Mohon info pricelist dan ketersediaan slotnya ya kak. Terima kasih!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const renderTestimonialCarousel = () => (
    <div className="mt-16 mb-8 w-full max-w-2xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-8">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-clay-dark mb-2">Love Notes</h4>
        <div className="w-12 h-0.5 bg-clay/30"></div>
      </div>

      <div className="relative min-h-[200px]">
        {TESTIMONIALS.map((t, index) => (
          <div
            key={t.id}
            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out flex flex-col items-center text-center ${index === activeTestimonial
              ? 'opacity-100 translate-y-0 visible scale-100'
              : 'opacity-0 translate-y-4 invisible scale-95'
              }`}
          >
            <Quote className="w-8 h-8 text-clay/40 mb-4 fill-clay/10" />

            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-clay text-clay" />
              ))}
            </div>

            <p className="text-clay-dark italic font-serif text-lg md:text-xl mb-6 leading-relaxed">
              "{t.text}"
            </p>

            <div className="flex items-center gap-2">
              <span className="text-oak font-bold text-xs tracking-wider">{t.name}</span>
              <span className="text-bone">•</span>
              <span className="text-clay text-xs font-semibold uppercase">{t.event}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTestimonial(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${idx === activeTestimonial ? 'w-6 bg-clay' : 'w-1.5 bg-oak/40 hover:bg-oak'
              }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="booking" className="py-24 bg-creme relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-bone/30 to-transparent -z-10"></div>

      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col items-center max-w-5xl mx-auto">

          <div className="text-center mb-12 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-clay-dark leading-tight">
              Amankan Tanggal <br /> <span className="text-clay italic font-light">Spesialmu.</span>
            </h2>
            <p className="text-clay-dark/80 text-lg font-light leading-relaxed">
              Slot sangat terbatas, terutama untuk akhir pekan (Sabtu & Minggu). Silakan isi form di bawah ini untuk terhubung langsung ke WhatsApp.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-[0_30px_60px_-15px_rgba(133,124,108,0.1)] border border-bone relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bone via-clay to-bone"></div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-serif text-clay-dark">Booking Inquiry Form</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-clay mb-2">Nama Lengkap</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-oak group-focus-within:text-clay-dark transition-colors" />
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-creme/50 border border-bone rounded-sm focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all text-clay-dark placeholder-oak/70"
                      placeholder="Nama Kakak"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-clay mb-2">Tanggal Acara</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-oak group-focus-within:text-clay-dark transition-colors" />
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-creme/50 border border-bone rounded-sm focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all text-clay-dark placeholder-oak/70"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-clay mb-2">Jenis Makeup</label>
                    <div className="relative group">
                      <Tag className="absolute left-4 top-3.5 w-5 h-5 text-oak group-focus-within:text-clay-dark transition-colors" />
                      <select
                        name="service"
                        className="w-full pl-12 pr-8 py-3.5 bg-creme/50 border border-bone rounded-sm focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all appearance-none text-clay-dark"
                        onChange={handleInputChange}
                        defaultValue={SERVICE_OPTIONS[0]}
                      >
                        {SERVICE_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-clay mb-2">Lokasi</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-oak group-focus-within:text-clay-dark transition-colors" />
                      <select
                        name="location"
                        className="w-full pl-12 pr-8 py-3.5 bg-creme/50 border border-bone rounded-sm focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-all appearance-none text-clay-dark"
                        onChange={handleInputChange}
                        defaultValue={LOCATIONS[0]}
                      >
                        {LOCATIONS.map(loc => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-clay text-creme font-bold py-4 rounded-sm hover:bg-clay-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 mt-8 group tracking-widest uppercase text-xs"
                >
                  Hubungi via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {renderTestimonialCarousel()}

        </div>
      </div>


    </section>
  );
};

export default BookingForm;
