import { WHATSAPP_BASE_URL } from "./constants";

export type ComponentOption = {
  id: string;
  name: string;
  note: string;
  priceAdd: number;
};

export type ConfiguratorStep = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  options: ComponentOption[];
  multiSelect?: boolean;
};

// ===========================================
// STEP 0: USE CASE (no pricing, just preference)
// ===========================================
export const USE_CASE_OPTIONS = [
  { id: "gaming", name: "Gaming", note: "High FPS, smooth gameplay, future-proof", icon: "Gamepad2" },
  { id: "creation", name: "Content Creation", note: "Video editing, 3D rendering, streaming", icon: "Video" },
  { id: "work", name: "Work & Productivity", note: "WFH, multitasking, meetings", icon: "Monitor" },
  { id: "allround", name: "All-Rounder", note: "A bit of everything", icon: "Layers" },
] as const;

// ===========================================
// STEP 1: PROCESSOR
// ===========================================
export const PROCESSOR_OPTIONS: ConfiguratorStep = {
  id: "processor",
  title: "Processor",
  subtitle: "The brain of your build — determines overall speed and multitasking",
  icon: "Cpu",
  options: [
    { id: "cpu-r5-5600g", name: "AMD Ryzen 5 5600G", note: "6-core APU · Great for office/WFH, no GPU needed", priceAdd: 11500 },
    { id: "cpu-i3-14100f", name: "Intel i3-14100F", note: "4-core · Excellent budget gaming CPU", priceAdd: 11000 },
    { id: "cpu-i5-14400f", name: "Intel i5-14400F", note: "10-core · India's most popular mid-range gaming CPU", priceAdd: 16500 },
    { id: "cpu-r5-7600", name: "AMD Ryzen 5 7600 (AM5)", note: "6-core DDR5 · Future-proof platform, great gaming", priceAdd: 19800 },
    { id: "cpu-r5-9600x", name: "AMD Ryzen 5 9600X (Zen 5)", note: "6-core · Latest gen, excellent single-thread", priceAdd: 24500 },
    { id: "cpu-r7-9700x", name: "AMD Ryzen 7 9700X", note: "8-core Zen 5 · Editing, streaming, multitasking beast", priceAdd: 34500 },
    { id: "cpu-r7-7800x3d", name: "AMD Ryzen 7 7800X3D", note: "8-core 3D V-Cache · #1 gaming CPU in the world", priceAdd: 42000 },
    { id: "cpu-ultra5-245k", name: "Intel Core Ultra 5 245K", note: "Arrow Lake · DDR5-only, PCIe 5.0, newest Intel platform", priceAdd: 23500 },
    { id: "cpu-r9-9900x", name: "AMD Ryzen 9 9900X", note: "12-core Zen 5 · Professional workloads + gaming", priceAdd: 45000 },
    { id: "cpu-r9-9950x", name: "AMD Ryzen 9 9950X", note: "16-core Zen 5 · Absolute flagship, no limits", priceAdd: 63000 },
    { id: "cpu-i9-14900k", name: "Intel i9-14900K", note: "24-core · Top Intel chip, extreme performance", priceAdd: 53000 },
  ],
};

