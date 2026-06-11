// src/pages/Donation.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Donation() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    isAnonymous: false,
    sevaType: '',
    otherSeva: '',
    amount: ''
  });

  const sevaOptions = [
    { value: 'akhand_deep', label: t('donate.subDainik1', 'अखंड दीप सेवा') },
    { value: 'annadaan', label: t('donate.subDainik7', 'अन्नदान सेवा') },
    { value: 'abhishek', label: t('donate.subAbhishek1', 'अभिषेक पूजन') },
    { value: 'others', label: t('donate.others', 'अन्य (Others)') }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Data:", formData);
    // Add your payment gateway logic here
  };

  // Reusable traditional input styling
  const inputClasses = "w-full p-4 border border-amber-200/80 bg-[#fffdfa] rounded-lg focus:ring-2 focus:ring-[#8B3A2B]/20 focus:border-[#8B3A2B] outline-none text-stone-800 transition-all duration-300 placeholder:text-amber-800/40 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]";

  return (
    <div className="min-h-screen bg-[#fcf9f5] flex flex-col">
      
      {/* Top Banner - Flush edge-to-edge */}
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] text-[#eedcbf] py-16 px-4 border-b-[6px] border-amber-500/40 flex flex-col items-center text-center shadow-lg shrink-0">
        <h1 className="relative z-10 text-4xl md:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('donate.pageTitle', 'दान एवं सेवा अर्पण')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm text-amber-200/80 mb-6">
          {t('donate.subtitle', 'We are here to assist you')}
        </p>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      {/* Form Container */}
      <div className="flex-grow py-16 px-4 flex items-center justify-center relative overflow-hidden">
        
        {/* Subtle background mandala/glow for the page */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-1.5 z-10">
          
          {/* Traditional Inner Border Frame */}
          <div className="border-[3px] border-dashed border-amber-200/70 rounded-xl p-8 md:p-12 bg-white relative">
            
            {/* Corner Accents (Top Left, Top Right, Bottom Left, Bottom Right) */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/50"></div>

            {/* Traditional Header */}
            <div className="flex flex-col items-center mb-10 text-center">
              <span className="text-4xl mb-3 animate-[pulse_3s_ease-in-out_infinite] drop-shadow-sm">🪔</span>
              <h1 className="text-3xl md:text-4xl font-rozha text-[#8B3A2B] font-bold tracking-wide">
                {t('donate.formTitle', 'दान एवं सेवा अर्पण')}
              </h1>
              {/* Ornamental Divider */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-12 h-px bg-amber-400"></span>
                <span className="w-2 h-2 bg-amber-500 rotate-45"></span>
                <span className="w-12 h-px bg-amber-400"></span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" placeholder={t('donate.name', 'पूरा नाम')} required
                  className={inputClasses}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="tel" placeholder={t('donate.phone', 'मोबाइल नंबर')} required
                  className={inputClasses}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
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

              {/* Seva Dropdown */}
              <div className="relative">
                <select 
                  required
                  className={`${inputClasses} appearance-none cursor-pointer pr-12`}
                  onChange={(e) => setFormData({...formData, sevaType: e.target.value})}
                >
                  <option value="" disabled selected hidden className="text-stone-400">{t('donate.selectSeva', 'सेवा का प्रकार चुनें')}</option>
                  {sevaOptions.map(opt => <option key={opt.value} value={opt.value} className="text-stone-800">{opt.label}</option>)}
                </select>
                {/* Custom Chevron for Dropdown */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-amber-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* Conditional "Other" Field */}
              {formData.sevaType === 'others' && (
                <div className="animate-[fadeIn_0.3s_ease-out]">
                  <input 
                    type="text" placeholder={t('donate.specify', 'कृपया सेवा बताएं')} required
                    className={`${inputClasses} !bg-amber-50 !border-amber-300`}
                    onChange={(e) => setFormData({...formData, otherSeva: e.target.value})}
                  />
                </div>
              )}

              {/* Amount */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-lg pointer-events-none">₹</div>
                <input 
                  type="number" placeholder={t('donate.amount', 'राशि')} required min="1"
                  className={`${inputClasses} pl-9 font-bold text-lg`}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#8B3A2B] to-[#b04a36] text-white  text-lg py-4 shadow-[0_8px_20px_rgba(139,58,43,0.2)] hover:shadow-[0_8px_25px_rgba(139,58,43,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                <span className="relative flex items-center justify-center gap-2 font-rozha tracking-wide text-2xl">
                  {t('donate.payNow', 'भुगतान करें')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* Tailwind Animations for form transitions */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

    </div>
  );
}