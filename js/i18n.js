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
  'hero.eyebrow':    { tr:'Yeni Fırsatlara Açık', en:'Open to New Opportunities' },
  'hero.title':      { tr:'Gömülü Yazılım Mühendisi / Elektrik-Elektronik Mühendisi', en:'Embedded Software Engineer / Electrical-Electronics Engineer' },
  'hero.subtitle':   { tr:'Linux, BSP/kernel ve C/Python sistemleri üzerine gelişim', en:'Development on Linux, BSP/kernel and C/Python systems' },
  'hero.lead':       { tr:'Airties ve TÜBİTAK SAGE\'de 2+ yıl deneyime sahip Gömülü Yazılım Mühendisi. Gömülü Linux tabanlı Wi-Fi ürünlerinin BSP, Linux kernel, userspace ve DHD katmanlarında crash analizi yapıyor; saha problemlerini çözüyor, patch entegrasyonunu yürütüyor ve Python/Bash tabanlı scriptlerle problemleri tekrar üretiyorum. Kök neden analizi, sürücü incelemesi ve tedarikçi (Broadcom, Capgemini, AT&T) koordinasyonunda deneyimliyim. Yapay zekâ araçlarını geliştirme süreçlerime entegre ederek verimliliğimi %25 artırdım.',
                       en:'Embedded Software Engineer with 2+ years of experience at Airties and TÜBİTAK SAGE. I perform crash analysis across the BSP, Linux kernel, userspace and DHD layers of embedded Linux based Wi-Fi products; I resolve field issues, drive patch integration, and develop Python and Bash based scripts to reproduce problems. Experienced in root cause analysis, driver investigation and vendor coordination (Broadcom, Capgemini, AT&T). By integrating AI tools into my workflows, I increased my productivity by 25%.' },
  'hero.keywords':   { tr:'Embedded C • Embedded Linux • Kernel • BSP • Wi-Fi • DHD • Crash Analysis • Python • Bash • AI', en:'Embedded C • Embedded Linux • Kernel • BSP • Wi-Fi • DHD • Crash Analysis • Python • Bash • AI' },

  /* ── buttons ── */
  'btn.github':      { tr:'GitHub',        en:'GitHub'       },
  'btn.linkedin':    { tr:'LinkedIn',      en:'LinkedIn'     },
  'btn.mail':        { tr:'E-posta',       en:'Email'        },

  /* ── ATS keyword summary ── */
  'ats.kicker':      { tr:'TEKNİK ÖZET',         en:'TECHNICAL SUMMARY' },
  'ats.heading':     { tr:'Teknoloji Altyapısı',  en:'Technology Stack' },
  'ats.cat1':        { tr:'Diller',               en:'Languages' },
  'ats.cat1v':       { tr:'C, Gömülü C, Python, Bash, C++ (Temel), C# (Temel)', en:'C, Embedded C, Python, Bash, C++ (Basic), C# (Basic)' },
  'ats.cat2':        { tr:'Geliştirici Araçları', en:'Developer Tools' },
  'ats.cat2v':       { tr:'Git, Gerrit, Jira, Confluence, GDB, objdump, patch yönetimi, tedarikçi koordinasyonu, Agile, yapay zekâ destekli geliştirme', en:'Git, Gerrit, Jira, Confluence, GDB, objdump, patch management, vendor coordination, Agile, AI-assisted development' },
  'ats.cat3':        { tr:'Teknolojiler',         en:'Technologies' },
  'ats.cat3v':       { tr:'Gömülü Linux, Linux Kernel, BSP, Wi-Fi ve kablosuz ağlar, DHD, Wi-Fi extender teknolojileri, cihaz log analizi', en:'Embedded Linux, Linux Kernel, BSP, Wi-Fi and wireless networks, DHD, Wi-Fi extender technologies, device log analysis' },
  'ats.cat4':        { tr:'Alanlar',              en:'Domains' },
  'ats.cat4v':       { tr:'Embedded Systems, Wireless Networking, Kernel/Userspace/DHD Crash Analysis, Root Cause Analysis, Test Automation, Defense Industry, AI-Assisted Development', en:'Embedded Systems, Wireless Networking, Kernel/Userspace/DHD Crash Analysis, Root Cause Analysis, Test Automation, Defense Industry, AI-Assisted Development' },

  /* ── impact metrics ── */
  'impact.kicker':   { tr:'ETKİ METRİKLERİ', en:'IMPACT METRICS' },
  'impact.heading':  { tr:'Rakamlarla özet',  en:'At a glance' },
  'impact1.value':   { tr:'Airties',          en:'Airties' },
  'impact1.label':   { tr:'Software Engineer — Gömülü Ar-Ge (aktif rol)', en:'Software Engineer — Embedded R&D (active role)' },
  'impact2.value':   { tr:'%50',              en:'50%' },
  'impact2.label':   { tr:'crash analizi ilk inceleme/kök neden süresi azalması', en:'reduction in initial triage / root-cause time' },
  'impact3.value':   { tr:'%25',              en:'25%' },
  'impact3.label':   { tr:'AI destekli geliştirme ve test verimliliği artışı', en:'AI-assisted development & testing productivity gain' },
  'impact4.value':   { tr:'2+ yıl',           en:'2+ years' },
  'impact4.label':   { tr:'toplam gömülü yazılım deneyimi (Airties + TÜBİTAK SAGE)', en:'total embedded software experience (Airties + TÜBİTAK SAGE)' },
  'impact5.value':   { tr:'%100',             en:'100%' },
  'impact5.label':   { tr:'regresyonsuz patch/kararlılık düzeltmesi teslimi', en:'regression-free delivery of stability fixes' },
  'impact6.value':   { tr:'B2',               en:'B2' },
  'impact6.label':   { tr:'İngilizce — Upper Intermediate', en:'English — Upper Intermediate' },

  /* ── experience ── */
  'exp.kicker':      { tr:'DENEYİM',             en:'EXPERIENCE'              },
  'exp.heading':     { tr:'Profesyonel Deneyim', en:'Professional Experience' },

  'exp0.date':       { tr:'Haziran 2025 – Devam Ediyor', en:'June 2025 – Present' },
  'exp0.role':       { tr:'Yazılım Mühendisi — Gömülü Ar-Ge', en:'Software Engineer — Embedded R&D' },
  'exp0.loc':        { tr:'İzmir, Türkiye • Tam zamanlı • Hibrit', en:'İzmir, Türkiye • Full-time • Hybrid' },
  'exp0.b1':         { tr:'Userspace Crash Dump analizini otomatikleştiren bir araç geliştirerek ilk inceleme ve kök neden tespit süresini %50 azalttım.', en:'Developed a tool that automates Userspace Crash Dump analysis, reducing initial triage and root-cause identification time by 50%.' },
  'exp0.b2':         { tr:'Claude gibi yapay zekâ araçlarını kodlama, hata ayıklama, log analizi ve test geliştirme süreçlerinde kullanarak problem çözme ve test verimliliğini %25 artırdım.', en:'Increased problem-solving and testing efficiency by 25% by using AI tools such as Claude for coding, debugging, log analysis and test development.' },
  'exp0.b3':         { tr:'Extender cihazlarının BSP, Linux kernel ve userspace katmanlarındaki saha problemlerinin uçtan uca sahipliğini üstlenerek çözüme ulaştırdım.', en:'Took end-to-end ownership of field issues in the BSP, Linux kernel and userspace layers of extender devices and drove them to resolution.' },
  'exp0.b4':         { tr:'Kernel Crash Dump\'ları objdump ile analiz edip kök nedenleri belirledim; tedarikçi incelemesi ve entegrasyon öncesinde patch geliştirip doğruladım.', en:'Analyzed Kernel Crash Dumps with objdump and traced faults through the codebase to determine root causes; developed and validated patches prior to vendor review and integration.' },
  'exp0.b5':         { tr:'Broadcom, Capgemini ve AT&T ile tedarikçi iletişiminin sahipliğini üstlenerek logları ve test sonuçlarını analiz edip çözüm süreçlerini koordine ettim.', en:'Owned communication with vendors (Broadcom, Capgemini, AT&T) for issues under my responsibility, analyzing logs and test results and coordinating resolution processes.' },
  'exp0.b6':         { tr:'İç ekiplerden ve tedarikçilerden gelen patch\'leri entegre edip doğrulayarak kararlılık düzeltmelerinin %100 regresyonsuz teslimini sağladım.', en:'Integrated and validated patches from internal teams and vendors, ensuring 100% regression-free delivery of stability fixes.' },
  'exp0.b7':         { tr:'Otomatik testler çalıştıran, görsel ve yazılı raporlar üreten Python tabanlı web + CLI uygulaması <strong>AirTest</strong>\'i tasarlayıp geliştirdim.', en:'Designed and developed <strong>AirTest</strong>, a Python-based web + CLI application that runs automated tests and generates visual and written reports.' },
  'exp0.b8':         { tr:'Saha senaryolarını yeniden üreten Python ve Bash scriptleri yazarak tekrarlanabilir doğrulama döngüsünü hızlandırdım.', en:'Wrote Python and Bash scripts that reproduce field scenarios, accelerating the repeatable validation loop.' },

  'exp1.date':       { tr:'Şubat 2024 – Haziran 2024', en:'February 2024 – June 2024' },
  'exp1.role':       { tr:'TÜBİTAK STAR — Gömülü Yazılım Geliştirici', en:'TÜBİTAK STAR — Embedded Software Developer' },
  'exp1.loc':        { tr:'Ankara, Türkiye • Ofiste • Yarı Zamanlı', en:'Ankara, Türkiye • On-site • Part-Time' },
  'exp1.b1':         { tr:'Savunma sanayi donanımları için geliştirilen GUI tabanlı test uygulamalarını WinForms C# ve Visual C++ kullanarak güncelledim.', en:'Updated GUI-based test applications developed for defense industry hardware using WinForms C# and Visual C++.' },
  'exp1.b2':         { tr:'Donanım seviyesindeki test kapsamını ve doğrulama yeteneklerini genişleten ek bir test uygulamasını sıfırdan geliştirdim.', en:'Developed an additional test application from scratch that extended hardware-level test coverage and verification capabilities.' },

  'exp2.date':       { tr:'Temmuz 2023 – Ocak 2024', en:'July 2023 – January 2024' },
  'exp2.role':       { tr:'Gömülü Yazılım Geliştirici', en:'Embedded Software Developer' },
  'exp2.loc':        { tr:'Ankara, Türkiye • Ofiste • Uzun Dönem Stajyer', en:'Ankara, Türkiye • On-site • Long Term Intern' },
  'exp2.b1':         { tr:'Bir NVRAM sürücüsüne breakpoint ve watchpoint ekleyerek FreeBSD ve VxWorks altındaki çalışma akışını analiz edip hata ayıklama çalışmaları yürüttüm.', en:'Added breakpoints and watchpoints to an NVRAM driver to analyze its execution flow under FreeBSD and VxWorks, and carried out debugging work.' },
  'exp2.b2':         { tr:'DMA, bellek işlemleri, cihaz sürücüleri ve düşük seviyeli sistem davranışı konularında uygulamalı deneyim kazandım.', en:'Gained hands-on experience with DMA, memory operations, device drivers and low-level system behavior.' },

  /* ── education ── */
  'edu.kicker':      { tr:'EĞİTİM',                en:'EDUCATION'             },
  'edu.name':        { tr:'Atılım Üniversitesi',   en:'Atılım University'     },
  'edu.heading':     { tr:'Akademik Geçmiş',        en:'Academic Background'  },
  'edu1.dept':       { tr:'Elektrik-Elektronik Mühendisliği (Lisans)', en:'Electrical-Electronics Engineering (B.Sc.)' },
  'edu1.desc':       { tr:'<strong>GNO:</strong> 3.37 / 4.00 (Tam Burslu) <br> Gömülü sistemler ağırlıklı müfredat. TEKNOFEST Efficiency Challenge finalisti (Atev22) ve 2 Lisans Araştırma Projesi.',
                       en:'<strong>GPA:</strong> 3.37 / 4.00 (Full Scholarship) <br> Curriculum focused on embedded systems. TEKNOFEST Efficiency Challenge finalist (Atev22) and 2 Undergraduate Research Projects.' },

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
  'proj1.solution':  { tr:'AT&amp;T için üretilen extender cihazlarda saha koşullarında hataları yeniden üretmek, senaryo tabanlı testler çalıştırmak ve sonuçları görsel/yazılı raporlamak için geliştirilen Python tabanlı web + CLI yazılımı.', en:'Python-based web + CLI software developed to reproduce defects under real field conditions on extender devices for AT&T, run scenario-based tests and report the results in visual and written form.' },
  'proj2.title':     { tr:'STM32 HAL Sensör Sürücüleri', en:'STM32 HAL Sensor Drivers' },
  'proj2.problem':   { tr:'IMU, Basınç ve Ortam Işığı sensörlerinin modüler biçimde okunması.', en:'Modular reading of IMU, Pressure, and Ambient Light sensors.' },
  'proj2.solution':  { tr:'Başlatma, kalibrasyon, veri toplama ve kompanzasyon hesaplamalarını kapsayan modüler I2C/SPI tabanlı C sürücü kütüphaneleri.', en:'Modular I2C/SPI based C driver libraries covering initialization, calibration, data acquisition and compensation calculations.' },
  'proj3.title':     { tr:'LabView Sensör Uygulaması', en:'LabView Sensor App' },
  'proj3.problem':   { tr:'Sensör verilerinin gerçek zamanlı işlenmesi ve raporlanması.', en:'Real-time processing and reporting of sensor data.' },
  'proj3.solution':  { tr:'HC-SR04 ultrasonik sensöründen gelen gerçek zamanlı veriyi işleyen, grafik arayüzde gösteren ve tek tıkla Excel\'e aktaran görsel veri kaydı ve izleme sistemi.', en:'Visual data logging and monitoring system that processes real-time data from an HC-SR04 ultrasonic sensor, displays it on a graphical interface and exports it to Excel with a single click.' },
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
