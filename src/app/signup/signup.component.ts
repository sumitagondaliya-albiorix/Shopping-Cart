import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup(signupForm: any) {
    // Get form values
    const firstName = signupForm.firstName;
    const lastName = signupForm.lastName;
    const email = signupForm.email;
    const password = signupForm.password;
    const confirmPassword = signupForm.confirmPassword;

    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match.');
      return;
    }
    // Save user data to local storage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    storedUsers.push({ firstName, lastName, email, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Signup successful');
  }
}





 
  

    

