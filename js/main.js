import { portfolioData } from "../data/portfolioData.js";
import { renderPortfolio } from "./renderSections.js";

function applyBranding(data) {
  document.title = `Portfolio | ${data.profile.name}`;

  const brandElement = document.querySelector(".brand");
  if (brandElement) {
    brandElement.textContent = data.profile.initials;
    brandElement.setAttribute("aria-label", `${data.profile.name} home`);
  }
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    elements.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupSmoothNavigation() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function init() {
  applyBranding(portfolioData);
  renderPortfolio(portfolioData);
  setupRevealAnimations();
  setupSmoothNavigation();
}

init();