// ===========================================
// STEP 2: GRAPHICS CARD
// ===========================================
export const GPU_OPTIONS: ConfiguratorStep = {
  id: "gpu",
  title: "Graphics Card",
  subtitle: "The most impactful component for gaming and visual work",
  icon: "MonitorPlay",
  options: [
    { id: "gpu-none", name: "No GPU (Integrated Graphics)", note: "For office work only · Requires APU processor (5600G)", priceAdd: 0 },
    { id: "gpu-gtx1650", name: "INNO3D GTX 1650 4GB", note: "eSports titles at 1080p medium · Budget entry", priceAdd: 13000 },
    { id: "gpu-rtx3050", name: "Zotac RTX 3050 8GB", note: "1080p medium-high · Ray tracing capable", priceAdd: 19500 },
    { id: "gpu-rx7600", name: "Sapphire Pulse RX 7600 8GB", note: "1080p high-ultra · Best value 1080p card", priceAdd: 25000 },
    { id: "gpu-rtx4060", name: "RTX 4060 8GB", note: "1080p ultra, entry 1440p · DLSS 3, great efficiency", priceAdd: 30000 },
    { id: "gpu-rx7600xt", name: "RX 7600 XT 16GB", note: "1080p ultra, 1440p medium · 16GB VRAM for editing", priceAdd: 33000 },
    { id: "gpu-rtx4060ti", name: "RTX 4060 Ti 8GB", note: "1080p ultra, solid 1440p · Popular mid-range choice", priceAdd: 38000 },
    { id: "gpu-rx7800xt", name: "RX 7800 XT 16GB", note: "1440p high · 16GB VRAM, excellent for creators", priceAdd: 51000 },
    { id: "gpu-rtx4070s", name: "RTX 4070 Super 12GB", note: "1440p ultra · Sweet spot for high-end gaming", priceAdd: 60000 },
    { id: "gpu-rx9070xt", name: "RX 9070 XT 16GB", note: "1440p ultra, entry 4K · Latest AMD, great value", priceAdd: 73000 },
    { id: "gpu-rtx5070", name: "RTX 5070 12GB", note: "1440p ultra, solid 4K · Next-gen NVIDIA", priceAdd: 72000 },
    { id: "gpu-rtx4070tis", name: "RTX 4070 Ti Super 16GB", note: "1440p maxed, 4K capable · Serious GPU", priceAdd: 88000 },
    { id: "gpu-rtx5070ti", name: "RTX 5070 Ti 16GB", note: "4K gaming, pro workloads · New gen powerhouse", priceAdd: 99000 },
    { id: "gpu-rtx5080", name: "RTX 5080 16GB", note: "4K ultra · Top-tier current gen", priceAdd: 146000 },
    { id: "gpu-rtx5090", name: "RTX 5090 32GB", note: "No compromise · The absolute best GPU money can buy", priceAdd: 290000 },
  ],
};

// ===========================================
// STEP 3: MOTHERBOARD
// ===========================================
export const MOTHERBOARD_OPTIONS: ConfiguratorStep = {
  id: "motherboard",
  title: "Motherboard",
  subtitle: "Connects everything — matched to your processor automatically",
  icon: "CircuitBoard",
  options: [
    // AM4 (DDR4)
    { id: "mb-b550-budget", name: "Gigabyte B550M DS3H", note: "AM4 · Budget DDR4 · Basic but reliable", priceAdd: 7400 },
    { id: "mb-b550-wifi", name: "MSI B550M Pro-VDH WiFi", note: "AM4 · DDR4 + WiFi · Great value", priceAdd: 9500 },
    // LGA 1700 (Intel 12-14th gen)
    { id: "mb-b760-ddr4", name: "Gigabyte B760M H DDR4", note: "LGA 1700 · Budget DDR4 board", priceAdd: 8400 },
    { id: "mb-b760-ddr5", name: "Gigabyte B760M Aorus Elite AX DDR5", note: "LGA 1700 · DDR5 + WiFi 6E", priceAdd: 17000 },
    { id: "mb-z790-mid", name: "ASUS TUF Gaming Z790 Plus WiFi", note: "LGA 1700 · Overclocking support, premium", priceAdd: 34000 },
    // AM5 (DDR5)
    { id: "mb-a620-budget", name: "Gigabyte A620M S2H", note: "AM5 · Cheapest DDR5 entry", priceAdd: 6600 },
    { id: "mb-b650-mid", name: "ASRock B650M PG Lightning WiFi", note: "AM5 · DDR5 + WiFi · Best value AM5", priceAdd: 14300 },
    { id: "mb-b650-aorus", name: "Gigabyte B650M Aorus Elite AX WiFi", note: "AM5 · DDR5 + WiFi 6E · Popular choice", priceAdd: 20500 },
    { id: "mb-x870e-mid", name: "MSI MAG X870E Tomahawk WiFi7", note: "AM5 · High-end features, WiFi 7", priceAdd: 37000 },
    { id: "mb-x870e-hero", name: "ASUS ROG Crosshair X870E Hero", note: "AM5 · Flagship · For extreme builds", priceAdd: 79000 },
    // LGA 1851 (Arrow Lake)
    { id: "mb-z890-budget", name: "Gigabyte Z890 UD WiFi6E", note: "LGA 1851 · Budget Arrow Lake board", priceAdd: 23000 },
    { id: "mb-z890-mid", name: "Gigabyte Z890 Aorus Elite WiFi7", note: "LGA 1851 · Mid-range Arrow Lake", priceAdd: 31000 },
    { id: "mb-z890-rog", name: "ASUS ROG Strix Z890-F Gaming WiFi", note: "LGA 1851 · Premium Arrow Lake", priceAdd: 52000 },
  ],
};

