// Contact
export const WHATSAPP_NUMBER = "916360363095";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = "+91 63603 63095";

// Navigation
export const NAV_LINKS = [
  { label: "Builds", href: "#builds" },
  { label: "Custom", href: "#configurator" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

// Social Proof Stats
export const STATS = [
  { label: "Builds Delivered", value: "10+", numericValue: 10, isNumber: true },
  { label: "Avg. Rating", value: "5.0", isNumber: false },
  { label: "Turnaround", value: "48 hrs", isNumber: false },
  { label: "Warranty", value: "1 Year", isNumber: false },
] as const;

// Prebuilt Configurations
export const PREBUILT_CONFIGS = [
  {
    tag: "OFFICE & WFH",
    name: "The Starter",
    description: "Smooth multitasking for everyday work, video calls, and light media.",
    useCase: "Office productivity, web browsing, Zoom/Teams, light photo editing",
    specs: [
      { label: "Processor", value: "AMD Ryzen 5 5600G" },
      { label: "Memory", value: "16 GB DDR4 3200MHz" },
      { label: "Storage", value: "500 GB NVMe SSD" },
      { label: "Graphics", value: "Integrated Radeon Vega 7" },
      { label: "Power Supply", value: "550W Bronze" },
      { label: "Connectivity", value: "WiFi + Bluetooth" },
    ],
    price: "34,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Starter build (Office & WFH) starting at ₹34,000. Can you share the full specs and availability?",
  },
  {
    tag: "BUDGET GAMING",
    name: "The Player",
    description: "eSports titles at 1080p with solid frame rates. Your entry into PC gaming.",
    useCase: "Valorant, CS2, Fortnite at 1080p medium-high, 60+ FPS",
    specs: [
      { label: "Processor", value: "Intel i3-14100F" },
      { label: "Memory", value: "16 GB DDR4 3200MHz" },
      { label: "Storage", value: "500 GB NVMe SSD" },
      { label: "Graphics", value: "Sapphire Pulse RX 7600 8GB" },
      { label: "Power Supply", value: "650W Bronze" },
      { label: "Cooling", value: "Tower Air Cooler" },
    ],
    price: "60,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Player build (Budget Gaming) starting at ₹60,000. Can you share the full specs and availability?",
  },
  {
    tag: "1080P ULTRA",
    name: "The Arena",
    description: "Max out 1080p. RTX ray tracing, DLSS, and 100+ FPS in modern titles.",
    useCase: "AAA gaming at 1080p ultra, 100+ FPS, streaming-capable",
    specs: [
      { label: "Processor", value: "AMD Ryzen 5 5600" },
      { label: "Memory", value: "16 GB DDR4 3200MHz" },
      { label: "Storage", value: "1 TB NVMe SSD" },
      { label: "Graphics", value: "NVIDIA RTX 4060 8GB" },
      { label: "Power Supply", value: "750W Bronze" },
      { label: "Cooling", value: "Deepcool AK400" },
    ],
    price: "72,000",
    popular: true,
    whatsappMessage: "Hi! I'm interested in The Arena build (1080p Ultra Gaming) starting at ₹72,000. Can you share the full specs and availability?",
  },
  {
    tag: "1440P GAMING",
    name: "The Edge",
    description: "Step up to 1440p. Buttery smooth gameplay on a high-refresh monitor.",
    useCase: "1440p medium-high gaming, 80+ FPS in AAA, 1080p ultra at high refresh",
    specs: [
      { label: "Processor", value: "AMD Ryzen 5 7600 (AM5)" },
      { label: "Memory", value: "32 GB DDR5 6000MHz" },
      { label: "Storage", value: "1 TB NVMe SSD" },
      { label: "Graphics", value: "NVIDIA RTX 4060 Ti 8GB" },
      { label: "Power Supply", value: "750W Gold ATX 3.1" },
      { label: "Cooling", value: "Deepcool AK400" },
    ],
    price: "1,05,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Edge build (1440p Gaming) starting at ₹1,05,000. Can you share the full specs and availability?",
  },
  {
    tag: "CONTENT CREATION",
    name: "The Studio",
    description: "Built for editors, designers, and streamers. Multithreaded power meets GPU muscle.",
    useCase: "Premiere Pro, After Effects, DaVinci Resolve, streaming + gaming",
    specs: [
      { label: "Processor", value: "AMD Ryzen 7 9700X (8-Core)" },
      { label: "Memory", value: "32 GB DDR5 6000MHz" },
      { label: "Storage", value: "1 TB NVMe + 2 TB HDD" },
      { label: "Graphics", value: "AMD RX 7800 XT 16GB" },
      { label: "Power Supply", value: "750W Gold" },
      { label: "Cooling", value: "Deepcool AK620 Dual Tower" },
    ],
    price: "1,58,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Studio build (Content Creation) starting at ₹1,58,000. Can you share the full specs and availability?",
  },
  {
    tag: "HIGH-END 1440P",
    name: "The Titan",
    description: "Maxed 1440p at 120+ FPS. Capable 4K. The gaming sweet spot.",
    useCase: "1440p ultra at 120+ FPS, competitive 4K gaming, heavy multitasking",
    specs: [
      { label: "Processor", value: "AMD Ryzen 7 7800X3D" },
      { label: "Memory", value: "32 GB DDR5 6000MHz" },
      { label: "Storage", value: "1 TB Samsung 990 Pro NVMe" },
      { label: "Graphics", value: "AMD RX 9070 XT 16GB" },
      { label: "Power Supply", value: "850W Gold" },
      { label: "Cooling", value: "240mm AIO Liquid" },
    ],
    price: "1,90,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Titan build (High-End 1440p) starting at ₹1,90,000. Can you share the full specs and availability?",
  },
  {
    tag: "4K GAMING",
    name: "The Overkill",
    description: "4K high-refresh gaming. Professional workloads. No compromise, no bottleneck.",
    useCase: "4K gaming at 80+ FPS, professional 3D rendering, video production",
    specs: [
      { label: "Processor", value: "AMD Ryzen 9 9950X (16-Core)" },
      { label: "Memory", value: "64 GB DDR5 6000MHz" },
      { label: "Storage", value: "2 TB + 2 TB NVMe SSD" },
      { label: "Graphics", value: "NVIDIA RTX 5070 Ti 16GB" },
      { label: "Power Supply", value: "1000W Gold ATX 3.0" },
      { label: "Cooling", value: "360mm AIO LCD" },
    ],
    price: "3,35,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Overkill build (4K Gaming) starting at ₹3,35,000. Can you share the full specs and availability?",
  },
  {
    tag: "FLAGSHIP",
    name: "The Absolute",
    description: "The best of everything. Period. For those who want the ultimate machine.",
    useCase: "4K 144Hz, 8K-capable, AI workloads, no-compromise flagship",
    specs: [
      { label: "Processor", value: "AMD Ryzen 9 9950X (16-Core)" },
      { label: "Memory", value: "64 GB DDR5 6400MHz CL32" },
      { label: "Storage", value: "2 TB x 2 NVMe + 4 TB HDD" },
      { label: "Graphics", value: "ASUS TUF RTX 5090 32GB" },
      { label: "Power Supply", value: "1000W Platinum" },
      { label: "Cooling", value: "360mm AIO LCD Display" },
    ],
    price: "6,80,000",
    popular: false,
    whatsappMessage: "Hi! I'm interested in The Absolute build (Flagship) starting at ₹6,80,000. Can you share the full specs and availability?",
  },
] as const;

// How It Works Steps
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Drop us a WhatsApp message with your budget and what you'll use the PC for. No technical knowledge needed — we speak human.",
    icon: "MessageCircle" as const,
  },
  {
    number: "02",
    title: "Get Your Build Plan",
    description:
      "We send you a detailed component list with individual prices. Every choice explained. Swap anything you want — it's your build.",
    icon: "FileText" as const,
  },
  {
    number: "03",
    title: "We Build & Stress Test",
    description:
      "Components assembled with clean cable management. Every build is stress-tested for stability. You get progress photos on WhatsApp.",
    icon: "Cpu" as const,
  },
  {
    number: "04",
    title: "Delivered to Your Door",
    description:
      "PC delivered in Bangalore with OS installed, warranty card, and full build documentation. Ready to power on.",
    icon: "Truck" as const,
  },
] as const;

