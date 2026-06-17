// src/pages/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
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
          {t('about.pageTitle')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm sm:text-base text-amber-200/80 mb-4 max-w-2xl mx-auto">
          {t('about.subtitle')}
        </p>
        <div className="relative z-10 flex items-center justify-center gap-2 mt-2">
          <span className="w-16 h-1 bg-amber-500"></span>
          <span className="w-2 h-2 bg-amber-400 rotate-45"></span>
          <span className="w-16 h-1 bg-amber-500"></span>
        </div>
      </section>

      {/* =========================================
          2. GENERAL ABOUT US (NO IMAGE, TEXT ONLY)
      ========================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 mt-20 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-px bg-amber-600/50"></span>
          <div className="w-10 h-10 bg-[#8B3A2B] rounded-full flex items-center justify-center text-amber-300 text-lg shadow-md border border-amber-500/30">ॐ</div>
          <span className="w-12 h-px bg-amber-600/50"></span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-8">
          {t('about.genHeading')}
        </h2>
        
        <div className="space-y-6 text-stone-700 font-medium md:text-lg leading-relaxed px-4 sm:px-8">
          <p>{t('about.genDesc1')}</p>
          <p>{t('about.genDesc2')}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-2xl mx-auto flex items-center justify-center gap-4 my-10 opacity-40">
        <span className="h-px bg-stone-400 flex-grow"></span>
        <span className="text-stone-500 font-rozha text-2xl">❖</span>
        <span className="h-px bg-stone-400 flex-grow"></span>
      </div>

      {/* =========================================
          3. THE THREE MATHAS (ZIG-ZAG LAYOUT)
      ========================================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mb-20">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-rozha text-orange-900 font-bold drop-shadow-sm">
            {t('about.mathaHeading')}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-20 lg:space-y-32">
          
          {/* Matha 1: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">प्रथम स्वरूप</span>
              <h3 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-6">
                {t('about.matha1Title')}
              </h3>
              <p className="text-stone-700 font-medium md:text-lg leading-relaxed">
                {t('about.matha1Desc')}
              </p>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <div className="relative p-2 bg-white rounded-t-2xl rounded-b-2xl shadow-xl border border-stone-200 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="overflow-hidden rounded-t-2xl rounded-b-xl border-4 border-amber-500/30">
                  <img src="https://images.unsplash.com/photo-1590055531615-f16d36ffe8ea?auto=format&fit=crop&w=800&q=80" alt="Maa Badi Mata" className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>
            </div>
          </div>

          {/* Matha 2: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">द्वितीय स्वरूप</span>
              <h3 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-6">
                {t('about.matha2Title')}
              </h3>
              <p className="text-stone-700 font-medium md:text-lg leading-relaxed">
                {t('about.matha2Desc')}
              </p>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <div className="relative p-2 bg-white rounded-t-2xl rounded-b-2xl shadow-xl border border-stone-200 -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="overflow-hidden rounded-t-2xl rounded-b-xl border-4 border-amber-500/30">
                  <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" alt="Maa Manjhli Mata" className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>
            </div>
          </div>

          {/* Matha 3: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">तृतीय स्वरूप</span>
              <h3 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold mb-6">
                {t('about.matha3Title')}
              </h3>
              <p className="text-stone-700 font-medium md:text-lg leading-relaxed">
                {t('about.matha3Desc')}
              </p>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <div className="relative p-2 bg-white rounded-t-2xl rounded-b-2xl shadow-xl border border-stone-200 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="overflow-hidden rounded-t-2xl rounded-b-xl border-4 border-amber-500/30">
                  <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80" alt="Maa Chhoti Mata" className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          4. SLOGAN & CTA TO NEWS/EVENTS
      ========================================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mt-10">
        
        {/* Highlight Slogan Box */}
        <div className="bg-gradient-to-br from-[#8B3A2B] to-[#592218] px-6 sm:px-12 py-12 md:py-16 rounded-3xl border-4 border-amber-500/20 w-full relative overflow-hidden shadow-2xl text-center flex flex-col items-center">
          {/* Subtle overlay elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-tr-full pointer-events-none"></div>
          
          <span className="text-6xl sm:text-8xl text-amber-500/20 font-serif leading-none h-10 sm:h-16">"</span>
          
          <p className="text-2xl sm:text-3xl md:text-4xl font-aparajita text-amber-300 font-bold tracking-wide drop-shadow-md relative z-10 max-w-3xl leading-relaxed mb-10">
            {t('about.slogan')}
          </p>

          {/* CTA Button */}
          <Link 
            to="/news"
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-600 text-orange-950 px-8 md:px-10 py-4 rounded-full shadow-[0_8px_20px_rgba(251,191,36,0.3)] hover:-translate-y-1 transition-all duration-300 ring-4 ring-amber-400/20 z-10"
          >
            <span className="font-bold text-lg md:text-xl tracking-wide uppercase">
              {t('about.ctaBtn')}
            </span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </Link>

        </div>

      </div>

    </div>
  );
}