// ===========================================
// STEP 4: MEMORY (RAM)
// ===========================================
export const RAM_OPTIONS: ConfiguratorStep = {
  id: "ram",
  title: "Memory (RAM)",
  subtitle: "More RAM = more apps and browser tabs running smoothly",
  icon: "MemoryStick",
  options: [
    // DDR4
    { id: "ram-16-ddr4-3200", name: "16 GB DDR4 3200MHz (2x8GB)", note: "Corsair Vengeance LPX · Sufficient for gaming", priceAdd: 4400 },
    { id: "ram-16-ddr4-3600", name: "16 GB DDR4 3600MHz (2x8GB)", note: "Corsair/G.Skill · Slight performance boost", priceAdd: 5600 },
    { id: "ram-32-ddr4-3200", name: "32 GB DDR4 3200MHz (2x16GB)", note: "For editing and heavy multitasking", priceAdd: 9500 },
    // DDR5
    { id: "ram-16-ddr5-5600", name: "16 GB DDR5 5600MHz (2x8GB)", note: "G.Skill Ripjaws S5 · Budget DDR5", priceAdd: 5600 },
    { id: "ram-32-ddr5-5600", name: "32 GB DDR5 5600MHz (2x16GB)", note: "Crucial Pro · Best value DDR5 kit", priceAdd: 10000 },
    { id: "ram-32-ddr5-6000", name: "32 GB DDR5 6000MHz (2x16GB)", note: "G.Skill Ripjaws M5 CL36 · Sweet spot for AM5", priceAdd: 10500 },
    { id: "ram-32-ddr5-6000-cl30", name: "32 GB DDR5 6000MHz CL30 (2x16GB)", note: "Premium low-latency · Best gaming performance", priceAdd: 15000 },
    { id: "ram-64-ddr5-6000", name: "64 GB DDR5 6000MHz (2x32GB)", note: "G.Skill Ripjaws S5 · Professional workloads, 3D rendering", priceAdd: 21500 },
    { id: "ram-64-ddr5-6400", name: "64 GB DDR5 6400MHz CL32 (2x32GB)", note: "Top-tier kit for flagship builds", priceAdd: 43000 },
  ],
};

// ===========================================
// STEP 5: STORAGE
// ===========================================
export const STORAGE_OPTIONS: ConfiguratorStep = {
  id: "storage",
  title: "Storage",
  subtitle: "Where your games, files, and projects live — speed matters",
  icon: "HardDrive",
  options: [
    { id: "stor-500-budget", name: "500 GB NVMe SSD (Kingston NV2)", note: "Budget · OS + essential apps", priceAdd: 3400 },
    { id: "stor-500-mid", name: "500 GB NVMe SSD (WD SN580)", note: "Faster read/write speeds", priceAdd: 3800 },
    { id: "stor-1tb-value", name: "1 TB NVMe SSD (WD SN770)", note: "Best value per GB · Games + projects", priceAdd: 6500 },
    { id: "stor-1tb-pro", name: "1 TB NVMe SSD (Samsung 990 Pro)", note: "Premium speed · 7450 MB/s read", priceAdd: 11500 },
    { id: "stor-2tb-value", name: "2 TB NVMe SSD (Crucial P3 Plus)", note: "Large game libraries, video projects", priceAdd: 12500 },
    { id: "stor-2tb-pro", name: "2 TB NVMe SSD (Samsung 990 Pro)", note: "Premium speed + massive capacity", priceAdd: 19500 },
    { id: "stor-1tb-plus-2hdd", name: "1 TB NVMe SSD + 2 TB HDD", note: "Speed + mass storage combo", priceAdd: 13000 },
    { id: "stor-2tb-plus-2hdd", name: "2 TB NVMe + 2 TB HDD", note: "Best of both worlds", priceAdd: 20000 },
    { id: "stor-2x2tb", name: "2 TB x 2 NVMe SSD", note: "4 TB total NVMe · Pro content creators", priceAdd: 37000 },
  ],
};

