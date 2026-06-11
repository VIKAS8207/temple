// src/components/ActionButtons.jsx
import { useTranslation } from 'react-i18next';

export default function ActionButtons() {
  // Initialize the translation hook here!
  const { t } = useTranslation();
  
  // Reusable Lotus Animation SVG
  const LotusIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 overflow-visible shrink-0">
      <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
      <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
      <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:-rotate-[20deg]" opacity="0.8" />
      <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:rotate-[20deg]" opacity="0.8" />
      <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:-rotate-[45deg] group-hover:opacity-50" />
      <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-[45deg] group-hover:opacity-50" />
    </svg>
  );

  // The new Outline -> Fill hover logic
  const buttonClasses = "group relative flex items-center justify-center gap-3 bg-white text-orange-600 border-2 border-orange-600 px-6 sm:px-8 py-3 rounded-full shadow-sm hover:bg-orange-600 hover:text-white hover:shadow-orange-500/40 transition-all duration-500 overflow-visible w-full sm:w-auto";

  return (
    <div className="w-full bg-[#fdfaf5] py-8 border-y-2 border-[#e6d0ba] shadow-[inset_0_4px_6px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4 sm:gap-6">
        
        {/* Button 1: Temple Construction */}
        <button className={buttonClasses}>
          <LotusIcon />
          <span className="font-aparajita font-bold text-xl sm:text-2xl tracking-wide drop-shadow-sm">{t('action.btn1')}</span>
        </button>

        {/* Button 2: Get Online Coupon */}
        <button className={buttonClasses}>
          <LotusIcon />
          <span className="font-aparajita font-bold text-xl sm:text-2xl tracking-wide drop-shadow-sm">{t('action.btn2')}</span>
        </button>

        {/* Button 3: Donate Online */}
        <button className={buttonClasses}>
          <LotusIcon />
          <span className="font-aparajita font-bold text-xl sm:text-2xl tracking-wide drop-shadow-sm">{t('action.btn3')}</span>
        </button>

        {/* Button 4: Book Seva */}
        <button className={buttonClasses}>
          <LotusIcon />
          <span className="font-aparajita font-bold text-xl sm:text-2xl tracking-wide drop-shadow-sm">{t('action.btn4')}</span>
        </button>

      </div>
    </div>
  );
}