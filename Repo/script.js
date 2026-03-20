// ── QR LIBRARY ───────────────────────────────────────────────────────────────
(function loadQRScript() {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    s.onload = () => { window._qrReady = true; };
    document.head.appendChild(s);
})();

// ── HELPERS ──────────────────────────────────────────────────────────────────
const NEW_DAYS = 14;
function isNew(dateStr) {
    if (!dateStr) return false;
    return (Date.now() - new Date(dateStr).getTime()) / 86400000 <= NEW_DAYS;
}

// status: 'active' | 'new' | 'unavailable' | 'wip'
function statusBadge(card) {
    if (card.status === 'unavailable') return `<span class="badge badge-unavailable"><i class="fa-solid fa-ban"></i> No disponible</span>`;
    if (card.status === 'wip') return `<span class="badge badge-wip"><i class="fa-solid fa-gear fa-spin"></i> En implementación</span>`;
    if (isNew(card.date)) return `<span class="badge badge-new"><i class="fa-solid fa-star"></i> Nuevo</span>`;
    return '';
}

function isDisabled(card) {
    return card.status === 'unavailable' || card.status === 'wip';
}

// ── DATA ─────────────────────────────────────────────────────────────────────
const cardData = [
    {
        icon: 'fa-syringe',
        title: 'Inmunizaciones',
        desc: 'Coberturas vacunales, dosis aplicadas y avance por distrito y establecimiento de salud.',
        tag: 'Tablero',
        href: 'https://goo.su/K6o9mI',
        date: '2026-03-10'
    },
    {
        icon: 'fa-users',
        title: 'Promoción de la Salud',
        desc: 'Indicadores de intervenciones comunitarias, estilos de vida saludable y campañas activas.',
        tag: 'Tablero',
        href: 'https://goo.su/jVlXdWv',
        date: '2026-03-10'
    },
    {
        icon: 'fa-brain',
        title: 'Salud Mental',
        desc: 'Atenciones en salud mental, prevalencia de trastornos y seguimiento de pacientes.',
        tag: 'Tablero',
        href: 'https://goo.su/mFUcdq'
    },
    {
        icon: 'fa-ribbon',
        title: 'Cáncer',
        desc: 'Incidencia, mortalidad y cobertura de tamizaje oncológico por tipo de cáncer.',
        tag: 'Tablero',
        href: 'https://goo.su/FjfHXd'
    },
    {
        icon: 'fa-person-pregnant',
        title: 'Gestantes',
        desc: 'Seguimiento prenatal, atención del parto y monitoreo del riesgo materno-perinatal.',
        tag: 'Tablero',
        href: 'https://goo.su/Lq6Ei'
    },
    {
        icon: 'fa-truck-medical',
        title: 'Emergencias',
        desc: 'Urgencias atendidas, tiempos de respuesta y hospitalizaciones de emergencia.',
        tag: 'Tablero',
        href: 'https://goo.su/xEAFWRS'
    },
    {
        icon: 'fa-heart-pulse',
        title: 'Enfermedades Crónicas',
        desc: 'Prevalencia y control de diabetes, hipertensión arterial y cardiopatías.',
        tag: 'Tablero',
        href: 'https://goo.su/xwYIzjD'
    },
    {
        icon: 'fa-chart-pie',
        title: 'Gestante, Niño y Adolescente',
        desc: 'Panel integrado CDS: seguimiento de gestantes, control de crecimiento y desarrollo.',
        tag: 'Tablero',
        href: 'https://goo.su/dgTz1K',
        date: '2026-03-14'
    },
    {
        icon: 'fa-gauge-high',
        title: 'Tablero de Mando',
        desc: 'Resumen ejecutivo: población, atendidos, atenciones, DCI, anemia y turnos programados.',
        tag: 'Tablero',
        href: 'https://goo.su/odURUL'
    },
    {
        icon: 'fa-stethoscope',
        title: 'Morbilidad',
        desc: 'Principales causas de morbilidad registradas en consulta externa por diagnóstico CIE-10.',
        tag: 'Tablero',
        href: 'https://goo.su/OcuNU6C',
        date: '2026-03-14'
    },
    {
        icon: 'fa-skull-crossbones',
        title: 'Defunciones',
        desc: 'Registro y análisis de defunciones, causas básicas de muerte y mortalidad por grupos.',
        tag: 'Tablero',
        href: 'https://goo.su/rJzTGq',
        date: '2026-03-14'
    },
    {
        icon: 'fa-children',
        title: 'Padrón Nominal',
        desc: 'Registro nominal de niños menores de 6 años para seguimiento y vigilancia nutricional.',
        tag: 'Tablero',
        href: 'https://goo.su/pZbsF',
        date: '2026-03-18'
    },
    {
        icon: 'fa-weight-scale',
        title: 'DCI y Anemia',
        desc: 'Desnutrición crónica infantil y anemia en niños menores de 5 años por ámbito geográfico.',
        tag: 'Tablero',
        href: 'https://goo.su/rJzTGq',
        status: 'wip'
    },
    {
        icon: 'fa-lungs',
        title: 'Tuberculosis',
        desc: 'Notificaciones de TB, inicio de tratamiento y porcentaje de éxito terapéutico.',
        tag: 'Tablero',
        href: '#',
        status: 'unavailable'
    },
    {
        icon: 'fa-mosquito',
        title: 'Metaxénicas y Zoonosis',
        desc: 'Vigilancia epidemiológica de dengue, malaria, leishmaniasis y otras enfermedades vectoriales.',
        tag: 'Tablero',
        href: '#',
        status: 'unavailable'
    }
];

