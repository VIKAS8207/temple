// src/pages/LuckyDraw.jsx
import { useTranslation } from 'react-i18next';

export default function LuckyDraw() {
  const { t } = useTranslation();

  // Prize Images (Positions removed, just data for the marquee)
  const prizes = [
    { id: 1, name: "Plot", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Gold", img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Bike", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "Car", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80" },
    { id: 5, name: "Fridge", img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=300&q=80" },
    { id: 6, name: "TV", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80" },
    { id: 7, name: "Phone", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" },
  ];

  // We duplicate the array to create a seamless infinite scrolling loop
  const marqueeItems = [...prizes, ...prizes];

  return (
    <div className="min-h-screen bg-[#fcf9f5] relative overflow-hidden flex flex-col items-center pt-24 pb-32">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* 1. TOP TEXT SECTION */}
      <div className="text-center z-10 px-4 max-w-3xl mx-auto mb-16">
        <span className="text-[#8B3A2B] font-bold tracking-[0.2em] uppercase text-xs border border-[#8B3A2B]/20 rounded-full px-4 py-1.5 mb-6 inline-block bg-white shadow-sm">
          {t('luckyNew.tag')}
        </span>
        <h1 className="text-4xl md:text-6xl font-rozha text-stone-900 mb-6 leading-tight">
          {t('luckyNew.title')}
        </h1>
        <p className="text-stone-600 font-medium md:text-lg mb-8 max-w-xl mx-auto">
          {t('luckyNew.subtitle')}
        </p>
        <button className="bg-white text-stone-800 border border-stone-200 shadow-sm hover:shadow-md font-semibold px-6 py-2 rounded-full transition-all">
          {t('luckyNew.learnMore')}
        </button>
      </div>

      {/* 2. INFINITE SCROLLING MARQUEE */}
      {/* group class added to pause the animation when the user hovers over it */}
      <div className="relative w-full max-w-[100vw] overflow-hidden z-10 mb-16 group py-4">
        
        {/* Left & Right fade gradients for smooth entering/exiting */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#fcf9f5] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#fcf9f5] to-transparent z-20 pointer-events-none"></div>

        {/* The moving track */}
        <div className="flex w-max animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] items-center">
          {marqueeItems.map((prize, index) => (
            <div key={index} className="flex flex-col items-center mx-6 sm:mx-10 cursor-pointer">
              
              {/* Prize Image Circle */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 bg-white">
                <img 
                  src={prize.img} 
                  alt={prize.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Label directly underneath */}
              <span className="mt-4 bg-white border border-stone-200 text-stone-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                {prize.name}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* 3. THE CENTRAL PURCHASE CARD */}
      <div className="relative w-full max-w-2xl mx-auto px-4 z-20">
        
        {/* Horizontal Design Line running behind the card */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-[50vw] w-[200vw] h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent -z-10 flex items-center justify-center">
          <div className="w-32 h-2 rounded-full bg-[#fcf9f5] border-2 border-amber-300"></div>
        </div>

        {/* The Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_rgba(139,58,43,0.08)]">
          
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-[#8B3A2B] rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 font-rozha">
                {t('luckyNew.cardTitle')}
              </h2>
            </div>
            <div className="bg-[#8B3A2B]/10 text-[#8B3A2B] text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide">
              {t('luckyNew.cardPrice')}
            </div>
          </div>

          <p className="text-stone-500 font-semibold text-sm mb-3">
            {t('luckyNew.cardIncludes')}
          </p>
          
          {/* Pills/Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">{t('luckyNew.tag1')}</span>
            <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1.5 rounded-full">{t('luckyNew.tag2')}</span>
            <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1.5 rounded-full">{t('luckyNew.tag3')}</span>
            <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1.5 rounded-full">{t('luckyNew.tag4')}</span>
          </div>

          {/* Action Button */}
          <button className="w-full flex items-center justify-between bg-stone-50 border border-stone-200 hover:border-amber-400 hover:bg-white p-4 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-md">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-stone-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              <span className="font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">
                {t('luckyNew.buyBtn')}
              </span>
            </div>
            <div className="flex gap-2 text-stone-400 group-hover:text-amber-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </button>

        </div>
      </div>

      {/* Marquee Keyframes Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </div>
  );
}