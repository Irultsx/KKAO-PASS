"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Droplets,
  Leaf,
  LockKeyhole,
  Menu,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sprout,
  Thermometer,
  X,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Thermometer,
    title: "Sensor otomatis",
    description:
      "Pantau profil suhu dan kelembapan fermentasi secara real-time, tanpa catatan manual yang tercecer.",
    detail: "SUHU + KELEMBAPAN",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Paspor terverifikasi",
    description:
      "Hasil uji belah (cut test) dan kadar air tersimpan rapi, terverifikasi, dan terkunci dalam satu paspor.",
    detail: "MUTU TERCATAT",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Jejak limbah sirkular",
    description:
      "Catat perjalanan kulit buah kakao yang diolah kembali menjadi kompos bernilai guna.",
    detail: "LIMBAH JADI MANFAAT",
  },
];

const farmerSteps = [
  {
    number: "01",
    title: "Buat batch",
    description: "Daftarkan hasil panen dan mulai catatan perjalanan kakao.",
    icon: Sprout,
  },
  {
    number: "02",
    title: "Pasang sensor",
    description: "Pantau suhu dan kelembapan selama proses fermentasi.",
    icon: Thermometer,
  },
  {
    number: "03",
    title: "Kunci & cetak QR",
    description: "Simpan data mutu, lalu tempelkan QR pada karung.",
    icon: LockKeyhole,
  },
];

const buyerSteps = [
  {
    number: "01",
    title: "Pindai QR karung",
    description: "Gunakan kamera ponsel untuk membuka paspor digital.",
    icon: ScanLine,
  },
  {
    number: "02",
    title: "Lihat riwayat mutu",
    description: "Periksa hasil uji belah dan kadar air batch.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Telusuri profil suhu",
    description: "Kenali proses fermentasi dan asal kakao dengan jelas.",
    icon: Thermometer,
  },
];

function Brand() {
  return (
    <a className="brand" href="#beranda" aria-label="KakaoPass, beranda">
      <span className="brand-mark">
        <QrCode size={22} strokeWidth={2.1} />
      </span>
      <span className="brand-name">
        kakao<span>pass</span>
        <small>INDONESIA</small>
      </span>
    </a>
  );
}

function DemoQr() {
  return (
    <div className="qr-art" aria-label="Ilustrasi kode QR demo">
      <span className="qr-corner qr-corner-tl" />
      <span className="qr-corner qr-corner-tr" />
      <span className="qr-corner qr-corner-bl" />
      <span className="qr-dots" />
      <span className="qr-center">
        <Leaf size={19} fill="currentColor" />
      </span>
    </div>
  );
}

