// src/components/Navbar.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Function to switch languages
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 shadow-xl">
      
      {/* 1. TOP STRIP */}
      <div className="bg-red-950 border-b border-red-900/50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center text-amber-100/80 text-xs sm:text-sm">
          
          <div className="flex items-center gap-4 font-medium tracking-wide">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 98765 43210</span>
              <span className="hidden sm:inline">, +91 91234 56789</span>
            </div>
          </div>
          
          {/* Language Toggles triggering i18n */}
          <div className="flex items-center gap-3 font-semibold">
            <span className="hidden sm:inline">{t('nav.register')}</span>
            <span className="hidden sm:inline">61/2019</span>
            <span className="text-red-800">|</span>
            <button 
              onClick={() => changeLanguage('en')} 
              className={`transition-colors ${i18n.language === 'en' ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              English
            </button>
            <span className="text-red-800">|</span>
            <button 
              onClick={() => changeLanguage('hi')} 
              className={`transition-colors font-rozha text-base ${i18n.language === 'hi' ? 'text-amber-400' : 'hover:text-amber-400'}`}
            >
              हिन्दी
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="relative text-amber-50"> 
        
        {/* Background container separated safely */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <img 
            src="/image/Nav1.webp" 
            alt="Temple Texture"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-950/85 mix-blend-multiply"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            <div className="flex items-center gap-3 cursor-pointer shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 text-red-950 rounded-full flex items-center justify-center font-bold text-3xl shadow-[0_0_15px_rgba(251,191,36,0.4)] border-2 border-amber-200">
                ॐ
              </div>
              <div className="flex flex-col">
                <span className="font-rozha text-2xl text-amber-400 tracking-wide leading-none mt-1 drop-shadow-md">
                  {t('hero.templeName')}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-200/90 drop-shadow-sm">
                  Badimatha Temple
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6 items-center text-sm font-medium tracking-wide relative">
              
              <Link to="/" className="relative group text-amber-50 hover:text-amber-300 transition-colors drop-shadow-md py-1">
                {t('nav.home')}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>

              <Link to="/lucky-draw" className="relative group text-yellow-300 animate-pulse hover:text-yellow-200 transition-colors drop-shadow-md py-1">
                {t('nav.lucky')}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></div>
              </Link>

{/* ABOUT US - ONCLICK DROPDOWN MENU */}
              <div className="relative">
                <button 
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="relative text-amber-50 hover:text-amber-300 transition-colors drop-shadow-md flex items-center gap-1 py-6"
                >
                  {t('nav.about')}
                  {/* Arrow rotates when open */}
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  {/* Underline expands when open */}
                  <div className={`absolute left-0 bottom-6 h-[2px] bg-amber-400 transition-all duration-300 ${isAboutOpen ? 'w-full' : 'w-0'}`}></div>
                </button>

                {/* THE DROPDOWN CONTAINER (Controlled by isAboutOpen state) */}
                <div className={`absolute left-1/2 -translate-x-1/2 top-[80%] w-64 pt-2 z-50 transition-all duration-300 ease-out ${isAboutOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-2'}`}>
                  <div className="bg-[#3e1a16] border border-red-900/50 rounded-xl shadow-2xl py-2 overflow-hidden flex flex-col">
                    <Link 
                      to="/about" 
                      onClick={() => setIsAboutOpen(false)}
                      className="px-5 py-3 text-sm text-amber-100/90 hover:text-amber-400 hover:bg-red-900/40 transition-colors border-b border-red-900/30"
                    >
                      {t('nav.aboutHistory')}
                    </Link>
                    <Link 
                      to="/about/nirman" 
                      onClick={() => setIsAboutOpen(false)}
                      className="px-5 py-3 text-sm text-amber-100/90 hover:text-amber-400 hover:bg-red-900/40 transition-colors border-b border-red-900/30"
                    >
                      {t('nav.aboutNirman')}
                    </Link>
                    <Link 
                      to="/founders" 
                      onClick={() => setIsAboutOpen(false)}
                      className="px-5 py-3 text-sm text-amber-100/90 hover:text-amber-400 hover:bg-red-900/40 transition-colors"
                    >
                      {t('nav.aboutTrustees')}
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/gallery" className="relative group text-amber-50 hover:text-amber-300 transition-colors drop-shadow-md py-1">
                {t('nav.gallery')}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>

              <Link to="/news" className="relative group text-amber-50 hover:text-amber-300 transition-colors drop-shadow-md py-1">
                {t('nav.news')}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>

              <Link to="/donate" className="relative group text-amber-50 hover:text-amber-300 transition-colors drop-shadow-md py-1">
                {t('nav.donate')}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>

              <Link to="/contact" className="relative group text-amber-50 hover:text-amber-300 transition-colors drop-shadow-md py-1">
                {t('nav.contact')}
                <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
              </Link>

            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <Link 
                to="/serve"
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-red-950 px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-amber-500/30 hover:from-amber-300 hover:to-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 border border-amber-200"
              >
                {t('nav.seva')}
              </Link>
            </div>

            {/* Mobile Menu Trigger Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-amber-400 hover:text-amber-200 focus:outline-none drop-shadow-md p-2"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- HANGING BOTTOM MANDALA BORDER --- */}
      <div 
        className="absolute top-full left-0 w-full h-3 z-10 bg-repeat-x -mt-[1px]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 12C6.477 12 2 7.523 2 2h2c0 4.418 3.582 8 8 8s8-3.582 8-8h2c0 5.523-4.477 10-10 10z' fill='%236B1111' fill-opacity='1'/%3E%3Cpath d='M12 6a2 2 0 100-4 2 2 0 000 4z' fill='%236B1111'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 12px'
        }}
      ></div>

      {/* =========================================
          3. MOBILE SLIDE-IN MENU
      ========================================= */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Dark overlay backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Sliding Drawer */}
        <div className={`absolute top-0 right-0 w-64 sm:w-80 h-full bg-[#3e1a16] shadow-2xl transition-transform duration-300 transform flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Close Button Header */}
          <div className="flex justify-end p-4 border-b border-red-900/50">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-amber-400 hover:text-amber-200 p-2 bg-red-950 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col p-6 space-y-6 overflow-y-auto text-amber-50">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.home')}</Link>
            
            <Link to="/lucky-draw" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-yellow-300 hover:text-yellow-200 transition-colors">{t('nav.lucky')}</Link>
            
            {/* About Section Group */}
            <div className="flex flex-col space-y-3 pb-2 border-b border-red-900/50">
              <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">{t('nav.about')}</span>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="pl-2 text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.aboutHistory')}</Link>
              <Link to="/about/nirman" onClick={() => setIsMobileMenuOpen(false)} className="pl-2 text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.aboutNirman')}</Link>
              <Link to="/founders" onClick={() => setIsMobileMenuOpen(false)} className="pl-2 text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.aboutTrustees')}</Link>
            </div>

            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.gallery')}</Link>
            <Link to="/news" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.news')}</Link>
            <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.donate')}</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-amber-400 transition-colors">{t('nav.contact')}</Link>
            
            <Link 
              to="/serve" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="mt-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-red-950 px-6 py-3 rounded-full font-bold text-center shadow-lg hover:from-amber-300 hover:to-yellow-400 transition-colors"
            >
              {t('nav.seva')}
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}