import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    const { username, password } = this.loginForm.value;

    // Simulate login API call
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        alert('Login successful');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
      this.loading = false;
    }, 1500);
  }
}
