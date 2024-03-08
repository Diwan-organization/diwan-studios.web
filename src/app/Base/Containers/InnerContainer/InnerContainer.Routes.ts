import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerContainer } from './InnerContainer';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';

export const routes: Routes = [
  {
    path: '',
    component: InnerContainer,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@App/Features/Home/Home').then((c) => c.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@App/Features/About/About').then((c) => c.AboutComponent),
      },
      {
        path: 'contactus',
        loadComponent: () =>
          import('@App/Features/Contact/Contact').then(
            (c) => c.ContactComponent
          ),
      },
      {
        path: 'artworks',
        loadComponent: () =>
          import('@App/Features/Art/Art').then((c) => c.ArtComponent),
      },
      {
        path: 'artworks/:category/:project',
        loadComponent: () =>
          import('@App/Features/Art/Art').then((c) => c.ArtComponent),
      },
      {
        path: 'artworks/:category',
        loadComponent: () =>
          import('@App/Features/Art/Art').then((c) => c.ArtComponent),
      },
      {
        path: 'deft',
        loadComponent: () =>
          import('@App/Features/Deft/Deft').then((c) => c.DeftComponent),
      },
      {
        path: 'deft/:category/:project',
        loadComponent: () =>
          import('@App/Features/Deft/Deft').then((c) => c.DeftComponent),
      },
      {
        path: 'deft/:category',
        loadComponent: () =>
          import('@App/Features/Deft/Deft').then((c) => c.DeftComponent),
      },
      {
        path: 'careers',
        loadComponent: () =>
          import('@App/Features/Careers/Careers').then((c) => c.CareersComponent),
      },
      {
        path: 'careers/update',
        loadComponent: () =>
          import('@App/Features/Careers/UpdateCareers/UpdateCareers').then((c) => c.CareerUpdateComponent),
      },
      {
        path: '**',
        redirectTo: RoutePaths.Default,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnerContainerRoutes { }
