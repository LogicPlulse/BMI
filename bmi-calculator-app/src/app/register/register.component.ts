import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  formData: { username: string, password: string } = { username: '', password: '' };

  onSubmit() {
    // Implement your registration logic here
    console.log('Registration form submitted:', this.formData);
  }
}
