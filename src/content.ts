// All copy, figures and photography live here so the site can be updated
// without touching layout code.

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "AIKO",
  full: "AI Kitchen Operations",
  tagline: "Smarter Kitchens, Better Operations.",
  taglineZh: "智慧厨房，高效运营",
  email: "hello@aiko.kitchen",
  phone: "",
  // Address intentionally omitted until the facility details are confirmed.
  address: "",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Quality", href: "#quality" },
  { label: "Partners", href: "#partners" },
  { label: "FAQs", href: "#faq" },
];

export const heroDishes = [
  {
    title: "Chargrilled Chicken, Herb Quinoa & Seasonal Greens",
    line: "Ready meal · 42,000 portions this week",
    image: unsplash("1546069901-ba9599a7e63c", 1400),
  },
  {
    title: "Seared Salmon, Charred Lemon & Garden Vegetables",
    line: "Chilled entrée · Batch released in 38 min",
    image: unsplash("1467003909585-2f8a72700288", 1400),
  },
  {
    title: "Slow-Cooked Beef, Roasted Roots & Jus",
    line: "Cook-chill · Yield variance 0.6%",
    image: unsplash("1504674900247-0877df9cc836", 1400),
  },
];

// Chips orbiting the hero plate – the data AIKO manages behind every dish.
export const heroChips = {
  left: ["Demand Forecast", "Batch Planning", "Recipe Specs"],
  right: ["Cold Chain", "HACCP Log", "Traceability"],
};

export const stats = [
  { value: "60,000+", label: "Meals produced daily" },
  { value: "99.6%", label: "On-time, in-full dispatch" },
  { value: "8", label: "Food safety & quality certifications" },
  { value: "120+", label: "Foodservice & retail partners" },
];

export const about = {
  eyebrow: "About AIKO",
  title: "A central kitchen that runs on data, not guesswork.",
  body: [
    "AIKO is a food processing and central kitchen operator. We prepare ready meals, sauces, portioned proteins and prepared produce for restaurant groups, retailers and institutional caterers — at volumes a single kitchen can't reach, and to a standard that has to be the same on the ten-thousandth portion as on the first.",
    "What sets us apart is how the kitchen is run. Every order, recipe, temperature reading and batch record flows through our own operations platform. Forecasts decide what gets cooked, sensors confirm how it was cooked, and the records follow each product all the way to our partners' doors.",
  ],
  image: unsplash("1556910103-1c02745aae4d", 1400),
  imageAlt: "Chef preparing ingredients in a professional kitchen",
  points: [
    "Purpose-built, temperature-zoned production facility",
    "Chef-led product development, engineered for scale",
    "Operations platform developed in-house",
  ],
};

export const platform = {
  eyebrow: "The AIKO Platform",
  title: "Intelligence at every station.",
  intro:
    "Our operations platform connects planning, production and quality into one live system. It learns from every shift — so the kitchen gets more precise the longer it runs.",
  modules: [
    {
      key: "forecast",
      name: "Demand Forecasting",
      text: "Machine-learning models read partner order history, seasonality, promotions and local events to forecast volumes days ahead — cutting over-production and last-minute shortfalls.",
      metric: "−32% overproduction",
    },
    {
      key: "schedule",
      name: "Production Scheduling",
      text: "Batches are sequenced automatically across kettles, ovens, blast chillers and packing lines, respecting allergen changeovers, labour and shelf-life windows.",
      metric: "+18% line utilisation",
    },
    {
      key: "recipe",
      name: "Recipe & Yield Control",
      text: "Digital specifications scale every recipe to the gram. Weighed inputs are checked against target yields in real time, so every portion matches the approved spec.",
      metric: "<1% yield variance",
    },
    {
      key: "vision",
      name: "Vision Quality Inspection",
      text: "Cameras on the packing line check portion fill, seal integrity and label accuracy on every pack, flagging exceptions before product leaves the room.",
      metric: "100% packs inspected",
    },
    {
      key: "coldchain",
      name: "Cold-Chain Monitoring",
      text: "Wireless probes log cooking, cooling and storage temperatures continuously. Critical limits trigger instant alerts and corrective-action workflows.",
      metric: "24/7 CCP monitoring",
    },
    {
      key: "trace",
      name: "Traceability & Recall",
      text: "Each batch links raw-material lots, operators, equipment and test results. A complete one-up, one-down trace is produced in minutes, not days.",
      metric: "Full trace < 5 min",
    },
  ],
  flow: [
    { step: "Sense", text: "Orders, stock, sensors and line data stream in." },
    { step: "Predict", text: "Models forecast demand and plan the week." },
    { step: "Produce", text: "Scheduled batches, guided by digital specs." },
    { step: "Verify", text: "Automated checks against every critical limit." },
    { step: "Deliver", text: "Chilled dispatch with full batch records." },
  ],
  image: unsplash("1551288049-bebda4e38f71", 1400),
};

