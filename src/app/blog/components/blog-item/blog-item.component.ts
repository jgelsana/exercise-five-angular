import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
  @Input() blog: Blog;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>;
  blogs: Observable<Blog[]> | undefined;

  constructor(
    private router: Router
  ) {
    this.blog = {} as Blog;
  }

  onDeleteClick(id: string) {
    this.delete.emit(id);
  }

  onEditClick(id: string) {
    console.log('edit is clicked: ' + id)
    this.edit.emit(id);
    this.router.navigate(['blog/form', id]);
  }
}
