// src/pages/Donation.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Donation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '', // NEW: Address field added
    isAnonymous: false,
    selectedCauses: [], 
    amount: ''
  });

  const constructionCauses = [
    { id: 'pillar', icon: '🏛️', label: t('donate.causePillar', 'आधार स्तंभ दान'), desc: t('donate.descPillar', 'मंदिर के मुख्य स्तंभों में योगदान') },
    { id: 'garbhagriha', icon: '🕉️', label: t('donate.causeGarbha', 'गर्भगृह सहयोग'), desc: t('donate.descGarbha', 'माता के मुख्य गर्भगृह का निर्माण') },
    { id: 'shikhar', icon: '🚩', label: t('donate.causeShikhar', 'शिखर निर्माण सहयोग'), desc: t('donate.descShikhar', 'मंदिर के सर्वोच्च शिखर हेतु') },
    { id: 'sabha', icon: '🪔', label: t('donate.causeSabha', 'सभा मंडप सहयोग'), desc: t('donate.descSabha', 'भक्तों के बैठने हेतु विशाल मंडप') },
    { id: 'annakshetra', icon: '🍛', label: t('donate.causeAnna', 'अन्नक्षेत्र सहयोग'), desc: t('donate.descAnna', 'महाप्रसाद एवं भंडारा भवन') },
    { id: 'gaushala', icon: '🐄', label: t('donate.causeGau', 'गौशाला सहयोग'), desc: t('donate.descGau', 'गौ माता के आश्रय एवं सेवा हेतु') }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.selectedCauses.length === 0) {
      alert(t('donate.selectAlert', 'कृपया सहयोग की श्रेणी चुनें। (Please select a category)'));
      return;
    }
    
    // Create a comma-separated string of the selected category labels for the receipt
    const selectedLabels = formData.selectedCauses.map(id => {
      const cause = constructionCauses.find(c => c.id === id);
      return cause ? cause.label : id;
    });

    // Generate Unique Donation ID
    const donationId = `DON-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${new Date().getFullYear()}`;

    // Navigate to receipt and pass data
    navigate('/donation-receipt', { 
      state: { 
        ...formData, 
        donationId, 
        date: new Date().toLocaleDateString(),
        causesList: selectedLabels.join(', ')
      } 
    });
  };

  const inputClasses = "w-full p-4 border border-amber-200/80 bg-[#fffdfa] rounded-lg focus:ring-2 focus:ring-[#8B3A2B]/20 focus:border-[#8B3A2B] outline-none text-stone-800 transition-all duration-300 placeholder:text-amber-800/40 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]";

  return (
    <div className="min-h-screen bg-[#fcf9f5] flex flex-col">
      
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] text-[#eedcbf] py-16 px-4 border-b-[6px] border-amber-500/40 flex flex-col items-center text-center shadow-lg shrink-0">
        <h1 className="relative z-10 text-4xl md:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('donate.pageTitle', 'मंदिर निर्माण सहयोग')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm text-amber-200/80 mb-6">
          {t('donate.subtitle', 'Building a Divine Legacy')}
        </p>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      <div className="flex-grow py-12 px-4 sm:px-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-1.5 z-10">
          <div className="border-[3px] border-dashed border-amber-200/70 rounded-xl p-6 sm:p-10 md:p-12 bg-white relative">
            
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/50"></div>

            <div className="flex flex-col items-center mb-10 text-center">
              <div className="bg-gradient-to-r from-amber-100/50 via-amber-100 to-amber-100/50 px-8 py-6 rounded-2xl border border-amber-200 w-full relative overflow-hidden shadow-sm">
                <span className="absolute -top-4 -left-2 text-6xl text-amber-500/20 font-serif">"</span>
                <h2 className="text-2xl md:text-3xl font-aparajita text-[#8B3A2B] font-bold tracking-wide mb-3 drop-shadow-sm">
                  {t('donate.tagline', '“एक आधार स्तंभ – एक परिवार”')}
                </h2>
                <p className="text-stone-700 font-medium md:text-lg leading-relaxed max-w-2xl mx-auto">
                  {t('donate.slogan', 'मंदिर निर्माण केवल भवन निर्माण नहीं बल्कि आने वाली पीढ़ियों के लिए सनातन संस्कृति की अमर विरासत का निर्माण है।')}
                </p>
                <span className="absolute -bottom-8 -right-2 text-6xl text-amber-500/20 font-serif">"</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              
              {/* STEP 1: VISUAL CAUSE SELECTION */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B3A2B] text-white font-bold text-sm">1</span>
                  <h3 className="text-xl font-bold text-stone-800 font-aparajita tracking-wide">
                    {t('donate.step1', 'सहयोग श्रेणी चुनें (Select Construction Part)')}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {constructionCauses.map((cause) => {
                    const isSelected = formData.selectedCauses.includes(cause.id);
                    const toggleSelection = (id) => {
                      setFormData(prev => ({
                        ...prev,
                        selectedCauses: prev.selectedCauses.includes(id)
                          ? prev.selectedCauses.filter(causeId => causeId !== id)
                          : [...prev.selectedCauses, id]
                      }));
                    };

                    return (
                      <div 
                        key={cause.id}
                        onClick={() => toggleSelection(cause.id)}
                        className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 group flex flex-col items-center text-center
                          ${isSelected 
                            ? 'border-[#8B3A2B] bg-[#8B3A2B]/5 ring-4 ring-[#8B3A2B]/10 scale-[1.02] shadow-md' 
                            : 'border-stone-200 bg-white hover:border-amber-400 hover:shadow-sm hover:-translate-y-1'
                          }`}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3 text-[#8B3A2B] animate-[fadeIn_0.2s_ease-out]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                          </div>
                        )}
                        <span className="text-4xl mb-3 mt-2 group-hover:scale-110 transition-transform">{cause.icon}</span>
                        <h4 className={`font-bold text-lg leading-tight mb-1 ${isSelected ? 'text-[#8B3A2B]' : 'text-stone-800'}`}>
                          {cause.label}
                        </h4>
                        <p className="text-xs text-stone-500 font-medium px-2">{cause.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex items-center justify-center opacity-30">
                <span className="w-1/3 h-px bg-amber-800"></span>
                <span className="mx-4 text-amber-800">❖</span>
                <span className="w-1/3 h-px bg-amber-800"></span>
              </div>

              {/* STEP 2: PERSONAL DETAILS */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B3A2B] text-white font-bold text-sm">2</span>
                  <h3 className="text-xl font-bold text-stone-800 font-aparajita tracking-wide">
                    {t('donate.step2', 'आपका विवरण (Your Details)')}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input 
                    type="text" placeholder={t('donate.name', 'पूरा नाम')} required={!formData.isAnonymous}
                    className={inputClasses}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="tel" placeholder={t('donate.phone', 'मोबाइल नंबर')} required={!formData.isAnonymous}
                    className={inputClasses}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <input 
                    type="email" placeholder={t('donate.email', 'ईमेल आईडी')} required={!formData.isAnonymous}
                    className={`${inputClasses} md:col-span-2`}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea 
                    placeholder={t('donate.addressPlaceholder', 'पूरा पता (Complete Address)')} required={!formData.isAnonymous} rows="2"
                    className={`${inputClasses} md:col-span-2 resize-none`}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  ></textarea>
                </div>

                {/* Anonymous Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group w-max">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-5 h-5 border-2 border-amber-300 rounded bg-[#fffdfa] checked:bg-[#8B3A2B] checked:border-[#8B3A2B] transition-colors cursor-pointer"
                      onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                    />
                    <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-stone-600 font-bold text-sm group-hover:text-[#8B3A2B] transition-colors">
                    {t('donate.anonymous', 'गुमनाम दान (Anonymous Donation)')}
                  </span>
                </label>
              </div>

              {/* STEP 3: AMOUNT & SUBMIT */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B3A2B] text-white font-bold text-sm">3</span>
                  <h3 className="text-xl font-bold text-stone-800 font-aparajita tracking-wide">
                    {t('donate.step3', 'सहयोग राशि (Donation Amount)')}
                  </h3>
                </div>

                <div className="relative mb-8 max-w-md">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-2xl pointer-events-none">₹</div>
                  <input 
                    type="number" placeholder="0.00" required min="1"
                    className={`${inputClasses} pl-10 font-black text-2xl text-[#8B3A2B] h-16`}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>

                <button type="submit" className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#8B3A2B] to-[#b04a36] text-white text-lg py-5 shadow-[0_8px_20px_rgba(139,58,43,0.2)] hover:shadow-[0_8px_25px_rgba(139,58,43,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  <span className="relative flex items-center justify-center gap-2 font-rozha tracking-wide text-2xl">
                    {t('donate.payNow', 'सहयोग अर्पण करें')}
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

    </div>
  );
}