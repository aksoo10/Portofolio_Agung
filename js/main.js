/**
 * Portfolio Agung Aksa - Interactive Functionality
 * Full-Stack Web Developer | Laravel & PHP Ecosystem
 */

// Data Detail Proyek untuk Modal Interaktif
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
    techStack: ['Laravel Framework', 'PHP 8+', 'MySQL', 'Tailwind CSS', 'Blade Engine', 'DomPDF'],
    impact: 'Mendigitalisasi 100% proses pendaftaran pelepasan alumni Fasilkom UNSRI, memangkas waktu verifikasi berkas kelulusan, dan mencegah duplikasi data alumni.',
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
  },
  'power-apps': {
    title: 'Tools & Inventory Management System (TMS & IMS)',
    company: 'PT Andritz (Internship 2026)',
    category: 'Enterprise / Low-Code',
    badge: 'Enterprise Productivity Tool',
    problem: 'Sirkulasi peminjaman alat berat khusus/perkakas teknik serta monitoring suku cadang habis pakai rentan mengalami selisih data bila pencatatan masih mengandalkan lembaran form kertas atau spreadsheet manual.',
    solution: 'Membangun ekosistem aplikasi mobile & tablet internal berbasis Microsoft Power Apps yang terhubung ke basis data terpusat, memfasilitasi pemindaian barcode perkakas kerja, alur persetujuan peminjaman, serta peringatan otomatis ketika batas minimum stok suku cadang tercapai.',
    role: 'Power Apps Developer Intern — Merancang alur navigasi aplikasi, formulas logika peminjaman, integrasi data, dan validasi formulir input teknisi.',
    techStack: ['Microsoft Power Apps', 'SharePoint Lists / Dataverse', 'Power Automate', 'Low-Code Automation'],
    impact: 'Meningkatkan akurasi audit inventaris alat secara berkala, mempercepat sirkulasi checkout/checkin perkakas teknik, dan mencegah hilangnya aset peralatan berharga.',
    links: {
      github: '#',
      demo: '#',
      hasRepo: false,
      note: 'Solusi Digital Enterprise PT Andritz'
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
   1. THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const iconSpan = document.querySelector('#themeToggleBtn .theme-icon');
  if (iconSpan) {
    iconSpan.innerHTML = theme === 'light' 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

/* ==========================================================================
   2. NAVBAR & NAVIGATION
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  // Sticky header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on click nav item
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
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
        navItems.forEach(l => l.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
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
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal(modalBackdrop);
    }
  });
}

function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
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
    pill.className = 'skill-chip primary-tech';
    pill.textContent = tech;
    techContainer.appendChild(pill);
  });

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
    // Fallback manual
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
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
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

    // Buat format pesan WhatsApp
    const waText = `Halo Agung Aksa,\nSaya: *${name}* (${email || 'Email tidak dilampirkan'})\nPerihal: *${subject || 'Peluang Kerja / Proyek'}*\n\nPesan:\n"${message}"`;
    const waUrl = `https://wa.me/6281271959206?text=${encodeURIComponent(waText)}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');

    showToast('Membuka WhatsApp untuk mengirim pesan...');
    contactForm.reset();
  });
}
