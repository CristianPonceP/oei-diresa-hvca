


// ── DATA ──────────────────────────────────
const cardData = [
  {
    icon: 'fa-syringe',
    title: 'Inmunizaciones',
    desc: 'Coberturas y dosis aplicadas por distrito',
    tag: 'Tablero',
    accent: '#0b9e6e',
    iconBg: 'rgba(11,158,110,0.12)',
    href: '#'
  },
  {
    icon: 'fa-people-group',
    title: 'Promoción de la Salud',
    desc: 'Indicadores comunitarios y campañas activas',
    tag: 'Tablero',
    accent: '#38bdf8',
    iconBg: 'rgba(56,189,248,0.12)',
    href: '#'
  },
  {
    icon: 'fa-brain',
    title: 'Salud Mental',
    desc: 'Estadísticas de atención institucional',
    tag: 'Tablero',
    accent: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    href: '#'
  },
  {
    icon: 'fa-virus',
    title: 'Cáncer',
    desc: 'Indicadores epidemiológicos por tipo',
    tag: 'Tablero',
    accent: '#f97316',
    iconBg: 'rgba(249,115,22,0.12)',
    href: '#'
  },
  {
    icon: 'fa-baby',
    title: 'Gestantes',
    desc: 'Seguimiento prenatal y materno-perinatal',
    tag: 'Tablero',
    accent: '#ec4899',
    iconBg: 'rgba(236,72,153,0.12)',
    href: '#'
  },
  {
    icon: 'fa-triangle-exclamation',
    title: 'Emergencias',
    desc: 'Urgencias y hospitalizaciones de emergencia',
    tag: 'Tablero',
    accent: '#ef4444',
    iconBg: 'rgba(239,68,68,0.12)',
    href: '#'
  },
  {
    icon: 'fa-lungs',
    title: 'Tuberculosis',
    desc: 'Notificaciones y tratamientos TB',
    tag: 'Tablero',
    accent: '#0b9e6e',
    iconBg: 'rgba(11,158,110,0.12)',
    href: '#'
  },
  {
    icon: 'fa-heart',
    title: 'Enfermedades Crónicas',
    desc: 'Diabetes, HTA y cardiopatías',
    tag: 'Tablero',
    accent: '#e11d48',
    iconBg: 'rgba(225,29,72,0.12)',
    href: '#'
  },
  {
    icon: 'fa-child-reaching',
    title: 'Niño y Adolescente',
    desc: 'CRED, nutricional y desarrollo infantil',
    tag: 'Tablero',
    accent: '#06b6d4',
    iconBg: 'rgba(6,182,212,0.12)',
    href: '#'
  }
];

const indicadoresData = [
  {
    icon: 'fa-chart-simple',
    title: 'Mortalidad General',
    desc: 'Tasas y causas de defunción por DIRESA',
    tag: 'Indicador',
    accent: '#0b9e6e',
    iconBg: 'rgba(11,158,110,0.12)',
    href: '#'
  },
  {
    icon: 'fa-droplet',
    title: 'Hemoglobina y Anemia',
    desc: 'Prevalencia en niños menores de 5 años',
    tag: 'Indicador',
    accent: '#f97316',
    iconBg: 'rgba(249,115,22,0.12)',
    href: '#'
  },
  {
    icon: 'fa-weight-scale',
    title: 'Desnutrición Crónica',
    desc: 'Indicadores nutricionales infantiles',
    tag: 'Indicador',
    accent: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    href: '#'
  },
  {
    icon: 'fa-hospital',
    title: 'Atención Hospitalaria',
    desc: 'Consultas, egresos y días de hospitalización',
    tag: 'Indicador',
    accent: '#38bdf8',
    iconBg: 'rgba(56,189,248,0.12)',
    href: '#'
  },
  {
    icon: 'fa-microscope',
    title: 'Diagnóstico de Laboratorio',
    desc: 'Resultados y tendencias por patología',
    tag: 'Indicador',
    accent: '#ec4899',
    iconBg: 'rgba(236,72,153,0.12)',
    href: '#'
  },
  {
    icon: 'fa-pills',
    title: 'Acceso a Medicamentos',
    desc: 'Disponibilidad en establecimientos MINSA',
    tag: 'Indicador',
    accent: '#ef4444',
    iconBg: 'rgba(239,68,68,0.12)',
    href: '#'
  }
];