const indicadoresData = [
    {
        icon: 'fa-chart-bar',
        title: 'Indicadores Sanitarios y de Gestión',
        desc: 'Conjunto de indicadores estratégicos para el monitoreo de la gestión sanitaria regional.',
        tag: 'Indicador',
        href: 'https://goo.su/5QGSx',
        status: 'wip'
        
        
    },
    {
        icon: 'fa-bullseye',
        title: 'Indicadores de Desempeño MINSA',
        desc: 'Metas e indicadores de desempeño del Ministerio de Salud para establecimientos de primer nivel.',
        tag: 'Indicador',
        href: 'https://goo.su/5QGSx',
        date: '2026-03-18'
        
    },
    {
        icon: 'fa-baby',
        title: 'Indicadores FED',
        desc: 'Indicadores del Fondo de Estímulo al Desempeño: nutrición, salud materna e infantil.',
        tag: 'Indicador',
        href: 'https://goo.su/OgJrl5u',
        date: '2026-03-20'
    },
    {
        icon: 'fa-folder-open',
        title: 'Repositorio de Indicadores',
        desc: 'Biblioteca centralizada de indicadores de salud pública con fichas técnicas y fuentes.',
        tag: 'Indicador',
        href: 'https://sites.google.com/saludhuancavelica.pe/indicadores-diresa-hvca/inicio',
        status: 'unavailable'
    }
];

const manualesData = [
    {
        icon: 'fa-book-medical',
        title: 'CIE-10 (OPS)',
        desc: 'Clasificación Internacional de Enfermedades — décima revisión, versión oficial OPS/OMS.',
        tag: 'Manual',
        href: 'https://www.minsa.gob.pe/reunis/data/volumen1-2018.pdf',
        date: '2026-03-01'
    },
    {
        icon: 'fa-file-excel',
        title: 'CIE-10 (MINSA-Excel)',
        desc: 'Listado del CIE-10 en formato Excel adaptado por MINSA para el registro en HIS.',
        tag: 'Manual',
        href: 'https://files.minsa.gob.pe/s/szimSEZTwFrQR25'
    },
    {
        icon: 'fa-clipboard-list',
        title: 'Manuales de Registro HIS MINSA',
        desc: 'Guías y manuales operativos para el correcto llenado de registros en el sistema HIS.',
        tag: 'Manual',
        href: 'https://files.minsa.gob.pe/s/74MZgRMddAx7mw2'
    },
    {
        icon: 'fa-list-check',
        title: 'Catálogo CPMS',
        desc: 'Catálogo de Procedimientos Médicos y Sanitarios del Sector Salud para codificación.',
        tag: 'Manual',
        href: 'https://files.minsa.gob.pe/s/dKEnmyJcG5HXCHK'
    },
    {
        icon: 'fa-code',
        title: 'Sintaxis Reportes HIS',
        desc: 'Scripts y sintaxis de extracción y consolidación de reportes desde el sistema HIS.',
        tag: 'Manual',
        href: '#',
        status: 'wip'
    }
];

