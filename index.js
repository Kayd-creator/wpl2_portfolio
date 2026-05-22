console.log('Happy developing ✨')

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobile = document.querySelector('.nav-mobile');
if (toggle && mobile) {
    toggle.addEventListener('click', () => {
        mobile.classList.toggle('open');
        toggle.textContent = mobile.classList.contains('open') ? '×' : '☰';
    });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active nav link
const path = location.pathname.split('/').pop() || 'Home.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
});