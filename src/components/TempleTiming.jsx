// src/components/TempleTiming.jsx
import { useTranslation } from 'react-i18next';

export default function TempleTiming() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 bg-stone-50 overflow-hidden flex justify-center">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* STAMP / PAPER CUTOUT WRAPPER */}
      <div className="relative max-w-4xl w-full drop-shadow-2xl">
        
        {/* Top Perforated Edge (Stamp Effect) */}
        <div 
          className="w-full h-3 bg-repeat-x z-10 relative"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 12a10 10 0 0 0 20 0H0z' fill='%23fefaf4'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 12px'
          }}
        ></div>

        {/* Main Content Box (Parchment Paper) */}
        <div className="relative bg-[#fefaf4] border-x-4 border-amber-500/20 px-6 py-12 md:px-16 md:py-16">
          
          {/* Inner Decorative Border */}
          <div className="absolute inset-4 border border-dashed border-[#8B3A2B]/40 pointer-events-none"></div>
          
          {/* Corner Flourishes */}
          <svg className="absolute top-6 left-6 w-8 h-8 text-amber-500/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
          <svg className="absolute top-6 right-6 w-8 h-8 text-amber-500/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
          <svg className="absolute bottom-6 left-6 w-8 h-8 text-amber-500/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>
          <svg className="absolute bottom-6 right-6 w-8 h-8 text-amber-500/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"/></svg>

          {/* Title */}
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] inline-block relative">
              {t('timing.title')}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-400 rounded-full"></div>
            </h2>
          </div>

          {/* Timing Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 relative z-10">
            
            {/* Column 1: Darshan Timing */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#8B3A2B] rounded-full flex items-center justify-center text-amber-100 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-950 tracking-wide uppercase border-b-2 border-amber-300 pb-1">
                  {t('timing.darshanTitle')}
                </h3>
              </div>
              <ul className="space-y-4 text-lg font-medium text-stone-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t('timing.morning')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t('timing.evening')}
                </li>
              </ul>
            </div>

            {/* Column 2: Aarti Timing */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#8B3A2B] rounded-full flex items-center justify-center text-amber-100 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-950 tracking-wide uppercase border-b-2 border-amber-300 pb-1">
                  {t('timing.aartiTitle')}
                </h3>
              </div>
              <ul className="space-y-3 text-lg font-medium text-stone-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t('timing.aarti1')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t('timing.aarti2')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t('timing.aarti3')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  {t('timing.aarti4')}
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Perforated Edge (Stamp Effect) */}
        <div 
          className="w-full h-3 bg-repeat-x z-10 relative"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0a10 10 0 0 0 20 0H0z' fill='%23fefaf4'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 12px'
          }}
        ></div>

      </div>
    </section>
  );
}