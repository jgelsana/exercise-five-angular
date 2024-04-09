import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.serverUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverUrl}/users?email=${email}`);
  }
}
