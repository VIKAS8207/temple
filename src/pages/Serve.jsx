// src/pages/Donation.jsx
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
  // 2. SUB SEVAS DATA (Cards)
  // ==========================================
  const sevasData = {
    'dainik': [
      { id: 'd1', title: t('donate.subDainik1', 'अखंड दीप सेवा'), icon: '🪔' },
      { id: 'd2', title: t('donate.subDainik2', 'पुष्प सेवा'), icon: '🌸' },
      { id: 'd3', title: t('donate.subDainik3', 'भोग सेवा'), icon: '🍛' },
      { id: 'd4', title: t('donate.subDainik4', 'आरती सेवा'), icon: '🔔' },
      { id: 'd5', title: t('donate.subDainik5', 'वस्त्र सेवा'), icon: '🥻' },
      { id: 'd6', title: t('donate.subDainik6', 'दैनिक श्रृंगार सेवा'), icon: '✨' },
      { id: 'd7', title: t('donate.subDainik7', 'अन्नदान सेवा'), icon: '🙏' },
      { id: 'd8', title: t('donate.subDainik8', 'विशेष संकल्प सेवा'), icon: '📿' }
    ],
    'tuesday_special': [
      { id: 'ts1', title: t('donate.subTueSp1', 'मंगलवार विशेष अभिषेक'), icon: '💧' },
      { id: 'ts2', title: t('donate.subTueSp2', 'मंगल पाठ'), icon: '📖' },
      { id: 'ts3', title: t('donate.subTueSp3', 'विशेष आरती'), icon: '🔔' },
      { id: 'ts4', title: t('donate.subTueSp4', 'प्रसाद सेवा'), icon: '🍱' },
      { id: 'ts5', title: t('donate.subTueSp5', 'संकल्प पूजा'), icon: '📿' }
    ],
    'tuesday_bhandara': [
      { id: 'tb1', title: t('donate.subTueBh1', 'संपूर्ण भंडारा'), icon: '🥘' },
      { id: 'tb2', title: t('donate.subTueBh2', 'आंशिक भंडारा'), icon: '🍲' },
      { id: 'tb3', title: t('donate.subTueBh3', 'प्रसाद वितरण'), icon: '🥡' },
      { id: 'tb4', title: t('donate.subTueBh4', 'अन्नदान'), icon: '🌾' }
    ],
    'kalash': [
      { id: 'k1', title: t('donate.subKalash1', 'कलश स्थापना'), icon: '🏺' }
    ],
    'abhishek': [
      { id: 'a1', title: t('donate.subAbhishek1', 'अभिषेक पूजन'), icon: '💦' }
    ],
    'jaap': [
      { id: 'j1', title: t('donate.subJaap1', 'दुर्गा सप्तशती पाठ'), icon: '📜' },
      { id: 'j2', title: t('donate.subJaap2', 'नवचंडी पाठ'), icon: '📚' },
      { id: 'j3', title: t('donate.subJaap3', 'विशेष जाप'), icon: '📿' }
    ],
    'archan': [
      { id: 'ar1', title: t('donate.subArchan1', 'पुष्प अर्चन'), icon: '🌺' },
      { id: 'ar2', title: t('donate.subArchan2', 'कुमकुम अर्चन'), icon: '🔴' },
      { id: 'ar3', title: t('donate.subArchan3', 'फल अर्पण'), icon: '🍎' },
      { id: 'ar4', title: t('donate.subArchan4', 'सिंदूर अर्पण'), icon: '🟠' },
      { id: 'ar5', title: t('donate.subArchan5', 'सूखे मेवे अर्पण'), icon: '🥜' }
    ],
    'vastra': [
      { id: 'v1', title: t('donate.subVastra1', 'वस्त्र सेवा'), icon: '🥻' }
    ],
    'shringar': [
      { id: 's1', title: t('donate.subShringar1', 'श्रृंगार सेवा'), icon: '✨' }
    ],
    'navratri': [
      { id: 'n1', title: t('donate.subNavratri1', 'अखंड ज्योति'), icon: '🪔' },
      { id: 'n2', title: t('donate.subNavratri2', 'दुर्गा सप्तशती पाठ'), icon: '📖' },
      { id: 'n3', title: t('donate.subNavratri3', 'कन्या पूजन'), icon: '👧' },
      { id: 'n4', title: t('donate.subNavratri4', 'विशेष अभिषेक'), icon: '💦' },
      { id: 'n5', title: t('donate.subNavratri5', 'श्रृंगार सेवा'), icon: '✨' },
      { id: 'n6', title: t('donate.subNavratri6', 'अन्नदान'), icon: '🍛' },
      { id: 'n7', title: t('donate.subNavratri7', 'कलश स्थापना'), icon: '🏺' }
    ],
    'gau': [
      { id: 'g1', title: t('donate.subGau1', 'चारा सेवा'), icon: '🌿' },
      { id: 'g2', title: t('donate.subGau2', 'गौ भोजन'), icon: '🐄' },
      { id: 'g3', title: t('donate.subGau3', 'चिकित्सा सहायता'), icon: '🩺' },
      { id: 'g4', title: t('donate.subGau4', 'गौ आश्रय सहयोग'), icon: '🏡' }
    ]
  };

  // Get the sub-sevas for the currently selected tab
  const activeSevas = sevasData[activeTab] || [];

return (
    <div className="min-h-screen bg-[#faf6f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-aparajita text-[#8b3a2b] flex items-center justify-center md:justify-start gap-3 mb-2 font-bold drop-shadow-sm">
            <span className="text-4xl">🪔</span> {t('donate.pageTitle', 'दैनिक एवं विशेष सेवाएँ')}
          </h1>
          <p className="text-stone-600 font-medium text-lg ml-1">
            {t('donate.subtitle', 'माँ बड़ी माता की सेवाओं में सहभागी बनें')}
          </p>
        </div>

        {/* Categories (Tabs) Section - Changed to flex-wrap */}
        <div className="flex flex-wrap pb-4 mb-10 gap-3">
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
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
                {seva.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 leading-tight font-aparajita">
                {seva.title}
              </h3>
              
              {/* Optional Generic Description for Sub-sevas */}
              <p className="text-sm text-stone-500 mb-6 flex-grow leading-relaxed">
                {t('donate.genericDesc', 'इस पवित्र सेवा में अपना योगदान दें और माता का आशीर्वाद प्राप्त करें।')}
              </p>
              
              <button className="w-full py-2.5 rounded-lg bg-stone-50 text-orange-600 border border-orange-200 font-bold text-sm hover:bg-orange-600 hover:text-white transition-colors duration-300 shadow-sm">
                {t('donate.bookBtn', 'बुक करें')}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}