export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  category: string;
  iconName: "shield" | "truck" | "zap";
  items: FaqItem[];
}

export const faqsData: FaqCategory[] = [
  {
    category: "Services & Quality",
    iconName: "shield",
    items: [
      {
        q: "What types of signage do you specialize in?",
        a: "We specialize in high-end signage solutions including LED Neon signs, ACP (Aluminum Composite Panel) signboards, Acrylic 3D letters, Glow signs, and custom interior branding. All our products are crafted with premium materials for durability.",
      },
      {
        q: "What materials do you use for your signboards?",
        a: "We use industrial-grade materials like 3mm/4mm ACP sheets from top brands, UV-resistant acrylic, and high-intensity LED modules. Our signs are built to withstand Nagpur's weather conditions, ensuring long-lasting performance.",
      },
      {
        q: "Are the LED signs energy efficient?",
        a: "Yes! We exclusively use energy-efficient LED modules that provide maximum brightness while consuming minimal power. They have a long lifespan of over 50,000 hours, making them a cost-effective choice for your business.",
      },
    ],
  },
  {
    category: "Process & Delivery",
    iconName: "truck",
    items: [
      {
        q: "How long does it take to complete an order?",
        a: "Standard signage products typically take 3-5 business days. More complex projects, such as large-scale ACP work or custom 3D LED signs, may take 7-10 days. We provide a detailed timeline during the quotation phase.",
      },
      {
        q: "Do you offer on-site measurement and installation in Nagpur?",
        a: "Absolutely! For projects within Nagpur and surrounding Vidarbha regions, we provide professional on-site measurements and expert installation services to ensure your signage is perfectly aligned and securely mounted.",
      },
      {
        q: "Can I get a custom design for my sign?",
        a: "Yes, our team of expert designers will work with you to create a custom design that matches your brand identity. We provide 3D mockups so you can visualize how your sign will look before manufacturing begins.",
      },
    ],
  },
  {
    category: "Payments & Support",
    iconName: "zap",
    items: [
      {
        q: "How do I request a quote and what is the payment process?",
        a: "You can request a quote directly through our website by adding services to your list. We usually require a 50% advance to initiate the project, with the remaining balance due upon completion and installation.",
      },
      {
        q: "Do you offer a warranty on your signboards?",
        a: "We provide a 1-year warranty on all our LED modules and power supplies. Our high-quality ACP and acrylic materials are inherently durable and resistant to fading, ensuring your brand stays bright for years.",
      },
    ],
  },
];
