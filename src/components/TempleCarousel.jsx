// src/components/TempleCarousel.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TempleCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Data
  const slides = [
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1200&auto=format&fit=crop",
      title: t('carousel.slide1Title'),
      subtitle: t('carousel.slide1Sub'),
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1604168612704-dfb1200fc0eb?q=80&w=1200&auto=format&fit=crop",
      title: t('carousel.slide2Title'),
      subtitle: t('carousel.slide2Sub'),
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1593014164582-74718cb14eb5?q=80&w=1200&auto=format&fit=crop",
      title: t('carousel.slide3Title'),
      subtitle: t('carousel.slide3Sub'),
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-stone-900 border-y-8 border-amber-600/40">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3e1a16]/90 via-[#3e1a16]/40 to-transparent"></div>
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-32 px-4 text-center">
            <div className="flex items-center gap-4 mb-4 transform translate-y-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.3s]">
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm drop-shadow-md">
                Badimatha Temple
              </span>
              <span className="w-12 h-[2px] bg-amber-500"></span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-rozha text-white mb-4 drop-shadow-xl transform translate-y-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.5s]">
              {slide.title}
            </h2>
            
            <p className="text-amber-50/90 text-lg md:text-xl font-serif max-w-2xl drop-shadow-md transform translate-y-4 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards_0.7s]">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-[#8b3a2b]/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-[#8b3a2b]/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
                ? 'w-8 h-2.5 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]' 
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Add keyframes for the text fade-up animation in tailwind config or globally */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

    </section>
  );
}