// src/pages/LuckyDraw.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LuckyDraw() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Full-Width Carousel Images
  const carouselImages = [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1920&q=80"
  ];

  // 2. Major Prizes (Dynamic Translation)
  const majorPrizes = [
    { id: 1, img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80', title: t('luckyNew.prizePlot') },
    { id: 2, img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80', title: t('luckyNew.prizeCar') },
    { id: 3, img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80', title: t('luckyNew.prizeRE') },
    { id: 4, img: 'https://images.unsplash.com/photo-1593950315186-76a92975b60c?auto=format&fit=crop&w=400&q=80', title: t('luckyNew.prizeChetak') },
    { id: 5, img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80', title: t('luckyNew.prizeOther') },
  ];

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-[#f8f4ed] relative overflow-hidden flex flex-col items-center pb-24">
      
      {/* Background ambient mandala pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* =========================================
          1. HEADER SECTION
      ========================================= */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#3e1a16] via-[#2a110e] to-[#3e1a16] text-[#eedcbf] py-12 md:py-16 px-4 border-b-8 border-amber-500 flex flex-col items-center text-center shadow-2xl">
        <div className="absolute inset-0  mix-blend-overlay"></div>
        <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-rozha text-[#eedcbf] font-bold mb-4 leading-snug drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          {t('luckyNew.pageTitle')}
        </h1>
        <div className="relative z-10 flex items-center justify-center gap-2 mt-2">
          <span className="w-10 sm:w-16 h-1 bg-amber-500"></span>
          <span className="w-2 h-2 bg-amber-400 rotate-45"></span>
          <span className="w-10 sm:w-16 h-1 bg-amber-500"></span>
        </div>
      </section>

      {/* =========================================
          2. FULL WIDTH CAROUSEL SECTION
      ========================================= */}
      <div className="relative z-10 w-full h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[75vh] bg-stone-900 border-b-4 border-amber-200 shadow-2xl group">
        {carouselImages.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#f8f4ed] via-black/20 to-transparent z-20 pointer-events-none"></div>

        {/* Arrow Controls (Hidden on very small mobile, visible on tablet+) */}
        <button onClick={prevSlide} className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-amber-500 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-white/20">
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button onClick={nextSlide} className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-amber-500 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-white/20">
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
          {carouselImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 shadow-md ${
                currentSlide === index ? 'bg-amber-400 w-6 sm:w-8' : 'bg-white/70 hover:bg-white w-2 sm:w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================================
          3. MAJOR PRIZES SECTION (Horizontal Single Line)
      ========================================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mt-12 sm:mt-16 mb-16 sm:mb-20">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
            {t('luckyNew.grandPrizesTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-rozha text-[#8B3A2B] font-bold mt-2 drop-shadow-sm">
            {t('luckyNew.prizeHeading')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-16 sm:w-20 h-[2px] bg-amber-400"></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-500 rotate-45"></span>
            <span className="w-16 sm:w-20 h-[2px] bg-amber-400"></span>
          </div>
        </div>

        {/* Horizontal Scroll Container (Mobile Friendly Swipe) */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 pt-4 px-2 snap-x snap-mandatory hide-scrollbar">
          {majorPrizes.map((prize) => (
            <div key={prize.id} className="relative shrink-0 w-56 sm:w-64 md:w-72 bg-white rounded-2xl shadow-xl snap-center group cursor-pointer border-[3px] border-double border-amber-200 hover:border-amber-400 transition-all duration-300 hover:-translate-y-2">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <img src={prize.img} alt={prize.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-white to-amber-50/50 rounded-b-xl">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800 font-aparajita tracking-wide drop-shadow-sm">
                  {prize.title}
                </h3>
              </div>
              {/* Corner decorative anchors */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white drop-shadow-md z-10"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white drop-shadow-md z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          4. INTRODUCTION & OBJECTIVE
      ========================================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mb-16 sm:mb-20">
        
        {/* Ornate Intro Box */}
        <div className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-8 md:p-12 mb-10 sm:mb-12 shadow-[0_8px_30px_rgba(139,58,43,0.08)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400"></div>
          <span className="absolute -top-6 -left-2 text-[80px] md:text-[120px] text-amber-500/10 font-serif leading-none">"</span>
          
          <div className="relative z-10 text-center">
            <h3 className="text-amber-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4">
              {t('luckyNew.introTag')}
            </h3>
            <p className="text-xl sm:text-2xl md:text-4xl font-rozha text-[#8B3A2B] leading-relaxed mb-6 sm:mb-8 italic drop-shadow-sm">
              {t('luckyNew.introQuote')}
            </p>
            <div className="w-16 sm:w-24 h-[1px] bg-stone-300 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-stone-700 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              {t('luckyNew.introDetail')}
            </p>
          </div>
        </div>

        {/* Objective & How to Join */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-[#8B3A2B] to-[#592218] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 text-lg sm:text-xl mb-4 sm:mb-6">🎯</div>
            <h3 className="text-xl sm:text-2xl font-bold font-aparajita mb-3 sm:mb-4 tracking-wide text-amber-300">{t('luckyNew.objTitle')}</h3>
            <p className="text-amber-50/90 font-medium text-sm sm:text-base leading-relaxed">
              {t('luckyNew.objText')}
            </p>
          </div>

          <div className="bg-white border-2 border-stone-100 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-amber-300 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 text-lg sm:text-xl mb-4 sm:mb-6">🙏</div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#8B3A2B] font-aparajita mb-3 sm:mb-4 tracking-wide">{t('luckyNew.joinTitle')}</h3>
            <p className="text-stone-600 font-medium text-sm sm:text-base leading-relaxed">
              {t('luckyNew.joinText')}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          5. HOW TO GET COUPON
      ========================================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-rozha text-[#8B3A2B] font-bold">
            {t('luckyNew.getCouponTitle')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-[2px] bg-amber-400"></span>
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="w-12 h-[2px] bg-amber-400"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Online Method */}
          <div className="bg-white border-[3px] border-amber-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all relative">
            <div className="absolute -top-4 sm:-top-5 left-6 sm:left-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              {t('luckyNew.onlineMethod')}
            </div>
            <ul className="space-y-4 mt-6 sm:mt-8">
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-600 text-sm sm:text-base">1</span>
                {t('luckyNew.onlineStep1')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-600 text-sm sm:text-base">2</span>
                {t('luckyNew.onlineStep2')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-600 text-sm sm:text-base">3</span>
                {t('luckyNew.onlineStep3')}
              </li>
            </ul>
          </div>

          {/* Offline Method */}
          <div className="bg-white border-[3px] border-stone-200 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all relative mt-4 sm:mt-0">
            <div className="absolute -top-4 sm:-top-5 left-6 sm:left-8 bg-stone-700 text-white font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {t('luckyNew.offlineMethod')}
            </div>
            <ul className="space-y-4 mt-6 sm:mt-8">
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></span>
                {t('luckyNew.offlineStep1')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></span>
                {t('luckyNew.offlineStep2')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></span>
                {t('luckyNew.offlineStep3')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================
          6. CTA BUTTON MODAL TRIGGER
      ========================================= */}
      <div className="z-10 mb-8 w-full flex justify-center px-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_10px_30px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto overflow-hidden ring-4 ring-orange-600/20"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
          <span className="font-rozha font-bold text-2xl sm:text-3xl tracking-wide drop-shadow-md">
            {t('luckyNew.ctaBtn')}
          </span>
        </button>
      </div>

      {/* =========================================
          7. PAYMENT POPUP MODAL (Mobile Optimized)
      ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 animate-[fadeIn_0.3s_ease-out] border-4 border-amber-100 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-red-600 hover:rotate-90 transition-all bg-stone-100 hover:bg-red-50 p-2 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-2xl sm:text-3xl shadow-inner border border-amber-200">
                🎫
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#8B3A2B] font-rozha mb-1 sm:mb-2">{t('luckyNew.modalTitle')}</h2>
              <p className="text-stone-500 text-xs sm:text-sm">{t('luckyNew.modalSubtitle')}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(t('luckyNew.modalAlert')); }}>
              <input type="text" placeholder={t('luckyNew.modalNamePlaceholder')} required className="w-full p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base" />
              <input type="tel" placeholder={t('luckyNew.modalPhonePlaceholder')} required className="w-full p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base" />
              
              <div className="flex items-center justify-between p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl mt-4">
                <span className="font-bold text-stone-700 text-sm sm:text-base">{t('luckyNew.modalAmountLabel')}</span>
                <span className="font-black text-xl sm:text-2xl text-orange-600">{t('luckyNew.modalAmount')}</span>
              </div>

              <button type="submit" className="w-full py-3 sm:py-4 mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                {t('luckyNew.modalPayBtn')}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Global styles for hide-scrollbar and animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />

    </div>
  );
}