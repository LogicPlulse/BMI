import { Component } from '@angular/core';
import { BmiService } from '../services/bmi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bmi: number | null = null; // Initialize bmi property to null
  weight: number | null = null; // Property to store weight
  height: number | null = null; // Property to store height

  constructor(private bmiService: BmiService) { }

  calculateBMI() {
    // Ensure weight and height are valid numbers
    if (this.weight === null || this.height === null || isNaN(this.weight) || isNaN(this.height) || this.weight <= 0 || this.height <= 0) {
      console.error('Invalid weight or height');
      return; // Exit early if weight or height is invalid
    }

    // Calculate BMI using weight and height
    this.bmiService.calculateBmi(this.weight, this.height).subscribe(
      (response) => {
        // Extract the BMI value from the response object and assign it to the bmi variable
        this.bmi = response.bmi;
      },
      (error) => {
        console.error('Error calculating BMI:', error);
      }
    );
  }

  // Get the BMI value or provide a default value if bmi is null
  getBmiValue(): number {
    if (this.bmi === null) {
      console.error('BMI is null');
      return 0; // Provide a default value if bmi is null
    }
    return this.bmi;
  }
}
