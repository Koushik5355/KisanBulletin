# KisanBulletin
 KisanBulletin is an AI-powered agri-intelligence platform bridging farmers and government. It empowers farmers with Gemini crop diagnosis, voice-to-table bookkeeping, predictive mandi prices, on-demand transport, and a rural P2P marketplace, while providing authorities a live inflation heatmap and AI buffer stock control

 System Architecture :

=============================================================================================
                                PRESENTATION LAYER (Client Browser)
=============================================================================================
  +---------------------------------------------------------------------------------------+
  |  • Multi-View SPA Engine (Vanilla JS Router / switchView)                             |
  |  • Glassmorphic UI & Dynamic Dual-Theming (Farmer Green vs Govt Blue)                |
  |  • Interactive GIS & Spatial Mapping (Leaflet.js + OpenStreetMap Vector Tiles)        |
  |  • Client-Side Speech Processing (HTML5 Web Speech API - SpeechRecognition)           |
  |  • Dynamic Tri-Lingual Localization Layer (English, Hindi, Telugu)                    |
  +-------------------------------------------+-------------------------------------------+
                                              |
                                     JSON / REST (HTTP / HTTPS)
                                              |
=============================================================================================
                                APPLICATION BACKEND (Flask 3.0+)
=============================================================================================
  +-------------------------------------------v-------------------------------------------+
  |  Flask Gateway (app.py)                                                               |
  |  • Endpoint Dispatcher & Role-Based Session Controller                                |
  |  • Haversine Geographic Distance Calculator                                           |
  |  • Persistent HTTP Connection Pooling (requests.Session)                              |
  |  • Strict Agricultural System Instruction Sanitizer                                   |
  |  • Smart Fallback Engine for Offline/High-Latency Fault Tolerance                     |
  +-------------------------------------------+-------------------------------------------+
                                              |
                     +------------------------+------------------------+
                     |                                                 |
=====================v=================================================v=====================
            EXTERNAL AI & INTELLIGENCE                            EXTERNAL MAP SERVICES
=============================================================================================
  +-----------------------------------------+       +---------------------------------------+
  |  Google Gemini 2.5 Flash REST API       |       |  OpenStreetMap & Google Maps Services |
  |  • Multimodal Leaf Pathology Engine     |       |  • Tile Streaming (OSM Standard)      |
  |  • Indic NLP & Multilingual Extraction |       |  • Google Maps Universal GPS Scheme   |
  |  • JSON Schema Enforcement for Ledgers  |       |  • Dynamic Polyline Routing Layers    |
  +-----------------------------------------+       +---------------------------------------+

About Login Page:
  [Farmer / Govt Officer]
       │
       ▼
┌──────────────────┐
│  Authentication  │ ──► Sets Role in LocalStorage & URL Parameter
└────────┬─────────┘
         │
         ├───► [ROLE: FARMER] ──► Loads Farmer Home, AI Advisor, Logistics, P2P Bazaar, Voice Ledger
         │
         └───► [ROLE: GOVT]   ──► Unlocks Govt Blue Theme, Inflation Heatmap, AI Buffer Release

  Detailed Feature-by-Feature Technical Flow
