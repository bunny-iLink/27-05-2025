import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  user: any = null;
  error: string | null = null;
  addUserButton: boolean = true;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      this.addUserButton = false;
      this.error = 'You are not logged in.';
      return;
    }

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
    this.user = null;
    this.addUserButton = false;
    this.error = 'You are not logged in.';
    alert("You have been logged out.");
    this.router.navigate(['management/login']);
  }
}
