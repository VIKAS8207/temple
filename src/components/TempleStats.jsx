// src/components/TempleStats.jsx
import { useTranslation } from 'react-i18next';

export default function TempleStats() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-[#8B3A2B] py-6 sm:py-12 border-b-[4px] border-amber-500 overflow-hidden">
      
      {/* Subtle traditional pattern overlay (Matches your footer style) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Responsive Grid - Forced 4 columns on all screens with scaled fonts */}
        <div className="grid grid-cols-4 gap-0 divide-x-[1px] sm:divide-x-2 divide-amber-600/40">
          
          {/* Stat 1: Food Packets */}
          <div className="flex flex-col items-center text-center px-1 sm:px-4 py-2">
            <svg className="w-5 h-5 sm:w-10 sm:h-10 text-amber-400 mb-1.5 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            <h3 className="text-xl sm:text-4xl md:text-5xl font-bold text-amber-400 tracking-tight drop-shadow-md mb-0.5 sm:mb-2">
              {t('stats.stat1Num')}
            </h3>
            <p className="font-rozha text-amber-50 text-[10px] sm:text-base md:text-xl tracking-wide leading-tight break-words">
              {t('stats.stat1Text')}
            </p>
          </div>

          {/* Stat 2: Coupon */}
          <div className="flex flex-col items-center text-center px-1 sm:px-4 py-2">
            <svg className="w-5 h-5 sm:w-10 sm:h-10 text-amber-400 mb-1.5 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
            </svg>
            <h3 className="text-xl sm:text-4xl md:text-5xl font-bold text-amber-400 tracking-tight drop-shadow-md mb-0.5 sm:mb-2">
              {t('stats.stat2Num')}
            </h3>
            <p className="font-rozha text-amber-50 text-[10px] sm:text-base md:text-xl tracking-wide leading-tight break-words">
              {t('stats.stat2Text')}
            </p>
          </div>

          {/* Stat 3: Tuesday Bhandara */}
          <div className="flex flex-col items-center text-center px-1 sm:px-4 py-2">
            <svg className="w-5 h-5 sm:w-10 sm:h-10 text-amber-400 mb-1.5 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <h3 className="text-[13px] sm:text-3xl md:text-4xl font-rozha text-amber-400 drop-shadow-md mb-1 sm:mb-3 sm:mt-1 font-bold whitespace-nowrap">
              {t('stats.stat3Title')}
            </h3>
            <p className="font-rozha text-amber-50 text-[10px] sm:text-base md:text-xl tracking-wide leading-tight break-words">
              {t('stats.stat3Text')}
            </p>
          </div>

          {/* Stat 4: Daily Aarti */}
          <div className="flex flex-col items-center text-center px-1 sm:px-4 py-2">
            <svg className="w-5 h-5 sm:w-10 sm:h-10 text-amber-400 mb-1.5 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22a2 2 0 002-2H10a2 2 0 002 2zM18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
            </svg>
            <h3 className="text-xl sm:text-4xl md:text-5xl font-bold text-amber-400 tracking-tight drop-shadow-md mb-0.5 sm:mb-2">
              {t('stats.stat4Num')}
            </h3>
            <p className="font-rozha text-amber-50 text-[10px] sm:text-base md:text-xl tracking-wide leading-tight break-words">
              {t('stats.stat4Text')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}