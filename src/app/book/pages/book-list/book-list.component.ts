import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.books$ = this.bookService.getBooks();
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe();
    this.fetchBooks();
  }

  deleteAllBooks() {
    this.bookService.deleteAllBooks().subscribe(() => {this.fetchBooks()});
  }

}
