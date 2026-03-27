// ── QR LIBRARY ───────────────────────────────────────────────────────────────
(function loadQRScript() {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    s.onload = () => { window._qrReady = true; };
    document.head.appendChild(s);
})();

// ── HELPERS ──────────────────────────────────────────────────────────────────
const NEW_DAYS = 14;
const SECTIONS = ['tableros', 'indicadores', 'manuales'];
const SECTION_LABELS = { tableros: 'Tableros', indicadores: 'Indicadores', manuales: 'Manuales' };

function isNew(dateStr) {
    if (!dateStr) return false;
    return (Date.now() - new Date(dateStr).getTime()) / 86400000 <= NEW_DAYS;
}

function isDisabled(card) {
    return card.status === 'unavailable' || card.status === 'wip';
}

// status: 'active' | 'new' | 'unavailable' | 'wip'
function statusBadge(card) {
    if (card.status === 'unavailable') return `<span class="badge badge-unavailable"><i class="fa-solid fa-ban"></i> No disponible</span>`;
    if (card.status === 'wip')         return `<span class="badge badge-wip"><i class="fa-solid fa-gear fa-spin"></i> En implementación</span>`;
    if (isNew(card.date))              return `<span class="badge badge-new"><i class="fa-solid fa-star"></i> Nuevo</span>`;
    return '';
}

// ── PALETA DE COLORES ─────────────────────────────────────────────────────────
const PALETTE = [
    { accent: 'hsl(198,91%,40%)', iconBg: 'hsla(198,91%,40%,0.12)' },
    { accent: 'hsl(178,65%,36%)', iconBg: 'hsla(178,65%,36%,0.12)' },
    { accent: 'hsl(215,75%,48%)', iconBg: 'hsla(215,75%,48%,0.12)' },
    { accent: 'hsl(162,60%,38%)', iconBg: 'hsla(162,60%,38%,0.12)' },
    { accent: 'hsl(188,80%,38%)', iconBg: 'hsla(188,80%,38%,0.12)' },
    { accent: 'hsl(228,65%,52%)', iconBg: 'hsla(228,65%,52%,0.12)' },
    { accent: 'hsl(172,55%,34%)', iconBg: 'hsla(172,55%,34%,0.12)' },
    { accent: 'hsl(205,80%,42%)', iconBg: 'hsla(205,80%,42%,0.12)' },
    { accent: 'hsl(18,88%,48%)',  iconBg: 'hsla(18,88%,48%,0.12)'  },
    { accent: 'hsl(150,55%,36%)', iconBg: 'hsla(150,55%,36%,0.12)' },
    { accent: 'hsl(260,55%,48%)', iconBg: 'hsla(260,55%,48%,0.12)' },
    { accent: 'hsl(338,70%,46%)', iconBg: 'hsla(338,70%,46%,0.12)' },
    { accent: 'hsl(42,88%,42%)',  iconBg: 'hsla(42,88%,42%,0.12)'  },
    { accent: 'hsl(195,75%,35%)', iconBg: 'hsla(195,75%,35%,0.12)' },
    { accent: 'hsl(16,75%,44%)',  iconBg: 'hsla(16,75%,44%,0.12)'  },
];
function getColor(i) { return PALETTE[i % PALETTE.length]; }

// ── QR GENERATION ─────────────────────────────────────────────────────────────
// FIX #11: contador de intentos local por cada llamada, evita que un agotamiento
// global bloquee generaciones posteriores.
function generateQR(containerId, url) {
    if (!url) {
        const el = document.getElementById(containerId);
        if (el) el.innerHTML = `
          <div style="width:100px;height:100px;display:flex;flex-direction:column;
                      align-items:center;justify-content:center;gap:6px;opacity:0.45">
            <i class="fa-solid fa-link-slash" style="font-size:24px;color:#94a3b8"></i>
            <span style="font-size:0.62rem;color:#94a3b8;text-align:center;line-height:1.3">Sin<br>enlace</span>
          </div>`;
        return;
    }
    let attempts = 0;                        // ← local, no compartido
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
        } else if (attempts++ < 30) {
            setTimeout(tryGen, 200);
        }
    }
    tryGen();
}

