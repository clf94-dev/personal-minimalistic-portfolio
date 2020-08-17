const navSlideContact = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';

                document.getElementById('contact-me-intro').style.opacity = 1;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.3}s`;
                document.getElementById('contact-me-intro').style.opacity = 0.1;

            }
        });

        burger.classList.toggle('toggle');

    });


};


navSlideContact();