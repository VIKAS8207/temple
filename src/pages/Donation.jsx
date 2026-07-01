import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import TempleCarousel from '../components/TempleCarousel'; // Make sure this path is correct

export default function Donation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState(null); // Stores the selected cause/occasion
  
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', isAnonymous: false, amount: ''
  });

  // =========================================
  // DATA ARRAYS (Image paths ready for you)
  // =========================================
// Move these arrays inside the component to access 't()'
  const donationCategories = [
    { id: 'pillar', img: '/image/donate pilar.png', title: t('donate.categories.pillar.title'), subtitle: t('donate.categories.pillar.subtitle'), priceDesc: t('donate.categories.pillar.priceDesc'), minPrice: 1100000, desc: t('donate.categories.pillar.desc') },
    { id: 'shila', img: '/image/donate sthamb.png', title: t('donate.categories.shila.title'), subtitle: t('donate.categories.shila.subtitle'), priceDesc: t('donate.categories.shila.priceDesc'), minPrice: 5100, desc: t('donate.categories.shila.desc') },
    { id: 'swarn', img: '/image/donate kalash.png', title: t('donate.categories.swarn.title'), subtitle: t('donate.categories.swarn.subtitle'), priceDesc: t('donate.categories.swarn.priceDesc'), minPrice: 1, desc: t('donate.categories.swarn.desc') },
    { id: 'rajat', img: '/image/donate chair.png', title: t('donate.categories.rajat.title'), subtitle: t('donate.categories.rajat.subtitle'), priceDesc: t('donate.categories.rajat.priceDesc'), minPrice: 1, desc: t('donate.categories.rajat.desc') },
    { id: 'kasht', img: '/image/donate wood.png', title: t('donate.categories.kasht.title'), subtitle: t('donate.categories.kasht.subtitle'), priceDesc: t('donate.categories.kasht.priceDesc'), minPrice: 5100, desc: t('donate.categories.kasht.desc') },
    { id: 'marble', img: '/image/donate marble.png', title: t('donate.categories.marble.title'), subtitle: t('donate.categories.marble.subtitle'), priceDesc: t('donate.categories.marble.priceDesc'), minPrice: 1, desc: t('donate.categories.marble.desc') },
    { id: 'anna', img: '/image/donate food.png', title: t('donate.categories.anna.title'), subtitle: t('donate.categories.anna.subtitle'), priceDesc: t('donate.categories.anna.priceDesc'), minPrice: 1, desc: t('donate.categories.anna.desc') },
    { id: 'gau', img: '/image/donate cow.png', title: t('donate.categories.gau.title'), subtitle: t('donate.categories.gau.subtitle'), priceDesc: t('donate.categories.gau.priceDesc'), minPrice: 1, desc: t('donate.categories.gau.desc') },
    { id: 'svechha', img: '/image/donate money.png', title: t('donate.categories.svechha.title'), subtitle: t('donate.categories.svechha.subtitle'), priceDesc: t('donate.categories.svechha.priceDesc'), minPrice: 1, desc: t('donate.categories.svechha.desc') },
  ];

  const occasions = [
    { id: 'bday', img: '/image/bday.jpg', title: t('donate.occasions.bday') },
    { id: 'anniv', img: '/image/anniv.jpg', title: t('donate.occasions.anniv') },
    { id: 'family', img: '/image/family.jpg', title: t('donate.occasions.family') },
    { id: 'ancestor', img: '/image/ancestor.jpg', title: t('donate.occasions.ancestor') },
    { id: 'success', img: '/image/success.jpg', title: t('donate.occasions.success') },
  ];

  // 1. Define your page-specific images at the top of your component
  const donationCarouselImages = [
  "/image/Donation 1.png",
  "/image/Donation 2.png",
  "/image/Donation 3.png",
  "/image/Donation 4.png",
];

  // =========================================
  // HANDLERS
  // =========================================
  const openModal = (purpose) => {
    setSelectedPurpose(purpose);
    setFormData(prev => ({ ...prev, amount: purpose.minPrice > 1 ? purpose.minPrice : '' })); // Pre-fill min amount if applicable
    setIsModalOpen(true);
  };

  const handleGeneralDonation = () => {
    // If they click the big button without selecting, default to Svechha Dan
    openModal(donationCategories.find(c => c.id === 'svechha'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationId = `DON-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${new Date().getFullYear()}`;
    
    // Navigate to receipt page and pass the data
    navigate('/donation-receipt', { 
      state: { 
        ...formData, 
        donationId, 
        causesList: selectedPurpose.title, 
        date: new Date().toLocaleDateString() 
      } 
    });
  };

  const inputClasses = "w-full p-3.5 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base";

  return (
    <div className="min-h-screen bg-[#f8f4ed] relative overflow-hidden flex flex-col items-center pb-24">
      
      {/* Background ambient mandala pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* =========================================
          SECTION 1: HEADER
      ========================================= */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#3e1a16] via-[#2a110e] to-[#3e1a16] text-[#eedcbf] py-12 md:py-16 px-4 border-b-8 border-amber-500 flex flex-col items-center text-center shadow-2xl">
        <div className="absolute inset-0 mix-blend-overlay"></div>
        <p className="relative z-10 font-rozha text-amber-200/90 text-sm sm:text-lg md:text-xl mb-4 drop-shadow-md tracking-wide">
          {t('donate.headerShloka', 'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥')}
        </p>
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-rozha text-[#eedcbf] font-bold mb-4 leading-snug drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          {t('donate.pageTitle', 'मंदिर निर्माण सहयोग')}
        </h1>
        <div className="relative z-10 flex items-center justify-center gap-2 mt-2">
          <span className="w-10 sm:w-16 h-1 bg-amber-500"></span>
          <span className="w-2 h-2 bg-amber-400 rotate-45"></span>
          <span className="w-10 sm:w-16 h-1 bg-amber-500"></span>
        </div>
      </section>

      {/* =========================================
          SECTION 2: TEMPLE CAROUSEL
      ========================================= */}
      <TempleCarousel images={donationCarouselImages} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* =========================================
            SECTION 3: UPANISHAD SHLOKA & SLOGAN
        ========================================= */}
        <div className="mb-16 mt-8 w-full max-w-5xl mx-auto">
          
          {/* Glassmorphic Container */}
          <div className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-md border border-amber-200/40 p-2 shadow-[0_20px_50px_rgba(139,58,43,0.05)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(139,58,43,0.1)]">
            
            {/* Traditional Double-Line Frame Layer */}
            <div className="border-2 border-double border-amber-600/30 rounded-2xl p-6 sm:p-10 md:p-12 text-center bg-white/10 relative z-10">
              
              {/* Corner Traditional Accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-500/60"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-500/60"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-500/60"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-500/60"></div>
              
              {/* Shloka Text */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-rozha text-[#8B3A2B] mb-4 leading-relaxed font-bold drop-shadow-sm">
                {t('donate.shlokaText')}
              </h3>
              
              <p className="text-stone-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-8 bg-amber-50/60 backdrop-blur-sm inline-block px-4 py-1.5 rounded-full border border-amber-200/30">
                {t('donate.shlokaRef')}
              </p>
              
              {/* Slogan Content Container */}
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl text-orange-800 font-bold font-aparajita tracking-wide leading-snug">
                  {t('donate.shlokaMeaning')}
                </p>
                
                {/* Custom Elegant Geometric Divider */}
                <div className="flex items-center justify-center gap-3 opacity-40">
                  <span className="w-12 h-px bg-amber-600"></span>
                  <span className="text-amber-700 text-xs">❖</span>
                  <span className="w-12 h-px bg-amber-600"></span>
                </div>
                
                <p className="text-stone-700 font-medium text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  {t('donate.shlokaDesc')}
                </p>
              </div>
            </div>
            
            {/* Ambient Back-glow circles to enhance transparency definition */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#8B3A2B]/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>

        {/* =========================================
            SECTION 4: DONATION SELECTION GRID
        ========================================= */}
        <div className="mb-16 w-full max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-rozha text-[#8B3A2B] font-bold drop-shadow-sm mb-4">
              {t('donate.categoryHeading')}
            </h2>
            <p className="text-lg sm:text-xl text-stone-600 font-medium max-w-3xl mx-auto">
              {t('donate.categorySub')}
            </p>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <h3 className="text-2xl font-bold text-stone-800 mb-8 border-l-4 border-amber-500 pl-4 text-left">{t('donate.categorySelectTitle')}</h3>

          {/* Grid adjusted for 4-5 items per row on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 justify-items-center">
            {donationCategories.map((cat) => (
              <div 
                key={cat.id} 
                className="w-full max-w-[280px] bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden flex flex-col group hover:border-amber-400 transition-colors duration-300 cursor-pointer text-center" 
                onClick={() => openModal(cat)}
              >
                {/* IMAGE CONTAINER (Perfectly Square & Static) */}
                <div className="w-full aspect-square bg-stone-100 overflow-hidden relative flex items-center justify-center">
                  {/* Fallback pattern while image loads */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%238B3A2B'/%3E%3C/svg%3E")` }}></div>
                  
                  {/* NO scaling animation here anymore */}
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover relative z-10" />
                  
                  {/* Text Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20"></div>
                  <div className="absolute bottom-3 left-2 right-2 z-30 flex flex-col items-center">
                    <h4 className="text-white text-lg sm:text-xl font-bold font-rozha drop-shadow-md leading-tight">{cat.title}</h4>
                    {cat.subtitle && <p className="text-amber-200 text-xs font-medium mt-1">{cat.subtitle}</p>}
                  </div>
                </div>
                
                <div className="p-4 flex flex-col flex-grow items-center">
                  <div className="inline-block w-full bg-amber-50 text-orange-800 font-bold text-xs px-2 py-2 rounded border border-amber-200 mb-3">
                    {cat.priceDesc}
                  </div>
                  <p className="text-stone-600 font-medium text-xs sm:text-sm leading-relaxed flex-grow">
                    {cat.desc}
                  </p>
                  
                  <button className="mt-4 w-full py-2.5 bg-stone-100 text-stone-700 font-bold text-sm rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 cursor-pointer border border-stone-200 group-hover:border-amber-600">
                    {t('donate.contributeBtn')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Master Call to Action */}
          <div className="mt-12 text-center">
            <button 
              onClick={handleGeneralDonation}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white px-10 sm:px-16 py-4 sm:py-5 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-visible ring-4 ring-orange-600/20 cursor-pointer"
            >
              {/* Animated Lotus Bloom SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 overflow-visible shrink-0 transition-transform duration-500 group-hover:scale-110">
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z" className="z-10 relative" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:-rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] transition-transform duration-500 ease-out group-hover:rotate-[20deg]" opacity="0.8" />
                <path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:-rotate-[45deg] group-hover:opacity-50" />
                <path d="M12 22c0 0 8-5 8-12 0-3-1.5-5.5-3.5-8-1 4.5-4.5 7.5-4.5 10.5v9.5z" className="origin-[12px_22px] scale-75 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:rotate-[45deg] group-hover:opacity-50" />
              </svg>
              
              <span className="font-rozha font-bold text-2xl sm:text-3xl tracking-wide drop-shadow-md">
                {t('donate.masterCtaBtn')}
              </span>
            </button>
          </div>
        </div>

       {/* =========================================
            SECTION 5: TRUST & SECURITY
        ========================================= */}
        <div className="mb-16 w-full max-w-5xl mx-auto text-center relative z-10">
          
          {/* Section Heading */}
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-rozha text-[#8B3A2B] font-bold tracking-wide drop-shadow-sm">
              🛕 {t('donate.trustHeading')}
            </h3>
            <div className="flex items-center justify-center gap-1 mt-2.5 opacity-50">
              <span className="w-6 h-px bg-amber-600"></span>
              <span className="text-amber-700 text-[10px]">❖</span>
              <span className="w-6 h-px bg-amber-600"></span>
            </div>
          </div>

          {/* Balanced "In-Between" Grid with Compact Spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 max-w-4xl mx-auto">
            
            {/* Item 1: Secure Payment */}
            <div 
              onClick={handleGeneralDonation}
              className="bg-[#f4ece1] border-2 border-amber-600/20 hover:border-amber-500 p-4 sm:p-5 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white text-orange-800 rounded-full flex items-center justify-center border border-amber-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm sm:text-base font-rozha tracking-wide mt-3 leading-tight">
                {t('donate.trust1')}
              </p>
            </div>

            {/* Item 2: Digital Receipt */}
            <div 
              onClick={handleGeneralDonation}
              className="bg-[#f4ece1] border-2 border-amber-600/20 hover:border-amber-500 p-4 sm:p-5 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white text-orange-800 rounded-full flex items-center justify-center border border-amber-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm sm:text-base font-rozha tracking-wide mt-3 leading-tight">
                {t('donate.trust2')}
              </p>
            </div>

            {/* Item 3: Certified Service */}
            <div 
              onClick={handleGeneralDonation}
              className="bg-[#f4ece1] border-2 border-amber-600/20 hover:border-amber-500 p-4 sm:p-5 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white text-orange-800 rounded-full flex items-center justify-center border border-amber-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4L19 7"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm sm:text-base font-rozha tracking-wide mt-3 leading-tight">
                {t('donate.trust3')}
              </p>
            </div>

            {/* Item 4: Devotion Dedicated */}
            <div 
              onClick={handleGeneralDonation}
              className="bg-[#f4ece1] border-2 border-amber-600/20 hover:border-amber-500 p-4 sm:p-5 rounded-2xl flex flex-col items-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white text-orange-800 rounded-full flex items-center justify-center border border-amber-500/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm sm:text-base font-rozha tracking-wide mt-3 leading-tight">
                {t('donate.trust4')}
              </p>
            </div>

          </div>
        </div>

        {/* =========================================
            SECTION 6: OCCASION-BASED DONATION
        ========================================= */}
        <div className="mb-16 w-full max-w-5xl mx-auto">
          
          {/* Deep, Rich High-Contrast Traditional Plate (Completely anti-pale) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#592218] via-[#3e1a16] to-[#1a0a09] p-1.5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-2 border-amber-500/40">
            
            {/* Traditional Double-Line Gold Frame */}
            <div className="border-2 border-double border-amber-400/40 rounded-2xl p-6 sm:p-10 text-center bg-black/10 relative z-10">
              
              {/* Corner Traditional Accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-amber-400"></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-amber-400"></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-amber-400"></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-amber-400"></div>

              {/* High-Visibility Gold Header Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 text-xs sm:text-sm font-black uppercase tracking-widest px-6 py-2 rounded-full mb-6 shadow-md border-2 border-amber-300">
                <span>✨</span> विशेष अवसर संकल्प सेवा <span>✨</span>
              </div>

              {/* Header Text - Golden & Amber High Contrast */}
              <div className="text-center mb-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-rozha text-amber-400 font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {t('donate.occasionHeading')}
                </h2>
                <p className="text-amber-100/90 font-medium text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
                  {t('donate.occasionSub')}
                </p>
              </div>

              {/* High-Contrast Plaque Cards (Dark Wood to Gold Swap) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {occasions.map((occ) => (
                  <div 
                    key={occ.id} 
                    onClick={() => openModal({ ...occ, minPrice: 1 })}
                    className="bg-[#240f0d] hover:bg-amber-500 border-2 border-amber-500/30 hover:border-amber-300 text-amber-100 hover:text-stone-950 font-bold text-sm sm:text-base p-4 rounded-xl flex items-center justify-center min-h-[76px] transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)] text-center font-rozha tracking-wide"
                  >
                    <span className="leading-tight">{occ.title}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Tagline Darker Banner */}
              <div className="text-center mt-10 pt-5 border-t border-dashed border-amber-500/30 max-w-2xl mx-auto">
                <p className="text-amber-300 font-medium text-xs sm:text-sm bg-black/40 border border-amber-500/20 px-5 py-3 rounded-xl italic leading-relaxed shadow-inner">
                  {t('donate.occasionTagline')}
                </p>
              </div>

            </div>

            {/* Glowing Golden Aura effect from behind */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          </div>
        </div>
        
        {/* =========================================
            SECTION 7: CLOSING MESSAGE
        ========================================= */}
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl text-stone-700 font-medium mb-4 max-w-3xl mx-auto leading-relaxed">
            {t('donate.closingMsg1')}
          </p>
          <h2 className="text-4xl sm:text-5xl font-rozha text-[#8B3A2B] font-bold mb-4 drop-shadow-sm">
            {t('donate.closingMsg2')}
          </h2>
          <p className="inline-block bg-amber-100 text-orange-900 font-bold uppercase tracking-widest text-sm px-6 py-2 rounded-full border border-amber-200 shadow-sm">
            {t('donate.closingMsg3')}
          </p>
        </div>

      </div>

      {/* =========================================
          DONATION FORM POPUP MODAL
      ========================================= */}
      {isModalOpen && selectedPurpose && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 animate-[fadeIn_0.3s_ease-out] border-4 border-amber-100 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-red-600 hover:rotate-90 transition-all bg-stone-100 hover:bg-red-50 p-2 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="text-center mb-6 border-b border-stone-200 pb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#8B3A2B] font-rozha mb-2">{t('donate.modalTitle')}</h2>
              <p className="text-stone-600 font-medium text-sm leading-relaxed">
                {t('donate.modalSubtitle')}<br/>
                <span className="text-xs text-stone-400 mt-2 block bg-stone-50 p-2 rounded-lg border border-stone-100">
                  {t('donate.modalNote')}
                </span>
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 shadow-inner text-center">
              <span className="text-stone-500 text-xs font-bold uppercase block mb-1">{t('donate.modalSelectedSeva')}</span>
              <span className="text-orange-950 font-aparajita text-xl font-bold">{selectedPurpose.title}</span>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              
              <input type="text" placeholder={t('donate.modalNamePlaceholder')} required={!formData.isAnonymous} 
                className={inputClasses} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder={t('donate.modalPhonePlaceholder')} required={!formData.isAnonymous} 
                  className={inputClasses} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input type="email" placeholder={t('donate.modalEmailPlaceholder')} required={false} 
                  className={inputClasses} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <textarea placeholder={t('donate.modalAddressPlaceholder')} required={false} rows="2" 
                className={`${inputClasses} resize-none`}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
              
              <label className="flex items-center gap-3 cursor-pointer group mt-2 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" 
                    className="peer appearance-none w-5 h-5 border-2 border-stone-300 rounded bg-white checked:bg-stone-600 checked:border-stone-600 transition-colors cursor-pointer"
                    onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                  />
                  <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-stone-600 font-bold text-sm">
                  {t('donate.modalAnonymous')}
                </span>
              </label>

              {/* Amount Field */}
              <div className="mt-4 pt-4 border-t border-stone-200">
                <label className="block text-stone-600 text-xs font-bold uppercase tracking-wider mb-2">{t('donate.modalAmountLabel')}</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-xl pointer-events-none">₹</div>
                  <input 
                    type="number" 
                    placeholder={selectedPurpose.minPrice > 1 ? selectedPurpose.minPrice.toString() : t('donate.modalAmountPlaceholder')}
                    required 
                    min={selectedPurpose.minPrice}
                    value={formData.amount}
                    className={`${inputClasses} pl-10 font-black text-xl text-[#8B3A2B]`}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>
                {selectedPurpose.minPrice > 1 && (
                  <p className="text-xs text-orange-600 mt-1 font-medium">{t('donate.modalMinAmount')}{selectedPurpose.minPrice}</p>
                )}
              </div>

              <button type="submit" className="w-full py-3.5 sm:py-4 mt-2 bg-gradient-to-r from-orange-600 to-[#8B3A2B] text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-orange-900/40 hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                {t('donate.modalSubmitBtn')}
              </button>

            </form>
          </div>
        </div>
      )}

      {/* Global styles for hide-scrollbar and animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />

    </div>
  );
}