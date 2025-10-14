(function(){
    const configs = [
    {
        btnId:'btnArt',
        key:'artes',
        title:'ARTES',
        left:['ARQUITECTURA','ARTES','MÚSICA'],
        right:['RESTAURACIÓN','RESTAURACIÓN DE BIENES MUEBLES']
    },
    {
        btnId:'btnCrea',
        key:'creativos',
        title:'ESTUDIOS CREATIVOS',
        left:['ARQUITECTURA','COMUNICACIÓN','COMUNICACIÓN GRÁFICA','MÚSICA'],
        right:['PERIODISMO','RESTAURACIÓN','RESTAURACIÓN DE BIENES MUEBLES']
    },
    {
        btnId:'btnAmb',
        key:'ambiente',
        title:'AMBIENTE CONSTRUIDO',
        left:['ARQUITECTURA'],
        right:['INGENIERÍA CIVIL']
    },
    {
        btnId:'btnSalud',
        key:'salud',
        title:'CIENCIAS DE LA SALUD',
        left:[
            'ADMINISTRACIÓN DE LA SALUD','BIOMÉDICAS','BIOQUÍMICA','DEPORTES',
            'ENFERMERÍA','FARMACOBIOLOGÍA','INGENIERÍA BIOMÉDICA'
        ],
        right:[
            'INGENIERÍA FARMACÉUTICA','MEDICINA','NUTRICIÓN',
            'ODONTOLOGÍA','QUÍMICA','SALUD','TERAPIA','VETERINARIA Y ZOOTECNIA'
        ]
    },
    {
        btnId:'btnBio',
        key:'bio',
        title:'CIENCIAS BIOLÓGICAS',
        left:[
            'AGRONOMÍA','BIOLOGÍA','BIOMÉDICAS','CIENCIAS FORESTALES','DESARROLLO AGROPECUARIO'
        ],
        right:[
            'ECOLOGÍA','FARMACOBIOLOGÍA','QUÍMICA','VETERINARIA Y ZOOTECNIA'
        ]
    },
    {
        btnId:'btnEco',
        key:'economia',
        title:'ECONOMÍA',
        left:['ECONOMÍA','FINANZAS','MERCADOTECNIA Y COMERCIO'],
        right:['RELACIONES COMERCIALES','SEGUROS Y FIANZAS']
    },
    {
        btnId:'btnAdmin',
        key:'admin',
        title:'ADMINISTRACIÓN',
        left:[
            'ADMINISTRACIÓN','CIENCIAS POLÍTICAS Y ADMINISTRACIÓN PÚBLICA',
            'COMPUTACIÓN E INFORMÁTICA','CONTADURÍA'
        ],
        right:[
            'FINANZAS','RELACIONES INDUSTRIALES','RELACIONES INTERNACIONALES','SEGUROS Y FIANZAS'
        ]
    },
    {
        btnId:'btnIng',
        key:'ingenieria',
        title:'INGENIERÍA',
        left:[
            'AERONÁUTICA','AGRONOMÍA','ASTRONOMÍA','BIOLOGÍA','BIOQUÍMICA','COMPUTACIÓN E INFORMÁTICA',
            'DESARROLLO AGROPECUARIO','DISEÑO','ECOLOGÍA','ELÉCTRICA Y ELECTRÓNICA','FARMACOBIOLOGÍA',
            'FINANZAS','FÍSICA','GEOGRAFÍA','GEOLOGÍA','GEOMÁTICA','GEOTÉCNIA'
        ],
        right:[
            'HIDROLOGÍA','INFORMÁTICA ADMINISTRATIVA','INGENIERÍA AMBIENTAL','INGENIERÍA BIOMÉDICA',
            'INGENIERÍA CIVIL','INGENIERÍA FARMACÉUTICA','INGENIERÍA INDUSTRIAL','INGENIERÍA QUÍMICA',
            'MATEMÁTICAS - ACTUARIA','MECÁNICA','MINERO','NAVAL','NUTRICIÓN','OCEANOGRAFÍA','PESCA',
            'QUÍMICA','SISTEMAS Y CALIDAD','VETERINARIA Y ZOOTECNIA'
        ]
    },
    {
        btnId:'btnTi',
        key:'ti',
        title:'TECNOLOGÍAS DE LA INFORMACIÓN',
        left:['COMPUTACIÓN E INFORMÁTICA'],
        right:['INFORMÁTICA ADMINISTRATIVA','SISTEMAS Y CALIDAD']
    },
    {
        btnId:'btnSoc',
        key:'sociales',
        title:'CIENCIAS SOCIALES',
        left:[
            'ANTROPOLOGÍA','ANTROPOLOGÍA FÍSICA','ANTROPOLOGÍA SOCIAL','ARQUEOLOGÍA','ARTES',
            'CIENCIAS POLÍTICAS Y ADMINISTRACIÓN PÚBLICA','CIENCIAS SOCIALES','COMUNICACIÓN',
            'COMUNICACIÓN GRÁFICA','CONSERVACIÓN Y RESTAURACIÓN DE BIENES CULTURALES MUEBLES',
            'DEMOGRAFÍA','DEPORTES','DERECHO','ECONOMÍA','EDUCACIÓN','ESTUDIOS DE POBLACIÓN',
            'ETNOLOGÍA','FILOSOFÍA'
        ],
        right:[
            'GEOGRAFÍA','HISTORIA','HUMANIDADES','LINGÜÍSTICA','MERCADOTECNIA Y COMERCIO',
            'PERIODISMO','POLÍTICAS PÚBLICAS','PSICOLOGÍA','RELACIONES COMERCIALES',
            'RELACIONES INDUSTRIALES','RELACIONES INTERNACIONALES','SOCIOLOGÍA','TURISMO'
        ]
    },
    {
        btnId:'btnHum',
        key:'humanidades',
        title:'HUMANIDADES',
        left:['ANTROPOLOGÍA','COMUNICACIÓN GRÁFICA','EDUCACIÓN','FILOSOFÍA'],
        right:['HISTORIA','HUMANIDADES','LINGÜÍSTICA']
    },
    {
        btnId:'btnLen',
        key:'lenguas',
        title:'LENGUAS',
        left:['LINGÜÍSTICA'],
        right:['IDIOMAS']
    }
];


    // Crea los modales dinámicamente
    configs.forEach(cfg => {
        // Crear contenedor principal
        const modal = document.createElement('div');
        modal.className = 'mat-modal';
        modal.id = 'modal-' + cfg.btnId;

        const box = document.createElement('div');
        box.className = 'mat-modal-box';

        // Barra de título
        const titleBar = document.createElement('div');
        titleBar.className = 'mat-modal-title';
        titleBar.style.background = `var(--chip-${cfg.key}, #6c757d)`;

        const titleText = document.createElement('div');
        titleText.textContent = cfg.title;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'mat-modal-close';
        closeBtn.setAttribute('aria-label','Cerrar');
        closeBtn.innerHTML = '&times;';

        titleBar.appendChild(titleText);
        titleBar.appendChild(closeBtn);

        // Contenido principal
        const content = document.createElement('div');
        content.className = 'mat-modal-content';

        // Columna izquierda
        const colLeft = document.createElement('div');
        colLeft.className = 'mat-modal-column';
        const ulLeft = document.createElement('ul');
        (cfg.left || []).forEach(it => {
            const li = document.createElement('li');
            li.textContent = it;
            ulLeft.appendChild(li);
        });
        colLeft.appendChild(ulLeft);

        // Columna derecha
        const colRight = document.createElement('div');
        colRight.className = 'mat-modal-column';
        const ulRight = document.createElement('ul');
        (cfg.right || []).forEach(it => {
            const li = document.createElement('li');
            li.textContent = it;
            ulRight.appendChild(li);
        });
        colRight.appendChild(ulRight);

        content.appendChild(colLeft);
        content.appendChild(colRight);

        box.appendChild(titleBar);
        box.appendChild(content);
        modal.appendChild(box);
        document.body.appendChild(modal);

        // Abrir modal al hacer clic en el botón
        const trigger = document.getElementById(cfg.btnId);
        if (trigger) {
            trigger.addEventListener('click', function(e){
                e.preventDefault();
                modal.classList.add('open');
                closeBtn.focus();
            });
        }

        // Cerrar modal
        closeBtn.addEventListener('click', () => modal.classList.remove('open'));
        modal.addEventListener('click', (ev) => {
            if (ev.target === modal) modal.classList.remove('open');
        });
        document.addEventListener('keydown', (ev) => {
            if (ev.key === 'Escape' && modal.classList.contains('open')) {
                modal.classList.remove('open');
            }
        });
    });
})();
