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

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.12 }
);

revealElements.forEach(element => {
    observer.observe(element);
});


/* ================= GALLERY LIGHTBOX ================= */

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }
});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


/* ================= VISITOR COUNTER (NEW) ================= */

const visitorCountEl = document.getElementById("visitorCount");

// Use localStorage to persist count per browser
function getVisitorCount() {
    let count = localStorage.getItem("vya_visitor_count");

    if (!count) {
        // First visit — random base number (feels realistic)
        count = Math.floor(Math.random() * 500) + 1200;
        localStorage.setItem("vya_visitor_count", count);
    } else {
        // Increment on new session (once per day)
        const lastVisit = localStorage.getItem("vya_last_visit");
        const today = new Date().toDateString();

        if (lastVisit !== today) {
            count = parseInt(count) + Math.floor(Math.random() * 5) + 1;
            localStorage.setItem("vya_visitor_count", count);
            localStorage.setItem("vya_last_visit", today);
        }
    }

    return count;
}

// Animate count up
function animateCount(target) {
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));

    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        visitorCountEl.textContent = current.toLocaleString();
    }, 25);
}

const totalVisitors = getVisitorCount();
animateCount(totalVisitors);