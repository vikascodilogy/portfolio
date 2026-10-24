/* ============================================================
   Vikas Gupta — Portfolio interactions
   ============================================================ */

/* ---------- 1. Typing effect ---------- */
const typedEl = document.getElementById("typed");
const roles = ["Data Analyst", "AI/ML Learner", "SQL Developer", "YouTube Creator"];
let roleIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
  const word = roles[roleIdx];
  typedEl.textContent = word.slice(0, charIdx);

  let delay = deleting ? 45 : 95;

  if (!deleting && charIdx === word.length) {
    delay = 1800; // pause at full word
    deleting = true;
  } else if (deleting && charIdx === 0) {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    delay = 400;
  } else {
    charIdx += deleting ? -1 : 1;
  }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ---------- 2. Navbar scroll state + progress bar ---------- */
const navbar = document.getElementById("navbar");
const progressBar = document.getElementById("scroll-progress");
const toTopBtn = document.getElementById("to-top");

function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 60);

  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";

  toTopBtn.classList.toggle("show", y > 520);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- 3. Mobile menu ---------- */
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", String(open));
  iconOpen.classList.toggle("hidden", open);
  iconClose.classList.toggle("hidden", !open);
}

menuBtn.addEventListener("click", () => setMenu(mobileMenu.classList.contains("hidden")));

mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => setMenu(false))
);

/* ---------- 4. Active nav link highlighting ---------- */
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === id));
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));

/* ---------- 5. Reveal on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- 6. Animated stat counters ---------- */
const counters = document.querySelectorAll(".stat-num");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counterObserver.unobserve(el);

      const target = Number(el.dataset.target) || 0;
      const suffix = el.dataset.suffix || "";
      const duration = 1500;
      const start = performance.now();

      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = Math.floor(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => counterObserver.observe(c));

/* ---------- 7. Contact form ---------- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("cf-name");
    const email = document.getElementById("cf-email");
    const message = document.getElementById("cf-message");

    let valid = true;
    [name, email, message].forEach((f) => f.classList.remove("form-error"));

    if (name.value.trim().length < 2) { name.classList.add("form-error"); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.classList.add("form-error"); valid = false; }
    if (message.value.trim().length < 10) { message.classList.add("form-error"); valid = false; }

    if (!valid) {
      showToast("Please fill all fields correctly.", "error");
      return;
    }

    // Simulate a successful send.
    // To wire a real backend (e.g. FormSubmit / Netlify Forms), point this
    // form's "action" to your endpoint and remove the preventDefault above.
    showToast("Message sent! I'll get back to you soon. 🚀", "success");
    contactForm.reset();
  });

  contactForm.querySelectorAll(".form-input").forEach((f) =>
    f.addEventListener("input", () => f.classList.remove("form-error"))
  );
}

/* ---------- 8. Toast helper ---------- */
let toastTimer;
function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast " + (type === "success" ? "success" : "");
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4000);
}

/* ---------- 9. Back to top ---------- */
if (toTopBtn) {
  toTopBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

/* ---------- 10. Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

