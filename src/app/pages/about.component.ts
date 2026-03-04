import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="page-section">
      <h1>About</h1>
      <p>Add your personal bio, experience summary, and skills from your Figma content.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