1. Dual-Role Authentication & Dynamic Theming
Module: templates/login.html, static/js/home.js, app.py
Workflow:
User Authentication: The client submits credentials (xavier_123 / kisan123 for Farmer or govt_officer / admin123 for Government).
Session Storage: The client-side controller persists kisanUserRole and kisanUserName in localStorage.
URL Redirection: The server route dispatches /home?role=farmer or /home?role=govt.
DOM Mutation & Role Activation:
Farmer Mode: Theme defaults to Green (#689f38), the Government APMC button (#dockGovt) is removed from the DOM, and sidebar profile data renders farmer details (Xavier, ID: #KB-88219, Hyderabad, Telangana).
Government Mode: Injects govt class to navbar (switching theme to Blue #0284c7), renders Government Portal Badge, unlocks the #dockGovt dock icon, and sets sidebar details to Dr. K. V. Rao (APMC Director).
2. Kisan AI Assistant & Multimodal Crop Doctor
Module: app.py (/api/ai-chat), static/js/home.js
Workflow:
Input Capture: The user provides an input via:
Text: Native text field input.
Image: HTML5 FileReader encodes uploaded plant/leaf photos into Base64 strings.
Voice: Continuous Web Speech API transcribes live audio in Telugu (te-IN), Hindi (hi-IN), or English (en-IN).
Payload Construction: The client dispatches a POST request to /api/ai-chat containing { message, image, language }.
Backend Processing:
app.py attaches AGRI_SYSTEM_INSTRUCTION (enforcing strict domain guardrails, prohibiting off-topic answers, and disabling conversational stalling/counter-questions).
If an image exists, it converts the Base64 string to a binary payload with mime_type="image/jpeg".
Gemini Execution: Dispatches to Google Gemini 2.5 Flash endpoint (maxOutputTokens: 8192, temperature: 0.3).
Client Rendering: Formats markdown output (bold tags, lists, linebreaks) and appends it to the chat container #aiChatBox.
Fault-Tolerant Fallback: If network latency exceeds timeout thresholds, an intelligent heuristic engine answers directly using local APMC market datasets.
3. Voice-to-Table Farm Ledger (Whisper Flow Accounting)
Module: app.py (/api/smart-notes), static/js/home.js, templates/home.html
Workflow:
Voice Dictation: The farmer speaks natural transactions (e.g., "pathi ginjalu mudu vela rupayalu, tractor karchu veyi rupayalu").
Continuous Speech Recognition: The browser accumulates the transcript live without stopping during speech pauses.
AI Structured Parsing (/api/smart-notes):
Dispatches the raw spoken string to Gemini with system_ledger_prompt and responseMimeType: "application/json".
The model parses Indic number systems (mudu vela 
→
→
 3000, veyi 
→
→
 1000, do hazar 
→
→
 2000), assigns transaction types (Expense vs. Income), and categorizes items (Seeds, Fertilizer, Machinery, Labor, Crop Sale).
Dynamic Table & Metrics Update:
Client parses the structured JSON payload.
Injects rows into #farmLedgerTable with colored badges (Red for Expense, Green for Income).
Recomputes Total Expenses, Total Revenue, and Net Profit/Loss.
Export: Offers native window.print() rendering to save or print the ledger as a physical PDF/receipt.
4. Full-Screen Interactive GIS & "Where to Sell?" Engine
Module: static/js/home.js, Leaflet.js, OpenStreetMap
Workflow:
Map Viewport Initialization: Full-screen rendering centered on Telangana coordinates (17.8749° N, 79.1008° E).
Origin Pinning: The user's farm location is locked at Hyderabad (17.3850° N, 78.4867° E) with a pulsing CSS radar marker.
Facility Filtering: Selecting category chips (PDS, Rythu Bazaars, Cold Storages, Seeds, Fertilizers) filters through 80+ geo-coordinates, clears previous layers, and plots colored L.divIcon markers.
Dynamic Haversine Distance: When a user selects a facility, getDistanceFromUserFarm() calculates real-time road distance in kilometers.
"Where to Sell?" Market Ranker:
Clears all facility markers from the map.
When the user searches for a crop (e.g., Chilli, Paddy, Cotton, Turmeric, Tomato), the engine queries CROP_SELLING_MANDIS.
Sorts all active APMC Mandis in Highest Price First order.
Highlights the #1 Top Price Mandi with a gold badge and green map pin.
Routing & Navigation:
View Route: Draws an active dashed L.polyline connecting the user's farm to the destination Mandi.
Google Maps GPS: Launches a universal Google Maps deep-link (https://www.google.com/maps/dir/?api=1&origin=...&destination=...) for turn-by-turn navigation.
5. On-Demand Agri-Logistics ("Kisan Express / Farm Freight")
Module: templates/home.html, static/js/home.js
Workflow:
Route Selection: Origin is populated from the user's farm profile; destination is selected from major Mandi terminals.
Fleet Classification & Capacity Matching:
Tata Ace Gold / Pro: Capacity 
≤
≤
 0.75 Tonne (₹18/km)
Mahindra Bolero Maxi Truck: Capacity 
≤
≤
 1.7 Tonnes (₹24/km)
Ashok Leyland Dost+: Capacity 
≤
≤
 1.5 Tonnes (₹22/km)
Eicher Pro 2049 Truck: Capacity 
≤
≤
 5.0 Tonnes (₹42/km)
Fare Computation: Dynamically extracts destination distance and calculates Estimated Fare = Distance (km) * Per-KM Rate.
Driver Dispatch: Queries verified driver profiles matching the selected vehicle category, displaying proximity, ratings, experience, and direct telephone call links.
Booking OTP: Generates a secure 4-digit verification code to share with the driver upon farm arrival.
6. Peer-to-Peer Rural Marketplace ("Kisan Bazaar / Rural OLX")
Module: templates/home.html, static/js/home.js
Workflow:
Category Selection: Filters listings across Agricultural Land, Machinery, Infrastructure, Livestock, and Spares.
Land Sub-Filtering: Enables dedicated toggling between For Sale (అమ్మకానికి) and For Lease / Cultivation (కౌలుకు).
Asset Card Generation: Displays acreage, price per acre, borewell/irrigation infrastructure details, and verified seller credentials.
Spatial Pinpoint Integration: Clicking "View on Map" automatically switches to the GIS Map view and flies the camera directly to the asset coordinates.
7. Government APMC Command Center & Price Inflation Heatmap
Module: templates/home.html (#govtView), static/js/home.js
Workflow:
Inflation Heatmap Initialization: Renders district nodes across Telangana with variable radius and color properties based on price divergence:
🔴 Red Node: Critical Surge (
>
50
%
>50%
 above ML baseline).
🟡 Yellow Node: Moderate Warning (
+
20
%
 to 
40
%
+20% to 40%
).
🟢 Green Node: Stable / Fair Baseline.
District Selection: Clicking a Red node (e.g., Hyderabad Tomato at ₹58/kg) opens the AI Market Intervention Drawer.
Intervention Analysis: Displays Retail vs. Wholesale vs. ML Fair Price alongside available State Buffer Inventory in Metric Tonnes.
AI Recommendation: Recommends exact buffer release quotas (e.g., "Release 1,500 MT to cool retail price to ₹34/kg").
Live Market Stabilization: Clicking Release Buffer Stock to Market reduces buffer inventory, sets retail prices to the target baseline, and transitions the map node from 🔴 Red to 🟢 Green in real time.
