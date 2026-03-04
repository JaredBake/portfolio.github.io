import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section class="page-section">
      <h1>Projects</h1>
      <p>Use this route for featured projects, case studies, and links to live demos or repos.</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {}
