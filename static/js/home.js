/* =========================================================
   1. MULTILINGUAL DICTIONARY (ENG, HINDI, TELUGU)
========================================================= */
const i18n = {
    en: {
        accountDetails: "Account Details",
        farmerProfileTag: "Verified Agri-Analyst • ID: #KB-88219",
        phoneLabel: "Phone",
        locationLabel: "Region / APMC Hub",
        produceLabel: "Focus Commodities",
        bulletinHome: "Bulletin Home",
        editorialReports: "Editorial Reports",
        mandiLocator: "Mandi Geo-Map",
        logout: "Logout",
        catAll: "All Commodities",
        catVeg: "Vegetables",
        catPulses: "Pulses",
        catCrops: "Crops",
        catFert: "Fertilizers",
        fuelHeader: "Fuel & Energy Benchmark Rates",
        poultryHeader: "Poultry, Eggs & Meat Mandi Digest",
        metalsHeader: "Precious Metals & Bullion Spot Rates",
        petrol: "Petrol (Ltr)",
        diesel: "Diesel (Agri-Ltr)",
        cng: "CNG (kg)",
        lpg: "Commercial LPG",
        eggs: "NECC Eggs (Tray/30)",
        broiler: "Live Broiler (kg)",
        chicken: "Dressed Chicken (kg)",
        mutton: "Mutton / Meat (kg)",
        gold24: "Gold 24K (10g)",
        gold22: "Gold 22K (10g)",
        silver: "Silver (1 kg)",
        platinum: "Platinum (10g)",
        myCropsTitle: "My Commodities — AI Harvest & Sell Advisor",
        myCropsSub: "Personalized predictive intelligence indicating optimal future market dates for maximum return.",
        aiOptimized: "AI Price Optimizer Active",
        crop_paddy_name: "Pusa Basmati Paddy",
        crop_chilli_name: "Guntur Teja Red Chilli",
        crop_cotton_name: "Long Staple Raw Cotton",
        badgeHold: "HOLD FOR PEAK",
        badgePartial: "PARTIAL HARVEST",
        todayPrice: "Today's Price",
        expectedPrice: "Expected Price",
        targetDate: "Target Peak Date",
        date_paddy: "12 Oct 2026",
        date_chilli: "28 Nov 2026",
        date_cotton: "15 Sep 2026",
        simTitle: "Calculate Your Extra Profit:",
        mainReportTitle: "Daily Mandi Price Intelligence & ML Forecast Bulletin",
        mainReportSub: "Analytical comparison between Machine Learning predicted pricing, local retail rates, and wholesale APMC figures.",
        mlPrice: "ML Forecast",
        retailPrice: "Retail Market",
        wholesalePrice: "Wholesale (Mandi)",
        unit_quintal: "Benchmark: 1 Quintal (100 kg)",
        unit_bag50: "Benchmark: 50 kg Standard Bag",
        unit_bag45: "Benchmark: 45 kg Subsidized Bag",
        comm_capsicum: "Green Capsicum (Shimla Mirch)",
        comm_carrot: "Fresh Table Carrots",
        comm_toordal: "Desi Toor Dal (Yellow Arhar)",
        comm_npk: "NPK (19:19:19) Water Soluble",
        comm_basmati: "Pusa 1121 Basmati Paddy",
        comm_chana: "Desi Chana (Bengal Gram)",
        comm_cauliflower: "Snowball Fresh Cauliflower",
        comm_urea: "Neem Coated Urea (46% N)",
        dockHome: "Home",
        dockNews: "News",
        dockMaps: "Maps",
        dockTransport: "Transport",
        dockBazaar: "Bazaar",
        dockNotes: "Ledger",
        dockAI: "Kisan AI",
        bazaarPageTitle: "🚜 Kisan Bazaar — Farmer-to-Farmer Asset & Land Marketplace",
        bazaarPageSub: "Buy, sell, or lease agricultural land, farm machinery, godowns, livestock, and second-hand spares directly without middlemen.",
        btnPostAd: "+ Post Your Farm Ad",
        bazaarCatLand: "Agri Land",
        bazaarCatMachinery: "Machinery",
        bazaarCatInfra: "Infrastructure",
        bazaarCatLivestock: "Livestock & Cattle",
        bazaarCatSpares: "Used Vehicles & Spares",
        landFilterLabel: "Land Filter:",
        landAll: "All Land (అన్నీ)",
        landSale: "🏷️ For Sale (అమ్మకానికి)",
        landLease: "📜 For Lease / Cultivation (కౌలుకు)",
        catPDS: "PDS (Ration)",
        catRythuBazaar: "Rythu Bazaars",
        catColdStorage: "Cold Storages",
        catSeeds: "Seed Shops",
        catFertilizersShop: "Fertilizers",
        btnWhereToSell: "Where to Sell?",
        btnFindMarkets: "Find Best Mandi",
        quickSelect: "Quick Select:",
        transportPageTitle: "🚚 Kisan Logistics — On-Demand Farm Freight",
        transportPageSub: "Book verified agricultural transport vehicles directly from your farm to any Mandi yard at transparent per-km rates.",
        pickupLocation: "Pick-up Origin (Your Farm):",
        dropLocation: "Destination Mandi / Hub:",
        selectVehicle: "Select Transport Vehicle:",
        btnFindDrivers: "Find Nearby Drivers",
        ledgerTitle: "🎙️ Kisan Smart Ledger — AI Voice Farm Accounting",
        ledgerSub: "Speak naturally in Telugu, Hindi, or English. AI automatically structures your spoken costs, wages, and sales into an accounting table.",
        btnPrintLedger: "Print / Save PDF",
        btnClear: "Clear",
        btnAutoTable: "Structure to Table",
        samplePromptLabel: "Try Speaking / Click Sample:",
        totalExpenses: "Total Expenses (మొత్తం ఖర్చులు)",
        totalIncome: "Total Income (మొత్తం ఆదాయం)",
        netProfit: "Net Profit / Balance (నికర లాభం)",
        thDate: "Date",
        thItem: "Item / Activity",
        thCategory: "Category",
        thType: "Type",
        thAmount: "Amount (₹)",
        thNotes: "Notes",
        thAction: "Action",
        aiPageTitle: "🌾 Kisan AI — Plant Doctor & Agri Advisor",
        aiPageSub: "Ask about plant diseases, upload crop photos for diagnosis, get 7-day weather forecasts, and fertilizer schedules.",
        aiGreetingTitle: "Namaste! I am Kisan AI.",
        aiGreetingDesc: "I can help you diagnose crop diseases from photos, provide weather advisories, recommend fertilizers, and analyze mandi price trends. Ask me anything related to your farm!",
        newsSectionTitle: "Agricultural Editorial Bulletins & Policy Updates",
        newsSectionSub: "Curated market analysis, monsoon updates, and MSP government notifications."
    },
    hi: {
        accountDetails: "खाता विवरण",
        farmerProfileTag: "सत्यापित कृषि विश्लेषक • आईडी: #KB-88219",
        phoneLabel: "फ़ोन नंबर",
        locationLabel: "क्षेत्र / मंडी केंद्र",
        produceLabel: "प्रमुख फसलें",
        bulletinHome: "बुलेटिन होम",
        editorialReports: "संपादकीय रिपोर्ट",
        mandiLocator: "मंडी जियो-मैप",
        logout: "लॉग आउट",
        catAll: "सभी वस्तुएं",
        catVeg: "सब्जियां",
        catPulses: "दालें",
        catCrops: "फसलें",
        catFert: "उर्वरक / खाद",
        fuelHeader: "ईंधन एवं ऊर्जा दैनिक दरें",
        poultryHeader: "पोल्ट्री, अंडा और मांस मंडी दरें",
        metalsHeader: "सोना, चांदी और कीमती धातु स्पॉट दरें",
        petrol: "पेट्रोल (लीटर)",
        diesel: "डीजल (कृषि दर)",
        cng: "सीएनजी (किग्रा)",
        lpg: "कमर्शियल एलपीजी",
        eggs: "अंडे (ट्रे/30)",
        broiler: "ब्रायलर चिकन (किग्रा)",
        chicken: "ड्रेस्ड चिकन (किग्रा)",
        mutton: "मटन / मीट (किग्रा)",
        gold24: "सोना 24K (10 ग्रा)",
        gold22: "सोना 22K (10 ग्रा)",
        silver: "चांदी (1 किग्रा)",
        platinum: "प्लेटिनम (10 ग्रा)",
        myCropsTitle: "मेरी फसलें — एआई कटाई और बिक्री सलाहकार",
        myCropsSub: "अधिकतम मुनाफे के लिए सही भविष्य की तारीख बताने वाला व्यक्तिगत पूर्वानुमान।",
        aiOptimized: "एआई मूल्य अनुकूलक सक्रिय",
        crop_paddy_name: "पूसा बासमती धान",
        crop_chilli_name: "गुंटूर तेजा लाल मिर्च",
        crop_cotton_name: "लंबे रेशे वाली कपास",
        badgeHold: "उच्चतम भाव के लिए रुकें",
        badgePartial: "आंशिक बिक्री करें",
        todayPrice: "आज का भाव",
        expectedPrice: "अनुमानित उच्चतम भाव",
        targetDate: "लक्षित तारीख",
        date_paddy: "12 अक्टूबर 2026",
        date_chilli: "28 नवंबर 2026",
        date_cotton: "15 सितंबर 2026",
        simTitle: "अपना अतिरिक्त लाभ जांचें:",
        mainReportTitle: "दैनिक मंडी मूल्य एवं एमएल पूर्वानुमान बुलेटिन",
        mainReportSub: "मशीन लर्निंग पूर्वानुमानित मूल्य, खुदरा और थोक एपीएमसी दरों की विश्लेषणात्मक तुलना।",
        mlPrice: "एमएल पूर्वानुमान",
        retailPrice: "खुदरा मूल्य",
        wholesalePrice: "थोक मंडी भाव",
        unit_quintal: "मानक: 1 क्विंटल (100 किग्रा)",
        unit_bag50: "मानक: 50 किग्रा बैग",
        unit_bag45: "मानक: 45 किग्रा सब्सिडी बैग",
        comm_capsicum: "हरी शिमला मिर्च",
        comm_carrot: "ताज़ी गाजर",
        comm_toordal: "देसी तूर दाल (अरहर)",
        comm_npk: "एनपीके (19:19:19) घुलनशील खाद",
        comm_basmati: "पूसा 1121 बासमती धान",
        comm_chana: "देसी चना",
        comm_cauliflower: "ताज़ी फूलगोभी",
        comm_urea: "नीम लेपित यूरिया (46% N)",
        dockHome: "होम",
        dockNews: "समाचार",
        dockMaps: "नक्शा",
        dockTransport: "परिवहन",
        dockBazaar: "बाज़ार (OLX)",
        dockNotes: "बहीखाता",
        dockAI: "किसान AI",
        bazaarPageTitle: "🚜 किसान बाज़ार — कृषि भूमि, उपकरण और पशुधन बाज़ार",
        bazaarPageSub: "कृषि भूमि, ट्रैक्टर, बोरवेल, चारा और पशुधन सीधे किसानों से खरीदें, बेचें या लीज पर लें।",
        btnPostAd: "+ अपना विज्ञापन डालें",
        bazaarCatLand: "कृषि भूमि",
        bazaarCatMachinery: "मशीनरी व ट्रैक्टर",
        bazaarCatInfra: "संरचना व गोदाम",
        bazaarCatLivestock: "पशुधन व मवेशी",
        bazaarCatSpares: "पुराने वाहन व पुर्जे",
        landFilterLabel: "भूमि फ़िल्टर:",
        landAll: "सभी भूमि",
        landSale: "🏷️ बिक्री हेतु",
        landLease: "📜 पट्टे / बटाई हेतु (Lease)",
        catPDS: "राशन दुकान (PDS)",
        catRythuBazaar: "रैथु बाज़ार (किसान मंडी)",
        catColdStorage: "कोल्ड स्टोरेज",
        catSeeds: "बीज भंडार",
        catFertilizersShop: "खाद एवं कीटनाशक",
        btnWhereToSell: "कहाँ बेचें?",
        btnFindMarkets: "सर्वोत्तम मंडी खोजें",
        quickSelect: "त्वरित चयन:",
        transportPageTitle: "🚚 किसान लॉजिस्टिक्स — ऑन-डिमांड कृषि वाहन बुकिंग",
        transportPageSub: "अपने खेत से सीधे किसी भी मंडी तक पारदर्शी प्रति किमी दर पर वाहन बुक करें।",
        pickupLocation: "पिक-अप स्थान (आपका खेत):",
        dropLocation: "गंतव्य मंडी / गंतव्य केंद्र:",
        selectVehicle: "वाहन का प्रकार चुनें:",
        btnFindDrivers: "उपलब्ध चालक खोजें",
        ledgerTitle: "🎙️ किसान स्मार्ट बहीखाता — एआई वॉइस फार्म अकाउंटिंग",
        ledgerSub: "हिंदी, तेलुगु या अंग्रेजी में बोलें। एआई स्वचालित रूप से आपके खर्चों और आमदनी को तालिका में दर्ज करेगा।",
        btnPrintLedger: "प्रिंट / पीडीएफ सेव करें",
        btnClear: "हटाएं",
        btnAutoTable: "तालिका में बदलें",
        samplePromptLabel: "बोलें या नमूना चुनें:",
        totalExpenses: "कुल खर्च",
        totalIncome: "कुल आमदनी",
        netProfit: "शुद्ध लाभ / शेष",
        thDate: "दिनांक",
        thItem: "मद / विवरण",
        thCategory: "श्रेणी",
        thType: "प्रकार",
        thAmount: "राशि (₹)",
        thNotes: "टिप्पणी",
        thAction: "कार्रवाई",
        aiPageTitle: "🌾 किसान AI — फसल डॉक्टर और कृषि सलाहकार",
        aiPageSub: "फसल रोगों की जांच के लिए फोटो अपलोड करें, 7 दिनों का मौसम पूर्वानुमान और खाद का सही समय जानें।",
        aiGreetingTitle: "नमस्ते! मैं किसान AI हूँ।",
        aiGreetingDesc: "मैं आपकी फसल की बीमारियों की पहचान, मौसम की जानकारी और मंडी भाव के विश्लेषण में मदद कर सकता हूँ।",
        newsSectionTitle: "कृषि संपादकीय समाचार एवं नीतियां",
        newsSectionSub: "बाजार विश्लेषण, मानसून रिपोर्ट एवं सरकारी एमएसपी अधिसूचनाएं।"
    },
    te: {
        accountDetails: "ఖాతా వివరాలు",
        farmerProfileTag: "ధృవీకరించబడిన వ్యవసాయ విశ్లేషకుడు • ID: #KB-88219",
        phoneLabel: "ఫోన్ నంబర్",
        locationLabel: "ప్రాంతం / మార్కెట్ యార్డ్",
        produceLabel: "ప్రధాన పంటలు",
        bulletinHome: "బులిటెన్ హోమ్",
        editorialReports: "మార్కెట్ నివేదికలు",
        mandiLocator: "మార్కెట్ లొకేటర్",
        logout: "లాగ్ అవుట్",
        catAll: "అన్ని రకాలు",
        catVeg: "కూరగాయలు",
        catPulses: "పప్పు ధాన్యాలు",
        catCrops: "పంటలు",
        catFert: "ఎరువులు",
        fuelHeader: "ఇంధనం & ఇంధన ధరల పట్టిక",
        poultryHeader: "పౌల్ట్రీ, గుడ్లు మరియు మాంసం మార్కెట్ రేట్లు",
        metalsHeader: "బంగారం, వెండి మరియు లోహాల ధరలు",
        petrol: "పెట్రోల్ (లీటర్)",
        diesel: "డీజిల్ (వ్యవసాయం)",
        cng: "సీఎన్‌జీ (కేజీ)",
        lpg: "కమర్షియల్ ఎల్పీజీ",
        eggs: "గుడ్లు (ట్రే/30)",
        broiler: "బ్రాయిలర్ కోడి (కేజీ)",
        chicken: "చికెన్ (కేజీ)",
        mutton: "మటన్ (కేజీ)",
        gold24: "బంగారం 24K (10గ్రా)",
        gold22: "బంగారం 22K (10గ్రా)",
        silver: "వెండి (1 కేజీ)",
        platinum: "ప్లాటినం (10గ్రా)",
        myCropsTitle: "నా పంటలు — AI కోత & అమ్మకాల సలహాదారు",
        myCropsSub: "గరిష్ట లాభం కోసం సరైన భవిష్యత్ మార్కెట్ తేదీని సూచించే విశ్లేషణ.",
        aiOptimized: "AI ధర ఆప్టిమైజర్ యాక్టివ్",
        crop_paddy_name: "పూసా బాస్మతి ధాన్యం",
        crop_chilli_name: "గుంటూరు తేజా ఎండుమిర్చి",
        crop_cotton_name: "పొడవాటి పత్తి",
        badgeHold: "గరిష్ట ధర కోసం ఆగండి",
        badgePartial: "కొద్దిగా విక్రయించండి",
        todayPrice: "నేటి ధర",
        expectedPrice: "అంచనా గరిష్ట ధర",
        targetDate: "లక్ష్య తేదీ",
        date_paddy: "12 అక్టోబర్ 2026",
        date_chilli: "28 నవంబర్ 2026",
        date_cotton: "15 సెప్టెంబర్ 2026",
        simTitle: "మీ అదనపు లాభాన్ని లెక్కించండి:",
        mainReportTitle: "రోజువారీ మార్కెట్ ధరల విశ్లేషణ & ML అంచనాలు",
        mainReportSub: "మెషిన్ లెర్నింగ్ అంచనా ధరలు, రిటైల్ మరియు హోల్‌సేల్ మార్కెట్ ధరల పూర్తి పోలిక.",
        mlPrice: "ML అంచనా",
        retailPrice: "రిటైల్ మార్కెట్",
        wholesalePrice: "హోల్‌సేల్ మార్కెట్",
        unit_quintal: "పరిమాణం: 1 క్వింటాల్ (100 కేజీలు)",
        unit_bag50: "పరిమాణం: 50 కేజీల బస్తా",
        unit_bag45: "పరిమాణం: 45 కేజీల సబ్సిడీ బస్తా",
        comm_capsicum: "పచ్చి క్యాప్సికమ్ (శిమ్లా మిర్చి)",
        comm_carrot: "తాజా క్యారెట్లు",
        comm_toordal: "దేశీ కంది పప్పు",
        comm_npk: "ఎన్‌పీకే (19:19:19) ఎరువు",
        comm_basmati: "పూసా 1121 బాస్మతి ధాన్యం",
        comm_chana: "దేశీ శనగలు",
        comm_cauliflower: "తాజా కాలీఫ్లవర్",
        comm_urea: "వేప పూత పూసిన యూరియా",
        dockHome: "హోమ్",
        dockNews: "వార్తలు",
        dockMaps: "మ్యాప్స్",
        dockTransport: "రవాణా",
        dockBazaar: "బజార్",
        dockNotes: "ఖాతా",
        dockAI: "కిసాన్ AI",
        bazaarPageTitle: "🚜 కిసాన్ బజార్ — వ్యవసాయ భూమి, యంత్రాలు & పశువుల క్రయవిక్రయాలు",
        bazaarPageSub: "వ్యవసాయ భూములు, ట్రాక్టర్లు, బోరుబావులు మరియు పశువులను దళారులు లేకుండా నేరుగా రైతుల వద్ద కొనండి, అమ్మండి లేదా కౌలుకు తీసుకోండి.",
        btnPostAd: "+ ప్రకటన ఇవ్వండి",
        bazaarCatLand: "వ్యవసాయ భూమి",
        bazaarCatMachinery: "యంత్రాలు & ట్రాక్టర్లు",
        bazaarCatInfra: "నిర్మాణాలు & గోదాములు",
        bazaarCatLivestock: "పశువులు & జీవాలు",
        bazaarCatSpares: "పాత వాహనాలు & విడిభాగాలు",
        landFilterLabel: "భూమి రకం:",
        landAll: "అన్ని భూములు",
        landSale: "🏷️ అమ్మకానికి (For Sale)",
        landLease: "📜 కౌలుకు (For Lease)",
        catPDS: "రేషన్ దుకాణాలు (PDS)",
        catRythuBazaar: "రైతు బజార్లు",
        catColdStorage: "కోల్డ్ స్టోరేజీలు",
        catSeeds: "విత్తనాల దుకాణాలు",
        catFertilizersShop: "ఎరువుల కేంద్రాలు",
        btnWhereToSell: "ఎక్కడ అమ్మాలి?",
        btnFindMarkets: "మంచి మార్కెట్ వెతకండి",
        quickSelect: "త్వరిత ఎంపిక:",
        transportPageTitle: "🚚 కిసాన్ లాజిస్టిక్స్ — వ్యవసాయ రవాణా వాహనాల బుకింగ్",
        transportPageSub: "మీ పొలం నుండి నేరుగా ఏదైనా మార్కెట్ యార్డ్‌కు స్థిరమైన కిలోమీటర్ ధరకు వాహనాలను బుక్ చేసుకోండి.",
        pickupLocation: "పికప్ ప్రదేశం (మీ పొలం):",
        dropLocation: "చేరవలసిన మార్కెట్ యార్డ్:",
        selectVehicle: "రవాణా వాహనాన్ని ఎంచుకోండి:",
        btnFindDrivers: "రైడర్లను వెతకండి",
        ledgerTitle: "🎙️ కిసాన్ స్మార్ట్ లెడ్జర్ — వాయిస్ ఫార్మ్ అకౌంటింగ్",
        ledgerSub: "తెలుగు, హిందీ లేదా ఇంగ్లీషులో మాట్లాడండి. AI మీ ఖర్చులు మరియు ఆదాయాన్ని ఆటోమేటిక్‌గా పట్టికగా మారుస్తుంది.",
        btnPrintLedger: "ప్రింట్ / PDF సేవ్",
        btnClear: "తొలగించు",
        btnAutoTable: "పట్టికగా మార్చు",
        samplePromptLabel: "నమూనా వాక్యాన్ని ఎంచుకోండి:",
        totalExpenses: "మొత్తం ఖర్చులు",
        totalIncome: "మొత్తం ఆదాయం",
        netProfit: "నికర లాభం / బ్యాలెన్స్",
        thDate: "తేదీ",
        thItem: "వివరము",
        thCategory: "వర్గం",
        thType: "రకం",
        thAmount: "మొత్తం (₹)",
        thNotes: "గమనిక",
        thAction: "చర్య",
        aiPageTitle: "🌾 కిసాన్ AI — పంట డాక్టర్ & వ్యవసాయ సలహాదారు",
        aiPageSub: "పంట తెగుళ్ల నిర్ధారణ కోసం ఫోటోలు అప్‌లోడ్ చేయండి, వాతావరణ సమాచారం మరియు ఎరువుల వివరాలు తెలుసుకోండి.",
        aiGreetingTitle: "నమస్కారం! నేను కిసాన్ AI.",
        aiGreetingDesc: "నేను మీ పంట వ్యాధులను గుర్తించడంలో, వాతావరణ సూచనలు మరియు మార్కెట్ ధరలను విశ్లేషించడంలో సహాయపడతాను.",
        newsSectionTitle: "వ్యవసాయ వార్తలు & ప్రభుత్వ నివేదికలు",
        newsSectionSub: "మార్కెట్ విశ్లేషణ, వర్షపాతం మరియు మద్దతు ధరల తాజా సమాచారం."
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    const dict = i18n[lang] || i18n.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        if (lang === 'hi') searchInput.placeholder = "फसलें, मंडी भाव या रिपोर्ट खोजें...";
        else if (lang === 'te') searchInput.placeholder = "పంటలు, మార్కెట్ వివరాలు వెతకండి...";
        else searchInput.placeholder = "Search crops, mandi reports...";
    }

    calculateProfitSimulation();
}

