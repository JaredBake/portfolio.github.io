# Portfolio

Single-page portfolio website designed for GitHub Pages.

## What Is Included

- Professional dark-theme layout with blue accents
- Sections for About, Resume, Projects, Skills, and Contact
- Data-driven content model for high cohesion and loose coupling
- Accessible semantic HTML, keyboard focus states, and reduced-motion support
- Security-minded defaults for static hosting (CSP, safe external links)

## Project Structure

```text
.
|- index.html
|- css/
|  |- styles.css
|- js/
|  |- main.js
|  |- renderSections.js
|  |- domHelpers.js
|- data/
|  |- portfolioData.js
|- assets/
|  |- resume.pdf (add your resume here)
```

## Edit Your Content

Update `data/portfolioData.js`:

- `profile`: your name, title, links, location
- `experience` and `education`: resume entries
- `projects`: portfolio projects and links
- `skills`: technical stack and strengths
- `contact`: final call-to-action details

## Local Preview

Open `index.html` directly in a browser, or use a local static server.

## Deploy To GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub: `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select your default branch and root folder (`/`).
5. Save and wait for deployment.

## Security Notes

- No auth/session logic is included (not needed for a public portfolio).
- External links open with `noopener noreferrer`.
- `Content-Security-Policy` is set in `index.html`.
- Keep all third-party scripts disabled unless necessary.

## Next Step: Figma Alignment

Share your Figma file URL and target frame/node ID so the layout can be aligned to your exact design while keeping current UX/HCI best practices.