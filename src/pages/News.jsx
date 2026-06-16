// src/pages/News.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();
  // State to handle the toggle between 'events' and 'news'
  const [activeTab, setActiveTab] = useState('events');

  return (
    <div className="min-h-screen bg-[#f4ece1] pb-24 relative overflow-hidden">
      
      {/* Background Mandala Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] text-[#eedcbf] py-16 px-4 border-b-[6px] border-amber-500/40 flex flex-col items-center text-center shadow-lg">
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('news.pageTitle')}
        </h1>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      {/* 2. TOGGLE BUTTONS (TABS) */}
      <div className="relative z-20 flex justify-center mt-10 px-4">
        <div className="bg-white/60 backdrop-blur-md p-1.5 rounded-full inline-flex shadow-sm border border-stone-200">
          <button 
            onClick={() => setActiveTab('events')}
            className={`px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
              activeTab === 'events' 
                ? 'bg-gradient-to-r from-[#8b3a2b] to-[#592218] text-white shadow-md' 
                : 'text-stone-600 hover:text-[#8b3a2b]'
            }`}
          >
            {t('news.tabEvents')}
          </button>
          <button 
            onClick={() => setActiveTab('news')}
            className={`px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
              activeTab === 'news' 
                ? 'bg-gradient-to-r from-[#8b3a2b] to-[#592218] text-white shadow-md' 
                : 'text-stone-600 hover:text-[#8b3a2b]'
            }`}
          >
            {t('news.tabNews')}
          </button>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 min-h-[50vh]">
        
        {/* ========================================================= */}
        {/* EVENTS VIEW (Full Width Stacked Cards)                    */}
        {/* ========================================================= */}
        {activeTab === 'events' && (
          <div className="flex flex-col gap-6 max-w-5xl mx-auto animate-[fadeIn_0.4s_ease-out]">
            
            {/* Event Card 1 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group">
              <div className="bg-gradient-to-b from-[#8b3a2b] to-[#592218] text-amber-50 rounded-xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-inner group-hover:scale-105 transition-transform shrink-0">
                <span className="text-3xl font-bold leading-none mb-1">15</span>
                <span className="text-sm uppercase tracking-widest font-medium">Oct</span>
              </div>
              <div className="flex-grow text-center sm:text-left mt-2 sm:mt-0">
                <h4 className="text-xl sm:text-2xl font-bold text-stone-800 leading-tight mb-2 font-rozha">{t('news.event1Title')}</h4>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">{t('news.event1Desc')}</p>
                <button className="text-[#8b3a2b] font-bold hover:text-amber-600 uppercase tracking-wide flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
                  {t('news.readMore')} 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-stone-200 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group">
              <div className="bg-gradient-to-b from-[#8b3a2b] to-[#592218] text-amber-50 rounded-xl p-4 flex flex-col items-center justify-center min-w-[100px] shadow-inner group-hover:scale-105 transition-transform shrink-0">
                <span className="text-3xl font-bold leading-none mb-1">12</span>
                <span className="text-sm uppercase tracking-widest font-medium">Nov</span>
              </div>
              <div className="flex-grow text-center sm:text-left mt-2 sm:mt-0">
                <h4 className="text-xl sm:text-2xl font-bold text-stone-800 leading-tight mb-2 font-rozha">{t('news.event2Title')}</h4>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">{t('news.event2Desc')}</p>
                <button className="text-[#8b3a2b] font-bold hover:text-amber-600 uppercase tracking-wide flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
                  {t('news.readMore')} 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* NEWS VIEW (Responsive Grid)                               */}
        {/* ========================================================= */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.4s_ease-out]">
            
            {/* News Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1593014164582-74718cb14eb5?q=80&w=600&auto=format&fit=crop" 
                  alt="Food Distribution" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {t('news.tagCommunity')}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-stone-400 text-xs font-semibold mb-3 block">10 Sep 2026</span>
                  <h4 className="text-xl font-bold text-stone-800 leading-snug mb-3 font-rozha">
                    {t('news.news1Title')}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t('news.news1Desc')}
                  </p>
                </div>
                <div className="mt-6 border-t border-stone-100 pt-4">
                  <button className="text-amber-600 text-sm font-bold hover:text-[#8b3a2b] transition-colors flex items-center gap-2">
                    {t('news.readFullStory')}
                    <span className="text-lg leading-none">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1604168612704-dfb1200fc0eb?q=80&w=600&auto=format&fit=crop" 
                  alt="Temple Renovation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#8b3a2b] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {t('news.tagTemple')}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-stone-400 text-xs font-semibold mb-3 block">28 Aug 2026</span>
                  <h4 className="text-xl font-bold text-stone-800 leading-snug mb-3 font-rozha">
                    {t('news.news2Title')}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t('news.news2Desc')}
                  </p>
                </div>
                <div className="mt-6 border-t border-stone-100 pt-4">
                  <button className="text-amber-600 text-sm font-bold hover:text-[#8b3a2b] transition-colors flex items-center gap-2">
                    {t('news.readFullStory')}
                    <span className="text-lg leading-none">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

    </div>
  );
}