/* =========================================================
   2. VIEW SWITCHER (HOME, NEWS, MAPS, TRANSPORT, BAZAAR, NOTES, KISAN AI)
========================================================= */
function switchView(viewName) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.dock-item').forEach(btn => btn.classList.remove('active'));

    const ticker = document.getElementById('tickerSection');
    const categoryBar = document.getElementById('categoryBar');
    const myComm = document.querySelector('.my-commodities-container');

    if (viewName === 'home') {
        document.getElementById('homeView').classList.add('active');
        document.getElementById('dockHome').classList.add('active');
        if (ticker) ticker.style.display = 'flex';
        if (categoryBar) categoryBar.style.display = 'flex';
        if (myComm) myComm.style.display = 'flex';
    } else if (viewName === 'news') {
        document.getElementById('newsView').classList.add('active');
        document.getElementById('dockNews').classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';
    } else if (viewName === 'maps') {
        document.getElementById('mapsView').classList.add('active');
        document.getElementById('dockMaps').classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';

        setTimeout(() => {
            initFullAgriMap();
            if (mapInstance) mapInstance.invalidateSize();
        }, 150);
    } else if (viewName === 'transport') {
        document.getElementById('transportView').classList.add('active');
        document.getElementById('dockTransport').classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';
        calculateTransportEstimate();
    } else if (viewName === 'bazaar') {
        document.getElementById('bazaarView').classList.add('active');
        document.getElementById('dockBazaar').classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';
        filterBazaarCategory('land');
    } else if (viewName === 'notes') {
        document.getElementById('notesView').classList.add('active');
        document.getElementById('dockNotes').classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';
        renderFarmLedger();
    } else if (viewName === 'govt') {
        const govtEl = document.getElementById('govtView');
        const dockGovt = document.getElementById('dockGovt');
        if (govtEl) govtEl.classList.add('active');
        if (dockGovt) dockGovt.classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';

        setTimeout(() => {
            initGovtHeatmap();
            if (govtMapInstance) govtMapInstance.invalidateSize();
        }, 150);
    } else if (viewName === 'ai') {
        document.getElementById('aiView').classList.add('active');
        document.getElementById('dockAI').classList.add('active');
        if (ticker) ticker.style.display = 'none';
        if (categoryBar) categoryBar.style.display = 'none';
        if (myComm) myComm.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/* =========================================================
   GOVERNMENT APMC & INFLATION HEATMAP ENGINE
========================================================= */
let govtMapInstance = null;
let govtHeatmapLayers = null;
let currentGovtCrop = 'tomato';
let activeGovtDistrictData = null;

const GOVT_HEATMAP_DATABASE = {
    tomato: [
        { id: "hyd", district: "Hyderabad", lat: 17.3850, lng: 78.4867, todayRetail: 58, todayWholesale: 52, mlBasePrice: 32, bufferStockMT: 4500, status: "red", aiRecommendationMT: 1500, targetPrice: 34 },
        { id: "wgl", district: "Warangal APMC", lat: 17.9784, lng: 79.6005, todayRetail: 48, todayWholesale: 42, mlBasePrice: 30, bufferStockMT: 2800, status: "red", aiRecommendationMT: 800, targetPrice: 32 },
        { id: "kmm", district: "Khammam Mandi", lat: 17.2473, lng: 80.1514, todayRetail: 44, todayWholesale: 38, mlBasePrice: 31, bufferStockMT: 3200, status: "yellow", aiRecommendationMT: 500, targetPrice: 31 },
        { id: "nzb", district: "Nizamabad Terminal", lat: 18.6725, lng: 78.0941, todayRetail: 28, todayWholesale: 24, mlBasePrice: 28, bufferStockMT: 2100, status: "green", aiRecommendationMT: 0, targetPrice: 28 },
        { id: "krm", district: "Karimnagar Market", lat: 18.4386, lng: 79.1288, todayRetail: 31, todayWholesale: 26, mlBasePrice: 29, bufferStockMT: 2400, status: "green", aiRecommendationMT: 0, targetPrice: 29 },
        { id: "nlg", district: "Nalgonda Hub", lat: 17.0500, lng: 79.2700, todayRetail: 46, todayWholesale: 40, mlBasePrice: 29, bufferStockMT: 1800, status: "red", aiRecommendationMT: 600, targetPrice: 30 }
    ],
    onion: [
        { id: "hyd", district: "Hyderabad", lat: 17.3850, lng: 78.4867, todayRetail: 45, todayWholesale: 39, mlBasePrice: 26, bufferStockMT: 6200, status: "red", aiRecommendationMT: 2000, targetPrice: 28 },
        { id: "wgl", district: "Warangal", lat: 17.9784, lng: 79.6005, todayRetail: 36, todayWholesale: 31, mlBasePrice: 25, bufferStockMT: 3400, status: "yellow", aiRecommendationMT: 600, targetPrice: 26 },
        { id: "kmm", district: "Khammam", lat: 17.2473, lng: 80.1514, todayRetail: 26, todayWholesale: 22, mlBasePrice: 25, bufferStockMT: 2900, status: "green", aiRecommendationMT: 0, targetPrice: 25 }
    ],
    chilli: [
        { id: "kmm", district: "Khammam Chilli Hub", lat: 17.2473, lng: 80.1514, todayRetail: 215, todayWholesale: 194, mlBasePrice: 165, bufferStockMT: 14000, status: "red", aiRecommendationMT: 3000, targetPrice: 170 },
        { id: "wgl", district: "Warangal Yard", lat: 17.9784, lng: 79.6005, todayRetail: 198, todayWholesale: 187, mlBasePrice: 160, bufferStockMT: 9500, status: "yellow", aiRecommendationMT: 1500, targetPrice: 165 }
    ],
    paddy: [
        { id: "nlg", district: "Nalgonda Rice Belt", lat: 17.0500, lng: 79.2700, todayRetail: 52, todayWholesale: 44, mlBasePrice: 42, bufferStockMT: 45000, status: "green", aiRecommendationMT: 0, targetPrice: 42 },
        { id: "hyd", district: "Hyderabad Terminal", lat: 17.3850, lng: 78.4867, todayRetail: 58, todayWholesale: 52, mlBasePrice: 44, bufferStockMT: 28000, status: "yellow", aiRecommendationMT: 5000, targetPrice: 46 }
    ]
};

function initGovtHeatmap() {
    if (govtMapInstance) return;
    const mapEl = document.getElementById('govtHeatmap');
    if (!mapEl || typeof L === 'undefined') return;

    govtMapInstance = L.map('govtHeatmap').setView([17.8749, 79.1008], 7.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(govtMapInstance);
    govtHeatmapLayers = L.layerGroup().addTo(govtMapInstance);
    renderGovtHeatmapNodes();
}

function switchGovtHeatmapCrop(cropKey, btnEl) {
    currentGovtCrop = cropKey;
    document.querySelectorAll('.g-cat-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    closeGovtDrawer();
    renderGovtHeatmapNodes();
}

function renderGovtHeatmapNodes() {
    if (!govtMapInstance || !govtHeatmapLayers) return;
    govtHeatmapLayers.clearLayers();
    const districts = GOVT_HEATMAP_DATABASE[currentGovtCrop] || GOVT_HEATMAP_DATABASE['tomato'];

    districts.forEach(d => {
        const color = d.status === 'red' ? '#ef4444' : (d.status === 'yellow' ? '#eab308' : '#22c55e');
        const radius = d.status === 'red' ? 32000 : (d.status === 'yellow' ? 24000 : 18000);

        const circle = L.circle([d.lat, d.lng], { color, fillColor: color, fillOpacity: 0.35, radius }).addTo(govtHeatmapLayers);
        const tagHtml = `<div style="background:${color}; color:white; padding:3px 8px; border-radius:10px; font-weight:800; font-size:10.5px; border:2px solid white; white-space:nowrap; cursor:pointer;">${d.district}: ₹${d.todayRetail}/kg (${d.bufferStockMT} MT)</div>`;
        const icon = L.divIcon({ html: tagHtml, className: 'heat-tag', iconSize: [120, 24] });
        const marker = L.marker([d.lat, d.lng], { icon }).addTo(govtHeatmapLayers);

        const clickHandler = () => {
            govtMapInstance.flyTo([d.lat, d.lng], 10, { duration: 1.2 });
            openGovtBufferDrawer(d);
        };
        circle.on('click', clickHandler);
        marker.on('click', clickHandler);
    });
}

function openGovtBufferDrawer(d) {
    activeGovtDistrictData = d;
    const drawer = document.getElementById('govtBufferDrawer');
    const isRed = d.status === 'red';

    const statusBadge = document.getElementById('gDrawerStatus');
    if (statusBadge) {
        statusBadge.className = `g-status-badge ${d.status}`;
        statusBadge.innerText = isRed ? '🔴 CRITICAL INFLATION SURGE' : (d.status === 'yellow' ? '🟡 MODERATE PRICE WARNING' : '🟢 PRICE STABILIZED');
    }

    const distEl = document.getElementById('gDrawerDistrict');
    const retailEl = document.getElementById('gTodayRetail');
    const wholeEl = document.getElementById('gTodayWholesale');
    const mlEl = document.getElementById('gMLBaseline');
    const stockEl = document.getElementById('gCurrentBufferStock');
    const inflEl = document.getElementById('gInflationRate');
    const recEl = document.getElementById('gAIRecommendationText');

    if (distEl) distEl.innerText = `${d.district} — ${currentGovtCrop.toUpperCase()}`;
    if (retailEl) retailEl.innerText = `₹${d.todayRetail} / kg`;
    if (wholeEl) wholeEl.innerText = `₹${d.todayWholesale} / kg`;
    if (mlEl) mlEl.innerText = `₹${d.mlBasePrice} / kg`;
    if (stockEl) stockEl.innerText = `${d.bufferStockMT.toLocaleString('en-IN')} MT`;

    const variance = Math.round(((d.todayRetail - d.mlBasePrice) / d.mlBasePrice) * 100);
    if (inflEl) inflEl.innerText = `${variance >= 0 ? '+' : ''}${variance}% vs ML Baseline`;

    if (recEl) {
        recEl.innerHTML = isRed
            ? `Artificial retail hoarding detected. Releasing <strong>${d.aiRecommendationMT} MT</strong> from State Buffer will cool prices to ₹${d.targetPrice}/kg.`
            : `Market supply in ${d.district} is stable. No emergency release needed.`;
    }

    const slider = document.getElementById('releaseQtySlider');
    const qtyBubble = document.getElementById('releaseQtyDisplay');
    if (slider) {
        slider.max = d.bufferStockMT;
        slider.value = d.aiRecommendationMT || 500;
        if (qtyBubble) qtyBubble.innerText = `${slider.value} MT`;
    }

    const releaseBtn = document.getElementById('btnExecuteRelease');
    if (releaseBtn) releaseBtn.style.display = (isRed || d.status === 'yellow') ? 'flex' : 'none';
    if (drawer) drawer.classList.add('open');
}

function updateReleaseInput(val) {
    const bubble = document.getElementById('releaseQtyDisplay');
    if (bubble) bubble.innerText = `${parseInt(val).toLocaleString('en-IN')} MT`;
}

function executeBufferRelease() {
    if (!activeGovtDistrictData) return;
    const slider = document.getElementById('releaseQtySlider');
    const releaseQty = slider ? parseInt(slider.value) : 1000;
    const d = activeGovtDistrictData;

    d.bufferStockMT -= releaseQty;
    d.todayRetail = d.targetPrice;
    d.todayWholesale = Math.round(d.targetPrice * 0.9);
    d.status = "green"; // Transitions from RED to GREEN

    alert(`✅ STATE BUFFER RELEASE EXECUTED!\n\n📦 Released: ${releaseQty.toLocaleString('en-IN')} MT into ${d.district}\n📉 Retail Price Cooled: ₹${d.todayRetail} / kg\n🟢 Market Status: Stabilized`);
    closeGovtDrawer();
    renderGovtHeatmapNodes(); // Re-renders the map from Red to Green
}

function closeGovtDrawer() {
    const drawer = document.getElementById('govtBufferDrawer');
    if (drawer) drawer.classList.remove('open');
}
/* =========================================================
   3. KISAN SMART LEDGER & VOICE NOTES (WHISPER FLOW ENGINE)
========================================================= */
let farmLedgerEntries = [
    { item: "Cotton Seeds (పత్తి గింజలు)", category: "Seeds", type: "Expense", amount: 3000, date: "Today", notes: "Bt-Cotton High Yield 2 Packets" },
    { item: "Tractor Plowing (ట్రాక్టర్ ఖర్చు)", category: "Machinery", type: "Expense", amount: 1000, date: "Today", notes: "Field preparation" },
    { item: "Neem Coated Urea (యూరియా బస్తా)", category: "Fertilizer", type: "Expense", amount: 270, date: "Today", notes: "45 kg Subsidized bag" },
    { item: "Basmati Paddy Sale (వరి ధాన్యం అమ్మకం)", category: "Crop Sale", type: "Income", amount: 18500, date: "Today", notes: "Enumamula Mandi Wholesale Sale" }
];

let isRecordingLedger = false;
let ledgerSpeechRec = null;

function renderFarmLedger() {
    const tbody = document.getElementById('ledgerTableBody');
    if (!tbody) return;

    let totalExpense = 0;
    let totalIncome = 0;
    let html = '';

    farmLedgerEntries.forEach((entry, index) => {
        if (entry.type === 'Expense') totalExpense += entry.amount;
        else if (entry.type === 'Income') totalIncome += entry.amount;

        const isExp = entry.type === 'Expense';

        html += `
            <tr>
                <td><i class="fa-regular fa-calendar" style="color:#64748b;"></i> ${entry.date}</td>
                <td><b>${entry.item}</b></td>
                <td><span style="background:#f1f5f9; padding:2px 6px; border-radius:4px; font-weight:600; font-size:11.5px;">${entry.category}</span></td>
                <td><span class="badge-entry ${isExp ? 'expense' : 'income'}">${isExp ? 'Expense (ఖర్చు)' : 'Income (ఆదాయం)'}</span></td>
                <td><span class="amount-txt ${isExp ? 'expense' : 'income'}">${isExp ? '-' : '+'}₹${entry.amount.toLocaleString('en-IN')}</span></td>
                <td style="color:#64748b; font-size:12px;">${entry.notes || '-'}</td>
                <td><button class="btn-del-row" onclick="deleteLedgerRow(${index})" title="Delete"><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    const expEl = document.getElementById('totalExpenseVal');
    const incEl = document.getElementById('totalIncomeVal');
    const profitEl = document.getElementById('netProfitVal');

    if (expEl) expEl.innerText = `₹${totalExpense.toLocaleString('en-IN')}`;
    if (incEl) incEl.innerText = `₹${totalIncome.toLocaleString('en-IN')}`;
    if (profitEl) {
        const netProfit = totalIncome - totalExpense;
        profitEl.innerText = `${netProfit >= 0 ? '+' : ''}₹${netProfit.toLocaleString('en-IN')}`;
        profitEl.style.color = netProfit >= 0 ? '#15803d' : '#dc2626';
    }
}

function processSmartNotesInput() {
    const input = document.getElementById('ledgerTextInput');
    if (!input) return;
    const userText = input.value.trim();
    if (!userText) return;

    const parseBtn = document.querySelector('.btn-parse-ai');
    if (parseBtn) parseBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Structuring Table...`;

    fetch('/api/smart-notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            text: userText,
            language: currentLanguage
        })
    })
    .then(res => res.json())
    .then(data => {
        if (parseBtn) parseBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Structure to Table`;
        if (data.success && data.data && data.data.entries) {
            data.data.entries.forEach(newEntry => {
                farmLedgerEntries.unshift(newEntry);
            });
            renderFarmLedger();
            input.value = '';
        } else {
            alert("Could not extract accounting data. Please try again.");
        }
    })
    .catch(err => {
        if (parseBtn) parseBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Structure to Table`;
        alert("Error connecting to AI Ledger parser.");
    });
}

function sampleVoiceLedger(sampleText) {
    const input = document.getElementById('ledgerTextInput');
    if (input) {
        input.value = sampleText;
        processSmartNotesInput();
    }
}

function toggleLedgerVoiceRecording() {
    const micBtn = document.getElementById('ledgerMicBtn');
    const input = document.getElementById('ledgerTextInput');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Voice recognition is not supported in this browser. Please use Google Chrome or Edge.");
        return;
    }

    if (isRecordingLedger) {
        isRecordingLedger = false;
        if (ledgerSpeechRec) ledgerSpeechRec.stop();
        if (micBtn) micBtn.classList.remove('recording');
        if (input && input.value.trim().length > 0) processSmartNotesInput();
        return;
    }

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    ledgerSpeechRec = new SpeechRec();
    ledgerSpeechRec.continuous = true;
    ledgerSpeechRec.interimResults = true;

    if (currentLanguage === 'hi') ledgerSpeechRec.lang = 'hi-IN';
    else if (currentLanguage === 'te') ledgerSpeechRec.lang = 'te-IN';
    else ledgerSpeechRec.lang = 'en-IN';

    ledgerSpeechRec.onstart = function() {
        isRecordingLedger = true;
        if (micBtn) micBtn.classList.add('recording');
        if (input) input.placeholder = "🎙️ Speaking... Click mic again when finished.";
    };

    ledgerSpeechRec.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        if (input) input.value = transcript;
    };

    ledgerSpeechRec.onend = function() {
        if (isRecordingLedger) {
            try { ledgerSpeechRec.start(); } catch (e) {}
        } else {
            if (micBtn) micBtn.classList.remove('recording');
            if (input) input.placeholder = "Speak or type here...";
        }
    };

    ledgerSpeechRec.start();
}

