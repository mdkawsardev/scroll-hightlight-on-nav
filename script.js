window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navbarLinks = Array.from(document.querySelectorAll('.link'));

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - window.innerHeight / 3;
        if ((window.scrollY >= sectionTop) && (window.scrollY < sectionTop + section.offsetHeight)) {
            currentSection = section.getAttribute('id');
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active-link');
        }
    });
});