// Carrusel de "Quiénes somos"
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentIndex = 0;

    // Posicionar slides
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    function moveToSlide(index) {
        track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
        currentIndex = index;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Galería interactiva: mostrar overlay al hacer clic en móvil
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        card.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const overlay = this.querySelector('.card-overlay');
                overlay.style.transform = overlay.style.transform === 'translateY(0px)' ? 'translateY(100%)' : 'translateY(0)';
            }
        });
    });

    // Formulario de contacto (simulación)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Te responderemos pronto.');
            this.reset();
        });
    }

    // Ajuste de altura en móviles para 100vh real
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH);
});