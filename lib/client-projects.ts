export interface ClientProject {
  id: string;
  image: string;
  description: string;
  alt?: string;
  objectFit?: "cover" | "contain";
}

export interface ClientBrand {
  id: string;
  name: string;
  logo: string;
  subtitle?: string;
  projects: ClientProject[];
}

export const CLIENT_BRANDS: Record<string, ClientBrand> = {
  "chola-finance": {
    id: "chola-finance",
    name: "Chola Finance",
    logo: "/clients/logo (1).jpeg",
    subtitle: "Commercial Vehicle Finance & Banking Signage",
    projects: [
      {
        id: "chola-1",
        image: "/clients/chola-finance-building-facade-signboard.png",
        description: "Commercial building elevation fascia signboard with high-visibility corporate identity",
        alt: "Chola Finance Commercial Building Elevation Signboard",
        objectFit: "cover",
      },
      {
        id: "chola-2",
        image: "/clients/chola-finance-branch-fascia-signage.png",
        description: "Illuminated branch entrance ACP glow sign board with bilingual regional typography",
        alt: "Chola Finance Branch Fascia Illuminated Signboard",
        objectFit: "cover",
      },
      {
        id: "chola-3",
        image: "/clients/chola-finance-vehicle-loans-door-branding.png",
        description: "Branch entry door custom vinyl graphics for Commercial Vehicle Loans campaign",
        alt: "Chola Finance Commercial Vehicle Loans Door Branding",
        objectFit: "contain",
      },
      {
        id: "chola-4",
        image: "/clients/chola-finance-products-wall-branding.png",
        description: "Interior glass partition loan portfolio and retail banking product wall graphics",
        alt: "Chola Finance Branch Product Portfolio Wall Branding",
        objectFit: "contain",
      },
      {
        id: "chola-5",
        image: "/clients/chola-finance-cabin-frosted-film.png",
        description: "Executive cabin frosted glass privacy film with logo and corporate values display",
        alt: "Chola Finance Cabin Frosted Glass Logo Film",
        objectFit: "contain",
      },
    ],
  },

  "smfg-india-credit": {
    id: "smfg-india-credit",
    name: "SMFG India Credit",
    logo: "/clients/logo (2).jpeg",
    subtitle: "Corporate Office Interior Branding & Signage",
    projects: [
      {
        id: "smfg-reception",
        image: "/clients/smfg-india-credit-reception-branding.png",
        description: "Corporate reception 3D illuminated acrylic logo on fluted wood wall with decorative frosted glass film",
        alt: "SMFG India Credit Corporate Reception 3D Signboard and Glass Branding",
        objectFit: "cover",
      },
       
    ],
  },

  "fortune": {
    id: "fortune",
    name: "Fortune",
    logo: "/clients/logo (3).jpeg",
    subtitle: "Authorized Dealer Facade & 3D LED Signage",
    projects: [
      {
        id: "fortune-night",
        image: "/clients/fortune-tmt-storefront-night-illumination.png",
        description: "Full storefront night illumination featuring 3D LED channel letters, rooftop branding & fascia panels",
        alt: "Fortune TMT Storefront Night Illumination and 3D LED Signboard",
        objectFit: "cover",
      },
      {
        id: "fortune-1",
        image: "/hero/hero (5).webp",
        description: "Daytime view of Fortune TMT dealer storefront ACP facade and 3D illuminated letters",
        alt: "Fortune TMT Dealer Facade Signboard Daytime",
        objectFit: "cover",
      },
    ],
  },

  "nobroker": {
    id: "nobroker",
    name: "NoBroker",
    logo: "/clients/logo (4).jpeg",
    projects: [
      {
        id: "nobroker-1",
        image: "/clients/nobroker-interiors-building-elevation.webp",
        description: "Commercial building corner facade branding for NoBroker Interiors",
        alt: "NoBroker Interiors Building Facade Elevation Signboard",
      },
      {
        id: "nobroker-2",
        image: "/clients/nobroker-interiors-daytime-fascia.webp",
        description: "3D bilingual illuminated store fascia and acrylic signage",
        alt: "NoBroker Interiors Storefront Signboard",
      },
      {
        id: "nobroker-3",
        image: "/clients/nobroker-interiors-night-illumination.webp",
        description: "High-lumen evening illumination and 3D acrylic glowing letters",
        alt: "NoBroker Interiors Illuminated Night Signboard",
      },
      {
        id: "nobroker-4",
        image: "/clients/nobroker-interiors-night-glow.webp",
        description: "Precision laser-cut 3D LED logo box and illuminated fascia",
        alt: "NoBroker 3D LED Logo Signage Installation",
      },
    ],
  },

  "pnb": {
    id: "pnb",
    name: "Punjab National Bank (PNB)",
    logo: "/clients/logo (5).jpeg",
    subtitle: "Bank Branch Facade & 24/7 ATM Signage",
    projects: [
      {
        id: "pnb-kamptee-road-storefront",
        image: "/clients/pnb-kamptee-road-branch-storefront-daytime.jpg",
        description: "Full-width bilingual ACP glow signboard & branch identity installation at Kamptee Road, Nagpur",
        alt: "Punjab National Bank Kamptee Road Nagpur Branch ACP Signboard",
        objectFit: "cover",
      },
      {
        id: "pnb-butibori-atm",
        image: "/clients/pnb-butibori-branch-atm-signboard.png",
        description: "Integrated 24-Hours ATM kiosk header signboard and main branch entrance elevation at Butibori, Nagpur",
        alt: "Punjab National Bank 24 Hours ATM and Branch Entrance Signboard Butibori Nagpur",
        objectFit: "cover",
      },
      {
        id: "pnb-kamptee-road-elevation",
        image: "/clients/pnb-kamptee-road-branch-fascia-signboard.jpg",
        description: "Wide-angle exterior facade view of commercial building banking fascia with illuminated header branding",
        alt: "Punjab National Bank Commercial Building Elevation Signage",
        objectFit: "cover",
      },
    ],
  },

  "quickclean": {
    id: "quickclean",
    name: "Quickclean",
    logo: "/clients/logo (6).jpeg",
    subtitle: "Industrial Facility Branding & Wayfinding Signage",
    projects: [
      {
        id: "quickclean-entrance",
        image: "/clients/quickclean-entrance-portal-fascia.png",
        description: "Facility entrance header fascia signage and department identification panel",
        alt: "Quickclean Facility Entrance Fascia Signboard",
        objectFit: "cover",
      },
      {
        id: "quickclean-hygiene-wall",
        image: "/clients/quickclean-hygiene-barrier-wall-fascia.png",
        description: "Panoramic hygiene mission statement wall graphics along industrial washing line",
        alt: "Quickclean Industrial Hygiene Wall Branding",
        objectFit: "cover",
      },
      {
        id: "quickclean-flow-chart",
        image: "/clients/quickclean-laundry-linen-flow-wall-graphic.png",
        description: "Large-format Laundry Linen Flow process diagram and infographical wall graphic",
        alt: "Quickclean Laundry Linen Flow Infographical Wall Signage",
        objectFit: "contain",
      },
      {
        id: "quickclean-drying-sign",
        image: "/clients/quickclean-drying-area-hanging-signage.png",
        description: "Ceiling-suspended directional wayfinding signage panel for Drying Area",
        alt: "Quickclean Ceiling Suspended Wayfinding Signage",
        objectFit: "cover",
      },
      {
        id: "quickclean-pressing-sign",
        image: "/clients/quickclean-pressing-area-directional-sign.png",
        description: "Suspended zonal navigation sign and matching workstation wall graphic panel",
        alt: "Quickclean Pressing Area Wayfinding Sign and Wall Panel",
        objectFit: "cover",
      },
      {
        id: "quickclean-fresh-linen",
        image: "/clients/quickclean-fresh-linen-area-signage.png",
        description: "Fresh Linen Area ceiling suspended directional wayfinding sign with sorting backdrop",
        alt: "Quickclean Fresh Linen Area Wayfinding Signboard",
        objectFit: "cover",
      },
      {
        id: "quickclean-pillar-wrap",
        image: "/clients/quickclean-pillar-wrap-branding.png",
        description: "Floor-to-ceiling structural pillar wrap featuring Team Work and Integrity corporate values",
        alt: "Quickclean Team Work and Integrity Pillar Wrap Branding",
        objectFit: "contain",
      },
    ],
  },

  "cube-highways": {
    id: "cube-highways",
    name: "Cube Highways",
    logo: "/clients/logo (7).jpeg",
    subtitle: "Infrastructure Corporate Branding & Office Interior Signage",
    projects: [
      {
        id: "cube-1",
        image: "/clients/cube-highways-brick-wall-signage.webp",
        description: "3D acrylic brand emblem and corporate lettering on brick feature wall",
        alt: "Cube Highways 3D Acrylic Logo and Lettering Signage",
        objectFit: "cover",
      },
      {
        id: "cube-2",
        image: "/clients/cube-highways-wall-branding.webp",
        description: "3D wall lettering: Empowering Lives Powering Aspirations",
        alt: "Cube Highways 3D Wall Branding Signage",
        objectFit: "cover",
      },
      {
        id: "cube-reception",
        image: "/clients/cube-highways-reception-3d-signage.png",
        description: "Corporate reception 3D acrylic illuminated logo and lettering on feature wall",
        alt: "Cube Highways Corporate Reception 3D Signage Installation",
        objectFit: "cover",
      },
      {
        id: "cube-values-wheel",
        image: "/clients/cube-highways-values-wheel-wall-graphic.png",
        description: "'I am' corporate core values circular emblem wall installation",
        alt: "Cube Highways Core Values Wheel Wall Graphic",
        objectFit: "contain",
      },
      {
        id: "cube-entity-wordcloud",
        image: "/clients/cube-highways-entity-wordcloud-wall.png",
        description: "Corporate entities and tollway network typography word-cloud feature wall",
        alt: "Cube Highways Entity Typography Word Cloud Wall",
        objectFit: "cover",
      },
      {
        id: "cube-expressway-mural",
        image: "/clients/cube-highways-expressway-wall-mural.png",
        description: "Executive office highway expressway panoramic landscape wall mural",
        alt: "Cube Highways Expressway Landscape Wall Mural",
        objectFit: "cover",
      },
      {
        id: "cube-aerial-mural",
        image: "/clients/cube-highways-aerial-infrastructure-mural.png",
        description: "Conference room aerial expressway infrastructure environmental wall graphics",
        alt: "Cube Highways Aerial Infrastructure Wall Graphics",
        objectFit: "cover",
      },
    ],
  },

  "eazydiner": {
    id: "eazydiner",
    name: "EazyDiner",
    logo: "/clients/logo (8).jpeg",
    subtitle: "Restaurant Dining Partner Outdoor Signage",
    projects: [
      {
        id: "eazydiner-aashri",
        image: "/clients/eazydiner-aashri-restaurant-lollipop-signboard.png",
        description: "Double-sided circular illuminated lollipop signboard for Aashri Restaurant partner venue",
        alt: "EazyDiner Dining Partner Aashri Restaurant Circular Lollipop Signboard",
        objectFit: "cover",
      },
      {
        id: "eazydiner-uberoi",
        image: "/clients/eazydiner-uberois-paratha-pole-signboard.jpg",
        description: "Pole-mounted dual-sided illuminated circular branding signage for Uberoi's Paratha Shop partner venue",
        alt: "EazyDiner Dining Partner Uberoi's Paratha Shop Circular Pole Signboard",
        objectFit: "cover",
      },
    ],
  },

  "samsung": {
    id: "samsung",
    name: "Samsung",
    logo: "/clients/logo (9).jpeg",
    subtitle: "Retail Experience Store Pre-Launch Mall Barricade",
    projects: [
      {
        id: "samsung-mall-barricade",
        image: "/clients/samsung-store-prelaunch-mall-barricade.png",
        description: "Retail store pre-launch mall corner barricade hoarding with 'Tech-rrific experience' branding",
        alt: "Samsung Retail Store Pre-Launch Mall Barricade Hoarding",
        objectFit: "contain",
      },
    ],
  },

  "terex": {
    id: "terex",
    name: "Terex",
    logo: "/clients/logo (10).jpeg",
    projects: [
      {
        id: "terex-1",
        image: "/gallery/signage/precision-cut-metal.webp",
        description: "Fiber laser cut SS 316 grade industrial facility signage",
        alt: "Terex Precision Metal Signage",
      },
    ],
  },

  "mankind-pharma": {
    id: "mankind-pharma",
    name: "Mankind Pharma",
    logo: "/clients/logo (11).jpeg",
    subtitle: "Healthcare Exhibition Stall & Medical Display Signage",
    projects: [
      {
        id: "mankind-exhibition-stall",
        image: "/clients/mankind-pharma-exhibition-stall-branding.png",
        description: "Medical conference exhibition stall branding and high-resolution backdrop display panels",
        alt: "Mankind Pharma Healthcare Exhibition Stall Branding",
        objectFit: "cover",
      },
    ],
  },

  "adani-gas": {
    id: "adani-gas",
    name: "Adani Gas",
    logo: "/clients/adani-gas-logo.webp",
    subtitle: "Infrastructure & Commercial Station Signage",
    projects: [
      {
        id: "adani-1",
        image: "/clients/adani-gas-daytime-fascia.webp",
        description: "Exterior ACP building fascia with 3D acrylic letters & corporate branding",
        alt: "Adani Gas City Gate Station Daytime ACP Signboard",
      },
      {
        id: "adani-2",
        image: "/clients/adani-gas-corner-elevation.webp",
        description: "Wrap-around corner elevation signage with precision dual-sided illumination",
        alt: "Adani Gas Station Corner Elevation Signage",
      },
      {
        id: "adani-3",
        image: "/clients/adani-gas-night-illumination.webp",
        description: "High-lumen nighttime LED glow signage for City Gate Station facility",
        alt: "Adani Gas City Gate Station Night Illumination Signboard",
      },
    ],
  },
};

