import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BlogItemComponent,
    BlogListComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BlogModule { }
