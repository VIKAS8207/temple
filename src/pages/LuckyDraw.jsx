// src/pages/LuckyDraw.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LuckyDraw() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // NEW HOOK
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: ''
  });

  // 1. Full-Width Carousel Images
  const carouselImages = [
    "/image/Artboard.jpeg",
    "/image/Artboard 1.png",
    "/image/Artboard 2.png",
    "/image/Artboard 3.png",
  ];

  // 2. Major Prizes 
  const majorPrizes = [
    { id: 1, img: '/prize/land.jpg', title: t('luckyNew.prizePlot', '₹10 लाख तक का प्लॉट') },
    { id: 2, img: '/prize/car.jpg', title: t('luckyNew.prizeCar', '1 कार') },
    { id: 3, img: '/prize/bike.jpg', title: t('luckyNew.prizeRE', '1 Royal Enfield') },
    { id: 4, img: '/prize/scooty.jpg', title: t('luckyNew.prizeChetak', '2 Bajaj Chetak EV') }
  ];

// 3. Other Attractive Prizes (Updated with Images instead of Emojis)
  const otherPrizes = [
    { count: "3", name: "Laptop", img: "/prize/laptop.jpg" },
    { count: "4", name: "Refrigerator", img: "/prize/fridge.jpg" },
    { count: "5", name: "Air Conditioner", img: "/prize/AC.jpg" },
    { count: "5", name: "Washing Machine", img: "/prize/WM.jpg" },
    { count: "5", name: "Vivo Mobile", img: "/prize/Phone.jpg" },
    { count: "10", name: "LED TV", img: "/prize/TV.jpg" },
    { count: "10", name: "Cooler", img: "/prize/cooler.jpg" },
    { count: "10", name: "Bicycle", img: "/prize/cycle.jpg" },
    { count: "15", name: "Trolley Bag", img: "/prize/airbag.jpg" },
    { count: "20", name: "Home Theatre", img: "/prize/sound.jpg" },
    { count: "25", name: "Induction", img: "/prize/Induction.jpg" },
    { count: "100", name: "Mixer Grinder", img: "/prize/Mixi.jpg" },
    { count: "100", name: "Steel Dinner Set", img: "/prize/vessel.jpg" },
    { count: "200", name: "Electric Iron", img: "/prize/iorn.jpg" },
    { count: "500", name: "Water Can", img: "/prize/watercan.jpg" }
  ];

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-[#f8f4ed] relative overflow-hidden flex flex-col items-center pb-24">
      
      {/* Background ambient mandala pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* =========================================
          1. HEADER SECTION
      ========================================= */}
      <section className="relative z-10 w-full bg-gradient-to-b from-[#3e1a16] via-[#2a110e] to-[#3e1a16] text-[#eedcbf] py-12 md:py-16 px-4 border-b-8 border-amber-500 flex flex-col items-center text-center shadow-2xl">
        <div className="absolute inset-0 mix-blend-overlay"></div>
        
        {/* Shloka Added Here */}
        <p className="relative z-10 font-rozha text-amber-200/90 text-sm sm:text-lg md:text-xl mb-4 drop-shadow-md tracking-wide">
          {t('luckyNew.shloka', 'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥')}
        </p>
        
        {/* New Main Heading */}
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-rozha text-[#eedcbf] font-bold mb-4 leading-snug drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          {t('luckyNew.pageTitle', 'भाग्यशाली भक्त उपहार योजना')}
        </h1>
        
        <div className="relative z-10 flex items-center justify-center gap-2 mt-2">
          <span className="w-10 sm:w-16 h-1 bg-amber-500"></span>
          <span className="w-2 h-2 bg-amber-400 rotate-45"></span>
          <span className="w-10 sm:w-16 h-1 bg-amber-500"></span>
        </div>
      </section>

     {/* =========================================
          2. CONTAINED CAROUSEL SECTION
      ========================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-12 sm:mb-16">
        
        {/* The Floating Carousel Box */}
        <div className="relative w-full aspect-video sm:aspect-video max-h-[80vh] bg-stone-900 border-[4px] sm:border-[6px] border-amber-200/60 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(139,58,43,0.15)] group overflow-hidden">
          
          {carouselImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent z-20 pointer-events-none"></div>

          {/* Arrow Controls */}
          <button onClick={prevSlide} className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-amber-500 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-white/20 hover:scale-110">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={nextSlide} className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-amber-500 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-lg border border-white/20 hover:scale-110">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Carousel Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
            {carouselImages.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 shadow-md ${
                  currentSlide === index ? 'bg-amber-400 w-6 sm:w-10' : 'bg-white/70 hover:bg-white w-2 sm:w-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* =========================================
          3. MAJOR PRIZES SECTION (Horizontal Scroll)
      ========================================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 mt-12 sm:mt-16 mb-12 sm:mb-16 text-center">
        
        {/* NEW ENCOURAGING HEADLINES */}
        <div className="mb-10 sm:mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-rozha text-[#8B3A2B] font-bold drop-shadow-sm leading-tight">
            {t('luckyNew.prizeHeadingMain', 'माँ के भव्य मंदिर निर्माण में आपका सहयोग, आपके जीवन का सौभाग्य बने!')}
          </h2>
          
          <div className="bg-white/50 border border-amber-200/50 rounded-2xl p-6 mt-6 shadow-sm">
            <p className="text-lg sm:text-xl md:text-2xl text-orange-900 font-rozha italic leading-relaxed">
              {t('luckyNew.prizeSub', 'कल जब माँ बड़ी माता का दिव्य मंदिर पूर्ण होगा, तब हर भक्त गर्व से कह सकेगा')} <br/>
              <span className="text-amber-600 font-bold">“इस पावन धाम के निर्माण में मेरा भी योगदान है।”</span>
            </p>
          </div>
          
          <p className="text-stone-600 font-medium mt-6 text-sm sm:text-base px-4">
            {t('luckyNew.prizeDesc', 'माँ बड़ी माता मंदिर निर्माण के शेष कार्य को पूर्ण करने हेतु यह योजना प्रारंभ की गई है।')}
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-16 h-[2px] bg-amber-400"></span>
            <span className="w-2 h-2 bg-amber-500 rotate-45"></span>
            <span className="w-16 h-[2px] bg-amber-400"></span>
          </div>
        </div>

        {/* Horizontal Scroll Container (Prizes) */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 pt-4 px-2 snap-x snap-mandatory hide-scrollbar">
          {majorPrizes.map((prize) => (
            <div key={prize.id} className="relative shrink-0 w-56 sm:w-64 md:w-72 bg-white rounded-2xl shadow-xl snap-center group cursor-pointer border-[3px] border-double border-amber-200 hover:border-amber-400 transition-all duration-300 hover:-translate-y-2">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <img src={prize.img} alt={prize.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-4 sm:p-5 text-center bg-gradient-to-b from-white to-amber-50/50 rounded-b-xl">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800 font-aparajita tracking-wide drop-shadow-sm">
                  {prize.title}
                </h3>
              </div>
              {/* Corner decorative anchors */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white drop-shadow-md z-10"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white drop-shadow-md z-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          4. COUPON UI & CTA BUTTON SECTION
      ========================================= */}
      <div className="relative w-full max-w-2xl mx-auto z-10 px-4 sm:px-8 mb-16 flex flex-col items-center">
        
        {/* Realistic Ticket Design */}
        <div className="w-full relative bg-gradient-to-br from-[#8B3A2B] to-[#592218] rounded-xl p-1 overflow-visible shadow-xl mb-8 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="border-[3px] border-dashed border-amber-500/40 rounded-lg p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative bg-[#8B3A2B]/20 backdrop-blur-sm">
            
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
              <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-2">
                {t('luckyNew.ticketTag', 'सहयोग रसीद')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-rozha font-bold text-white leading-tight">
                {t('luckyNew.pageTitle', 'भाग्यशाली भक्त उपहार योजना')}
              </h2>
              <p className="text-amber-100/70 text-sm mt-2 font-medium">
                {t('luckyNew.ticketDesc', 'आपके सहयोग से ही मंदिर का नवनिर्माण संभव है।')}
              </p>
            </div>

            <div className="w-full h-px border-t border-dashed border-amber-500/40 sm:hidden"></div>

            <div className="flex flex-col items-center justify-center bg-amber-500 rounded-xl px-6 py-4 shadow-inner shrink-0 rotate-[-2deg]">
              <span className="text-orange-950 font-bold uppercase text-xs tracking-widest mb-1">
                {t('luckyNew.ticketPriceLabel', 'सहयोग राशि')}
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white drop-shadow-md">₹500</span>
            </div>

          </div>
          {/* Ticket Perforated Cutouts */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-[#f8f4ed] rounded-full"></div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-[#f8f4ed] rounded-full"></div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-[length:200%_auto] hover:bg-[position:right_center] text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full shadow-[0_10px_30px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto overflow-hidden ring-4 ring-orange-600/20"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
          <span className="font-rozha font-bold text-2xl sm:text-3xl tracking-wide drop-shadow-md">
            {t('luckyNew.ctaBtn', 'कूपन प्राप्त करें')}
          </span>
        </button>

      </div>

      {/* =========================================
          5. OTHER ATTRACTIVE PRIZES (New Section)
      ========================================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-rozha text-[#8B3A2B] font-bold flex items-center justify-center gap-3 drop-shadow-sm">
            <span className="text-amber-500">🎁</span>
            {t('luckyNew.otherPrizesHeading', 'अन्य आकर्षक उपहार')}
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mobile: Horizontal Swipe Scroll | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 overflow-x-auto md:overflow-visible gap-4 sm:gap-5 pb-6 pt-2 px-2 snap-x snap-mandatory hide-scrollbar">
          {otherPrizes.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-amber-100 text-center flex flex-col items-center hover:shadow-md hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 shrink-0 w-48 md:w-auto snap-center group">
              
              {/* Product Image Circle */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 mb-3 rounded-full bg-stone-50 border-2 border-stone-100 overflow-hidden shadow-inner group-hover:border-amber-300 transition-colors">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              <span className="text-sm sm:text-base font-bold text-stone-800 leading-tight h-10 flex items-center justify-center">{item.name}</span>
              <span className="text-[10px] sm:text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-md font-bold mt-2 border border-amber-100 w-full">
                {item.count} {t('luckyNew.bhaktonKeLiye', 'भक्तों के लिए')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          6. INTRODUCTION & OBJECTIVE
      ========================================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-[#8B3A2B] to-[#592218] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 text-lg sm:text-xl mb-4 sm:mb-6">🎯</div>
            <h3 className="text-xl sm:text-2xl font-bold font-aparajita mb-3 sm:mb-4 tracking-wide text-amber-300">{t('luckyNew.objTitle', 'योजना का उद्देश्य')}</h3>
            <p className="text-amber-50/90 font-medium text-sm sm:text-base leading-relaxed">
              {t('luckyNew.objText', 'माँ बड़ी माता के भव्य मंदिर निर्माण हेतु जनसहयोग को प्रोत्साहित करना तथा प्रत्येक भक्त को सेवा, समर्पण एवं सहभागिता का अवसर प्रदान करना।')}
            </p>
          </div>

          <div className="bg-white border-2 border-stone-100 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-amber-300 transition-all">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 text-lg sm:text-xl mb-4 sm:mb-6">🙏</div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#8B3A2B] font-aparajita mb-3 sm:mb-4 tracking-wide">{t('luckyNew.joinTitle', 'भक्त कैसे जुड़ सकते हैं?')}</h3>
            <p className="text-stone-600 font-medium text-sm sm:text-base leading-relaxed">
              {t('luckyNew.joinText', '₹500 के महादान कूपन द्वारा योजना में सहभागी बनें।')}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          7. HOW TO GET COUPON
      ========================================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-rozha text-[#8B3A2B] font-bold">
            {t('luckyNew.getCouponTitle', 'कूपन कैसे प्राप्त करें?')}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-[2px] bg-amber-400"></span>
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="w-12 h-[2px] bg-amber-400"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border-[3px] border-amber-100 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all relative">
            <div className="absolute -top-4 sm:-top-5 left-6 sm:left-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              {t('luckyNew.onlineMethod', 'ऑनलाइन')}
            </div>
            <ul className="space-y-4 mt-6 sm:mt-8">
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-600 text-sm sm:text-base">1</span>
                {t('luckyNew.onlineStep1', 'जानकारी भरें')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-600 text-sm sm:text-base">2</span>
                {t('luckyNew.onlineStep2', 'भुगतान करें')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-600 text-sm sm:text-base">3</span>
                {t('luckyNew.onlineStep3', 'डिजिटल कूपन प्राप्त करें')}
              </li>
            </ul>
          </div>

          <div className="bg-white border-[3px] border-stone-200 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all relative mt-4 sm:mt-0">
            <div className="absolute -top-4 sm:-top-5 left-6 sm:left-8 bg-stone-700 text-white font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md flex items-center gap-2 text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {t('luckyNew.offlineMethod', 'ऑफलाइन')}
            </div>
            <ul className="space-y-4 mt-6 sm:mt-8">
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></span>
                {t('luckyNew.offlineStep1', 'मंदिर परिसर')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></span>
                {t('luckyNew.offlineStep2', 'ट्रस्ट कार्यालय')}
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-stone-700 font-bold text-base sm:text-lg">
                <span className="w-2 h-2 rounded-full bg-stone-400 shrink-0"></span>
                {t('luckyNew.offlineStep3', 'अधिकृत सेवादार')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================
          8. CLOSING MESSAGE (New Section)
      ========================================= */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 mb-8">
        <div className="bg-white border-4 border-amber-500/20 p-8 sm:p-12 rounded-3xl text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400"></div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-rozha text-[#8B3A2B] mb-6 leading-tight drop-shadow-sm">
            {t('luckyNew.closingHeading', 'उपहार तो सिर्फ़ बहाना है, उद्देश्य आपको माँ के दर तक लाना है!')}
          </h3>
          
          <p className="text-lg sm:text-xl text-stone-600 font-medium mb-8 leading-relaxed">
            {t('luckyNew.closingSub', 'क्योंकि मंदिर केवल पत्थरों से नहीं बनते...')} <br/>
            <span className="font-bold text-orange-800">{t('luckyNew.closingSubBold', 'वो बनते हैं भक्तों की श्रद्धा, सेवा और समर्पण से।')}</span>
          </p>
          
          <div className="inline-block text-left bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <ul className="space-y-3 font-bold text-stone-700 text-sm sm:text-base">
              <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✔</span> {t('luckyNew.closingList1', 'माँ के चरणों में सेवा')}</li>
              <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✔</span> {t('luckyNew.closingList2', 'धार्मिक विरासत निर्माण')}</li>
              <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✔</span> {t('luckyNew.closingList3', 'आने वाली पीढ़ियों के लिए धरोहर')}</li>
              <li className="flex items-center gap-3"><span className="text-amber-500 text-xl">✔</span> {t('luckyNew.closingList4', 'पुण्य कार्य में सहभागिता')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================
          9. PAYMENT POPUP MODAL 
      ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
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
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-2xl sm:text-3xl shadow-inner border border-amber-200">
                🎫
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#8B3A2B] font-rozha mb-1 sm:mb-2">{t('luckyNew.modalTitle', 'रसीद विवरण भरें')}</h2>
              <p className="text-stone-500 text-xs sm:text-sm">{t('luckyNew.modalSubtitle', 'कूपन प्राप्त करने के लिए अपना विवरण दें।')}</p>
            </div>

            <form 
              className="space-y-4" 
              onSubmit={(e) => { 
                e.preventDefault(); 
                // Generate a random ID like BMT-A7F9-2026
                const uniqueId = `BMT-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${new Date().getFullYear()}`;
                
                // Navigate to receipt page and pass the data!
                navigate('/lucky-draw-receipt', { 
                  state: { ...formData, couponId: uniqueId, amount: 500, date: new Date().toLocaleDateString() } 
                });
              }}
            >
              
              <input type="text" placeholder={t('luckyNew.modalNamePlaceholder', 'पूरा नाम (Full Name)')} required 
                className="w-full p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base" 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              
              <input type="tel" placeholder={t('luckyNew.modalPhonePlaceholder', 'मोबाइल नंबर (Mobile No.)')} required 
                className="w-full p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base" 
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              
              <input type="email" placeholder={t('luckyNew.modalEmailPlaceholder', 'ईमेल आईडी (Email ID)')} required 
                className="w-full p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base" 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              
              <textarea placeholder={t('luckyNew.modalAddressPlaceholder', 'पूरा पता (Complete Address)')} required rows="2" 
                className="w-full p-3 sm:p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none font-medium text-stone-800 text-sm sm:text-base resize-none"
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
              
              <div className="flex items-center justify-between p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl mt-4">
                <span className="font-bold text-stone-700 text-sm sm:text-base">{t('luckyNew.modalAmountLabel', 'सहयोग राशि:')}</span>
                <span className="font-black text-xl sm:text-2xl text-orange-600">₹500</span>
              </div>

              <button type="submit" className="w-full py-3 sm:py-4 mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                {t('luckyNew.modalPayBtn', 'सुरक्षित भुगतान करें')}
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