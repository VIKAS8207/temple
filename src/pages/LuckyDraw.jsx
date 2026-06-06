// src/pages/LuckyDraw.jsx
import { useTranslation } from 'react-i18next';

export default function LuckyDraw() {
  const { t } = useTranslation();

  // Prize Images (Now fully translatable!)
  const prizes = [
    { id: 1, name: t('luckyNew.prizePlot'), img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: t('luckyNew.prizeGold'), img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: t('luckyNew.prizeBike'), img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: t('luckyNew.prizeCar'), img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80" },
    { id: 5, name: t('luckyNew.prizeFridge'), img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=300&q=80" },
    { id: 6, name: t('luckyNew.prizeTV'), img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80" },
    { id: 7, name: t('luckyNew.prizePhone'), img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" },
    { id: 1, name: t('luckyNew.prizePlot'), img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: t('luckyNew.prizeGold'), img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: t('luckyNew.prizeBike'), img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: t('luckyNew.prizeCar'), img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80" },
    { id: 5, name: t('luckyNew.prizeFridge'), img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=300&q=80" },
    { id: 6, name: t('luckyNew.prizeTV'), img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80" },
    { id: 7, name: t('luckyNew.prizePhone'), img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" },
  ];

  // Duplicated array for seamless marquee loop
  const marqueeItems = [...prizes, ...prizes];

  return (
    <div className="min-h-screen bg-[#fcf9f5] relative overflow-hidden flex flex-col items-center pt-12 pb-24 px-4 sm:px-6">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none"></div>

{/* 1. WIDE PRESENTATION BANNER AT THE TOP */}
      <div className="relative z-10 w-full max-w-5xl aspect-[4/3] md:aspect-[16/9] max-h-[55vh] rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white/60 bg-stone-200">
        <img 
          src="/image/lucky.jpg" 
          alt="Bhagyashali Bhakt Upahar Yojna Banner" 
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay at the bottom of the banner */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* 2. MAIN HEADING */}
      <div className="text-center z-10 max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-aparajita text-[#8B3A2B] font-bold mb-4 leading-tight drop-shadow-sm">
          {t('luckyNew.mainHeading', 'भाग्यशाली भक्त उपहार योजना')}
        </h1>
        <p className="text-stone-600 font-medium md:text-lg mb-8 max-w-xl mx-auto">
          {t('luckyNew.subtitle', 'मंदिर के विकास में सहयोग करें और शानदार उपहार जीतने का अवसर पाएं।')}
        </p>
      </div>

      {/* 3. FIXED INFINITE SCROLLING MARQUEE */}
      <div className="relative w-full max-w-[100vw] overflow-hidden z-10 mb-12 group py-4">
        
        {/* Left & Right fade gradients for smooth entering/exiting */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#fcf9f5] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#fcf9f5] to-transparent z-20 pointer-events-none"></div>

        {/* The moving track (Fixed spacing with px-8 instead of gap to ensure seamless loop calculation) */}
        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] items-center">
          {marqueeItems.map((prize, index) => (
            <div key={index} className="flex flex-col items-center px-4 sm:px-8 shrink-0 cursor-pointer">
              
              {/* Prize Image Circle */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-amber-200 shadow-md overflow-hidden transition-transform duration-300 hover:scale-110 bg-white">
                <img 
                  src={prize.img} 
                  alt={prize.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Label */}
              <span className="mt-4 bg-white border border-stone-200 text-stone-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                {prize.name}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* 4. BOOK COUPON BUTTON */}
      <div className="z-10 mb-20 w-full flex justify-center">
        <button className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden">
          {/* Shine sweep effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
          <span className="font-aparajita font-bold text-2xl tracking-wide">
            {t('luckyNew.bookBtn', 'कूपन बुक करें')}
          </span>
        </button>
      </div>

      {/* 5. REALISTIC TICKET/COUPON DESIGN */}
      <div className="relative w-full max-w-2xl mx-auto z-10 px-4 sm:px-8">
        <div className="relative bg-gradient-to-br from-[#8B3A2B] to-[#592218] rounded-xl  p-1 overflow-visible">
          
          {/* Inner Dashed Border to look like a tear-off ticket */}
          <div className="border-[3px] border-dashed border-amber-500/40 rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative bg-[#8B3A2B]/20 backdrop-blur-sm">
            
            {/* Left side: Event Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
              <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-2">
                {t('luckyNew.ticketTag', 'सहयोग रसीद')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-aparajita font-bold text-white leading-tight">
                {t('luckyNew.mainHeading', 'भाग्यशाली भक्त उपहार योजना')}
              </h2>
              <p className="text-amber-100/70 text-sm mt-2 font-medium">
                {t('luckyNew.ticketDesc', 'आपके सहयोग से ही मंदिर का नवनिर्माण संभव है।')}
              </p>
            </div>

            {/* Divider Line on Mobile, Hidden on Desktop */}
            <div className="w-full h-px border-t border-dashed border-amber-500/40 sm:hidden"></div>

            {/* Right side: Price */}
            <div className="flex flex-col items-center justify-center bg-amber-500 rounded-xl px-6 py-4 shadow-inner shrink-0 rotate-[-2deg]">
              <span className="text-orange-950 font-bold uppercase text-xs tracking-widest mb-1">
                {t('luckyNew.ticketPriceLabel', 'सहयोग राशि')}
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">
                ₹500
              </span>
            </div>

          </div>

          {/* Ticket Perforated Cutouts (Left & Right) */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-[#fcf9f5] rounded-full"></div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-[#fcf9f5] rounded-full"></div>

        </div>
      </div>

      {/* Keyframes Injection for Marquee and Shimmer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

    </div>
  );
}