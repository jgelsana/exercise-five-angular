import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getBooks = (): Observable<Book[]> => {
    return this.http.get<Book[]>(`${this.serverUrl}/books`)
  }

  getBookById(id: string): Observable<Object> {
    return this.http.get(`${this.serverUrl}/books/${id}`)
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(`${this.serverUrl}/books`, book).pipe(
      tap(response => {
        console.log('Adding book: ', response)
      })
    );
  }

  updateBook(bookId: string, updatedBook: Book) {
    return this.http.put(`${this.serverUrl}/books/${bookId}`, updatedBook).pipe(
      tap(response => {
        console.log('Updating: ', response)
      })
    )
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.serverUrl}/books/${id}`).pipe(
      tap(response => {
        console.log('Deleting: ', response)
      })
    )
  }

  deleteAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.serverUrl}/books`).pipe(
      tap(books => {
        books.forEach(book => {
          this.http.delete<void>(`${this.serverUrl}/books/${book.id}`).subscribe(
            (data) => {data},
            error => console.error(`Error deleting book with ID ${book.id}:`, error)
          )
        }
      )
      })
    )
  }
}