// Why Us
export const DIFFERENTIATORS = [
  {
    icon: "Shield" as const,
    title: "Transparent Pricing",
    body: "You see every component and its individual price. No hidden margins, no bundled mystery costs. You know exactly where your money goes.",
  },
  {
    icon: "Camera" as const,
    title: "Build Progress Photos",
    body: "We send you photos at every stage — parts laid out, assembly in progress, cable management done, stress tests running. Full visibility.",
  },
  {
    icon: "Wrench" as const,
    title: "Truly Custom",
    body: "Not a pre-built with a sticker. Every component is chosen specifically for your workflow and budget. Your PC, your way.",
  },
  {
    icon: "Headphones" as const,
    title: "Lifetime Support",
    body: "Questions about upgrades, troubleshooting, or your next build? WhatsApp us anytime. You get a tech advisor, not just a PC.",
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote:
      "I told them my budget and what I do for work — they came back with a build that's been absolutely rock solid for months. No BS, no upselling.",
    name: "Rahul K.",
    detail: "Content Creator • ₹1.5L Build",
    initials: "RK",
    rating: 5,
  },
  {
    quote:
      "The transparency was refreshing. I could see every part's price and they even suggested where I could save money. PC runs like a dream.",
    name: "Priya M.",
    detail: "UI Designer • ₹46K Build",
    initials: "PM",
    rating: 5,
  },
  {
    quote:
      "Went from a laggy laptop to a machine that handles Premiere Pro and After Effects simultaneously. Should've done this years ago.",
    name: "Arjun S.",
    detail: "Video Editor • ₹1.1L Build",
    initials: "AS",
    rating: 5,
  },
] as const;

