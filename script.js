// Scroll to Top
document.querySelector('.scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Social Media Icon Pulse Animation
const socialIcons = document.querySelectorAll(".social-icons a img");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseover", () => {
    icon.classList.add("pulse");
  });
  icon.addEventListener("mouseout", () => {
    icon.classList.remove("pulse");
  });
});
