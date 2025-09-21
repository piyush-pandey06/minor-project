const links = document.querySelectorAll('.nav-links a');
const pages = document.querySelectorAll('.page');

function setActive(pageId) {
    pages.forEach(p => p.classList.remove('active-page'));
    document.querySelector(pageId).classList.add('active-page');

    links.forEach(l => l.classList.remove('active'));
    document.querySelector(`.nav-links a[href="${pageId}"]`).classList.add('active');
}

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href');
        setActive(target);
    });
});

window.addEventListener('load', () => {
    const hash = window.location.hash || '#home';
    setActive(hash);
});