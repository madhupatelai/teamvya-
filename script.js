/* ================= MOBILE MENU ================= */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= SCROLL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ================= GALLERY LIGHTBOX ================= */

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* CLOSE */

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});


/* CLICK OUTSIDE */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


/* ESC KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});