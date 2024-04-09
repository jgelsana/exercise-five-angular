import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getBlogs = (): Observable<Blog[]> => {
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`)
  }

  getBlogById(id: string): Observable<Object> {
    return this.http.get(`${this.serverUrl}/blogs/${id}`)
  }

  addBlog(blog: Blog): Observable<any> {
    return this.http.post(`${this.serverUrl}/blogs`, blog).pipe(
      tap(response => {
        console.log('Adding blog: ', response)
      })
    );
  }

  updateBlog(blogId: string, updatedBlog: Blog) {
    return this.http.put(`${this.serverUrl}/blogs/${blogId}`, updatedBlog).pipe(
      tap(response => {
        console.log('Updating: ', response)
      })
    )
  }

  deleteBlog(id: string) {
    return this.http.delete(`${this.serverUrl}/blogs/${id}`).pipe(
      tap(response => {
        console.log('Deleting: ', response)
      })
    )
  }

  deleteAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.serverUrl}/blogs`).pipe(
      tap(blogs => {
        blogs.forEach(blog => {
          this.http.delete<void>(`${this.serverUrl}/blogs/${blog.id}`).subscribe(
            error => console.error(`Error deleting blog with ID ${blog.id}:`, error)
          )
        }
      )
      })
    )
  }
  
}
