import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from '../book/book-routing.module';
import { BlogRoutingModule } from '../blog/blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CommandBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BookRoutingModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, CommandBarComponent]
})
export class SharedModule { }