// ── RENDER ───────────────────────────────────────────────────────────────────
const currentFilter = { tableros: 'all', indicadores: 'all', manuales: 'all' };

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = data.map((card, i) => {
        const uid      = `qr-${containerId}-${i}`;
        const disabled = isDisabled(card);
        const color    = getColor(i);
        const badge    = statusBadge(card);
        const isNew_   = isNew(card.date);

        // FIX #2: rel="noopener noreferrer" en todos los target="_blank"
        const openAttr = (!disabled && card.href) ? 'target="_blank" rel="noopener noreferrer"' : '';

        // FIX #4: tarjetas deshabilitadas usan <div> en lugar de <a href="javascript:void(0)">
        const tagOpen  = disabled
            ? `<div class="card-front" tabindex="-1" aria-disabled="true" role="img" aria-label="${card.title} — no disponible">`
            : `<a class="card-front" href="${card.href}" ${openAttr} aria-label="Abrir ${card.title}">`;
        const tagClose = disabled ? '</div>' : '</a>';

        return `
        <div class="card-flip${disabled ? ' is-disabled' : ''}${isNew_ ? ' is-new' : ''}"
             style="--card-accent:${color.accent};--card-icon-bg:${color.iconBg};--card-color:${color.accent}"
             data-search="${card.title.toLowerCase()} ${card.desc.toLowerCase()}"
             data-new="${isNew_}"
             data-status="${card.status || (isNew_ ? 'new' : 'active')}">
          <div class="card-inner">

            <!-- FRONT -->
            ${tagOpen}
              ${badge}
              <div class="card-icon-wrap">
                <i class="fa-solid ${card.icon} anim-icon"></i>
              </div>
              <div class="card-title">${card.title}</div>
              <div class="card-desc">${card.desc}</div>
              <div class="card-footer">
                <span class="card-tag">${card.tag}</span>
                ${disabled
                    ? `<span class="btn-qr btn-qr-disabled" title="No disponible"><i class="fa-solid fa-lock"></i></span>`
                    : `<button class="btn-qr" onclick="flipCard(event,this)" title="Ver código QR" aria-label="Ver código QR de ${card.title}">
                         <i class="fa-solid fa-qrcode"></i><span>QR</span>
                       </button>`
                }
              </div>
              <!-- FIX #9: indicador visible en móvil de que la tarjeta abre un enlace -->
              ${!disabled ? '<div class="card-mobile-hint"><i class="fa-solid fa-arrow-up-right-from-square"></i> Toca para abrir</div>' : ''}
            ${tagClose}

            <!-- BACK -->
            <div class="card-back">
              <div class="card-back-title">${card.title}</div>
              <div class="qr-wrap"><div id="${uid}"></div></div>
              <div class="card-back-actions">
                <button class="btn-back" onclick="flipBack(event,this)">
                  <i class="fa-solid fa-rotate-left"></i> Volver
                </button>
                ${card.href
                    ? `<a class="btn-back primary" href="${card.href}" target="_blank" rel="noopener noreferrer"
                          onclick="event.stopPropagation()" aria-label="Abrir ${card.title} en nueva pestaña">
                         <i class="fa-solid fa-arrow-up-right"></i> Abrir
                       </a>`
                    : `<span class="btn-back" style="opacity:.4;cursor:not-allowed">
                         <i class="fa-solid fa-link-slash"></i> Sin enlace
                       </span>`
                }
              </div>
            </div>

          </div>
        </div>`;
    }).join('');

    // FIX #7: delays de animación calculados por JS, sin límite de nth-child
    applyCardAnimationDelays(containerId);

    data.forEach((card, i) => generateQR(`qr-${containerId}-${i}`, card.href || null));
}

// FIX #7: función reutilizable para aplicar animation-delay dinámico
function applyCardAnimationDelays(containerId) {
    document.querySelectorAll(`#${containerId} .card-flip`).forEach((el, i) => {
        el.style.animationDelay = `${0.03 + i * 0.04}s`;
    });
}

renderCards(cardData,       'grid-tableros');
renderCards(indicadoresData,'grid-indicadores');
renderCards(manualesData,   'grid-manuales');

// FIX #1: contador calculado después del render, con valor claro y correcto
function updateTotalCount() {
    const total = document.querySelectorAll('.card-flip:not(.is-disabled)').length;
    document.getElementById('total-count').textContent = total;
}
updateTotalCount();

