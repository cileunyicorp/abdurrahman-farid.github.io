// 1. Menutup Menu Mobile Otomatis saat Link Diklik
const menuCheckbox = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Jika checkbox dicentang (menu terbuka), maka hilangkan centangnya
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
        }
    });
});

// 2. Animasi Muncul saat di-Scroll (Scroll Reveal)
// Kita menggunakan Intersection Observer API bawaan browser
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Elemen akan muncul saat 15% bagiannya terlihat di layar
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
            // Hapus baris di bawah ini jika ingin animasi berulang saat scroll naik-turun
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Mencari semua elemen yang memiliki class 'hidden-element'
const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Efek Navbar Berubah Saat Di-scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
