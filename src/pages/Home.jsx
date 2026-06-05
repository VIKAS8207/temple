import { useTranslation } from 'react-i18next';
import ActionButtons from "../components/ActionButtons";
import TempleStats from "../components/TempleStats";
import TempleTiming from "../components/TempleTiming";
import Founders from "../components/Founders";
import TempleCarousel from "../components/TempleCarousel";
import WinnerList from "../components/WinnerList";

export default function Home() {
  // Initialize the translation hook
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-[100vh]">
      
      {/* Hero Section */}
      <section className="relative flex-grow flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-orange-50 to-stone-50 overflow-hidden">

        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto mt-22 md:mt-40 mb-12 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          
          {/* === LEFT COLUMN === */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full">
            
            {/* Adi Shakti Slogan (Using 4 separate lines for safe HTML breaks) */}
            <div className="font-rozha text-orange-900 text-2xl lg:text-3xl leading-tight drop-shadow-sm">
              {t('hero.slogan1')}<br />
              {t('hero.slogan2')}<br />
              {t('hero.slogan3')}<br />
              {t('hero.slogan4')}
            </div>
            
            {/* Three Traditional 5-Petal Lotus Flowers */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-orange-700/60">
              {[...Array(3)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 drop-shadow-sm overflow-visible">
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.4" transform="rotate(-25 12 22)" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.4" transform="rotate(25 12 22)" />
                  <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" opacity="0.7" />
                  <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" opacity="1" />
                </svg>
              ))}
            </div>

          </div>

          {/* === CENTER COLUMN (Image, Text, and Glows layered together) === */}
          <div className="relative flex items-center justify-center shrink-0 order-1 lg:order-2">
            
            {/* LAYER 1: The Rotating Yellow Rays (z-10) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] sm:w-[130%] max-w-[600px] aspect-square rounded-full bg-[repeating-conic-gradient(from_0deg,#fde047_0deg_15deg,#fbbf24_15deg_30deg)] blur-md animate-[spin_15s_linear_infinite] opacity-80 shadow-[0_0_40px_rgba(251,191,36,0.6)] z-10"></div>
            
            {/* LAYER 2: Inner ambient glow (z-10) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[105%] max-w-[500px] aspect-square rounded-full bg-gradient-to-tr from-yellow-100 to-amber-200 animate-pulse opacity-70 blur-xl z-10"></div>
            
            {/* LAYER 3: Sandwiched Giant Hindi Text (z-20) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <h1 className="text-[15vw] sm:text-[12vw] font-rozha text-orange-950 whitespace-nowrap select-none drop-shadow-md text-center">
                {t('hero.templeName')}
              </h1>
            </div>

            {/* LAYER 4: The Center Image (z-30) */}
            <img
              src="/image/Hero.png" 
              alt="Badimatha Temple"
              className="relative z-30 w-64 sm:w-96 md:w-[28rem] h-auto object-cover"
            />
            
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right order-3 lg:order-3 w-full">
            
            <img 
              src="/image/Pooja.png" 
              alt="Pooja Items" 
              className="w-28 h-28 lg:w-32 lg:h-32 mb-6"
            />
            
            <p className="text-stone-700 font-rozha mb-8 max-w-[280px] text-lg">
              {t('hero.description')}
            </p>


            {/* Pooja Seva Button (Animated Lotus Bloom) */}
            <button className="group relative flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-orange-500/40 transition-all duration-500 overflow-visible">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 overflow-visible">
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:-rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:-rotate-[45deg] group-hover:opacity-50" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-[45deg] group-hover:opacity-50" />
              </svg>
              <span>{t('hero.poojaSeva')}</span>
            </button>
            
            

          </div>
          
        </div>
        
      </section>

      <ActionButtons />
      <TempleCarousel />
      <TempleStats />
      <TempleTiming />
      <Founders />
      <WinnerList />

    </div>
  );
}