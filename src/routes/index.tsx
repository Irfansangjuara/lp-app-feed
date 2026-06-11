import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super AI Feed 1.2 — Instant Design Studio" },
      { name: "description", content: "Generate desain iklan profesional untuk feed, ads, dan branding dalam hitungan detik. Tanpa designer, tanpa langganan." },
      { property: "og:title", content: "Super AI Feed 1.2 — Early Access Rp 49.000" },
      { property: "og:description", content: "10 mode kreatif, 48+ kategori, sekali bayar selamanya." },
    ],
  }),
  component: LandingPage,
});

const CHECKOUT_URL = "https://copilotmarketing.id/daftar-feed";

const STYLE = `
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Arial, sans-serif; color: #222; background: #fff; }
:root {
  --red: #7c3aed;
  --red-dark: #5b21b6;
  --orange: #8b5cf6;
  --cream: #FFF8EE;
  --green: #2E7D32;
}
.wrap { max-width: 820px; margin: 0 auto; padding: 60px 24px; }
.hl-wrap { text-align: center; margin-bottom: 14px; }
.hl-box {
  display: inline-block; border: 2px solid var(--red);
  padding: 12px 20px; font-size: 1.35rem; font-weight: 900;
  line-height: 1.4; color: #222;
}
.premium-reveal-box {
  background: linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%);
  border: 1px solid #ddd6fe;
  border-radius: 16px;
  padding: 40px 30px;
  margin-top: 40px;
  box-shadow: 0 12px 35px rgba(124, 58, 237, 0.08);
  position: relative;
  overflow: hidden;
  text-align: center;
  z-index: 1;
}
.premium-reveal-box::before {
  content: '✨';
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 90px;
  opacity: 0.05;
  transform: rotate(15deg);
  z-index: -1;
}
.premium-reveal-box .icon-top {
  background: var(--red);
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin: 0 auto 20px auto;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}
.benefit-list { margin: 20px 0; padding-left: 20px; list-style: none; text-align: left; }
.benefit-list li { margin-bottom: 12px; font-size: 1.05rem; position: relative; padding-left: 30px; }
.benefit-list li::before { content: '✅'; position: absolute; left: 0; top: 0; font-size: 1.2rem; }
.cta-btn {
  display: block; background: linear-gradient(135deg, var(--red), var(--orange));
  color: #fff; text-align: center; padding: 16px 32px;
  border-radius: 50px; font-size: 1.15rem; font-weight: 900;
  text-decoration: none; cursor: pointer; border: none;
  margin: 28px auto 0; max-width: 520px;
  box-shadow: 0 5px 18px rgba(124,58,237,.38);
  transition: transform .2s, box-shadow .2s; letter-spacing: .4px;
}
.cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(124,58,237,.45); }
.vstack { list-style: none; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; }
.vstack li {
  display: flex; justify-content: space-between; align-items: center;
  padding: 13px 18px; border-bottom: 1px solid #eee; font-size: .9rem;
}
.price-box {
  border: 2px solid #e0e0e0; border-radius: 12px;
  padding: 26px; text-align: center; margin: 24px 0;
}
.price-box .actual {
  font-size: 2.4rem; font-weight: 900; color: var(--red);
  background: #f5f3ff; padding: 6px 24px; border-radius: 8px;
  display: inline-block; margin: 6px 0;
}
.cd-wrap { border: 1px solid #e0e0e0; border-radius: 12px; padding: 22px; text-align: center; margin: 14px 0; }
.cd-timers { display: flex; justify-content: center; gap: 18px; margin-bottom: 12px; }
.cd-unit { display: flex; flex-direction: column; align-items: center; }
.cd-circle {
  width: 72px; height: 72px; border-radius: 50%;
  border: 4px solid var(--red); display: flex;
  align-items: center; justify-content: center;
  font-size: 1.7rem; font-weight: 900; color: var(--red); margin-bottom: 5px;
}
.cd-lbl { font-size: .68rem; text-transform: uppercase; color: #999; letter-spacing: 1px; }
.faq-container { margin-top: 60px; margin-bottom: 40px; }
.faq-title { text-align: center; font-size: 1.8rem; font-weight: 800; color: #111827; margin-bottom: 30px; }
.faq-item {
  background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
  padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  text-align: left;
}
.faq-item h4 { margin: 0 0 10px 0; font-size: 1.1rem; color: var(--red-dark); font-weight: 700; }
.faq-item p { margin: 0; font-size: 1.05rem; color: #4b5563; line-height: 1.6; }

@media(max-width:600px){
  .wrap { padding: 40px 16px; }
  .hl-box { font-size: 1.1rem; padding: 10px 16px; }
  .vstack li { flex-direction: column; align-items: flex-start; gap: 8px; padding: 14px 16px; }
  .vstack li.total { align-items: center; text-align: center; }
  .price-box .actual { font-size: 1.85rem; }
  .cd-circle { width: 58px; height: 58px; font-size: 1.3rem; }
}
`;

