// src/components/WinnerList.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function WinnerList() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrevious, setShowPrevious] = useState(false);

  // Mock Data for Current Winners (e.g., 2026)
  const currentWinners = [
    { id: 1, rank: "1st Prize", item: "Plot", ticket: "BMT-8472", name: "Rahul Sharma", location: "Raipur" },
    { id: 2, rank: "2nd Prize", item: "Gold", ticket: "BMT-3921", name: "Priya Patel", location: "Bhilai" },
    { id: 3, rank: "3rd Prize", item: "Bike", ticket: "BMT-1044", name: "Amit Singh", location: "Bilaspur" },
    { id: 4, rank: "4th Prize", item: "Fridge", ticket: "BMT-5609", name: "Neha Verma", location: "Durg" },
    { id: 5, rank: "5th Prize", item: "TV", ticket: "BMT-9233", name: "Suresh Kumar", location: "Raigarh" },
  ];

  // Mock Data for Previous Winners (e.g., 2025)
  const previousWinners = [
    { id: 1, rank: "1st Prize", item: "Car", ticket: "BMT-2025-112", name: "Kavita Desai", location: "Korba" },
    { id: 2, rank: "2nd Prize", item: "Bike", ticket: "BMT-2025-884", name: "Manish Tiwari", location: "Raipur" },
    { id: 3, rank: "3rd Prize", item: "Gold", ticket: "BMT-2025-301", name: "Anjali Gupta", location: "Jagdalpur" },
  ];

  // Determine which list to show and filter it based on search query
  const activeList = showPrevious ? previousWinners : currentWinners;
  const filteredWinners = activeList.filter(winner => 
    winner.ticket.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 bg-[#f8f5f0] overflow-hidden">
      
      {/* Soft Background Decor for a calming feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[1.5px] bg-amber-500/60"></span>
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" /></svg>
            <span className="w-10 h-[1.5px] bg-amber-500/60"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] mb-4 drop-shadow-sm">
            {t('winners.title')}
          </h2>
          <p className="text-stone-600 font-medium text-lg">
            {t('winners.subtitle')}
          </p>
        </div>

        {/* Controls: Search Bar & Toggle Button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder={t('winners.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border-none rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium text-stone-700 placeholder-stone-400"
            />
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setShowPrevious(!showPrevious)}
            className={`w-full md:w-auto px-6 py-3.5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 border shadow-sm
              ${showPrevious 
                ? 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900' 
                : 'bg-gradient-to-r from-orange-600 to-amber-600 border-transparent text-white shadow-orange-900/10 hover:shadow-orange-900/20 hover:-translate-y-0.5'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {showPrevious ? t('winners.currentWinnersBtn') : t('winners.prevWinnersBtn')}
          </button>
        </div>

        {/* Winners Table - Enhanced Calming UI */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgba(139,58,43,0.04)] border border-stone-200/60 overflow-hidden">
          
          {/* Decorative Top Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-[#8B3A2B]"></div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50/80 border-b border-stone-200/60">
                  <th className="py-5 px-6 font-bold text-stone-500 uppercase tracking-wider text-xs">{t('winners.colRank')}</th>
                  <th className="py-5 px-6 font-bold text-stone-500 uppercase tracking-wider text-xs">{t('winners.colTicket')}</th>
                  <th className="py-5 px-6 font-bold text-stone-500 uppercase tracking-wider text-xs">{t('winners.colName')}</th>
                  <th className="py-5 px-6 font-bold text-stone-500 uppercase tracking-wider text-xs">{t('winners.colLocation')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredWinners.length > 0 ? (
                  filteredWinners.map((winner, index) => (
                    <tr 
                      key={winner.id} 
                      className={`transition-colors duration-300 ${
                        index === 0 
                          ? 'bg-gradient-to-r from-amber-50/80 to-transparent hover:from-amber-100/80' 
                          : 'bg-transparent hover:bg-stone-50'
                      }`}
                    >
                      {/* Rank & Prize */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-4">
                          {index === 0 ? (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-md ring-4 ring-amber-100 shrink-0">
                              <svg className="w-5 h-5 text-orange-950" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28z"/></svg>
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 font-bold flex items-center justify-center border border-stone-200 shrink-0">
                              {index + 1}
                            </div>
                          )}
                          <div className="flex flex-col">
                            <span className={`font-bold ${index === 0 ? 'text-[#8B3A2B] text-base' : 'text-stone-700 text-sm'}`}>
                              {winner.rank}
                            </span>
                            <span className="text-xs text-amber-600 font-semibold tracking-wide uppercase bg-amber-100/50 px-2 py-0.5 rounded w-max mt-1">
                              {winner.item}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Ticket Number (Designed like a coupon) */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="inline-block border border-dashed border-stone-300 bg-stone-50/80 px-3 py-1.5 rounded-lg">
                          <span className="font-mono text-stone-600 font-bold tracking-widest text-sm">
                            {winner.ticket}
                          </span>
                        </div>
                      </td>

                      {/* Winner Name */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="font-semibold text-stone-800 text-base">
                          {winner.name}
                        </div>
                      </td>

                      {/* Location */}
                      <td className="py-5 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-stone-500 text-sm font-medium">
                          <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {winner.location}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-16 text-center">
                      <svg className="w-12 h-12 text-stone-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <p className="text-stone-500 font-medium text-lg">
                        {t('winners.noResults')}
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
        </div>
        
        {/* ========================================= */}
        {/* NEW: TOP COUPON PROMO BANNER SECTION */}
        {/* ========================================= */}
        <div className="mt-15 mb-20 relative bg-gradient-to-r from-amber-500 to-[#8B3A2B] rounded-3xl p-1 shadow-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
          
          {/* Dashed inner border for a realistic ticket look */}
          <div className="border-[3px] border-dashed border-white/40 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative bg-white/10 backdrop-blur-sm">
            
            {/* Ticket Perforated Cutouts on the left and right */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-[#f8f5f0] rounded-full shadow-[inset_-3px_0_5px_rgba(0,0,0,0.1)]"></div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-[#f8f5f0] rounded-full shadow-[inset_3px_0_5px_rgba(0,0,0,0.1)]"></div>

            {/* Banner Text Info */}
            <div className="text-center md:text-left flex-1 px-4">
              <span className="inline-block bg-amber-200 text-orange-950 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Grand Prize Awaits
              </span>
              <h3 className="text-3xl md:text-4xl font-rozha font-bold text-white mb-3 leading-tight drop-shadow-md">
                {t('winners.couponBannerTitle')}
              </h3>
              <p className="text-amber-100/90 text-sm md:text-base font-medium max-w-lg mx-auto md:mx-0">
                {t('winners.couponBannerDesc')}
              </p>
            </div>

            {/* Divider for Mobile */}
            <div className="w-full h-px border-t border-dashed border-white/40 md:hidden"></div>

            {/* Price & Action Button Area */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-xl shrink-0 md:-rotate-2 border-2 border-amber-100 z-10">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">
                {t('winners.couponPriceLabel')}
              </span>
              <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 drop-shadow-sm mb-5">
                ₹500
              </span>
              
              {/* This links the user to your payment / lucky draw routing */}
              <Link to="/lucky-draw" className="bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 transition-all w-full text-center flex items-center justify-center gap-2 group">
                {t('winners.couponBuyBtn')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </Link>
            </div>

          </div>
        </div>
        {/* ========================================= */}

      </div>
    </section>
  );
}