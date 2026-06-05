// src/pages/Contact.jsx
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f4ece1] pb-24 relative overflow-hidden">
      
      {/* Background Mandala Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] text-[#eedcbf] py-16 px-4 border-b-[6px] border-amber-500/40 flex flex-col items-center text-center shadow-lg">
        <h1 className="relative z-10 text-4xl md:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('contact.pageTitle')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm text-amber-200/80 mb-6">
          {t('contact.subtitle')}
        </p>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-stone-200/60 overflow-hidden flex flex-col lg:flex-row">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: CONTACT INFORMATION                          */}
          {/* ========================================================= */}
          <div className="lg:w-2/5 bg-[#8b3a2b] text-amber-50 p-10 md:p-14 relative overflow-hidden">
            {/* Decorative background overlay */}
            <div 
              className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20zM0 20c0 11.046 8.954 20 20 20V0C8.954 0 0 8.954 0 20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}
            ></div>

            <h3 className="text-3xl font-rozha mb-10 relative z-10 drop-shadow-sm">
              {t('contact.infoTitle')}
            </h3>

            <div className="flex flex-col gap-8 relative z-10">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="bg-amber-500/20 p-3 rounded-full shrink-0">
                  <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-200 mb-1">{t('contact.addressTitle')}</h4>
                  <p className="text-amber-50/80 leading-relaxed text-sm">
                    {t('contact.address')}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="bg-amber-500/20 p-3 rounded-full shrink-0">
                  <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-200 mb-1">{t('contact.phoneTitle')}</h4>
                  <p className="text-amber-50/80 leading-relaxed text-sm">
                    +91 98765 43210 <br /> +91 91234 56789
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="bg-amber-500/20 p-3 rounded-full shrink-0">
                  <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-amber-200 mb-1">{t('contact.emailTitle')}</h4>
                  <p className="text-amber-50/80 leading-relaxed text-sm">
                    info@badimathatemple.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CONTACT FORM                                */}
          {/* ========================================================= */}
          <div className="lg:w-3/5 p-10 md:p-14">
            <h3 className="text-3xl font-rozha text-orange-950 mb-8">
              {t('contact.formTitle')}
            </h3>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                    {t('contact.name')}
                  </label>
                  <input 
                    type="text" 
                    className="bg-stone-50 border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Phone Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                    {t('contact.phoneForm')}
                  </label>
                  <input 
                    type="tel" 
                    className="bg-stone-50 border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                  {t('contact.subject')}
                </label>
                <input 
                  type="text" 
                  className="bg-stone-50 border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                  {t('contact.message')}
                </label>
                <textarea 
                  rows="5"
                  className="bg-stone-50 border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto"
              >
                {t('contact.submit')}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}