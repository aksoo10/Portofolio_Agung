/**
 * Portfolio Agung Aksa - Interactive Functionality (Tailwind Edition)
 * Full-Stack Web Developer | Laravel & PHP Ecosystem
 */

// Data Detail Proyek untuk Modal Interaktif (STAR Method)
const projectsData = {
  'box-locator': {
    title: 'Website Box Locator',
    company: 'PT Andritz (Internship 2026)',
    category: 'Industrial Web App',
    badge: 'Logistics & Workshop System',
    problem: 'Di area workshop dan gudang industri PT Andritz, proses pencarian dan pelacakan posisi boks perkakas/komponen manufaktur dilakukan secara manual. Hal ini memakan waktu teknisi di lapangan dan memiliki risiko tinggi kesalahan penempatan komponen boks.',
    solution: 'Membangun aplikasi web internal yang memungkinkan teknisi dan tim logistik mencari, memetakan, serta memperbarui lokasi rak boks secara real-time melalui visualisasi denah digital dan fitur pencarian kode cepat.',
    role: 'Solo Web Developer Intern — Merancang arsitektur basis data, mengembangkan logika backend, serta mendesain antarmuka responsif yang mudah digunakan oleh operator lapangan.',
    techStack: ['PHP / Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript ES6', 'Laragon Local Dev'],
    impact: 'Mempercepat efisiensi waktu pencarian komponen industri, meminimalisir human-error dalam penempatan barang, dan meningkatkan akurasi data inventaris workshop PT Andritz.',
    image: 'assets/box-locator.png',
    links: {
      github: '#',
      demo: '#',
      hasRepo: false,
      note: 'Aplikasi internal perusahaan (Private Company System - PT Andritz)'
    }
  },
  'pelepasan-alumni': {
    title: 'Sistem Informasi Pendaftaran Pelepasan Alumni',
    company: 'Fakultas Ilmu Komputer Universitas Sriwijaya (Tugas Akhir)',
    category: 'Full-Stack Web App',
    badge: 'Academic Management System',
    problem: 'Alur pendaftaran yudisium dan pelepasan alumni sebelumnya masih manual dan semi-digital, menyebabkan penumpukan berkas fisik, risiko kehilangan lampiran mahasiswa, verifikasi berbelit-belit, serta menyulitkan pembuatan rekapitulasi data kelulusan oleh bagian akademik fakultas.',
    solution: 'Mengembangkan sistem informasi terintegrasi berbasis Laravel dengan alur lengkap: unggah berkas syarat kelulusan, validasi dokumen bertingkat oleh staf akademik, sistem penolakan berkas dengan catatan revisi, pencetakan bukti registrasi otomatis, dan ekspor data alumni.',
    role: 'Solo Full-Stack Developer — Menganalisis proses bisnis, merancang skema relasi database MySQL, mengimplementasikan autentikasi multi-role (Mahasiswa, Staf Akademik, Admin), serta membangun UI antarmuka Blade & Tailwind yang intuitif.',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'DomPDF'],
    impact: 'Mendigitalisasi 100% proses pendaftaran pelepasan alumni Fasilkom UNSRI, memangkas waktu verifikasi berkas kelulusan, dan mencegah duplikasi data alumni.',
    image: 'assets/pelepasan-alumni.png',
    links: {
      github: 'https://github.com/agungaksa',
      demo: '#',
      hasRepo: true,
      note: 'Tugas Akhir D3 Manajemen Informatika (IPK 3.91/4.00)'
    }
  },
  'forum-pengaduan': {
    title: 'Website Forum Pengaduan Kinerja OPD',
    company: 'Bappeda Litbang Kota Palembang (Internship 2025)',
    category: 'Public Sector / Government',
    badge: 'Complaint & Performance Tracking',
    problem: 'Penyampaian kritik, keluhan, dan evaluasi kinerja antar Organisasi Perangkat Daerah (OPD) di Kota Palembang belum memiliki satu platform terpusat, sehingga tracking disposisi penanganan kendala antar instansi sering lambat dan sulit dipantau progresnya.',
    solution: 'Membangun aplikasi forum pengaduan berbasis web dengan mekanisme tiket digital, fitur upload bukti aduan, status pelacakan berjenjang (Pending, In Progress, Selesai), serta dasbor monitoring komprehensif untuk pengawas di Bappeda Litbang.',
    role: 'Web Developer Intern — Berkolaborasi dengan tim dalam analisis kebutuhan sistem, merancang basis data relasional MySQL, menyusun logika PHP, dan mendesain antarmuka pengguna yang bersih dan responsif menggunakan Tailwind CSS.',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'HTML5 & CSS3'],
    impact: 'Menyediakan kanal digital resmi yang transparan dan terukur bagi seluruh instansi perangkat daerah, serta mempercepat waktu respon penanganan kendala operasional Bappeda Litbang.',
    links: {
      github: 'https://github.com/agungaksa',
      demo: '#',
      hasRepo: true,
      note: 'Proyek Magang / Kerja Praktik Pemerintah Kota Palembang'
    }
  }
};

// Inisialisasi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initProjectFilters();
  initProjectModal();
  initContactActions();
  initContactForm();
});

