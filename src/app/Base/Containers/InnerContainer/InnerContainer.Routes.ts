import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '@App/Common/Guards/Auth.Guard';
// import { RoleGuard } from '@App/Common/Guards/Role.Guard';
import { InnerContainer } from './InnerContainer';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';

export const routes: Routes = [
  {
    path: '',
    component: InnerContainer,
    // canActivate: [AuthGuard],
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
        path: 'deft',
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
      // {
      // 	path: 'course/:id',
      // 	loadComponent: () => import('@App/Features/CoursesList/Course/Course').then((c) => c.CourseComponent)
      // },
      // {
      // 	path: 'feedback',
      // 	loadComponent: () => import('@App/Features/Feedback/Feedback').then((c) => c.FeedbackComponent)
      // },

      // {
      // 	path: 'founder',
      // 	loadComponent: () => import('@App/Features/Founder/Founder').then((c) => c.FounderComponent)
      // },
      // {
      // 	canActivate: [AuthGuard],
      // 	path: 'profile',
      // 	loadComponent: () => import('@App/Features/Profile/Profile').then((c) => c.ProfileComponent)
      // },
      // {
      // 	path: 'unauthorized',
      // 	loadComponent: () =>
      // 		import('@App/Base/Containers/InnerContainer/Components/UnAuthorized/UnAuthorized').then((c) => c.UnAuthorizedComponent)
      // },
      // { path: '', redirectTo: 'RoutePaths.Home', pathMatch: 'full' },
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
