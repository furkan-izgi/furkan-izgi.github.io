/* ───────────────────────────────────────────
   i18n.js  –  lightweight static-site i18n
   Supports: tr, en
   ─────────────────────────────────────────── */

const SUPPORTED = ['tr', 'en'];
const LABELS    = { tr: 'TR', en: 'EN' };
const STORAGE_KEY = 'fi_lang';

const dict = {
  /* ── nav ── */
  'nav.exp':         { tr:'Deneyim',      en:'Experience'   },
  'nav.expertise':   { tr:'Uzmanlık',     en:'Expertise'    },
  'nav.projects':    { tr:'Projeler',     en:'Projects'     },
  'nav.certs':       { tr:'Sertifikalar', en:'Certificates' },
  'nav.contact':     { tr:'İletişim',     en:'Contact'      },

  /* ── hero ── */
  'hero.h1.pre':      { tr:'Embedded Systems &',           en:'A young engineer focused on Embedded Systems &' },
  'hero.h1.highlight':{ tr:'BSP/kernel',                 en:'BSP/kernel' },
  'hero.h1.post':     { tr:' üzerine çalışan bir genç mühendis.', en:'.' },
  'hero.lead':        { tr:'BSP, Linux Kernel geliştirme, kod analizi ve C/Python tabanlı geliştirme üzerine çalışıyorum. AI araçlarını analiz, hata ayıklama ve üretim sürecini hızlandırmak için bilinçli şekilde kullanıyorum.',
                        en:'I work on BSP, Linux Kernel development, code analysis, and C/Python-based development. I use AI tools deliberately to accelerate analysis, debugging, and engineering output.' },

  /* ── buttons ── */
  'btn.github':   { tr:'GitHub',        en:'GitHub'       },
  'btn.linkedin': { tr:'LinkedIn',      en:'LinkedIn'     },
  'btn.contact':  { tr:'İletişime Geç', en:'Get in Touch' },

  /* ── metrics ── */
  'metric.drivers': { tr:'gömülü sürücü projesi', en:'embedded driver projects' },
  'metric.certs':   { tr:'sertifika arşivi',       en:'certificate archive'     },
  'metric.english': { tr:'İngilizce seviyesi',      en:'English level'           },

  /* ── experience ── */
  'exp.kicker':  { tr:'DENEYİM',             en:'EXPERIENCE'              },
  'exp.heading': { tr:'Profesyonel Deneyim', en:'Professional Experience' },
  'exp0.date':   { tr:'Haziran 2025 – Devam Ediyor', en:'June 2025 – Present' },
  'exp0.role':   { tr:'Software Engineer',   en:'Software Engineer'       },
  'exp0.desc':   { tr:'Linux, BSP, Linux Kernel, Wireless Networking, Bash, Wireless Technologies, Python, Embedded Systems ve C alanlarında aktif geliştirme.',
                   en:'Active development with Linux, BSP, Linux Kernel, Wireless Networking, Bash, Wireless Technologies, Python, Embedded Systems, and C.' },
  'exp1.role':   { tr:'Uzun Dönem Stajyer — Gömülü Sistemler', en:'Long-Term Intern — Embedded Systems' },
  'exp1.desc':   { tr:'Savunma sanayi projelerinde gömülü yazılım geliştirme, test ve doğrulama süreçlerinde aktif görev. VxWorks ve Linux tabanlı sistemlerde uygulama geliştirme.',
                   en:'Active role in embedded software development, testing, and verification for defense industry projects. Application development on VxWorks and Linux-based systems.' },

  /* ── education ── */
  'edu.kicker':  { tr:'EĞİTİM',          en:'EDUCATION'           },
  'edu.heading': { tr:'Akademik Geçmiş', en:'Academic Background' },
  'edu1.dept':   { tr:'Elektrik-Elektronik Mühendisliği (Lisans)', en:'Electrical-Electronics Engineering (B.Sc.)' },
  'edu1.desc':   { tr:'Gömülü sistemler ağırlıklı müfredat. TEKNOFEST ve Atılım Araştırma Günleri katılımcısı.',
                   en:'Curriculum focused on embedded systems. Participant in TEKNOFEST and Atılım Research Days.' },

  /* ── languages ── */
  'lang.kicker':  { tr:'DİLLER',            en:'LANGUAGES'            },
  'lang.heading': { tr:'Dil Yetkinlikleri', en:'Language Proficiency' },

  /* ── bento section header ── */
  'bento.section': { tr:'TEKNİK UZMANLIK',   en:'TECHNICAL EXPERTISE'  },
  'bento.heading': { tr:'Yetkinlik Alanları', en:'Areas of Competence' },

  /* ── bento / expertise ── */
  'bento1.kicker': { tr:'02 / EMBEDDED SYSTEMS', en:'02 / EMBEDDED SYSTEMS' },
  'bento1.title':  { tr:'Linux tabanlı gömülü sistem geliştirme.', en:'Linux-based embedded system development.' },
  'bento1.desc':   { tr:'BSP, Linux Kernel, C, Bash ve Python ile sistem seviyesinde geliştirme; donanım-yazılım kesişiminde hata ayıklama ve entegrasyon pratiği.',
                     en:'System-level development with BSP, Linux Kernel, C, Bash, and Python; debugging and integration at the hardware-software boundary.' },

  'bento2.kicker': { tr:'03 / WIRELESS', en:'03 / WIRELESS' },
  'bento2.title':  { tr:'Wireless networking odaklı geliştirme.', en:'Wireless networking-focused development.' },
  'bento2.desc':   { tr:'Linux tabanlı ürünlerde wireless networking, kablosuz teknolojiler ve sistem entegrasyonu akışlarına uyum.',
                     en:'Experience with Linux-based product workflows around wireless networking, wireless technologies, and system integration.' },

  'bento3.kicker': { tr:'04 / TOOLING', en:'04 / TOOLING' },
  'bento3.title':  { tr:'Hata ayıklama ve otomasyon refleksi.', en:'Debugging and automation mindset.' },
  'bento3.desc':   { tr:'Bash, Python, Git ve terminal odaklı iş akışlarıyla tekrar eden problemleri daha hızlı izole etme ve çözme.',
                     en:'Using Bash, Python, Git, and terminal-first workflows to isolate and solve recurring problems faster.' },

  'bento4.kicker': { tr:'01 / YAPAY ZEKA', en:'01 / AI' },
  'bento4.title':  { tr:'AI destekli mühendislik akışı.', en:'AI-assisted engineering workflow.' },
  'bento4.desc':   { tr:'AI araçlarını kod okuma, hata ayıklama, dokümantasyon tarama, hızlı prototipleme ve teknik karar alma süreçlerinde verimli şekilde kullanma.',
                     en:'Using AI effectively for code reading, debugging, documentation review, rapid prototyping, and technical decision-making.' },

  /* ── projects ── */
  'proj.kicker':  { tr:'SEÇME PROJELER', en:'SELECTED PROJECTS' },
  'proj.heading': { tr:'Proje vitrini', en:'Project showcase' },
  'proj.sub':     { tr:'Projelerin kaynak kodlarını bağlantıya tıklayarak inceleyebilirsiniz.', en:'You can check the source code by clicking on the link.' },
  'proj.view':    { tr:'İncele', en:'View' },

  'proj1.title': { tr:'STM32 MPU6050 Driver', en:'STM32 MPU6050 Driver' },
  'proj1.desc':  { tr:'6 eksenli ivmeölçer ve jiroskop sensörü için bare-metal I2C sürücüsü.',
                   en:'Bare-metal I2C driver for 6-axis accelerometer & gyroscope sensor.' },
  'proj2.title': { tr:'STM32 BMP280 Driver', en:'STM32 BMP280 Driver' },
  'proj2.desc':  { tr:'Dijital basınç sensörü için register seviyesinde okuma ve yapılandırma sürücüsü.',
                   en:'Register-level reading and configuration driver for a digital pressure sensor.' },
  'proj3.title': { tr:'STM32 BH1750 Driver', en:'STM32 BH1750 Driver' },
  'proj3.desc':  { tr:'Ortam ışığı sensörü için modüler ve taşınabilir HAL tabanlı sürücü.',
                   en:'Modular and portable HAL-based driver for an ambient light sensor.' },
  'proj4.title': { tr:'C Examples', en:'C Examples' },
  'proj4.desc':  { tr:'Temel algoritma ve veri yapıları üzerine C dilinde pratik örnekler.',
                   en:'Hands-on C examples covering fundamental algorithms and data structures.' },

  /* ── contact ── */
  'contact.kicker':  { tr:'İLETİŞİM', en:'CONTACT' },
  'contact.heading': { tr:'İş teklifleri ve görüşmeler için ulaşabilirsiniz.',
                       en:'Reach out for job offers and interviews.' },
  'contact.sub':     { tr:'Software Engineer pozisyonları, Embedded Systems/BSP/kernel geliştirme odaklı işler veya proje görüşmeleri için mail ya da LinkedIn üzerinden iletişime geçebilirsiniz.',
                       en:'For Software Engineer positions, Embedded Systems/BSP/kernel-focused work, or project discussions, you can contact me by email or LinkedIn.' },
  'btn.certs':  { tr:'Sertifikalar',   en:'Certificates'    },
  'btn.mail':   { tr:'Görüşme Planla', en:'Schedule a Call' },

  /* ── certificates page ── */
  'certs.back':   { tr:'Ana Sayfaya Dön',  en:'Back to Home'        },
  'certs.kicker': { tr:'SERTİFİKA ARŞİVİ', en:'CERTIFICATE ARCHIVE' },
  'certs.title':  { tr:'Sertifikalar',     en:'Certificates'        },
  'certs.lead':   { tr:'Gömülü yazılım, C/C++, Python, MATLAB/Simulink ve teknik gelişim sürecimi destekleyen eğitim ve katılım belgeleri.',
                    en:'Training and participation certificates supporting my development in embedded software, C/C++, Python, MATLAB/Simulink, and engineering practice.' },
  'certs.verify': { tr:'Doğrula',              en:'Verify'             },
  'certs.count':  { tr:'toplam sertifika',     en:'total certificates' },
  'certs.orgs':   { tr:'kurum / organizasyon', en:'organizations'      },
};