// FAQs
export const FAQS = [
  {
    question: "How do I place an order?",
    answer: "WhatsApp us with your budget and what you'll use the PC for. We'll send a detailed component list with individual pricing within 2 hours. You approve (or tweak), we source and build. Simple.",
  },
  {
    question: "How long does a build take?",
    answer: "Most builds are completed within 48 hours of confirmation. Complex custom loop cooling builds may take 3-4 days. We send progress photos on WhatsApp throughout.",
  },
  {
    question: "Why custom over a Dell/HP pre-built?",
    answer: "At the same price, a custom build delivers 20-40% better specifications. A \u20B91,00,000 custom build outperforms a \u20B91,00,000 Dell/HP by a wide margin \u2014 better GPU, faster storage, superior cooling, and a real upgrade path.",
  },
  {
    question: "Can I choose my own exact parts?",
    answer: "Absolutely. Specify exact models, or give us your budget and use case \u2014 we'll recommend the optimal configuration. Most customers do a mix: pick the CPU and GPU they want, let us handle the rest.",
  },
  {
    question: "Do you provide a warranty?",
    answer: "Every build includes a 1-year build warranty covering assembly and workmanship. Individual components carry manufacturer warranties (typically 3-5 years). We handle all warranty claims for you \u2014 no runaround.",
  },
  {
    question: "Are your prices competitive with online retailers?",
    answer: "Our builds are priced competitively with major online custom builders like Ant PC and SMC International, with the added advantage of same-day service, no shipping risk, and local after-sales support in Bangalore.",
  },
  {
    question: "Why are GPU prices so high right now?",
    answer: "GPU and RAM prices are elevated due to a global DRAM shortage and constrained RTX 50-series supply. We monitor prices daily and build at the best available rates. We'll always tell you if waiting a few weeks could save you money.",
  },
  {
    question: "Do you offer EMI or payment plans?",
    answer: "We currently accept full payment before the build begins via UPI, bank transfer, or cash. EMI options through partner financing are coming soon.",
  },
  {
    question: "Can I upgrade my PC later?",
    answer: "We build with upgradeability in mind. Need more RAM next year? Bigger GPU? Just WhatsApp us \u2014 we'll recommend the best upgrade path and handle the installation.",
  },
  {
    question: "What about DDR4 vs DDR5?",
    answer: "DDR4 is being phased out \u2014 Samsung stopped production in late 2025. For new builds, we recommend DDR5 platforms (AMD AM5 or Intel Arrow Lake) for future-proofing. Budget builds can still use DDR4 on AM4 or LGA 1700 at lower cost.",
  },
  {
    question: "Do you deliver outside Bangalore?",
    answer: "We deliver free within Bangalore city for builds above \u20B950,000. For outstation delivery, we can arrange secure shipping at \u20B91,500\u20133,000 depending on location.",
  },
  {
    question: "Do you build workstations and AI/ML PCs too?",
    answer: "Yes. We build professional workstations, deep learning rigs, and multi-GPU setups. WhatsApp us your requirements \u2014 these are quoted individually based on exact specifications.",
  },
] as const;
