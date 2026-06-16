// src/pages/Founders.jsx
import { useTranslation } from 'react-i18next';

export default function Founders() {
  const { t } = useTranslation();

  // Top 3 Main Leaders
  const topLeaders = [
    {
      id: 1,
      name: t('founders.f1Name', 'Name Here'),
      role: t('founders.roleAdhyaks', 'Adhyaks'),
      desc: t('founders.f1Desc', 'Guiding the temple trust with vision and dedication.'),
      img: "https://images.unsplash.com/photo-1544168190-79c15427015f?q=80&w=500&auto=format&fit=crop" 
    },
    {
      id: 2,
      name: t('founders.f2Name', 'Name Here'),
      role: t('founders.roleSachiv', 'Sachiv'),
      desc: t('founders.f2Desc', 'Managing the operational excellence and daily activities.'),
      img: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: t('founders.f3Name', 'Name Here'),
      role: t('founders.roleKoshadhyksh', 'Koshadhyksh'),
      desc: t('founders.f3Desc', 'Ensuring absolute transparency in all financial matters.'),
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    }
  ];

  // 8 Committee Members
  const committeeMembers = [
    { id: 4, name: t('founders.m1Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" },
    { id: 5, name: t('founders.m2Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
    { id: 6, name: t('founders.m3Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=300&auto=format&fit=crop" },
    { id: 7, name: t('founders.m4Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop" },
    { id: 8, name: t('founders.m5Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" },
    { id: 9, name: t('founders.m6Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" },
    { id: 10, name: t('founders.m7Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" },
    { id: 11, name: t('founders.m8Name', 'Member Name'), role: t('founders.memberRole', 'Member'), img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop" }
  ];

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 bg-stone-50 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-3xl pointer-events-none z-0"></div>

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
            {t('founders.title', 'ट्रस्ट मंडल')}
          </h2>
          <p className="text-stone-600 font-serif max-w-2xl mx-auto text-lg">
            {t('founders.subtitle', 'Our dedicated members working towards the divine vision.')}
          </p>
        </div>

        {/* Top 3 Leaders Grid (Arched Frames) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-24">
          {topLeaders.map((founder) => (
            <div key={founder.id} className="flex flex-col items-center group">
              
              {/* Arched Portrait Frame */}
              <div className="relative w-64 h-80 mb-6 p-2 bg-white rounded-t-[10rem] rounded-b-2xl shadow-xl border border-stone-200 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full overflow-hidden rounded-t-[9.5rem] rounded-b-xl border-4 border-amber-500/20 relative">
                  <img 
                    src={founder.img} 
                    alt={founder.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
                <p className="inline-block bg-amber-100 text-amber-700 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-3 shadow-sm border border-amber-200/50">
                  {founder.role}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed px-4">
                  {founder.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Divider line before committee */}
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center gap-4 mb-16 opacity-60">
          <span className="h-px bg-stone-300 flex-grow"></span>
          <span className="text-stone-400 font-rozha text-xl">❖</span>
          <span className="h-px bg-stone-300 flex-grow"></span>
        </div>

        {/* 8 Committee Members Grid (Circular Frames in Line of 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {committeeMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              
              {/* Circular Portrait Frame */}
              <div className="relative w-40 h-40 mb-5 p-1.5 bg-white rounded-full shadow-lg border border-stone-200 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-full h-full overflow-hidden rounded-full border-[3px] border-amber-400/30 relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-950 font-rozha mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold uppercase tracking-wider text-xs">
                  {member.role}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}