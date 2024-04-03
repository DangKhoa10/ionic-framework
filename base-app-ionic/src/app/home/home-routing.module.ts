import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: '', redirectTo: 'radio', pathMatch: 'full' },
      {
        path: 'search',
        loadComponent: () =>
          import('./components/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./components/radio/radio.component').then(
            (m) => m.RadioComponent
          ),
      },
      {
        path: 'library',
        loadComponent: () =>
          import('./components/library/library.component').then(
            (m) => m.LibraryComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
