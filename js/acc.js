
                    document.addEventListener('DOMContentLoaded', function () {
                        // Parent accordion
                        document.querySelectorAll('.accordion-header').forEach(function (btn) {
                            // Set initial state based on .open class
                            const body = btn.nextElementSibling;
                            const isOpen = body.classList.contains('open');
                            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                            btn.addEventListener('click', function () {
                                const expanded = btn.getAttribute('aria-expanded') === 'true';
                                btn.setAttribute('aria-expanded', !expanded);
                                body.classList.toggle('open');
                            });
                        });

                        // Child accordion
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