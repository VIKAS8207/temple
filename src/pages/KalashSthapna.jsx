// src/pages/KalashSthapna.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function KalashSthapna() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Toggle State for Navratri Festival
  const [activeFestival, setActiveFestival] = useState('shardiya'); // 'shardiya' or 'chaitra'

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    isAnonymous: false
  });

  const inputClasses = "w-full p-3.5 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base transition-all";

  const kalashOptions = [
    { id: 'tel', type: 'telKalash', price: 1100, icon: '🪔', desc: 'descTel' },
    { id: 'ghee', type: 'gheeKalash', price: 2100, icon: '✨', desc: 'descGhee' }
  ];

  const handleBookClick = (festivalName, option) => {
    setSelectedPackage({ festival: festivalName, ...option });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate Unique Booking ID
    const bookingId = `KAL-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${new Date().getFullYear()}`;

    // Navigate to receipt and pass data
    navigate('/kalash-receipt', { 
      state: { 
        ...formData, 
        package: selectedPackage,
        bookingId, 
        date: new Date().toLocaleDateString()
      } 
    });
  };

  return (
    <div className="min-h-screen bg-[#fcf9f5] relative overflow-hidden flex flex-col items-center pb-24">
      
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* =========================================
          1. HEADER SECTION
      ========================================= */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#3e1a16] via-[#2a110e] to-[#3e1a16] text-[#eedcbf] py-16 px-4 border-b-8 border-amber-500 flex flex-col items-center text-center shadow-2xl">
        <div className="absolute inset-0 mix-blend-overlay"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-rozha text-[#eedcbf] font-bold mb-4 leading-tight drop-shadow-md">
          {t('kalash.pageTitle')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm sm:text-base text-amber-200/80 mb-4 max-w-2xl mx-auto">
          {t('kalash.subtitle')}
        </p>
        <div className="relative z-10 flex items-center justify-center gap-2 mt-2">
          <span className="w-16 h-1 bg-amber-500"></span>
          <span className="w-2 h-2 bg-amber-400 rotate-45"></span>
          <span className="w-16 h-1 bg-amber-500"></span>
        </div>
      </section>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 mt-12 space-y-16">

        {/* =========================================
            2. TOGGLE TABS & BOOKING OPTIONS
        ========================================= */}
        <div>
          <div className="flex justify-center mb-10">
            <div className="bg-white/60 backdrop-blur-md p-1.5 rounded-full inline-flex shadow-sm border border-stone-200">
              <button 
                onClick={() => setActiveFestival('shardiya')}
                className={`px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                  activeFestival === 'shardiya' 
                    ? 'bg-gradient-to-r from-[#8b3a2b] to-[#592218] text-white shadow-md' 
                    : 'text-stone-600 hover:text-[#8b3a2b]'
                }`}
              >
                {t('kalash.shardiyaTitle')}
              </button>
              <button 
                onClick={() => setActiveFestival('chaitra')}
                className={`px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                  activeFestival === 'chaitra' 
                    ? 'bg-gradient-to-r from-[#8b3a2b] to-[#592218] text-white shadow-md' 
                    : 'text-stone-600 hover:text-[#8b3a2b]'
                }`}
              >
                {t('kalash.chaitraTitle')}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-[fadeIn_0.4s_ease-out]">
            {kalashOptions.map((opt) => {
              const activeTitle = activeFestival === 'shardiya' ? t('kalash.shardiyaTitle') : t('kalash.chaitraTitle');
              
              return (
                <div key={`${activeFestival}-${opt.id}`} className="bg-white border-2 border-amber-100 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center">
                  <span className="text-5xl mb-4">{opt.icon}</span>
                  <h3 className="text-2xl font-bold text-stone-800 font-aparajita mb-2">{t(`kalash.${opt.type}`)}</h3>
                  <p className="text-stone-500 text-sm mb-6 flex-grow">{t(`kalash.${opt.desc}`)}</p>
                  <div className="text-3xl font-black text-orange-600 mb-6 drop-shadow-sm">₹{opt.price}</div>
                  <button 
                    onClick={() => handleBookClick(activeTitle, opt)}
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-[#8B3A2B] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    {t('kalash.bookBtn')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center opacity-30 my-4">
          <span className="w-1/3 h-px bg-amber-800"></span>
          <span className="mx-4 text-amber-800 text-xl font-rozha">❖</span>
          <span className="w-1/3 h-px bg-amber-800"></span>
        </div>

        {/* =========================================
            3. GUPT DAN & MAHABHIYAN SECTION
        ========================================= */}
        <div className="mt-10">
          <div className="bg-gradient-to-br from-[#8B3A2B] to-[#592218] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-bl-full pointer-events-none"></div>
            
            <div className="flex-1 relative z-10">
              <span className="inline-block bg-amber-100 text-amber-700 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4">
                Gupt Dan
              </span>
              <h2 className="text-3xl md:text-4xl font-rozha text-amber-400 font-bold mb-4 leading-tight">
                {t('kalash.guptTitle')}
              </h2>
              <p className="text-amber-50/90 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                {t('kalash.guptDesc')}
              </p>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-amber-50 space-y-4">
                <div>
                  <p className="text-amber-400/80 text-xs font-bold uppercase tracking-wider mb-1">{t('kalash.addressLabel')}</p>
                  <p className="font-medium text-sm md:text-base">{t('kalash.addressValue')}</p>
                </div>
                <div className="w-full h-px bg-white/20"></div>
                <div>
                  <p className="text-amber-400/80 text-xs font-bold uppercase tracking-wider mb-1">{t('kalash.emailLabel')}</p>
                  <p className="font-medium text-sm md:text-base">{t('kalash.emailValue')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* =========================================
          4. BOOKING POPUP MODAL
      ========================================= */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 animate-[fadeIn_0.3s_ease-out] border-4 border-amber-100 max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-red-600 hover:rotate-90 transition-all bg-stone-100 hover:bg-red-50 p-2 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl shadow-inner border border-amber-200">
                {selectedPackage.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#8B3A2B] font-rozha mb-1">
                {t('kalash.modalTitle')}
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm">{t('kalash.modalSubtitle')}</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 shadow-inner">
              <div className="flex justify-between items-center mb-2">
                <span className="text-stone-500 text-xs font-bold uppercase">{t('kalash.selectedSeva')}</span>
                <span className="text-stone-800 font-bold text-sm text-right">{selectedPackage.festival}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-orange-950 font-aparajita text-lg font-bold">{t(`kalash.${selectedPackage.type}`)}</span>
                <span className="text-orange-600 font-black text-xl">₹{selectedPackage.price}</span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input 
                type="text" placeholder={t('kalash.name')} required={!formData.isAnonymous} 
                className={inputClasses}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="tel" placeholder={t('kalash.phone')} required={!formData.isAnonymous} 
                  className={inputClasses}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input 
                  type="email" placeholder={t('kalash.email')} required={!formData.isAnonymous} 
                  className={inputClasses}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <textarea 
                placeholder={t('kalash.address')} required={!formData.isAnonymous} rows="2"
                className={`${inputClasses} resize-none`}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
              
              <label className="flex items-center gap-3 cursor-pointer group mt-2">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-5 h-5 border-2 border-amber-300 rounded bg-white checked:bg-[#8B3A2B] checked:border-[#8B3A2B] transition-colors cursor-pointer"
                    onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                  />
                  <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-stone-600 font-bold text-xs sm:text-sm group-hover:text-[#8B3A2B] transition-colors">
                  {t('kalash.anonymous')}
                </span>
              </label>

              <button type="submit" className="w-full py-3.5 sm:py-4 mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                {t('kalash.payBtn')}
              </button>
            </form>

          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />

    </div>
  );
}