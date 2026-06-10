import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super AI Feed 1.2 — Instant Design Studio" },
      { name: "description", content: "Generate desain iklan profesional untuk feed, ads, dan branding dalam hitungan detik. Tanpa designer, tanpa langganan." },
      { property: "og:title", content: "Super AI Feed 1.2 — Early Access Rp 50.000" },
      { property: "og:description", content: "10 mode kreatif, 48+ kategori, sekali bayar selamanya." },
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

const CHECKOUT_URL = "https://aiautomation.myr.id/pl/auto-feeds/";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ValueProp />
        <Audience />
        <Comparison />
        <Testimonials />
        <Showcase />
        <Pricing />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <SalesPing />
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
          <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">v1.2 · INSTANT DESIGN STUDIO</span>
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
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase border border-hi/40 text-hi px-3 py-1.5 rounded-full bg-hi/5">
            <span className="w-1.5 h-1.5 rounded-full bg-hi animate-pulse" />
            Early Access · Batch Pertama
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] font-semibold tracking-tight">
            Tanpa Designer,<br />
            Buat Konten Ala <span className="text-hi">Desain Grafis</span> Profesional<br className="hidden sm:block" />
            dalam Hitungan Detik.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Generate desain iklan profesional untuk feed, ads, dan branding hanya dalam beberapa detik.
            Tanpa belajar desain, tanpa langganan tool mahal, tanpa nunggu revisi tiga hari.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={CHECKOUT_URL}
              className="inline-flex justify-center items-center gap-2 rounded-xl bg-hi text-primary-foreground px-6 py-4 text-base font-semibold glow-lime hover:translate-y-[-1px] transition"
            >
              Ambil Early Access — Rp 50.000
            </a>
            <a
              href="#showcase"
              className="inline-flex justify-center items-center gap-2 rounded-xl border border-border bg-surface px-6 py-4 text-base font-medium hover:bg-surface-2 transition"
            >
              Lihat Hasil Generate →
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <li>✓ Sekali bayar — seumur hidup</li>
            <li>✓ 10 mode kreatif</li>
            <li>✓ 48+ kategori siap pakai</li>
          </ul>
        </div>

        {/* Mockup */}
        <div className="lg:col-span-5">
          <MockupCard />
        </div>
      </div>
    </section>
  );
}

