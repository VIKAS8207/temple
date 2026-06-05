// src/pages/Donation.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Donation() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('daily');

  // Tab Categories based on your screenshot
  const tabs = [
    { id: 'daily', label: t('donate.tabDaily') },
    { id: 'tuesday', label: t('donate.tabTuesday') },
    { id: 'navratri', label: t('donate.tabNavratri') },
    { id: 'online', label: t('donate.tabOnline') },
    { id: 'bhandara', label: t('donate.tabBhandara') },
    { id: 'gau', label: t('donate.tabGau') },
  ];

  // Seva Cards based on your screenshot
  const sevas = [
    { id: 1, icon: "🪔", title: t('donate.seva1Title'), desc: t('donate.seva1Desc') },
    { id: 2, icon: "🌸", title: t('donate.seva2Title'), desc: t('donate.seva2Desc') },
    { id: 3, icon: "🍛", title: t('donate.seva3Title'), desc: t('donate.seva3Desc') },
    { id: 4, icon: "🔔", title: t('donate.seva4Title'), desc: t('donate.seva4Desc') },
    { id: 5, icon: "🥻", title: t('donate.seva5Title'), desc: t('donate.seva5Desc') },
    { id: 6, icon: "✨", title: t('donate.seva6Title'), desc: t('donate.seva6Desc') },
    { id: 7, icon: "🙏", title: t('donate.seva7Title'), desc: t('donate.seva7Desc') },
    { id: 8, icon: "📿", title: t('donate.seva8Title'), desc: t('donate.seva8Desc') },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-rozha text-[#8b3a2b] flex items-center gap-3 mb-2">
            <span className="text-4xl">🪔</span> {t('donate.pageTitle')}
          </h1>
          <p className="text-stone-600 font-medium text-lg ml-1">
            {t('donate.subtitle')}
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 border ${
                activeTab === tab.id
                  ? 'bg-[#e87a30] text-white border-[#e87a30] shadow-md'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-[#e87a30] hover:text-[#e87a30]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {sevas.map((seva) => (
            <div 
              key={seva.id} 
              className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="text-3xl mb-4">{seva.icon}</div>
              <h3 className="text-lg font-bold text-stone-800 mb-1 leading-tight">
                {seva.title}
              </h3>
              <p className="text-sm text-stone-500 mb-6 flex-grow leading-relaxed">
                {seva.desc}
              </p>
              <button className="w-full py-2 rounded-md bg-[#fff5ec] text-[#e87a30] border border-[#f9d8c0] font-bold text-sm hover:bg-[#ffe8d6] transition-colors">
                {t('donate.bookBtn')}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}