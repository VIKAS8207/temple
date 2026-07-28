import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export default function Serve() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dainik');

  // ==========================================
  // MODAL & FORM STATE
  // ==========================================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeva, setSelectedSeva] = useState(null);
  const [actionType, setActionType] = useState(''); // 'book' or 'donate'
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', isAnonymous: false, amount: '', selectedDate: ''
  });

  // ==========================================
  // 1. SEVA CATEGORIES (Tabs)
  // ==========================================
  const categories = [
    { id: 'dainik', label: t('donate.catDainik', 'दैनिक सेवा') },
    { id: 'tuesday_special', label: t('donate.catTuesdaySpecial', 'मंगलवार विशेष सेवाएँ') },
    { id: 'tuesday_bhandara', label: t('donate.catTuesdayBhandara', 'मंगलवार भंडारा सेवा') },
    { id: 'kalash', label: t('donate.catKalash', 'कलश स्थापना') },
    { id: 'abhishek', label: t('donate.catAbhishek', 'अभिषेक पूजन') },
    { id: 'jaap', label: t('donate.catJaap', 'जाप सेवा') },
    { id: 'archan', label: t('donate.catArchan', 'अर्चन सेवा') },
    { id: 'vastra', label: t('donate.catVastra', 'वस्त्र सेवा') },
    { id: 'shringar', label: t('donate.catShringar', 'श्रृंगार सेवा') },
    { id: 'navratri', label: t('donate.catNavratri', 'नवरात्रि महोत्सव') },
    { id: 'gau', label: t('donate.catGau', 'गौ-सेवा') }
  ];

  // ==========================================
  // 2. SUB SEVAS DATA CONFIGURATION
  // ==========================================
  const sevasData = {
    'dainik': [
      { id: 'd1', title: t('donate.subDainik1', 'अखंड दीप सेवा'), image: '/image/diwali-diya.jpg', showBookBtn: true, showDonateBtn: true },
      { id: 'd2', title: t('donate.subDainik2', 'पुष्प सेवा'), image: '/image/flower.webp', showBookBtn: true, showDonateBtn: true },
      { id: 'd3', title: t('donate.subDainik3', 'भोग सेवा'), image: '/image/bhog.avif', showBookBtn: true, showDonateBtn: true },
      { id: 'd4', title: t('donate.subDainik4', 'आरती सेवा'), image: '/image/religion-aarti.jpg', showBookBtn: true, showDonateBtn: false },
      { id: 'd5', title: t('donate.subDainik5', 'वस्त्र सेवा'), image: '/image/saree.jpg', showBookBtn: false, showDonateBtn: true },
      { id: 'd6', title: t('donate.subDainik6', 'दैनिक श्रृंगार सेवा'), image: '/image/stamp.jpg', showBookBtn: true, showDonateBtn: false },
      { id: 'd7', title: t('donate.subDainik7', 'अन्नदान सेवा'), image: '/image/annadan-seva.webp', showBookBtn: false, showDonateBtn: true },
      { id: 'd8', title: t('donate.subDainik8', 'विशेष संकल्प सेवा'), image: '/image/Hindu-Prayer.webp', showBookBtn: true, showDonateBtn: false }
    ],
    'tuesday_special': [
      { id: 'ts1', title: t('donate.subTueSp1', 'मंगलवार विशेष अभिषेक'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ts2', title: t('donate.subTueSp2', 'मंगल पाठ'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ts3', title: t('donate.subTueSp3', 'विशेष आरती'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ts4', title: t('donate.subTueSp4', 'प्रसाद सेवा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'ts5', title: t('donate.subTueSp5', 'संकल्प पूजा'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false }
    ],
    'tuesday_bhandara': [
      { id: 'tb1', title: t('donate.subTueBh1', 'संपूर्ण भंडारा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'tb2', title: t('donate.subTueBh2', 'आंशिक भंडारा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'tb3', title: t('donate.subTueBh3', 'प्रसाद वितरण'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'tb4', title: t('donate.subTueBh4', 'अन्नदान'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true }
    ],
    'kalash': [
      { id: 'k1', title: t('donate.subKalash1', 'कलश स्थापना'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false }
    ],
    'abhishek': [
      { id: 'a1', title: t('donate.subAbhishek1', 'अभिषेक पूजन'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false }
    ],
    'jaap': [
      { id: 'j1', title: t('donate.subJaap1', 'दुर्गा सप्तशती पाठ'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'j2', title: t('donate.subJaap2', 'नवचंडी पाठ'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'j3', title: t('donate.subJaap3', 'विशेष जाप'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false }
    ],
    'archan': [
      { id: 'ar1', title: t('donate.subArchan1', 'पुष्प अर्चन'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ar2', title: t('donate.subArchan2', 'कुमकुम अर्चन'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ar3', title: t('donate.subArchan3', 'फल अर्पण'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ar4', title: t('donate.subArchan4', 'सिंदूर अर्पण'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'ar5', title: t('donate.subArchan5', 'सूखे मेवे अर्पण'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false }
    ],
    'vastra': [
      { id: 'v1', title: t('donate.subVastra1', 'वस्त्र सेवा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true }
    ],
    'shringar': [
      { id: 's1', title: t('donate.subShringar1', 'श्रृंगार सेवा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true }
    ],
    'navratri': [
      { id: 'n1', title: t('donate.subNavratri1', 'अखंड ज्योति'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'n2', title: t('donate.subNavratri2', 'दुर्गा सप्तशती पाठ'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'n3', title: t('donate.subNavratri3', 'कन्या पूजन'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'n4', title: t('donate.subNavratri4', 'विशेष अभिषेक'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false },
      { id: 'n5', title: t('donate.subNavratri5', 'श्रृंगार सेवा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'n6', title: t('donate.subNavratri6', 'अन्नदान'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'n7', title: t('donate.subNavratri7', 'कलश स्थापना'), image: '/image/Hero.png', showBookBtn: true, showDonateBtn: false }
    ],
    'gau': [
      { id: 'g1', title: t('donate.subGau1', 'चारा सेवा'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'g2', title: t('donate.subGau2', 'गौ भोजन'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'g3', title: t('donate.subGau3', 'चिकित्सा सहायता'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true },
      { id: 'g4', title: t('donate.subGau4', 'गौ आश्रय सहयोग'), image: '/image/Hero.png', showBookBtn: false, showDonateBtn: true }
    ]
  };

  const activeSevas = sevasData[activeTab] || [];

  // ==========================================
  // HANDLERS
  // ==========================================
  const openModal = (seva, type) => {
    setSelectedSeva(seva);
    setActionType(type);
    setFormData({ name: '', phone: '', email: '', address: '', isAnonymous: false, amount: '', selectedDate: '' });
    setIsModalOpen(true);
  };

  const handleDateChange = (e) => {
    const selected = e.target.value;
    
    // Check if the selected tab requires Tuesday validation
    if (selected && (activeTab === 'tuesday_special' || activeTab === 'tuesday_bhandara')) {
      // Split to avoid timezone offset bugs
      const [year, month, day] = selected.split('-');
      const dateObj = new Date(year, month - 1, day);
      
      // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
      if (dateObj.getDay() !== 2) {
        alert(t('donate.tuesdayError', 'कृपया केवल मंगलवार का दिन चुनें। (Please select a Tuesday only.)'));
        setFormData({ ...formData, selectedDate: '' });
        return;
      }
    }
    
    setFormData({ ...formData, selectedDate: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionId = `TXN-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${new Date().getFullYear()}`;
    
    // Pass data to receipt page - including the new logic to separate Booking vs Donation text
    navigate('/donation-receipt', { 
      state: { 
        ...formData, 
        transactionId, 
        causesList: selectedSeva.title, 
        actionType: actionType, // 'book' or 'donate'
        date: actionType === 'book' ? formData.selectedDate : new Date().toLocaleDateString() 
      } 
    });
  };

  const inputClasses = "w-full p-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm";

  return (
    <div className="min-h-screen bg-[#faf6f0] relative">
      
      {/* Top Banner Flush Edge-to-Edge */}
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] to-[#2a110e] text-[#eedcbf] py-16 px-4 border-b-[6px] border-amber-500/40 flex flex-col items-center text-center shadow-lg shrink-0">
        <h1 className="relative z-10 text-4xl md:text-6xl font-rozha mb-4 tracking-wide drop-shadow-md">
          {t('donate.pageTitle', 'दैनिक एवं विशेष सेवाएँ')}
        </h1>
        <p className="relative z-10 font-serif tracking-widest uppercase text-sm text-amber-200/80 mb-6">
          {t('donate.subtitle', 'माँ बड़ी माता की सेवाओं में सहभागी बनें')}
        </p>
        <div className="relative z-10 w-24 h-1 bg-amber-500 rounded-full"></div>
      </section>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Categories (Tabs) Section */}
        <div className="flex flex-wrap pb-4 mb-10 gap-3 justify-center md:justify-start">
          {categories.map((tab) => {
            
            // SPECIAL CASE: Kalash Sthapana is a Link to a new page, with highlight styling
            if (tab.id === 'kalash') {
              return (
                <Link
                  key={tab.id}
                  to="/kalash-sthapna"
                  className="whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md scale-105 animate-pulse bg-gradient-to-r from-red-600 to-amber-600 text-white border-2 border-amber-300 hover:scale-110 hover:shadow-amber-500/50 flex items-center gap-2"
                >
                  {tab.label}
                </Link>
              );
            }

            // NORMAL CASE: Standard toggle buttons for all other categories
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-transparent shadow-lg scale-105'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-amber-400 hover:text-amber-600 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            );
            
          })}
        </div>
        
        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {activeSevas.map((seva) => (
            <div 
              key={seva.id} 
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              <div className="w-full aspect-video rounded-xl mb-4 overflow-hidden bg-stone-100 relative border border-stone-100">
                {seva.image ? (
                  <img 
                    src={seva.image} 
                    alt={seva.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-amber-500/20">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z"/></svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 mb-2 leading-tight font-aparajita text-center">
                {seva.title}
              </h3>
              <p className="text-sm text-stone-500 mb-6 flex-grow leading-relaxed text-center">
                {t('donate.genericDesc', 'इस पवित्र सेवा में अपना योगदान दें और माता का आशीर्वाद प्राप्त करें।')}
              </p>
              
              <div className="flex flex-col gap-2 mt-auto">
                {seva.showBookBtn && (
                  <button 
                    onClick={() => openModal(seva, 'book')}
                    className="w-full py-2.5 rounded-full bg-stone-50 text-orange-600 border border-orange-200 font-bold text-sm hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm"
                  >
                    {t('donate.bookBtn', 'बुक करें')}
                  </button>
                )}

                {seva.showDonateBtn && (
                  <button 
                    onClick={() => openModal(seva, 'donate')}
                    className="w-full py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-[#8B3A2B] text-white font-bold text-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 shadow-sm border border-transparent"
                  >
                    {t('donate.donateBtn', 'दान करें')}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================
          DONATION & BOOKING FORM POPUP MODAL
      ========================================= */}
      {isModalOpen && selectedSeva && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl p-5 sm:p-6 animate-[fadeIn_0.3s_ease-out] border-4 border-amber-100 max-h-[95vh] overflow-y-auto hide-scrollbar">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-red-600 hover:rotate-90 transition-all bg-stone-100 hover:bg-red-50 p-2 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="text-center mb-4 border-b border-stone-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#8B3A2B] font-rozha mb-1">
                {actionType === 'book' ? t('donate.modalTitleBook', 'सेवा बुकिंग विवरण') : t('donate.modalTitleDonate', 'सेवक का विवरण')}
              </h2>
              <p className="text-stone-600 font-medium text-xs sm:text-sm leading-relaxed">
                {t('donate.modalSubtitle', 'माँ के श्रीचरणों में सेवा समर्पित करने हेतु कृपया अपना विवरण भरें।')}<br/>
                <span className="text-[11px] text-stone-400 mt-1 block">
                  {t('donate.modalNote', '"आपकी जानकारी केवल सेवा पुष्टि एवं आधिकारिक संवाद हेतु सुरक्षित रखी जाएगी।"')}
                </span>
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 shadow-inner text-center">
              <span className="text-stone-500 text-xs font-bold uppercase block mb-1">
                {t('donate.modalSelectedSeva', 'चयनित सेवा')}
              </span>
              <span className="text-orange-950 font-aparajita text-lg font-bold">{selectedSeva.title}</span>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              
              <input type="text" placeholder={t('donate.modalNamePlaceholder', 'पूरा नाम* (अनिवार्य)')} required={!formData.isAnonymous} 
                className={inputClasses} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="tel" placeholder={t('donate.modalPhonePlaceholder', 'मोबाइल नंबर* (अनिवार्य)')} required={!formData.isAnonymous} 
                  className={inputClasses} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input type="email" placeholder={t('donate.modalEmailPlaceholder', 'ईमेल आईडी (वैकल्पिक)')} required={false} 
                  className={inputClasses} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <textarea placeholder={t('donate.modalAddressPlaceholder', 'पूरा पता (वैकल्पिक)')} required={false} rows="1" 
                className={`${inputClasses} resize-none`}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
              
              {/* Conditional Date Selection - ONLY FOR BOOKINGS */}
              {actionType === 'book' && (
                <div className="mt-1">
                  <input 
                    type="date" 
                    required 
                    min={new Date().toISOString().split('T')[0]} // Block past dates
                    className={inputClasses} 
                    value={formData.selectedDate}
                    onChange={handleDateChange}
                  />
                  {(activeTab === 'tuesday_special' || activeTab === 'tuesday_bhandara') && (
                    <p className="text-[11px] text-orange-600 mt-1 font-medium">* {t('donate.tuesdayOnlyNote', 'केवल मंगलवार उपलब्ध है')}</p>
                  )}
                </div>
              )}
              
              <label className="flex items-center gap-3 cursor-pointer group mt-1 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
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
                  {t('donate.modalAnonymous', 'गुमनाम दान (Anonymous Donation)')}
                </span>
              </label>

              <div className="mt-2 pt-3 border-t border-stone-200">
                <label className="block text-stone-600 text-xs font-bold uppercase tracking-wider mb-2">
                  {t('donate.modalAmountLabel', 'सहयोग राशि (₹)')}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-xl pointer-events-none">₹</div>
                  <input 
                    type="number" 
                    placeholder={t('donate.modalAmountPlaceholder', 'श्रद्धानुसार राशि दर्ज करें')}
                    required 
                    min={1}
                    value={formData.amount}
                    className={`${inputClasses} !pl-12 font-black text-lg text-[#8B3A2B]`}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-3 sm:py-3.5 mt-2 rounded-full bg-gradient-to-r from-orange-600 to-[#8B3A2B] text-white font-bold text-lg shadow-lg hover:shadow-orange-900/40 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2">
                {actionType === 'book' ? t('donate.modalSubmitBookBtn', 'सेवा बुक करें') : t('donate.modalSubmitDonateBtn', 'सहयोग अर्पण करें')}
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