function MockupCard() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-hi/80" />
        </div>
        <div className="font-mono text-[10px] text-muted-foreground">app.superaifeed.id/studio</div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-hi">
          <span className="w-1.5 h-1.5 rounded-full bg-hi animate-pulse" /> LIVE
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="font-mono text-[10px] text-muted-foreground tracking-widest">/ BANNER GENERATOR</div>
        <Field label="BRAND" value="AuraSkin" />
        <Field label="HEADLINE" value="Premium Sunscreen SPF 50" />
        <Field label="STYLE" value="Minimal Clean" />
        <div className="grid grid-cols-3 gap-2 pt-1">
          {["Soft", "Editorial", "Bold"].map((s, i) => (
            <button
              key={s}
              className={`text-xs py-2 rounded-md border ${
                i === 1 ? "border-hi bg-hi/10 text-hi" : "border-border text-muted-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <button className="w-full mt-2 rounded-md bg-hi text-primary-foreground py-3 text-sm font-semibold">
          Generate Design ⚡
        </button>
        <div className="grid grid-cols-3 gap-2 pt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-md"
              style={{
                background: [
                  "linear-gradient(135deg,#f4ead1,#d1bf8a)",
                  "linear-gradient(135deg,#1a1a1a,#3a3a3a)",
                  "linear-gradient(135deg,#fcd34d,#f59e0b)",
                ][i],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1">{label}</div>
      <div className="rounded-md border border-border bg-background/40 px-3 py-2.5 text-sm">{value}</div>
    </div>
  );
}

/* ============ MARQUEE ============ */
function Marquee() {
  const items = [
    "10 MODE KREATIF", "48+ KATEGORI", "UNLIMITED RENDER", "MULTI-FORMAT",
    "BRAND-LOCKED", "SEKALI BAYAR", "UPDATE LIFETIME", "COMMERCIAL-GRADE",
  ];
  return (
    <div className="border-b border-border bg-surface overflow-hidden">
      <div className="flex ticker whitespace-nowrap py-4 font-mono text-xs tracking-[0.2em] text-muted-foreground">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="px-8 inline-flex items-center gap-8">
            {t}<span className="text-hi">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============ VALUE PROP ============ */
function ValueProp() {
  const items = [
    { t: "Output presisi", d: "Bukan template generik — tiap field dipetakan ke karakter visual commercial-grade." },
    { t: "48+ kategori siap", d: "F&B, fashion, beauty, otomotif, edukasi, finance, sampai niche gaming — preset on click." },
    { t: "Multi-format output", d: "Banner, thumbnail, typography, story, reels — semua format lahir dari satu studio." },
    { t: "Sekali bayar", d: "Tanpa langganan bulanan. Tanpa kredit per render. Akses penuh selamanya begitu lunas." },
    { t: "Render unlimited", d: "Sebanyak apapun visual yang kamu butuh — gak ada batas, gak ada throttle." },
    { t: "Update lifetime", d: "Mode baru, kategori baru, opsi gaya baru — semua di-push otomatis ke akunmu." },
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
          Setiap mode di Super AI Feed 1.2 dirancang dari hasil reverse-engineering brief studio kreatif beneran,
          lalu disederhanakan jadi form yang siapapun bisa isi.
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
    { t: "UMKM & Brand Owner", d: "Konten produk harian tanpa harus hire designer freelance tiap minggu." },
    { t: "Performance Marketer", d: "Bikin 20 variasi creative test untuk A/B Meta Ads dalam satu sore." },
    { t: "Content Creator", d: "Thumbnail YouTube dan cover TikTok yang konsisten gaya, gak mati ide." },
    { t: "Course Creator & Mentor", d: "Banner promosi kelas, ebook cover, slide pembuka — semua dari satu studio." },
    { t: "Agency & Freelancer", d: "Brief klien masuk pagi, mockup ready siang. Margin proyek naik tajam." },
    { t: "Reseller & Dropshipper", d: "Asset visual untuk tiap SKU baru tanpa nambah biaya produksi konten." },
  ];
  return (
    <section id="cara-kerja" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/02" label="DIPAKAI OLEH" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Dibuat untuk enam tipe orang ini.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Kalau salah satu deskripsi di bawah terdengar seperti kamu — Super AI Feed 1.2 akan langsung
          kepake hari pertama akses.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-6 hover:border-hi/40 transition">
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
    ["Biaya per banner", "Rp 50–500 ribu", "Termasuk paket"],
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
            <div className="font-mono text-xs text-muted-foreground">/01 · CARA KONVENSIONAL (LAMBAT)</div>
            <div className="mt-5 divide-y divide-border">
              {rows.map(([k, v]) => (
                <div key={k} className="py-3 flex justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground/80 line-through decoration-destructive/60">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-hi/40 p-6 bg-hi/[0.04]">
            <div className="font-mono text-xs text-hi">/02 · CARA SUPER AI FEED (INSTAN)</div>
            <div className="mt-5 divide-y divide-border">
              {rows.map(([k, , v]) => (
                <div key={k} className="py-3 flex justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-semibold">{v}</span>
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
    { n: "Rendra A.", r: "OWNER BRAND SKINCARE", q: "Biasanya brief ke designer 3 hari kelar, sekarang sore racik design — malamnya udah jalanin Meta Ads. Game changer buat tim kecil." },
    { n: "Aulia M.", r: "YOUTUBER 240K SUBS", q: "Thumbnail mode-nya ngeselin di awal (kenapa enak banget), sekarang gak pernah lagi mikir layout dari nol." },
    { n: "Bagas D.", r: "PERFORMANCE MARKETER", q: "Buat 30 variant creative test pagi, malamnya udah ada winning ads. ROAS naik 1.8x dalam dua minggu." },
    { n: "Kirana S.", r: "COURSE CREATOR", q: "Banner promo kelas, e-book cover, slide cover — semua dari satu studio. Brand jadi keliatan konsisten." },
    { n: "Yoga P.", r: "UMKM KOPI SPECIALTY", q: "Awalnya skeptis, tapi setelah lihat hasil typography mode-nya... ya udah, langsung lifetime." },
    { n: "Dinda L.", r: "AGENCY PARTNER", q: "Margin proyek visual naik karena waktu produksi ke-cut drastis. Klien gak tau bedanya, dan itu poinnya." },
  ];
  const palette = ["#a3e635", "#facc15", "#fb7185", "#60a5fa", "#c084fc", "#f97316"];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
        <SectionLabel index="/04" label="DARI USER BATCH AWAL" />
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
          Yang sudah pakai <span className="text-muted-foreground">nggak balik lagi</span> ke cara lama.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-background p-6 flex flex-col">
              <blockquote className="text-base leading-relaxed flex-1">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-background"
                  style={{ background: palette[i] }}
                >
                  {t.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SHOWCASE ============ */
function Showcase() {
  // Procedurally-styled tiles since external image URLs may not load
  const tiles = Array.from({ length: 16 }, (_, i) => i);
  const gradients = [
    "linear-gradient(135deg,#fde68a,#f97316)",
    "linear-gradient(135deg,#1f2937,#0f172a)",
    "linear-gradient(135deg,#f5f5f4,#a8a29e)",
    "linear-gradient(135deg,#fca5a5,#7f1d1d)",
    "linear-gradient(135deg,#86efac,#14532d)",
    "linear-gradient(135deg,#a5b4fc,#1e1b4b)",
    "linear-gradient(135deg,#fef3c7,#92400e)",
    "linear-gradient(135deg,#fbcfe8,#831843)",
  ];
  const labels = ["BANNER", "THUMBNAIL", "TYPOGRAPHY", "STORY", "REELS", "MENU F&B", "FACE CARD", "COPY"];
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {tiles.map((i) => (
            <div
              key={i}
              className="relative aspect-[4/5] rounded-xl border border-border overflow-hidden group"
              style={{ background: gradients[i % gradients.length] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded">
                /{labels[i % labels.length]}
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white font-semibold leading-tight">
                {["Premium SPF 50", "Specialty Coffee", "Editorial Drop", "Launch 24.10", "Sale 70%", "New Menu", "Brand Story", "Promo Kelas"][i % 8]}
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] text-white/80">{String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-4 gap-3">
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

/* ============ PRICING ============ */
function Pricing() {
  const [t, setT] = useState({ d: 6, h: 23, m: 59, s: 55 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let { d, h, m, s } = p;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const features = [
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
              Akses penuh,<br />satu kali bayar.<br /><span className="text-hi">Selamanya.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Harga early access cuma dibuka untuk batch pertama. Setelah kuota habis, harga normal
              kembali ke Rp 700.000.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-2 max-w-md">
              {[
                ["HARI", t.d], ["JAM", t.h], ["MIN", t.m], ["DET", t.s],
              ].map(([l, v]) => (
                <div key={l as string} className="rounded-lg bg-background border border-border p-3 text-center">
                  <div className="font-mono text-2xl font-semibold tabular-nums">
                    {String(v).padStart(2, "0")}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-widest mt-1">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="font-mono text-xs text-muted-foreground mb-2">KUOTA BATCH 1 · 69 / 100 TERISI</div>
              <div className="h-2 rounded-full bg-background border border-border overflow-hidden">
                <div className="h-full bg-hi" style={{ width: "69%" }} />
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
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">HARGA NORMAL</span>
              </div>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-6xl font-semibold tracking-tight">Rp 50.000</span>
                <span className="text-sm text-muted-foreground">sekali bayar · selamanya</span>
              </div>
              <div className="mt-1 font-mono text-[10px] tracking-widest text-hi">
                TANPA LANGGANAN · TANPA BIAYA TERSEMBUNYI
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
                className="mt-8 w-full inline-flex justify-center items-center gap-2 rounded-xl bg-hi text-primary-foreground px-6 py-4 text-base font-semibold hover:opacity-90 transition"
              >
                Klaim Early Access Sekarang →
              </a>
              <div className="mt-4 text-center font-mono text-[10px] tracking-widest text-muted-foreground">
                TRANSFER · QRIS · OVO · GOPAY · DANA
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
    ["Apa bedanya Super AI Feed 1.2 dengan Canva atau Photoshop?", "Canva dan Photoshop adalah editor — kamu harus tahu desain dulu. Super AI Feed 1.2 adalah studio otomatis — kamu cukup isi brief, hasilnya langsung jadi visual siap upload tanpa edit manual."],
    ["Apakah saya butuh skill desain untuk pakai ini?", "Tidak. Cukup pilih kategori industri, isi nama produk, pilih warna brand — selebihnya engine yang kerjain."],
    ["Format dan rasio apa saja yang bisa dihasilkan?", "Feed 1:1, story/reels 9:16, thumbnail YouTube 16:9, dan typography ads 4:5."],
    ["Apakah ada biaya bulanan?", "Tidak. Sekali bayar Rp 50.000 (selama early access)."],
    ["Apakah saya dapat update mode baru di masa depan?", "Iya. Semua mode dan kategori baru akan otomatis tersedia tanpa biaya tambahan."],
    ["Bagaimana cara akses setelah bayar?", "Setelah pembayaran terkonfirmasi, kamu akan menerima email berisi akses masuk ke studio."],
    ["Berapa banyak design yang bisa saya hasilkan?", "Unlimited. Tidak ada quota, tidak ada throttle per hari."],
    ["Apakah hasilnya bisa untuk pemakaian komersial?", "Iya. Bebas dipakai untuk iklan berbayar, konten brand, marketplace, cetak."],
    ["Saya pemula total, beneran bisa pakai?", "Bisa. Pilih kategori, isi nama, klik salin design. Selesai dalam 30 detik."],
    ["Apakah hasilnya bisa di-custom sesuai brand kita?", "Sangat bisa. Kamu input warna brand, gaya komunikasi, dan persona produk — engine otomatis menyesuaikan."],
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
                  <span className="font-mono text-xs text-hi mt-1">Q{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-medium">{q}</span>
                </div>
                <span className={`text-hi text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </div>
              {open === i && (
                <p className="mt-4 ml-12 text-muted-foreground leading-relaxed">{a}</p>
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
          Berhenti nungguin designer.<br />
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
          Bayar Rp 50.000 — Akses Selamanya
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
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="text-hi font-mono">◆</span>
            <span className="font-semibold">Super AI Feed 1.2</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Studio visual otomatis untuk banner, thumbnail, ads, dan typography. Dibangun di Indonesia
            untuk creator dan brand yang lelah nunggu designer.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs tracking-widest text-muted-foreground">STUDIO</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-hi transition">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs tracking-widest text-muted-foreground">SOCIAL</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-hi transition">@superaifeed</a></li>
            <li><a href="#" className="hover:text-hi transition">SuperAIFeed</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 font-mono text-[10px] tracking-widest text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 SUPER AI FEED 1.2 · ALL RIGHTS RESERVED</span>
          <span>V2.1 · EARLY ACCESS BUILD</span>
        </div>
      </div>
    </footer>
  );
}

/* ============ SALES PING ============ */
function SalesPing() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const pings = [
    "tasy*********@gmail.com",
    "rendr*******@gmail.com",
    "auli********@gmail.com",
    "bagas*******@gmail.com",
    "dinda*******@gmail.com",
  ];
  useEffect(() => {
    const cycle = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5500);
    };
    const t1 = setTimeout(cycle, 3500);
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % pings.length);
      cycle();
    }, 11000);
    return () => { clearTimeout(t1); clearInterval(id); };
  }, []);
  return (
    <div
      className={`fixed bottom-5 left-5 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="rounded-xl border border-border bg-surface/95 backdrop-blur p-3 pr-4 flex items-center gap-3 shadow-2xl max-w-xs">
        <div className="w-9 h-9 rounded-lg bg-hi/15 border border-hi/30 flex items-center justify-center text-hi">✓</div>
        <div>
          <div className="text-sm font-medium">{pings[idx]}</div>
          <div className="font-mono text-[10px] text-muted-foreground tracking-widest">MEMBELI · VERIFIED BY MAYAR</div>
        </div>
      </div>
    </div>
  );
}
