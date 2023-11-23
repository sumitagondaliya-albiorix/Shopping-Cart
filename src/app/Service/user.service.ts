import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  /**
+   * Constructs a new instance of the class.
+   *
+   * @param {type} paramName - description of parameter
+   * @return {type} description of return value
+   */

  constructor() {
    this.loadUsers();
  }

  /**
   * Loads the users from local storage.
   *
   * @private
   * @return {void} - No return value
   */
  private loadUsers(): void {
    const savedUsers = localStorage.getItem('users') || '{}';
    this.users = savedUsers ? JSON.parse(savedUsers) : [];
  }

  /**
   * Retrieves all users.
   *
   * @return {User[]} The array of all users.
   */
  getAllUsers(): User[] {
    return this.users;
  }

  /**
   * Updates the user in the list of users.
   *
   * @param {User} user - The user object to be updated.
   * @returns {void} - This function does not return anything.
   */
  updateUser(user: User): void {
    // Find the index of the user in the list
    const index = this.users.findIndex((u) => u.id === user.id);

    // If the user exists in the list
    if (index !== -1) {
      // Update the user object at the found index
      this.users[index] = user;
      // Save the updated list of users
      this.saveUsers();
    }
  }

  /**
   * Saves the users to the local storage.
   */
  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
