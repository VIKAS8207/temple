// src/components/Founders.jsx
import { useTranslation } from 'react-i18next';

export default function Founders() {
  const { t } = useTranslation();

  const founders = [
    {
      id: 1,
      name: t('founders.f1Name'),
      role: t('founders.f1Role'),
      desc: t('founders.f1Desc'),
      // Unsplash placeholder - replace with actual founder images
      img: "https://images.unsplash.com/photo-1544168190-79c15427015f?q=80&w=500&auto=format&fit=crop" 
    },
    {
      id: 2,
      name: t('founders.f2Name'),
      role: t('founders.f2Role'),
      desc: t('founders.f2Desc'),
      img: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: t('founders.f3Name'),
      role: t('founders.f3Role'),
      desc: t('founders.f3Desc'),
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 bg-stone-50 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-amber-500/60"></span>
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" />
            </svg>
            <span className="w-12 h-[2px] bg-amber-500/60"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-rozha text-[#8B3A2B] drop-shadow-sm mb-4">
            {t('founders.title')}
          </h2>
          <p className="text-stone-600 font-serif max-w-2xl mx-auto text-lg">
            {t('founders.subtitle')}
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {founders.map((founder) => (
            <div key={founder.id} className="flex flex-col items-center group">
              
              {/* Arched Portrait Frame */}
              <div className="relative w-64 h-80 mb-6 p-2 bg-white rounded-t-[10rem] rounded-b-2xl shadow-xl border border-stone-200 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full overflow-hidden rounded-t-[9.5rem] rounded-b-xl border-4 border-amber-500/20 relative">
                  <img 
                    src={founder.img} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* Subtle golden gradient overlay at the bottom of the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Decorative Bottom Emblem */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#8B3A2B] rounded-full border-2 border-amber-100 flex items-center justify-center shadow-md">
                  <span className="text-amber-200 text-sm">ॐ</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-orange-950 font-rozha mb-1">
                  {founder.name}
                </h3>
                <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">
                  {founder.role}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed px-4">
                  {founder.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}