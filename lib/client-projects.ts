export interface ClientProject {
  id: string;
  image: string;
  description: string;
  alt?: string;
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
    projects: [
      {
        id: "chola-1",
        image: "/gallery/signage/3d-corporate-identity.webp",
        description: "Branch entrance 3D acrylic illuminated letters on metal framework",
        alt: "Chola Finance 3D Signboard",
      },
      {
        id: "chola-2",
        image: "/gallery/acp-work/silver-acp-finish.webp",
        description: "Exterior metallic silver ACP elevation facade cladding",
        alt: "Chola Finance ACP Cladding",
      },
    ],
  },

  "smfg-india-credit": {
    id: "smfg-india-credit",
    name: "SMFG India Credit",
    logo: "/clients/logo (2).jpeg",
    projects: [
      {
        id: "smfg-1",
        image: "/hero/hero (6).webp",
        description: "Corporate reception 3D acrylic logo on vertical wood wall",
        alt: "SMFG India Credit Reception Signboard",
      },
      {
        id: "smfg-2",
        image: "/hero/hero (4).webp",
        description: "3D acrylic mission statement lettering on fluted panel wall",
        alt: "SMFG India Credit Wall Branding",
      },
    ],
  },

  "fortune": {
    id: "fortune",
    name: "Fortune",
    logo: "/clients/logo (3).jpeg",
    projects: [
      {
        id: "fortune-1",
        image: "/hero/hero (5).webp",
        description: "Fortune TMT storefront building facade and 3D illuminated letters",
        alt: "Fortune TMT Dealer Facade Signboard",
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
    projects: [
      {
        id: "pnb-1",
        image: "/gallery/led-displays/glow-sign-board.webp",
        description: "All-weather high-lumen illuminated bank branch glow sign",
        alt: "PNB LED Glow Sign Board",
      },
      {
        id: "pnb-2",
        image: "/gallery/signage/directional-signage.webp",
        description: "Campus wayfinding and ATM directional signage board",
        alt: "PNB Directional Signboard",
      },
    ],
  },

  "quickclean": {
    id: "quickclean",
    name: "Quickclean",
    logo: "/clients/logo (6).jpeg",
    projects: [
      {
        id: "quickclean-1",
        image: "/hero/collage/flex-backlit.jpg",
        description: "Commercial storefront flex backlit lightbox signboard",
        alt: "Quickclean Backlit Signboard",
      },
    ],
  },

  "cube-highways": {
    id: "cube-highways",
    name: "Cube Highways",
    logo: "/clients/logo (7).jpeg",
    projects: [
      {
        id: "cube-1",
        image: "/clients/cube-highways-brick-wall-signage.webp",
        description: "3D acrylic brand emblem and corporate lettering on brick feature wall",
        alt: "Cube Highways 3D Acrylic Logo and Lettering Signage",
      },
      {
        id: "cube-2",
        image: "/clients/cube-highways-wall-branding.webp",
        description: "3D wall lettering: Empowering Lives Powering Aspirations",
        alt: "Cube Highways 3D Wall Branding Signage",
      },
    ],
  },

  "eazydiner": {
    id: "eazydiner",
    name: "EazyDiner",
    logo: "/clients/logo (8).jpeg",
    projects: [
      {
        id: "eazydiner-1",
        image: "/gallery/led-displays/fabric-lightbox.webp",
        description: "Edge-lit frameless fabric lightbox for restaurant partner venues",
        alt: "EazyDiner Fabric Lightbox",
      },
    ],
  },

  "samsung": {
    id: "samsung",
    name: "Samsung",
    logo: "/clients/logo (9).jpeg",
    projects: [
      {
        id: "samsung-1",
        image: "/gallery/led-displays/backlit-led-signage.webp",
        description: "Cast acrylic 3D letters with certified Samsung LED modules",
        alt: "Samsung Backlit LED Signboard",
      },
      {
        id: "samsung-2",
        image: "/gallery/led-displays/storefront-led-display.webp",
        description: "High-brightness retail storefront LED display installation",
        alt: "Storefront LED Display",
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
    projects: [
      {
        id: "mankind-1",
        image: "/gallery/printing/custom-poster-printing.webp",
        description: "Healthcare promotional pharmacy display and high-res backlits",
        alt: "Mankind Pharma Display",
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

