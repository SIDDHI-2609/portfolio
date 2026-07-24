/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Web Applications",
    "Android Apps",
    "Interactive Websites",
    "Digital Experiences"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}


typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   DARK/LIGHT THEME
========================= */

const themeToggle = document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";

    cursor.style.top = event.clientY + "px";

});


document.querySelectorAll("a, button, .project-card, .skill-card")
.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "40px";

        cursor.style.height = "40px";

    });


    element.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";

        cursor.style.height = "20px";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document.querySelectorAll(
    ".section, .project-card, .skill-card, .timeline-item"
)
.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active");

        }

    });

});