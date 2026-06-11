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
        donate: "Donate",
        contact: "Contact",
        seva: "Seva",
        register: "Registration number"                    
      },
      hero: {
        templeName: "Shri Badi matha Temple",
        slogan1: "Sarva Mangala Mangalye",
        slogan2: "Shive Sarvartha Sadhike |",
        slogan3: "Sharanye Tryambake Gauri",
        slogan4: "Narayani Namostute ||",
        description: "Join us in our daily aartis, seek divine blessings, and participate in personalized temple sevas.",
        poojaSeva: "Pooja Seva",
        templeTrust: "Nagar Shakti Peeth"
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
      },
      about: {
        pageTitle: "Our History & Heritage",
        heading: "The Divine Origin of Badimatha",
        desc1: "Established over centuries ago, the Shri Badimatha Temple stands as a beacon of spiritual strength and peace. The temple was born from the pure devotion of our ancestors, who witnessed the divine presence of Goddess Adi Shakti in this very soil.",
        desc2: "Today, it serves thousands of devotees daily, providing not just a place for worship, but a sanctuary for the soul, a center for community service, and a preserver of ancient Vedic traditions.",
        quote: "Where devotion is pure, the divine presence is eternal."
      },
      gallery: {
        pageTitle: "Divine Gallery",
        subtitle: "Glimpses of Faith & Devotion",
        img1: "Maha Aarti Mahotsav",
        card1Title: "Sacred Collections",
        card1Sub: "Explore Heritage",
        card2Title: "Moments of Peace",
        card2Desc: "Experience the architectural beauty and spiritual tranquility of the temple grounds.",
        heritage: "Heritage Art",
        heritageDesc: "Every corner of Badimatha Temple is adorned with traditional craftsmanship, preserving the glorious spiritual art of our ancestors for generations to come."
      },
      news: {
        pageTitle: "News & Events",
        upcomingTitle: "Upcoming Events",
        latestNewsTitle: "Latest News",
        event1Title: "Navratri Mahotsav Starts",
        event1Desc: "Join us for 9 days of continuous devotion, special aarti, and traditional garba.",
        event2Title: "Deepotsav Celebration",
        event2Desc: "Experience the temple illuminated by thousands of diyas. Special pooja at 7 PM.",
        readMore: "Read More",
        readFullStory: "Read Full Story",
        tagCommunity: "Community",
        tagTemple: "Temple Update",
        news1Title: "Food Distribution Drive Reaches 3 Lakh Milestone",
        news1Desc: "With the blessings of Mata and the generous support of our devotees, our daily Bhandara has successfully served over 3 Lakh meals to those in need.",
        news2Title: "New Temple Pavilion Construction Nears Completion",
        news2Desc: "The new sitting area for devotees waiting for Darshan is in its final stages. It features traditional carvings and modern cooling systems."
      },
      contact: {
        pageTitle: "Contact Us",
        subtitle: "We are here to assist you",
        infoTitle: "Temple Information",
        addressTitle: "Temple Address",
        address: "Shri Badimatha Temple Complex, Main Temple Road, Chhattisgarh, India",
        phoneTitle: "Contact Numbers",
        emailTitle: "Email Address",
        formTitle: "Send us a Message",
        name: "Full Name",
        phoneForm: "Phone Number",
        subject: "Subject",
        subjectPlaceholder: "How can we help you?",
        message: "Your Message",
        messagePlaceholder: "Write your inquiry or message here...",
        submit: "Send Message"
      },
      luckyNew: {
        mainHeading: "Lucky Devotee Reward Scheme",
        subtitle: "Support the temple's development and get a chance to win spectacular gifts.",
        bookBtn: "Book Coupon",
        ticketTag: "Contribution Receipt",
        ticketDesc: "The reconstruction of the temple is possible only with your support.",
        ticketPriceLabel: "Contribution Amount",
        prizePlot: "Plot",
        prizeGold: "Gold",
        prizeBike: "Bike",
        prizeCar: "Car",
        prizeFridge: "Fridge",
        prizeTV: "TV",
        prizePhone: "Smartphone"
      },
      founders: {
        title: "Our Visionaries",
        subtitle: "The guiding lights and founding pillars who established the divine foundation of Shri Badimatha Temple.",
        f1Name: "Shri Rajendra Sharma",
        f1Role: "Chief Founder",
        f1Desc: "Devoted his life to establishing the temple and spreading the message of peace and community service.",
        f2Name: "Smt. Kamala Devi",
        f2Role: "Chairperson",
        f2Desc: "A beacon of compassion, leading the temple's daily Annadaan (food distribution) and charity initiatives.",
        f3Name: "Shri Vikram Singh",
        f3Role: "Head Trustee",
        f3Desc: "Oversees the architectural preservation and spiritual administration of the temple trust."
      },
      carousel: {
        slide1Title: "Divine Maha Aarti",
        slide1Sub: "Experience the spiritual bliss of the evening sandhya aarti.",
        slide2Title: "Navratri Mahotsav",
        slide2Sub: "Join us in the grand nine-day celebration of Goddess Adi Shakti.",
        slide3Title: "Daily Annadaan Seva",
        slide3Sub: "Serving humanity through our continuous food distribution drives."
      },
      winners: {
        title: "Lucky Draw Winners",
        subtitle: "Check the results to see if your ticket was selected by Maa's grace!",
        searchPlaceholder: "Search coupon number...",
        prevWinnersBtn: "View Previous Winners",
        currentWinnersBtn: "Back to Current Winners",
        colRank: "Prize",
        colTicket: "Ticket No.",
        colName: "Winner Name",
        colLocation: "Location",
        noResults: "No matching ticket found. Please check your coupon number.",
        couponBannerTitle: "Participate in the Lucky Draw",
        couponBannerDesc: "Get your coupon today! Support the temple's development and stand a chance to win spectacular prizes.",
        couponPriceLabel: "Coupon Amount",
        couponBuyBtn: "Buy Coupon Now"
      },
      donate: {
        // Merged Form Translations
        formTitle: "Donation & Seva Offering",
        name: "Full Name",
        phone: "Mobile Number",
        anonymous: "Donate Anonymously",
        selectSeva: "Select Seva Type",
        specify: "Please specify the seva",
        amount: "Amount (₹)",
        payNow: "Pay Now",
        
        // Merged Category Translations
        pageTitle: "Daily & Special Sevas",
        subtitle: "Become a partner in the divine sevas of Maa Badi Mata",
        genericDesc: "Contribute to this holy seva and receive the divine blessings of Mata Rani.",
        bookBtn: "Book Seva",
        others: "Others",
        
        // Parent Categories
        catDainik: "Daily Seva",
        catTuesdaySpecial: "Tuesday Special Sevas",
        catTuesdayBhandara: "Tuesday Bhandara Seva",
        catKalash: "Kalash Sthapana",
        catAbhishek: "Abhishek Pujan",
        catJaap: "Jaap Seva",
        catArchan: "Archan Seva",
        catVastra: "Vastra Seva",
        catShringar: "Shringar Seva",
        catNavratri: "Navratri Festival",
        catGau: "Gau-Seva (Cow Care)",

        // Daily Sub-Sevas
        subDainik1: "Akhand Deep Seva",
        subDainik2: "Pushpa Seva (Flowers)",
        subDainik3: "Bhog Seva (Offerings)",
        subDainik4: "Aarti Seva",
        subDainik5: "Vastra Seva (Clothing)",
        subDainik6: "Daily Shringar Seva",
        subDainik7: "Annadaan Seva (Food Donation)",
        subDainik8: "Special Sankalp Puja",

        // Tuesday Special Sub-Sevas
        subTueSp1: "Tuesday Special Abhishek",
        subTueSp2: "Mangal Paath",
        subTueSp3: "Special Tuesday Aarti",
        subTueSp4: "Prasad Seva",
        subTueSp5: "Sankalp Puja",

        // Tuesday Bhandara Sub-Sevas
        subTueBh1: "Full Bhandara Sponsorship",
        subTueBh2: "Partial Bhandara Sponsorship",
        subTueBh3: "Prasad Distribution",
        subTueBh4: "Annadaan (Grain Donation)",

        // Kalash & Abhishek Sub-Sevas
        subKalash1: "Sacred Kalash Sthapana",
        subAbhishek1: "Maha Abhishek Pujan",

        // Jaap Sub-Sevas
        subJaap1: "Durga Saptashati Paath",
        subJaap2: "Navchandi Paath",
        subJaap3: "Special Jaap & Chanting",

        // Archan Sub-Sevas
        subArchan1: "Pushpa Archan",
        subArchan2: "Kumkum Archan",
        subArchan3: "Fruit Offering",
        subArchan4: "Sindoor Archan",
        subArchan5: "Dry Fruits Offering",

        // Vastra & Shringar Sub-Sevas
        subVastra1: "Divine Dress Offering",
        subShringar1: "Maha Shringar Shobha",

        // Navratri Festival Sub-Sevas
        subNavratri1: "Akhand Jyoti Puja",
        subNavratri2: "Navratri Durga Saptashati",
        subNavratri3: "Kanya Pujan Seva",
        subNavratri4: "Navratri Maha Abhishek",
        subNavratri5: "Navratri Special Shringar",
        subNavratri6: "Navratri Annadaan Mahotsav",
        subNavratri7: "Navratri Kalash Sthapana",

        // Gau-Seva Sub-Sevas
        subGau1: "Green Fodder (Chara) Seva",
        subGau2: "Gau Bhojan (Cow Meals)",
        subGau3: "Medical Assistance Supply",
        subGau4: "Gau Shala Shelter Support"
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
        lucky: "भाग्यशाली भक्त उपहार योजना",
        donate: "दान करें",
        contact: "संपर्क करें",
        seva: "सेवा",
        register: "पंजीयन क्रमांक" 
      },
      hero: {
        templeName: "श्री बड़ी माता मंदिर",
        slogan1: "सर्वमङ्गलमाङ्गल्ये",
        slogan2: "शिवे सर्वार्थसाधिके ।",
        slogan3: "शरण्ये त्र्यम्बके गौरि",
        slogan4: "नारायणि नमोऽस्तु ते ॥",
        description: "हमारी दैनिक आरती में सम्मिलित हों, ईश्वरीय आशीर्वाद प्राप्त करें, और मंदिर की विशेष सेवाओं में हिस्सा लें।",
        poojaSeva: "पूजा सेवा",
        templeTrust: "नगर शक्ति पीठ"
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
      },
      about: {
        pageTitle: "हमारा इतिहास और विरासत",
        heading: "बड़ीमाता का दिव्य उद्गम",
        desc1: "सदियों पहले स्थापित, श्री बड़ीमाता मंदिर आध्यात्मिक शक्ति और शांति के प्रतीक के रूप में खड़ा है। इस मंदिर का निर्माण हमारे पूर्वजों की सच्ची भक्ति से हुआ था, जिन्होंने इसी पवित्र भूमि पर देवी आदि शक्ति की दिव्य उपस्थिति का अनुभव किया था।",
        desc2: "आज, यह प्रतिदिन हजारों भक्तों की सेवा करता है, जो न केवल पूजा का स्थान है, बल्कि आत्मा के लिए एक आश्रय, सामुदायिक सेवा का केंद्र और प्राचीन वैदिक परंपराओं का रक्षक है।",
        quote: "जहाँ भक्ति सच्ची होती है, वहाँ परमात्मा का वास शाश्वत होता है।"
      },
      gallery: {
        pageTitle: "दिव्य गैलरी",
        subtitle: "आस्था और भक्ति की झलकियाँ",
        img1: "महा आरती महोत्सव",
        card1Title: "पवित्र संग्रह",
        card1Sub: "विरासत का अन्वेषण करें",
        card2Title: "शांति के क्षण",
        card2Desc: "मंदिर परिसर की स्थापत्य सुंदरता और आध्यात्मिक शांति का अनुभव करें।",
        heritage: "विरासत कला",
        heritageDesc: "बड़ीमाता मंदिर का हर कोना पारंपरिक शिल्प कौशल से सजा हुआ है, जो आने वाली पीढ़ियों के लिए हमारे पूर्वजों की शानदार आध्यात्मिक कला को संरक्षित करता है।"
      },
      news: {
        pageTitle: "समाचार और घटनाएँ",
        upcomingTitle: "आगामी कार्यक्रम",
        latestNewsTitle: "नवीनतम समाचार",
        event1Title: "नवरात्रि महोत्सव प्रारंभ",
        event1Desc: "9 दिनों की निरंतर भक्ति, विशेष आरती और पारंपरिक गरबा के लिए हमारे साथ जुड़ें।",
        event2Title: "दीपोत्सव समारोह",
        event2Desc: "हजारों दीयों से जगमगाते मंदिर का अनुभव करें। शाम 7 बजे विशेष पूजा।",
        readMore: "और पढ़ें",
        readFullStory: "पूरी खबर पढ़ें",
        tagCommunity: "समुदाय",
        tagTemple: "मंदिर अपडेट",
        news1Title: "अन्नदान अभियान 3 लाख के मील के पत्थर तक पहुँचा",
        news1Desc: "माता के आशीर्वाद और भक्तों के उदार समर्थन से, हमारे दैनिक भंडारे ने जरूरतमंदों को 3 लाख से अधिक भोजन सफलतापूर्वक परोसा है।",
        news2Title: "नए मंदिर मंडप का निर्माण पूरा होने के करीब",
        news2Desc: "दर्शन की प्रतीक्षा कर रहे भक्तों के लिए नया बैठने का क्षेत्र अंतिम चरण में है। इसमें पारंपरिक नक्काशी और आधुनिक शीतलन प्रणाली है।"
      },
      contact: {
        pageTitle: "संपर्क करें",
        subtitle: "हम आपकी सहायता के लिए यहाँ हैं",
        infoTitle: "मंदिर की जानकारी",
        addressTitle: "मंदिर का पता",
        address: "श्री बड़ीमाता मंदिर परिसर, मुख्य मंदिर रोड, छत्तीसगढ़, भारत",
        phoneTitle: "संपर्क सूत्र",
        emailTitle: "ईमेल पता",
        formTitle: "हमें संदेश भेजें",
        name: "पूरा नाम",
        phoneForm: "फोन नंबर",
        subject: "विषय",
        subjectPlaceholder: "हम आपकी कैसे मदद कर सकते हैं?",
        message: "आपका संदेश",
        messagePlaceholder: "अपनी पूछताछ या संदेश यहाँ लिखें...",
        submit: "संदेश भेजें"
      },
      luckyNew: {
        mainHeading: "भाग्यशाली भक्त उपहार योजना",
        subtitle: "मंदिर के विकास में सहयोग करें और शानदार उपहार जीतने का अवसर पाएं।",
        bookBtn: "कूपन बुक करें",
        ticketTag: "सहयोग रसीद",
        ticketDesc: "आपके सहयोग से ही मंदिर का नवनिर्माण संभव है।",
        ticketPriceLabel: "सहयोग राशि",
        prizePlot: "प्लॉट",
        prizeGold: "सोना",
        prizeBike: "बाइक",
        prizeCar: "कार",
        prizeFridge: "फ्रिज",
        prizeTV: "टीवी",
        prizePhone: "स्मार्टफोन"
      },
      founders: {
        title: "हमारे संस्थापक",
        subtitle: "वे मार्गदर्शक और संस्थापक स्तंभ जिन्होंने श्री बड़ीमाता मंदिर की दिव्य नींव स्थापित की।",
        f1Name: "श्री राजेंद्र शर्मा",
        f1Role: "मुख्य संस्थापक",
        f1Desc: "उन्होंने मंदिर की स्थापना और शांति और सामुदायिक सेवा का संदेश फैलाने के लिए अपना जीवन समर्पित कर दिया।",
        f2Name: "श्रीमती कमला देवी",
        f2Role: "अध्यक्षा",
        f2Desc: "करुणा की प्रतिमूर्ति, जो मंदिर के दैनिक अन्नदान और दान पहलों का नेतृत्व करती हैं।",
        f3Name: "श्री विक्रम सिंह",
        f3Role: "मुख्य ट्रस्टी",
        f3Desc: "मंदिर ट्रस्ट के स्थापत्य संरक्षण और आध्यात्मिक प्रशासन की देखरेख करते हैं।"
      },
      carousel: {
        slide1Title: "दिव्य महा आरती",
        slide1Sub: "शाम की संध्या आरती के आध्यात्मिक आनंद का अनुभव करें।",
        slide2Title: "नवरात्रि महोत्सव",
        slide2Sub: "देवी आदि शक्ति के भव्य नौ-दिवसीय उत्सव में हमारे साथ शामिल हों।",
        slide3Title: "दैनिक अन्नदान सेवा",
        slide3Sub: "हमारे निरंतर भोजन वितरण अभियानों के माध्यम से मानवता की सेवा।"
      },
      winners: {
        title: "भाग्यशाली भक्त उपहार योजना",
        subtitle: "परिणाम जांचें और देखें कि क्या आपका टिकट माँ की कृपा से चुना गया है!",
        searchPlaceholder: "कूपन नंबर खोजें...",
        prevWinnersBtn: "पिछले विजेता देखें",
        currentWinnersBtn: "वर्तमान विजेताओं पर वापस जाएं",
        colRank: "पुरस्कार",
        colTicket: "टिकट नं.",
        colName: "विजेता का नाम",
        colLocation: "स्थान",
        noResults: "कोई मेल खाता हुआ टिकट नहीं मिला। कृपया अपना कूपन नंबर जांचें।",
        couponBannerTitle: "लकी ड्रॉ में भाग लें",
        couponBannerDesc: "आज ही अपना कूपन प्राप्त करें! मंदिर नवनिर्माण में सहयोग करें और शानदार पुरस्कार जीतने का अवसर पाएं।",
        couponPriceLabel: "कूपन राशि",
        couponBuyBtn: "अभी कूपन खरीदें"
      },
      donate: {
        // Merged Form Translations
        formTitle: "दान एवं सेवा अर्पण",
        name: "पूरा नाम",
        phone: "मोबाइल नंबर",
        anonymous: "गुमनाम दान (Anonymous Donation)",
        selectSeva: "सेवा का प्रकार चुनें",
        specify: "कृपया सेवा बताएं",
        amount: "राशि (₹)",
        payNow: "भुगतान करें (Pay Now)",
        
        // Merged Category Translations
        pageTitle: "दैनिक एवं विशेष सेवाएँ",
        subtitle: "माँ बड़ी माता की सेवाओं में सहभागी बनें",
        genericDesc: "इस पवित्र सेवा में अपना योगदान दें और माता का आशीर्वाद प्राप्त करें।",
        bookBtn: "बुक करें",
        others: "अन्य (Others)",
        
        // Parent Categories
        catDainik: "दैनिक सेवा",
        catTuesdaySpecial: "मंगलवार विशेष सेवाएँ",
        catTuesdayBhandara: "मंगलवार भंडारा सेवा",
        catKalash: "कलश स्थापना",
        catAbhishek: "अभिषेक पूजन",
        catJaap: "जाप सेवा",
        catArchan: "अर्चन सेवा",
        catVastra: "वस्त्र सेवा",
        catShringar: "श्रृंगार सेवा",
        catNavratri: "नवरात्रि महोत्सव",
        catGau: "गौ-सेवा",

        // Daily Sub-Sevas
        subDainik1: "अखंड दीप सेवा",
        subDainik2: "पुष्प सेवा",
        subDainik3: "भोग सेवा",
        subDainik4: "आरती सेवा",
        subDainik5: "वस्त्र सेवा",
        subDainik6: "दैनिक श्रृंगार सेवा",
        subDainik7: "अन्नदान सेवा",
        subDainik8: "विशेष संकल्प सेवा",

        // Tuesday Special Sub-Sevas
        subTueSp1: "मंगलवार विशेष अभिषेक",
        subTueSp2: "मंगल पाठ",
        subTueSp3: "विशेष आरती",
        subTueSp4: "प्रसाद सेवा",
        subTueSp5: "संकल्प पूजा",

        // Tuesday Bhandara Sub-Sevas
        subTueBh1: "संपूर्ण भंडारा",
        subTueBh2: "आंशिक भंडारा",
        subTueBh3: "प्रसाद वितरण",
        subTueBh4: "अन्नदान",

        // Kalash & Abhishek Sub-Sevas
        subKalash1: "कलश स्थापना",
        subAbhishek1: "अभिषेक पूजन",

        // Jaap Sub-Sevas
        subJaap1: "दुर्गा सप्तशती पाठ",
        subJaap2: "नवचंडी पाठ",
        subJaap3: "विशेष जाप",

        // Archan Sub-Sevas
        subArchan1: "पुष्प अर्चन",
        subArchan2: "कुमकुम अर्चन",
        subArchan3: "फल अर्पण",
        subArchan4: "सिंदूर अर्पण",
        subArchan5: "सूखे मेवे अर्पण",

        // Vastra & Shringar Sub-Sevas
        subVastra1: "वस्त्र सेवा",
        subShringar1: "श्रृंगार सेवा",

        // Navratri Festival Sub-Sevas
        subNavratri1: "अखंड ज्योति",
        subNavratri2: "दुर्गा सप्तशती पाठ",
        subNavratri3: "कन्या पूजन",
        subNavratri4: "विशेष अभिषेक",
        subNavratri5: "श्रृंगार सेवा",
        subNavratri6: "अन्नदान",
        subNavratri7: "कलश स्थापना",

        // Gau-Seva Sub-Sevas
        subGau1: "चारा सेवा",
        subGau2: "गौ भोजन",
        subGau3: "चिकित्सा सहायता",
        subGau4: "गौ आश्रय सहयोग"
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