export default function Home() {
  const [activeFlow, setActiveFlow] = useState<"petani" | "pembeli">("petani");
  const [menuOpen, setMenuOpen] = useState(false);
  const steps = activeFlow === "petani" ? farmerSteps : buyerSteps;

  return (
    <main id="beranda">
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <button
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
            <a href="#solusi" onClick={() => setMenuOpen(false)}>
              Solusi
            </a>
            <a href="#cara-kerja" onClick={() => setMenuOpen(false)}>
              Cara kerja
            </a>
            <a href="#paspor" onClick={() => setMenuOpen(false)}>
              Paspor digital
            </a>
          </nav>
          <a className="nav-cta" href="#paspor">
            Lihat demo <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              DARI KEBUN, TERHUBUNG KE DUNIA
            </div>
            <h1 id="hero-title">
              Paspor Digital
              <br />
              Kakao <span>Indonesia.</span>
            </h1>
            <p className="hero-description">
              Buktikan mutu fermentasi dan jejak sirkular kakao dalam satu scan
              QR.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#paspor">
                <QrCode size={18} />
                Pindai Demo QR
              </a>
              <a className="button button-outline" href="#cara-kerja">
                Masuk ke Platform <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-proof">
              <span>
                <CheckCircle2 size={16} /> Data transparan
              </span>
              <span>
                <CheckCircle2 size={16} /> Mudah dipindai
              </span>
              <span>
                <CheckCircle2 size={16} /> Berdayakan petani
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Contoh paspor digital kakao">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="floating-note note-top">
              <span className="note-icon note-green">
                <Check size={15} />
              </span>
              <span>
                <strong>Data terverifikasi</strong>
                <small>Siap dibagikan</small>
              </span>
            </div>
            <div className="passport-card">
              <div className="passport-topline">
                <div className="passport-brand">
                  <span className="mini-mark">
                    <Leaf size={14} />
                  </span>
                  KAKAOPASS
                </div>
                <span className="verified-pill">
                  <span /> TERVERIFIKASI
                </span>
              </div>
              <div className="passport-cover">
                <div className="cover-leaves">
                  <span className="leaf-shape leaf-a" />
                  <span className="leaf-shape leaf-b" />
                  <span className="leaf-shape leaf-c" />
                  <span className="cocoa-pod" />
                </div>
                <span className="cover-label">PASPOR PRODUK DIGITAL</span>
                <strong>Asal yang baik,<br />mutu yang terbukti.</strong>
              </div>
              <div className="passport-content">
                <div className="passport-heading">
                  <div>
                    <small>BATCH KAKAO</small>
                    <strong>Karangan — 024</strong>
                  </div>
                  <span className="passport-qr">
                    <DemoQr />
                  </span>
                </div>
                <div className="passport-stats">
                  <div>
                    <Thermometer size={15} />
                    <span>SUHU PUNCAK</span>
                    <strong>49.4°C</strong>
                  </div>
                  <div>
                    <Droplets size={15} />
                    <span>KELEMBAPAN</span>
                    <strong>7.2%</strong>
                  </div>
                </div>
                <div className="passport-progress">
                  <span>PROSES FERMENTASI</span>
                  <div><i /></div>
                  <small>120 jam · selesai</small>
                </div>
              </div>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-icon note-gold">
                <Leaf size={15} />
              </span>
              <span>
                <strong>Jejak sirkular</strong>
                <small>Kulit buah → kompos</small>
              </span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#solusi">
          <span>JELAJAHI SOLUSI</span>
          <ArrowDown size={15} />
        </a>
      </section>

      <section className="solutions-section section-pad" id="solusi">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="section-kicker">SATU PASPOR, DAMPAK LEBIH LUAS</p>
              <h2>Mutu yang tercatat.<br /><span>Asal yang dipercaya.</span></h2>
            </div>
            <p className="section-intro">
              Teknologi sederhana untuk membuka cerita di balik setiap batch
              kakao—dari proses fermentasi hingga manfaat bagi lingkungan.
            </p>
          </div>
          <div className="solution-grid">
            {solutions.map(({ number, icon: Icon, title, description, detail }) => (
              <article className="solution-card" key={number}>
                <div className="solution-card-top">
                  <span className="solution-icon"><Icon size={22} strokeWidth={1.8} /></span>
                  <span className="solution-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="solution-detail">{detail}<ArrowRight size={14} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section section-pad" id="cara-kerja">
        <div className="section-wrap">
          <div className="workflow-heading">
            <p className="section-kicker">DARI PANEN KE PEMBELI</p>
            <h2>Alur sederhana,<br /><span>percaya lebih mudah.</span></h2>
            <p>Pilih peran untuk melihat bagaimana KakaoPass bekerja.</p>
            <div className="flow-switch" role="tablist" aria-label="Pilih alur">
              <button
                aria-selected={activeFlow === "petani"}
                className={activeFlow === "petani" ? "flow-tab active" : "flow-tab"}
                onClick={() => setActiveFlow("petani")}
                role="tab"
                type="button"
              >
                <Sprout size={16} /> Untuk petani
              </button>
              <button
                aria-selected={activeFlow === "pembeli"}
                className={activeFlow === "pembeli" ? "flow-tab active" : "flow-tab"}
                onClick={() => setActiveFlow("pembeli")}
                role="tab"
                type="button"
              >
                <ScanLine size={16} /> Untuk pembeli
              </button>
            </div>
          </div>
          <div className="steps-grid" role="tabpanel">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <article className="step-card" key={`${activeFlow}-${number}`}>
                <div className="step-top">
                  <span className="step-icon"><Icon size={20} /></span>
                  <span className="step-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="step-arrow" size={18} />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="passport-section section-pad" id="paspor">
        <div className="section-wrap passport-wrap">
          <div className="passport-copy">
            <p className="section-kicker">SATU SCAN, SEMUA CERITA</p>
            <h2>Kenali kakao<br />sebelum <span>mencicipi.</span></h2>
            <p>
              Inilah yang dilihat pembeli saat memindai QR pada karung. Riwayat
              fermentasi, hasil uji mutu, dan asal batch tersaji dalam satu
              halaman publik.
            </p>
            <ul className="passport-checks">
              <li><CheckCircle2 size={17} /> Profil suhu dan kelembapan</li>
              <li><CheckCircle2 size={17} /> Hasil cut test dan kadar air</li>
              <li><CheckCircle2 size={17} /> Catatan perjalanan batch</li>
            </ul>
            <a className="text-link" href="#contoh-paspor">
              Jelajahi contoh paspor <ArrowRight size={17} />
            </a>
          </div>
          <div className="public-passport" id="contoh-paspor">
            <div className="public-passport-head">
              <div>
                <span className="public-label"><ShieldCheck size={14} /> PASPOR PUBLIK</span>
                <h3>Kakao Fermentasi<br />Kutai Timur</h3>
                <p>Kelompok Tani Karangan · Kalimantan Timur</p>
              </div>
              <DemoQr />
            </div>
            <div className="public-batch">
              <span>ID BATCH</span>
              <strong>KTIM-KRG-2026-B01</strong>
              <span className="batch-status"><Check size={13} /> DATA TERKUNCI</span>
            </div>
            <div className="quality-row">
              <div className="quality-card">
                <span>UJI BELAH</span>
                <strong>94<small>%</small></strong>
                <em>Terfermentasi · Grade A</em>
              </div>
              <div className="quality-card">
                <span>KADAR AIR</span>
                <strong>7.2<small>%</small></strong>
                <em>Sesuai standar mutu</em>
              </div>
            </div>
            <div className="temperature-card">
              <div className="chart-title">
                <span><Thermometer size={15} /> PROFIL SUHU FERMENTASI</span>
                <strong>120 jam</strong>
              </div>
              <div className="chart" aria-label="Grafik suhu fermentasi contoh">
                <span className="chart-y-label y-top">50°</span>
                <span className="chart-y-label y-mid">35°</span>
                <span className="chart-y-label y-bottom">20°</span>
                <svg viewBox="0 0 440 112" preserveAspectRatio="none" role="img" aria-label="Suhu meningkat dan stabil selama fermentasi">
                  <defs>
                    <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#bd6b42" stopOpacity=".24" />
                      <stop offset="100%" stopColor="#bd6b42" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 91 C25 84 38 76 60 73 S96 68 120 57 S154 45 180 40 S216 30 240 26 S280 20 310 22 S351 16 380 19 S416 14 440 12 L440 112 L0 112Z" fill="url(#chart-fill)" />
                  <path d="M0 91 C25 84 38 76 60 73 S96 68 120 57 S154 45 180 40 S216 30 240 26 S280 20 310 22 S351 16 380 19 S416 14 440 12" fill="none" stroke="#b7653e" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  <circle cx="440" cy="12" r="4" fill="#b7653e" />
                </svg>
                <div className="chart-x-labels"><span>0 jam</span><span>40 jam</span><span>80 jam</span><span>120 jam</span></div>
              </div>
            </div>
            <div className="public-footer">
              <span><LockKeyhole size={13} /> Data batch diverifikasi</span>
              <span>kakaopass.id <ArrowUpRight size={12} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section" id="tentang">
        <div className="closing-inner">
          <span className="closing-icon"><Leaf size={24} /></span>
          <p>Setiap kakao punya cerita.</p>
          <h2>Saatnya cerita itu<br />bisa <span>dibuktikan.</span></h2>
          <a className="button button-light" href="#paspor">
            Pindai Demo QR <ArrowRight size={17} />
          </a>
          <span className="closing-decoration" aria-hidden="true">CACAO</span>
        </div>
      </section>

      <footer className="site-footer" id="kontak">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Brand />
            <p>Paspor digital untuk kakao yang tumbuh dengan transparan dan berkelanjutan.</p>
          </div>
          <div className="footer-links">
            <a href="#tentang">Tentang Kami</a>
            <a href="#kontak">Kontak</a>
            <a href="#privasi">Kebijakan Privasi</a>
            <a href="#cara-kerja">Buku Panduan</a>
          </div>
          <span className="footer-note">Dibangun untuk masa depan kakao Indonesia.</span>
        </div>
        <div className="footer-bottom" id="privasi">
          <span>© 2026 KakaoPass Indonesia</span>
          <span>Menjaga mutu. Merawat bumi.</span>
        </div>
      </footer>
    </main>
  );
}
