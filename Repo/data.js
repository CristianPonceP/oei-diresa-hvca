/* ═══════════════════════════════════════
   DATA — Repositorio de Información en Salud
   Separado de la lógica para facilitar el mantenimiento.
   Para agregar un recurso: añade un objeto al array correspondiente.
   Campos: icon, title, desc, tag, href, date?, status?
   status: 'active' (default) | 'wip' | 'unavailable'
═══════════════════════════════════════ */

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
        href: null,
        status: 'unavailable'
    },
    {
        icon: 'fa-mosquito',
        title: 'Metaxénicas y Zoonosis',
        desc: 'Vigilancia epidemiológica de dengue, malaria, leishmaniasis y otras enfermedades vectoriales.',
        tag: 'Tablero',
        href: null,
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
        date: '2026-03-20'
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
        href: null,
        status: 'wip'
    }
];