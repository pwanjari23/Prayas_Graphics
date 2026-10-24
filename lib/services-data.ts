import { Printer, Palette, Frame, Truck, Sparkles, Layers, Zap, LucideIcon } from "lucide-react";

export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface ServiceDurability {
  factor: string;
  grade: string;
  detail: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  icon: LucideIcon;
  useCases: string[];
  materials: string[];
  pricing: string;
  originalPrice?: number;
  offerPrice?: number;
  image: string;
  demoRatePerSqFt: number;
  imageFit?: "cover" | "contain";
  specifications?: ServiceSpecification[];
  durability?: ServiceDurability[];
  faqs?: ServiceFaq[];
  highlightHeadline?: string;
  engineeringDetails?: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "acrylic-acp-signboard",
    title: "Acrylic ACP Signboard",
    description: "Premium 3D acrylic letters mounted on heavy-duty ACP panels with uniform LED illumination for corporate storefronts in Nagpur.",
    longDescription: `Our Acrylic ACP Signboards represent the benchmark for modern commercial branding across Nagpur. Built from weather-resistant Aluminum Composite Panels (ACP) coupled with high-density Cast Acrylic 3D raised letters, this signage delivers architectural depth, sharp optical legibility, and extraordinary exterior endurance.

Whether establishing a new retail flagship on Wardha Road, a clinic in Dharampeth, or corporate headquarters in Sitabuldi, an Acrylic ACP signboard creates an immediate visual impression of prestige and permanence. We engineer each sign with CNC laser precision to eliminate light leakage and ensure seamless alignment.

Note: In standard 10 by 4 ft and 8 by 4 ft panels, up to 200 running inches of 3D letters are included in the base package. Any design requiring larger letter coverage is calculated proportionally with complete cost transparency.`,
    tag: "Flagship 3D",
    icon: Layers,
    useCases: ["Corporate Offices & IT Parks", "Retail Showrooms & Boutiques", "Hospitals, Clinics & Diagnostic Centres", "Automobile Dealerships"],
    materials: ["3mm / 4mm Exterior Grade ACP Sheet (0.25mm Aluminium Coil)", "High-Gloss Imported Cast Acrylic (3mm–10mm)", "Samsung / Osram High-Lumen IP67 LED Modules", "Custom-Welded MS Structural Framework"],
    pricing: "₹750 per sq ft (Standard 10x4 & 8x4 ft sheets)",
    originalPrice: 850,
    offerPrice: 750,
    image: "/services/acrylic-acp-signboard-nagpur.webp",
    demoRatePerSqFt: 750,
    specifications: [
      { label: "Base Panel", value: "3mm/4mm Exterior Grade ACP with PVDF Coating" },
      { label: "Letter Material", value: "Cast Acrylic (3mm to 10mm thickness options)" },
      { label: "Illumination", value: "Samsung/Osram 12V IP67 Waterproof LED Modules" },
      { label: "Power Supply", value: "Industrial Heavy-Duty 12V SMPS with Surge Protector" },
      { label: "Standard Letter Quota", value: "Up to 200 running inches per 10x4 ft sheet included" },
      { label: "Structural Framing", value: "1.5-inch MS Square Pipe with Anti-Rust Primer" },
      { label: "Warranty", value: "1 Year Full Warranty on LEDs & Power Supply" },
      { label: "Turnaround Time", value: "3 to 5 business days across Nagpur" },
    ],
    durability: [
      { factor: "Nagpur Summer Heat (47°C+)", grade: "Superior", detail: "PVDF coated ACP panels and Cast Acrylic resist thermal warping, discoloration, and crazing under sustained Vidarbha UV exposure." },
      { factor: "Monsoon Waterproofing", grade: "IP67 Certified", detail: "Internal LED modules and wiring runs are sealed with industrial grade neutral-cure silicone gaskets to eliminate water ingress." },
      { factor: "Wind & Storm Resistance", grade: "High Load", detail: "Welded structural MS sub-framework engineered to withstand high seasonal dust storms and monsoon wind shear." },
    ],
    faqs: [
      {
        q: "How is the cost of an Acrylic ACP signboard calculated in Nagpur?",
        a: "In Nagpur, Acrylic ACP signboards are priced between ₹700 and ₹850 per square foot for standard panel sizes (10x4 ft and 8x4 ft). The base rate includes the ACP panel, up to 200 running inches of 3D acrylic letters with internal LED lighting, MS mounting framework, and industrial power supply. Letter sizes exceeding 200 running inches are calculated per additional inch.",
      },
      {
        q: "Will the acrylic letters fade or crack in Nagpur's extreme summer heat?",
        a: "No. Prayas Graphics exclusively utilizes imported Cast Acrylic rather than low-cost extruded acrylic. Cast acrylic features superior molecular density and integrated UV stabilizers, preventing yellowing, thermal expansion warping, or cracking even during peak 47°C Nagpur summers.",
      },
      {
        q: "Do I need NMC permission before installing an Acrylic ACP signboard?",
        a: "If the signboard is mounted flat against your shopfront fascia within your property line, formal permission is straightforward under NMC Sky Sign regulations. If your signboard projects onto the public road or exceeds standard facade dimensions, a municipal sky sign fee applies. Prayas Graphics fabricates all signboards in full compliance with NMC safety and dimensional norms.",
      },
      {
        q: "What is the warranty and installation turnaround time?",
        a: "Turnaround time is typically 3 to 5 business days from 3D layout approval to on-site mounting in Nagpur. We provide a 1-year replacement warranty on all LED lighting modules and power supplies.",
      },
    ],
  },
  {
    slug: "inner-cut-acp-signboard",
    title: "Inner Cut ACP Signboard",
    description: "Router-cut ACP signboards with backlit acrylic typography for an ultra-sleek, flush architectural aesthetic.",
    longDescription: `Inner Cut (also known as Router Cut) ACP Signboards feature text, logos, and intricate branding carved directly out of the composite panel itself using computerized CNC router tooling. We back the cutouts with high-grade translucent opal acrylic and illuminate them from within the sealed box.

During daylight hours, your storefront displays a sleek, continuous metallic or matte facade. At night, the typography bursts into crisp, vibrant illumination with zero light bleed. Because there are no protruding letters, this sign is completely immune to wind tear and dust accumulation.`,
    tag: "Architectural",
    icon: Printer,
    useCases: ["Designer Boutiques & Salons", "High-End Medical Clinics", "Tech Parks & Corporate Suites", "Restaurant & Cafe Facades"],
    materials: ["CNC Router-Cut ACP Panels", "Translucent Opal Acrylic Backing", "High-Intensity 12V LED Strips / Modules", "Internal Sealed Tray Framework"],
    pricing: "₹650 per sq ft",
    originalPrice: 750,
    offerPrice: 650,
    image: "/services/inner-cut-acp-signboard-nagpur.webp",
    demoRatePerSqFt: 650,
    specifications: [
      { label: "Fabrication Method", value: "High-Precision CNC Router Carving" },
      { label: "Panel Grade", value: "3mm/4mm Exterior Grade ACP" },
      { label: "Backing Diffuser", value: "2.5mm–3mm High-Diffusion Opal White Acrylic" },
      { label: "Lighting System", value: "Uniform High-CRI LED Illumination" },
      { label: "Profile Depth", value: "2.5 inches to 4 inches flush box profile" },
      { label: "Warranty", value: "1 Year Full Warranty on Electricals" },
    ],
    durability: [
      { factor: "Wind Shear", grade: "Immune", detail: "Flush planar surface offers zero wind resistance, making it ideal for high-wind open corridors." },
      { factor: "Dust Accumulation", grade: "Minimal", detail: "No raised 3D letter lips where Nagpur's seasonal dust can settle, ensuring easy cleaning." },
    ],
    faqs: [
      {
        q: "What is the key difference between Inner Cut and Raised 3D Acrylic boards?",
        a: "In a raised 3D board, acrylic letters protrude forward by 0.5 to 2 inches from the ACP face. In an Inner Cut board, the letters are carved into the ACP sheet itself, backed with acrylic, creating a completely flush, modern architectural surface.",
      },
      {
        q: "Can multi-color logos be reproduced with inner-cut signboards?",
        a: "Yes. By using specialized translucent colored vinyl overlays on the back acrylic plate, we can accurately replicate multi-color brand logos and gradients while maintaining crisp nighttime luminescence.",
      },
    ],
  },
  {
    slug: "flex-backlit-signboard",
    title: "Flex Backlit Signboard",
    description: "High-visibility illuminated glow signboards with internal lighting for 24/7 retail and commercial brand dominance.",
    longDescription: `The time-tested workhorse of retail advertising. Our Flex Backlit Signboards (commonly known as Glow Sign Boards or GSB) combine heavy-duty Star Backlit flex media with industrial internal illumination and precision-welded metal casing.

Stretched under tension over a rigid metal frame, the translucent flex allows internal lights to shine through with uniform brilliance, making your storefront vibrant and unmissable from hundreds of feet away, day or night. It is the most cost-effective solution for large-format commercial street dominance.`,
    tag: "High-Visibility",
    icon: Truck,
    useCases: ["Supermarkets & Grocery Hubs", "Retail Stores & Pharmacies", "Automobile Service Centers", "Highway & Roadside Commercial Hoardings"],
    materials: ["Star Backlit Translucent Flex", "1.5-inch MS Rectangular Pipe Framework", "High-Efficiency LED Tube / Module System", "Galvanized Metal Sheet Backing"],
    pricing: "₹300 per sq ft",
    originalPrice: 400,
    offerPrice: 300,
    image: "/services/flex-backlit-signboard-nagpur.webp",
    demoRatePerSqFt: 300,
    specifications: [
      { label: "Print Media", value: "Star Backlit Heavy-Duty Translucent Flex (550+ GSM)" },
      { label: "Print Resolution", value: "1440 DPI High-Density UV/Solvent Print" },
      { label: "Framework", value: "18-Gauge MS Pipe with Anti-Corrosive Coating" },
      { label: "Illumination", value: "Heavy-Duty Waterproof LED Tubes / Module Strips" },
      { label: "Box Depth", value: "7 inches to 9 inches for even light diffusion" },
      { label: "Warranty", value: "1 Year Warranty on Lights & Power System" },
    ],
    durability: [
      { factor: "Monsoon Moisture", grade: "Waterproof", detail: "Galvanized sheet enclosure and water-drain channels prevent internal condensation." },
      { factor: "UV Resistance", grade: "High", detail: "Heavy-duty star flex media resists ink fading and yellowing for 3+ years under direct sunlight." },
    ],
    faqs: [
      {
        q: "What is the cost of a Glow Sign Board (GSB) in Nagpur?",
        a: "Our Flex Backlit Signboard is priced at ₹300 per square foot, which includes high-resolution star flex printing, MS structural frame, complete internal LED lighting, and installation readiness.",
      },
      {
        q: "Do you use fluorescent tubes or LED tubes inside?",
        a: "We exclusively use commercial-grade LED tube lights or wide-angle LED modules. LEDs consume up to 70% less electricity, generate significantly less heat, and last up to 50,000 hours compared to old fluorescent tubes.",
      },
    ],
  },
  {
    slug: "flex-on-frame",
    title: "Flex on Frame",
    description: "Economical large-format frontlit flex banners stretched on custom metal frames for hoardings and construction sites.",
    longDescription: `When maximum outdoor square footage is required on an economical budget, Flex on Frame is the industry standard. We print high-resolution graphics on heavy-duty frontlit flex material and meticulously stretch and fasten it over a reinforced metal or wooden framework.

Ideal for real estate hoardings, temporary retail sales, event venue signage, and directional banners across Nagpur.`,
    tag: "Budget Champion",
    icon: Frame,
    useCases: ["Construction Site Hoardings", "Promotional Campaigns & Sales", "Event Backdrops & Stages", "Temporary Directional Signage"],
    materials: ["Frontlit Star Flex Banner (340–440 GSM)", "1-inch / 1.5-inch MS Pipe Frame", "Weather-Resistant Enamel Primer Paint"],
    pricing: "₹65 per sq ft",
    originalPrice: 80,
    offerPrice: 65,
    image: "/services/flex-on-frame-nagpur.webp",
    demoRatePerSqFt: 65,
    imageFit: "contain",
    specifications: [
      { label: "Banner Material", value: "Heavy-Duty Frontlit Flex (440 GSM Standard)" },
      { label: "Frame Material", value: "Welded Mild Steel Square / Rectangular Pipe" },
      { label: "Fastening", value: "Heavy-Duty Industrial Rivets & G.I. Wire Tensioning" },
      { label: "Turnaround", value: "24 to 48 hours for standard sizes" },
    ],
    faqs: [
      {
        q: "How long does a Flex on Frame signboard last outdoors in Nagpur?",
        a: "A high-quality 440 GSM Star Flex on an MS frame typically lasts 1.5 to 3 years outdoors in Nagpur before sun fading begins. For permanent branding, an Acrylic ACP board is recommended.",
      },
    ],
  },
  {
    slug: "ss-letter-backlit-golden",
    title: "SS Letter (Backlit Golden)",
    description: "3D Titanium Gold Stainless Steel letters with warm halo backlighting for prestigious hotels, jewelry showrooms, and luxury offices.",
    longDescription: `Also known as Halo-Lit or Reverse-Lit letters, this is the ultimate expression of corporate prestige and luxury branding. Each letter is laser-cut and welded from premium Grade 304 Stainless Steel, finished with a PVD Titanium Gold mirror or brushed coating.

Mounted on stand-offs 15mm to 25mm off the wall surface, concealed high-efficiency LED modules cast a warm, golden aura onto the wall behind each letter. The result is an ethereal floating illumination that exudes sophistication and permanence.`,
    tag: "Luxury Prestige",
    icon: Sparkles,
    useCases: ["Jewelry Showrooms & Boutiques", "Hotel Lobbies & Fine Dining Restaurants", "Corporate Boardrooms & Law Firms", "Premium Real Estate Showrooms"],
    materials: ["SS 304 Titanium Gold PVD Coated Steel", "Warm-White / Natural-White Waterproof LEDs", "Stainless Steel Stand-off Spacers", "Laser-Welded Side Returns"],
    pricing: "₹380 per inch (Height basis)",
    originalPrice: 450,
    offerPrice: 380,
    image: "/services/ss-golden-backlit-letters-nagpur.webp",
    demoRatePerSqFt: 380,
    specifications: [
      { label: "Steel Grade", value: "SS 304 (Anti-Rust Certified for Outdoor & Indoor)" },
      { label: "Surface Finish", value: "Titanium Gold PVD Coating (Mirror or Brushed Hairline)" },
      { label: "Letter Depth (Returns)", value: "1.5 inches to 3 inches 3D laser-welded side depth" },
      { label: "Lighting Style", value: "Halo Glow / Reverse Backlit (Warm White 3000K or 4000K)" },
      { label: "Mounting", value: "Brass / SS Threaded Stand-offs with Chemical Anchors" },
      { label: "Warranty", value: "2 Years on Steel Finish, 1 Year on LED Electronics" },
    ],
    durability: [
      { factor: "Corrosion Resistance", grade: "SS 304 Zero Rust", detail: "Resists heavy monsoon oxidation and pollution without pitting or tarnishing." },
      { factor: "Finish Longevity", grade: "10+ Years", detail: "PVD Titanium bonding is molecularly bonded, preventing peeling or flaking." },
    ],
    faqs: [
      {
        q: "What wall surface works best for golden halo-lit letters?",
        a: "Halo-lit letters create the most dramatic illumination on matte, textured, stone, wooden, or dark painted surfaces. Highly reflective glossy white surfaces can cause LED hotspot reflections, so a satin or matte background is ideal.",
      },
      {
        q: "How is pricing calculated for stainless steel 3D letters?",
        a: "SS letters are priced per inch of letter height. At ₹380 per inch, an 8-inch tall letter is ₹3,040 per letter, inclusive of 3D fabrication, PVD titanium coating, internal halo LEDs, and mounting hardware.",
      },
    ],
  },
  {
    slug: "aluminium-channel-letter",
    title: "Aluminium Channel Letter",
    description: "Heavy-duty outdoor aluminium channel letters with frontlit acrylic faces for malls, high-rise buildings, and corporate towers.",
    longDescription: `The commercial standard for large-scale outdoor building signage. Aluminium Channel Letters consist of fabricated rust-proof aluminium coil returns (sides) and translucent cast acrylic faces sealed with weather-resistant trim caps.

Housing high-output LED modules, these letters are engineered to endure Nagpur's intense summer heat, dust storms, and monsoon rains while delivering crisp, uniform front lighting from ground level to high-rise rooftops.`,
    tag: "High-Rise Durability",
    icon: Layers,
    useCases: ["Shopping Malls & Multiplexes", "Corporate Towers & IT Parks", "Commercial Complex Roofs", "Standalone Showrooms"],
    materials: ["Aluminium Return Coil (Rust-Free)", "3mm Cast Acrylic Face", "Heavy-Duty Trim Cap", "High-Lumen Osram LED Modules"],
    pricing: "₹180 per sq inch",
    originalPrice: 220,
    offerPrice: 180,
    image: "/services/Aluminum Channel Letter.webp",
    demoRatePerSqFt: 180,
    specifications: [
      { label: "Return Material", value: "Powder-Coated Aluminium Coil (Lightweight & Rust-Proof)" },
      { label: "Face Material", value: "UV-Stabilized Cast Acrylic" },
      { label: "Illumination", value: "Front-Lit High-Density LED Matrix" },
      { label: "Rooftop Engineered", value: "Lightweight build reduces structural load on building parapets" },
    ],
    faqs: [
      {
        q: "Why choose aluminium channel letters over steel for rooftop installations?",
        a: "Aluminium is approximately 65% lighter than steel, significantly reducing structural stress on rooftop parapets while being completely immune to rust.",
      },
    ],
  },
  {
    slug: "flex-roll-up-standee",
    title: "Flex Roll Up Standee",
    description: "Portable, lightweight retractable roll-up banner standees for exhibitions, conferences, and retail promotional displays in Nagpur.",
    longDescription: `Portable, professional, and deployed in less than 30 seconds. Our Roll Up Standees feature a precision retractable spring base made from anodized aluminium, holding a vibrant high-resolution flex or non-tearable synthetic print.

Perfect for trade exhibitions at Mankapur Stadium or Reshimbagh, corporate product launches, hotel seminar entrances, or point-of-sale retail promotions across Nagpur. Includes a durable carry bag for effortless transport.`,
    tag: "Event Essential",
    icon: Palette,
    useCases: ["Trade Shows & Exhibitions", "Corporate Conferences & Seminars", "Retail Store Entrances & Promotions", "Hospital Reception Announcements"],
    materials: ["Anodized Aluminium Retractable Base", "Star Frontlit Flex or Non-Tearable PP Synthetic Media", "Padded Oxford Canvas Carry Bag"],
    pricing: "₹1,500 per unit (Standard 6x3 ft)",
    originalPrice: 1850,
    offerPrice: 1500,
    image: "/services/flex-roll-up-standee-nagpur.webp",
    demoRatePerSqFt: 0,
    specifications: [
      { label: "Standard Dimensions", value: "6 ft Height × 3 ft Width (Also available in 5×2 ft)" },
      { label: "Print Media Options", value: "Star Flex (Budget) or Matte Non-Tearable PP (Luxury)" },
      { label: "Base Weight", value: "Approx. 2.2 kg to 3.5 kg aluminium base" },
      { label: "Setup Time", value: "Under 30 seconds without tools" },
    ],
    faqs: [
      {
        q: "Can the banner print be replaced later without buying a new standee?",
        a: "Yes. We can replace just the printed graphic inside your existing aluminium cassette, saving you money on future campaigns.",
      },
    ],
  },
  {
    slug: "acp-elevation-work",
    title: "ACP Elevation Work",
    description: "Architectural Aluminum Composite Panel (ACP) cladding for showroom facades and commercial building exterior transformations in Nagpur.",
    longDescription: `Transform your building's exterior into a sleek, ultra-modern corporate landmark. Our ACP Elevation Work involves engineering and installing exterior-grade Aluminum Composite Panels over custom-fabricated metal framework.

ACP cladding conceals uneven brickwork, weathered concrete, and exterior electrical conduits, creating a waterproof, insulated, and visually breathtaking facade that elevates property value and corporate prestige across Nagpur.`,
    tag: "Exterior Facade",
    icon: Palette,
    useCases: ["Commercial Showrooms & Car Dealerships", "Corporate Office Buildings", "Hospitals & Diagnostic Centers", "Hotels, Cafes & Commercial Complexes"],
    materials: ["4mm Exterior Grade FR/PVDF ACP Panels", "Galvanized MS Sub-Frame Tubing", "DOW Corning / Sika Weather-Shield Sealant", "Stainless Steel Fasteners"],
    pricing: "₹220 per sq ft (White / Standard Solid Shades)",
    originalPrice: 300,
    offerPrice: 220,
    image: "/services/acp-elevation-work-nagpur.webp",
    demoRatePerSqFt: 220,
    specifications: [
      { label: "Panel Grade", value: "4mm Exterior Grade ACP with 0.25mm / 0.50mm PVDF Coil" },
      { label: "Structural Sub-Frame", value: "50mm × 25mm Galvanized Tubular MS Framework" },
      { label: "Weather Sealing", value: "Backer Rod with Neutral Cure Silicone Weatherseal" },
      { label: "Thermal Insulation", value: "Provides exterior thermal barrier against Nagpur heat" },
    ],
    faqs: [
      {
        q: "What is the cost of ACP elevation cladding per square foot in Nagpur?",
        a: "ACP elevation cladding in Nagpur generally ranges from ₹220 to ₹350 per square foot, depending on panel specifications (solid color vs wooden/marble texture) and facade scaffolding complexity.",
      },
    ],
  },
  {
    slug: "visiting-cards",
    title: "Visiting Cards",
    description: "Premium business cards with matte lamination, spot UV, velvet touch, and metallic foil finishes in Nagpur.",
    longDescription: `Your visiting card is the tangible touchpoint of your professional credibility. We design and print premium business cards on 350+ GSM imported board with specialized finishes including soft-touch velvet lamination, raised Spot UV, and gold/silver foil stamping.`,
    tag: "Corporate Print",
    icon: Printer,
    useCases: ["Business Executives & Entrepreneurs", "Doctors, Lawyers & Consultants", "Corporate Sales Teams", "Retail Store Owners"],
    materials: ["350 GSM Art Card Board", "Matte / Gloss Thermal Lamination", "Spot UV & Foil Stamping"],
    pricing: "For Enquiry Only",
    image: "/services/visiting-cards-nagpur.webp",
    demoRatePerSqFt: 0,
    imageFit: "contain",
  },
  {
    slug: "lollipop-signboard",
    title: "Lollipop Signboard",
    description: "Double-sided illuminated flange projecting signs for maximum visibility from pedestrian and street traffic in Nagpur.",
    longDescription: `Projecting perpendicularly from your building wall, a Lollipop (Flange) signboard captures the eyes of foot and vehicle traffic approaching from either side of the street long before they arrive in front of your shop. Available in crystal-clear acrylic 3D glow or economical backlit flex versions.`,
    tag: "Dual-Sided Visibility",
    icon: Frame,
    useCases: ["Street-Front Cafes & Bakeries", "Pharmacies & Medical Stores", "High-Street Boutiques & Salons", "Clinics & Pathology Labs"],
    materials: ["Fabricated Circular / Square Metal Frame", "Double-Sided Acrylic or Flex Face", "Internal High-Efficiency LED Modules", "Heavy-Duty Wall Mounting Flange"],
    pricing: "Acrylic: ₹14,500 | Flex: ₹9,500 (Excl. GST)",
    image: "/services/lollipop-signboard-nagpur.webp",
    demoRatePerSqFt: 0,
    specifications: [
      { label: "Standard Diameters", value: "18-inch, 24-inch, or 30-inch circular / square options" },
      { label: "Illumination", value: "Double-Sided 360-degree High-Output LEDs" },
      { label: "Mounting Flange", value: "Heavy-Gauge Steel Flange with 4 Anchor Bolts" },
    ],
    faqs: [
      {
        q: "Why is a lollipop projecting sign essential for street-front shops?",
        a: "A regular flat signboard is only visible when standing directly in front of the shop. A double-sided lollipop sign projects outward, capturing foot and vehicle traffic approaching from up to 200 meters away.",
      },
    ],
  },
  {
    slug: "event-stall-flex-printing",
    title: "Event Stall Flex Printing",
    description: "Large-format high-resolution flex prints and modular structure wraps for exhibition stalls and trade shows in Nagpur.",
    longDescription: `Make your trade show booth stand out at Mankapur Stadium, Reshimbagh Ground, or hotel exhibition halls across Nagpur. We design and print seamless large-format flex wraps, fabric backdrops, and promotional banners with rapid turnaround and vibrant color fidelity.`,
    tag: "Trade Show Branding",
    icon: Printer,
    useCases: ["Exhibitions & Trade Fairs", "Flea Markets & Pop-Up Stores", "Corporate Event Backdrops", "Political & Cultural Stages"],
    materials: ["Star Frontlit & Backlit Flex Media", "High-Resolution Eco-Solvent / Solvent Print", "Reinforced Edge Welds with Brass Eyelets"],
    pricing: "For Enquiry Only",
    image: "/services/event-stall-flex-printing-nagpur.webp",
    demoRatePerSqFt: 0,
  },
  {
    slug: "customise-wallpaper",
    title: "Customise Wallpaper",
    description: "Custom-printed interior wall murals and textured branding graphics for corporate offices, clinics, and cafes in Nagpur.",
    longDescription: `Turn blank interior walls into inspiring corporate spaces or Instagram-worthy cafe corners. Our custom wallpapers are printed on textured canvas, vinyl, or non-woven media using non-toxic eco-solvent inks tailored exactly to your wall measurements.`,
    tag: "Interior Branding",
    icon: Palette,
    useCases: ["Corporate Reception & Boardroom Walls", "Cafe & Restaurant Theme Murals", "Doctor's Clinic Waiting Rooms", "Luxury Residential Accent Walls"],
    materials: ["Textured Canvas & Smooth Vinyl Media", "Eco-Friendly Odorless UV Inks", "Commercial Grade Adhesive"],
    pricing: "For Enquiry Only",
    image: "/services/customise-wallpaper-nagpur.webp",
    demoRatePerSqFt: 0,
  },
  // NEW SERVICE 1: Neon Signboards
  {
    slug: "neon-signboard-nagpur",
    title: "Neon Signboard",
    description: "Custom flexible LED neon signboards with vibrant glow for cafes, restaurants, fashion boutiques, and interior feature walls in Nagpur.",
    longDescription: `Add an irresistible modern aesthetic to your business with Custom LED Neon Signs. Unlike fragile glass neon from decades past, our modern neon signs utilize flexible 12V silicone LED tubing mounted on precision laser-cut transparent acrylic backings.

They consume 80% less power, generate zero heat, are virtually shatterproof, and create stunning visual focal points that customers photograph and share on Instagram. Perfect for cafes, salons, lounge bars, creative agencies, and modern retail stores across Nagpur.`,
    tag: "Instagram Favorite",
    icon: Zap,
    useCases: ["Cafes, Bakeries & Coffee Bars", "Boutiques, Salons & Spas", "Coworking Spaces & Creative Studios", "Home Bars & Event Photo Backdrops"],
    materials: ["High-Efficiency 12V Silicon Neon Flex", "5mm Laser-Cut Clear Acrylic Backplate", "Remote Dimmer & Strobe Controller", "Low-Voltage 12V DC Adapter"],
    pricing: "Starting at ₹4,500 per custom design",
    originalPrice: 5500,
    offerPrice: 4500,
    image: "/services/neon-signboard-nagpur.webp",
    demoRatePerSqFt: 0,
    specifications: [
      { label: "Voltage", value: "12V DC Safe Low-Voltage Operation" },
      { label: "Lifespan", value: "Over 50,000 Operating Hours" },
      { label: "Backing", value: "5mm Optical-Grade Transparent Cast Acrylic" },
      { label: "Control", value: "Optional Wireless Dimmer & Multi-Speed Flash Remote" },
      { label: "Safety", value: "Shatterproof silicone — zero fragile glass or mercury gases" },
    ],
    durability: [
      { factor: "Interior Longevity", grade: "5+ Years", detail: "Continuous glow without gas leaks or buzzing transformer noise." },
    ],
    faqs: [
      {
        q: "How much does a custom neon sign cost in Nagpur?",
        a: "Custom LED neon signs at Prayas Graphics start from ₹4,500 for a compact 2-word phrase or logo and scale depending on total text length, acrylic base dimensions, and multi-color LED configurations.",
      },
      {
        q: "Are LED neon signs energy efficient?",
        a: "Yes. They run on a safe 12V power adapter, drawing as little electricity as a standard household LED lightbulb, making them economical to run continuously all day.",
      },
    ],
  },
  // NEW SERVICE 2: Flex & Banner Printing
  {
    slug: "flex-printing-nagpur",
    title: "Flex & Banner Printing",
    description: "High-speed, wide-format flex printing and banner manufacturing for commercial hoardings, retail campaigns, and events across Nagpur.",
    longDescription: `Need high-volume, cost-effective banner advertising? Prayas Graphics provides industrial wide-format flex printing services using high-resolution solvent and eco-solvent printing machinery right at our Tukdoji Square facility in Nagpur.

From single shopfront banners to large-scale municipal hoardings, election banners, and retail discount announcements, we deliver vibrant color saturation, reinforced welded borders, and same-day express turnaround for urgent requirements.`,
    tag: "High-Volume Print",
    icon: Printer,
    useCases: ["Retail Sale Announcements & Store Banners", "Commercial Highway Hoardings", "Political & Social Event Banners", "Real Estate Project Site Signages"],
    materials: ["Star Frontlit & Backlit Flex Media (300 to 550 GSM)", "High-Density Solvent / Eco-Solvent Inks", "Reinforced Hemmed Edges & Brass Eyelets"],
    pricing: "Starting at ₹12 per sq ft (Bulk orders)",
    originalPrice: 15,
    offerPrice: 12,
    image: "/services/flex-printing-nagpur.webp",
    demoRatePerSqFt: 12,
    specifications: [
      { label: "Max Print Width", value: "Up to 10 feet seamless width (longer with welded seams)" },
      { label: "Resolution", value: "720 DPI to 1440 DPI High-Definition Print" },
      { label: "Finishing", value: "Heat-welded hemmed borders with rust-proof brass eyelets" },
      { label: "Turnaround", value: "Same-day express printing available in Nagpur" },
    ],
    durability: [
      { factor: "Weather Resistance", grade: "Outdoor Standard", detail: "Waterproof inks resist monsoon downpours and sunlight for 1 to 2 years." },
    ],
    faqs: [
      {
        q: "What is the per square foot rate for flex printing in Nagpur?",
        a: "Flex printing starts at ₹12 to ₹18 per square foot for standard frontlit banners, depending on order square footage and flex GSM rating. High-grade Star Flex or Backlit media is priced from ₹25 to ₹45 per square foot.",
      },
      {
        q: "Can I get same-day flex printing in Nagpur?",
        a: "Yes. For ready-to-print designs submitted before 2:00 PM, Prayas Graphics offers same-day collection at our Tukdoji Square, Manewada Road workshop.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  const decoded = decodeURIComponent(slug).trim().toLowerCase();
  const normalized = decoded.replace(/\s+/g, "-");
  return servicesData.find(
    (s) => s.slug === slug || s.slug === decoded || s.slug === normalized
  );
}
