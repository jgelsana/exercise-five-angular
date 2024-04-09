import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { Router } from 'express';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'form',
    component: BookFormComponent
  },
  {
    path: 'form/:id',
    component: BookFormComponent
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
export class BookRoutingModule { }
