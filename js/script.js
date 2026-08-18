
/* =========================================================
   RDH TECH
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-active");

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
   ========================================================= */

const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-active");

    });

});


/* =========================================================
   HEADER AO ROLAR A PÁGINA
   ========================================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ANIMAÇÃO DE ENTRADA
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".feature-card, .service-card, .section-header, .cta-box"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================================
   ANO AUTOMÁTICO DO FOOTER
   ========================================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} RDH Tech. Todos os direitos reservados.`;

}

