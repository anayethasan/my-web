let menuIcon = document.querySelector('#menu-icon'); // Corrected selector
let navbar = document.querySelector('.navbar'); // Corrected spelling

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Corrected spelling
        let height = sec.offsetHeight;
        let id = sec.id; // Corrected getting id attribute

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active'); // Corrected selector and added class name as string
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
