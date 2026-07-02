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
  'hero.eyebrow':    { tr:'Hibrit, Uzaktan veya Relokasyon', en:'Open to Hybrid, Remote or Relocation' },
  'hero.title':      { tr:'Elektrik-Elektronik Mühendisi', en:'Electrical & Electronics Engineer' },
  'hero.subtitle':   { tr:'Linux, BSP/kernel ve C/Python sistemleri üzerine gelişim', en:'Development on Linux, BSP/kernel and C/Python systems' },
  'hero.lead':       { tr:'Savunma sanayi ve ağ teknolojileri sektörlerinde donanım-yazılım çözümleri üreten bir Elektrik-Elektronik mühendisiyim. Gömülü sistemlerden yazılım otomasyonlarına kadar farklı teknolojileri hızla öğrenip uygulamayı seviyor; süreçlerimi hızlandırmak için yapay zeka araçlarını iş akışlarıma aktif olarak entegre ediyorum.',
                       en:'An Electrical & Electronics engineer delivering hardware-software solutions in the defense and networking sectors. I enjoy rapidly learning and applying diverse technologies—from embedded systems to software automation—and I actively integrate AI tools to optimize my development workflows.' },
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
  'ats.cat2v':       { tr:'Git, GitHub, GDB, Make, CMake, VS Code', en:'Git, GitHub, GDB, Make, CMake, VS Code' },
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
  'impact3.value':   { tr:'1 yıl',            en:'1 year' },
  'impact3.label':   { tr:'Savunma sanayi deneyimi', en:'Defense industry experience' },
  'impact4.value':   { tr:'3+',               en:'3+' },
  'impact4.label':   { tr:'STM32 driver projesi', en:'STM32 driver projects' },
  'impact5.value':   { tr:'16',               en:'16' },
  'impact5.label':   { tr:'teknik sertifika', en:'technical certificates' },
  'impact6.value':   { tr:'B2',               en:'B2' },
  'impact6.label':   { tr:'İngilizce — Upper Intermediate', en:'English — Upper Intermediate' },

  /* ── experience ── */
  'exp.kicker':      { tr:'DENEYİM',             en:'EXPERIENCE'              },
  'exp.heading':     { tr:'Profesyonel Deneyim', en:'Professional Experience' },

  'exp0.date':       { tr:'Haziran 2025 – Devam Ediyor', en:'June 2025 – Present' },
  'exp0.role':       { tr:'Software Engineer',   en:'Software Engineer'       },
  'exp0.desc':       { tr:'AT&T için geliştirilen ağ extender cihazlarının BSP ve Linux çekirdeği katmanlarında hata tespiti ve giderme çalışmaları yürütmekteyim. C, Python ve Bash kullanarak test süreçlerini otomatize eden yazılımlar tasarlıyor, sahada görülen çökmelerin tespiti için scriptler yazıyorum.',
                       en:'I conduct debugging and root-cause analysis on BSP and Linux kernel layers for network extenders developed for AT&T. I use C, Python, and Bash to reproduce field crashes and design automation software for testing processes.' },
  'exp0.learn':      { tr:'Öğrenim odağı:', en:'Learning focus:' },
  'exp0.learnv':     { tr:'Wi‑Fi teknolojileri, ağ teknolojileri, wireless product workflow, embedded Linux tabanlı ürün geliştirme', en:'Wi‑Fi technologies, networking technologies, wireless product workflow, embedded Linux-based product development' },

  'exp1.date':       { tr:'Temmuz 2023 – Haziran 2024',          en:'July 2023 – June 2024' },
  'exp1.role':       { tr:'Gömülü Yazılım Geliştiricisi', en:'Embedded Software Developer' },
  'exp1.desc':       { tr:'TÜBİTAK SAGE bünyesinde uzun dönem stajyer ve STAR bursiyeri olarak görev aldım. VxWorks RTOS ve FreeBSD kullanarak C ile Linux üzerinde BSP sürücü geliştirme ve çekirdek hata ayıklama çalışmaları yürüttüm. Gömülü sistemler için C++ tabanlı GUI uygulamaları geliştirerek %25 zaman tasarrufu ve %10 performans artışı sağladım.',
                       en:'Worked as a long-term intern and STAR scholar at TÜBİTAK SAGE. Developed BSP drivers and conducted kernel debugging on Linux, FreeBSD, and VxWorks RTOS using C. Created C++ based GUI applications for embedded systems, achieving 25% time savings and a 10% performance boost.' },

  /* ── education ── */
  'edu.kicker':      { tr:'EĞİTİM',                en:'EDUCATION'             },
  'edu.name':        { tr:'Atılım Üniversitesi',   en:'Atılım University'     },
  'edu.heading':     { tr:'Akademik Geçmiş',        en:'Academic Background'  },
  'edu1.dept':       { tr:'Elektrik-Elektronik Mühendisliği (Lisans)', en:'Electrical-Electronics Engineering (B.Sc.)' },
  'edu1.desc':       { tr:'<strong>GNO:</strong> 3.37 / 4.00 (Tam Burslu) <br> Gömülü sistemler ağırlıklı müfredat. TEKNOFEST Efficiency Challenge finalisti ve 2 Lisans Araştırma Projesi.',
                       en:'<strong>GPA:</strong> 3.37 / 4.00 (Full Scholarship) <br> Curriculum focused on embedded systems. TEKNOFEST Efficiency Challenge finalist and 2 Undergraduate Research Projects.' },

  /* ── certificates preview ── */
  'prevcerts.kicker':  { tr:'SERTİFİKALAR',         en:'CERTIFICATES' },
  'prevcerts.heading': { tr:'Öne çıkan sertifikalar', en:'Featured certificates' },
  'prevcerts.viewall': { tr:'Tümünü Görüntüle (16)', en:'View All (16)' },

  /* ── projects ── */
  'proj.kicker':     { tr:'SEÇME PROJELER', en:'SELECTED PROJECTS' },
  'proj.heading':    { tr:'Mühendislik projeleri', en:'Engineering projects' },
  'proj.sub':        { tr:'Projelerin kaynak kodlarını bağlantıya tıklayarak inceleyebilirsiniz.', en:'Click the link to view the source code of each project.' },
  'proj.view':       { tr:'Kaynak Kodu İncele', en:'View Source Code' },

  'proj1.title':     { tr:'AirTest', en:'AirTest' },
  'proj1.problem':   { tr:'Ağ extender cihazlarında sahadaki hataların analizi ve otomasyonu.', en:'Analysis and automation of field errors in network extender devices.' },
  'proj1.solution':  { tr:'Hataları tekrarlamak ve senaryo testleri yürütmek için geliştirilen Python tabanlı otomasyon yazılımı.', en:'Python-based test automation software developed to reproduce errors and run scenario tests.' },
  'proj2.title':     { tr:'STM32 HAL Sensör Sürücüleri', en:'STM32 HAL Sensor Drivers' },
  'proj2.problem':   { tr:'IMU, Basınç ve Ortam Işığı sensörlerinin modüler biçimde okunması.', en:'Modular reading of IMU, Pressure, and Ambient Light sensors.' },
  'proj2.solution':  { tr:'I2C/SPI üzerinden başlatma, veri okuma ve kalibrasyon yapan C tabanlı sürücü kütüphaneleri.', en:'C-based driver libraries performing initialization, data reading, and calibration over I2C/SPI.' },
  'proj3.title':     { tr:'LabView Sensör Uygulaması', en:'LabView Sensor App' },
  'proj3.problem':   { tr:'Sensör verilerinin gerçek zamanlı işlenmesi ve raporlanması.', en:'Real-time processing and reporting of sensor data.' },
  'proj3.solution':  { tr:'HC-SR04 verilerini görselleştirip Excel\'e aktaran arayüz uygulaması.', en:'Interface app that visualizes HC-SR04 data and exports it to Excel.' },
  'proj4.title':     { tr:'OpenCV Çalışmaları', en:'OpenCV Works' },
  'proj4.problem':   { tr:'Görüntü işleme ve analiz süreçlerinde pratik.', en:'Practice in image processing and analysis workflows.' },
  'proj4.solution':  { tr:'Python ve OpenCV kütüphanesi ile geliştirilmiş görüntü işleme projeleri.', en:'Image processing projects developed with Python and OpenCV library.' },

  /* ── contact ── */
  'contact.kicker':  { tr:'İLETİŞİM', en:'CONTACT' },
  'contact.heading': { tr:'Yeni kariyer fırsatlarına ve heyecan verici projelere açığım.', en:'I am open to new career opportunities and exciting projects.' },
  'contact.sub':     { tr:'Mühendislik odaklı tam zamanlı iş teklifleri, yazılım/donanım rolleri veya profesyonel bağlantılar için bana e-posta veya LinkedIn üzerinden ulaşabilirsiniz.',
                       en:'You can contact me via email or LinkedIn for engineering-focused full-time job offers, software/hardware roles, or professional networking.' },
  'btn.certs':       { tr:'Sertifikalar',   en:'Certificates'    },
  'btn.schedule':    { tr:'Görüşme Planla', en:'Schedule a Call' },
  
  /* ── project metadata tags ── */
  'proj.meta1':      { tr:'TEST OTOMASYONU', en:'TEST AUTOMATION' },
  'proj.meta2':      { tr:'DRIVER GELİŞTİRME', en:'DRIVER DEVELOPMENT' },
  'proj.meta3':      { tr:'VERİ TOPLAMA', en:'DATA ACQUISITION' },
  'proj.meta4':      { tr:'GÖRÜNTÜ İŞLEME', en:'COMPUTER VISION' },

  /* ── project labels ── */
  'proj.problemLabel': { tr:'Problem:', en:'Problem:' },
  'proj.solutionLabel': { tr:'Çözüm:', en:'Solution:' },
  'proj.private':      { tr:'Kurum İçi Proje', en:'Internal Project' },

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
      el.innerHTML = dict[key][lang];
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
