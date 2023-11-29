import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  signupMessage: string = '';

  constructor(private router: Router) {}

  /**
   * Registers a new user.
   *
   * @param {any} signupForm - the signup form data
   * @return {void} the function does not return anything
   */
  register(signupForm: any): void {
    const { firstName, lastName, email, password, confirmPassword } =
      signupForm.value;

    if (password !== confirmPassword) {
      this.signupMessage = 'Passwords do not match. Please re-enter.';
      return;
    }

    const newUser: User = { firstName, lastName, email, password };

    const storedUsers: User[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );
    const existingUser = storedUsers.find(
      (user: User) => user.email === newUser.email
    );

    if (existingUser) {
      this.signupMessage =
        'Email address already exists. Please use another one.';
    } else {
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      localStorage.setItem('userProfile', JSON.stringify(newUser));
      this.signupMessage = 'Registration successful!';

      // Optionally, you can navigate to a login page after successful signup
      this.router.navigate(['/products']);
    }
  }
}
