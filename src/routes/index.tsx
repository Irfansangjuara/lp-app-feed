import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Framer motion added above
import {
  Bot,
  Image,
  Video,
  Megaphone,
  PenTool,
  LayoutTemplate,
  Utensils,
  FileText,
  Sparkles,
  ArrowRight,
  GalleryHorizontal,
  Youtube,
  Type,
  ScanFace,
  Hexagon,
  Shirt,
  Star,
  Clapperboard,
  Clock,
  Wallet,
  RefreshCcw,
  Layers,
  Ban,
  Cpu,
  Wand2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super AI Feed 1.2 — Instant Design Studio" },
      {
        name: "description",
        content:
          "Generate desain iklan profesional untuk feed, ads, dan branding dalam hitungan detik. Tanpa designer, tanpa langganan.",
      },
      { property: "og:title", content: "Super AI Feed 1.2 — Early Access Rp 49.000" },
      {
        property: "og:description",
        content: "10 mode kreatif, 48+ kategori, sekali bayar selamanya.",
      },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#showcase", label: "Showcase" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

const CHECKOUT_URL = "https://copilotmarketing.id/daftar-feed";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <HeroShowcase />
        <Audience />
        <Comparison />
        <CarouselFeeds />
        <Engines />
        <Testimonials />
        <SimpleWorkflow />
        <ValueProp />
        <WhyChange />
        <TheAnswer />
        <Showcase />
        <Pricing />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <SalesPing />
      <FloatingBanner />
    </div>
  );
}

/* ============ HEADER ============ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-hi">◆</span>
          <span className="font-semibold tracking-tight">Super AI Feed</span>
          <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">
            v1.2 · INSTANT DESIGN STUDIO
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#harga"
          className="inline-flex items-center gap-2 rounded-full bg-hi text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          Klaim Early Access
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-noise opacity-[0.18] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-hi/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-10 items-center">
        {/* Top Text (Headline) */}
        <motion.div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 order-1 flex flex-col items-start" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase border border-hi/40 text-hi px-3 py-1.5 rounded-full bg-hi/5">
            <span className="w-1.5 h-1.5 rounded-full bg-hi animate-pulse" />
            Early Access · Kuota Terbatas
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] font-semibold tracking-tight">
            Tanpa Designer,
            <br />
            Buat Konten Ala <span className="text-hi">Desain Grafis</span> Profesional
            <br className="hidden sm:block" />
            dalam Hitungan Detik.
          </motion.h1>
        </motion.div>

        {/* Mockup Card */}
        <motion.div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 order-2 w-full max-w-md mx-auto lg:max-w-none px-4 sm:px-6 lg:px-0" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}>
          <MockupCard />
        </motion.div>

        {/* Bottom Text (Paragraph & CTA) */}
        <motion.div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 order-3 flex flex-col items-start" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Generate desain iklan profesional untuk feed, ads, dan branding hanya dalam beberapa
            detik. Tanpa belajar desain, tanpa langganan tool mahal, tanpa nunggu revisi tiga hari.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={CHECKOUT_URL}
              className="inline-flex justify-center items-center gap-2 rounded-xl bg-hi text-primary-foreground px-6 py-4 text-base font-semibold glow-lime hover:translate-y-[-1px] transition w-full sm:w-auto"
            >
              Ambil Early Access — Rp 49.000
            </a>
            <motion.a
              href="#showcase"
              className="inline-flex justify-center items-center gap-2 rounded-xl border border-border bg-surface px-6 py-4 text-base font-medium hover:bg-surface-2 transition w-full sm:w-auto"
            >
              Lihat Hasil Generate →
            </motion.a>
          </motion.div>
          <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <li>✓ Sekali bayar — seumur hidup</li>
            <li>✓ 10 mode kreatif</li>
            <li>✓ 48+ kategori siap pakai</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

const SCENARIOS = [
  {
    product: "Walnut Dining Table",
    brand: "HomeNest",
    headline: "Solid Walnut Dining Table",
    style: "Warm & Cozy ▾",
    ratio: "1:1 Instagram ▾",
    colors: ["#8B4513", "#FFFFFF"],
    images: [
      "https://autofeeds.id/landing/ads-1x1/ig-01.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-02.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-03.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-04.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-05.jpg",
    ],
  },
  {
    product: "Premium Sunscreen SPF 50",
    brand: "AuraSkin",
    headline: "Premium Sunscreen SPF 50",
    style: "Minimal Clean ▾",
    ratio: "1:1 Instagram ▾",
    colors: ["#ec4899", "#ffffff"],
    images: [
      "https://autofeeds.id/landing/ads-1x1/ig-06.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-07.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-08.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-09.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-10.jpg",
    ],
  },
  {
    product: "Korean Rice Bowl",
    brand: "SeoulBites",
    headline: "Spicy Korean Rice Bowl",
    style: "Food Editorial ▾",
    ratio: "1:1 Instagram ▾",
    colors: ["#ef4444", "#f59e0b"],
    images: [
      "https://autofeeds.id/landing/ads-1x1/ig-11.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-12.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-13.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-14.jpg",
      "https://autofeeds.id/landing/ads-1x1/ig-15.jpg",
    ],
  },
];

