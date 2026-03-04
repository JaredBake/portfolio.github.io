import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>

    <header class="site-header" aria-label="Primary">
      <div class="shell-container nav-row">
        <a class="brand" routerLink="/" aria-label="Portfolio home">Portfolio</a>
        <nav aria-label="Main navigation">
          <ul class="nav-links">
            <li>
              <a routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active-link"
                >Home</a
              >
            </li>
            <li><a routerLink="/about" routerLinkActive="active-link">About</a></li>
            <li><a routerLink="/projects" routerLinkActive="active-link">Projects</a></li>
            <li><a routerLink="/contact" routerLinkActive="active-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main-content" class="shell-container page-content">
      <router-outlet />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioShellComponent {}
