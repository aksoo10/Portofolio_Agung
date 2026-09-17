/**
 * Certificates Page Interactive Logic — Agung Aksa Portfolio
 * Manages theme synchronization, interactive modal lightbox, filtering, and live search.
 */

// Comprehensive Certificate Registry Data
const certsData = {
  'cert-1': {
    id: 'cert-1',
    title: 'Phishing Foundations',
    subtitle: 'Certificate of Participation',
    category: 'Cyber Security',
    categoryBadgeClass: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
    issuer: 'ANDRITZ AG (Cyber Security Training)',
    date: 'July 31, 2026',
    credentialId: '5bdea9445589ae0465de9546279a8c2c',
    image: 'assets/cert-andritz-phishing.png',
    pdf: 'assets/certificates/andritz-phishing-foundations.pdf',
    downloadName: 'Agung_Aksa_ANDRITZ_Phishing_Foundations.pdf',
    description: 'Official corporate e-learning module completed under ANDRITZ Cyber Security training program. Demonstrates competency in recognizing deceptive email vectors, detecting spear-phishing attempts, inspecting suspicious hyperlinks, social engineering awareness, and following multinational security incident reporting protocols.',
    skills: ['Phishing Attack Defense', 'Email Security Analysis', 'Social Engineering Awareness', 'Corporate Incident Response', 'Information Security Hygiene']
  },
  'cert-2': {
    id: 'cert-2',
    title: 'ANDRITZ Modern Workplace Onboarding',
    subtitle: 'Certificate of Participation',
    category: 'Enterprise Operations',
    categoryBadgeClass: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
    issuer: 'ANDRITZ AG (eLearning Division)',
    date: 'July 31, 2026',
    credentialId: '7d0bfc3756face81dc0066fd6d1d1a29',
    image: 'assets/cert-andritz-onboarding.png',
    pdf: 'assets/certificates/andritz-modern-workplace.pdf',
    downloadName: 'Agung_Aksa_ANDRITZ_Modern_Workplace.pdf',
    description: 'Comprehensive operational onboarding curriculum completed at ANDRITZ. Covers multinational enterprise collaboration methodologies, cloud productivity ecosystems, corporate data protection guidelines, ethical workplace conduct, and modern digital engineering workflows.',
    skills: ['Enterprise Modern Workplace', 'Cloud Collaboration Tools', 'Data Governance & Privacy', 'Industrial Operations', 'Corporate Digital Workflow']
  },
  'cert-3': {
    id: 'cert-3',
    title: '6th CARNAVAL IMWORK 2024: Big Data & Generative Intelligence',
    subtitle: 'Certificate of Appreciation (Participant)',
    category: 'AI & Big Data',
    categoryBadgeClass: 'bg-purple-500/15 text-purple-600 dark:text-purple-400',
    issuer: 'CARNAVAL IMWORK (Supported by Kemendikbudristek, JICA, BRIN & Telkom)',
    date: 'October 15–17, 2024',
    credentialId: 'Chair: Prof. Deris Stiawan, Ph.D. IPU. ASEAN Eng',
    image: 'assets/cert-carnaval-bigdata.jpg',
    pdf: 'assets/certificates/carnaval-imwork-big-data.pdf',
    downloadName: 'Agung_Aksa_CARNAVAL_IMWORK_Big_Data_GenAI.pdf',
    description: 'Awarded Certificate of Appreciation for active participation in the international expert talk symposium "Big Data & Generative Intelligence" at the 6th CARNAVAL IMWORK 2024 held in Palembang. Explores distributed big data processing architectures, real-time analytics pipelines, LLM foundation models, and industrial generative AI adoption.',
    skills: ['Big Data Architecture', 'Generative AI Applications', 'Distributed Computing', 'Scalable Analytics', 'Data Engineering']
  },
  'cert-4': {
    id: 'cert-4',
    title: '6th CARNAVAL IMWORK 2024: Cyber Security',
    subtitle: 'Certificate of Appreciation (Participant)',
    category: 'Cyber Security',
    categoryBadgeClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
    issuer: 'CARNAVAL IMWORK (Supported by Kemendikbudristek, JICA, BRIN & Telkom)',
    date: 'October 15–17, 2024',
    credentialId: 'Chair: Prof. Deris Stiawan, Ph.D. IPU. ASEAN Eng',
    image: 'assets/cert-carnaval-cybersecurity.jpg',
    pdf: 'assets/certificates/carnaval-imwork-cyber-security.pdf',
    downloadName: 'Agung_Aksa_CARNAVAL_IMWORK_Cyber_Security.pdf',
    description: 'Awarded Certificate of Appreciation for participating in the specialized symposium on "Cyber Security" at the 6th CARNAVAL IMWORK 2024. Explores modern adversary threat models, network intrusion detection systems, Zero Trust defense frameworks, secure application architecture, and preventative vulnerability assessments.',
    skills: ['Network Intrusion Detection', 'Threat Modeling', 'Zero Trust Architecture', 'Defensive Security', 'Vulnerability Assessment']
  },
  'cert-5': {
    id: 'cert-5',
    title: 'Government Web Developer Internship (Kerja Praktek)',
    subtitle: 'Certificate of Practical Work Completion',
    category: 'Government & Public Sector',
    categoryBadgeClass: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
    issuer: 'Bappeda Litbang Kota Palembang (Regional Development Agency)',
    date: 'August 04, 2025 (Period: June 02 – August 02, 2025)',
    credentialId: 'No. 423.4 / 14 / Bapplitbang-I / 2025 (Dr. Korlena, ST., MT)',
    image: 'assets/cert-bappeda-litbang.jpg',
    pdf: 'assets/certificates/bappeda-litbang-internship.pdf',
    downloadName: 'Agung_Aksa_Bappeda_Litbang_Internship_Certificate.pdf',
    description: 'Official government certificate attesting the successful completion of the practical engineering internship at Bappeda Litbang Kota Palembang. Developed the OPD Performance Complaint Forum web platform using Laravel, PHP, and MySQL. Conferred with the highest distinction grade of "Sangat Baik" (Excellent Grade).',
    skills: ['PHP & Laravel Ecosystem', 'MySQL Database Engineering', 'Government Information Systems', 'Tailwind CSS UI/UX', 'System Testing & Delivery']
  }
};