function deleteLedgerRow(index) {
    farmLedgerEntries.splice(index, 1);
    renderFarmLedger();
}

function clearFarmLedger() {
    if (confirm("Are you sure you want to clear all accounting records?")) {
        farmLedgerEntries = [];
        renderFarmLedger();
    }
}

function printFarmLedger() {
    window.print();
}

/* =========================================================
   4. KISAN BAZAAR (RURAL OLX DATA & FILTER ENGINE)
========================================================= */
let currentBazaarCategory = 'land';
let currentLandSubtype = 'all';

const BAZAAR_LISTINGS_DATABASE = {
    land: [
        {
            id: "LND-01",
            subtype: "sale",
            badgeText: "For Sale",
            badgeClass: "sale",
            title: "4.5 Acres Fertile Red Soil Land with 2 Active Borewells",
            specs: "4.5 Acres • Red Soil • Clear Title • Drip Ready",
            price: "₹24.5 Lakhs",
            priceUnit: "/ Acre",
            location: "Siddipet Rural (Near Gajwel)",
            lat: 18.0950,
            lng: 78.8410,
            ownerName: "M. Narsimha Rao",
            ownerPhone: "+91 98481 22334",
            ownerTag: "Verified Landowner",
            ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
            image: "/static/photos/land1.jpg"
        },
        {
            id: "LND-02",
            subtype: "lease",
            badgeText: "For Lease",
            badgeClass: "lease",
            title: "6.0 Acres Wetland Paddy Farm for 2-Year Lease / Cultivation",
            specs: "6.0 Acres • Canal Irrigation • High Organic Yield",
            price: "₹35,000",
            priceUnit: "/ Acre / Year",
            location: "Miryalaguda, Nalgonda",
            lat: 16.8720,
            lng: 79.5620,
            ownerName: "P. Venkata Reddy",
            ownerPhone: "+91 99890 33445",
            ownerTag: "Fellow Farmer (Lease)",
            ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
            image: "/static/photos/land2.jpg"
        },
        {
            id: "LND-03",
            subtype: "sale",
            badgeText: "For Sale",
            badgeClass: "sale",
            title: "8.0 Acres Black Cotton Soil Farm suitable for Chilli & Cotton",
            specs: "8.0 Acres • High Water Table • Road Facing",
            price: "₹19.0 Lakhs",
            priceUnit: "/ Acre",
            location: "Wyra Road, Khammam",
            lat: 17.2480,
            lng: 80.1420,
            ownerName: "K. Suresh Babu",
            ownerPhone: "+91 94400 55667",
            ownerTag: "Verified Owner",
            ownerAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&q=80",
            image: "/static/photos/land3.webp"
        },
        {
            id: "LND-04",
            subtype: "lease",
            badgeText: "For Lease",
            badgeClass: "lease",
            title: "3.5 Acres Fenced Organic Vegetable Farm for Rent/Cultivation",
            specs: "3.5 Acres • Drip Net Ready • Solar Pump Active",
            price: "₹42,000",
            priceUnit: "/ Acre / Year",
            location: "Shamshabad, Hyderabad Outskirts",
            lat: 17.2450,
            lng: 78.4280,
            ownerName: "G. Sudhakar Reddy",
            ownerPhone: "+91 98660 11223",
            ownerTag: "Direct Farm Owner",
            ownerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
            image: "/static/photos/land4.webp"
        }
    ],
    machinery: [
        {
            id: "MCH-01",
            badgeText: "Used Tractor",
            badgeClass: "machine",
            title: "Mahindra 575 DI (45 HP) Tractor with Rotavator & Cultivator",
            specs: "2021 Model • 820 Hours Run • Brand New Tyres",
            price: "₹4,65,000",
            priceUnit: "Negotiable",
            location: "Enumamula, Warangal",
            lat: 17.9750,
            lng: 79.5980,
            ownerName: "Ch. Lingaiah",
            ownerPhone: "+91 98490 66778",
            ownerTag: "Verified Farmer",
            ownerAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&q=80",
            image: "/static/photos/575di.jpg"
        },
        {
            id: "MCH-02",
            badgeText: "Harvester",
            badgeClass: "machine",
            title: "Kubota DC-68G Multi-Crop Paddy Combined Harvester",
            specs: "2020 Model • Crawler Rubber Tracks • Excellent Condition",
            price: "₹11,80,000",
            priceUnit: "Full Kit",
            location: "Nizamabad North",
            lat: 18.6780,
            lng: 78.0920,
            ownerName: "B. Ashok Kumar",
            ownerPhone: "+91 97000 88990",
            ownerTag: "Custom Hiring Operator",
            ownerAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80",
            image: "/static/photos/kubota.jpg"
        }
    ],
    infrastructure: [
        {
            id: "INF-01",
            badgeText: "Polyhouse for Sale",
            badgeClass: "infra",
            title: "1.0 Acre Naturally Ventilated Polyhouse & Fogger System",
            specs: "1.0 Acre Setup • GI Structure • Suitable for Capsicum/Flowers",
            price: "₹13,50,000",
            priceUnit: "Turnkey Setup",
            location: "Medchal, Hyderabad",
            lat: 17.6320,
            lng: 78.4790,
            ownerName: "Dr. K. Ranga Rao",
            ownerPhone: "+91 99120 44556",
            ownerTag: "Horticulture Grower",
            ownerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
            image: "/static/photos/vent.jpg"
        },
        {
            id: "INF-02",
            badgeText: "Godown for Rent",
            badgeClass: "infra",
            title: "500 MT Ventilated Agri Grain & Produce Warehouse for Lease",
            specs: "4,000 Sq. Ft • Direct Truck Weighbridge Access",
            price: "₹26,000",
            priceUnit: "/ Month",
            location: "Suryapet NH-65 Corridor",
            lat: 17.1500,
            lng: 79.6320,
            ownerName: "V. Govind Reddy",
            ownerPhone: "+91 98480 77889",
            ownerTag: "Verified Warehouse Owner",
            ownerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80"
        }
    ],
    livestock: [
        {
            id: "LST-01",
            badgeText: "Murrah Buffaloes",
            badgeClass: "cattle",
            title: "High-Yield Grade Murrah Buffaloes (Milking 14-16 Litres/Day)",
            specs: "2nd Lactation • 100% Healthy • Vaccinated",
            price: "₹82,000",
            priceUnit: "/ Animal",
            location: "Nalgonda Dairy Belt",
            lat: 17.0610,
            lng: 79.2620,
            ownerName: "Y. Mallaiah Dairy Farm",
            ownerPhone: "+91 99480 55667",
            ownerTag: "Verified Dairy Farmer",
            ownerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
            image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&q=80"
        },
        {
            id: "LST-02",
            badgeText: "Deccani Sheep",
            badgeClass: "cattle",
            title: "Healthy Telangana Deccani Sheep Flock (Batch of 25 Sheep)",
            specs: "Average Weight: 35-40 kg • Dewormed & Tagged",
            price: "₹2,15,000",
            priceUnit: "For 25 Sheep",
            location: "Mahabubnagar Rural",
            lat: 16.7420,
            lng: 77.9940,
            ownerName: "K. Balu Kuruma",
            ownerPhone: "+91 98490 11447",
            ownerTag: "Livestock Producer",
            ownerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
            image: "deccan.jpeg"
        }
    ],
    vehicles_spares: [
        {
            id: "VEH-01",
            badgeText: "Hydraulic Trolley",
            badgeClass: "machine",
            title: "Heavy-Duty 2-Tonne Tractor Hydraulic Tipping Trolley",
            specs: "2022 Build • Heavy Channel Steel • Tipping Jack Ready",
            price: "₹1,15,000",
            priceUnit: "Complete Unit",
            location: "Mankammathota, Karimnagar",
            lat: 18.4320,
            lng: 79.1220,
            ownerName: "T. Srinivas Reddy",
            ownerPhone: "+91 98660 44332",
            ownerTag: "Agri Fabricator",
            ownerAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80",
            image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=500&q=80"
        },
        {
            id: "VEH-02",
            badgeText: "Used Pick-up",
            badgeClass: "machine",
            title: "Mahindra Bolero Maxi Truck Plus (AC 2.5L Diesel)",
            specs: "2019 Model • 68,000 KM • Single Owner • Mandi Permit",
            price: "₹4,25,000",
            priceUnit: "Negotiable",
            location: "Adilabad Bypass",
            lat: 19.6610,
            lng: 78.5290,
            ownerName: "Mohd. Ismail",
            ownerPhone: "+91 94400 88112",
            ownerTag: "Verified Seller",
            ownerAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&q=80",
            image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=500&q=80"
        }
    ]
};

