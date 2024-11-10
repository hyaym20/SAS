const scroll_indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", function () {
  const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
  const currentScrollHeight = (window.scrollY / maxScrollHeight) * 100;
  scroll_indicator.style.width = `${currentScrollHeight}%`;
});

/* Navbar Toggle */
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* ScrollReveal Animations */
window.sr = ScrollReveal({
  reset: true,
});

function revealElement(selector, duration, origin, distance, delay = 0) {
  sr.reveal(selector, {
    duration: duration,
    origin: origin,
    distance: distance,
    delay: delay,
  });
}

// Usage of reveal function
revealElement(".hero .intro", 2000, "left", "200px");
revealElement(".hero .image", 2000, "right", "200px");
revealElement(".section .intro", 2000, "top", "200px");
revealElement(".section .img", 2000, "bottom", "200px", 200);
