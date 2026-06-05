// src/components/TempleTiming.jsx
import { useTranslation } from 'react-i18next';

export default function TempleTiming() {
  const { t, i18n } = useTranslation();

  return (
    <section id="timing-section" className="relative w-full py-24 px-4 sm:px-6 bg-[#f4ece1] flex flex-col items-center overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* SECTION TITLE (OUTSIDE) */}
      <div className="text-center mb-16 relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] inline-block relative drop-shadow-sm">
          {t('timing.title')}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-400 rounded-full"></div>
        </h2>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="relative max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-32 z-10">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: THE POSTAGE STAMP (Only Darshan Timing)      */}
        {/* ========================================================= */}
        <div className="relative w-full max-w-[320px] drop-shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out cursor-default p-2.5">
          
          {/* 1. The Perforated Stamp Edge Background */}
          <div 
            className="absolute inset-0 bg-white"
            style={{
              WebkitMaskImage: 'radial-gradient(circle, transparent 4.5px, black 5px)',
              WebkitMaskSize: '16px 16px',
              WebkitMaskPosition: '-8px -8px',
              maskImage: 'radial-gradient(circle, transparent 4.5px, black 5px)',
              maskSize: '16px 16px',
              maskPosition: '-8px -8px'
            }}
          ></div>

          {/* 2. Inner Stamp Printable Area */}
          <div className="relative z-10 bg-[#fefcf8] border border-stone-200/50 p-4 h-full flex flex-col overflow-hidden shadow-sm">
            
            {/* Faded Postal Cancellation Mark */}
            <div className="absolute top-10 -right-12 w-40 h-40 border-[2px] border-stone-800/15 rounded-full flex items-center justify-center rotate-[20deg] pointer-events-none mix-blend-multiply z-20">
              <div className="w-28 h-28 border border-stone-800/15 rounded-full flex items-center justify-center">
                <span className="text-stone-800/20 font-bold uppercase text-[9px] tracking-[0.25em] text-center px-2">
                  Post <br/> India
                </span>
              </div>
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-6 border-y-[1.5px] border-stone-800/15"></div>
            </div>

            {/* --- TOP STAMP IMAGE --- */}
            {/* Swapped the solid blue block for an image tag while keeping the exact sizing */}
            <div className="w-full h-52 relative overflow-hidden mb-4 flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] bg-stone-200">
              
              <img 
                // Replace this URL with your actual local image, e.g., src="/image/DarshanStamp.jpg"
                src="/image/stamp.jpg" 
                alt="Darshan View" 
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              
              {/* Optional: We kept the traditional geometric pattern inlay over the image for an authentic "printed stamp" texture. Remove this div if you want the image to be 100% clear. */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-overlay z-10"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20zM0 20c0 11.046 8.954 20 20 20V0C8.954 0 0 8.954 0 20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}
              ></div>
              
            </div>
            {/* ------------------------- */}

            {/* Stamp Typography Header */}
            <div className="flex items-end justify-between gap-2 mb-3 text-[#1a202c]">
              <h3 className="text-[2.75rem] font-rozha font-bold leading-none tracking-tight">
                {i18n.language === 'hi' ? 'दर्शन' : 'Darshan'}
              </h3>
              <div className="text-right flex flex-col">
                <span className="text-[#315E8D] font-serif font-bold text-base leading-none tracking-wide">
                  {t('timing.darshanTitle')}
                </span>
                <span className="text-[9px] text-stone-500 font-bold uppercase tracking-[0.15em] mt-1.5">
                  Badimatha Temple
                </span>
              </div>
            </div>

            {/* Stamp Details */}
            <div className="border-t-[2.5px] border-[#1a202c] pt-3 pb-1 mt-1 relative z-10 bg-[#fefcf8]">
              <ul className="flex flex-col gap-1.5 text-sm font-bold text-[#1a202c] tracking-wide">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#315E8D] rounded-full shrink-0"></span>
                  {t('timing.morning')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#315E8D] rounded-full shrink-0"></span>
                  {t('timing.evening')}
                </li>
              </ul>
            </div>

          </div>
        </div>


        {/* ========================================================= */}
        {/* RIGHT COLUMN: AARTI CARDS                                 */}
        {/* ========================================================= */}
        <div className="relative w-full max-w-[320px] flex flex-col items-center text-center">
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#8B3A2B] to-[#6b2c21] rounded-full flex items-center justify-center text-amber-100 shadow-md mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-rozha font-bold text-orange-950 tracking-wide border-b-2 border-amber-400 pb-2">
              {t('timing.aartiTitle')}
            </h3>
          </div>

          <ul className="flex flex-col w-full gap-4">
            {[1, 2, 3, 4].map((num) => (
              <li 
                key={num} 
                className="group relative flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-stone-200/60 hover:bg-white hover:shadow-[0_8px_20px_rgba(139,58,43,0.06)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="text-xl font-medium text-stone-800 tracking-wide">
                    {t(`timing.aarti${num}`)}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}