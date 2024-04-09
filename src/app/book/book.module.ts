import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BookItemComponent,
    BookFormComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BookModule { }