/* ── engine ── */
function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || '').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : 'tr';
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] && dict[key][lang]) {
      el.textContent = dict[key][lang];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] && dict[key][lang]) {
      el.setAttribute('placeholder', dict[key][lang]);
    }
  });

  /* update calendar link */
  const calLink = document.getElementById('cal-link');
  if (calLink) {
    const calUrls = {
      tr: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=G%C3%B6r%C3%BC%C5%9Fme&add=frknizgi.work@gmail.com&details=Merhaba%20Furkan%2C%20sizinle%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum.',
      en: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Meeting&add=frknizgi.work@gmail.com&details=Hi%20Furkan%2C%20I%20would%20like%20to%20schedule%20a%20call%20with%20you.'
    };
    calLink.href = calUrls[lang] || calUrls.tr;
  }

  /* mark active pill */
  document.querySelectorAll('.lang-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function mountLangSwitcher() {
  const host = document.getElementById('lang-switcher');
  if (!host) return;
  host.innerHTML = '';
  SUPPORTED.forEach(code => {
    const btn = document.createElement('button');
    btn.className = 'lang-pill';
    btn.dataset.lang = code;
    btn.textContent = LABELS[code];
    btn.setAttribute('aria-label', code.toUpperCase());
    btn.addEventListener('click', () => applyLang(code));
    host.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mountLangSwitcher();
  applyLang(detectLang());
});
