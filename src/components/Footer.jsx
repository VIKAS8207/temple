// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative bg-red-950 text-amber-50/80 border-t-4 border-amber-500 overflow-hidden mt-auto">
      
      {/* Subtle Mandala Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20zM0 20c0 11.046 8.954 20 20 20V0C8.954 0 0 8.954 0 20z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Temple Info & Logo */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 text-red-950 rounded-full flex items-center justify-center font-bold text-3xl shadow-[0_0_15px_rgba(251,191,36,0.3)] border-2 border-amber-200 shrink-0">
                ॐ
              </div>
              <div className="flex flex-col">
                <span className="font-rozha text-2xl text-amber-400 tracking-wide leading-none mt-1">
                  बड़ीमाता मंदिर
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-200/80">
                  Badimatha Temple
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A divine sanctuary of peace and spirituality. Join us to experience the eternal grace of Goddess Adi Shakti and find harmony in your soul.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all duration-300"
                aria-label="X (formerly Twitter)"
              >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center hover:bg-amber-500 hover:text-red-950 transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-amber-400 font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-400 transition-colors inline-block transform hover:translate-x-1 duration-200">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors inline-block transform hover:translate-x-1 duration-200">About the Temple</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors inline-block transform hover:translate-x-1 duration-200">Pooja & Sevas</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors inline-block transform hover:translate-x-1 duration-200">Upcoming Festivals</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors inline-block transform hover:translate-x-1 duration-200">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors text-yellow-300 font-medium inline-block transform hover:translate-x-1 duration-200">Lucky Draw</a></li>
            </ul>
          </div>

          {/* Column 3: Temple Timings */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-amber-400 font-bold text-lg mb-6 uppercase tracking-wider">Temple Timings</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-amber-200 font-medium">Morning Darshan</span>
                <span>05:30 AM - 12:30 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="text-amber-200 font-medium">Evening Darshan</span>
                <span>04:00 PM - 09:00 PM</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-amber-200 font-medium">Maha Aarti</span>
                <span>07:00 AM & 07:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-amber-400 font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Spiritual Way, Heritage District,<br />City Name, State, 123456</span>
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@badimathatemple.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================
            Disclaimer / Note Section
        ========================================= */}
        <div className="mt-16 pt-8 border-t border-red-900/50 text-center">
          <p className="text-xs sm:text-sm text-amber-100/60 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-amber-500/80">नोट: </span>
            भाग्यशाली भक्त उपहार योजना श्री बड़ी माता मंदिर ट्रस्ट द्वारा संचालित योजना है। योजना के सभी नियम एवं शर्तें लागू हैं। चयन प्रक्रिया एवं योजना से जुड़े सभी अंतिम निर्णय मंदिर ट्रस्ट द्वारा मान्य होंगे।
          </p>
        </div>

      </div>

      {/* Bottom Bar: Copyright */}
      <div className="relative z-10 bg-red-900 border-t border-red-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-red-200">
          <p>&copy; {new Date().getFullYear()} Shri Badimatha Temple. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span className="text-red-700">|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}