function MockupCard() {
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");
  const [scenarioIndex, setScenarioIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => {
        if (p === "form") return "loading";
        if (p === "loading") return "result";
        setScenarioIndex((si) => (si + 1) % SCENARIOS.length);
        return "form";
      });
    }, 2500); // toggle every 2.5s
    return () => clearInterval(interval);
  }, []);

  const scenario = SCENARIOS[scenarioIndex];

  return (
    <div className="relative rounded-2xl border border-hi/40 bg-surface shadow-[0_0_40px_rgba(251,191,36,0.15)] overflow-visible">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none rounded-2xl" />

      {/* Floating Badges */}
      <motion.div 
        animate={{ y: [0, -8, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-4 -right-2 sm:-top-6 sm:-right-8 z-30 rounded-xl border border-border bg-surface/95 backdrop-blur-md shadow-2xl p-2.5 sm:p-4 min-w-[110px] sm:min-w-[140px]"
      >
        <div className="font-mono text-[8px] sm:text-[9px] text-muted-foreground tracking-widest mb-1">
          FORMAT
        </div>
        <div className="text-base sm:text-lg font-bold text-hi mb-1">Multi-rasio</div>
        <div className="font-mono text-[7px] sm:text-[9px] text-muted-foreground tracking-widest">
          AF-STUDIO · V2.1
        </div>
        <div className="font-mono text-[7px] sm:text-[9px] text-muted-foreground mt-0.5 sm:mt-1">
          IG · TT · YT · Story
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-8 z-30 rounded-xl border border-border bg-surface/95 backdrop-blur-md shadow-2xl p-2.5 sm:p-4 min-w-[110px] sm:min-w-[140px]"
      >
        <div className="font-mono text-[8px] sm:text-[9px] text-muted-foreground tracking-widest mb-1">
          RATA-RATA
        </div>
        <div className="text-lg sm:text-xl font-bold text-hi mb-1">&lt; 30 detik</div>
        <div className="font-mono text-[8px] sm:text-[10px] text-muted-foreground">
          brief → visual
        </div>
      </motion.div>

      {/* Top Bar */}
      <div className="flex items-center px-4 py-3 border-b border-border bg-[#1a1a1a] rounded-t-2xl relative z-10">
        <div className="flex items-center gap-2 w-1/4">
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="w-3 h-3 rounded-full bg-border" />
          <span className="w-3 h-3 rounded-full bg-border" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="font-mono text-[10px] text-muted-foreground bg-background/80 px-8 py-1.5 rounded-md flex items-center gap-2 border border-border/50">
            <span>🔒</span> app.copilotmarketing.id/studio
          </div>
        </div>
        <div className="w-1/4" />
      </div>

      {/* Main Area */}
      <div className="flex relative z-10 h-[400px]">
        {/* Sidebar */}
        <div className="w-16 border-r border-border flex flex-col items-center py-4 gap-6 bg-[#151515] rounded-bl-2xl">
          <div className="w-10 h-10 rounded-xl bg-hi text-primary-foreground flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            F
          </div>
          <div className="flex flex-col gap-6 text-muted-foreground/40 mt-4">
            <Image className="w-5 h-5 hover:text-hi cursor-pointer transition-colors" />
            <Video className="w-5 h-5 hover:text-hi cursor-pointer transition-colors" />
            <Megaphone className="w-5 h-5 hover:text-hi cursor-pointer transition-colors" />
            <PenTool className="w-5 h-5 hover:text-hi cursor-pointer transition-colors" />
            <LayoutTemplate className="w-5 h-5 hover:text-hi cursor-pointer transition-colors" />
            <Utensils className="w-5 h-5 hover:text-hi cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 relative overflow-hidden bg-surface/40 rounded-br-2xl">
          <AnimatePresence mode="wait">
            {phase === "form" ? (
              <motion.div 
                key={`form-${scenarioIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-6 flex flex-col justify-between"
              >
              <div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-border">/</span> BANNER GENERATOR
                </div>
                <h3 className="text-xl font-bold mb-6 text-foreground tracking-tight">
                  {scenario.product}
                </h3>

                <div className="space-y-4">
                  <Field label="BRAND" value={scenario.brand} />
                  <Field label="HEADLINE" value={scenario.headline} />

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="STYLE" value={scenario.style} />
                    <Field label="RATIO" value={scenario.ratio} />
                  </div>

                  <div className="pt-2">
                    <div className="font-mono text-[9px] text-muted-foreground tracking-widest mb-2">
                      COLOR
                    </div>
                    <div className="flex gap-2">
                      <div
                        className="w-6 h-6 rounded-md border border-white/10 shadow-inner"
                        style={{ backgroundColor: scenario.colors[0] }}
                      />
                      <div
                        className="w-6 h-6 rounded-md border border-white/10 shadow-inner"
                        style={{ backgroundColor: scenario.colors[1] }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4 relative">
                <motion.button 
                  animate={{ boxShadow: ["0 0 0px 0px rgba(251,191,36,0)", "0 0 25px 2px rgba(251,191,36,0.6)", "0 0 0px 0px rgba(251,191,36,0)"] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="rounded-xl bg-gradient-to-br from-hi to-yellow-600 text-primary-foreground px-6 py-3 text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Image className="w-4 h-4" /> Generate IMG
                </motion.button>

                {/* Animated Cursor */}
                {/* Animated Cursor */}
                <motion.div
                  animate={{ 
                    x: [100, -10, -10],
                    y: [120, 15, 15],
                    scale: [1, 1, 0.8]
                  }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="absolute right-0 top-0 z-50 pointer-events-none drop-shadow-2xl"
                >
                  <svg
                    width="24"
                    height="36"
                    viewBox="0 0 24 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.65376 2.00018L21.4391 16.0357C22.6841 17.1423 22.1284 19.1868 20.4735 19.5898L13.9168 21.1864L10.3705 29.8362C9.72898 31.4013 7.46903 31.3323 6.94503 29.726L1.87971 14.1843L1.51731 3.51347C1.46465 1.96349 3.01353 0.884518 4.39891 1.50346L5.65376 2.00018Z"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ) : phase === "loading" ? (
              <motion.div 
                key={`loading-${scenarioIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-surface/90 backdrop-blur-sm z-20 rounded-br-2xl"
              >
                <div className="relative flex items-center justify-center h-32 w-32">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-hi/30 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="z-10 bg-hi p-4 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                  >
                    <Bot className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 bg-surface p-2.5 rounded-xl border border-border shadow-xl z-20"
                  >
                    <Image className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 font-mono text-[10px] font-bold tracking-widest text-hi flex items-center gap-2 bg-hi/10 px-4 py-1.5 rounded-full border border-hi/20"
                >
                  <span className="w-2 h-2 rounded-full bg-hi animate-pulse" />
                  GENERATING VISUAL...
                </motion.div>
              </motion.div>
          ) : (
              <motion.div 
                key={`result-${scenarioIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-4 bg-[#111]"
              >
                {/* Result Pill */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 z-20 rounded-full border border-hi/30 bg-background/80 backdrop-blur px-6 py-2 flex items-center gap-2 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                >
                  <Bot className="w-4 h-4 text-hi" />
                  <span className="font-mono text-xs font-bold tracking-widest text-hi">
                    {scenario.brand.toUpperCase()} · READY
                  </span>
                </motion.div>

              {/* Scattered Background Images */}
                <motion.img 
                  initial={{ scale: 0.5, opacity: 0, rotate: -20, x: -100, y: -50 }}
                  animate={{ scale: 1, opacity: 0.5, rotate: -15, x: -80, y: -60 }}
                  transition={{ delay: 0.1, type: "spring" }}
                  src={scenario.images[1]} 
                  className="absolute w-40 h-40 rounded-xl shadow-2xl object-cover border border-white/10" 
                />
                <motion.img 
                  initial={{ scale: 0.5, opacity: 0, rotate: 20, x: 100, y: -40 }}
                  animate={{ scale: 1, opacity: 0.5, rotate: 12, x: 80, y: -30 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  src={scenario.images[2]} 
                  className="absolute w-40 h-40 rounded-xl shadow-2xl object-cover border border-white/10" 
                />
                <motion.img 
                  initial={{ scale: 0.5, opacity: 0, rotate: -30, x: -80, y: 80 }}
                  animate={{ scale: 1, opacity: 0.5, rotate: -8, x: -60, y: 70 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  src={scenario.images[3]} 
                  className="absolute w-40 h-40 rounded-xl shadow-2xl object-cover border border-white/10" 
                />
                <motion.img 
                  initial={{ scale: 0.5, opacity: 0, rotate: 30, x: 80, y: 80 }}
                  animate={{ scale: 1, opacity: 0.5, rotate: 18, x: 60, y: 60 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  src={scenario.images[4]} 
                  className="absolute w-40 h-40 rounded-xl shadow-2xl object-cover border border-white/10" 
                />

                {/* Center Main Image */}
                <motion.img 
                  initial={{ scale: 0.5, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
                  src={scenario.images[0]} 
                  className="relative z-10 w-64 h-64 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 object-cover" 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] text-muted-foreground tracking-widest mb-1.5">
        {label}
      </div>
      <div className="rounded-lg border border-border bg-[#151515] px-3 py-2.5 text-sm text-foreground/90 shadow-inner">
        {value}
      </div>
    </div>
  );
}

/* ============ HERO SHOWCASE ============ */
function HeroShowcase() {
  const images = Array.from(
    { length: 20 },
    (_, i) => `https://autofeeds.id/landing/ads-1x1/ig-${String(i + 1).padStart(2, "0")}.jpg`,
  );
  const row1 = images.slice(0, 10);
  const row2 = images.slice(10, 20);

  return (
    <section className="border-b border-border bg-background py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-hi" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
            SHOWCASE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          Segala Jenis <span className="text-hi">Produk Brand Dan Jasa</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
          Geser pelan — semua design di bawah ini dibuat tanpa designer, tanpa Canva, tanpa
          Photoshop.
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        {/* Vignette overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div
          className="flex w-max ticker hover:[animation-play-state:paused]"
          style={{ animationDuration: "40s" }}
        >
          {[...row1, ...row1].map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border border-white/5 shadow-lg"
                alt="Showcase"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max ticker-reverse hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border border-white/5 shadow-lg"
                alt="Showcase"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ MARQUEE ============ */
function Marquee() {
  const items = [
    "10 MODE KREATIF",
    "48+ KATEGORI",
    "UNLIMITED RENDER",
    "MULTI-FORMAT",
    "BRAND-LOCKED",
    "SEKALI BAYAR",
    "UPDATE LIFETIME",
    "COMMERCIAL-GRADE",
  ];
  return (
    <div className="border-b border-border bg-surface overflow-hidden">
      <div className="flex ticker whitespace-nowrap py-4 font-mono text-xs tracking-[0.2em] text-muted-foreground">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="px-8 inline-flex items-center gap-8">
            {t}
            <span className="text-hi">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ CAROUSEL FEEDS ============ */
function CarouselFeeds() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://autofeeds.id/landing/ads-1x1/ig-05.jpg",
    "https://autofeeds.id/landing/ads-1x1/ig-12.jpg",
    "https://autofeeds.id/landing/ads-1x1/ig-14.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="bg-surface/20 py-20 lg:py-28 overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <SectionLabel index="BARU" label="CAROUSEL FEEDS" />
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Carousel feed yang <span className="text-hi">nyambung</span>
              <br />— satu cerita, banyak slide.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg/relaxed">
              Pilih tipe template & jumlah slide, lalu sistem menyusun alur cerita, objective tiap
              slide, variasi layout, sampai komposisi visual yang konsisten — dari hook sampai CTA.
              Termasuk template News untuk konten berita.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "12+ tipe template — Product, Promo, Testimonial, Tips, Story, News, dll",
                "3–7 slide, alur cerita tersusun otomatis (hook → value → CTA)",
                "Layout tiap slide beda tapi tetap satu campaign yang konsisten",
                "Atur letak gambar, teks & warna di slide pertama",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-hi mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-6 font-mono text-[10px] tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <LayoutTemplate className="w-4 h-4 text-hi" /> Slide otomatis tersusun
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-hi" /> Template News
              </div>
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 text-hi" /> Layout variatif
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-hi text-primary-foreground px-6 py-4 font-semibold hover:opacity-90 transition"
            >
              Coba Carousel Feeds <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: 3D Stacked Cards Animation */}
          <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-[1000px]">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
              <AnimatePresence initial={false}>
                {images.map((src, i) => {
                  const position = (i - currentIndex + images.length) % images.length;
                  
                  const zIndex = 30 - position * 10;
                  const scale = 1 - position * 0.05;
                  const x = position * 25; 
                  const y = position * 15; 
                  const rotate = position * 4; 
                  
                  return (
                    <motion.div
                      key={src}
                      className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-surface cursor-pointer"
                      onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                      initial={{ opacity: 0, x: -50, scale: 0.9 }}
                      animate={{
                        zIndex,
                        scale,
                        x,
                        y,
                        rotate,
                        opacity: 1
                      }}
                      exit={{ opacity: 0, x: -100, scale: 1.1, rotate: -5 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      style={{ transformOrigin: 'top left' }}
                    >
                      <img src={src} alt="Carousel Slide" className="w-full h-full object-cover" />
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur text-white text-xs font-mono px-2 py-1 rounded-full border border-white/10">
                        {position === 0 ? "1/3" : position === 1 ? "2/3" : "3/3"}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-3">
              <div className="flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "w-6 bg-hi" : "w-1.5 bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground flex items-center gap-2 ml-4">
                <PenTool className="w-3 h-3" /> GESER / KLIK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ENGINES ============ */
function Engines() {
  const CDN = "https://autofeeds.id/landing";
  const engines = [
    {
      id: "M1",
      icon: <LayoutTemplate className="w-4 h-4" />,
      title: "Design Grafis",
      desc: "Brief produk → banner komersial siap upload. Cocok buat feed IG, marketplace, hero website.",
      bullets: ["Komposisi commercial-grade", "Aspect 1:1 / 4:5 / 16:9", "Sesuai brand color"],
      img: `${CDN}/ads-1x1/ig-01.jpg`,
      aspect: "1/1",
    },
    {
      id: "M2",
      icon: <GalleryHorizontal className="w-4 h-4" />,
      title: "Carousel Feeds",
      desc: "Satu cerita, banyak slide. Pilih tipe template & jumlah slide → alur, layout, dan visual tiap slide tersusun otomatis.",
      bullets: [
        "12+ tipe template + News",
        "3–7 slide otomatis nyambung",
        "Layout tiap slide variatif",
      ],
      img: `${CDN}/ads-1x1/ig-12.jpg`,
      aspect: "4/5",
    },
    {
      id: "M3",
      icon: <Youtube className="w-4 h-4" />,
      title: "YouTube Thumbnail",
      desc: "Cetak thumbnail yang clickable: composition, ekspresi, dan teks overlay sudah diatur.",
      bullets: ["CTR-oriented layout", "Text overlay otomatis", "Subject pose & emotion"],
      img: `${CDN}/ads-16x9/yt-01.jpg`,
      aspect: "16/9",
    },
    {
      id: "M4",
      icon: <Type className="w-4 h-4" />,
      title: "Typography Ads",
      desc: "Ads tipografi premium dengan 8 layer kreatif: title, art direction, palette, conversion, dst.",
      bullets: ["8 layer kreatif", "Premium typography ads", "Per-section copy button"],
      img: `${CDN}/ads-typography/typo-01.jpg`,
      aspect: "4/5",
    },
    {
      id: "M5",
      icon: <FileText className="w-4 h-4" />,
      title: "Copy Writing",
      desc: "Auto-generate hook, body, dan CTA — formatnya match dengan visual yang lagi kamu kerjain.",
      bullets: ["Hook - Body - CTA", "Tone selector", "Match banner context"],
      img: `${CDN}/modes/copy-preview.jpg`,
      aspect: "1/1",
    },
    {
      id: "M6",
      icon: <ScanFace className="w-4 h-4" />,
      title: "Face Card Analysis ★",
      desc: "Upload 1 portrait → 5 board analisa premium: face features, style, color, makeup. Personal stylist dalam 1 klik.",
      bullets: ["5 sub-type analysis", "Editorial magazine quality", "Male & female friendly"],
      img: `${CDN}/face-card/style-analysis.jpg`,
      aspect: "4/5",
    },
    {
      id: "M7",
      icon: <Utensils className="w-4 h-4" />,
      title: "Menu F&B ★",
      desc: "9 template premium untuk resto, patisserie, bakery — dari Parisian luxury sampai Korean street food viral.",
      bullets: ["9 template siap pakai", "5 layout style", "Dynamic menu editor"],
      img: `${CDN}/menu-fb/patisserie-luxury.jpg`,
      aspect: "4/5",
    },
    {
      id: "M8",
      icon: <Hexagon className="w-4 h-4" />,
      title: "Logo Produk ★",
      desc: "Logo brand affiliate-ready + tempel logo ke merchandise & brand mockup. Hasil langsung jadi logo.",
      bullets: ["Logo + Brand Mockup", "Custom HEX palette", "21 media mockup"],
      img: `${CDN}/ads-1x1/ig-15.jpg`,
      aspect: "1/1",
    },
    {
      id: "M9",
      icon: <Shirt className="w-4 h-4" />,
      title: "Try-On Produk ★",
      desc: "Upload foto produk → model pakai produknya. Visual try-on/wear-test konversi tinggi untuk affiliate.",
      bullets: ["Upload produk → try-on", "15 mode try-on", "Optimasi per platform"],
      img: `${CDN}/ads-1x1/ig-09.jpg`,
      aspect: "4/5",
    },
    {
      id: "M10",
      icon: <Star className="w-4 h-4" />,
      title: "Review Produk ★",
      desc: "Banner review produk high-converting. 10 review framework + custom warna + wireframe preview live.",
      bullets: ["10 review framework", "Custom warna + badge", "Wireframe preview live"],
      img: `${CDN}/ads-1x1/ig-10.jpg`,
      aspect: "4/5",
    },
    {
      id: "M11",
      icon: <Clapperboard className="w-4 h-4" />,
      title: "Video Storyboard ★",
      desc: "Storyboard board scene-by-scene yang dibuat otomatis sesuai durasi — landscape 16:9, banyak scene cepat.",
      bullets: ["Board 16:9 landscape", "Scene auto per durasi", "VO + overlay + visual"],
      img: `${CDN}/ads-16x9/yt-02.jpg`,
      aspect: "16/9",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionLabel index="11 ENGINE" label="1 STUDIO" />
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Sebelas <span className="text-hi">engine kreatif</span> yang dirancang berbeda untuk
            setiap kebutuhan visual.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg/relaxed">
            Bukan satu generator yang dipakai untuk semua. Tiap mode punya logic sendiri agar output
            AI-nya konsisten sesuai format akhirnya — termasuk Carousel Feeds & 4 affiliate tools
            baru.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="flex flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl border border-border bg-surface/30 hover:border-hi/30 transition-colors"
            >
              <div className="flex-1 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-hi shrink-0">
                    {engine.icon}
                  </div>
                  <div className="font-mono text-[8px] sm:text-[10px] tracking-widest text-muted-foreground uppercase">
                    /ENGINE · {engine.id}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 flex items-center gap-2">
                    {engine.title.includes("★") ? (
                      <>
                        {engine.title.replace(" ★", "")}
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-hi fill-hi shrink-0" />
                      </>
                    ) : (
                      engine.title
                    )}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {engine.desc}
                  </p>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                  {engine.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground"
                    >
                      <span className="text-hi mt-1 sm:mt-1.5 text-[6px] sm:text-[8px]">●</span>
                      <span className="leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-[100px] sm:w-[160px] lg:w-[200px] shrink-0">
                <div
                  className={`relative w-full rounded-xl overflow-hidden border border-border/50 bg-black/20 ${
                    engine.aspect === "1/1"
                      ? "aspect-square"
                      : engine.aspect === "4/5"
                        ? "aspect-[4/5]"
                        : "aspect-[16/9]"
                  }`}
                >
                  <img src={engine.img} alt={engine.title} className="w-full h-full object-cover" />
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-[8px] sm:text-[10px] font-mono text-white/80 bg-black/40 backdrop-blur px-1 sm:px-1.5 py-0.5 rounded flex items-center gap-1 border border-white/10">
                    <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 rotate-[-45deg]" /> {engine.aspect}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ VALUE PROP ============ */
function ValueProp() {
  const items = [
    {
      t: "Output presisi",
      d: "Bukan template generik — tiap field dipetakan ke karakter visual commercial-grade.",
    },
    {
      t: "48+ kategori siap",
      d: "F&B, fashion, beauty, otomotif, edukasi, finance, sampai niche gaming — preset on click.",
    },
    {
      t: "Multi-format output",
      d: "Banner, thumbnail, typography, story, reels — semua format lahir dari satu studio.",
    },
    {
      t: "Sekali bayar",
      d: "Tanpa langganan bulanan. Tanpa kredit per render. Akses penuh selamanya begitu lunas.",
    },
    {
      t: "Render unlimited",
      d: "Sebanyak apapun visual yang kamu butuh — gak ada batas, gak ada throttle.",
    },
    {
      t: "Update lifetime",
      d: "Mode baru, kategori baru, opsi gaya baru — semua di-push otomatis ke akunmu.",
    },
  ];
  return (
    <section id="fitur" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/01" label="YANG BIKIN BEDA" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Bukan sekedar template generator —<br />
          <span className="text-muted-foreground">studio yang serius.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Setiap mode di Super AI Feed 1.2 dirancang dari hasil reverse-engineering brief studio
          kreatif beneran, lalu disederhanakan jadi form yang siapapun bisa isi.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <div key={i} className="bg-background p-7 group hover:bg-surface transition">
              <div className="font-mono text-xs text-hi">/0{i + 1}</div>
              <div className="mt-4 text-lg font-semibold">{it.t}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted-foreground">
      <span className="text-hi">{index}</span>
      <span className="w-8 h-px bg-border" />
      <span>{label}</span>
    </div>
  );
}

/* ============ AUDIENCE ============ */
function Audience() {
  const items = [
    {
      t: "UMKM & Brand Owner",
      d: "Konten produk harian tanpa harus hire designer freelance tiap minggu.",
    },
    {
      t: "Performance Marketer",
      d: "Bikin 20 variasi creative test untuk A/B Meta Ads dalam satu sore.",
    },
    {
      t: "Content Creator",
      d: "Thumbnail YouTube dan cover TikTok yang konsisten gaya, gak mati ide.",
    },
    {
      t: "Course Creator & Mentor",
      d: "Banner promosi kelas, ebook cover, slide pembuka — semua dari satu studio.",
    },
    {
      t: "Agency & Freelancer",
      d: "Brief klien masuk pagi, mockup ready siang. Margin proyek naik tajam.",
    },
    {
      t: "Reseller & Dropshipper",
      d: "Asset visual untuk tiap SKU baru tanpa nambah biaya produksi konten.",
    },
  ];
  return (
    <section id="cara-kerja" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/02" label="DIPAKAI OLEH" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Dibuat untuk enam tipe orang ini.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Kalau salah satu deskripsi di bawah terdengar seperti kamu — Super AI Feed 1.2 akan
          langsung kepake hari pertama akses.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background p-6 hover:border-hi/40 transition"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <div className="w-8 h-8 rounded-full bg-hi/10 border border-hi/30 flex items-center justify-center text-hi text-xs">
                  ◆
                </div>
              </div>
              <div className="mt-4 text-lg font-semibold">{it.t}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ COMPARISON ============ */
function Comparison() {
  const rows = [
    ["Waktu produksi 1 banner", "4–24 jam", "Di bawah 1 menit"],
    ["Biaya per banner", "Rp 50–500 ribu", "Free Akses"],
    ["Konsistensi gaya", "Tergantung mood", "Brand-locked"],
    ["Skill teknis dibutuhkan", "Photoshop / Illustrator", "Cuma isi form"],
    ["Revisi & iterasi", "Antri designer", "Re-generate instan"],
    ["Skala output", "Bottleneck", "Unlimited"],
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/03" label="BEFORE / AFTER" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Cara lama vs <span className="text-hi">cara Super AI Feed</span>.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border p-6 bg-background">
            <div className="font-mono text-xs text-muted-foreground">
              /01 · CARA KONVENSIONAL (LAMBAT)
            </div>
            <div className="mt-5 divide-y divide-border">
              {rows.map(([k, v]) => (
                <div key={k} className="py-3 flex justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground/80 line-through decoration-destructive/60">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-hi p-6 bg-hi shadow-xl">
            <div className="font-mono text-xs font-bold text-black/80">
              /02 · CARA SUPER AI FEED (INSTAN)
            </div>
            <div className="mt-5 divide-y divide-black/10">
              {rows.map(([k, , v]) => (
                <div key={k} className="py-3 flex justify-between gap-4 text-sm">
                  <span className="text-black/80">{k}</span>
                  <span className="font-bold text-black">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const items = [
    {
      n: "Rendra A.",
      r: "OWNER BRAND SKINCARE",
      q: "Biasanya brief ke designer 3 hari kelar, sekarang sore racik design — malamnya udah jalanin Meta Ads. Game changer buat tim kecil.",
    },
    {
      n: "Aulia M.",
      r: "YOUTUBER 240K SUBS",
      q: "Thumbnail mode-nya ngeselin di awal (kenapa enak banget), sekarang gak pernah lagi mikir layout dari nol.",
    },
    {
      n: "Bagas D.",
      r: "PERFORMANCE MARKETER",
      q: "Buat 30 variant creative test pagi, malamnya udah ada winning ads. ROAS naik 1.8x dalam dua minggu.",
    },
    {
      n: "Kirana S.",
      r: "COURSE CREATOR",
      q: "Banner promo kelas, e-book cover, slide cover — semua dari satu studio. Brand jadi keliatan konsisten.",
    },
    {
      n: "Yoga P.",
      r: "UMKM KOPI SPECIALTY",
      q: "Awalnya skeptis, tapi setelah lihat hasil typography mode-nya... ya udah, langsung lifetime.",
    },
    {
      n: "Dinda L.",
      r: "AGENCY PARTNER",
      q: "Margin proyek visual naik karena waktu produksi ke-cut drastis. Klien gak tau bedanya, dan itu poinnya.",
    },
    {
      n: "Budi T.",
      r: "OWNER F&B",
      q: "Dulu pusing mikirin biaya foto produk menu baru. Sekarang modal foto HP, di-generate di sini, langsung kelihatan kayak difotoin fotografer pro.",
    },
    {
      n: "Siska K.",
      r: "AFFILIATE MARKETER",
      q: "Bikin video TikTok & banner review jadi super instan. Nggak perlu ngedit ribet, konversi langsung kerasa.",
    },
    {
      n: "Tommy S.",
      r: "DIGITAL AGENCY",
      q: "Klien sering minta revisi dadakan. Pake ini, revisi visual cuma hitungan detik. Benar-benar menyelamatkan nyawa tim kreatif kami.",
    },
    {
      n: "Lita P.",
      r: "FASHION BRAND",
      q: "Catalog baju tiap bulan sekarang gampang banget dibuat. Moodboard yang kita mau langsung divisualisasikan dengan sempurna.",
    },
    {
      n: "Rizky N.",
      r: "FREELANCE DESIGNER",
      q: "Awalnya ngerasa tersaingi, ternyata malah bantu kerjaan. Kerjaan yang biasa 2 hari kelar 2 jam. Klien puas, invoice jalan terus.",
    },
    {
      n: "Anisa W.",
      r: "BEAUTY CLINIC",
      q: "Promo bulanan klinik sekarang selalu on-time. Template-nya elegan dan nggak kelihatan murahan sama sekali.",
    },
    {
      n: "Kevin O.",
      r: "E-COMMERCE SELLER",
      q: "CTR di Tokopedia naik drastis sejak pakai thumbnail dari sini. Jauh lebih eye-catching dibanding kompetitor.",
    },
    {
      n: "Nadia T.",
      r: "PROPERTY AGENT",
      q: "Listing rumah jadi kelihatan lebih mewah dan tertata. Calon buyer lebih banyak yang nanya karena visualnya proper.",
    },
    {
      n: "Hendra K.",
      r: "SOFTWARE HOUSE",
      q: "Buat mockup UI/UX buat pitch deck sekarang instan. Cukup masukin screenshot, langsung di-frame dengan cantik.",
    },
    {
      n: "Maya D.",
      r: "EVENT ORGANIZER",
      q: "Bikin teaser event di Instagram nggak perlu pusing lagi mikirin layout. Tinggal masukin teks, AI yang ngatur komposisi.",
    },
    {
      n: "Faisal M.",
      r: "AUTOMOTIVE DEALER",
      q: "Brosur digital promo mobil laku keras. Desainnya clean dan maskulin, pas banget buat target market saya.",
    },
    {
      n: "Tari I.",
      r: "WEDDING VENDOR",
      q: "Portfolio undangan digital makin estetik. Klien selalu suka sama variasi gaya yang ditawarin.",
    },
    {
      n: "Doni E.",
      r: "RESELLER GADGET",
      q: "Dulu sering repot crop foto produk. Sekarang otomatis dibikin rapi dan ada shadow-nya. Keren abis!",
    },
    {
      n: "Vina R.",
      r: "BAKERY OWNER",
      q: "Promo kue ulang tahun tiap weekend selalu fresh desainnya. Padahal nggak pernah hire desainer khusus.",
    },
    {
      n: "Gilang P.",
      r: "FITNESS COACH",
      q: "Bikin banner kelas online atau tips diet di Instagram jadi sangat praktis. Audiens lebih gampang baca.",
    },
    {
      n: "Sari F.",
      r: "TRAVEL AGENT",
      q: "Paket tour jadi kelihatan lebih menjanjikan. Pemandangan dan teks promo menyatu dengan sangat natural.",
    },
    {
      n: "Bayu A.",
      r: "PODCASTER",
      q: "Cover episode baru sekarang selalu konsisten tapi tetap ada variasi. Branding podcast saya jadi makin kuat.",
    },
    {
      n: "Citra H.",
      r: "JEWELRY BRAND",
      q: "Highlight kilau perhiasan di foto jadi gampang banget. Kelihatan premium dan elegan tanpa ribet.",
    },
    {
      n: "Raka S.",
      r: "PET SHOP",
      q: "Promo makanan kucing anjing jadi lebih lucu dan menarik. Desainnya nge-pop banget di feed.",
    },
    {
      n: "Putri L.",
      r: "MOM & BABY SHOP",
      q: "Warna-warna pastel dan layout untuk produk bayi-nya sangat pas. Bikin ibu-ibu gampang tertarik buat klik.",
    },
    {
      n: "Evan K.",
      r: "TECH STARTUP",
      q: "Buat kebutuhan marketing campaign bulanan, ini bener-bener solusi hemat budget tapi impact-nya maksimal.",
    },
  ];

  const col1 = items.slice(0, 9);
  const col2 = items.slice(9, 18);
  const col3 = items.slice(18, 27);

  const renderCol = (itemsCol: typeof items, animationClass: string, isMobile: boolean) => (
    <div
      className={`flex flex-col gap-4 ${animationClass} ${isMobile ? "block lg:hidden w-full absolute" : "hidden lg:flex"}`}
    >
      {[...itemsCol, ...itemsCol].map((t, i) => (
        <figure
          key={i}
          className="rounded-2xl border border-border bg-background p-6 flex flex-col hover:border-hi/50 transition-colors"
        >
          <p className="text-sm/relaxed text-muted-foreground">"{t.q}"</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-hi flex items-center justify-center font-bold text-primary-foreground shrink-0">
              {t.n.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold">{t.n}</div>
              <div className="font-mono text-[10px] text-muted-foreground">{t.r}</div>
            </div>
          </div>
        </figure>
      ))}
    </div>
  );

  return (
    <section className="border-b border-border bg-surface/20 py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionLabel index="/04" label="DARI USER BATCH AWAL" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Yang sudah pakai{" "}
          <span className="text-muted-foreground">nggak balik lagi ke cara lama.</span>
        </h2>

        {/* Height container controls the viewport for vertical scrolling */}
        <div className="relative mt-12 h-[600px] overflow-hidden rounded-3xl [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          {/* Desktop: 3 Columns */}
          <div className="hidden lg:grid grid-cols-3 gap-6 absolute inset-0">
            {renderCol(col1, "scroll-y-down", false)}
            {renderCol(col2, "scroll-y-up", false)}
            {renderCol(col3, "scroll-y-down", false)}
          </div>

          {/* Mobile: 1 Column moving down */}
          <div className="block lg:hidden absolute inset-0 w-full px-1">
            {renderCol(items, "scroll-y-down", true)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SIMPLE WORKFLOW ============ */
function SimpleWorkflow() {
  const steps = [
    {
      num: "01",
      icon: <PenTool className="w-8 h-8 text-black" />,
      title: "Isi brief 30 detik",
      desc: "Pilih kategori industri, isi nama produk, headline, dan warna brand. Tidak ada form panjang yang bikin males.",
    },
    {
      num: "02",
      icon: <Cpu className="w-8 h-8 text-black" />,
      title: "Engine racik visualnya",
      desc: "Super AI Feed otomatis menyusun komposisi, lighting, typography, dan color grading — semua dipetakan presisi.",
    },
    {
      num: "03",
      icon: <Wand2 className="w-8 h-8 text-black" />,
      title: "Design jadi, tinggal upload",
      desc: "Visualmu lahir dalam hitungan detik — siap pasang ke feed, story, thumbnail, atau bahan iklan.",
    },
  ];

  return (
    <section className="relative border-b border-border py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-[0.1] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-hi/30 bg-hi/10 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-hi" />
            <span className="font-mono text-[10px] tracking-widest text-hi font-bold uppercase">
              Alurnya Simpel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
            Tiga langkah, <span className="text-hi">tanpa skill desain.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg/relaxed">
            Dari kotak kosong ke visual siap upload — semua dalam satu sesi browser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Icon Box */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border border-hi/20 bg-hi flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(251,191,36,0.15)] group transition-all duration-300 hover:border-hi/50">
                <div className="absolute top-0 right-0 translate-x-[20%] -translate-y-[20%] bg-black text-hi font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full z-10 shadow-lg shadow-black/20">
                  {step.num}
                </div>
                {step.icon}
                <div className="absolute inset-0 bg-white/5 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text Card */}
              <div className="w-full rounded-2xl border border-white/5 bg-surface p-6 sm:p-8 flex-grow shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY CHANGE ============ */
function WhyChange() {
  const cards = [
    {
      icon: <Clock className="w-5 h-5" />,
      num: "01/04",
      title: "Revisi designer berhari-hari",
      desc: "Brief masuk Senin, file final baru kelar Kamis. Padahal momen iklan udah lewat duluan.",
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      num: "02/04",
      title: "Biaya tool desain numpuk",
      desc: "Langganan Canva Pro, stok foto, plugin Photoshop — habis sebelum konten cuan.",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      num: "03/04",
      title: "Output AI gak konsisten",
      desc: "Tool AI sembarangan ujungnya hasil aneh, warna meleset, layout berantakan.",
    },
    {
      icon: <Image className="w-5 h-5" />,
      num: "04/04",
      title: "Gak ngerti istilah desain",
      desc: "Tipografi? Composition? Color grading? Kamu cuma mau hasil yang clean dan jualan.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border py-20 lg:py-28 bg-background">
      {/* Subtle Grid / Noise */}
      <div className="absolute inset-0 grid-noise opacity-[0.1] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-hi/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-hi/30 bg-hi/10 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-hi" />
            <span className="font-mono text-[10px] tracking-widest text-hi font-bold uppercase">
              Kenapa Harus Berubah
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Bikin satu banner saja, <span className="text-hi">drama-nya banyak.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg/relaxed max-w-2xl">
            Konten harian, promo flash sale, thumbnail YouTube, story TikTok — semua butuh visual.
            Tapi proses pembuatannya selalu sama: lambat, mahal, dan bikin pusing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/5 bg-surface p-6 sm:p-8 overflow-hidden group hover:border-hi/30 transition-colors shadow-lg"
            >
              {/* Top right slanted corner */}
              <div className="absolute top-0 right-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M60 0H0L60 60V0Z" fill="rgba(251,191,36,0.05)" />
                </svg>
                <span className="absolute top-2 right-2 font-mono text-[9px] font-bold tracking-widest text-hi/40">
                  {card.num}
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-hi/10 border border-hi/20 flex items-center justify-center text-hi mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-foreground tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ THE ANSWER ============ */
function TheAnswer() {
  const features = [
    {
      icon: <Image className="w-4 h-4 text-hi" />,
      text: "Engine kreatif yang ngerti karakter visual komersial",
    },
    {
      icon: <Layers className="w-4 h-4 text-hi" />,
      text: "11 mode kerja: Banner · Carousel · Thumbnail · Typography · Copy · Face Card · Menu F&B · Logo · Try-On · Review · Storyboard",
    },
    {
      icon: <Image className="w-4 h-4 text-hi" />,
      text: "Output siap upload — tanpa edit manual, tanpa retouch",
    },
    {
      icon: <Ban className="w-4 h-4 text-hi" />,
      text: "Tanpa Canva, tanpa Photoshop, tanpa desainer freelance",
    },
  ];

  return (
    <section className="relative border-b border-border py-20 lg:py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-[0.1] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] rounded-full bg-hi/5 blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl border border-hi/20 bg-hi/5">
              <img
                src="https://autofeeds.id/landing/ads-1x1/ig-07.jpg"
                alt="Ad 1"
                className="w-full aspect-square object-cover rounded-xl border border-white/10"
              />
              <img
                src="https://autofeeds.id/landing/ads-1x1/ig-12.jpg"
                alt="Ad 2"
                className="w-full aspect-square object-cover rounded-xl border border-white/10"
              />
              <img
                src="https://autofeeds.id/landing/ads-1x1/ig-04.jpg"
                alt="Ad 3"
                className="w-full aspect-square object-cover rounded-xl border border-white/10"
              />
              <img
                src="https://autofeeds.id/landing/ads-1x1/ig-08.jpg"
                alt="Ad 4"
                className="w-full aspect-square object-cover rounded-xl border border-white/10"
              />
            </div>

            <div className="absolute -bottom-4 right-8 z-10 rounded-full border border-hi/30 bg-surface px-4 py-2 flex items-center gap-2 shadow-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-hi" />
              <span className="font-mono text-[10px] tracking-widest text-hi font-bold uppercase">
                RENDER READY
              </span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-hi/30 bg-hi/10 px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-hi" />
              <span className="font-mono text-[10px] tracking-widest text-hi font-bold uppercase">
                Jawabannya Satu
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Satu studio untuk <span className="text-hi">semua kebutuhan visual</span> brand kamu.
            </h2>

            <p className="mt-6 text-muted-foreground text-lg/relaxed">
              Super AI Feed adalah{" "}
              <strong className="text-foreground">studio visual otomatis</strong> — engine yang
              sudah dilatih membaca karakter desain commercial-grade, sehingga hasilnya konsisten,
              sesuai brand, dan layak naik di feed.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-hi/10 border border-hi/20 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SHOWCASE ============ */
const CDN = "https://autofeeds.id/landing";
const num = (n: number) => String(n).padStart(2, "0");
const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

const PREVIEW_MODES = [
  { label: "BANNER", img: `${CDN}/modes/banner-preview.jpg` },
  { label: "THUMBNAIL", img: `${CDN}/modes/thumbnail-preview.jpg` },
  { label: "TYPOGRAPHY", img: `${CDN}/modes/typography-preview.jpg` },
  { label: "COPY", img: `${CDN}/modes/copy-preview.jpg` },
];

const TYPO_ADS = range(20).map((i) => `${CDN}/ads-typography/typo-${num(i)}.jpg`);
const VERT_ADS = range(20).map((i) => `${CDN}/ads-9x16/vert-${num(i)}.jpg`);
const LANDSCAPE_ADS = range(20).map((i) => `${CDN}/ads-16x9/yt-${num(i)}.jpg`);
const FEED_ADS = range(20).map((i) => `${CDN}/ads-1x1/ig-${num(i)}.jpg`);

const FACE_CARDS = [
  { t: "Face Features", img: `${CDN}/face-card/face-features.jpg` },
  { t: "Spectacles Guide", img: `${CDN}/face-card/spectacles-guide.jpg` },
  { t: "Style Analysis", img: `${CDN}/face-card/style-analysis.jpg` },
  { t: "Color Analysis", img: `${CDN}/face-card/color-analysis.jpg` },
  { t: "Makeup Analysis", img: `${CDN}/face-card/makeup-analysis.jpg` },
];

const MENU_FB = [
  { t: "Patisserie Luxury", img: `${CDN}/menu-fb/patisserie-luxury.jpg` },
  { t: "Healthy Editorial", img: `${CDN}/menu-fb/healthy-editorial.jpg` },
  { t: "Korean Street", img: `${CDN}/menu-fb/korean-street.jpg` },
  { t: "Indo Heritage", img: `${CDN}/menu-fb/indo-heritage.jpg` },
  { t: "Japanese Premium", img: `${CDN}/menu-fb/japanese-premium.jpg` },
  { t: "Retro Marketplace", img: `${CDN}/menu-fb/retro-marketplace.jpg` },
  { t: "Homemade Cozy", img: `${CDN}/menu-fb/homemade-cozy.jpg` },
  { t: "Betawi Festive", img: `${CDN}/menu-fb/betawi-festive.jpg` },
  { t: "Rice Bowl Modern", img: `${CDN}/menu-fb/rice-bowl-modern.jpg` },
];

function ShowGrid({
  items,
  aspect,
  label,
  reverse = false,
  widthClass = "w-48 md:w-64",
}: {
  items: string[];
  aspect: string;
  label: string;
  reverse?: boolean;
  widthClass?: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-baseline justify-between mb-4 px-2 sm:px-0">
        <div className="font-mono text-xs text-hi tracking-widest">/{label}</div>
        <div className="font-mono text-[10px] text-muted-foreground">{items.length} VARIANT</div>
      </div>

      <div className="relative overflow-hidden -mx-5 lg:-mx-8">
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className={`flex w-max ${reverse ? "ticker-reverse" : "ticker"} hover:[animation-play-state:paused] py-2`}
          style={{ animationDuration: "45s" }}
        >
          {[...items, ...items].map((src, i) => (
            <div key={i} className="px-2 md:px-3 shrink-0">
              <div
                className={`relative ${aspect} ${widthClass} rounded-xl md:rounded-2xl border border-border overflow-hidden bg-surface group shadow-lg`}
              >
                <img
                  src={src}
                  alt={`${label} ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 font-mono text-[9px] text-white/80 bg-black/40 backdrop-blur px-1.5 py-0.5 rounded border border-white/10">
                  {num((i % items.length) + 1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/05" label="SHOWCASE" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Hasil yang naik feed kemarin.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Setiap variant di bawah lahir dari satu studio — beda kategori, beda gaya, beda format.
          Semua tanpa edit manual.
        </p>

        {/* Preview Modes */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {PREVIEW_MODES.map((m) => (
            <div
              key={m.label}
              className="relative aspect-[4/5] rounded-xl border border-border overflow-hidden bg-surface group"
            >
              <img src={m.img} alt={m.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-mono text-[10px] tracking-widest text-hi">MODE</div>
                <div className="text-white font-semibold mt-1">{m.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-12">
          <ShowGrid
            items={TYPO_ADS}
            aspect="aspect-[4/5]"
            label="TYPOGRAPHY ADS · 4:5"
            widthClass="w-44 md:w-56"
          />
          <ShowGrid
            items={VERT_ADS}
            aspect="aspect-[9/16]"
            label="VERTICAL CONTENT · 9:16"
            reverse={true}
            widthClass="w-40 md:w-48"
          />
          <ShowGrid
            items={LANDSCAPE_ADS}
            aspect="aspect-video"
            label="LANDSCAPE & THUMBNAIL · 16:9"
            widthClass="w-64 md:w-80"
          />
          <ShowGrid
            items={FEED_ADS}
            aspect="aspect-square"
            label="FEED ADS · 1:1"
            reverse={true}
            widthClass="w-48 md:w-64"
          />

          {/* Face Card */}
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <div className="font-mono text-xs text-hi tracking-widest">/FACE CARD ANALYSIS</div>
              <div className="font-mono text-[10px] text-muted-foreground">5 ANALYSIS</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {FACE_CARDS.map((f) => (
                <div
                  key={f.t}
                  className="relative aspect-[3/4] rounded-xl border border-border overflow-hidden bg-surface"
                >
                  <img src={f.img} alt={f.t} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                    {f.t}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu F&B */}
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <div className="font-mono text-xs text-hi tracking-widest">/MENU F&B THEMES</div>
              <div className="font-mono text-[10px] text-muted-foreground">9 TEMPLATES</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {MENU_FB.map((m) => (
                <div
                  key={m.t}
                  className="relative aspect-[4/5] rounded-xl border border-border overflow-hidden bg-surface"
                >
                  <img src={m.img} alt={m.t} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded">
                    THEME
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white font-semibold">
                    {m.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-4 gap-3">
          {["1:1 Feed", "9:16 Story", "16:9 YT", "4:5 Ads"].map((f) => (
            <div key={f} className="rounded-xl border border-border bg-surface p-5">
              <div className="font-mono text-xs text-hi">FORMAT</div>
              <div className="mt-2 text-xl font-semibold">{f}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [t, setT] = useState({ d: 6, h: 23, m: 59, s: 55 });

  useEffect(() => {
    // Total durasi: 6 hari, 23 jam, 59 menit, 55 detik
    const DURATION = 6 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 55 * 1000;

    let target = localStorage.getItem("superfeed_timer_target");
    if (!target) {
      target = (Date.now() + DURATION).toString();
      localStorage.setItem("superfeed_timer_target", target);
    }

    let targetTime = parseInt(target, 10);

    const updateTimer = () => {
      const now = Date.now();
      let diff = targetTime - now;

      // Apabila timer habis, settingkan loop/mengulang
      if (diff <= 0) {
        targetTime = now + DURATION;
        localStorage.setItem("superfeed_timer_target", targetTime.toString());
        diff = DURATION;
      }

      setT({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const id = setInterval(updateTimer, 1000);
    return () => clearInterval(id);
  }, []);

  const features = [
    "Free Tools Image to Json Prompt GEMINI PRO (Unlimited)",
    "Free Tools Image to Json Prompt CHATGPT (Unlimited)",
    "Free Generate Image Tools GEMINI (Lifetime)",
    "Free Generate Image Tools CHATGPT (Lifetime)",
    "Ribuan gaya visual, satu studio",
    "10 mode kreatif (Banner / Thumbnail / Ads / Copy / Face Card / Menu F&B)",
    "4 Affiliate Tools (Logo · Try-On · Review · Storyboard)",
    "48+ kategori preset + 9 template Menu F&B siap pakai",
    "Unlimited render — tanpa kuota harian",
    "Multi-format output (1:1 · 9:16 · 16:9 · 4:5 · A4)",
    "Update mode & kategori baru — selamanya",
    "Akses dashboard via email kamu",
  ];

  return (
    <section id="harga" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/06" label="EARLY ACCESS · BATCH 1" />
        <div className="mt-4 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Akses penuh,
              <br />
              satu kali bayar.
              <br />
              <span className="text-hi">Selamanya.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Harga early access cuma dibuka untuk batch pertama. Setelah kuota habis, harga normal
              kembali ke Rp 700.000.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-2 max-w-md">
              {[
                ["HARI", t.d],
                ["JAM", t.h],
                ["MIN", t.m],
                ["DET", t.s],
              ].map(([l, v]) => (
                <div
                  key={l as string}
                  className="rounded-xl bg-[#111] border border-white/5 p-4 md:p-5 text-center"
                >
                  <div className="font-mono text-3xl md:text-4xl font-bold tabular-nums text-white">
                    {String(v).padStart(2, "0")}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest mt-3">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="font-mono text-xs text-muted-foreground mb-3">
                KUOTA BATCH 1 · 69 / 100 TERISI
              </div>
              <div className="h-2.5 rounded-full bg-[#111] border border-white/5 overflow-hidden">
                <div className="h-full bg-hi rounded-full" style={{ width: "69%" }} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-hi/40 bg-background p-8 glow-lime">
              <div className="absolute -top-3 right-6 bg-hi text-primary-foreground font-mono text-[10px] tracking-widest px-3 py-1 rounded-full">
                HEMAT 93%
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-muted-foreground line-through">Rp 700.000</span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                  HARGA NORMAL
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-4xl md:text-6xl font-semibold tracking-tight whitespace-nowrap">
                  Rp 49.000
                </span>
                <span className="text-sm text-muted-foreground">sekali bayar · selamanya</span>
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-widest text-hi">
                Daftar Sekali - Akses Selamanya
              </div>

              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <span className="text-hi mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_URL}
                className="mt-8 w-full inline-flex justify-center items-center gap-2 rounded-xl bg-hi text-primary-foreground px-4 py-4 text-[clamp(13px,4vw,16px)] whitespace-nowrap font-bold hover:opacity-90 transition"
              >
                Klaim Early Access Sekarang →
              </a>
              <div className="mt-4 text-center text-[11px] sm:text-xs md:text-base font-bold text-hi max-w-[280px] md:max-w-none mx-auto leading-tight md:leading-normal">
                Harga Dapat Berubah Sewaktu-Waktu Tanpa Pemberitahuan. Amankan Promo Hari Ini
                Sebelum Berakhir!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const qs = [
    [
      "Apa bedanya Super AI Feed 1.2 dengan Canva atau Photoshop?",
      "Canva dan Photoshop adalah editor — kamu harus tahu desain dulu. Super AI Feed 1.2 adalah studio otomatis — kamu cukup isi brief, hasilnya langsung jadi visual siap upload tanpa edit manual.",
    ],
    [
      "Apakah saya butuh skill desain untuk pakai ini?",
      "Tidak. Cukup pilih kategori industri, isi nama produk, pilih warna brand — selebihnya engine yang kerjain.",
    ],
    [
      "Format dan rasio apa saja yang bisa dihasilkan?",
      "Feed 1:1, story/reels 9:16, thumbnail YouTube 16:9, dan typography ads 4:5.",
    ],
    ["Apakah ada biaya bulanan?", "Tidak. Sekali bayar Rp 49.000 (selama early access)."],
    [
      "Apakah saya dapat update mode baru di masa depan?",
      "Iya. Semua mode dan kategori baru akan otomatis tersedia tanpa biaya tambahan.",
    ],
    [
      "Bagaimana cara akses setelah bayar?",
      "Setelah pembayaran terkonfirmasi, kamu akan menerima email berisi akses masuk ke studio.",
    ],
    [
      "Berapa banyak design yang bisa saya hasilkan?",
      "Unlimited. Tidak ada quota, tidak ada throttle per hari.",
    ],
    [
      "Apakah hasilnya bisa untuk pemakaian komersial?",
      "Iya. Bebas dipakai untuk iklan berbayar, konten brand, marketplace, cetak.",
    ],
    [
      "Saya pemula total, beneran bisa pakai?",
      "Bisa. Pilih kategori, isi nama, klik salin design. Selesai dalam 30 detik.",
    ],
    [
      "Apakah hasilnya bisa di-custom sesuai brand kita?",
      "Sangat bisa. Kamu input warna brand, gaya komunikasi, dan persona produk — engine otomatis menyesuaikan.",
    ],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/07" label="FAQ" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Pertanyaan yang sering muncul.
        </h2>
        <div className="mt-12 max-w-3xl divide-y divide-border border-t border-b border-border">
          {qs.map(([q, a], i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-5 group"
            >
              <div className="flex justify-between items-start gap-6">
                <div className="flex gap-4">
                  <span className="font-mono text-xs text-hi mt-1">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium">{q}</span>
                </div>
                <span
                  className={`text-hi text-xl transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </div>
              {open === i && (
                <p className="mt-4 ml-12 text-muted-foreground leading-relaxed overflow-hidden">
                  {a}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CLOSING ============ */
function Closing() {
  return (
    <section className="border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-[0.15] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-hi/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 py-24 lg:py-32 text-center">
        <div className="font-mono text-xs tracking-[0.2em] text-hi">WAKTUNYA PINDAH.</div>
        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
          Berhenti nungguin designer.
          <br />
          Mulai <span className="text-hi">render hari ini.</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
          Visual brand kamu udah ketinggalan satu minggu. Super AI Feed 1.2 bisa mengembalikannya
          dalam satu jam pertama akses. Ambil early access sebelum kuota batch 1 habis.
        </p>
        <a
          href={CHECKOUT_URL}
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-hi text-primary-foreground px-8 py-5 text-lg font-semibold glow-lime hover:translate-y-[-1px] transition"
        >
          Bayar Rp 49.000 — Akses Selamanya
        </a>
        <div className="mt-4 font-mono text-[10px] tracking-widest text-muted-foreground">
          AKSES INSTAN SETELAH PEMBAYARAN · SELAMANYA
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="mt-8 bg-black py-10 px-4 sm:py-12 sm:px-6 text-center text-white">
      <div className="mx-auto max-w-[800px] p-0">
        {/* Tombol Ungu */}
        <a
          href="/daftar-feed"
          className="inline-block bg-transparent text-hi px-8 py-3 rounded-full font-bold text-[0.95rem] mb-[30px] shadow-[0_4px_14px_rgba(251,191,36,0.15)] border border-hi hover:bg-hi/10 hover:-translate-y-0.5 transition-all"
        >
          Tools Powered By @Irfansangjuara_
        </a>

        {/* Baris 1: Gambar Profil/Sponsor disusun sejajar 1 baris di tengah */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <img
            src="https://res.cloudinary.com/dceu5m3fm/image/upload/f_auto,q_auto:best,dpr_auto,c_limit,w_1200/v1774617869/poster_copilot_marketing_dynamic_v2_ylzscn.png"
            alt="Sponsor 1"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-[280px] h-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/q_auto,f_auto,dpr_auto,w_400/v1775534181/Profil_13_qg0d40.png"
            alt="Sponsor 2"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-[280px] h-auto rounded-2xl bg-white p-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/q_auto,f_auto,dpr_auto,w_400/v1775800852/IG_1_bfuux9.png"
            alt="Sponsor 3"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-[280px] h-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/f_auto,q_auto,dpr_auto,w_400/v1770109356/profile-cv-irfan_nyyt5o.webp"
            alt="Sponsor 4"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-[280px] h-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/f_auto,q_auto,dpr_auto,w_400/v1770109782/Badge_nfryio.png"
            alt="Sponsor 5"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-[280px] h-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Baris 2: Sertifikat Google dalam 2 kolom grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-4 w-full lg:max-w-[500px] mx-auto items-center mb-12 sm:mb-0">
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/f_auto,q_auto,dpr_auto,w_500/v1770109353/cert-google-ads-search_vaimwh.jpg"
            alt="Certificate 1"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-full mx-auto h-auto rounded-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/f_auto,q_auto,dpr_auto,w_500/v1770109353/cert-google-analytics_aqlxmj.jpg"
            alt="Certificate 2"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-full mx-auto h-auto rounded-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/f_auto,q_auto,dpr_auto,w_500/v1770109353/cert-google-ads-video_wucpvd.jpg"
            alt="Certificate 3"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-full mx-auto h-auto rounded-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dgl7rkxfa/image/upload/f_auto,q_auto,dpr_auto,w_500/v1770109355/cert-google-gemini_aszwll.png"
            alt="Certificate 4"
            decoding="async"
            className="w-full object-cover max-w-full lg:max-w-full mx-auto h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </footer>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============ SALES PING ============ */
function SalesPing() {
  const [show, setShow] = useState(false);

  const originalPings = [
    "tasy*********@gmail.com",
    "rendr*******@gmail.com",
    "auli********@gmail.com",
    "bagas*******@gmail.com",
    "dinda*******@gmail.com",
  ];

  const [current, setCurrent] = useState(originalPings[0]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let queue = shuffle(originalPings);
    let idx = 0;

    const showNotif = () => {
      setCurrent(queue[idx]);
      idx += 1;
      if (idx >= queue.length) {
        queue = shuffle(originalPings);
        idx = 0;
      }
      setShow(true);
      setTimeout(() => setShow(false), 4000);
      const nextDelay = 12000 + Math.floor(Math.random() * 3000);
      timeoutId = setTimeout(showNotif, nextDelay);
    };

    timeoutId = setTimeout(showNotif, 8000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`fixed bottom-24 md:bottom-20 left-3 md:left-5 z-[100] bg-surface/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl transition-all duration-500 ${
        show ? "translate-x-0 opacity-100" : "-translate-x-[130%] opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-2 p-2 sm:gap-3 sm:p-3 w-[172px] sm:w-[268px]">
        <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-hi/15 border border-hi/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-hi/10">
          <svg
            className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-hi"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] sm:text-xs font-bold text-foreground truncate leading-tight">
            {current} baru saja bergabung!
          </p>
          <p className="text-[8px] sm:text-[10px] text-hi font-bold mt-0.5">Update Member Baru</p>
          <p className="text-[7px] sm:text-[9px] text-muted-foreground font-medium mt-0.5">
            @Irfansangjuara_
          </p>
        </div>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 flex-shrink-0" />
      </div>
    </div>
  );
}

/* ============ FLOATING BANNER ============ */
function FloatingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[50] flex justify-center items-end p-3 md:p-0 pointer-events-none">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 md:border-x-0 md:border-b-0 shadow-[0_-10px_40px_rgba(251,191,36,0.15)] rounded-2xl md:rounded-none w-full pointer-events-auto flex justify-center flex-none">
        <div className="w-full max-w-6xl mx-auto flex flex-row items-center justify-between gap-2 sm:gap-6 p-2.5 sm:p-3 md:px-6 md:py-1.5">
          <div className="flex items-center gap-1.5 sm:gap-3 text-left flex-1 min-w-0">
            <span className="text-3xl sm:text-4xl shrink-0 leading-none">🔥</span>
            <p className="text-[10px] sm:text-[12px] md:text-[13px] font-bold text-foreground leading-[1.3] line-clamp-2 text-left">
              Mumpung masih{" "}
              <span className="bg-hi text-primary-foreground px-1 rounded whitespace-nowrap">
                Diskon 75%
              </span>
              , buruan daftar sebelum harga NAIK!
            </p>
          </div>

          <a
            href="#harga"
            className="flex items-center justify-center gap-1.5 bg-hi text-primary-foreground text-[11px] sm:text-[13.5px] md:text-[14px] font-black px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl hover:shadow-lg hover:shadow-hi/30 transition-all shrink-0"
          >
            <span>Claim Sekarang</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6-6m6 6l-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