function filterBazaarCategory(categoryKey, buttonEl) {
    currentBazaarCategory = categoryKey;
    if (buttonEl) {
        document.querySelectorAll('.bazaar-cat-pill').forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');
    }

    const landFilterRow = document.getElementById('landSubFilters');
    if (landFilterRow) {
        landFilterRow.style.display = (categoryKey === 'land') ? 'flex' : 'none';
    }

    renderBazaarListings();
}

function filterLandSubtype(subtype, buttonEl) {
    currentLandSubtype = subtype;
    if (buttonEl) {
        document.querySelectorAll('.sub-filter-pill').forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');
    }
    renderBazaarListings();
}

function renderBazaarListings() {
    const container = document.getElementById('bazaarGridContainer');
    if (!container) return;

    let items = BAZAAR_LISTINGS_DATABASE[currentBazaarCategory] || [];

    if (currentBazaarCategory === 'land' && currentLandSubtype !== 'all') {
        items = items.filter(i => i.subtype === currentLandSubtype);
    }

    let html = '';
    items.forEach(item => {
        html += `
            <div class="bazaar-card">
                <div class="bazaar-img-wrap">
                    <img src="${item.image}" alt="${item.title}">
                    <span class="listing-badge ${item.badgeClass}">${item.badgeText}</span>
                </div>

                <div class="bazaar-card-body">
                    <div>
                        <div class="bazaar-price-tag">${item.price} <small>${item.priceUnit}</small></div>
                        <h3 class="bazaar-item-title">${item.title}</h3>
                        <div class="bazaar-specs-tag"><i class="fa-solid fa-list-check"></i> ${item.specs}</div>
                        <div class="bazaar-location-line"><i class="fa-solid fa-location-dot" style="color: #689f38;"></i> ${item.location}</div>
                    </div>

                    <div>
                        <div class="bazaar-seller-strip">
                            <div class="seller-profile-sm">
                                <img src="${item.ownerAvatar}" alt="${item.ownerName}">
                                <div>
                                    <span class="seller-name-txt">${item.ownerName}</span>
                                    <span class="seller-verified-tag"><i class="fa-solid fa-circle-check"></i> ${item.ownerTag}</span>
                                </div>
                            </div>
                        </div>

                        <div class="bazaar-action-btns">
                            <button class="btn-bazaar-map" onclick="showBazaarAssetOnMap(${item.lat}, ${item.lng}, '${item.title}')">
                                <i class="fa-solid fa-map-location-dot"></i> View on Map
                            </button>
                            <a href="tel:${item.ownerPhone}" class="btn-bazaar-call">
                                <i class="fa-solid fa-phone"></i> Call Farmer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function showBazaarAssetOnMap(lat, lng, title) {
    switchView('maps');
    setTimeout(() => {
        if (mapInstance) {
            mapInstance.flyTo([lat, lng], 13, { duration: 1.5 });
            L.popup()
                .setLatLng([lat, lng])
                .setContent(`
                    <div style="font-family: 'Inter', sans-serif;">
                        <h4 style="color: #16a34a; margin: 0 0 4px;"><i class="fa-solid fa-store"></i> ${title}</h4>
                        <span style="font-size: 11px; color: #64748b;">Direct Farmer Listing • Verified Coordinates</span>
                    </div>
                `)
                .openOn(mapInstance);
        }
    }, 300);
}

function openPostAdModal() {
    alert(
        "📝 POST YOUR FARM AD (ఉచిత ప్రకటన ఇవ్వండి):\n\n" +
        "1. Select Asset Type (Land for Sale / Lease, Tractor, Livestock)\n" +
        "2. Upload Farm Photos & Location Pin\n" +
        "3. Enter Your Expected Price & Phone Number\n\n" +
        "Your ad will go live instantly to 10,000+ verified farmers in Telangana!"
    );
}

/* =========================================================
   5. KISAN TRANSPORT / ON-DEMAND DRIVERS DATA ENGINE
========================================================= */
let selectedVehicleCategory = 'tata_ace';

const VEHICLE_RATES_PER_KM = {
    tata_ace: 18,
    bolero: 24,
    leyland_dost: 22,
    eicher_pro: 42
};

const AGRI_DRIVERS_DATA = {
    tata_ace: [
        {
            name: "K. Srinivas Yadav",
            phone: "+91 98480 12345",
            vehicleNum: "TS 08 UB 4120",
            location: "Gudimalkapur Yard, Hyderabad",
            rating: "4.9 ★ (340 trips)",
            experience: "7 Years Agri Freight Exp",
            distance: "2.8 km away (6 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"
        },
        {
            name: "Mohd. Rafiq Ali",
            phone: "+91 97000 45678",
            vehicleNum: "TS 07 UA 9811",
            location: "Bowenpally Market Hub, Secunderabad",
            rating: "4.8 ★ (285 trips)",
            experience: "9 Years Farm Haulage Exp",
            distance: "4.5 km away (11 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
        },
        {
            name: "B. Venkatesh Goud",
            phone: "+91 99890 67890",
            vehicleNum: "TS 09 EC 3329",
            location: "LB Nagar / Kothapet Terminal",
            rating: "4.9 ★ (412 trips)",
            experience: "6 Years Market Yard Transit",
            distance: "5.1 km away (14 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&q=80"
        },
        {
            name: "Ch. Mallesh Kuruma",
            phone: "+91 94400 34567",
            vehicleNum: "TS 08 TA 7741",
            location: "Mehdipatnam Rythu Bazaar Area",
            rating: "4.7 ★ (190 trips)",
            experience: "5 Years Direct Produce Exp",
            distance: "3.2 km away (8 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&q=80"
        }
    ],
    bolero: [
        {
            name: "G. Ravinder Reddy",
            phone: "+91 98660 78912",
            vehicleNum: "TS 08 MB 1944",
            location: "Shamshabad Agri Ring Corridor",
            rating: "5.0 ★ (520 trips)",
            experience: "12 Years Inter-Mandi Freight Exp",
            distance: "3.8 km away (9 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80"
        },
        {
            name: "V. Anjaneyulu",
            phone: "+91 99480 23456",
            vehicleNum: "TS 09 BX 8840",
            location: "Medchal Highway Depot",
            rating: "4.8 ★ (310 trips)",
            experience: "10 Years Heavy Crop Transit",
            distance: "6.2 km away (15 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80"
        },
        {
            name: "P. Shiva Kumar",
            phone: "+91 98490 89012",
            vehicleNum: "TS 07 PA 6120",
            location: "Patancheru Industrial Bypass",
            rating: "4.9 ★ (445 trips)",
            experience: "8 Years Grain & Chilli Transit",
            distance: "4.9 km away (12 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80"
        },
        {
            name: "D. Ramulu Naik",
            phone: "+91 99120 67891",
            vehicleNum: "TS 08 MK 3310",
            location: "Uppal / Ghatkesar Junction",
            rating: "4.7 ★ (225 trips)",
            experience: "6 Years Cold Chain & Farm Haulage",
            distance: "5.7 km away (13 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80"
        }
    ],
    leyland_dost: [
        {
            name: "N. Prasad Rao",
            phone: "+91 98490 33410",
            vehicleNum: "TS 09 AL 2210",
            location: "Kukatpally Wholesale Hub",
            rating: "4.9 ★ (290 trips)",
            experience: "8 Years Produce Transit Exp",
            distance: "4.1 km away (10 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"
        },
        {
            name: "K. Mohan Das",
            phone: "+91 98765 11223",
            vehicleNum: "TS 08 DL 5541",
            location: "Dilsukhnagar Agri Line",
            rating: "4.8 ★ (240 trips)",
            experience: "7 Years Fertilizer & Crop Exp",
            distance: "5.3 km away (12 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
        }
    ],
    eicher_pro: [
        {
            name: "S. Balakrishna",
            phone: "+91 94400 99881",
            vehicleNum: "TS 08 EP 9012",
            location: "Nagole Transport Nagar, Hyderabad",
            rating: "5.0 ★ (610 trips)",
            experience: "15 Years Commercial Bulk Hauling",
            distance: "5.8 km away (14 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80"
        },
        {
            name: "Y. Narayana Murthy",
            phone: "+91 98481 77662",
            vehicleNum: "TS 07 TR 4450",
            location: "Kompally Highway Yard",
            rating: "4.8 ★ (380 trips)",
            experience: "11 Years Heavy Paddy Transit",
            distance: "7.0 km away (16 mins arrival)",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80"
        }
    ]
};

function selectVehicleType(category, cardEl) {
    selectedVehicleCategory = category;
    document.querySelectorAll('.vehicle-card').forEach(card => card.classList.remove('active'));
    if (cardEl) cardEl.classList.add('active');
    calculateTransportEstimate();
}

function calculateTransportEstimate() {
    const destEl = document.getElementById('transportDestination');
    if (!destEl) return;
    const destText = destEl.value;
    let kmMatch = destText.match(/(\d+)\s*km/);
    let distanceKm = kmMatch ? parseInt(kmMatch[1]) : 145;

    const setVal = (id, rate) => {
        const el = document.getElementById(id);
        if (el) el.innerText = `Est: ₹${(distanceKm * rate).toLocaleString('en-IN')}`;
    };

    setVal('est_tata_ace', 18);
    setVal('est_bolero', 24);
    setVal('est_leyland_dost', 22);
    setVal('est_eicher_pro', 42);
}

function searchAgriDrivers() {
    const resultsSection = document.getElementById('driversResultsSection');
    const container = document.getElementById('driversListContainer');
    const title = document.getElementById('driversFoundTitle');
    const destVal = document.getElementById('transportDestination').value;

    let kmMatch = destVal.match(/(\d+)\s*km/);
    let distanceKm = kmMatch ? parseInt(kmMatch[1]) : 145;
    let ratePerKm = VEHICLE_RATES_PER_KM[selectedVehicleCategory] || 18;
    let estimatedTotalFare = distanceKm * ratePerKm;

    const drivers = AGRI_DRIVERS_DATA[selectedVehicleCategory] || AGRI_DRIVERS_DATA['tata_ace'];

    const categoryNames = {
        tata_ace: "Tata Ace Gold / Pro (0.75 Tonne)",
        bolero: "Mahindra Bolero Maxi Truck (1.7 Tonnes)",
        leyland_dost: "Ashok Leyland Dost+ (1.5 Tonnes)",
        eicher_pro: "Eicher Pro Series (5.0 Tonnes)"
    };

    if (title) title.innerText = `${drivers.length} Drivers Ready for ${categoryNames[selectedVehicleCategory]}:`;

    let html = '';
    drivers.forEach((driver) => {
        html += `
            <div class="driver-card">
                <div class="driver-top">
                    <img src="${driver.avatar}" alt="${driver.name}" class="driver-avatar">
                    <div class="driver-meta">
                        <h4>${driver.name}</h4>
                        <span class="driver-veh-tag"><i class="fa-solid fa-truck"></i> ${driver.vehicleNum}</span>
                        <div class="driver-rating">${driver.rating}</div>
                    </div>
                </div>

                <div class="driver-details-list">
                    <div><i class="fa-solid fa-location-crosshairs" style="color: #2563eb;"></i> <b>Location:</b> ${driver.location}</div>
                    <div><i class="fa-solid fa-gauge-high" style="color: #16a34a;"></i> <b>Proximity:</b> ${driver.distance}</div>
                    <div><i class="fa-solid fa-award" style="color: #d97706;"></i> <b>Experience:</b> ${driver.experience}</div>
                    <div><i class="fa-solid fa-receipt" style="color: #64748b;"></i> <b>Est. Trip Fare:</b> ₹${estimatedTotalFare.toLocaleString('en-IN')} (₹${ratePerKm}/km)</div>
                </div>

                <div class="driver-action-row">
                    <a href="tel:${driver.phone}" class="btn-call-driver">
                        <i class="fa-solid fa-phone"></i> Call Driver
                    </a>
                    <button class="btn-book-driver" onclick="bookDriverRide('${driver.name}', '${driver.vehicleNum}', '${driver.phone}', '₹${estimatedTotalFare.toLocaleString('en-IN')}')">
                        <i class="fa-solid fa-bolt"></i> Book Truck Now
                    </button>
                </div>
            </div>
        `;
    });

    if (container) container.innerHTML = html;
    if (resultsSection) {
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function bookDriverRide(driverName, vehicleNum, phone, fare) {
    const randomOtp = Math.floor(1000 + Math.random() * 9000);
    const destEl = document.getElementById('transportDestination');
    const dest = destEl ? destEl.value : "Mandi";

    alert(
        `🎉 TRUCK BOOKING CONFIRMED!\n\n` +
        `🚚 Driver: ${driverName}\n` +
        `🚛 Vehicle: ${vehicleNum}\n` +
        `📞 Phone: ${phone}\n` +
        `📍 Destination: ${dest}\n` +
        `💰 Est. Total Fare: ${fare}\n\n` +
        `🔑 Your Loading OTP: ${randomOtp}\n` +
        `(Share this OTP with driver upon arrival at your farm).`
    );
}

/* =========================================================
   6. USER LOCATION & FULL-SCREEN AGRI MAP ENGINE
========================================================= */
const USER_FARM_LOCATION = {
    name: "My Farm (Xavier)",
    location: "Hyderabad, Telangana",
    lat: 17.3850,
    lng: 78.4867
};

function getDistanceFromUserFarm(targetLat, targetLng) {
    const R = 6371;
    const dLat = (targetLat - USER_FARM_LOCATION.lat) * Math.PI / 180;
    const dLng = (targetLng - USER_FARM_LOCATION.lng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(USER_FARM_LOCATION.lat * Math.PI / 180) * Math.cos(targetLat * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
}

let mapInstance = null;
let currentMarkersGroup = null;
let userMarker = null;
let activeRouteLine = null;

const TELANGANA_AGRI_FACILITIES = {
    pds: [
        { name: "Civil Supplies Central PDS Depot", location: "Secunderabad, Hyderabad", lat: 17.4399, lng: 78.4983, timing: "8:00 AM - 6:00 PM", stock: "Rice: 4,500 MT, Wheat: 1,200 MT", phone: "040-23456789" },
        { name: "Hanamkonda Subsidized Foodgrains Depot", location: "Warangal Urban", lat: 17.9942, lng: 79.5781, timing: "8:30 AM - 5:30 PM", stock: "Fortified Rice & Sugar Available", phone: "0870-2456712" },
        { name: "Khammam District PDS Godown", location: "Wyra Road, Khammam", lat: 17.2510, lng: 80.1450, timing: "9:00 AM - 6:00 PM", stock: "Full Grain Allocation Active", phone: "08742-234190" },
        { name: "Nizamabad Central Ration Terminal", location: "Nizamabad North", lat: 18.6750, lng: 78.0980, timing: "8:00 AM - 5:00 PM", stock: "Coarse Grains & Pulses", phone: "08462-229871" },
        { name: "Karimnagar Food Supplies Depot", location: "Collectorate Area, Karimnagar", lat: 18.4410, lng: 79.1350, timing: "9:00 AM - 6:00 PM", stock: "Direct Beneficiary Stock Ready", phone: "0878-2234510" },
        { name: "Nalgonda District Food Depot", location: "Clock Tower, Nalgonda", lat: 17.0580, lng: 79.2690, timing: "8:00 AM - 6:00 PM", stock: "PDS Rice & Kerosene", phone: "08682-224510" },
        { name: "Mahabubnagar Central Grain Depot", location: "Raichur Road, Mahabubnagar", lat: 16.7450, lng: 77.9980, timing: "9:00 AM - 5:30 PM", stock: "Rice, Jowar & Edible Oils", phone: "08542-241190" },
        { name: "Adilabad Tribal Supply Depot", location: "Collectorate, Adilabad", lat: 19.6680, lng: 78.5390, timing: "8:30 AM - 5:00 PM", stock: "Tribal Subsidized Grains", phone: "08732-230190" },
        { name: "Siddipet Model Ration Godown", location: "Medak Road, Siddipet", lat: 18.1050, lng: 78.8550, timing: "8:00 AM - 6:00 PM", stock: "Digital Biometric Stock Hub", phone: "08457-221900" },
        { name: "Suryapet District Ration Hub", location: "Khammam Road, Suryapet", lat: 17.1480, lng: 79.6280, timing: "9:00 AM - 5:30 PM", stock: "Full State Quota Allocated", phone: "08684-228910" },
        { name: "Mancherial Coal Belt PDS Hub", location: "IB Area, Mancherial", lat: 18.8750, lng: 79.4680, timing: "8:00 AM - 5:00 PM", stock: "Subsidized Ration Grains", phone: "08736-252190" },
        { name: "Jagtial Grain Supply Center", location: "Dharmapuri Road, Jagtial", lat: 18.7980, lng: 78.9160, timing: "8:30 AM - 6:00 PM", stock: "Fortified Rice Supplies", phone: "08724-223400" },
        { name: "Gadwal Civil Supplies Godown", location: "Station Area, Gadwal", lat: 16.2340, lng: 77.8040, timing: "9:00 AM - 5:00 PM", stock: "PDS Grain Storage Active", phone: "08546-271900" },
        { name: "Vikarabad Rural Food Storage", location: "Tandur Road, Vikarabad", lat: 17.3380, lng: 77.9050, timing: "8:30 AM - 5:30 PM", stock: "Direct Supply Stock Ready", phone: "08416-252900" },
        { name: "Kamareddy Central PDS Center", location: "Sircilla Road, Kamareddy", lat: 18.3250, lng: 78.3440, timing: "8:00 AM - 6:00 PM", stock: "State Buffer Stock Center", phone: "08468-223100" }
    ],
    rythu_bazaar: [
        { name: "Mehdipatnam Model Rythu Bazaar", location: "Mehdipatnam, Hyderabad", lat: 17.3916, lng: 78.4416, timing: "5:30 AM - 1:00 PM", stock: "140 Direct Farmer Stalls", phone: "040-23531120" },
        { name: "Hanamkonda Rythu Bazaar", location: "Near Bus Station, Warangal", lat: 18.0125, lng: 79.5512, timing: "6:00 AM - 2:00 PM", stock: "Vegetables, Fresh Herbs & Fruits", phone: "0870-2567890" },
        { name: "Khammam Gandhi Park Rythu Bazaar", location: "Gandhi Park Road, Khammam", lat: 17.2450, lng: 80.1420, timing: "6:00 AM - 1:30 PM", stock: "Fresh Vegetable Arrivals Daily", phone: "08742-245120" },
        { name: "Alwal Rythu Bazaar", location: "Alwal, Secunderabad", lat: 17.5020, lng: 78.5060, timing: "6:00 AM - 1:00 PM", stock: "Farmer Direct Organic Produce", phone: "040-27865120" },
        { name: "Nizamabad Town Rythu Bazaar", location: "Station Road, Nizamabad", lat: 18.6690, lng: 78.0910, timing: "5:30 AM - 2:00 PM", stock: "Direct Producer Trade Stalls", phone: "08462-231190" },
        { name: "Kukatpally Rythu Bazaar", location: "KPHB, Hyderabad", lat: 17.4930, lng: 78.3990, timing: "6:00 AM - 1:00 PM", stock: "95 Fresh Vegetable Sheds", phone: "040-23051900" },
        { name: "Saroornagar Rythu Bazaar", location: "Kothapet, Hyderabad", lat: 17.3620, lng: 78.5410, timing: "5:30 AM - 1:00 PM", stock: "Direct Vegetable & Fruit Farmers", phone: "040-24041120" },
        { name: "Karimnagar Market Rythu Bazaar", location: "Mankammathota, Karimnagar", lat: 18.4360, lng: 79.1250, timing: "6:00 AM - 1:30 PM", stock: "Daily Local Harvest Supply", phone: "0878-2241900" },
        { name: "Siddipet Integrated Rythu Bazaar", location: "Old Bus Stand, Siddipet", lat: 18.1020, lng: 78.8510, timing: "6:00 AM - 2:00 PM", stock: "Clean Modern Farmer Stalls", phone: "08457-224510" },
        { name: "Nalgonda Rythu Bazaar", location: "Clock Tower, Nalgonda", lat: 17.0540, lng: 79.2650, timing: "6:00 AM - 1:00 PM", stock: "Local Village Producer Stalls", phone: "08682-229100" },
        { name: "Mahabubnagar Rythu Bazaar", location: "One Town, Mahabubnagar", lat: 16.7490, lng: 77.9990, timing: "6:00 AM - 1:30 PM", stock: "Farm Fresh Vegetables", phone: "08542-243120" },
        { name: "Jadcherla Farmers Market", location: "Badepally, Jadcherla", lat: 16.7720, lng: 78.1400, timing: "6:00 AM - 1:00 PM", stock: "Direct Farm Produce", phone: "08542-231900" },
        { name: "Suryapet Rythu Bazaar", location: "Kudakuda Road, Suryapet", lat: 17.1420, lng: 79.6210, timing: "5:30 AM - 1:00 PM", stock: "Vegetable Mandi Stalls", phone: "08684-224100" },
        { name: "Adilabad Kisan Market", location: "Netaji Chowk, Adilabad", lat: 19.6640, lng: 78.5310, timing: "6:00 AM - 2:00 PM", stock: "Tribal & Local Farm Harvests", phone: "08732-228190" },
        { name: "Ramagundam NTPC Rythu Bazaar", location: "Jyothinagar, Ramagundam", lat: 18.7610, lng: 79.4820, timing: "6:00 AM - 1:00 PM", stock: "Daily Vegetable Sheds", phone: "08728-271900" }
    ],
    cold_storage: [
        { name: "Khammam Integrated Chilli Mega Cold Storage", location: "Khammam Industrial Estate", lat: 17.2280, lng: 80.1250, timing: "24/7 Operations", stock: "Capacity: 25,000 MT • Available: 6,400 MT", phone: "08742-289120" },
        { name: "Warangal Multi-Crop Agro Cold Chain", location: "Enumamula, Warangal", lat: 17.9650, lng: 79.6120, timing: "24/7 Operations", stock: "Capacity: 18,000 MT • Temp Controlled", phone: "0870-2819001" },
        { name: "Medchal Fresh Produce Cold Chain Hub", location: "Medchal, Hyderabad", lat: 17.6290, lng: 78.4810, timing: "24/7 Operations", stock: "Capacity: 30,000 MT • Humidity Regulated", phone: "040-29871100" },
        { name: "Nizamabad Turmeric Agro Preservation Yard", location: "Armoor Road, Nizamabad", lat: 18.6820, lng: 78.0850, timing: "24/7 Operations", stock: "Capacity: 15,000 MT • Dry Storage", phone: "08462-276120" },
        { name: "Miryalaguda Agro Grain & Pulse Cold Hub", location: "Wadapally Road, Miryalaguda", lat: 16.8650, lng: 79.5650, timing: "24/7 Operations", stock: "Capacity: 20,000 MT", phone: "08689-245190" },
        { name: "Suryapet Modern Agri Cold Storage", location: "NH-65, Suryapet", lat: 17.1520, lng: 79.6350, timing: "24/7 Operations", stock: "Capacity: 12,000 MT for Spices & Fruits", phone: "08684-251900" },
        { name: "Shamshabad Perishable Cargo Cold Hub", location: "Airport Zone, Shamshabad", lat: 17.2410, lng: 78.4310, timing: "24/7 Operations", stock: "Export Grade Cold Storage • 22,000 MT", phone: "040-24008190" },
        { name: "Karimnagar Agro Cold Storage Yard", location: "Manakondur Road, Karimnagar", lat: 18.4210, lng: 79.1550, timing: "24/7 Operations", stock: "Capacity: 14,000 MT", phone: "0878-2290120" },
        { name: "Mahabubnagar Seed & Fruit Cold Preservation", location: "Jadcherla Highway", lat: 16.7620, lng: 78.0820, timing: "24/7 Operations", stock: "Capacity: 10,000 MT", phone: "08542-281900" },
        { name: "Bodhan Multi-Commodity Cold Unit", location: "Bodhan, Nizamabad", lat: 18.6650, lng: 77.8950, timing: "24/7 Operations", stock: "Capacity: 8,000 MT", phone: "08467-224100" },
        { name: "Kodad Spices & Commercial Cold Yard", location: "Huzurnagar Road, Kodad", lat: 16.9950, lng: 79.9650, timing: "24/7 Operations", stock: "Capacity: 16,000 MT", phone: "08654-251120" }
    ],
    seeds: [
        { name: "TSSDC Certified Seeds Apex Center", location: "LB Nagar, Hyderabad", lat: 17.3520, lng: 78.5520, timing: "9:00 AM - 6:00 PM", stock: "Certified Basmati Paddy, Cotton & Pulses", phone: "040-24018890" },
        { name: "Warangal Hybrid Seed & Plant Nursery", location: "Subedari, Warangal", lat: 17.9820, lng: 79.5890, timing: "8:30 AM - 7:00 PM", stock: "High Yield Teja Chilli & Vegetable Seeds", phone: "0870-2541901" },
        { name: "Nizamabad Agri Seed Store & Bio-Inputs", location: "Ganj Road, Nizamabad", lat: 18.6710, lng: 78.1020, timing: "9:00 AM - 6:30 PM", stock: "Certified Turmeric Rhizomes & Soyabean", phone: "08462-238910" },
        { name: "Karimnagar Farm Seed Corporation", location: "Mukarampura, Karimnagar", lat: 18.4420, lng: 79.1310, timing: "8:30 AM - 7:00 PM", stock: "Paddy (MTU 1010, BPT 5204) & Maize", phone: "0878-2239100" },
        { name: "Siddipet Agro Seed & Plant Clinic", location: "Gajwel Road, Siddipet", lat: 18.0980, lng: 78.8450, timing: "9:00 AM - 6:00 PM", stock: "Certified Hybrid Vegetable Seeds", phone: "08457-229100" },
        { name: "Khammam Seed Valley Agency", location: "Trunk Road, Khammam", lat: 17.2520, lng: 80.1490, timing: "8:00 AM - 7:30 PM", stock: "Cotton (Bt-II) & Chilli Hybrid Seeds", phone: "08742-238120" },
        { name: "Mahabubnagar Certified Seed Center", location: "Station Road, Mahabubnagar", lat: 16.7410, lng: 78.0050, timing: "9:00 AM - 6:30 PM", stock: "Groundnut (K-6), Castor & Red Gram", phone: "08542-249100" },
        { name: "Nalgonda Agri Seed Depot", location: "Devarakonda Road, Nalgonda", lat: 17.0450, lng: 79.2780, timing: "8:30 AM - 6:00 PM", stock: "High Germination Paddy & Cotton Seeds", phone: "08682-228190" },
        { name: "Adilabad Cotton Seed Depot", location: "Ganesh Nagar, Adilabad", lat: 19.6710, lng: 78.5250, timing: "9:00 AM - 6:00 PM", stock: "Government Approved Non-GM & Bt Seeds", phone: "08732-234500" },
        { name: "Nirmal Hybrid Nursery & Seeds", location: "Mancherial Road, Nirmal", lat: 19.0980, lng: 78.3450, timing: "8:30 AM - 7:00 PM", stock: "Fruit Grafting Plants & Certified Seeds", phone: "08734-241200" },
        { name: "Zaheerabad Organic Seed Bank", location: "Bidar Road, Zaheerabad", lat: 17.6820, lng: 77.6120, timing: "9:00 AM - 5:30 PM", stock: "Indigenous Millet (Jowar, Ragi) Seeds", phone: "08451-281900" },
        { name: "Jagtial Seed Processing Hub", location: "Kisan Nagar, Jagtial", lat: 18.7910, lng: 78.9050, timing: "8:00 AM - 6:30 PM", stock: "Certified Sesame & Safflower Seeds", phone: "08724-228100" }
    ],
    fertilizers: [
        { name: "IFFCO Farmer Agro Service Center", location: "Kukatpally, Hyderabad", lat: 17.4920, lng: 78.3980, timing: "8:30 AM - 7:30 PM", stock: "Urea (46% N), NPK 19:19:19, Nano Urea", phone: "040-23061120" },
        { name: "Warangal District Agro Fertilizer Agency", location: "Enumamula, Warangal", lat: 17.9710, lng: 79.5950, timing: "8:00 AM - 8:00 PM", stock: "DAP, Potash, Organic Bio-Fertilizers", phone: "0870-2490182" },
        { name: "Khammam PACS Primary Fertilizer Depot", location: "Wyra Gate, Khammam", lat: 17.2490, lng: 80.1580, timing: "8:30 AM - 6:00 PM", stock: "Subsidized Neem Coated Urea & Micronutrients", phone: "08742-231140" },
        { name: "Karimnagar Co-op Fertilizer Warehouse", location: "Mankammathota, Karimnagar", lat: 18.4350, lng: 79.1200, timing: "9:00 AM - 7:00 PM", stock: "Full State Fertilizer Quota Available", phone: "0878-2267190" },
        { name: "Nizamabad District Fertilizer Center", location: "Dubba Area, Nizamabad", lat: 18.6650, lng: 78.1120, timing: "8:00 AM - 7:00 PM", stock: "Zinc Sulphate, Ammonium Phosphate", phone: "08462-229100" },
        { name: "Suryapet Agro Chemical & Fertilizer Store", location: "Main Mandi Road, Suryapet", lat: 17.1460, lng: 79.6150, timing: "8:30 AM - 7:30 PM", stock: "NPK Complexes, Micronutrient Solubles", phone: "08684-221900" },
        { name: "Nalgonda PACS Agri Inputs Store", location: "Miryalaguda Road, Nalgonda", lat: 17.0620, lng: 79.2550, timing: "9:00 AM - 6:00 PM", stock: "Government Subsidized Urea & Potash", phone: "08682-241200" },
        { name: "Mahabubnagar Farmers Fertilizer Hub", location: "Raichur Bypass, Mahabubnagar", lat: 16.7550, lng: 78.0120, timing: "8:00 AM - 8:00 PM", stock: "Nano DAP, Single Super Phosphate", phone: "08542-245100" },
        { name: "Mancherial Agro Chemicals & Urea Depot", location: "Market Yard, Mancherial", lat: 18.8680, lng: 79.4550, timing: "8:30 AM - 6:30 PM", stock: "Neem Coated Urea & Insecticides", phone: "08736-258190" },
        { name: "Wanaparthy Cooperative Fertilizer Depot", location: "Gandhi Chowk, Wanaparthy", lat: 16.3620, lng: 78.0640, timing: "9:00 AM - 6:00 PM", stock: "Direct DBT Fertilizer Distribution", phone: "08543-221900" },
        { name: "Tandur Fertilizer & Pesticide Center", location: "Station Road, Tandur", lat: 17.2580, lng: 77.5850, timing: "8:00 AM - 7:00 PM", stock: "Red Soil Specialty Nutrients & Urea", phone: "08411-272100" },
        { name: "Kamareddy Agro Fertilizer Agency", location: "Nizamsagar Road, Kamareddy", lat: 18.3180, lng: 78.3320, timing: "8:30 AM - 7:00 PM", stock: "Liquid Bio-Fertilizers & NPK", phone: "08468-228900" },
        { name: "Gajwel Model Fertilizer Hub", location: "Pragnapur, Gajwel", lat: 17.8520, lng: 78.6820, timing: "8:30 AM - 6:30 PM", stock: "High Efficiency Controlled Release Fert", phone: "08454-239100" },
        { name: "Bhupalpally PACS Fertilizer Depot", location: "Kaloor Road, Bhupalpally", lat: 18.4350, lng: 79.8620, timing: "9:00 AM - 6:00 PM", stock: "Full Paddy Stage Fertilizer Stock", phone: "08713-241190" },
        { name: "Miryalaguda Fertilizer Terminal", location: "Sagar Road, Miryalaguda", lat: 16.8780, lng: 79.5520, timing: "8:00 AM - 8:00 PM", stock: "Bulk Urea, Potash & DAP Shipments", phone: "08689-241120" }
    ]
};

const CROP_SELLING_MANDIS = {
    chilli: [
        { mandi: "Khammam Chilli Market Yard", district: "Khammam", price: 19400, unit: "Qtl", lat: 17.2473, lng: 80.1514, volume: "24,500 Qtl", advantage: "Highest Price in South India" },
        { mandi: "Enumamula Market Yard", district: "Warangal", price: 18750, unit: "Qtl", lat: 17.9784, lng: 79.6005, volume: "18,400 Qtl", advantage: "Large Buyer Network" },
        { mandi: "Mahabubabad APMC Yard", district: "Mahabubabad", price: 18100, unit: "Qtl", lat: 17.5980, lng: 80.0020, volume: "9,200 Qtl", advantage: "Fast Weighbridge Clearance" },
        { mandi: "Kesamudram Spices Mandi", district: "Mahabubabad", price: 17850, unit: "Qtl", lat: 17.6800, lng: 79.9100, volume: "7,800 Qtl", advantage: "Spot Cash Settlement" },
        { mandi: "Suryapet Red Chilli Yard", district: "Suryapet", price: 17500, unit: "Qtl", lat: 17.1439, lng: 79.6239, volume: "8,500 Qtl", advantage: "Highway Direct Access" }
    ],
    paddy: [
        { mandi: "Nalgonda Central Paddy Mandi", district: "Nalgonda", price: 4450, unit: "Qtl", lat: 17.0500, lng: 79.2700, volume: "22,000 Qtl", advantage: "Highest Basmati Procurement Rate" },
        { mandi: "Miryalaguda Rice Terminal Yard", district: "Miryalaguda", price: 4380, unit: "Qtl", lat: 16.8700, lng: 79.5600, volume: "31,000 Qtl", advantage: "Direct Millers Buying" },
        { mandi: "Warangal Enumamula APMC Yard", district: "Warangal", price: 4100, unit: "Qtl", lat: 17.9784, lng: 79.6005, volume: "15,800 Qtl", advantage: "Standard MSP Benchmark" },
        { mandi: "Karimnagar Paddy Terminal", district: "Karimnagar", price: 4050, unit: "Qtl", lat: 18.4386, lng: 79.1288, volume: "14,200 Qtl", advantage: "Low Queuing Time" },
        { mandi: "Huzurabad Paddy Market", district: "Karimnagar", price: 4020, unit: "Qtl", lat: 18.1950, lng: 79.4050, volume: "11,800 Qtl", advantage: "Fast Moisture Testing" },
        { mandi: "Siddipet Grain Terminal", district: "Siddipet", price: 3980, unit: "Qtl", lat: 18.1018, lng: 78.8520, volume: "9,500 Qtl", advantage: "Direct Civil Supplies Lift" }
    ],
    cotton: [
        { mandi: "Adilabad Cotton Yard", district: "Adilabad", price: 7850, unit: "Qtl", lat: 19.6640, lng: 78.5320, volume: "19,500 Qtl", advantage: "Top Rate for Long Staple Cotton" },
        { mandi: "Enumamula Cotton Terminal", district: "Warangal", price: 7650, unit: "Qtl", lat: 17.9784, lng: 79.6005, volume: "21,000 Qtl", advantage: "CCI Direct Procurement Active" },
        { mandi: "Bhainsa Cotton Market", district: "Nirmal", price: 7520, unit: "Qtl", lat: 19.1920, lng: 77.9620, volume: "14,000 Qtl", advantage: "Active Ginning Millers" },
        { mandi: "Khammam Mandi Yard", district: "Khammam", price: 7400, unit: "Qtl", lat: 17.2473, lng: 80.1514, volume: "12,000 Qtl", advantage: "Quick Settlement" },
        { mandi: "Jammikunta Cotton Yard", district: "Karimnagar", price: 7350, unit: "Qtl", lat: 18.2950, lng: 79.4650, volume: "16,800 Qtl", advantage: "Automated Electronic Auction" },
        { mandi: "Badepally Cotton Yard", district: "Jadcherla", price: 7280, unit: "Qtl", lat: 16.7720, lng: 78.1400, volume: "15,200 Qtl", advantage: "Bangalore Highway Hub" }
    ],
    turmeric: [
        { mandi: "Nizamabad Turmeric Market", district: "Nizamabad", price: 14800, unit: "Qtl", lat: 18.6725, lng: 78.0941, volume: "16,400 Qtl", advantage: "National Benchmark Price" },
        { mandi: "Armoor Spices Yard", district: "Nizamabad", price: 14350, unit: "Qtl", lat: 18.7890, lng: 78.2910, volume: "11,200 Qtl", advantage: "High Curcumin Content Premium" },
        { mandi: "Kesamudram Agri Mandi", district: "Mahabubabad", price: 13900, unit: "Qtl", lat: 17.6800, lng: 79.9100, volume: "8,100 Qtl", advantage: "Active Spice Exporters" },
        { mandi: "Warangal Turmeric Terminal", district: "Warangal", price: 13600, unit: "Qtl", lat: 17.9784, lng: 79.6005, volume: "9,000 Qtl", advantage: "Integrated Drying Yard" }
    ],
    tomato: [
        { mandi: "Bowenpally Agri Terminal", district: "Hyderabad", price: 3400, unit: "Qtl", lat: 17.4727, lng: 78.4867, volume: "35,000 Qtl", advantage: "Massive Urban Retail Demand" },
        { mandi: "Gudimalkapur Wholesale Mandi", district: "Hyderabad", price: 3150, unit: "Qtl", lat: 17.3800, lng: 78.4300, volume: "21,000 Qtl", advantage: "High Fresh Consumption Rate" },
        { mandi: "Warangal Vegetable Yard", district: "Warangal", price: 2800, unit: "Qtl", lat: 17.9900, lng: 79.5800, volume: "14,000 Qtl", advantage: "Steady Daily Inflow" },
        { mandi: "Khammam Vegetable Mandi", district: "Khammam", price: 2650, unit: "Qtl", lat: 17.2473, lng: 80.1514, volume: "11,500 Qtl", advantage: "Coastal Export Demand" }
    ],
    maize: [
        { mandi: "Badepally Maize Yard", district: "Jadcherla", price: 2380, unit: "Qtl", lat: 16.7720, lng: 78.1400, volume: "18,900 Qtl", advantage: "Poultry Feed Millers Hub" },
        { mandi: "Khammam Grain Mandi", district: "Khammam", price: 2310, unit: "Qtl", lat: 17.2473, lng: 80.1514, volume: "14,200 Qtl", advantage: "Starch Factory Procurement" },
        { mandi: "Nizamabad Maize Terminal", district: "Nizamabad", price: 2260, unit: "Qtl", lat: 18.6725, lng: 78.0941, volume: "12,000 Qtl", advantage: "Daily Spot Payments" }
    ],
    groundnut: [
        { mandi: "Gadwal Groundnut Mandi", district: "Jogulamba Gadwal", price: 7450, unit: "Qtl", lat: 16.2300, lng: 77.8000, volume: "16,000 Qtl", advantage: "High Oil Recovery Premium" },
        { mandi: "Mahabubnagar Groundnut Yard", district: "Mahabubnagar", price: 7280, unit: "Qtl", lat: 16.7488, lng: 78.0035, volume: "13,500 Qtl", advantage: "Oil Mill Direct Bidding" },
        { mandi: "Wanaparthy Oilseed Market", district: "Wanaparthy", price: 7120, unit: "Qtl", lat: 16.3600, lng: 78.0600, volume: "9,800 Qtl", advantage: "Quick Weighment" }
    ]
};

function renderUserLocationMarker() {
    if (!mapInstance) return;

    const userHtml = `
        <div class="user-location-pin" title="Your Farm: Xavier (Hyderabad)">
            <i class="fa-solid fa-house-user"></i>
        </div>
    `;

    const userIcon = L.divIcon({
        html: userHtml,
        className: 'user-pin-wrapper',
        iconSize: [38, 38],
        iconAnchor: [19, 19]
    });

    if (userMarker) {
        userMarker.setLatLng([USER_FARM_LOCATION.lat, USER_FARM_LOCATION.lng]);
    } else {
        userMarker = L.marker([USER_FARM_LOCATION.lat, USER_FARM_LOCATION.lng], { icon: userIcon }).addTo(mapInstance);
        userMarker.bindPopup(`
            <div style="font-family: 'Inter', sans-serif;">
                <h4 style="color: #2563eb; margin: 0 0 4px;"><i class="fa-solid fa-location-dot"></i> My Farm (Xavier)</h4>
                <p style="margin: 0; font-size: 12px; color: #64748b;">${USER_FARM_LOCATION.location}</p>
                <span style="font-size: 10px; background: #dbeafe; color: #1e40af; padding: 2px 6px; border-radius: 4px; font-weight: bold; margin-top: 4px; display: inline-block;">Current Origin</span>
            </div>
        `);
    }
}

function initFullAgriMap() {
    if (mapInstance) return;
    if (typeof L === 'undefined') return;

    mapInstance = L.map('telanganaMap', { zoomControl: true }).setView([17.8749, 79.1008], 7.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors | KisanBulletin Agri-Geo Intelligence'
    }).addTo(mapInstance);

    currentMarkersGroup = L.layerGroup().addTo(mapInstance);
    renderUserLocationMarker();
    filterMapCategory('pds');
}

function filterMapCategory(categoryKey, buttonEl) {
    if (buttonEl) {
        document.querySelectorAll('.map-cat-pill').forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');
    }
    const sellBar = document.getElementById('whereToSellBar');
    if (sellBar) sellBar.style.display = 'none';
    closeMapDrawer();

    if (activeRouteLine && mapInstance) {
        mapInstance.removeLayer(activeRouteLine);
        activeRouteLine = null;
    }

    if (!mapInstance || !currentMarkersGroup) return;
    currentMarkersGroup.clearLayers();
    renderUserLocationMarker();

    const data = TELANGANA_AGRI_FACILITIES[categoryKey] || [];
    const categoryLabels = {
        pds: { title: "PDS Ration Shop", color: "#16a34a", icon: "fa-landmark" },
        rythu_bazaar: { title: "Rythu Bazaar", color: "#0284c7", icon: "fa-basket-shopping" },
        cold_storage: { title: "Cold Storage", color: "#0ea5e9", icon: "fa-snowflake" },
        seeds: { title: "Seed Center", color: "#65a30d", icon: "fa-seedling" },
        fertilizers: { title: "Fertilizer Depot", color: "#9333ea", icon: "fa-flask" }
    };

    const catMeta = categoryLabels[categoryKey] || { title: "Agri Facility", color: "#689f38", icon: "fa-location-dot" };

    data.forEach(item => {
        const customMarkerHtml = `
            <div style="background: ${catMeta.color}; color: white; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 2px solid white; cursor: pointer;">
                <i class="fa-solid ${catMeta.icon}" style="font-size: 14px;"></i>
            </div>
        `;

        const customIcon = L.divIcon({
            html: customMarkerHtml,
            className: 'custom-pin',
            iconSize: [34, 34],
            iconAnchor: [17, 34]
        });

        const marker = L.marker([item.lat, item.lng], { icon: customIcon }).addTo(currentMarkersGroup);
        
        marker.on('click', () => {
            mapInstance.flyTo([item.lat, item.lng], 12, { duration: 1.2 });
            openFacilityDrawer(item, catMeta);
        });
    });
}

function openFacilityDrawer(item, meta) {
    const drawer = document.getElementById('mapInfoDrawer');
    const distanceKm = getDistanceFromUserFarm(item.lat, item.lng);

    const badgeEl = document.getElementById('drawerTypeBadge');
    const titleEl = document.getElementById('drawerPlaceName');
    const bodyEl = document.getElementById('drawerBody');

    if (badgeEl) {
        badgeEl.innerText = meta.title;
        badgeEl.style.background = meta.color + '22';
        badgeEl.style.color = meta.color;
    }
    if (titleEl) titleEl.innerText = item.name;

    if (bodyEl) {
        bodyEl.innerHTML = `
            <div class="drawer-detail-line"><i class="fa-solid fa-location-dot"></i> <span><b>Location:</b> ${item.location}</span></div>
            <div class="drawer-detail-line"><i class="fa-regular fa-clock"></i> <span><b>Timings:</b> ${item.timing}</span></div>
            <div class="drawer-detail-line"><i class="fa-solid fa-boxes-stacked"></i> <span><b>Availability:</b> ${item.stock}</span></div>
            <div class="drawer-detail-line"><i class="fa-solid fa-phone"></i> <span><b>Contact:</b> ${item.phone}</span></div>
            <div class="drawer-detail-line"><i class="fa-solid fa-route"></i> <span><b>Distance:</b> ${distanceKm} km from your farm in Hyderabad</span></div>
            
            <div class="nav-buttons-row">
                <button class="btn-directions" onclick="drawRouteToDestination(${item.lat}, ${item.lng})">
                    <i class="fa-solid fa-route"></i> View Route
                </button>
                <button class="btn-directions btn-google-nav" onclick="openGoogleMapsNavigation(${item.lat}, ${item.lng})">
                    <i class="fa-solid fa-diamond-turn-right"></i> Google Maps GPS
                </button>
            </div>
        `;
    }

    if (drawer) drawer.classList.add('open');
}

function drawRouteToDestination(destLat, destLng) {
    if (activeRouteLine && mapInstance) {
        mapInstance.removeLayer(activeRouteLine);
    }

    const latlngs = [
        [USER_FARM_LOCATION.lat, USER_FARM_LOCATION.lng],
        [destLat, destLng]
    ];

    activeRouteLine = L.polyline(latlngs, {
        color: '#2563eb',
        weight: 5,
        dashArray: '8, 8',
        opacity: 0.9
    }).addTo(mapInstance);

    mapInstance.fitBounds(L.latLngBounds(latlngs), { padding: [60, 60] });
}

function openGoogleMapsNavigation(destLat, destLng) {
    const origin = `${USER_FARM_LOCATION.lat},${USER_FARM_LOCATION.lng}`;
    const destination = `${destLat},${destLng}`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
}

/* ================= "WHERE TO SELL?" ENGINE ================= */
function openWhereToSellMode(buttonEl) {
    document.querySelectorAll('.map-cat-pill').forEach(btn => btn.classList.remove('active'));
    if (buttonEl) buttonEl.classList.add('active');

    const sellBar = document.getElementById('whereToSellBar');
    if (sellBar) sellBar.style.display = 'block';
    
    if (currentMarkersGroup) currentMarkersGroup.clearLayers();
    closeMapDrawer();
    if (activeRouteLine && mapInstance) {
        mapInstance.removeLayer(activeRouteLine);
        activeRouteLine = null;
    }

    renderUserLocationMarker();
    if (mapInstance) mapInstance.setView([17.8749, 79.1008], 7.5);
}

function searchCropSelling(cropName) {
    const input = document.getElementById('sellCropInput');
    if (input) input.value = cropName;
    executeWhereToSellSearch();
}

function executeWhereToSellSearch() {
    const input = document.getElementById('sellCropInput');
    if (!input) return;
    const rawInput = input.value.toLowerCase().trim();
    if (!rawInput) {
        alert("Please enter a crop name (e.g. Chilli, Paddy, Cotton, Turmeric, Tomato, Maize, Groundnut)");
        return;
    }

    let matchedCropKey = Object.keys(CROP_SELLING_MANDIS).find(k => rawInput.includes(k) || k.includes(rawInput));
    if (!matchedCropKey) matchedCropKey = 'paddy';

    const mandiList = CROP_SELLING_MANDIS[matchedCropKey] || [];
    const sortedMandis = [...mandiList].sort((a, b) => b.price - a.price);

    if (currentMarkersGroup) currentMarkersGroup.clearLayers();
    renderUserLocationMarker();

    sortedMandis.forEach((mandi, index) => {
        const isTopPrice = index === 0;
        const pinColor = isTopPrice ? "#16a34a" : "#0284c7";

        const markerHtml = `
            <div style="background: ${pinColor}; color: white; padding: 4px 8px; border-radius: 12px; font-weight: 800; font-size: 11px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 2px solid white; display: flex; align-items: center; gap: 4px; white-space: nowrap;">
                ${isTopPrice ? '⭐ ' : ''}₹${mandi.price.toLocaleString('en-IN')}
            </div>
        `;

        const icon = L.divIcon({
            html: markerHtml,
            className: 'price-pin',
            iconSize: [80, 30],
            iconAnchor: [40, 15]
        });

        const marker = L.marker([mandi.lat, mandi.lng], { icon: icon }).addTo(currentMarkersGroup);
        marker.on('click', () => {
            drawRouteToDestination(mandi.lat, mandi.lng);
        });
    });

    const drawer = document.getElementById('mapInfoDrawer');
    const badgeEl = document.getElementById('drawerTypeBadge');
    const titleEl = document.getElementById('drawerPlaceName');
    const bodyEl = document.getElementById('drawerBody');

    if (badgeEl) {
        badgeEl.innerText = `Best Selling Markets for ${matchedCropKey.toUpperCase()}`;
        badgeEl.style.background = "#dcfce7";
        badgeEl.style.color = "#15803d";
    }
    if (titleEl) titleEl.innerText = `Highest Price First (${sortedMandis.length} Active APMC Mandis)`;

    let listHtml = `<div style="font-size: 12px; color: #64748b; margin-bottom: 12px;">Markets automatically sorted by highest payout per Quintal:</div>`;

    sortedMandis.forEach((mandi, i) => {
        const isTop = i === 0;
        const distKm = getDistanceFromUserFarm(mandi.lat, mandi.lng);

        listHtml += `
            <div class="ranked-mandi-card ${isTop ? 'top-rank' : ''}" onclick="drawRouteToDestination(${mandi.lat}, ${mandi.lng})">
                <div class="rank-row">
                    <span class="rank-badge">${isTop ? '🏆 BEST PRICE' : '#' + (i + 1) + ' Mandi'}</span>
                    <span class="mandi-price-val">₹${mandi.price.toLocaleString('en-IN')} <small style="font-size: 10px; color: #64748b;">/ ${mandi.unit}</small></span>
                </div>
                <div style="font-weight: 700; font-size: 13.5px; color: #0f172a;">${mandi.mandi}</div>
                <div style="font-size: 11.5px; color: #64748b; margin: 3px 0;"><i class="fa-solid fa-location-dot"></i> ${mandi.district} • ${distKm} km from Hyderabad • Vol: ${mandi.volume}</div>
                <div style="font-size: 11.5px; color: #16a34a; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> ${mandi.advantage}</div>
                <div class="nav-buttons-row">
                    <button class="btn-directions btn-google-nav" onclick="event.stopPropagation(); openGoogleMapsNavigation(${mandi.lat}, ${mandi.lng})">
                        <i class="fa-solid fa-diamond-turn-right"></i> Open GPS Navigation
                    </button>
                </div>
            </div>
        `;
    });

    if (bodyEl) bodyEl.innerHTML = listHtml;
    if (drawer) drawer.classList.add('open');

    if (sortedMandis.length > 0 && mapInstance) {
        drawRouteToDestination(sortedMandis[0].lat, sortedMandis[0].lng);
    }
}

function closeMapDrawer() {
    const drawer = document.getElementById('mapInfoDrawer');
    if (drawer) drawer.classList.remove('open');
    if (activeRouteLine && mapInstance) {
        mapInstance.removeLayer(activeRouteLine);
        activeRouteLine = null;
    }
}

/* =========================================================
   7. KISAN AI & PLANT DOCTOR (IMAGE, TEXT, CONTINUOUS VOICE)
========================================================= */
let currentUploadedBase64 = null;
let isRecordingVoice = false;
let speechRecognition = null;
let finalAccumulatedTranscript = '';

function handleImageSelection(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        currentUploadedBase64 = e.target.result;
        const thumb = document.getElementById('imagePreviewThumb');
        const name = document.getElementById('imagePreviewName');
        const bar = document.getElementById('imagePreviewBar');
        if (thumb) thumb.src = currentUploadedBase64;
        if (name) name.innerText = file.name;
        if (bar) bar.style.display = 'flex';
    };
    reader.readAsDataURL(file);
}

function clearImageUpload() {
    currentUploadedBase64 = null;
    const fileInput = document.getElementById('aiImageInput');
    const bar = document.getElementById('imagePreviewBar');
    if (fileInput) fileInput.value = '';
    if (bar) bar.style.display = 'none';
}

function quickAsk(text) {
    const input = document.getElementById('aiTextInput');
    if (input) input.value = text;
    sendAIMessage();
}

function toggleVoiceRecording() {
    const micBtn = document.getElementById('voiceMicBtn');
    const textInput = document.getElementById('aiTextInput');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Voice recognition is not supported on this browser. Please use Chrome or Edge.");
        return;
    }

    if (isRecordingVoice) {
        isRecordingVoice = false;
        if (speechRecognition) speechRecognition.stop();
        if (micBtn) micBtn.classList.remove('recording');
        if (textInput) textInput.placeholder = "Ask Kisan AI or upload a crop photo...";

        if (textInput && textInput.value.trim().length > 0) sendAIMessage();
        return;
    }

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    speechRecognition = new SpeechRec();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;

    finalAccumulatedTranscript = textInput && textInput.value ? textInput.value + ' ' : '';

    if (currentLanguage === 'hi') speechRecognition.lang = 'hi-IN';
    else if (currentLanguage === 'te') speechRecognition.lang = 'te-IN';
    else speechRecognition.lang = 'en-IN';

    speechRecognition.onstart = function() {
        isRecordingVoice = true;
        if (micBtn) micBtn.classList.add('recording');
        if (textInput) textInput.placeholder = "🎙️ Listening continuously... Click mic again when done to send.";
    };

    speechRecognition.onresult = function(event) {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalAccumulatedTranscript += event.results[i][0].transcript + ' ';
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        if (textInput) textInput.value = (finalAccumulatedTranscript + interimTranscript).trim();
    };

    speechRecognition.onerror = function(err) {
        if (err.error === 'not-allowed') {
            isRecordingVoice = false;
            if (micBtn) micBtn.classList.remove('recording');
            alert("Microphone permission denied.");
        }
    };

    speechRecognition.onend = function() {
        if (isRecordingVoice) {
            try { speechRecognition.start(); } catch (e) {}
        } else {
            if (micBtn) micBtn.classList.remove('recording');
            if (textInput) textInput.placeholder = "Ask Kisan AI or upload a crop photo...";
        }
    };

    speechRecognition.start();
}

function sendAIMessage() {
    if (isRecordingVoice) {
        isRecordingVoice = false;
        if (speechRecognition) speechRecognition.stop();
        const micBtn = document.getElementById('voiceMicBtn');
        if (micBtn) micBtn.classList.remove('recording');
    }

    const input = document.getElementById('aiTextInput');
    const chatBox = document.getElementById('aiChatBox');
    if (!input || !chatBox) return;

    const userText = input.value.trim();
    if (!userText && !currentUploadedBase64) return;

    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'chat-msg user';
    let imageHtml = currentUploadedBase64 ? `<img src="${currentUploadedBase64}" class="chat-img-thumb" alt="Uploaded plant leaf">` : '';
    userMsgDiv.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-user"></i></div>
        <div class="msg-bubble">
            ${imageHtml}
            <span>${userText || "Diagnose this crop photo"}</span>
        </div>
    `;
    chatBox.appendChild(userMsgDiv);

    input.value = '';
    finalAccumulatedTranscript = '';
    const imagePayload = currentUploadedBase64;
    clearImageUpload();
    chatBox.scrollTop = chatBox.scrollHeight;

    const botLoadingDiv = document.createElement('div');
    botLoadingDiv.className = 'chat-msg ai';
    botLoadingDiv.id = 'aiTypingIndicator';
    botLoadingDiv.innerHTML = `
        <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
        <div class="msg-bubble">
            <i class="fa-solid fa-spinner fa-spin"></i> Analyzing with Kisan AI...
        </div>
    `;
    chatBox.appendChild(botLoadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: userText,
            image: imagePayload,
            language: currentLanguage
        })
    })
    .then(res => res.json())
    .then(data => {
        const typingEl = document.getElementById('aiTypingIndicator');
        if (typingEl) typingEl.remove();

        const botReplyDiv = document.createElement('div');
        botReplyDiv.className = 'chat-msg ai';
        
        let formattedReply = data.reply
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');

        botReplyDiv.innerHTML = `
            <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="msg-bubble">${formattedReply}</div>
        `;
        chatBox.appendChild(botReplyDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(err => {
        const typingEl = document.getElementById('aiTypingIndicator');
        if (typingEl) typingEl.remove();

        const errDiv = document.createElement('div');
        errDiv.className = 'chat-msg ai';
        errDiv.innerHTML = `
            <div class="msg-avatar"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <div class="msg-bubble" style="color: #dc2626;">Unable to connect to Kisan AI service. Please check your backend.</div>
        `;
        chatBox.appendChild(errDiv);
    });
}

/* =========================================================
   8. PROFIT SIMULATOR FUNCTION
========================================================= */
function calculateProfitSimulation() {
    const cropEl = document.getElementById('simCrop');
    const qtyEl = document.getElementById('simQuantity');
    const output = document.getElementById('simResultOutput');

    if (!cropEl || !qtyEl || !output) return;

    const crop = cropEl.value;
    const qty = parseFloat(qtyEl.value) || 0;
    const profitPerQtl = { paddy: 750, chilli: 3900, cotton: 850 };
    const extra = qty * (profitPerQtl[crop] || 0);

    output.innerHTML = `You could earn an extra <strong>₹${extra.toLocaleString('en-IN')}</strong> by holding!`;
}

/* =========================================================
   9. SIDEBAR & TICKER CONTROLS
========================================================= */
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function handleLogout() {
    localStorage.removeItem('kisanUserRole');
    localStorage.removeItem('kisanUserName');
    alert("You have logged out successfully.");
    window.location.href = "/";
}

let currentSlide = 0;
const totalSlides = 3;
let autoScrollTimer = null;

function updateSlideView() {
    const track = document.getElementById('tickerTrack');
    const dots = document.querySelectorAll('.ticker-dots .dot');

    if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        if (index === currentSlide) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlideView();
    resetAutoScroll();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlideView();
    resetAutoScroll();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlideView();
    resetAutoScroll();
}

function startAutoScroll() {
    if (autoScrollTimer) clearInterval(autoScrollTimer);
    autoScrollTimer = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlideView();
    }, 5000);
}

