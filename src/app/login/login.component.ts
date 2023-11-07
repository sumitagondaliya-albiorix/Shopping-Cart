import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login(loginForm: any) {
    const username = loginForm.username;
    const password = loginForm.password;
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: any) => u.username === username && u.password === password);
   console.log("username.user","password.user");
    if (user) {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  }
}
