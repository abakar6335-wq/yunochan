// ===== Header shrink =====
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ===== Burger menu =====
const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

if (burger) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// ===== Scroll button =====
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ===== Animate cards on scroll =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    observer.observe(card);
});

// ===== Form validation =====
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add("error");
                valid = false;
            } else {
                input.classList.remove("error");
            }
        });

        if (!valid) return;

        alert("Сообщение отправлено.");
        form.reset();
    });
}