// ── PALETA DE COLORES POR ÍNDICE ─────────────────────────────────────────────
// Harmonic palette based on hsl(198,91%,44%) + analogous + complementary
const PALETTE = [
    { accent: 'hsl(198,91%,40%)', iconBg: 'hsla(198,91%,40%,0.12)' }, // cyan primario
    { accent: 'hsl(178,65%,36%)', iconBg: 'hsla(178,65%,36%,0.12)' }, // teal
    { accent: 'hsl(215,75%,48%)', iconBg: 'hsla(215,75%,48%,0.12)' }, // azul
    { accent: 'hsl(162,60%,38%)', iconBg: 'hsla(162,60%,38%,0.12)' }, // verde esmeralda
    { accent: 'hsl(188,80%,38%)', iconBg: 'hsla(188,80%,38%,0.12)' }, // cyan-teal
    { accent: 'hsl(228,65%,52%)', iconBg: 'hsla(228,65%,52%,0.12)' }, // índigo
    { accent: 'hsl(172,55%,34%)', iconBg: 'hsla(172,55%,34%,0.12)' }, // verde agua
    { accent: 'hsl(205,80%,42%)', iconBg: 'hsla(205,80%,42%,0.12)' }, // azul cielo
    { accent: 'hsl(18,88%,48%)', iconBg: 'hsla(18,88%,48%,0.12)' }, // naranja cálido
    { accent: 'hsl(150,55%,36%)', iconBg: 'hsla(150,55%,36%,0.12)' }, // verde salud
    { accent: 'hsl(260,55%,48%)', iconBg: 'hsla(260,55%,48%,0.12)' }, // violeta
    { accent: 'hsl(338,70%,46%)', iconBg: 'hsla(338,70%,46%,0.12)' }, // rosa-rojo
    { accent: 'hsl(42,88%,42%)', iconBg: 'hsla(42,88%,42%,0.12)' }, // ámbar
    { accent: 'hsl(195,75%,35%)', iconBg: 'hsla(195,75%,35%,0.12)' }, // azul pato
    { accent: 'hsl(16,75%,44%)', iconBg: 'hsla(16,75%,44%,0.12)' }, // terracota
];

function getColor(i) { return PALETTE[i % PALETTE.length]; }

// ── QR GENERATION ────────────────────────────────────────────────────────────
let _qrAttempts = 0;
function generateQR(containerId, url) {
    if (!url || url === '#') {
        const el = document.getElementById(containerId);
        if (el) el.innerHTML = `
          <div style="width:100px;
                      height:100px;
                      display:flex;
                      flex-direction:column;
                      align-items:center;
                      justify-content:center;
                      gap:6px;
                      opacity:0.45">
            <i class="fa-solid fa-link-slash" style="font-size:24px; color:#94a3b8"></i>
            <span style="font-size:0.62rem;
                         color:#94a3b8;
                         text-align:center;
                         line-height:1.3"> Sin<br>enlace </span>
          </div>`;
        return;
    }
    function tryGen() {
        if (window.QRCode) {
            const el = document.getElementById(containerId);
            if (!el || el.dataset.generated) return;
            el.dataset.generated = 'true';
            try {
                new QRCode(el, {
                    text: url, width: 100, height: 100,
                    colorDark: '#0a3042', colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.M
                });
            } catch (e) { console.warn('QR:', e); }
        } else if (_qrAttempts++ < 30) setTimeout(tryGen, 200);
    }
    tryGen();
}

