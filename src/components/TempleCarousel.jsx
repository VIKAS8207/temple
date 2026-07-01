// src/components/TempleCarousel.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TempleCarousel({ images = [] }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    // Prevent interval if no images are provided
    if (images.length === 0) return; 
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Changes slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // If no images are passed, don't render the carousel box at all
  if (!images || images.length === 0) return null;

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
      
      {/* The Floating Carousel Box */}
      <div className="relative w-full aspect-video sm:aspect-video max-h-[80vh] bg-stone-900 border-[4px] sm:border-[6px] border-amber-200/60 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(139,58,43,0.15)] group overflow-hidden">
        
        {/* Slides */}
        {images.map((imageSrc, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <img 
              src={imageSrc} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Gradient Overlay for Text Readability (Using your maroon tint) */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#3e1a16]/90 via-[#3e1a16]/40 to-transparent pointer-events-none"></div>
          </div>
        ))}

        {/* Navigation Arrows (Hidden by default, smooth fade in on hover) */}
        <button 
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-amber-500 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20 hover:scale-110"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-amber-500 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20 hover:scale-110"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 rounded-full shadow-md ${
                index === currentIndex 
                  ? 'w-6 sm:w-10 h-2 sm:h-2.5 bg-amber-400' 
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}