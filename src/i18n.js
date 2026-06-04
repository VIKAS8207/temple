// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        timing: "Temple Timing",
        gallery: "Gallery",
        news: "News & Events",
        lucky: "Lucky Draw",
        contact: "Contact",
        login: "Login / Sign Up",
        donate: "Donate"
      },
      hero: {
        templeName: "Shri Badimatha Temple",
        slogan1: "Sarva Mangala Mangalye",
        slogan2: "Shive Sarvartha Sadhike |",
        slogan3: "Sharanye Tryambake Gauri",
        slogan4: "Narayani Namostute ||",
        description: "Join us in our daily aartis, seek divine blessings, and participate in personalized temple sevas.",
        poojaSeva: "Pooja Seva"
      },
      action: {
        btn1: "Get Online Coupon",
        btn2: "Temple Construction",
        btn3: "Donate Online",
        btn4: "Book Seva"
      },
      stats: {
        stat1Num: "3L+",
        stat1Text: "Food Packets Distributed",
        stat2Num: "₹500",
        stat2Text: "Coupons Start From",
        stat3Title: "Tuesday",
        stat3Text: "Special Bhandara",
        stat4Num: "4",
        stat4Text: "Daily Aartis"
      },
      timing: {
        title: "Temple Timings",
        darshanTitle: "Darshan Timings",
        morning: "Morning : 5:00 AM – 12:30 PM",
        evening: "Evening : 4:00 PM – 10:00 PM",
        aartiTitle: "Aarti Timings",
        aarti1: "Mangal Aarti",
        aarti2: "Madhyahn Aarti",
        aarti3: "Sandhya Aarti",
        aarti4: "Shayan Aarti"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        timing: "दर्शन का समय",
        gallery: "गैलरी",
        news: "समाचार और घटनाएँ",
        lucky: "लकी ड्रॉ",
        contact: "संपर्क करें",
        login: "लॉगिन / साइन अप",
        donate: "दान करें"
      },
      hero: {
        templeName: "श्री बड़ीमाता मंदिर",
        slogan1: "सर्वमङ्गलमाङ्गल्ये",
        slogan2: "शिवे सर्वार्थसाधिके ।",
        slogan3: "शरण्ये त्र्यम्बके गौरि",
        slogan4: "नारायणि नमोऽस्तु ते ॥",
        description: "हमारी दैनिक आरती में सम्मिलित हों, ईश्वरीय आशीर्वाद प्राप्त करें, और मंदिर की विशेष सेवाओं में हिस्सा लें।",
        poojaSeva: "पूजा सेवा"
      },
      action: {
        btn1: "ऑनलाइन कूपन प्राप्त करें",
        btn2: "मंदिर निर्माण सहयोग",
        btn3: "ऑनलाइन दान करें",
        btn4: "सेवा बुक करें"
      },
      stats: {
        stat1Num: "3L+",
        stat1Text: "भोजन पैकेट वितरित",
        stat2Num: "₹500",
        stat2Text: "से कूपन प्रारंभ",
        stat3Title: "मंगलवार",
        stat3Text: "विशेष भंडारा",
        stat4Num: "4",
        stat4Text: "दैनिक आरती"
      },
      timing: {
        title: "मंदिर समय",
        darshanTitle: "दर्शन समय",
        morning: "प्रातः : 5:00 AM – 12:30 PM",
        evening: "सायं : 4:00 PM – 10:00 PM",
        aartiTitle: "आरती समय",
        aarti1: "मंगल आरती",
        aarti2: "मध्याह्न आरती",
        aarti3: "संध्या आरती",
        aarti4: "शयन आरती"
      }
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "hi", // Default language (Hindi)
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;