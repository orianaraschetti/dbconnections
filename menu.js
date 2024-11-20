// Optional JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Simple form validation
    const contactForm = document.querySelector('#contacto form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const mensaje = contactForm.querySelector('textarea').value;

        if (nombre && email && mensaje) {
            alert('Mensaje enviado con éxito!');
            contactForm.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('header nav ul');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
