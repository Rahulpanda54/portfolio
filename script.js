// Typing animation for hero tagline
const phrases = [
  "Problem Solver • Java Developer",
  "DSA Enthusiast",
  "Building backend & web projects",
  "400+ problems solved"
];
let tIndex = 0, cIndex = 0, forward = true;
const typingEl = document.getElementById("typing");

function typeLoop() {
  const current = phrases[tIndex];
  if (forward) {
    cIndex++;
    if (cIndex > current.length) {
      forward = false;
      setTimeout(typeLoop, 900);
      return;
    }
  } else {
    cIndex--;
    if (cIndex < 0) {
      forward = true;
      tIndex = (tIndex + 1) % phrases.length;
      setTimeout(typeLoop, 200);
      return;
    }
  }
  typingEl.textContent = current.substring(0, cIndex);
  setTimeout(typeLoop, forward ? 80 : 40);
}
document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Simple nav toggle for small screens
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Contact form handler (frontend only)
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Replace with actual backend/form provider integration
  alert(`Thanks ${name}! This is a demo form. To enable real messages, configure a backend or a form service.`);
  e.target.reset();
}

// Smooth scroll: (already handled by CSS) - improve offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
    }
  });
});
