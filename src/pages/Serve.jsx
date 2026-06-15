// src/pages/Serve.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Serve() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dainik');

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
  // How to configure a card:
  // image: "url_to_image.jpg"
  // showBookBtn: true/false (Shows "बुक करें")
  // showDonateBtn: true/false (Shows "दान करें")
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

  // Get the sub-sevas for the currently selected tab
  const activeSevas = sevasData[activeTab] || [];

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      
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
          {categories.map((tab) => (
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
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {activeSevas.map((seva) => (
            <div 
              key={seva.id} 
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image Header Area */}
              <div className="w-full aspect-[4/3] rounded-xl mb-4 overflow-hidden bg-stone-100 relative border border-stone-100">
                {seva.image ? (
                  <img 
                    src={seva.image} 
                    alt={seva.title} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                ) : (
                  // Fallback if no image is provided
                  <div className="w-full h-full flex items-center justify-center text-amber-500/20">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c0 0-8-5-8-12 0-3 1.5-5.5 3.5-8 1 4.5 4.5 7.5 4.5 10.5v9.5z"/></svg>
                  </div>
                )}
                {/* Subtle gradient overlay to make text pop if needed later */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-stone-800 mb-2 leading-tight font-aparajita text-center">
                {seva.title}
              </h3>
              <p className="text-sm text-stone-500 mb-6 flex-grow leading-relaxed text-center">
                {t('donate.genericDesc', 'इस पवित्र सेवा में अपना योगदान दें और माता का आशीर्वाद प्राप्त करें।')}
              </p>
              
              {/* Action Buttons Container (Dynamic based on configuration) */}
              <div className="flex flex-col gap-2 mt-auto">
                
                {/* Conditional Book Button */}
                {seva.showBookBtn && (
                  <button className="w-full py-2.5 rounded-lg bg-stone-50 text-orange-600 border border-orange-200 font-bold text-sm hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm">
                    {t('donate.bookBtn', 'बुक करें')}
                  </button>
                )}

                {/* Conditional Donate Button */}
                {seva.showDonateBtn && (
                  <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-[#8B3A2B] text-white font-bold text-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 shadow-sm border border-transparent">
                    {t('donate.donateBtn', 'दान करें')}
                  </button>
                )}
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}