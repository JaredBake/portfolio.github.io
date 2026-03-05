export function setText(id, text) {
  const element = document.getElementById(id);
  if (!element) return;
  element.textContent = text;
}

export function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (typeof text === "string") element.textContent = text;
  return element;
}

export function isExternalUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function createSafeLink(label, href, className = "") {
  const link = document.createElement("a");
  link.href = href;
  link.className = className;
  link.textContent = label;

  if (isExternalUrl(href)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  return link;
}
