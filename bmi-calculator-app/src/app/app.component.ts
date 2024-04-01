import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'bmi-calculator-app';
  name: string = '';
  age: number = 0;
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;

  constructor(private http: HttpClient) { }

  calculateBMI() {
    const userData = {
      name: this.name,
      age: this.age,
      weight: this.weight,
      height: this.height
    };

  }
}
