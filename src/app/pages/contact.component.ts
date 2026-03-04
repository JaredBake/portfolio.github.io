import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="page-section">
      <h1>Contact</h1>
      <p>Place your contact form, socials, and call-to-action here when design is finalized.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
