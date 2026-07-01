import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function DonationSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 w-full px-4 relative flex justify-center z-10">
      
      {/* Deep, Rich High-Contrast Traditional Plate */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#592218] via-[#3e1a16] to-[#1a0a09] p-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-2 border-amber-500/40">
        
        {/* Traditional Double-Line Gold Frame */}
        <div className="border-2 border-double border-amber-400/40 rounded-2xl p-8 sm:p-14 text-center bg-black/10 relative z-10">
          
          {/* Corner Traditional Accents */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400"></div>

          {/* High-Visibility Gold Header Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 text-xs sm:text-sm font-black uppercase tracking-widest px-6 py-2 rounded-full mb-8 shadow-md border-2 border-amber-300">
            <span>🛕</span> {t('home.donationSection.badge')} <span>🛕</span>
          </div>

          {/* Header Text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-rozha text-amber-400 font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] leading-tight">
            {t('home.donationSection.heading')}
          </h2>
          
          <p className="text-amber-100/90 font-medium text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            {t('home.donationSection.description')}
          </p>

          {/* Redirect CTA Button with Lotus Animation */}
          <Link 
            to="/donation"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-visible ring-4 ring-orange-600/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 overflow-visible shrink-0 transition-transform duration-500 group-hover:scale-110">
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:-rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:-rotate-[45deg] group-hover:opacity-50" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-[45deg] group-hover:opacity-50" />
              </svg>
            <span className="font-rozha font-bold text-xl sm:text-2xl tracking-wide drop-shadow-md">
              {t('home.donationSection.button')}
            </span>
          </Link>
          
        </div>

        {/* Glowing Golden Aura effect from behind */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      </div>
    </section>
  );
}