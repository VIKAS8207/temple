// src/pages/Nirman.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Nirman() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#fcf9f5] relative overflow-hidden flex flex-col items-center pb-24">
      
      {/* Background ambient mandala pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* =========================================
          1. HEADER SECTION
      ========================================= */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#3e1a16] via-[#2a110e] to-[#3e1a16] text-[#eedcbf] py-16 px-4 border-b-8 border-amber-500 flex flex-col items-center text-center shadow-2xl">
        <div className="absolute inset-0 mix-blend-overlay"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-rozha text-[#eedcbf] font-bold mb-4 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          {t('nirman.pageTitle')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm text-amber-200/80 mb-4 max-w-2xl mx-auto">
          {t('nirman.subtitle')}
        </p>
        <div className="relative z-10 flex items-center justify-center gap-2 mt-2">
          <span className="w-16 h-1 bg-amber-500"></span>
          <span className="w-2 h-2 bg-amber-400 rotate-45"></span>
          <span className="w-16 h-1 bg-amber-500"></span>
        </div>
      </section>

      {/* =========================================
          2. CONTENT SECTIONS (ZIG-ZAG LAYOUT)
      ========================================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mt-16 space-y-20 lg:space-y-32">

        {/* Section 1: The Vision (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-6">
              {t('nirman.sec1Title')}
            </h2>
            <p className="text-stone-700 font-medium md:text-lg leading-relaxed">
              {t('nirman.sec1Text')}
            </p>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-full">
            <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-stone-200 rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="overflow-hidden rounded-xl border-2 border-amber-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1590055531615-f16d36ffe8ea?auto=format&fit=crop&w=800&q=80" 
                  alt="Temple Vision" 
                  className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Architecture (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-6">
              {t('nirman.sec2Title')}
            </h2>
            <p className="text-stone-700 font-medium md:text-lg leading-relaxed">
              {t('nirman.sec2Text')}
            </p>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-full">
            <div className="relative p-2 bg-white rounded-2xl shadow-xl border border-stone-200 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="overflow-hidden rounded-xl border-2 border-amber-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" 
                  alt="Architectural Grandeur" 
                  className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Quote Box */}
        <div className="bg-gradient-to-r from-amber-100/50 via-amber-100 to-amber-100/50 px-8 py-10 rounded-3xl border border-amber-200 w-full relative overflow-hidden shadow-sm max-w-4xl mx-auto text-center">
          <span className="absolute -top-6 -left-2 text-[100px] text-amber-500/20 font-serif">"</span>
          <p className="text-2xl md:text-3xl font-aparajita text-[#8B3A2B] font-bold tracking-wide drop-shadow-sm relative z-10">
            {t('nirman.sec3Text')}
          </p>
          <span className="absolute -bottom-16 -right-2 text-[100px] text-amber-500/20 font-serif">"</span>
        </div>

        {/* Section 3: Current Status (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-6">
              {t('nirman.sec4Title')}
            </h2>
            <p className="text-stone-700 font-medium md:text-lg leading-relaxed">
              {t('nirman.sec4Text')}
            </p>
            
            {/* Call to Action Button */}
            <div className="mt-10">
              <Link 
                to="/donate"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white px-8 md:px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(234,88,12,0.3)] hover:-translate-y-1 transition-all duration-300 ring-4 ring-orange-600/20 group"
              >
                <span className="font-rozha font-bold text-xl md:text-2xl tracking-wide">
                  {t('nirman.ctaBtn')}
                </span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </div>

          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-full">
            <div className="relative p-2 bg-white rounded-t-[10rem] rounded-b-2xl shadow-xl border border-stone-200">
              <div className="overflow-hidden rounded-t-[9.5rem] rounded-b-xl border-4 border-amber-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80" 
                  alt="Current Status" 
                  className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Corner */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#8B3A2B] rounded-full border-2 border-amber-100 flex items-center justify-center shadow-md">
                <span className="text-amber-200 text-xl">ॐ</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}