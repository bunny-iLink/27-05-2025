import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient, HttpClient } from '@angular/common/http';  // <-- Added HttpClient here
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Make sure you add this for standalone component
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
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

    this.http.post<any>('http://localhost:5028/api/user/login', { username, password })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);

          if (res.role === 'admin') {
            this.router.navigate(['/management/admin']);
          } else if (res.role === 'principal') {
            this.router.navigate(['/principal']);
          } else if (res.role === 'teacher') {
            this.router.navigate(['/teacher']);
          } else if (res.role === 'student') {
            this.router.navigate(['/student']);
          }
          else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Login failed. Please try again.';
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
