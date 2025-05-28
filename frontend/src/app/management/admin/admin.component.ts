import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Add to the top of AdminComponent class
  showModal: boolean = false;

  newUser = {
    username: '',
    email: '',
    name: '',
    password: '',
    role: 'student'
  };

  roles: string[] = ['admin', 'principal', 'faculty', 'student'];

  submitError: string | null = null;
  submitSuccess: string | null = null;

  openModal(): void {
    this.showModal = true;
    this.submitError = null;
    this.submitSuccess = null;
    this.newUser = {
      username: '',
      email: '',
      name: '',
      password: '',
      role: 'student'
    };
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitUser(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any>(
      'http://localhost:5028/api/user/register',
      this.newUser,
      { headers: headers }
    ).subscribe({
      next: () => {
        this.submitSuccess = 'User registered successfully.';
        this.closeModal();
      },
      error: (err) => {
        this.submitError = err.error?.message || 'User registration failed.';
      }
    });

    this.fetchAllUsers();
  }

  user: any = null;
  error: string | null = null;
  addUserButton: boolean = true;

  constructor(private http: HttpClient, private router: Router) { }

  allUsers: any[] = [];

  fetchAllUsers(): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.get<any[]>('http://localhost:5028/api/user/all', { headers }).subscribe({
      next: (response) => {
        this.allUsers = response.map(user => {
          const { id, password, ...rest } = user;
          return rest;
        });
      },
      error: (err) => {
        console.error('Failed to load users:', err);
      }
    });
  }


  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.addUserButton = false;
      this.error = 'You are not logged in.';
      return;
    }

    this.fetchAllUsers();

    try {
      const decoded: any = jwtDecode(token);
      console.log('Decoded Token:', decoded);

      const username = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      if (!username) {
        this.error = 'Username not found in token.';
        return;
      }

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post<any>(
        'http://localhost:5028/api/user/profile',
        { username: username },
        { headers: headers }
      ).subscribe({
        next: (response) => {
          this.user = response;
        },
        error: (err) => {
          this.error = err.error?.message || 'Failed to fetch user profile.';
        }
      });

    } catch (e) {
      this.error = 'Invalid token format.';
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.addUserButton = false;
    this.user = null;
    this.error = 'You are not logged in.';
    alert("You have been logged out.");
    this.router.navigate(['management/login']);
  }


}
