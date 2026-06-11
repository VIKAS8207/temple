// src/pages/Gallery.jsx
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f4ece1] pb-24">
      
      {/* 1. HERO SECTION (Deep Maroon Banner with Ornaments) */}
      <section className="relative w-full bg-[#3e1a16] text-[#eedcbf] py-20 px-4 border-b-8 border-amber-600/40 overflow-hidden flex flex-col items-center text-center">
        {/* Background Mandala overlay */}
        
        
        <h1 className="relative z-10 text-5xl md:text-7xl font-rozha mb-4 tracking-wide drop-shadow-lg">
          {t('gallery.pageTitle')}
        </h1>
        <div className="relative z-10 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-amber-500/60"></span>
          <span className="font-serif tracking-[0.2em] uppercase text-sm text-amber-200/80">
            {t('gallery.subtitle')}
          </span>
          <span className="w-12 h-[1px] bg-amber-500/60"></span>
        </div>
      </section>

      {/* 2. THE EDITORIAL GRID (Bento Box Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          
          {/* Block 1: Giant Feature Image (Spans 2 columns, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden border-4 border-[#8b3a2b]/20 bg-white p-2 shadow-xl">
            <div className="w-full h-full relative overflow-hidden border border-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop" 
                alt="Temple Festival" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0"></div>
              <h3 className="absolute bottom-6 left-6 text-white font-rozha text-3xl drop-shadow-md">
                {t('gallery.img1')}
              </h3>
            </div>
          </div>

          {/* Block 2: Dark Text Card */}
          <div className="md:col-span-1 md:row-span-1 bg-[#4a1c15] text-[#eedcbf] border-[3px] border-[#8b3a2b] flex flex-col justify-center items-center text-center p-6 shadow-lg relative overflow-hidden">
            <svg className="w-8 h-8 text-amber-500/50 mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c0 0-4-4.5-4-10.5 0-3.5 2-6.5 4-10.5 2 4 4 7 4 10.5 0 6-4 10.5-4 10.5z"/></svg>
            <h4 className="font-rozha text-2xl mb-2">{t('gallery.card1Title')}</h4>
            <p className="text-xs uppercase tracking-widest text-amber-500/80">
              {t('gallery.card1Sub')}
            </p>
          </div>

          {/* Block 3: Standard Square Image */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border-2 border-amber-900/30 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1601004838634-92d0cd650f9f?q=80&w=500&auto=format&fit=crop" 
              alt="Diyas" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Block 4: Tall Vertical Image (Spans 1 col, 2 rows) */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden border-[3px] border-white shadow-xl outline outline-1 outline-stone-300">
            <img 
              src="https://images.unsplash.com/photo-1598974533038-f1c5c00e663a?q=80&w=500&auto=format&fit=crop" 
              alt="Temple Architecture" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Block 5: Light Text Card (Spans 2 columns) */}
          <div className="md:col-span-2 md:row-span-1 bg-[#eedcbf] text-[#3e1a16] border border-[#c2b29c] flex flex-col justify-center items-center text-center p-8 shadow-md relative">
            <div className="absolute inset-2 border border-dashed border-[#8b3a2b]/40 pointer-events-none"></div>
            <h4 className="font-rozha text-3xl mb-3">{t('gallery.card2Title')}</h4>
            <p className="font-serif text-sm px-4 max-w-sm">
              {t('gallery.card2Desc')}
            </p>
          </div>

          {/* Block 6: Standard Square Image */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border-[6px] border-[#3e1a16] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1604168612704-dfb1200fc0eb?q=80&w=500&auto=format&fit=crop" 
              alt="Offerings" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 hover:opacity-100"
            />
          </div>

        </div>
      </section>

      {/* 3. BOTTOM HERITAGE STAMP SECTION */}
      <section className="max-w-4xl mx-auto mt-24 text-center px-4">
        <div className="flex items-center justify-center gap-6 mb-8">
          <hr className="flex-1 border-[#c2b29c]" />
          <h2 className="text-3xl font-rozha text-[#8b3a2b] uppercase tracking-widest">
            {t('gallery.heritage')}
          </h2>
          <hr className="flex-1 border-[#c2b29c]" />
        </div>
        <p className="font-serif text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
          {t('gallery.heritageDesc')}
        </p>
      </section>

    </div>
  );
}