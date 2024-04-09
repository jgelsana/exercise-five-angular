import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {

  @Input() book: Book;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>;
  books: Observable<Book[]> | undefined;

  constructor(
    private router: Router
  ) {
    this.book = {} as Book;
  }

  onDeleteClick(id: string) {
    this.delete.emit(id);
  }

  onEditClick(id: string) {
    console.log('edit is clicked: ' + id)
    this.edit.emit(id);
    this.router.navigate(['book/form', id]);
  }

}
