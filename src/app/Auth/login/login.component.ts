import { Component } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private router: Router) {}

  /**
   * Logs in a user using the provided login form.
   *
   * @return {void} This function does not return anything.
   */
  login(): void {
    const username = this.username;
    const password = this.password;

    const storedUsers: User[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );
    const user = storedUsers.find(
      (u: User) => u.email === username && u.password === password
    );

    if (user) {
      this.loginMessage = 'Login successful';
      localStorage.setItem('userProfile', JSON.stringify(user));
      this.router.navigate(['/products']);
    } else {
      this.loginMessage = 'Login failed. Please check your credentials.';
    }
  }
}
