// src/pages/About.jsx
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col min-h-screen bg-[#f4ece1] overflow-hidden">
      
      {/* Background Mandala Pattern (covers the lower section) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mt-[200px]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Top Banner - Flush edge-to-edge */}
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] text-[#eedcbf] py-16 px-4 border-b-[6px] border-amber-500/40 flex flex-col items-center text-center shadow-lg shrink-0 z-20">
        <div className="w-12 h-12 mx-auto bg-[#8B3A2B] rounded-full flex items-center justify-center text-amber-300 text-2xl mb-4 shadow-md border border-amber-500/30">
          ॐ
        </div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('about.pageTitle')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm text-amber-200/80 mb-6">
          {t('about.subtitle', 'The Divine Legacy')}
        </p>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      {/* Main Content Area */}
      <div className="relative flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 z-10">
        
        {/* Top Section: Text (Left) & Image (Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text Description */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#8B3A2B] mb-6 tracking-wide font-rozha">
              {t('about.heading')}
            </h2>
            <div className="space-y-5 text-lg text-stone-700 leading-relaxed font-medium">
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </div>
            
            {/* Spiritual Quote Block */}
            <div className="mt-8 border-l-[4px] border-amber-500 pl-6 py-3 bg-white/40 rounded-r-xl shadow-[inset_2px_0_0_rgba(255,255,255,0.5)]">
              <p className="text-xl md:text-2xl font-rozha text-orange-950 italic">
                "{t('about.quote')}"
              </p>
            </div>
          </div>

          {/* Right Side: Image with Traditional Arched Frame */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative p-3 bg-white shadow-2xl rounded-t-[10rem] rounded-b-2xl border border-stone-200 w-full max-w-md group">
              <div className="overflow-hidden rounded-t-[9rem] rounded-b-xl border-4 border-amber-500/30">
                <img 
                  // Change to your actual image path
                  src="/image/stamp.jpg" 
                  alt="Temple History" 
                  className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}