const manualesData = [
  {
    icon: 'fa-book-open',
    title: 'Manual de HIS',
    desc: 'Sistema de información de salud — registro y reporte',
    tag: 'Manual',
    accent: '#0b9e6e',
    iconBg: 'rgba(11,158,110,0.12)',
    href: '#'
  },
  {
    icon: 'fa-file-waveform',
    title: 'Registro Civil',
    desc: 'Protocolos de certificación de nacimientos y defunciones',
    tag: 'Manual',
    accent: '#38bdf8',
    iconBg: 'rgba(56,189,248,0.12)',
    href: '#'
  },
  {
    icon: 'fa-stethoscope',
    title: 'Atención Primaria',
    desc: 'Guías clínicas para establecimientos de primer nivel',
    tag: 'Manual',
    accent: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    href: '#'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Bioseguridad',
    desc: 'Estándares y procedimientos de bioseguridad hospitalaria',
    tag: 'Manual',
    accent: '#f97316',
    iconBg: 'rgba(249,115,22,0.12)',
    href: '#'
  },
  {
    icon: 'fa-database',
    title: 'NOTI SP',
    desc: 'Manual de uso del sistema de notificación epidemiológica',
    tag: 'Manual',
    accent: '#ec4899',
    iconBg: 'rgba(236,72,153,0.12)',
    href: '#'
  },
  {
    icon: 'fa-clipboard-list',
    title: 'SIGA / SEACE',
    desc: 'Guías para el sistema de logística y abastecimiento',
    tag: 'Manual',
    accent: '#ef4444',
    iconBg: 'rgba(239,68,68,0.12)',
    href: '#'
  }
];

// ── RENDER ─────────────────────────────────
function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = data.map(card => `
    <a href="${card.href}" class="card" 
       style="--card-accent:${card.accent}; --card-icon-bg:${card.iconBg}; --card-color:${card.accent}"
       data-search="${card.title.toLowerCase()} ${card.desc.toLowerCase()}">
      <div class="card-icon-wrap">
        <i class="fa-solid ${card.icon} anim-icon"></i>
      </div>
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
      <div class="card-footer">
        <span class="card-tag">${card.tag}</span>
        <div class="card-arrow"><i class="fa-solid fa-arrow-up-right"></i></div>
      </div>
    </a>
  `).join('');
}

renderCards(cardData, 'grid-tableros');
renderCards(indicadoresData, 'grid-indicadores');
renderCards(manualesData, 'grid-manuales');

// ── NAVIGATION ─────────────────────────────
function showSection(id, el) {
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  // reset search
  document.getElementById('searchInput').value = '';
  filterCards('');
}

// ── DARK MODE ──────────────────────────────
function toggleDark() {
  document.body.classList.toggle('dark');
  const icon = document.getElementById('darkIcon');
  icon.className = document.body.classList.contains('dark')
    ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

// ── SIDEBAR ────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

// ── SEARCH ─────────────────────────────────
function filterCards(query) {
  const sections = ['tableros', 'indicadores', 'manuales'];
  sections.forEach(sec => {
    const grid = document.getElementById(`grid-${sec}`);
    const empty = document.getElementById(`empty-${sec}`);
    const cards = grid.querySelectorAll('.card');
    let visible = 0;
    cards.forEach(card => {
      const text = card.dataset.search || card.innerText.toLowerCase();
      if (!query || text.includes(query)) {
        card.classList.remove('hidden');
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });
    if (empty) empty.style.display = (visible === 0 && query) ? 'block' : 'none';
  });
}

document.getElementById('searchInput').addEventListener('input', function () {
  filterCards(this.value.toLowerCase().trim());
});