function resetAutoScroll() {
    clearInterval(autoScrollTimer);
    startAutoScroll();
}

startAutoScroll();

function filterCategory(category, buttonEl) {
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    if (buttonEl) buttonEl.classList.add('active');

    const cards = document.querySelectorAll('.commodity-card');
    cards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) card.style.display = 'block';
        else card.style.display = 'none';
    });
}

function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.commodity-card');

    cards.forEach(card => {
        const titleEl = card.querySelector('.comm-title');
        if (titleEl) {
            const titleText = titleEl.innerText.toLowerCase();
            if (titleText.includes(query)) card.style.display = 'block';
            else card.style.display = 'none';
        }
    });
}

/* =========================================================
   11. INITIALIZATION & DUAL-ROLE ACCESS CONTROL
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    calculateProfitSimulation();
    renderFarmLedger();

    const urlParams = new URLSearchParams(window.location.search);
    let roleParam = urlParams.get('role');
    
    if (roleParam) {
        localStorage.setItem('kisanUserRole', roleParam);
    } else {
        roleParam = localStorage.getItem('kisanUserRole') || 'farmer';
    }

    const userName = localStorage.getItem('kisanUserName') || 'Xavier';
    const profileNameEl = document.getElementById('sidebarProfileName');
    const roleTagEl = document.getElementById('sidebarRoleTag');
    const portalRoleBadge = document.getElementById('portalRoleBadge');
    const dockGovt = document.getElementById('dockGovt');

    if (profileNameEl) profileNameEl.innerText = userName;

    if (roleParam === 'govt') {
        // ================= GOVERNMENT MODE =================
        if (roleTagEl) roleTagEl.innerText = "Authorized Government Official • APMC & Civil Supplies";
        if (portalRoleBadge) {
            portalRoleBadge.className = 'portal-role-pill govt';
            portalRoleBadge.innerHTML = '<i class="fa-solid fa-building-columns"></i> <span>Govt Official Portal</span>';
        }
        if (dockGovt) dockGovt.style.display = 'flex'; // Show Govt APMC icon
        switchView('govt');
    } else {
        // ================= PUBLIC / FARMER MODE (xavier_123) =================
        if (roleTagEl) roleTagEl.innerText = "Verified Public Farmer • ID: #KB-88219";
        if (portalRoleBadge) {
            portalRoleBadge.className = 'portal-role-pill';
            portalRoleBadge.innerHTML = '<i class="fa-solid fa-tractor"></i> <span>Farmer Portal</span>';
        }
        if (dockGovt) dockGovt.style.display = 'none'; // 🚫 HIDE Govt APMC icon from farmers!
        switchView('home');
    }
});
