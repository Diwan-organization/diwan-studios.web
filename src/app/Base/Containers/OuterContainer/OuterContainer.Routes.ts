import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterContainer } from './OuterContainer';

export const routes: Routes = [
  {
    path: '',
    component: OuterContainer,
    children: [
      {
        path: 'forget-password',
        loadComponent: () =>
          import('../../../Features/Home/Home').then((m) => m.HomeComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuterContainerRoutes {}
