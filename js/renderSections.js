import { createElement, createSafeLink, setText } from "./domHelpers.js";

function renderHero(data) {
  setText("hero-role", data.profile.role);
  setText("hero-title", `Hi, I am ${data.profile.name}.`);
  setText("hero-summary", data.profile.summary);

  const actions = document.getElementById("hero-actions");
  if (actions) {
    actions.append(
      createSafeLink("View Resume", data.profile.resumeUrl, "btn btn-primary"),
      createSafeLink("GitHub", data.profile.githubUrl, "btn btn-secondary")
    );
  }

  const metrics = document.getElementById("quick-metrics");
  data.metrics.forEach((item) => {
    const li = createElement("li", "metric-item");
    li.append(createElement("strong", "metric-value", item.value), createElement("span", "metric-label", item.label));
    metrics?.append(li);
  });

  const focusList = document.getElementById("focus-list");
  data.focus.forEach((point) => {
    const li = createElement("li", "focus-item", point);
    focusList?.append(li);
  });
}

function renderAbout(data) {
  const panel = document.getElementById("about-panel");
  if (panel) {
    panel.innerHTML = "";
    panel.append(createElement("h3", "", "My Approach"), createElement("p", "", data.about.intro), createElement("p", "", data.about.details));
  }

  const list = document.getElementById("expect-list");
  data.expectations.forEach((entry) => {
    list?.append(createElement("li", "", entry));
  });
}

function renderTimeline(listId, entries) {
  const list = document.getElementById(listId);
  entries.forEach((entry) => {
    const item = createElement("li", "timeline-item");

    const topRow = createElement("div", "timeline-top");
    topRow.append(createElement("h4", "", entry.title), createElement("span", "period", entry.period));

    item.append(topRow, createElement("p", "organization", entry.organization));

    const details = createElement("ul", "timeline-highlights");
    entry.highlights.forEach((point) => details.append(createElement("li", "", point)));

    item.append(details);
    list?.append(item);
  });
}

function renderProjects(data) {
  const grid = document.getElementById("projects-grid");
  data.projects.forEach((project) => {
    const card = createElement("article", "project-card");
    card.append(createElement("h3", "", project.name), createElement("p", "project-desc", project.description));

    const stack = createElement("ul", "stack-list");
    project.stack.forEach((tech) => stack.append(createElement("li", "", tech)));

    card.append(stack, createElement("p", "impact", project.impact));

    const links = createElement("div", "project-links");
    project.links.forEach((link) => links.append(createSafeLink(link.label, link.href, "text-link")));

    card.append(links);
    grid?.append(card);
  });
}

function renderSkills(data) {
  const toolbox = document.getElementById("toolbox-list");
  data.skills.toolbox.forEach((skill) => toolbox?.append(createElement("li", "chip", skill)));

  const strengths = document.getElementById("strengths-list");
  data.skills.strengths.forEach((skill) => strengths?.append(createElement("li", "chip", skill)));
}

function renderContact(data) {
  setText("contact-text", data.contact.text);

  const actions = document.getElementById("contact-actions");
  data.contact.cta.forEach((link) => actions?.append(createSafeLink(link.label, link.href, "btn btn-primary")));
}

function renderFooter(data) {
  const year = new Date().getFullYear();
  setText("footer-copy", `${year} ${data.profile.name} | Built for recruiters, teams, and collaborators.`);
}

export function renderPortfolio(data) {
  renderHero(data);
  renderAbout(data);
  renderTimeline("experience-list", data.experience);
  renderTimeline("education-list", data.education);
  renderProjects(data);
  renderSkills(data);
  renderContact(data);
  renderFooter(data);
}