function MockupCard() {
  return (
    <div className="relative rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden text-left" style={{backgroundColor: '#fafafa', border: '1px solid #ddd'}}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-2" style={{backgroundColor: '#f1f1f1', display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
        <div className="flex items-center gap-2" style={{display: 'flex', gap: '8px'}}>
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444'}} />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308'}} />
          <span className="w-2.5 h-2.5 rounded-full bg-hi/80" style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8b5cf6'}} />
        </div>
        <div className="font-mono text-[10px] text-muted-foreground" style={{fontSize: '10px', color: '#888'}}>app.superaifeed.id/studio</div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-hi" style={{fontSize: '10px', color: '#8b5cf6', display: 'flex', alignItems: 'center', gap: '4px'}}>
          <span className="w-1.5 h-1.5 rounded-full bg-hi animate-pulse" style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8b5cf6'}} /> LIVE
        </div>
      </div>
      <div className="p-5 space-y-4" style={{padding: '20px'}}>
        <div className="font-mono text-[10px] text-muted-foreground tracking-widest" style={{fontSize: '10px', color: '#888', letterSpacing: '1px', marginBottom: '10px'}}>/ BANNER GENERATOR</div>
        <Field label="BRAND" value="AuraSkin" />
        <Field label="HEADLINE" value="Premium Sunscreen SPF 50" />
        <Field label="STYLE" value="Minimal Clean" />
        <div className="grid grid-cols-3 gap-2 pt-1" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '10px'}}>
          {["Soft", "Editorial", "Bold"].map((s, i) => (
            <button
              key={s}
              style={{
                fontSize: '12px', padding: '8px', borderRadius: '6px', border: '1px solid',
                borderColor: i === 1 ? '#8b5cf6' : '#ddd',
                backgroundColor: i === 1 ? '#f5f3ff' : 'transparent',
                color: i === 1 ? '#8b5cf6' : '#555',
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <button style={{width: '100%', marginTop: '15px', borderRadius: '6px', backgroundColor: '#8b5cf6', color: '#fff', padding: '12px', fontSize: '14px', fontWeight: 'bold', border: 'none'}}>
          Generate Design ⚡
        </button>
        <div className="grid grid-cols-3 gap-2 pt-2" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '15px'}}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                aspectRatio: '1', borderRadius: '6px',
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
    <div style={{marginBottom: '10px'}}>
      <div className="font-mono text-[10px] text-muted-foreground tracking-widest mb-1" style={{fontSize: '10px', color: '#888', letterSpacing: '1px'}}>{label}</div>
      <div className="rounded-md border border-border bg-background/40 px-3 py-2.5 text-sm" style={{borderRadius: '6px', border: '1px solid #ddd', padding: '10px', fontSize: '14px', backgroundColor: '#fff'}}>{value}</div>
    </div>
  );
}

function CountdownTimer() {
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

  return (
    <div className="cd-wrap">
      <div className="cd-timers">
        <div className="cd-unit">
          <div className="cd-circle">{String(t.h).padStart(2, "0")}</div>
          <span className="cd-lbl">JAM</span>
        </div>
        <div className="cd-unit">
          <div className="cd-circle">{String(t.m).padStart(2, "0")}</div>
          <span className="cd-lbl">MENIT</span>
        </div>
        <div className="cd-unit">
          <div className="cd-circle">{String(t.s).padStart(2, "0")}</div>
          <span className="cd-lbl">DETIK</span>
        </div>
      </div>
      <p style={{fontStyle: 'italic', fontSize: '0.81rem', color: '#777'}}>Ingat, penawaran Early Access ini hanya berlaku sebelum waktu habis!</p>
    </div>
  );
}

function LandingPage() {
  return (
    <div style={{fontFamily: "'Segoe UI', Arial, sans-serif", color: "#222", background: "#fff", minHeight: "100vh"}}>
      <style dangerouslySetInnerHTML={{ __html: STYLE }} />
      <div className="wrap">
        
        {/* SECTION 1: HEADLINE */}
        <div className="hl-wrap">
          <div className="hl-box">🤔 Butuh Desain Konten Profesional tapi Gaptek dan Gak Punya Waktu?</div>
          <h1 style={{fontSize: "2.2rem", lineHeight: 1.3, marginBottom: "15px", marginTop: "15px", fontWeight: "bold"}}>
            Tanpa Designer, Buat Konten Ala Desain Grafis Profesional dalam Hitungan Detik.
          </h1>
          <p style={{fontSize: "1.15rem", color: "#555", lineHeight: 1.6}}>
            Generate desain iklan profesional untuk feed, ads, dan branding hanya dalam beberapa detik. Tanpa belajar desain, tanpa langganan tool mahal, tanpa nunggu revisi tiga hari.
          </p>
        </div>

        <div style={{margin: "40px 0"}}>
          <MockupCard />
        </div>

        {/* SECTION 2: PROBLEM SETUP / AGITASI */}
        <div style={{margin: "40px 0"}}>
          <p style={{marginBottom: "15px", fontSize: "1.1rem"}}>Wajar aja kalau kamu <strong>pusing</strong> karena waktu produksi 1 banner bisa sampai 4–24 jam.</p>
          <p style={{marginBottom: "15px", fontSize: "1.1rem"}}>Wajar aja kalau kamu <strong>boncos</strong> bayar desainer Rp 50–500 ribu untuk setiap revisi desain banner.</p>
          <p style={{marginBottom: "15px", fontSize: "1.1rem"}}>Wajar aja kalau kamu <strong>frustasi</strong> karena style visual nggak konsisten dan tergantung mood desainernya.</p>
          <p style={{marginBottom: "15px", fontSize: "1.1rem", background: "#dc2626", color: "#ffffff", padding: "18px 20px", borderRadius: "10px", fontWeight: 600, boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)"}}>
            Wajar aja kalau kamu <strong style={{color: "#ffffff", textDecoration: "underline"}}>sering telat posting</strong> karena <em>harus ngantri revisi berhari-hari</em>.
          </p>

          <div className="premium-reveal-box">
             <div className="icon-top">💡</div>
             <p style={{marginBottom: "15px", fontSize: "1.15rem", color: "#1f2937"}}>
                Masalahnya bukan kamu <em>gak bisa</em> desain, masalahnya kamu <strong style={{color: "var(--red-dark)", fontWeight: 800, fontSize: "1.2rem"}}>belum punya tools yang BENAR.</strong> 
                Super AI Feed 1.2 buat kamu bisa produksi visual komersial dalam hitungan detik <strong style={{color: "#E53935", textDecoration: "underline", textUnderlineOffset: 4}}>tanpa biaya bulanan.</strong>
             </p>
          </div>
        </div>

        {/* SECTION 3: PRODUCT BRIDGING & FITUR */}
        <h2 style={{textAlign: "center", marginBottom: "20px", fontSize: "1.5rem", fontWeight: "bold"}}>
          Bukan sekedar template generator — studio desain otomatis yang serius.
        </h2>

        <div style={{background: "#fff", border: "2px dashed var(--red)", padding: "20px", borderRadius: "12px", marginBottom: "40px"}}>
          <h3 style={{color: "var(--red)", textAlign: "center", marginBottom: "15px", fontWeight: "bold", fontSize: "1.2rem"}}>Yang Akan Kamu Dapatkan:</h3>
          <ul className="benefit-list">
            <li><strong>10 Mode Kreatif:</strong> Banner, Thumbnail, Typography, Ads, Copy, Face Card, Menu F&B, dll.</li>
            <li><strong>48+ Kategori Preset:</strong> Tersedia lengkap untuk F&B, fashion, beauty, otomotif, edukasi, finance.</li>
            <li><strong>Multi-Format Output:</strong> Render untuk Feed 1:1, Story 9:16, YouTube 16:9, Ads 4:5.</li>
            <li><strong>Unlimited Render:</strong> Sebanyak apapun visual yang kamu butuh, tanpa batasan kredit bulanan.</li>
            <li><strong>Brand-Locked:</strong> Pertahankan gaya yang konsisten hanya dengan sekali isi form.</li>
            <li><strong>Sekali Bayar:</strong> Tanpa langganan bulanan. Update seumur hidup gratis otomatis di akun kamu.</li>
          </ul>
        </div>

        <a href={CHECKOUT_URL} className="cta-btn">👉 Ya, Saya Mau Akses Super AI Feed 1.2</a>

        {/* SECTION 4: SHOWCASE & TESTIMONI */}
        <div style={{marginTop: "60px", marginBottom: "40px"}}>
          <h2 style={{textAlign: "center", marginBottom: "20px", fontSize: "1.6rem", color: "var(--red-dark)", fontWeight: "bold"}}>Hasil Desain Keren dari Super AI Feed 1.2</h2>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px"}}>
             <img src="https://autofeeds.id/landing/modes/banner-preview.jpg" style={{width: "100%", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)"}} alt="Banner" />
             <img src="https://autofeeds.id/landing/modes/thumbnail-preview.jpg" style={{width: "100%", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.15)"}} alt="Thumbnail" />
          </div>

          <div style={{position: "relative", maxWidth: "600px", margin: "0 auto 30px auto", padding: "24px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "2px solid #e5e7eb", background: "#f9fafb"}}>
             <h3 style={{textAlign: "center", fontSize: "1.3rem", fontWeight: 800, color: "#111827", marginBottom: "15px"}}>Kreator yang Sudah Pakai & Suka Hasilnya 🔥</h3>
             <div style={{marginBottom: "15px", fontSize: "1.05rem", lineHeight: 1.6}}>
               "Biasanya brief ke designer 3 hari kelar, sekarang sore racik design — malamnya udah jalanin Meta Ads. Game changer buat tim kecil."
               <br/><br/><strong style={{color: "var(--red)"}}>- Rendra A. (OWNER BRAND SKINCARE)</strong>
             </div>
             <hr style={{margin: "15px 0", borderColor: "#ddd"}}/>
             <div style={{fontSize: "1.05rem", lineHeight: 1.6, marginTop: "15px"}}>
               "Buat 30 variant creative test pagi, malamnya udah ada winning ads. ROAS naik 1.8x dalam dua minggu. Tools paling worth it yang pernah gue beli."
               <br/><br/><strong style={{color: "var(--red)"}}>- Bagas D. (PERFORMANCE MARKETER)</strong>
             </div>
          </div>
        </div>

        {/* SECTION 5: PRICING */}
        <h2 style={{textAlign: "center", fontSize: "1.5rem", color: "#d97706", marginBottom: "30px", fontWeight: 800}}>KABAR BAIK! Akses Khusus Early Access Hari Ini...</h2>

        <div className="stack-box">
          <ul className="vstack" style={{background: "#fff"}}>
             <li>
               <span className="name">✅ Akses Lifetime Super AI Feed 1.2</span>
               <span className="price" style={{color: "var(--red)", fontWeight: "bold"}}>Rp 700.000</span>
             </li>
             <li>
               <span className="name">✅ Bebas Render Desain Unlimited</span>
               <span className="price" style={{color: "var(--red)", fontWeight: "bold"}}>Rp 250.000 / bln</span>
             </li>
             <li>
               <span className="name">✅ Akses 10 Mode Kreatif + 48 Kategori</span>
               <span className="price" style={{color: "var(--red)", fontWeight: "bold"}}>Rp 150.000</span>
             </li>
             <li>
               <span className="name">✅ Free Update Selamanya</span>
               <span className="price" style={{color: "var(--red)", fontWeight: "bold"}}>Tak Ternilai</span>
             </li>
             <li className="total" style={{background: "#1f2937"}}>
               <span className="name" style={{color: "#ffffff", fontWeight: "bold"}}>🏆 TOTAL VALUE</span>
               <span className="price" style={{color: "#fbbf24", fontWeight: "bold", fontSize: "1.1rem"}}>Rp 1.100.000+</span>
             </li>
          </ul>

          <div className="price-box">
             <p className="lbl">Total Value yang Kamu Dapatkan</p>
             <p style={{fontSize: '1rem', color: '#666', marginBottom: '14px'}}>Senilai <strong>Rp 1.100.000+</strong></p>
             <p style={{fontSize: '1rem', fontWeight: 700, marginBottom: '8px'}}>Khusus Batch 1 Early Access Hari Ini:</p>
             <del style={{fontSize: '1.15rem', color: '#bbb'}}>Rp 700.000</del>
             <div className="actual">Rp 49.000</div>
             <p style={{color: 'var(--red)', fontWeight: 800, fontSize: '0.93rem', marginTop: '8px'}}>🔥 Diskon Early Access BERLAKU HARI INI!</p>
          </div>

          <CountdownTimer />

          <a href={CHECKOUT_URL} className="cta-btn" style={{marginTop: "20px"}}>👉 Ya, Saya Mau Ambil Early Access Rp 49.000</a>
        </div>

        {/* SECTION 6: HANDLING OBJECTION */}
        <div style={{background: "#f9fafb", padding: "40px 20px", textAlign: "center", borderRadius: "12px", marginTop: "50px", border: "1px solid #e5e7eb"}}>
          <h3 style={{fontSize: "1.5rem", marginBottom: "20px", fontWeight: "bold"}}>Bayangkan...</h3>
          <p style={{fontSize: "1.1rem", marginBottom: "15px"}}>Kita selalu percaya bahwa <strong style={{color: "var(--red)"}}>waktu adalah uang</strong>, betul? Berapa banyak klien dan omset yang melayang karena kamu lambat produksi konten promosi?</p>
          <p style={{fontSize: "1.1rem", marginBottom: "15px"}}>Dengan Super AI Feed 1.2, kamu bisa hemat budget bayar desainer, dan bisa test lebih banyak winning ads setiap harinya.</p>
          <p style={{fontSize: "1.15rem", marginBottom: "25px"}}>Investasi sebesar <strong>Rp 49.000</strong> akan sangat <u style={{fontWeight: "bold"}}>menguntungkan</u> dan segera balik modal hanya dengan 1 desain winning ads.</p>
          <p style={{fontSize: "1.15rem", fontWeight: 700, marginBottom: "20px", color: "#dc2626"}}>Jangan biarkan harga normal Rp700.000 kembali setelah kuota Batch 1 habis.</p>
          
          <a href={CHECKOUT_URL} className="cta-btn" style={{marginTop: "20px"}}>👉 Amankan Harga Rp 49.000 Sekarang</a>
        </div>

        {/* SECTION 7: FAQ */}
        <div className="faq-container">
          <h2 className="faq-title">Pertanyaan yang Sering Diajukan (FAQ)</h2>
          <div className="faq-item">
            <h4>🤔 Apa bedanya Super AI Feed 1.2 dengan Canva?</h4>
            <p>Canva adalah editor—kamu harus tahu dasar desain. Super AI Feed adalah studio otomatis—kamu cukup isi form (brief), hasilnya langsung jadi tanpa perlu edit manual sama sekali.</p>
          </div>
          <div className="faq-item">
            <h4>🤔 Apakah ada biaya bulanan?</h4>
            <p>Tidak! Selama penawaran Early Access ini, kamu cukup bayar sekali Rp 49.000 untuk akses seumur hidup tanpa biaya tersembunyi.</p>
          </div>
          <div className="faq-item">
            <h4>🤔 Format apa saja yang bisa dihasilkan?</h4>
            <p>Berbagai format siap pakai: Feed 1:1, Story/Reels 9:16, Thumbnail 16:9, dan Ads 4:5.</p>
          </div>
          <div className="faq-item">
            <h4>🤔 Apakah hasilnya bisa di-custom sesuai brand kita?</h4>
            <p>Sangat bisa. Kamu bisa kunci warna (brand-locked), gaya komunikasi, dan persona produk, jadi seluruh desain yang di-generate akan tetap konsisten dengan identitas brand kamu.</p>
          </div>
        </div>

        <div style={{textAlign: "center", marginTop: "40px", marginBottom: "60px"}}>
          <a href={CHECKOUT_URL} className="cta-btn">👉 Beli Super AI Feed 1.2 Sekarang</a>
        </div>
      </div>
    </div>
  );
}
