// src/pages/About.jsx
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#f4ece1] py-16 overflow-hidden">
      
      {/* Background Mandala Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto bg-[#8B3A2B] rounded-full flex items-center justify-center text-amber-300 text-3xl mb-4 shadow-md">
            ॐ
          </div>
          <h1 className="text-5xl md:text-6xl font-rozha text-orange-950 drop-shadow-sm">
            {t('about.pageTitle')}
          </h1>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Top Section: Text (Left) & Image (Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
          
          {/* Left Side: Text Description */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#8B3A2B] mb-6 tracking-wide">
              {t('about.heading')}
            </h2>
            <div className="space-y-5 text-lg text-stone-700 leading-relaxed font-medium">
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </div>
            
            {/* Spiritual Quote Block */}
            <div className="mt-8 border-l-4 border-amber-500 pl-6 py-2">
              <p className="text-xl font-rozha text-orange-900 italic">
                "{t('about.quote')}"
              </p>
            </div>
          </div>

          {/* Right Side: Image with Traditional Arched Frame */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative p-3 bg-white shadow-xl rounded-t-[10rem] rounded-b-2xl border border-stone-200 w-full max-w-md group">
              <div className="overflow-hidden rounded-t-[9rem] rounded-b-xl border-4 border-amber-500/30">
                <img 
                  // Change to your actual image path
                  src="/image/stamp.jpg" 
                  alt="Temple History" 
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Corner Flowers */}
              <svg className="absolute -bottom-4 -left-4 w-12 h-12 text-amber-500 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z"/></svg>
              <svg className="absolute -bottom-4 -right-4 w-12 h-12 text-amber-500 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z"/></svg>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}