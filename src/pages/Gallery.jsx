// src/pages/Gallery.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();

  // Data for Photos (Uniform shape now)
  const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1601004838634-92d0cd650f9f?q=80&w=800&auto=format&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1598974533038-f1c5c00e663a?q=80&w=800&auto=format&fit=crop" },
    { id: 4, src: "https://images.unsplash.com/photo-1604168612704-dfb1200fc0eb?q=80&w=800&auto=format&fit=crop" },
    { id: 5, src: "#" },
    { id: 6, src: "https://images.unsplash.com/photo-1609185121303-34e8156fb156?q=80&w=800&auto=format&fit=crop" },
  ];

  // Data for Videos
  const videos = [
    { id: 1, title: t('gallery.vid1Title'), thumbnail: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: t('gallery.vid2Title'), thumbnail: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: t('gallery.vid3Title'), thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f5] pb-24 relative overflow-hidden">
      
      {/* Background Mandala overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z' fill='%238B3A2B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#3e1a16] via-[#2a110e] to-[#3e1a16] text-[#eedcbf] py-16 px-4 border-b-8 border-amber-600/60 overflow-hidden flex flex-col items-center text-center shadow-2xl">
        <div className="absolute inset-0 mix-blend-overlay"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-7xl font-rozha mb-4 tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-[#eedcbf]">
          {t('gallery.pageTitle')}
        </h1>
        <div className="relative z-10 flex items-center justify-center gap-4 mt-2">
          <span className="w-12 sm:w-20 h-[2px] bg-amber-500/60"></span>
          <span className="font-serif tracking-[0.2em] uppercase text-xs sm:text-sm text-amber-200/90 font-bold">
            {t('gallery.subtitle')}
          </span>
          <span className="w-12 sm:w-20 h-[2px] bg-amber-500/60"></span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================
            2. PHOTO GALLERY SECTION (Uniform Grid)
        ========================================= */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
              {t('gallery.photoSub')}
            </span>
            <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] drop-shadow-sm flex justify-center items-center gap-3">
              <span className="text-2xl text-amber-500 opacity-60">❖</span>
              {t('gallery.photoHeading')}
              <span className="text-2xl text-amber-500 opacity-60">❖</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="relative group overflow-hidden bg-white p-2 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200 cursor-pointer rounded-xl"
              >
                {/* Traditional Inner Frame */}
                <div className="w-full h-[300px] sm:h-[350px] relative overflow-hidden border-2 border-amber-500/30 rounded-lg">
                  <img 
                    src={photo.src} 
                    alt={`Darshan ${photo.id}`} 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* Subtle golden overlay on hover */}
                  <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                
                {/* Decorative Corners for ALL photos */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#8B3A2B]/60 pointer-events-none z-10"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#8B3A2B]/60 pointer-events-none z-10"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider line between Photos and Videos */}
        <div className="w-full flex items-center justify-center gap-4 my-24 opacity-50">
          <span className="h-px bg-stone-400 flex-grow max-w-[200px]"></span>
          <div className="w-10 h-10 bg-[#8B3A2B] rounded-full flex items-center justify-center text-amber-300 shadow-md">ॐ</div>
          <span className="h-px bg-stone-400 flex-grow max-w-[200px]"></span>
        </div>

        {/* =========================================
            3. VIDEO GALLERY SECTION
        ========================================= */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs sm:text-sm block mb-2">
              {t('gallery.videoSub')}
            </span>
            <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] drop-shadow-sm flex justify-center items-center gap-3">
              <span className="text-2xl text-amber-500 opacity-60">❖</span>
              {t('gallery.videoHeading')}
              <span className="text-2xl text-amber-500 opacity-60">❖</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="relative group bg-[#3e1a16] rounded-2xl shadow-xl overflow-hidden border-[3px] border-amber-900/40 hover:border-amber-500 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Video Thumbnail Area */}
                <div className="w-full h-56 relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark overlay to make it look like a video player */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {/* Professional Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-[#8B3A2B]/90 backdrop-blur-md border-[3px] border-amber-400 flex items-center justify-center group-hover:bg-amber-600 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Title */}
                <div className="p-5 text-center bg-gradient-to-b from-[#4a1c15] to-[#2a110e]">
                  <h3 className="text-[#eedcbf] font-rozha text-xl tracking-wide">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* =========================================
          4. BOTTOM HERITAGE STAMP SECTION
      ========================================= */}
      <section className="relative z-10 max-w-4xl mx-auto mt-10 mb-10 text-center px-4">
        <div className="flex items-center justify-center gap-6 mb-6">
          <hr className="flex-1 border-[#c2b29c]" />
          <h2 className="text-2xl sm:text-3xl font-rozha text-[#8b3a2b] uppercase tracking-widest">
            {t('gallery.heritage')}
          </h2>
          <hr className="flex-1 border-[#c2b29c]" />
        </div>
        <p className="font-serif text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {t('gallery.heritageDesc')}
        </p>
      </section>

    </div>
  );
}