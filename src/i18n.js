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
        news: "Events & Blog",
        lucky: "Lucky Draw",
        donate: "Donate",
        contact: "Contact",
        seva: "Seva",
        register: "Registration number",  
        
        aboutHistory: "Mandir History",
        aboutNirman: "Mandir Nirman Importance",
        aboutTrustees: "Trustees",
      },
      hero: {
        templeName: "Shri Badi matha Temple",
        slogan1: "Sarva Mangala Mangalye",
        slogan2: "Shive Sarvartha Sadhike |",
        slogan3: "Sharanye Tryambake Gauri",
        slogan4: "Narayani Namostute ||",
        description: "Join us in our daily aartis, seek divine blessings, and participate in personalized temple sevas.",
        poojaSeva: "Pooja Seva",
        templeTrust: "Nagar Shakti Peeth",

        slide1: "Laxmi Mata",
        slide2: "Saraswati Mata",
        slide3: "Durga Mata"
      },
      home: {
            donationSection: {
                badge: "Temple Construction Grand Campaign",
                heading: "“One Pillar – One Family”",
                description: "Temple construction is not just building a structure, but creating an immortal heritage of Sanatan culture for generations to come.",
                button: "Offer Your Devotion"
            }
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
        pageTitle: "Temple History & Legacy",
        subtitle: "The Divine Origin of Maa Badi Mata",
        genHeading: "Our Divine Heritage",
        genDesc1: "For centuries, the Badi Mata Temple has stood as a beacon of faith, hope, and spiritual awakening. It is a sacred sanctuary where millions of devotees come to seek the boundless blessings and maternal grace of the Divine Mother.",
        genDesc2: "The temple's glorious history is woven with modern miracles, deep devotion, and the unyielding faith of our ancestors who preserved this sacred space. Every corner of this temple resonates with cosmic energy and the silent prayers of true believers.",
        mathaHeading: "The Three Divine Forms",
        matha1Title: "Maa Badi Mata",
        matha1Desc: "The supreme form of the Mother Goddess, radiating immense power and ultimate protection. She is the presiding deity, showering her children with endless grace and effortlessly destroying all obstacles in their path.",
        matha2Title: "Maa Manjhli Mata",
        matha2Desc: "The beautiful embodiment of wealth, prosperity, and nurturing love. Devotees earnestly seek her blessings for a life filled with abundance, family harmony, and untroubled peace.",
        matha3Title: "Maa Chhoti Mata",
        matha3Desc: "The radiant symbol of wisdom, purity, and spiritual enlightenment. She gently guides her devotees from darkness to light, granting supreme knowledge and ultimate liberation.",
        slogan: "“Faith is not just believing that the Mother can, it is knowing that She will.”",
        ctaBtn: "Explore News & Events"
      },
      gallery: {
        pageTitle: "Divine Gallery",
        subtitle: "Glimpses of Grace and Devotion",
        photoHeading: "Sacred Darshan",
        photoSub: "Captured Moments of Divinity",
        videoHeading: "Aarti & Utsav",
        videoSub: "Experience the Divine Energy",
        vid1Title: "Grand Evening Aarti",
        vid2Title: "Navratri Mahotsav Highlights",
        vid3Title: "Temple Foundation Day",
        heritage: "Eternal Heritage",
        heritageDesc: "Every frame holds a thousand prayers. Explore the timeless beauty, vibrant festivals, and the supreme tranquility of Maa Badi Mata's sanctuary."
      },
      news: {
        pageTitle: "News & Events",
        tabEvents: "Upcoming Events",
        tabNews: "Latest Blog",
        
        // Events
        event1Title: "Navratri Mahotsav Preparation",
        event1Desc: "Join us for the grand preparation of the upcoming Navratri Mahotsav. Volunteers are welcome to participate in the decoration and arrangements.",
        event2Title: "Special Bhandara Organization",
        event2Desc: "A special community feast (Bhandara) is being organized. Devotees willing to contribute ingredients or volunteer can contact the trust office.",
        readMore: "Read Details",
        
        // News
        latestNewsTitle: "Latest News",
        tagCommunity: "Community",
        tagTemple: "Temple Update",
        news1Title: "Mega Food Distribution Drive Completed Successfully",
        news1Desc: "Over 5,000 devotees were served Maha-Prasad during the recent drive. We thank all the donors and volunteers for their selfless service.",
        news2Title: "Temple Shikhar Renovation Phase 1 Begins",
        news2Desc: "The much-awaited renovation of the main temple Shikhar has officially begun. The architectural team aims to complete Phase 1 before Diwali.",
        readFullStory: "Read Full Story"
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
        pageTitle: "Maa Badi Mata Lucky Devotee Gift Scheme",
        prizePlot: "Plot up to ₹10 Lakhs",
        prizeCar: "1 Car",
        prizeRE: "1 Royal Enfield",
        prizeChetak: "2 Bajaj Chetak EV",
        prizeOther: "Many Attractive Prizes",
        grandPrizesTag: "Grand Prizes",
        prizeHeading: "Major Prizes",
        introTag: "Introduction",
        introQuote: "“Tomorrow, when the grand temple of Maa is complete, every devotee will be able to proudly say — I too have contributed to this.”",
        introDetail: "About 65% of the temple construction work is already complete. This scheme has been launched to expedite the remaining construction work.",
        objTitle: "Objective of the Scheme",
        objText: "To encourage public contribution for the construction of the grand temple of Maa Badi Mata and to provide an opportunity for service, dedication, and participation to every devotee.",
        joinTitle: "How can devotees join?",
        joinText: "Participate in the scheme through a Mahadaan coupon of ₹500.",
        getCouponTitle: "How to get a coupon?",
        onlineMethod: "Online",
        onlineStep1: "Fill Details",
        onlineStep2: "Make Payment",
        onlineStep3: "Get Digital Coupon",
        offlineMethod: "Offline",
        offlineStep1: "Temple Premises",
        offlineStep2: "Trust Office",
        offlineStep3: "Authorized Volunteers",
        ctaBtn: "Get Coupon",
        modalTitle: "Fill Receipt Details",
        modalSubtitle: "Provide your details to get the coupon.",
        modalNamePlaceholder: "Full Name",
        modalPhonePlaceholder: "Mobile No.",
        modalAmountLabel: "Contribution Amount:",
        modalAmount: "₹500",
        modalPayBtn: "Secure Payment",
        modalAlert: "Redirecting to Payment Gateway...",
        modalEmailPlaceholder: "Email Address (Optional)",
        modalAddressPlaceholder: "Complete Address",
        // Receipt Page Labels & Details
        receiptTitle: "Donation Receipt",
        receiptId: "Coupon ID",
        receiptDate: "Date",
        receiptName: "Name",
        receiptPhone: "Mobile Number",
        receiptEmail: "Email ID",
        receiptAddress: "Address",
        receiptAmount: "Amount Paid",
        
        // Buttons
        downloadBtn: "Download PDF Receipt",
        backToHome: "Back to Home",
        
        // Custom Toast Notifications
        pdfSuccess: "Receipt downloaded successfully!",
        pdfError: "Failed to generate PDF. Please try again."
      },
      founders: {
        title: "Trust Board",
        subtitle: "Our dedicated members working towards the divine vision.",
        
        // Top 3 Leaders
        f1Name: "Shri [Name Here]",
        roleAdhyaks: "President",
        f1Desc: "Guiding the temple trust with vision and dedication.",
        
        f2Name: "Shri [Name Here]",
        roleSachiv: "Secretary",
        f2Desc: "Managing the operational excellence and daily activities.",
        
        f3Name: "Shri [Name Here]",
        roleKoshadhyksh: "Treasurer",
        f3Desc: "Ensuring absolute transparency in all financial matters.",

        // Committee Members
        m1Name: "Shri [Member 1]",
        m2Name: "Shri [Member 2]",
        m3Name: "Shri [Member 3]",
        m4Name: "Shri [Member 4]",
        m5Name: "Shri [Member 5]",
        m6Name: "Shri [Member 6]",
        m7Name: "Shri [Member 7]",
        m8Name: "Shri [Member 8]",
        memberRole: "Committee Member"
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
        email: "Email Address",
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
        subGau4: "Gau Shala Shelter Support",

        pageTitle: "Temple Construction Donation",
        subtitle: "Building a Divine Legacy",
        // Trust Section
        trustHeading: "How does your service reach the Goddess?",
        trust1: "100% Secure Payment",
        trust2: "Instant Digital Receipt",
        trust3: "Temple Trust Certified Service",
        trust4: "Your Service at the Mother's Feet",
        
        // Occasion Section
        occasionHeading: "Every Achievement, Every Beginning - Dedicated to the Mother",
        occasionSub: "Every success and happiness in our lives is fulfilled by the grace of the Mother. Offer your devotion and gratitude at her feet through service.",
        occasionTagline: '"Your every contribution will be dedicated to the grand temple, dharma, service, and public welfare of Mother Badi Mata."',
        
        // Closing Message
        closingMsg1: "We pray to Mother Badi Mata to always maintain happiness, peace, prosperity, good health, and her blessings in your life.",
        closingMsg2: "Jai Maa Badi Mata",
        closingMsg3: "Your Contribution • Mother's Blessings • Immortal Heritage of Sanatan Culture",
        
        // Modal & Form
        modalTitle: "Devotee Details",
        modalSubtitle: "Please fill in your details to dedicate your service at the feet of the Mother.",
        modalNote: '"Your information will be kept safe only for service confirmation, receipt, and official communication from the Temple Trust."',
        modalSelectedSeva: "Selected Service",
        modalNamePlaceholder: "👤 Full Name* (Required)",
        modalPhonePlaceholder: "📱 Mobile Number* (Required)",
        modalEmailPlaceholder: "📧 Email ID (Optional)",
        modalAddressPlaceholder: "📍 Complete Address (Optional)",
        modalAnonymous: "Anonymous Donation",
        modalAmountLabel: "Donation Amount (₹)",
        modalAmountPlaceholder: "Enter amount as per devotion",
        modalMinAmount: "* Minimum donation amount ₹",
        modalSubmitBtn: "Offer Donation",

        // Section 3: Shloka & Slogan
        shlokaText: "श्रद्धया देयम्। अश्रद्धया अदेयम्।\nश्रिया देयम्। ह्रिया देयम्। भिया देयम्। संविदा देयम्॥",
        shlokaRef: "— Taittiriya Upanishad (Shikshavalli)",
        shlokaMeaning: "\"Donation should be given with faith, humility, capacity, and wisdom.\"",
        shlokaDesc: "\"In the scriptures, temple construction and renovation are described as highly virtuous acts. The devotee who contributes to the construction, protection, or renovation of the temple becomes a participant in this sacred work of dharma, service, and public welfare.\"",

        categoryHeading: "“One Pillar – One Family”",
categorySub: "Temple construction is not just building a structure, but creating an immortal heritage of Sanatan culture for generations to come.",
categorySelectTitle: "Select Contribution Category",
contributeBtn: "Contribute →",
masterCtaBtn: "Offer Your Devotion",

 categories: {
            pillar: { title: "Base Pillar Donation", subtitle: "One Base Pillar", priceDesc: "₹11,00,000", desc: "Contribution towards the main pillars of the temple, the immortal foundation of faith." },
            shila: { title: "One Stone Donation", subtitle: "", priceDesc: "₹5,100", desc: "Good fortune of becoming a sacred stone of the Mother's grand temple." },
            swarn: { title: "Gold Donation for Kalash", subtitle: "", priceDesc: "Contribution as per devotion", desc: "Contribute devoutly towards the construction of the divine dome and gold Kalash." },
            rajat: { title: "Silver Donation for Throne", subtitle: "", priceDesc: "Contribution as per devotion", desc: "Dedicate your devotion for the divine silver throne of Mother Badi Mata." },
            kasht: { title: "Wooden Donation", subtitle: "", priceDesc: "Starting from ₹5,100", desc: "Participate in the construction of the divine wooden doors of the sacred sanctum." },
            marble: { title: "Marble Donation for Sabha Mandap", subtitle: "", priceDesc: "Contribution as per devotion", desc: "Participate in the construction of the marble floor for the assembly hall." },
            anna: { title: "Annakshetra Donation", subtitle: "", priceDesc: "Contribution as per devotion", desc: "Contribute to the sacred service of Maha Prasad, Bhandara, and food donation." },
            gau: { title: "Gaushala Donation", subtitle: "", priceDesc: "Contribution as per devotion", desc: "Participate in the food, protection, and service of Gau Mata." },
            svechha: { title: "Voluntary Donation", subtitle: "As much devotion, as much dedication.", priceDesc: "Contribution as per devotion", desc: "Participate in the grand temple construction with your devotion and capacity." }
        },
        occasions: {
            bday: "Birthday Seva",
            anniv: "Marriage Anniversary Seva",
            family: "Family Auspicious Seva",
            ancestor: "Ancestral Remembrance Seva",
            success: "Success/New Beginning Seva"
        },

      },

     

      nirman: {
        pageTitle: "Temple Construction",
        subtitle: "Building an Immortal Legacy for Future Generations",
        sec1Title: "The Divine Vision",
        sec1Text: "The construction of Maa Badi Mata's grand temple is not merely the creation of a physical structure, but the realization of a divine dream. It is a spiritual endeavor to create a sanctuary where devotees can experience absolute peace and maternal grace. Every stone laid is a testament to the unwavering faith of thousands.",
        sec2Title: "Architectural Grandeur",
        sec2Text: "The temple is being crafted using traditional architectural sciences (Vastu Shastra), merging ancient heritage with modern durability. The towering Shikhar (spire), the intricately carved pillars of the Sabha Mandap, and the sacred Garbhagriha (Sanctum Sanctorum) are designed to stand strong for centuries, radiating positive cosmic energy.",
        sec3Title: "Cultural Importance",
        sec3Text: "A temple is the epicenter of Sanatan Dharma. It is where our future generations will connect with their roots, learn our traditions, and find spiritual guidance. Contributing to this temple means etching your family's name into the golden pages of history, ensuring that the light of Dharma keeps burning bright.",
        sec4Title: "Current Status & Your Role",
        sec4Text: "By the grace of Mata, approximately 65% of the construction work is already complete. However, to bring the grand Shikhar and the finishing touches to life, we need the collective strength of our community. Join us in this historic Mahayagya.",
        ctaBtn: "Contribute to Nirman"
      },
      kalash: {
        pageTitle: "Kalash Sthapana",
        subtitle: "Light the lamp of devotion during Navratri",
        
        // Navratri Categories
        shardiyaTitle: "Shardiya Navratri Kalash",
        chaitraTitle: "Chaitra Navratri Kalash",
        
        // Kalash Types
        telKalash: "Tel Kalash (Oil)",
        gheeKalash: "Akhand Ghee Kalash",
        descTel: "Illuminate the temple with a sacred oil lamp for 9 days.",
        descGhee: "Establish a pure Akhand Ghee lamp for divine blessings.",
        bookBtn: "Book Kalash",
        
        // Gupt Dan Section
        guptTitle: "Mandir Mahabhiyan - Gupt Dan",
        guptDesc: "Support the grand temple construction anonymously. Your selfless devotion remains a sacred secret between you and the Divine Mother.",
        addressLabel: "Temple Address:",
        addressValue: "Maa Badi Mata Mandir, Raipur, Chhattisgarh",
        emailLabel: "Email ID:",
        emailValue: "contact@badimatatrust.com",
        
        // Modal & Form
        modalTitle: "Kalash Booking Details",
        modalSubtitle: "Please provide your details for the Kalash Sankalp.",
        selectedSeva: "Selected Festival:",
        name: "Full Name",
        phone: "Mobile Number",
        email: "Email Address",
        address: "Complete Address",
        anonymous: "Make this booking anonymous (Gupt Dan)",
        payBtn: "Proceed to Payment",
        redirectMsg: "Redirecting to secure payment gateway..."
      },
      footer: {
        templeName: "Badi Mata Mandir",
        templeSubName: "Badimatha Temple",
        templeDesc: "A divine sanctuary of peace and spirituality. Join us to experience the eternal grace of Goddess Adi Shakti and find harmony in your soul.",
        
        quickLinks: "Quick Links",
        linkHome: "Home",
        linkAbout: "About the Temple",
        linkPooja: "Pooja & Sevas",
        linkFestivals: "Upcoming Festivals",
        linkGallery: "Photo Gallery",
        linkLuckyDraw: "Lucky Draw",
        
        templeTimings: "Temple Timings",
        morningDarshan: "Morning Darshan",
        morningTime: "05:30 AM - 12:30 PM",
        eveningDarshan: "Evening Darshan",
        eveningTime: "04:00 PM - 09:00 PM",
        mahaAarti: "Maha Aarti",
        aartiTime: "07:00 AM & 07:30 PM",
        
        contactUs: "Contact Us",
        addressLine1: "123 Spiritual Way, Heritage District,",
        addressLine2: "City Name, State, 123456",
        phone: "+91 98765 43210",
        email: "info@badimathatemple.com",
        
        note: "Note: ",
        disclaimer: "The Lucky Devotee Gift Scheme is operated by Shri Badi Mata Temple Trust. All terms and conditions of the scheme apply. The selection process and all final decisions related to the scheme will be binding by the Temple Trust.",
        
        copyright: "Shri Badimatha Temple. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service"
      },
      
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        timing: "दर्शन का समय",
        gallery: "गैलरी",
        news: "इवेंट और ब्लॉगिंग",
        lucky: "भाग्यशाली भक्त उपहार योजना",
        donate: "मंदिर नव निर्माण दान",
        contact: "संपर्क करें",
        seva: "सेवा",
        register: "पंजीयन क्रमांक",

        aboutHistory: "मंदिर का इतिहास",
        aboutNirman: "मंदिर निर्माण का महत्व",
        aboutTrustees: "ट्रस्टीगण",
      },
      hero: {
        templeName: "श्री बड़ी माता मंदिर",
        slogan1: "सर्वमङ्गलमाङ्गल्ये",
        slogan2: "शिवे सर्वार्थसाधिके ।",
        slogan3: "शरण्ये त्र्यम्बके गौरि",
        slogan4: "नारायणि नमोऽस्तु ते ॥",
        description: "हमारी दैनिक आरती में सम्मिलित हों, ईश्वरीय आशीर्वाद प्राप्त करें, और मंदिर की विशेष सेवाओं में हिस्सा लें।",
        poojaSeva: "पूजा सेवा",
        templeTrust: "नगर शक्ति पीठ",

        slide1: "लक्ष्मी माता",
        slide2: "सरस्वती माता",
        slide3: "दुर्गा माता"
      },
      home: {
            donationSection: {
                badge: "मंदिर निर्माण महाअभियान",
                heading: "“एक आधार स्तंभ – एक परिवार”",
                description: "मंदिर निर्माण केवल भवन निर्माण नहीं बल्कि आने वाली पीढ़ियों के लिए सनातन संस्कृति की अमर विरासत का निर्माण है।",
                button: "सहयोग अर्पण करें"
            }
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
        pageTitle: "मंदिर का गौरवशाली इतिहास",
        subtitle: "माँ बड़ी माता का दिव्य उद्गम एवं गाथा",
        genHeading: "हमारी दिव्य विरासत",
        genDesc1: "सदियों से, बड़ी माता मंदिर आस्था, आशा और आध्यात्मिक जागृति के एक महान प्रकाश-स्तंभ के रूप में खड़ा है। यह वह पवित्र तपोभूमि है जहाँ लाखों भक्त दिव्य माँ का असीम आशीर्वाद और मातृ कृपा प्राप्त करने आते हैं।",
        genDesc2: "मंदिर का इतिहास चमत्कारों, गहरी भक्ति और हमारे पूर्वजों की अटूट आस्था से बुना हुआ है, जिन्होंने इस पवित्र स्थान को सहेज कर रखा। इस मंदिर का कण-कण सकारात्मक ऊर्जा और सच्चे भक्तों की मूक प्रार्थनाओं से गुंजायमान है।",
        mathaHeading: "तीन स्वरूप, एक शक्ति",
        matha1Title: "माँ बड़ी माता",
        matha1Desc: "भगवती का सर्वोच्च स्वरूप, जो अपार शक्ति और परम सुरक्षा का प्रतीक है। वे इस प्रांगण की अधिष्ठात्री देवी हैं, जो अपने बच्चों पर अनंत कृपा बरसाती हैं और उनके मार्ग के सभी विघ्नों का तत्क्षण नाश करती हैं।",
        matha2Title: "माँ मंझली माता",
        matha2Desc: "धन, सुख, समृद्धि और वात्सल्य की अत्यंत सुंदर प्रतिमूर्ति। भक्त जीवन में पूर्णता, पारिवारिक सद्भाव और अबाधित शांति के लिए माता के इस ममतामयी स्वरूप की विशेष आराधना करते हैं।",
        matha3Title: "माँ छोटी माता",
        matha3Desc: "ज्ञान, पवित्रता और आध्यात्मिक जागृति का तेजोमय प्रतीक। माता का यह स्वरूप अज्ञान के अंधकार को दूर कर जीवन में प्रकाश, सर्वोच्च ज्ञान और अंतिम मुक्ति का मार्ग प्रशस्त करता है।",
        slogan: "“आस्था केवल यह मानना नहीं है कि माँ कर सकती है, बल्कि यह जानना है कि माँ अवश्य करेगी।”",
        ctaBtn: "समाचार एवं आयोजन देखें"
      },
      gallery: {
        pageTitle: "दिव्य दर्शन गैलरी",
        subtitle: "कृपा और भक्ति की मनमोहक झलकियाँ",
        photoHeading: "पवित्र दर्शन",
        photoSub: "दिव्यता के कुछ अद्भुत पल",
        videoHeading: "आरती एवं उत्सव",
        videoSub: "दिव्य ऊर्जा और चैतन्यता का अनुभव करें",
        vid1Title: "भव्य सांध्य आरती",
        vid2Title: "नवरात्रि महोत्सव की झलकियाँ",
        vid3Title: "मंदिर स्थापना दिवस",
        heritage: "शाश्वत विरासत",
        heritageDesc: "हर एक छवि में हजारों प्रार्थनाएं बसी हैं। माँ बड़ी माता के दरबार के शाश्वत सौंदर्य, जीवंत उत्सवों और परम शांति का अनुभव करें।"
      },
      news: {
        pageTitle: "समाचार एवं आयोजन",
        tabEvents: "आयोजन",
        tabNews: "ब्लॉग",
        
        // Events
        event1Title: "नवरात्रि महोत्सव की तैयारियाँ",
        event1Desc: "आगामी नवरात्रि महोत्सव की भव्य तैयारियों में हमारे साथ जुड़ें। सजावट और व्यवस्थाओं में भाग लेने के लिए स्वयंसेवकों का स्वागत है।",
        event2Title: "विशेष भंडारे का आयोजन",
        event2Desc: "एक विशेष विशाल भंडारे का आयोजन किया जा रहा है। सामग्री का योगदान देने या सेवा करने के इच्छुक भक्त ट्रस्ट कार्यालय से संपर्क कर सकते हैं।",
        readMore: "विवरण पढ़ें",
        
        // News
        latestNewsTitle: "ब्लॉग",
        tagCommunity: "सामाजिक कार्य",
        tagTemple: "मंदिर अपडेट",
        news1Title: "विशाल अन्नदान अभियान सफलतापूर्वक संपन्न",
        news1Desc: "हाल ही के अभियान के दौरान 5,000 से अधिक भक्तों को महा-प्रसाद परोसा गया। हम सभी दानदाताओं और स्वयंसेवकों को उनकी निःस्वार्थ सेवा के लिए धन्यवाद देते हैं।",
        news2Title: "मंदिर शिखर जीर्णोद्धार का पहला चरण प्रारंभ",
        news2Desc: "मुख्य मंदिर के शिखर का बहुप्रतीक्षित जीर्णोद्धार आधिकारिक तौर पर शुरू हो गया है। वास्तुशिल्प टीम का लक्ष्य दिवाली से पहले पहले चरण को पूरा करना है।",
        readFullStory: "पूरी खबर पढ़ें"
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
        pageTitle: "माँ बड़ी माता भाग्यशाली भक्त उपहार योजना",
        prizePlot: "₹10 लाख तक का प्लॉट",
        prizeCar: "1 कार",
        prizeRE: "1 Royal Enfield",
        prizeChetak: "2 Bajaj Chetak EV",
        prizeOther: "अनेक आकर्षक उपहार",
        grandPrizesTag: "भव्य उपहार",
        prizeHeading: "प्रमुख उपहार",
        introTag: "परिचय",
        introQuote: "“कल जब माँ का भव्य मंदिर पूर्ण होगा, तब हर श्रद्धालु गर्व से कह सकेगा — इसमें मेरा भी योगदान है।”",
        introDetail: "मंदिर निर्माण का लगभग 65% कार्य पूर्ण हो चुका है। शेष निर्माण कार्य को शीघ्र पूर्ण करने हेतु यह योजना प्रारंभ की गई है।",
        objTitle: "योजना का उद्देश्य",
        objText: "माँ बड़ी माता के भव्य मंदिर निर्माण हेतु जनसहयोग को प्रोत्साहित करना तथा प्रत्येक भक्त को सेवा, समर्पण एवं सहभागिता का अवसर प्रदान करना।",
        joinTitle: "भक्त कैसे जुड़ सकते हैं?",
        joinText: "₹500 के महादान कूपन द्वारा योजना में सहभागी बनें।",
        getCouponTitle: "कूपन कैसे प्राप्त करें?",
        onlineMethod: "ऑनलाइन",
        onlineStep1: "जानकारी भरें",
        onlineStep2: "भुगतान करें",
        onlineStep3: "डिजिटल कूपन प्राप्त करें",
        offlineMethod: "ऑफलाइन",
        offlineStep1: "मंदिर परिसर",
        offlineStep2: "ट्रस्ट कार्यालय",
        offlineStep3: "अधिकृत सेवादार",
        ctaBtn: "कूपन प्राप्त करें",
        modalTitle: "रसीद विवरण भरें",
        modalSubtitle: "कूपन प्राप्त करने के लिए अपना विवरण दें।",
        modalNamePlaceholder: "पूरा नाम (Full Name)",
        modalPhonePlaceholder: "मोबाइल नंबर (Mobile No.)",
        modalAmountLabel: "सहयोग राशि:",
        modalAmount: "₹500",
        modalPayBtn: "सुरक्षित भुगतान करें",
        modalAlert: "पेमेंट गेटवे पर जा रहे हैं...",
        modalEmailPlaceholder: "ईमेल आईडी (Email ID)",
        modalAddressPlaceholder: "पूरा पता (Complete Address)",
        // Receipt Page Labels & Details
        receiptTitle: "सहयोग रसीद",
        receiptId: "कूपन आईडी",
        receiptDate: "दिनांक",
        receiptName: "नाम",
        receiptPhone: "मोबाइल नंबर",
        receiptEmail: "ईमेल आईडी",
        receiptAddress: "पता",
        receiptAmount: "जमा राशि",
        
        // Buttons
        downloadBtn: "PDF रसीद डाउनलोड करें",
        backToHome: "मुख्य पृष्ठ पर लौटें",
        
        // Custom Toast Notifications
        pdfSuccess: "रसीद सफलतापूर्वक डाउनलोड हो गई!",
        pdfError: "PDF जनरेट करने में विफल। कृपया पुनः प्रयास करें।"
      },
      founders: {
        title: "ट्रस्ट मंडल",
        subtitle: "दिव्य दृष्टिकोण की दिशा में कार्यरत हमारे समर्पित सदस्य।",
        
        // Top 3 Leaders
        f1Name: "श्री [नाम यहाँ]",
        roleAdhyaks: "अध्यक्ष",
        f1Desc: "दृष्टिकोण और समर्पण के साथ मंदिर ट्रस्ट का मार्गदर्शन करना।",
        
        f2Name: "श्री [नाम यहाँ]",
        roleSachiv: "सचिव",
        f2Desc: "परिचालन उत्कृष्टता और दैनिक गतिविधियों का कुशल प्रबंधन।",
        
        f3Name: "श्री [नाम यहाँ]",
        roleKoshadhyksh: "कोषाध्यक्ष",
        f3Desc: "सभी वित्तीय मामलों में पूर्ण पारदर्शिता और निष्ठा सुनिश्चित करना।",

        // Committee Members
        m1Name: "श्री [सदस्य 1]",
        m2Name: "श्री [सदस्य 2]",
        m3Name: "श्री [सदस्य 3]",
        m4Name: "श्री [सदस्य 4]",
        m5Name: "श्री [सदस्य 5]",
        m6Name: "श्री [सदस्य 6]",
        m7Name: "श्री [सदस्य 7]",
        m8Name: "श्री [सदस्य 8]",
        memberRole: "सदस्य"
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
        email: "ईमेल आईडी",
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
        subGau4: "गौ आश्रय सहयोग",

        // Temple Construction Specifics
        pageTitle: "मंदिर नव निर्माण महाअभियान",
        subtitle: "एक दिव्य विरासत का निर्माण",
        // Trust Section
        trustHeading: "आपकी सेवा माँ तक कैसे पहुँचती है?",
        trust1: "100% सुरक्षित भुगतान",
        trust2: "तत्काल डिजिटल रसीद",
        trust3: "मंदिर ट्रस्ट प्रमाणित सेवा",
        trust4: "आपकी सेवा माँ के चरणों में",
        
        // Occasion Section
        occasionHeading: "हर उपलब्धि, हर आरंभ - माँ को समर्पित",
        occasionSub: "हमारे जीवन की हर सफलता और हर खुशी माँ की कृपा से पूर्ण होती है। अपनी श्रद्धा और कृतज्ञता को सेवा के माध्यम से माँ के चरणों में अर्पित करें।",
        occasionTagline: '"आपका प्रत्येक सहयोग माँ बड़ी माता के भव्य धाम, धर्म, सेवा एवं लोककल्याण के पावन कार्यों में समर्पित होगा।"',
        
        // Closing Message
        closingMsg1: "माँ बड़ी माता से प्रार्थना है कि वे आपके जीवन में सुख, शांति, समृद्धि, उत्तम स्वास्थ्य एवं सदैव अपनी कृपा बनाए रखें।",
        closingMsg2: "जय माँ बड़ी माता",
        closingMsg3: "आपका सहयोग • माँ का आशीर्वाद • सनातन संस्कृति की अमर विरासत",
        
        // Modal & Form
        modalTitle: "सेवक का विवरण",
        modalSubtitle: "माँ के श्रीचरणों में सेवा समर्पित करने हेतु कृपया अपना विवरण भरें।",
        modalNote: '"आपकी जानकारी केवल सेवा पुष्टि, रसीद एवं मंदिर ट्रस्ट के आधिकारिक संवाद हेतु सुरक्षित रखी जाएगी।"',
        modalSelectedSeva: "चयनित सेवा",
        modalNamePlaceholder: "👤 पूरा नाम* (अनिवार्य)",
        modalPhonePlaceholder: "📱 मोबाइल नंबर* (अनिवार्य)",
        modalEmailPlaceholder: "📧 ईमेल आईडी (वैकल्पिक)",
        modalAddressPlaceholder: "📍 पूरा पता (वैकल्पिक)",
        modalAnonymous: "गुमनाम दान (Anonymous Donation)",
        modalAmountLabel: "सहयोग राशि (₹)",
        modalAmountPlaceholder: "श्रद्धानुसार राशि दर्ज करें",
        modalMinAmount: "* न्यूनतम सहयोग राशि ₹",
        modalSubmitBtn: "सहयोग अर्पण करें",

        // Section 3: Shloka & Slogan
        shlokaText: "श्रद्धया देयम्। अश्रद्धया अदेयम्।\nश्रिया देयम्। ह्रिया देयम्। भिया देयम्। संविदा देयम्॥",
        shlokaRef: "— तैत्तिरीय उपनिषद् (शिक्षावल्ली)",
        shlokaMeaning: "\"दान श्रद्धा, विनम्रता, सामर्थ्य एवं विवेक के साथ करना चाहिए।\"",
        shlokaDesc: "\"शास्त्रों में मंदिर नव निर्माण महाअभियान एवं जीर्णोद्धार को महापुण्यकारी कार्य बताया गया है। जो श्रद्धालु देवालय के निर्माण, संरक्षण या जीर्णोद्धार में सहयोग करता है, वह धर्म, सेवा और लोककल्याण के इस पावन कार्य का सहभागी बनता है।\"",

        categoryHeading: "“एक आधार स्तंभ – एक परिवार”",
categorySub: "मंदिर निर्माण केवल भवन निर्माण नहीं बल्कि आने वाली पीढ़ियों के लिए सनातन संस्कृति की अमर विरासत का निर्माण है।",
categorySelectTitle: "सहयोग श्रेणी चुनें",
contributeBtn: "सहयोग करें →",
masterCtaBtn: "अपनी श्रद्धा समर्पित करें",

categories: {
            pillar: { title: "आधार स्तंभ दान", subtitle: "एक आधार स्तंभ", priceDesc: "₹11,00,000", desc: "मुख्य आधार स्तंभ दान, श्रद्धा की अमर नींव।" },
            shila: { title: "एक शिला दान", subtitle: "", priceDesc: "₹5,100", desc: "माँ के भव्य मंदिर की एक पवित्र शिला बनने का सौभाग्य।" },
            swarn: { title: "कलश हेतु स्वर्ण दान", subtitle: "", priceDesc: "श्रद्धानुसार सहयोग", desc: "मंदिर के दिव्य गुंबद एवं स्वर्ण कलश निर्माण हेतु श्रद्धापूर्वक सहयोग करें।" },
            rajat: { title: "सिंहासन हेतु रजत दान", subtitle: "", priceDesc: "श्रद्धानुसार सहयोग", desc: "माँ बड़ी माता के दिव्य रजत सिंहासन हेतु अपनी श्रद्धा समर्पित करें।" },
            kasht: { title: "काष्ठ (लकड़ी) दान", subtitle: "", priceDesc: "₹5,100 से प्रारंभ", desc: "माँ के पवित्र गर्भगृह के दिव्य काष्ठ द्वार (लकड़ी का दरवाज़ा) निर्माण में सहभागी बनें।" },
            marble: { title: "सभा मंडप मार्बल दान", subtitle: "", priceDesc: "श्रद्धानुसार सहयोग", desc: "सभा मंडप की मार्बल फर्श निर्माण में सहभागी बनें।" },
            anna: { title: "अन्नक्षेत्र सहयोग", subtitle: "", priceDesc: "श्रद्धानुसार सहयोग", desc: "मंदिर में महाप्रसाद, भंडारा एवं अन्नदान की पावन सेवा में अपना योगदान दें।" },
            gau: { title: "गौशाला सहयोग", subtitle: "", priceDesc: "श्रद्धानुसार सहयोग", desc: "गौ माता के भोजन, संरक्षण एवं सेवा कार्यों में सहभागी बनें।" },
            svechha: { title: "स्वेच्छा दान", subtitle: "जितनी श्रद्धा, उतना समर्पण।", priceDesc: "श्रद्धानुसार सहयोग", desc: "अपनी श्रद्धा एवं सामर्थ्य के अनुसार सहयोग कर माँ बड़ी माता के भव्य मंदिर निर्माण एवं धर्म सेवा के इस पावन अभियान का हिस्सा बनें।" }
        },
        occasions: {
            bday: "जन्मदिन सेवा",
            anniv: "विवाह वर्षगांठ सेवा",
            family: "परिवार मंगल सेवा",
            ancestor: "पूर्वजों की स्मृति सेवा",
            success: "सफलता/नई शुरुआत सेवा"
        },

      },

      


      nirman: {
        pageTitle: "भव्य मंदिर निर्माण",
        subtitle: "आने वाली पीढ़ियों के लिए एक अमर विरासत का निर्माण",
        sec1Title: "दिव्य संकल्प",
        sec1Text: "माँ बड़ी माता के भव्य मंदिर का निर्माण केवल ईंट और पत्थरों का ढांचा नहीं है, बल्कि यह एक दिव्य स्वप्न का साकार होना है। यह एक ऐसा आध्यात्मिक केंद्र बनाने का प्रयास है जहां हर भक्त असीम शांति और मातृ कृपा का अनुभव कर सके। रखी जा रही हर शिला हजारों भक्तों की अटूट आस्था का प्रमाण है।",
        sec2Title: "वास्तुशिल्प और भव्यता",
        sec2Text: "मंदिर का निर्माण प्राचीन वास्तु शास्त्र के आधार पर किया जा रहा है, जिसमें सनातन विरासत और आधुनिक मजबूती का अनूठा संगम है। गगनचुंबी शिखर, सभा मंडप के नक्काशीदार स्तंभ और पवित्र गर्भगृह को इस प्रकार डिजाइन किया गया है कि वे सदियों तक अडिग खड़े रहें और सकारात्मक ऊर्जा का संचार करें।",
        sec3Title: "सांस्कृतिक एवं आध्यात्मिक महत्व",
        sec3Text: "मंदिर हमारे सनातन धर्म का केंद्र बिंदु है। यही वह स्थान है जहां हमारी आने वाली पीढ़ियां अपनी जड़ों से जुड़ेंगी और संस्कारों को सीखेंगी। इस मंदिर निर्माण में सहयोग करने का अर्थ है अपने परिवार का नाम इतिहास के पन्नों पर स्वर्णाक्षरों में दर्ज कराना और धर्म की ज्योति को प्रज्वलित रखना।",
        sec4Title: "वर्तमान स्थिति और आपकी भूमिका",
        sec4Text: "माता की कृपा से निर्माण कार्य लगभग 65% पूर्ण हो चुका है। अब भव्य शिखर और अंतिम रूपरेखा को पूरा करने के लिए समाज की सामूहिक शक्ति की आवश्यकता है। इस ऐतिहासिक महायज्ञ में आहुति दें और माता का आशीर्वाद प्राप्त करें।",
        ctaBtn: "निर्माण में सहयोग करें"
      },
      kalash: {
        pageTitle: "कलश स्थापना",
        subtitle: "नवरात्रि में माँ के दरबार में आस्था का दीप प्रज्वलित करें",
        
        // Navratri Categories
        shardiyaTitle: "शारदीय नवरात्रि कलश",
        chaitraTitle: "चैत्र नवरात्रि कलश",
        
        // Kalash Types
        telKalash: "तेल कलश",
        gheeKalash: "अखंड घृत (घी) कलश",
        descTel: "९ दिनों तक पवित्र तेल के कलश द्वारा माता की आराधना।",
        descGhee: "दिव्य कृपा हेतु शुद्ध देसी घी का अखंड कलश स्थापित करें।",
        bookBtn: "कलश बुक करें",
        
        // Gupt Dan Section
        guptTitle: "मंदिर महाभियान - गुप्त दान",
        guptDesc: "भव्य मंदिर निर्माण में गुप्त रूप से अपना सहयोग दें। आपकी यह निःस्वार्थ सेवा केवल आपके और माता के बीच का एक पवित्र रहस्य है।",
        addressLabel: "मंदिर का पता:",
        addressValue: "माँ बड़ी माता मंदिर, रायपुर, छत्तीसगढ़",
        emailLabel: "ईमेल आईडी:",
        emailValue: "contact@badimatatrust.com",
        
        // Modal & Form
        modalTitle: "कलश बुकिंग विवरण",
        modalSubtitle: "कलश संकल्प हेतु कृपया अपना विवरण प्रदान करें।",
        selectedSeva: "चयनित पर्व:",
        name: "पूरा नाम",
        phone: "मोबाइल नंबर",
        email: "ईमेल आईडी",
        address: "पूरा पता",
        anonymous: "इस बुकिंग को गुप्त दान के रूप में दर्ज करें",
        payBtn: "सुरक्षित भुगतान करें",
        redirectMsg: "सुरक्षित पेमेंट गेटवे पर जा रहे हैं...",
        // In the 'kalash' block:
        receiptTitle: "Kalash Sthapna Receipt",
        receiptThanks: "Thank you for your devotional offering!",
        receiptId: "Booking ID",
        receiptDate: "Date",
        donorDetails: "Devotee Details",
        anonymousDonor: "Anonymous Devotee",
        anonymousMsg: "The devotee has chosen to remain anonymous. Personal details are withheld.",
        sevaDetails: "Seva Details",
        receiptAmount: "Amount Paid",
      },
      footer: {
        templeName: "बड़ी माता मंदिर",
        templeSubName: "Badimatha Temple",
        templeDesc: "शांति और आध्यात्मिकता का एक दिव्य अभयारण्य। देवी आदिशक्ति की शाश्वत कृपा का अनुभव करने और अपनी आत्मा में सद्भाव खोजने के लिए हमसे जुड़ें।",
        
        quickLinks: "महत्वपूर्ण लिंक",
        linkHome: "मुखपृष्ठ",
        linkAbout: "मंदिर के बारे में",
        linkPooja: "पूजा एवं सेवाएं",
        linkFestivals: "आगामी उत्सव",
        linkGallery: "फोटो गैलरी",
        linkLuckyDraw: "भाग्यशाली उपहार योजना",
        
        templeTimings: "दर्शन का समय",
        morningDarshan: "प्रातः दर्शन",
        morningTime: "सुबह 05:30 - दोपहर 12:30",
        eveningDarshan: "सांध्य दर्शन",
        eveningTime: "शाम 04:00 - रात 09:00",
        mahaAarti: "महा आरती",
        aartiTime: "सुबह 07:00 एवं शाम 07:30",
        
        contactUs: "संपर्क करें",
        addressLine1: "123 आध्यात्मिक मार्ग, हेरिटेज जिला,",
        addressLine2: "शहर का नाम, राज्य, 123456",
        phone: "+91 98765 43210",
        email: "info@badimathatemple.com",
        
        note: "नोट: ",
        disclaimer: "भाग्यशाली भक्त उपहार योजना श्री बड़ी माता मंदिर ट्रस्ट द्वारा संचालित योजना है। योजना के सभी नियम एवं शर्तें लागू हैं। चयन प्रक्रिया एवं योजना से जुड़े सभी अंतिम निर्णय मंदिर ट्रस्ट द्वारा मान्य होंगे।",
        
        copyright: "श्री बड़ी माता मंदिर। सर्वाधिकार सुरक्षित।",
        privacyPolicy: "गोपनीयता नीति",
        termsOfService: "सेवा की शर्तें",
        // In the 'kalash' block:
        receiptTitle: "कलश स्थापना रसीद",
        receiptThanks: "आपके भक्तिपूर्ण समर्पण के लिए धन्यवाद!",
        receiptId: "बुकिंग आईडी",
        receiptDate: "दिनांक",
        donorDetails: "भक्त विवरण",
        anonymousDonor: "गुमनाम भक्त",
        anonymousMsg: "भक्त ने अपनी पहचान गुप्त रखने का विकल्प चुना है। व्यक्तिगत विवरण सुरक्षित रखा गया है।",
        sevaDetails: "सेवा विवरण",
        receiptAmount: "जमा राशि",
      },
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