// ===========================================
// STEP 6: CASE + PSU + COOLING (bundled)
// ===========================================
export const CHASSIS_OPTIONS: ConfiguratorStep = {
  id: "chassis",
  title: "Case, Power & Cooling",
  subtitle: "The foundation — airflow, power delivery, and thermals",
  icon: "Box",
  options: [
    { id: "ch-budget", name: "Budget Build Package", note: "Ant Esports ATX case + 550W Bronze PSU + Stock cooler", priceAdd: 7500 },
    { id: "ch-value", name: "Value Gaming Package", note: "Deepcool Matrexx 55 Mesh + 650W Bronze PSU + Deepcool AK400 cooler", priceAdd: 13500 },
    { id: "ch-mid", name: "Mid-Range Package", note: "Corsair 4000D Airflow + 750W Bronze PSU + Deepcool AK400 cooler", priceAdd: 15500 },
    { id: "ch-performance", name: "Performance Package", note: "NZXT H5 Flow + 750W Gold ATX 3.1 PSU + Deepcool AK620 dual tower", priceAdd: 22000 },
    { id: "ch-highend", name: "High-End Package", note: "Corsair 4000D Airflow + 850W Gold ATX 3.0 PSU + 240mm AIO liquid cooler", priceAdd: 26000 },
    { id: "ch-premium", name: "Premium Package", note: "Lian Li Lancool 217 + 850W Gold PSU + Arctic Liquid Freezer II 360mm AIO", priceAdd: 34000 },
    { id: "ch-enthusiast", name: "Enthusiast Package", note: "Corsair 5000D Airflow + 1000W Gold ATX 3.0 PSU + 360mm AIO ARGB", priceAdd: 38000 },
    { id: "ch-flagship", name: "Flagship Package", note: "Lian Li O11 Dynamic XL + 1000W Platinum PSU + NZXT Kraken Elite 360 LCD", priceAdd: 68000 },
  ],
};

// ===========================================
// STEP 7: EXTRAS (multi-select)
// ===========================================
export const EXTRAS_OPTIONS: ConfiguratorStep = {
  id: "extras",
  title: "Extras & Services",
  subtitle: "Optional add-ons to complete your build",
  icon: "Sparkles",
  multiSelect: true,
  options: [
    { id: "ext-cable", name: "Premium Cable Management", note: "Clean, organized internals with custom routing", priceAdd: 2500 },
    { id: "ext-rgb", name: "RGB Lighting Setup", note: "Addressable RGB fans + LED strips, software controlled", priceAdd: 3000 },
    { id: "ext-win-home", name: "Windows 11 Home (Licensed)", note: "Activated, genuine, ready to use", priceAdd: 9500 },
    { id: "ext-win-pro", name: "Windows 11 Pro (Licensed)", note: "BitLocker, Remote Desktop, Hyper-V", priceAdd: 14000 },
    { id: "ext-wifi", name: "WiFi + Bluetooth Module", note: "If your motherboard doesn't include WiFi", priceAdd: 2000 },
    { id: "ext-warranty-2yr", name: "Extended Warranty (2 Years)", note: "2-year labor + troubleshooting warranty", priceAdd: 5000 },
    { id: "ext-amc", name: "Annual Maintenance Contract", note: "Yearly cleaning, thermal paste, health check", priceAdd: 5000 },
    { id: "ext-peripherals-basic", name: "Basic Peripherals Bundle", note: "Logitech MK120 keyboard + mouse combo", priceAdd: 800 },
    { id: "ext-peripherals-gaming", name: "Gaming Peripherals Bundle", note: "Mechanical keyboard + gaming mouse", priceAdd: 3500 },
  ],
};

// ===========================================
// ALL CONFIGURATOR STEPS IN ORDER
// ===========================================
export const CONFIGURATOR_STEPS: ConfiguratorStep[] = [
  PROCESSOR_OPTIONS,
  GPU_OPTIONS,
  MOTHERBOARD_OPTIONS,
  RAM_OPTIONS,
  STORAGE_OPTIONS,
  CHASSIS_OPTIONS,
  EXTRAS_OPTIONS,
];

// ===========================================
// CPU → MOTHERBOARD COMPATIBILITY MAP
// ===========================================
// Maps CPU IDs to compatible motherboard platform prefixes
type Platform = "am4" | "lga1700" | "am5" | "lga1851";