export const capabilities = {
  eyebrow: "Capabilities",
  title: "What we make for our partners.",
  items: [
    {
      name: "Ready Meals",
      text: "Chilled and frozen cook-chill meals, from single-serve lunches to multi-component entrées.",
      image: unsplash("1512621776951-a57141f2eefd", 900),
    },
    {
      name: "Sauces, Stocks & Bases",
      text: "Kettle-cooked sauces, dressings and soup bases in pouch, tub or bulk formats.",
      image: unsplash("1473093295043-cdd812d0e601", 900),
    },
    {
      name: "Portioned Proteins",
      text: "Marinated, sous-vide and chargrilled proteins, portioned to exact weights.",
      image: unsplash("1555939594-58d7cb561ad1", 900),
    },
    {
      name: "Prepared Produce",
      text: "Washed, cut and blanched vegetables prepared to your kitchen's specification.",
      image: unsplash("1498837167922-ddd27525d352", 900),
    },
  ],
  services: [
    {
      name: "Central Kitchen Supply",
      text: "Consistent components for multi-site restaurant groups, so every venue serves the same dish.",
    },
    {
      name: "Private Label & OEM",
      text: "Product development, costing and manufacture under your brand, from pilot batch to full run.",
    },
    {
      name: "Institutional Catering",
      text: "Nutritionally planned menus for healthcare, aged care, education and corporate dining.",
    },
  ],
};

export const quality = {
  eyebrow: "Quality & Compliance",
  title: "Certified, audited, and recorded — every batch.",
  intro:
    "Food safety isn't a department at AIKO; it is built into the system. Our HACCP plan is digitised end-to-end, critical control points are monitored automatically, and independent auditors review our site every year.",
  certifications: [
    { code: "HACCP", name: "Hazard Analysis & Critical Control Points", note: "Codex-aligned food safety plan" },
    { code: "ISO 22000", name: "Food Safety Management System", note: "ISO 22000:2018" },
    { code: "BRCGS", name: "Global Standard for Food Safety", note: "Grade AA" },
    { code: "FSSC 22000", name: "Food Safety System Certification", note: "GFSI-recognised scheme" },
    { code: "ISO 9001", name: "Quality Management System", note: "ISO 9001:2015" },
    { code: "ISO 14001", name: "Environmental Management", note: "ISO 14001:2015" },
    { code: "HALAL", name: "Halal Certified", note: "Dedicated production lines" },
    { code: "GMP", name: "Good Manufacturing Practice", note: "Site-wide programme" },
  ],
  figures: [
    { value: "0", label: "Critical non-conformances in the last 3 audit cycles" },
    { value: "14", label: "Allergens controlled with validated changeovers" },
    { value: "2,400+", label: "Automated CCP checks logged every day" },
    { value: "100%", label: "Batches released with a complete digital record" },
  ],
  image: unsplash("1581299894007-aaa50297cf16", 1400),
};

export const partners = {
  eyebrow: "Partners",
  title: "Trusted by kitchens that can't afford to get it wrong.",
  intro:
    "We work alongside more than 120 partners — from fast-growing restaurant brands to national retailers and public institutions. Most have been with us for over three years.",
  sectors: [
    { name: "Restaurant Groups", count: "45+" },
    { name: "Retail & Supermarkets", count: "20+" },
    { name: "Airline & Travel Catering", count: "8" },
    { name: "Healthcare & Aged Care", count: "25+" },
    { name: "Education", count: "15+" },
    { name: "Corporate Dining", count: "10+" },
  ],
  quote: {
    text: "Moving our sauces and proteins to AIKO took a whole prep shift out of every venue. The product is identical across all our sites, and the batch paperwork is there before we even ask.",
    who: "Head of Culinary, multi-site restaurant group",
  },
  gallery: [
    unsplash("1414235077428-338989a2e8c0", 900),
    unsplash("1565299624946-b28f40a0ae38", 900),
    unsplash("1540189549336-e6e99c3679fe", 900),
  ],
};

export const faqs = [
  {
    q: "What is a central kitchen, and why use one?",
    a: "A central kitchen prepares food in bulk at one controlled facility and supplies it to multiple outlets. Partners get consistent product, lower labour and waste at each venue, and a single, audited point of food safety control.",
  },
  {
    q: "How does AI actually improve food production?",
    a: "Mainly in planning and verification. Our forecasting models decide how much to produce, scheduling software sequences the work, and sensors and cameras check every critical step. Chefs still create and approve every recipe — the platform makes sure it is reproduced exactly.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "It depends on the product and format. For existing ranges we can start with modest weekly volumes; for new product development we typically begin with a pilot batch and scale once the specification is signed off.",
  },
  {
    q: "Can you develop products under our own brand?",
    a: "Yes. Our development team handles recipe development, shelf-life validation, nutritional panels, labelling and costing, then manufactures under your brand.",
  },
  {
    q: "How do you manage allergens?",
    a: "Allergen risk is assessed for every product. Production is scheduled to minimise changeovers, cleaning is validated with swab testing, and labels are generated directly from the approved digital specification.",
  },
  {
    q: "Can partners access batch and quality records?",
    a: "Yes. Partners receive certificates of analysis and batch records with each delivery, and can request a full trace on any lot at any time.",
  },
];