// ── RENDER ───────────────────────────────────────────────────────────────────
const currentFilter = { tableros: 'all', indicadores: 'all', manuales: 'all' };

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map((card, i) => {
        const uid = `qr-${containerId}-${i}`;
        const disabled = isDisabled(card);
        const color = getColor(i);
        const badge = statusBadge(card);
        const openAttr = (!disabled && card.href !== '#') ? 'target="_blank"' : '';
        const hrefAttr = disabled ? 'javascript:void(0)' : card.href;
        const isNew_ = isNew(card.date);

        return `
        <div class="card-flip${disabled ? ' is-disabled' : ''}${isNew_ ? ' is-new' : ''}"
             style="--card-accent:${color.accent}; --card-icon-bg:${color.iconBg}; --card-color:${color.accent}"
             data-search="${card.title.toLowerCase()} ${card.desc.toLowerCase()}"
             data-new="${isNew_}"
             data-status="${card.status || (isNew_ ? 'new' : 'active')}">

          <div class="card-inner">

            <!-- FRONT -->
            <a class="card-front" href="${hrefAttr}" ${openAttr}
               ${disabled ? 'tabindex="-1" aria-disabled="true"' : ''}>
              ${badge}
              <div class="card-icon-wrap">
                <i class="fa-solid ${card.icon} anim-icon"></i>
              </div>
              <div class="card-title">${card.title}</div>
              <div class="card-desc">${card.desc}</div>
              <div class="card-footer">
                <span class="card-tag">${card.tag}</span>
                ${disabled
                ? `<span class="btn-qr btn-qr-disabled" title="No disponible">
                       <i class="fa-solid fa-lock"></i>
                     </span>`
                : `<button class="btn-qr" onclick="flipCard(event,this)" title="Ver QR">
                       <i class="fa-solid fa-qrcode"></i><span>QR</span>
                     </button>`
            }
              </div>
            </a>

            <!-- BACK -->
            <div class="card-back">
              <div class="card-back-title">${card.title}</div>
              <div class="qr-wrap"><div id="${uid}"></div></div>
              <div class="card-back-actions">
                <button class="btn-back" onclick="flipBack(event,this)">
                  <i class="fa-solid fa-rotate-left"></i> Volver
                </button>
                <a class="btn-back primary" href="${card.href}" ${openAttr}
                   onclick="event.stopPropagation()">
                  <i class="fa-solid fa-arrow-up-right"></i> Abrir
                </a>
              </div>
            </div>

          </div>
        </div>`;
    }).join('');

    data.forEach((card, i) => generateQR(`qr-${containerId}-${i}`, card.href));
}

renderCards(cardData, 'grid-tableros');
renderCards(indicadoresData, 'grid-indicadores');
renderCards(manualesData, 'grid-manuales');

// ── FLIP ─────────────────────────────────────────────────────────────────────
function flipCard(event, btn) {
    event.preventDefault(); event.stopPropagation();
    btn.closest('.card-flip').classList.add('flipped');
}
function flipBack(event, btn) {
    event.stopPropagation();
    btn.closest('.card-flip').classList.remove('flipped');
}

// ── FILTER ───────────────────────────────────────────────────────────────────
function setFilter(sectionId, filter, chipEl) {
    currentFilter[sectionId] = filter;
    chipEl.closest('.section-meta').querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chipEl.classList.add('active');
    applyFilters(sectionId);
}

function applyFilters(sectionId) {
    const grid = document.getElementById(`grid-${sectionId}`);
    const empty = document.getElementById(`empty-${sectionId}`);
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filter = currentFilter[sectionId];
    let visible = 0;

    grid.querySelectorAll('.card-flip').forEach(card => {
        const textOk = !query || (card.dataset.search || '').includes(query);
        const filterOk = filter === 'all' || card.dataset.new === 'true';
        if (textOk && filterOk) { card.classList.remove('hidden'); visible++; }
        else { card.classList.add('hidden'); }
    });
    if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

// ── NAVIGATION ───────────────────────────────────────────────────────────────
function showSection(id, el) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('searchInput').value = '';
    document.querySelectorAll(`#${id} .chip`).forEach((c, i) => c.classList.toggle('active', i === 0));
    currentFilter[id] = 'all';
    applyFilters(id);
}

// ── DARK / SIDEBAR ───────────────────────────────────────────────────────────
function toggleDark() {
    document.body.classList.toggle('dark');
    document.getElementById('darkIcon').className = document.body.classList.contains('dark')
        ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

// ── SEARCH ───────────────────────────────────────────────────────────────────
document.getElementById('searchInput').addEventListener('input', function () {
    ['tableros', 'indicadores', 'manuales'].forEach(sec => applyFilters(sec));
});