import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="page-section">
      <h1>Home</h1>
      <p>
        This is the portfolio shell starter. Once you share your Figma design, this page can be
        mapped section-by-section.
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
