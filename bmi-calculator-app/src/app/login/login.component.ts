import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: { username: string, password: string } = { username: '', password: '' };

  onSubmit() {
    // Implement your login logic here
    console.log('Login form submitted:', this.formData);
  }
}
