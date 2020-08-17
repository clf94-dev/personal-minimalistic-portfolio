const navSlideProjectPage = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';

                document.getElementById('img-intro').style.opacity = 1;
                document.getElementById('project-info').style.opacity = 1;
                document.body.style.overflowY = "visible";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.3}s`;
                document.getElementById('img-intro').style.opacity = 0.1;
                document.getElementById('project-info').style.opacity = 0.1;
                document.body.style.overflowY = "hidden";

            }
        });

        burger.classList.toggle('toggle');

    });


};

navSlideProjectPage();