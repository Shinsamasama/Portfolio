const thumbnails = document.querySelectorAll('.work-img-wrapping img');

const bigImg = document.querySelector('.big-img');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        bigImg.src = thumbnail.src;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const revealSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };

    revealSection();

    window.addEventListener('scroll', revealSection);
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    const navLinks = document.querySelectorAll(".nav-list a");

    // 各リンクにクリックイベントを設定
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
        navList.classList.remove("open");
        menuOverlay.classList.remove("open");
        document.body.classList.remove("menu-open");
    });
    
});})