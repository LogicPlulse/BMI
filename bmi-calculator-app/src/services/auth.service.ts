import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(user: { username: string, password: string }) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: { username: string, password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, user);
  }
}
