import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { Router } from 'express';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: 'form',
    component: BlogFormComponent
  },
  {
    path: 'form/:id',
    component: BlogFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