const certKeys = Object.keys(certsData);
let currentModalCertId = null;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initFilteringAndSearch();
  initModalListeners();
});

/* ==========================================================================
   1. THEME SYNCHRONIZATION
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const iconSpan = document.querySelector('#themeToggleBtn .theme-icon');
  if (iconSpan) {
    iconSpan.innerHTML = theme === 'light'
      ? `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   2. NAVBAR & MOBILE MENU (Garis 3 Mobile Drawer)
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const navItems = document.querySelectorAll('.nav-link, .mobile-nav-item');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('shadow-md', 'bg-white/90', 'dark:bg-[#0a0d14]/90');
      header.classList.remove('bg-white/70', 'dark:bg-[#0a0d14]/70');
    } else {
      header.classList.remove('shadow-md', 'bg-white/90', 'dark:bg-[#0a0d14]/90');
      header.classList.add('bg-white/70', 'dark:bg-[#0a0d14]/70');
    }
  });

  function openMobileMenu() {
    if (!hamburgerBtn || !navLinks) return;
    hamburgerBtn.classList.add('menu-active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    navLinks.classList.remove('hidden');
    navLinks.classList.add('flex');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeMobileMenu() {
    if (!hamburgerBtn || !navLinks) return;
    hamburgerBtn.classList.remove('menu-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    navLinks.classList.add('hidden');
    navLinks.classList.remove('flex');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = hamburgerBtn.classList.contains('menu-active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeMobileMenu);
    }

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          closeMobileMenu();
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburgerBtn.classList.contains('menu-active')) {
        closeMobileMenu();
      }
    });
  }
}

/* ==========================================================================
   3. FILTERING & LIVE SEARCH (with Mobile 3-Line Filter Toggle)
   ========================================================================== */
