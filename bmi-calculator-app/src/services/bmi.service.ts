import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  calculateBmi(weight: number, height: number) {
    return this.http.post<{ bmi: number }>(`${this.apiUrl}/bmi`, { weight, height });
  }
}
