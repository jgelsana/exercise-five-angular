import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogs$: Observable<Blog[]> | undefined;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.blogs$ = this.blogService.getBlogs();
  }

  deleteBlog(id: string) {
    this.blogService.deleteBlog(id).subscribe();
    this.fetchBlogs();
  }

  deleteAllBlogs() {
    this.blogService.deleteAllBlogs().subscribe(() => {this.fetchBlogs()});
  }
}
