import { useRef, useState, useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    {
      title: "Melayu Bride",
      img: "https://images.unsplash.com/photo-1692899189376-c9f179f9dc49?q=80&w=800&auto=format&fit=crop",
      tag: "Wedding"
    },
    {
      title: "Sangjit Look",
      img: "https://images.unsplash.com/photo-1737219239186-6c0900c28d71?q=80&w=800&auto=format&fit=crop",
      tag: "Engagement"
    },
    {
      title: "Wisuda Style",
      img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
      tag: "Graduation"
    },
    {
      title: "Reception Glam",
      img: "https://images.unsplash.com/photo-1750931643580-a20f39b79555?q=80&w=800&auto=format&fit=crop",
      tag: "Wedding"
    },
    {
      title: "Pre-wedding",
      img: "https://images.unsplash.com/photo-1755904042206-ae518456ef3d?q=80&w=800&auto=format&fit=crop",
      tag: "Photoshoot"
    },
    {
      title: "Bridesmaid",
      img: "https://images.unsplash.com/photo-1596704017235-d918559d380e?q=80&w=800&auto=format&fit=crop",
      tag: "Party"
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (container.scrollWidth > container.clientWidth) {
        if (!isDragging && !isPaused) {
          container.scrollLeft += 0.8;

          if (container.scrollLeft >= (container.scrollWidth / 2)) {
            container.scrollLeft = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section id="portfolio" className="py-24 bg-oak overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-creme font-medium">Koleksi Portfolio</h2>
            <p className="text-creme/80 font-normal">Koleksi tampilan pilihan dari feed Instagram kami</p>
          </div>
          <a
            href="https://instagram.com/bykhaisa"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center px-6 py-3 bg-creme border border-oak/30 text-clay-dark rounded-full hover:bg-bone transition shadow-sm text-sm font-bold uppercase tracking-wider"
          >
            <Instagram size={16} className="mr-2" /> @bykhaisa
          </a>
        </div>

        <div
          ref={scrollRef}
          className={`flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white p-3 pb-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 flex-shrink-0 w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[20vw] select-none rotate-0 hover:-rotate-1 transform"
            >
              <div className="overflow-hidden aspect-[4/5] bg-creme relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover pointer-events-none transition duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  draggable="false"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/50">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-clay-dark">{item.tag}</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-clay-dark text-xl italic">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://instagram.com/bykhaisa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-clay-dark font-bold border-b-2 border-clay-dark pb-1 hover:text-clay hover:border-clay transition"
          >
            Lihat Instagram <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>


    </section>
  );
};

export default Portfolio;

