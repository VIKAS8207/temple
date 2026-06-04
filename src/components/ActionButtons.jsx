// src/components/ActionButtons.jsx

export default function ActionButtons() {
  return (
    <div className="w-full bg-[#fdfaf5] py-8 border-y-2 border-[#e6d0ba] shadow-[inset_0_4px_6px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-5">
        
        {/* Button 1: Get Online Coupon (Traditional Brick Red) */}
        <button className="flex items-center gap-2.5 bg-[#9A3B26] text-[#FDF8F0] px-7 py-3 rounded shadow-sm border border-[#7C2F1E] hover:bg-[#833220] transition-colors duration-300">
          <svg className="w-5 h-5 text-amber-200/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
          </svg>
          <span className="font-rozha text-lg tracking-wide drop-shadow-sm">ऑनलाइन कूपन प्राप्त करें</span>
        </button>

        {/* Button 2: Temple Construction (Sandstone & Deep Maroon) */}
        <button className="flex items-center gap-2.5 bg-white text-[#6B3222] px-7 py-3 rounded shadow-sm border border-[#E8D6C5] hover:bg-[#F9F3EA] hover:border-[#D6BB9F] transition-colors duration-300">
          <svg className="w-5 h-5 text-[#9A3B26]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-rozha text-lg tracking-wide">मंदिर निर्माण सहयोग</span>
        </button>

        {/* Button 3: Donate Online (Sandstone & Deep Maroon) */}
        <button className="flex items-center gap-2.5 bg-white text-[#6B3222] px-7 py-3 rounded shadow-sm border border-[#E8D6C5] hover:bg-[#F9F3EA] hover:border-[#D6BB9F] transition-colors duration-300">
          <svg className="w-5 h-5 text-[#9A3B26]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="font-rozha text-lg tracking-wide">ऑनलाइन दान करें</span>
        </button>

        {/* Button 4: Book Seva (Sandstone & Deep Maroon) */}
        <button className="flex items-center gap-2.5 bg-white text-[#6B3222] px-7 py-3 rounded shadow-sm border border-[#E8D6C5] hover:bg-[#F9F3EA] hover:border-[#D6BB9F] transition-colors duration-300">
          <svg className="w-5 h-5 text-[#9A3B26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <span className="font-rozha text-lg tracking-wide">सेवा बुक करें</span>
        </button>

      </div>
    </div>
  );
}