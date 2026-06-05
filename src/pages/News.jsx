// src/pages/News.jsx
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

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
        <h1 className="relative z-10 text-4xl md:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('news.pageTitle')}
        </h1>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: UPCOMING EVENTS (List Layout)                */}
        {/* ========================================================= */}
        <div className="lg:w-1/3 w-full">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-[#8b3a2b]/20 pb-4">
            <svg className="w-8 h-8 text-[#8b3a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="text-3xl font-rozha font-bold text-orange-950">
              {t('news.upcomingTitle')}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Event Card 1 */}
            <div className="flex items-start gap-5 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-stone-200 hover:shadow-md hover:bg-white transition-all duration-300 group">
              <div className="bg-[#8b3a2b] text-amber-50 rounded-lg p-3 flex flex-col items-center justify-center min-w-[75px] shadow-inner group-hover:bg-amber-600 transition-colors">
                <span className="text-2xl font-bold leading-none mb-1">15</span>
                <span className="text-xs uppercase tracking-widest font-medium">Oct</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-stone-800 leading-tight mb-1">{t('news.event1Title')}</h4>
                <p className="text-stone-600 text-sm">{t('news.event1Desc')}</p>
                <button className="text-[#8b3a2b] text-sm font-bold mt-2 hover:text-amber-600 uppercase tracking-wide">
                  {t('news.readMore')} &rarr;
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="flex items-start gap-5 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-stone-200 hover:shadow-md hover:bg-white transition-all duration-300 group">
              <div className="bg-[#8b3a2b] text-amber-50 rounded-lg p-3 flex flex-col items-center justify-center min-w-[75px] shadow-inner group-hover:bg-amber-600 transition-colors">
                <span className="text-2xl font-bold leading-none mb-1">12</span>
                <span className="text-xs uppercase tracking-widest font-medium">Nov</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-stone-800 leading-tight mb-1">{t('news.event2Title')}</h4>
                <p className="text-stone-600 text-sm">{t('news.event2Desc')}</p>
                <button className="text-[#8b3a2b] text-sm font-bold mt-2 hover:text-amber-600 uppercase tracking-wide">
                  {t('news.readMore')} &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: LATEST NEWS (Grid Layout)                   */}
        {/* ========================================================= */}
        <div className="lg:w-2/3 w-full">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-[#8b3a2b]/20 pb-4">
            <svg className="w-8 h-8 text-[#8b3a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h2 className="text-3xl font-rozha font-bold text-orange-950">
              {t('news.latestNewsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* News Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1593014164582-74718cb14eb5?q=80&w=600&auto=format&fit=crop" 
                  alt="Food Distribution" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {t('news.tagCommunity')}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-stone-400 text-xs font-semibold mb-2 block">10 Sep 2026</span>
                  <h4 className="text-xl font-bold text-stone-800 leading-snug mb-3">
                    {t('news.news1Title')}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t('news.news1Desc')}
                  </p>
                </div>
                <div className="mt-5 border-t border-stone-100 pt-4">
                  <button className="text-amber-600 text-sm font-bold hover:text-[#8b3a2b] transition-colors">
                    {t('news.readFullStory')}
                  </button>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1604168612704-dfb1200fc0eb?q=80&w=600&auto=format&fit=crop" 
                  alt="Temple Renovation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#8b3a2b] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {t('news.tagTemple')}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-stone-400 text-xs font-semibold mb-2 block">28 Aug 2026</span>
                  <h4 className="text-xl font-bold text-stone-800 leading-snug mb-3">
                    {t('news.news2Title')}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t('news.news2Desc')}
                  </p>
                </div>
                <div className="mt-5 border-t border-stone-100 pt-4">
                  <button className="text-amber-600 text-sm font-bold hover:text-[#8b3a2b] transition-colors">
                    {t('news.readFullStory')}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}