// src/components/TempleStats.jsx
import { useTranslation } from 'react-i18next';

export default function TempleStats() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] py-16 sm:py-24 border-y-8 border-amber-600/60 overflow-hidden shadow-2xl">
      
      {/* Subtle traditional pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          
          {/* =========================================
              Stat 1: Food Packets (Annadan)
          ========================================= */}
          <div className="group flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#592218] to-[#3e1a16] border-[3px] border-amber-500/20 hover:border-amber-400/50 rounded-t-[6rem] rounded-b-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            {/* Top highlight glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-[0_0_15px_rgba(251,191,36,0.15)] group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
              {/* Steaming Bowl Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v2m-6-1v1m12-1v1M4 10h16v2a8 8 0 01-16 0v-2z"></path>
              </svg>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-rozha text-amber-400 tracking-tight drop-shadow-md mb-2">
              {t('stats.stat1Num')}
            </h3>
            <p className="text-amber-100/90 text-sm sm:text-base font-medium tracking-wide leading-relaxed">
              {t('stats.stat1Text')}
            </p>
          </div>

          {/* =========================================
              Stat 2: Coupon
          ========================================= */}
          <div className="group flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#592218] to-[#3e1a16] border-[3px] border-amber-500/20 hover:border-amber-400/50 rounded-t-[6rem] rounded-b-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-[0_0_15px_rgba(251,191,36,0.15)] group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
              {/* Ticket Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
              </svg>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-rozha text-amber-400 tracking-tight drop-shadow-md mb-2">
              {t('stats.stat2Num')}
            </h3>
            <p className="text-amber-100/90 text-sm sm:text-base font-medium tracking-wide leading-relaxed">
              {t('stats.stat2Text')}
            </p>
          </div>

          {/* =========================================
              Stat 3: Tuesday Bhandara
          ========================================= */}
          <div className="group flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#592218] to-[#3e1a16] border-[3px] border-amber-500/20 hover:border-amber-400/50 rounded-t-[6rem] rounded-b-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-[0_0_15px_rgba(251,191,36,0.15)] group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
              {/* Festival Sparkle Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            
            {/* Using text-2xl/3xl here because 'मंगलवार' is longer than a number */}
            <h3 className="text-2xl sm:text-3xl font-bold font-rozha text-amber-400 tracking-tight drop-shadow-md mb-2">
              {t('stats.stat3Title')}
            </h3>
            <p className="text-amber-100/90 text-sm sm:text-base font-medium tracking-wide leading-relaxed">
              {t('stats.stat3Text')}
            </p>
          </div>

          {/* =========================================
              Stat 4: Daily Aarti
          ========================================= */}
          <div className="group flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#592218] to-[#3e1a16] border-[3px] border-amber-500/20 hover:border-amber-400/50 rounded-t-[6rem] rounded-b-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-[0_0_15px_rgba(251,191,36,0.15)] group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
              {/* Temple Bell Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-rozha text-amber-400 tracking-tight drop-shadow-md mb-2">
              {t('stats.stat4Num')}
            </h3>
            <p className="text-amber-100/90 text-sm sm:text-base font-medium tracking-wide leading-relaxed">
              {t('stats.stat4Text')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}