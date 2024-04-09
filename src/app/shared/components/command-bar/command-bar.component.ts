import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../blog/services/blog.service';
import { BookService } from '../../../book/services/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css'
})
export class CommandBarComponent {
  
  dynamicLink: string = '';

  @Output() actionEmitter = new EventEmitter<Object>();
  @Output() deleteAll: EventEmitter<void> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private bookService: BookService,
    private http: HttpClient
  ) { }

getFormRoute(): string {
  const currentRoute = this.router.url;
  if(currentRoute.includes('blog')) {
    return '/blog/form';
  } else if(currentRoute.includes('book')) {
    return '/book/form'
  }
  return '/blog'
}

  emitDeleteAll() {
    this.deleteAll.emit();
  }

}
