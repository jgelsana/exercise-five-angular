import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
    canActivate: [authGuard]
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [authGuard]
  },
  {
    path: 'blog/form',
    component: BlogFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'blog/form/:id',
    component: BlogFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'book/form',
    component: BookFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'book/form/:id',
    component: BookFormComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