function initFilteringAndSearch() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  const searchInput = document.getElementById('certSearchInput');
  const cards = document.querySelectorAll('.cert-card');
  const noResults = document.getElementById('noResultsNotice');
  const mobileToggle = document.getElementById('mobileCertFilterToggle');
  const filterTabs = document.getElementById('filterTabs');
  const chevron = document.getElementById('certFilterChevron');
  const activeLabel = document.getElementById('activeCertFilterLabel');

  let currentCategory = 'all';
  let currentQuery = '';

  const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/25'];
  const inactiveClasses = ['bg-slate-100', 'dark:bg-[#182238]', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-200', 'dark:hover:bg-[#1f2c4a]'];

  // Mobile 3-Line Filter Toggle (garis 3)
  if (mobileToggle && filterTabs) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = filterTabs.classList.contains('hidden');
      if (isHidden) {
        filterTabs.classList.remove('hidden');
        if (chevron) chevron.classList.add('rotate-180');
        mobileToggle.setAttribute('aria-expanded', 'true');
      } else {
        filterTabs.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', (e) => {
      if (window.innerWidth < 1024 && !mobileToggle.contains(e.target) && !filterTabs.contains(e.target)) {
        filterTabs.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardSearchData = (card.getAttribute('data-search') || '').toLowerCase();
      const cardTitle = (card.querySelector('h3')?.textContent || '').toLowerCase();
      const cardIssuer = (card.querySelector('.cert-issuer-name')?.textContent || '').toLowerCase();

      const matchesCategory = currentCategory === 'all' || cardCategory === currentCategory;
      const matchesSearch = !currentQuery || 
        cardSearchData.includes(currentQuery) || 
        cardTitle.includes(currentQuery) || 
        cardIssuer.includes(currentQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.style.opacity = '1';
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.style.opacity = '0';
      }
    });

    if (noResults) {
      if (visibleCount === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
      }
    }
  }

  // Category buttons click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove(...activeClasses);
        b.classList.add(...inactiveClasses);
      });
      btn.classList.remove(...inactiveClasses);
      btn.classList.add(...activeClasses);

      currentCategory = btn.getAttribute('data-filter');

      // Update mobile label
      if (activeLabel) {
        const labelSpan = btn.querySelector('span');
        const countSpan = btn.querySelector('span:last-child');
        const text = labelSpan ? labelSpan.textContent.trim() : btn.textContent.trim();
        const count = countSpan && countSpan !== labelSpan ? ` (${countSpan.textContent.trim()})` : '';
        activeLabel.textContent = `${text}${count}`;
      }

      // Close mobile dropdown if on mobile
      if (window.innerWidth < 1024 && filterTabs) {
        filterTabs.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      }

      applyFilters();
    });
  });

  // Search input live typing
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  window.resetFilters = () => {
    if (searchInput) searchInput.value = '';
    currentQuery = '';
    currentCategory = 'all';
    filterBtns.forEach((b, idx) => {
      if (idx === 0) {
        b.className = 'cert-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-white shadow-md shadow-indigo-500/25';
      } else {
        b.className = 'cert-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-100 dark:bg-[#182238] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#1f2c4a]';
      }
    });
    applyFilters();
  };
}

/* ==========================================================================
   4. MODAL / LIGHTBOX LOGIC
   ========================================================================== */
function openCertModal(certId) {
  const data = certsData[certId];
  if (!data) return;

  currentModalCertId = certId;

  document.getElementById('modalCertTitle').textContent = data.title;
  document.getElementById('modalCertDate').textContent = data.date;
  document.getElementById('modalCertIssuer').textContent = data.issuer;
  document.getElementById('modalCertId').textContent = data.credentialId;
  document.getElementById('modalCertDescription').textContent = data.description;

  const categoryBadge = document.getElementById('modalCertCategoryBadge');
  categoryBadge.textContent = data.category;
  categoryBadge.className = `px-2 py-0.5 rounded-md text-[11px] font-bold ${data.categoryBadgeClass}`;

  // Image
  const imgEl = document.getElementById('modalCertImage');
  imgEl.src = data.image;
  imgEl.alt = `${data.title} — Official Certificate`;

  // Skills
  const skillsContainer = document.getElementById('modalCertSkills');
  skillsContainer.innerHTML = '';
  data.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100 dark:bg-[#182238] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5';
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });

  // Action links
  const openPdfBtn = document.getElementById('modalCertOpenPdf');
  openPdfBtn.href = data.pdf;

  const downloadPdfBtn = document.getElementById('modalCertDownloadPdf');
  downloadPdfBtn.href = data.pdf;
  downloadPdfBtn.download = data.downloadName;

  // Show modal
  const modal = document.getElementById('certModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  document.body.classList.remove('modal-open');
  currentModalCertId = null;
}

function navigateModal(step) {
  if (!currentModalCertId) return;
  const currentIndex = certKeys.indexOf(currentModalCertId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + step;
  if (newIndex < 0) newIndex = certKeys.length - 1;
  if (newIndex >= certKeys.length) newIndex = 0;

  openCertModal(certKeys[newIndex]);
}

function copyModalCertId() {
  if (!currentModalCertId) return;
  const data = certsData[currentModalCertId];
  if (!data) return;

  navigator.clipboard.writeText(data.credentialId).then(() => {
    showToast('Credential identifier copied to clipboard!');
  }).catch(() => {
    showToast('Copied ID: ' + data.credentialId);
  });
}

function initModalListeners() {
  const modal = document.getElementById('certModal');
  if (!modal) return;

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCertModal();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') {
      closeCertModal();
    } else if (e.key === 'ArrowRight') {
      navigateModal(1);
    } else if (e.key === 'ArrowLeft') {
      navigateModal(-1);
    }
  });
}

/* ==========================================================================
   5. TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-6', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
  }, 3000);
}


