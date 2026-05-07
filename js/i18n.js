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
  'nav.ats':         { tr:'Teknik Özet',  en:'Tech Summary' },
  'nav.projects':    { tr:'Projeler',     en:'Projects'     },
  'nav.certs':       { tr:'Sertifikalar', en:'Certificates' },
  'nav.contact':     { tr:'İletişim',     en:'Contact'      },

  /* ── hero ── */
  'hero.eyebrow':    { tr:'Ankara • İzmir', en:'Ankara • İzmir' },
  'hero.title':      { tr:'Embedded Software Engineer', en:'Embedded Software Engineer' },
  'hero.subtitle':   { tr:'Linux, BSP/kernel ve C/Python sistemleri üzerine gelişim', en:'Development on Linux, BSP/kernel and C/Python systems' },
  'hero.lead':       { tr:'TÜBİTAK SAGE savunma sanayi deneyimi ve Airties\'te güncel software engineering rolü ile embedded Linux, BSP/kernel ve wireless teknolojiler alanında gelişen bir mühendis.',
                       en:'An engineer growing in embedded Linux, BSP/kernel and wireless technologies, with TÜBİTAK SAGE defense industry experience and a current software engineering role at Airties.' },
  'hero.keywords':   { tr:'Embedded C • Linux • BSP • Kernel • Wireless • Python • Scripting • AI', en:'Embedded C • Linux • BSP • Kernel • Wireless • Python • Scripting • AI' },

  /* ── buttons ── */
  'btn.github':      { tr:'GitHub',        en:'GitHub'       },
  'btn.linkedin':    { tr:'LinkedIn',      en:'LinkedIn'     },
  'btn.mail':        { tr:'E-posta',       en:'Email'        },

  /* ── ATS keyword summary ── */
  'ats.kicker':      { tr:'TEKNİK ÖZET',         en:'TECHNICAL SUMMARY' },
  'ats.heading':     { tr:'Teknoloji Altyapısı',  en:'Technology Stack' },
  'ats.cat1':        { tr:'Diller',               en:'Languages' },
  'ats.cat1v':       { tr:'C, C++, Python, Bash', en:'C, C++, Python, Bash' },
  'ats.cat2':        { tr:'Geliştirici Araçları', en:'Developer Tools' },
  'ats.cat2v':       { tr:'Git, GitHub, GDB, Make, CMake, VS Code, ', en:'Git, GitHub, GDB, Make, CMake, VS Code' },
  'ats.cat3':        { tr:'Teknolojiler',         en:'Technologies' },
  'ats.cat3v':       { tr:'Embedded Linux, BSP, Linux Kernel, UART/RS232, I2C, SPI, STM32', en:'Embedded Linux, BSP, Linux Kernel, UART/RS232, I2C, SPI, STM32' },
  'ats.cat4':        { tr:'Alanlar',              en:'Domains' },
  'ats.cat4v':       { tr:'Embedded Systems, Wireless Networking, Defense Industry, Kernel/Userspace/DHD Crash Analysis, AI-Assisted Development', en:'Embedded Systems, Wireless Networking, Defense Industry, Kernel/Userspace/DHD Crash Analysis, AI-Assisted Development' },

  /* ── impact metrics ── */
  'impact.kicker':   { tr:'ETKİ METRİKLERİ', en:'IMPACT METRICS' },
  'impact.heading':  { tr:'Rakamlarla özet',  en:'At a glance' },
  'impact1.value':   { tr:'Airties',          en:'Airties' },
  'impact1.label':   { tr:'Software Engineer — aktif rol', en:'Software Engineer — active role' },
  'impact2.value':   { tr:'~%15',             en:'~15%' },
  'impact2.label':   { tr:'AI destekli geliştirme/test verimliliği', en:'AI-assisted dev/test workflow gain' },
  'impact3.value':   { tr:'12 ay',            en:'12 months' },
  'impact3.label':   { tr:'TÜBİTAK SAGE gömülü sistem deneyimi', en:'TÜBİTAK SAGE embedded systems experience' },
  'impact4.value':   { tr:'3+',               en:'3+' },
  'impact4.label':   { tr:'STM32 gömülü sürücü projesi', en:'STM32 embedded driver projects' },
  'impact5.value':   { tr:'16',               en:'16' },
  'impact5.label':   { tr:'teknik sertifika', en:'technical certificates' },
  'impact6.value':   { tr:'B2',               en:'B2' },
  'impact6.label':   { tr:'İngilizce — Upper Intermediate', en:'English — Upper Intermediate' },

  /* ── experience ── */
  'exp.kicker':      { tr:'DENEYİM',             en:'EXPERIENCE'              },
  'exp.heading':     { tr:'Profesyonel Deneyim', en:'Professional Experience' },

  'exp0.date':       { tr:'Haziran 2025 – Devam Ediyor', en:'June 2025 – Present' },
  'exp0.role':       { tr:'Software Engineer',   en:'Software Engineer'       },
  'exp0.desc':       { tr:'Airties\'te AI araçlarını kod yazma, analiz, debug ve script/test akışlarını, objdump ile hata analizini hızlandırmak için kullanarak geliştirme sürecine yaklaşık %15 verimlilik katkısı sağladım; aynı süreçte Wi‑Fi ve ağ teknolojileri odağımı derinleştiriyorum.',
                       en:'At Airties, I use AI tools to accelerate coding, analysis, debugging, and script/test workflows, error analysis with objdump, contributing approximately 15% efficiency gain to the development process; while deepening my focus on Wi‑Fi and networking technologies.' },
  'exp0.learn':      { tr:'Öğrenim odağı:', en:'Learning focus:' },
  'exp0.learnv':     { tr:'Wi‑Fi teknolojileri, ağ teknolojileri, wireless product workflow, embedded Linux tabanlı ürün geliştirme', en:'Wi‑Fi technologies, networking technologies, wireless product workflow, embedded Linux-based product development' },

  'exp1.date':       { tr:'2023 – 2024',          en:'2023 – 2024' },
  'exp1.role':       { tr:'Uzun Dönem Stajyer — Gömülü Sistemler', en:'Long-Term Intern — Embedded Systems' },
  'exp1.desc':       { tr:'Savunma sanayi projelerinde BSP driver ve kernel debug, C/Linux tabanlı geliştirme, embedded interfaces (UART/RS232).',
                       en:'BSP driver and kernel debugging, C/Linux-based development, embedded interfaces (UART/RS232) work on defense industry projects.' },

  /* ── education ── */
  'edu.kicker':      { tr:'EĞİTİM',                en:'EDUCATION'             },
  'edu.name':        { tr:'Atılım Üniversitesi',   en:'Atılım University'     },
  'edu.heading':     { tr:'Akademik Geçmiş',        en:'Academic Background'  },
  'edu1.dept':       { tr:'Elektrik-Elektronik Mühendisliği (Lisans)', en:'Electrical-Electronics Engineering (B.Sc.)' },
  'edu1.desc':       { tr:'Gömülü sistemler ağırlıklı müfredat. TEKNOFEST Efficiency Challenge finalisti ve Atılım Araştırma Günleri katılımcısı.',
                       en:'Curriculum focused on embedded systems. TEKNOFEST Efficiency Challenge finalist and Atılım Research Days participant.' },

  /* ── certificates preview ── */
  'prevcerts.kicker':  { tr:'SERTİFİKALAR',         en:'CERTIFICATES' },
  'prevcerts.heading': { tr:'Öne çıkan sertifikalar', en:'Featured certificates' },
  'prevcerts.viewall': { tr:'Tümünü Görüntüle (16)', en:'View All (16)' },

  /* ── projects ── */
  'proj.kicker':     { tr:'SEÇME PROJELER', en:'SELECTED PROJECTS' },
  'proj.heading':    { tr:'Mühendislik projeleri', en:'Engineering projects' },
  'proj.sub':        { tr:'Projelerin kaynak kodlarını bağlantıya tıklayarak inceleyebilirsiniz.', en:'Click the link to view the source code of each project.' },
  'proj.view':       { tr:'Kaynak Kodu İncele', en:'View Source Code' },

  'proj1.title':     { tr:'STM32 MPU6050 Driver', en:'STM32 MPU6050 Driver' },
  'proj1.problem':   { tr:'6 eksenli IMU sensör verisinin güvenilir biçimde okunması.', en:'Reliable reading of 6-axis IMU sensor data.' },
  'proj1.solution':  { tr:'Register seviyesinde I2C iletişimi kuran bare-metal C sürücüsü.', en:'Bare-metal C driver implementing register-level I2C communication.' },
  'proj2.title':     { tr:'STM32 BMP280 Driver', en:'STM32 BMP280 Driver' },
  'proj2.problem':   { tr:'Dijital basınç sensöründen hassas çevresel veri alımı.', en:'Precise environmental data acquisition from a digital pressure sensor.' },
  'proj2.solution':  { tr:'I2C/SPI üzerinden register seviyesinde okuma ve yapılandırma katmanı.', en:'Register-level reading and configuration layer over I2C/SPI.' },
  'proj3.title':     { tr:'STM32 BH1750 Driver', en:'STM32 BH1750 Driver' },
  'proj3.problem':   { tr:'Ortam ışığı sensörü için modüler ve taşınabilir sürücü ihtiyacı.', en:'Need for a modular and portable driver for an ambient light sensor.' },
  'proj3.solution':  { tr:'HAL tabanlı, okunabilir ve farklı platformlara kolayca taşınabilir sürücü.', en:'HAL-based, readable driver easily portable across platforms.' },
  'proj4.title':     { tr:'C Examples', en:'C Examples' },
  'proj4.problem':   { tr:'Temel algoritma ve veri yapılarında C dili pratiğini güçlendirme.', en:'Strengthening C language practice on fundamental algorithms and data structures.' },
  'proj4.solution':  { tr:'Sıralama, arama ve veri yapıları üzerine C dilinde örnek çözümler.', en:'Example solutions in C covering sorting, searching, and data structures.' },

  /* ── contact ── */
  'contact.kicker':  { tr:'İLETİŞİM', en:'CONTACT' },
  'contact.heading': { tr:'Embedded software, BSP, Linux veya wireless odaklı roller için görüşelim.', en:'Let\'s talk about embedded software, BSP, Linux, or wireless-focused roles.' },
  'contact.sub':     { tr:'Software Engineer pozisyonları, Embedded Systems/BSP/kernel geliştirme odaklı işler veya proje görüşmeleri için mail ya da LinkedIn üzerinden iletişime geçebilirsiniz.',
                       en:'For Software Engineer positions, Embedded Systems/BSP/kernel-focused work, or project discussions, you can contact me by email or LinkedIn.' },
  'btn.certs':       { tr:'Sertifikalar',   en:'Certificates'    },
  'btn.schedule':    { tr:'Görüşme Planla', en:'Schedule a Call' },

  /* ── project labels ── */
  'proj.problemLabel': { tr:'Problem:', en:'Problem:' },
  'proj.solutionLabel': { tr:'Çözüm:', en:'Solution:' },

  /* ── certificate preview names ── */
  'prevcert1.name':  { tr:'C Programlama Dili', en:'C Programming Language' },
  'prevcert2.name':  { tr:'C++ Temelleri',      en:'C++ Fundamentals'      },
  'prevcert3.name':  { tr:'Python Programlama', en:'Python Programming'    },
  'prevcert4.name':  { tr:'Git ve GitHub',      en:'Git & GitHub'          },
  'prevcert5.name':  { tr:'MATLAB Onramp',      en:'MATLAB Onramp'         },
  'prevcert6.name':  { tr:'Simulink Onramp',    en:'Simulink Onramp'       },

  /* ── certificates page ── */
  'certs.back':      { tr:'Ana Sayfaya Dön',  en:'Back to Home'        },
  'certs.kicker':    { tr:'SERTİFİKA ARŞİVİ', en:'CERTIFICATE ARCHIVE' },
  'certs.title':     { tr:'Sertifikalar',     en:'Certificates'        },
  'certs.lead':      { tr:'Gömülü yazılım, C/C++, Python, MATLAB/Simulink ve teknik gelişim sürecimi destekleyen eğitim ve katılım belgeleri.',
                       en:'Training and participation certificates supporting my development in embedded software, C/C++, Python, MATLAB/Simulink, and engineering practice.' },
  'certs.verify':    { tr:'Doğrula',              en:'Verify'             },
  'certs.count':     { tr:'toplam sertifika',     en:'total certificates' },
  'certs.orgs':      { tr:'kurum / organizasyon', en:'organizations'      },
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

  /* update CV download link */
  const cvLink = document.getElementById('cv-link');
  if (cvLink) {
    const cvUrls = {
      tr: 'assets/Furkan_Izgi_CV_TR.pdf',
      en: 'assets/Furkan_Izgi_CV_EN.pdf'
    };
    cvLink.href = cvUrls[lang] || cvUrls.tr;
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