const CPU_PLATFORM_MAP: Record<string, Platform> = {
  "cpu-r5-5600g": "am4",
  "cpu-i3-14100f": "lga1700",
  "cpu-i5-14400f": "lga1700",
  "cpu-r5-7600": "am5",
  "cpu-r5-9600x": "am5",
  "cpu-r7-9700x": "am5",
  "cpu-r7-7800x3d": "am5",
  "cpu-ultra5-245k": "lga1851",
  "cpu-r9-9900x": "am5",
  "cpu-r9-9950x": "am5",
  "cpu-i9-14900k": "lga1700",
};

const MOTHERBOARD_PLATFORM_MAP: Record<string, Platform> = {
  "mb-b550-budget": "am4",
  "mb-b550-wifi": "am4",
  "mb-b760-ddr4": "lga1700",
  "mb-b760-ddr5": "lga1700",
  "mb-z790-mid": "lga1700",
  "mb-a620-budget": "am5",
  "mb-b650-mid": "am5",
  "mb-b650-aorus": "am5",
  "mb-x870e-mid": "am5",
  "mb-x870e-hero": "am5",
  "mb-z890-budget": "lga1851",
  "mb-z890-mid": "lga1851",
  "mb-z890-rog": "lga1851",
};

// DDR4 boards (all others are DDR5)
const DDR4_BOARDS = new Set(["mb-b550-budget", "mb-b550-wifi", "mb-b760-ddr4"]);

export function getCompatibleMotherboards(cpuId: string | null): ComponentOption[] {
  if (!cpuId) return MOTHERBOARD_OPTIONS.options;
  const platform = CPU_PLATFORM_MAP[cpuId];
  if (!platform) return MOTHERBOARD_OPTIONS.options;
  return MOTHERBOARD_OPTIONS.options.filter(
    (mb) => MOTHERBOARD_PLATFORM_MAP[mb.id] === platform
  );
}

export function getCompatibleRam(motherboardId: string | null): ComponentOption[] {
  if (!motherboardId) return RAM_OPTIONS.options;
  const isDDR4 = DDR4_BOARDS.has(motherboardId);
  return RAM_OPTIONS.options.filter((r) =>
    isDDR4 ? r.id.includes("ddr4") : r.id.includes("ddr5")
  );
}

// ===========================================
// SMART RECOMMENDATIONS BY USE CASE
// ===========================================
export const RECOMMENDATIONS: Record<string, Record<string, string>> = {
  gaming: {
    processor: "cpu-i5-14400f",
    gpu: "gpu-rtx4060",
    motherboard: "mb-b760-ddr4",
    ram: "ram-16-ddr4-3200",
    storage: "stor-1tb-value",
    chassis: "ch-mid",
  },
  creation: {
    processor: "cpu-r7-9700x",
    gpu: "gpu-rx7800xt",
    motherboard: "mb-b650-mid",
    ram: "ram-32-ddr5-6000",
    storage: "stor-1tb-plus-2hdd",
    chassis: "ch-performance",
  },
  work: {
    processor: "cpu-r5-5600g",
    gpu: "gpu-none",
    motherboard: "mb-b550-wifi",
    ram: "ram-16-ddr4-3200",
    storage: "stor-500-budget",
    chassis: "ch-budget",
  },
  allround: {
    processor: "cpu-r5-7600",
    gpu: "gpu-rtx4060",
    motherboard: "mb-b650-mid",
    ram: "ram-32-ddr5-6000",
    storage: "stor-1tb-value",
    chassis: "ch-mid",
  },
};

// ===========================================
// WHATSAPP MESSAGE BUILDER
// ===========================================
export function buildWhatsAppMessage(
  useCase: string,
  selections: Record<string, string | string[]>,
  total: number
): string {
  const parts = [
    `Hi! I'd like a quote for a custom PC build from GenX Build:`,
    ``,
    `Use Case: ${useCase}`,
    `Processor: ${selections.processor || "You choose for my budget"}`,
    `Graphics Card: ${selections.gpu || "You choose for my budget"}`,
    `Motherboard: ${selections.motherboard || "You choose (compatible)"}`,
    `RAM: ${selections.ram || "You choose for my budget"}`,
    `Storage: ${selections.storage || "You choose for my budget"}`,
    `Case/PSU/Cooling: ${selections.chassis || "You choose"}`,
    `Extras: ${Array.isArray(selections.extras) && selections.extras.length > 0 ? selections.extras.join(", ") : "None"}`,
    ``,
    `Estimated Total: \u20B9${total.toLocaleString("en-IN")}`,
    ``,
    `Looking forward to your detailed quote!`,
  ].join("\n");

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(parts)}`;
}
