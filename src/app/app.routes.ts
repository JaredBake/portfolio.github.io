import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/portfolio-shell.component').then((module) => module.PortfolioShellComponent),
		children: [
			{
				path: '',
				pathMatch: 'full',
				loadComponent: () => import('./pages/home.component').then((module) => module.HomeComponent),
			},
			{
				path: 'about',
				loadComponent: () => import('./pages/about.component').then((module) => module.AboutComponent),
			},
			{
				path: 'projects',
				loadComponent: () =>
					import('./pages/projects.component').then((module) => module.ProjectsComponent),
			},
			{
				path: 'contact',
				loadComponent: () => import('./pages/contact.component').then((module) => module.ContactComponent),
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];