/* ==========================================================================
   1. THEME SWITCHER (Tailwind Dark Mode)
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
   2. NAVBAR & NAVIGATION (Garis 3 Mobile Drawer)
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const navItems = document.querySelectorAll('.nav-link, .mobile-nav-item');

  // Sticky header scroll shadow
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

    // Close mobile menu on click nav item
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          closeMobileMenu();
        }
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburgerBtn.classList.contains('menu-active')) {
        closeMobileMenu();
      }
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(l => {
          l.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
          l.classList.add('text-slate-600', 'dark:text-slate-300');
        });
        if (activeLink) {
          activeLink.classList.remove('text-slate-600', 'dark:text-slate-300');
          activeLink.classList.add('text-indigo-600', 'dark:text-indigo-400', 'font-bold');
        }
      }
    });
  });
}

/* ==========================================================================
   3. PROJECT FILTERING (with Mobile 3-Line Filter Toggle)
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const mobileToggle = document.getElementById('mobileProjectFilterToggle');
  const filtersContainer = document.getElementById('projectFiltersContainer');
  const chevron = document.getElementById('projectFilterChevron');
  const activeLabel = document.getElementById('activeProjectFilterLabel');

  const activeClasses = ['bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/25'];
  const inactiveClasses = ['bg-slate-100', 'dark:bg-[#182238]', 'text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-200', 'dark:hover:bg-[#1f2c4a]'];

  // Mobile Filter Toggle (garis 3)
  if (mobileToggle && filtersContainer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = filtersContainer.classList.contains('hidden');
      if (isHidden) {
        filtersContainer.classList.remove('hidden');
        if (chevron) chevron.classList.add('rotate-180');
        mobileToggle.setAttribute('aria-expanded', 'true');
      } else {
        filtersContainer.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile filter dropdown if tapped outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 768 && !mobileToggle.contains(e.target) && !filtersContainer.contains(e.target)) {
        filtersContainer.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove(...activeClasses);
        b.classList.add(...inactiveClasses);
      });

      btn.classList.remove(...inactiveClasses);
      btn.classList.add(...activeClasses);

      const filterValue = btn.getAttribute('data-filter');
      const labelSpan = btn.querySelector('span');
      const countSpan = btn.querySelector('span:last-child');
      
      // Update mobile button label
      if (activeLabel) {
        const text = labelSpan ? labelSpan.textContent.trim() : btn.textContent.trim();
        const count = countSpan && countSpan !== labelSpan ? ` (${countSpan.textContent.trim()})` : '';
        activeLabel.textContent = `${text}${count}`;
      }

      // If on mobile, automatically collapse filter dropdown after selection
      if (window.innerWidth < 768 && filtersContainer) {
        filtersContainer.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      }

      // Filter project cards with smooth animation
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   4. PROJECT DETAIL MODAL
   ========================================================================== */
function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const detailBtns = document.querySelectorAll('.view-project-detail-btn');

  if (!modalBackdrop) return;

  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectsData[projectId];
      if (data) {
        populateModal(data);
        openModal(modalBackdrop);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => closeModal(modalBackdrop));
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal(modalBackdrop);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
      closeModal(modalBackdrop);
    }
  });
}

function openModal(modal) {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('modal-open');
}

function populateModal(data) {
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = `${data.company} • ${data.category}`;
  document.getElementById('modalProblem').textContent = data.problem;
  document.getElementById('modalSolution').textContent = data.solution;
  document.getElementById('modalRole').textContent = data.role;
  document.getElementById('modalImpact').textContent = data.impact;

  // Render Tech Stack Pills
  const techContainer = document.getElementById('modalTechStack');
  techContainer.innerHTML = '';
  data.techStack.forEach(tech => {
    const pill = document.createElement('span');
    pill.className = 'px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60';
    pill.textContent = tech;
    techContainer.appendChild(pill);
  });

  // Render Image Preview if available
  const imgContainer = document.getElementById('modalImageContainer');
  const modalImg = document.getElementById('modalImage');
  if (imgContainer && modalImg) {
    if (data.image) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
      imgContainer.classList.remove('hidden');
    } else {
      imgContainer.classList.add('hidden');
    }
  }

  // Render Modal Note / Link
  const noteContainer = document.getElementById('modalNote');
  if (noteContainer) {
    noteContainer.textContent = data.links.note;
  }
}

/* ==========================================================================
   5. COPY TO CLIPBOARD & TOAST NOTIFICATION
   ========================================================================== */
function initContactActions() {
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('agung.aksa10@gmail.com', 'Alamat email berhasil disalin ke clipboard!');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('+6281271959206', 'Nomor telepon/WhatsApp berhasil disalin!');
    });
  }
}

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(message);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('opacity-0', 'translate-y-6', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-6', 'pointer-events-none');
  }, 3500);
}

/* ==========================================================================
   6. INTERACTIVE CONTACT FORM
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !message) {
      showToast('Mohon lengkapi nama dan isi pesan Anda.');
      return;
    }

    // Format WhatsApp message
    const waText = `Halo Agung Aksa,\nSaya: *${name}* (${email || 'Email tidak dilampirkan'})\nPerihal: *${subject || 'Peluang Kerja / Proyek'}*\n\nPesan:\n"${message}"`;
    const waUrl = `https://wa.me/6281271959206?text=${encodeURIComponent(waText)}`;

    window.open(waUrl, '_blank');
    showToast('Membuka WhatsApp untuk mengirim pesan...');
    contactForm.reset();
  });
}


