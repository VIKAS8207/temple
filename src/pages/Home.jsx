import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ActionButtons from "../components/ActionButtons";
import TempleStats from "../components/TempleStats";
import TempleTiming from "../components/TempleTiming";
import TempleCarousel from "../components/TempleCarousel";
import WinnerList from "../components/WinnerList";
import CursorTrail from "../components/CursorTrail"; 

export default function Home() {
  // Initialize the translation hook
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');

  // --- HERO CAROUSEL STATE & LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // You can update the image paths here to match your actual files
// Now we just pass the translation key
  const heroSlides = [
    { img: "/image/Hero2.png", textKey: "hero.slide1" },
    { img: "/image/Hero1.png", textKey: "hero.slide2" },
    { img: "/image/Hero.png", textKey: "hero.slide3" }, 
  ];

  // Random static positions and animation delays for the twinkling stars
  const starPositions = [
    { top: '10%', left: '5%', delay: '0s', duration: '1.5s' },
    { top: '25%', right: '-5%', delay: '0.5s', duration: '2s' },
    { top: '50%', left: '-8%', delay: '0.2s', duration: '1.8s' },
    { bottom: '20%', right: '8%', delay: '0.8s', duration: '1.6s' },
    { top: '-5%', right: '20%', delay: '1s', duration: '2.2s' },
    { bottom: '10%', left: '15%', delay: '0.4s', duration: '1.4s' }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

  return (
    <div className="flex flex-col min-h-[100vh]">
      
      {/* Global Mouse Twinkle Trail */}
      <CursorTrail />

      {/* Hero Section */}
      <section className="relative flex-grow flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-orange-50 to-stone-50 overflow-hidden">

        {/* --- CALMING BACKGROUND GRADIENTS --- */}
        {/* Soft Amber Glow on Left */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>
        {/* Soft Orange Glow on Right */}
        <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-orange-300/30 rounded-full blur-[140px] pointer-events-none z-0"></div>

        {/* Very Top Sentence */}
        <div className="absolute top-8 md:top-14 left-1/2 -translate-x-1/2 z-30 w-full text-center px-4 ">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            
            {/* Left Flower SVG */}
            <div className=" flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-orange-700/60">
              {[...Array(3)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm overflow-visible">
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.4" transform="rotate(-25 12 22)" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.4" transform="rotate(25 12 22)" />
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" opacity="1" />
                </svg>
              ))}
            </div>

            {/* Bigger Text */}
            <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] font-bold tracking-wide drop-shadow-md whitespace-nowrap">
            {t('hero.templeTrust')}
            </h2>

            {/* Right Flower SVG */}
             <div className=" flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-orange-700/60">
              {[...Array(3)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm overflow-visible">
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.4" transform="rotate(-25 12 22)" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.4" transform="rotate(25 12 22)" />
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" opacity="1" />
                </svg>
              ))}
            </div>

          </div>
        </div>

        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto mt-34 md:mt-56 mb-12 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          
          {/* === LEFT COLUMN === */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full">
            
            {/* Adi Shakti Slogan (Using 4 separate lines for safe HTML breaks) */}
            <div className="font-rozha font-bold text-orange-900 text-3xl sm:text-2xl lg:text-3xl leading-tight">
              {t('hero.slogan1')}<br />
              {t('hero.slogan2')}<br />
              {t('hero.slogan3')}<br />
              {t('hero.slogan4')}
            </div>
            
            {/* Three Traditional 5-Petal Lotus Flowers */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-orange-700/60">
              {[...Array(3)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm overflow-visible">
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.4" transform="rotate(-25 12 22)" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.4" transform="rotate(25 12 22)" />
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" opacity="1" />
                </svg>
              ))}
            </div>

          </div>

          {/* === CENTER COLUMN (Image Carousel, Text, and Glows layered together) === */}
          <div className="relative flex items-center justify-center shrink-0 order-1 lg:order-2">
            
            {/* LAYER 1: The Rotating Yellow Rays (FIXED in background) (z-10) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[130%] max-w-[600px] aspect-square rounded-full bg-[repeating-conic-gradient(from_0deg,#fde047_0deg_15deg,#fbbf24_15deg_30deg)] blur-md animate-[spin_15s_linear_infinite] opacity-80 shadow-[0_0_40px_rgba(251,191,36,0.6)] z-10 pointer-events-none"></div>
            
            {/* LAYER 2: Inner ambient glow (FIXED in background) (z-10) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[105%] max-w-[500px] aspect-square rounded-full bg-gradient-to-tr from-yellow-100 to-amber-200 animate-pulse opacity-70 blur-xl z-10 pointer-events-none"></div>
            
            {/* LAYER 3: Sandwiched Giant Text (FIXED in background) (z-20) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <h1 className={`relative whitespace-nowrap select-none drop-shadow-md text-center font-rozha text-orange-950
                ${isEnglish 
                  ? 'text-[8vw] sm:text-[8vw] md:text-[8vw] lg:text-[8vw] tracking-normal' 
                  : 'text-[12vw] sm:text-[12vw] md:text-[8vw] lg:text-[12vw] tracking-wide'
                }`}>
                {t('hero.templeName')}
              </h1>
            </div>

            {/* LAYER 4: The Animated Image Crossfade Carousel (z-30) */}
            <div className="relative z-30 w-64 sm:w-80 md:w-[28rem] pb-4">
              <div className="grid grid-cols-1 grid-rows-1">
                {heroSlides.map((slide, index) => (
                  <div 
                    key={index} 
                    className={`col-start-1 row-start-1 w-full flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out
                      ${currentSlide === index ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 pointer-events-none'}`}
                  >
                    <div className="relative">
                      
                      {/* Twinkling Stars Overlay */}
                      {currentSlide === index && starPositions.map((star, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="currentColor" 
                             className="absolute text-yellow-300 w-6 h-6 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] z-40 animate-star"
                             style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom, '--delay': star.delay, '--duration': star.duration }}>
                          <path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6.4-4.6-6.4 4.6 2.4-7.6-6-4.8h7.6z"/>
                        </svg>
                      ))}

                      <img
                        src={slide.img} 
                        alt={slide.en}
                        className="w-64 sm:w-80 md:w-[28rem] h-auto object-cover drop-shadow-2xl rounded-3xl"
                      />
                    </div>
                    
                    <div className="mt-6 text-center">
                      <h3 className="font-rozha text-3xl md:text-4xl text-orange-950 font-bold drop-shadow-md mb-1">
                        {t(slide.textKey)}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right order-3 lg:order-3 w-full">
            
            <img 
              src="/image/Pooja.png" 
              alt="Pooja Items" 
              className="w-24 h-24 lg:w-32 lg:h-32 mb-4 lg:mb-6"
            />
            
            {/* Fixed sizing wrapper with adaptive layout sizes */}
            <p className={`text-stone-700 font-rozha mb-8 max-w-[280px] md:max-w-[320px] break-words hyphens-auto leading-relaxed
                ${isEnglish ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>
              {t('hero.description')}
            </p>

            {/* Pooja Seva Button (Animated Lotus Bloom) */}
            <button className="group relative flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-orange-500/40 transition-all duration-500 overflow-visible">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 overflow-visible">
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:-rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:-rotate-[45deg] group-hover:opacity-50" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-[45deg] group-hover:opacity-50" />
              </svg>
              <span className="text-sm sm:text-base">{t('hero.poojaSeva')}</span>
            </button>
            
          </div>
          
        </div>
        
      </section>

      <ActionButtons />
      <TempleCarousel />
      <TempleStats />
      <WinnerList />   
      <TempleTiming />

      {/* --- INJECTED CSS FOR STAR TWINKLING ANIMATION --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes star-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
        }
        .animate-star {
          animation: star-twinkle var(--duration) ease-in-out var(--delay) infinite;
        }
      `}} />

    </div>
  );
}