// ── FLIP ─────────────────────────────────────────────────────────────────────
function flipCard(event, btn) {
    event.preventDefault();
    event.stopPropagation();
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
    const grid  = document.getElementById(`grid-${sectionId}`);
    const empty = document.getElementById(`empty-${sectionId}`);
    const query  = document.getElementById('searchInput').value.toLowerCase().trim();
    const filter = currentFilter[sectionId];
    let visible  = 0;

    grid.querySelectorAll('.card-flip').forEach(card => {
        const textOk   = !query || (card.dataset.search || '').includes(query);
        const filterOk = filter === 'all' || card.dataset.new === 'true';
        if (textOk && filterOk) { card.classList.remove('hidden'); visible++; }
        else                    { card.classList.add('hidden'); }
    });

    if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function showSection(id, el) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('searchInput').value = '';
    document.querySelectorAll(`#${id} .chip`).forEach((c, i) => c.classList.toggle('active', i === 0));
    currentFilter[id] = 'all';
    applyFilters(id);
    hideCrossSectionHint();
}

// FIX #3: búsqueda con sugerencia cross-section
// Solo filtra la sección activa; si no hay resultados, sugiere secciones
// que sí tienen coincidencias.
function getActiveSectionId() {
    const active = document.querySelector('.content-section.active');
    return active ? active.id : SECTIONS[0];
}

document.getElementById('searchInput').addEventListener('input', function () {
    const activeId = getActiveSectionId();
    applyFilters(activeId);
    checkCrossSectionHint(activeId, this.value.toLowerCase().trim());
});

function checkCrossSectionHint(activeSectionId, query) {
    hideCrossSectionHint();
    if (!query) return;

    const emptyEl = document.getElementById(`empty-${activeSectionId}`);
    const noResultsHere = emptyEl && emptyEl.style.display === 'block';
    if (!noResultsHere) return;

    const matchingSections = SECTIONS.filter(sec => {
        if (sec === activeSectionId) return false;
        const grid = document.getElementById(`grid-${sec}`);
        if (!grid) return false;
        return [...grid.querySelectorAll('.card-flip')].some(card =>
            (card.dataset.search || '').includes(query)
        );
    });

    if (matchingSections.length === 0) return;

    const hint = document.getElementById(`empty-${activeSectionId}`);
    const links = matchingSections.map(sec =>
        `<button class="cross-hint-btn" onclick="switchToSection('${sec}')">${SECTION_LABELS[sec]}</button>`
    ).join(' ');

    hint.innerHTML = `
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Sin resultados en esta sección</p>
        <p class="cross-hint-text">Hay coincidencias en: ${links}</p>`;
}

function hideCrossSectionHint() {
    SECTIONS.forEach(sec => {
        const empty = document.getElementById(`empty-${sec}`);
        if (empty) {
            empty.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i><p>No se encontraron resultados</p>`;
        }
    });
}

// Cambia de sección desde el hint cross-section
function switchToSection(id) {
    const navItem = document.querySelector(`.nav-item[data-section="${id}"]`);
    showSection(id, navItem);
    // re-aplica la búsqueda actual en la nueva sección
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (query) {
        applyFilters(id);
        checkCrossSectionHint(id, query);
    }
}

// ── DARK MODE ────────────────────────────────────────────────────────────────
// FIX #5: persiste preferencia en localStorage
// FIX #8: actualiza aria-label del botón al cambiar estado
function toggleDark() {
    const isDark = document.body.classList.toggle('dark');
    updateDarkIcon(isDark);
    localStorage.setItem('dark', isDark ? '1' : '0');
}

function updateDarkIcon(isDark) {
    const btn  = document.getElementById('darkBtn');
    const icon = document.getElementById('darkIcon');
    icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    btn.setAttribute('aria-label', isDark ? 'Desactivar modo oscuro' : 'Activar modo oscuro');
}

// ── SIDEBAR ───────────────────────────────────────────────────────────────────
// FIX #5: persiste estado del sidebar en localStorage
function toggleSidebar() {
    const isCollapsed = document.getElementById('sidebar').classList.toggle('collapsed');
    localStorage.setItem('sidebar-collapsed', isCollapsed ? '1' : '0');
}

// ── INIT — restaurar preferencias guardadas ───────────────────────────────────
(function restorePreferences() {
    const savedDark      = localStorage.getItem('dark');
    const savedCollapsed = localStorage.getItem('sidebar-collapsed');

    // Respeta preferencia del sistema si no hay valor guardado
    const prefersDark = savedDark !== null
        ? savedDark === '1'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) document.body.classList.add('dark');
    updateDarkIcon(prefersDark);

    if (savedCollapsed === '1') {
        document.getElementById('sidebar').classList.add('collapsed');
    }
})();