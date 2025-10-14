document.addEventListener('DOMContentLoaded', function () {
    // Función auxiliar para actualizar la propiedad page-break-after
    function updatePageBreak(container, isOpen, isLast) {
        if (isLast) {
            // El último contenedor nunca debe tener salto de página
            container.style.pageBreakAfter = 'auto';
        } else if (isOpen) {
            // Si el acordeón está abierto, forzar salto de página
            container.style.pageBreakAfter = 'always';
        } else {
            // Si está cerrado, evitar salto de página
            container.style.pageBreakAfter = 'avoid';
        }
    }

    // Obtener todos los contenedores principales
    const containers = document.querySelectorAll('.report-gp-container');

    // Parent accordion
    document.querySelectorAll('.accordion-header').forEach(function (btn) {
        const body = btn.nextElementSibling;
        const container = btn.closest('.report-gp-container');
        const isLast = container === containers[containers.length - 1];
        const isOpen = body.classList.contains('open');

        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        // Estado inicial
        updatePageBreak(container, isOpen, isLast);

        btn.addEventListener('click', function () {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            const newState = !expanded;
            btn.setAttribute('aria-expanded', newState);
            body.classList.toggle('open');

            // Actualizar propiedad page-break-after según el nuevo estado
            updatePageBreak(container, newState, isLast);
        });
    });

    // Child accordion (sin cambios)
    document.querySelectorAll('.accordion-child-header').forEach(function (btn) {
        const body = btn.nextElementSibling;
        const isOpen = body.classList.contains('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        btn.addEventListener('click', function () {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            body.classList.toggle('open');
        });
    });
});
