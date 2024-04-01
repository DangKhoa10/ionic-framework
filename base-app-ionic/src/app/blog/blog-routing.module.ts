import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPage } from './blog.page';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPage,
  },
  {
    path: ':id',
    component: BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
