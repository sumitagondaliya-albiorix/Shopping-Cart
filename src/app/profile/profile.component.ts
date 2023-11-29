import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  [x: string]: any;
  profileForm!: FormGroup;
  isEditEnabled: Boolean = false;
  userData: any;

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  /**
   * Initializes the component and calls the necessary functions to set up the form and load user data.
   *
   * @return {void} This function does not return a value.
   */
  ngOnInit(): void {
    this.initForm();
    this.loadUserData();
  }

  /**
   * Loads user data from localStorage or service and assigns it to userData.
   *
   * @return {void} This function does not return anything.
   */
  loadUserData(): void {
    // Fetch user data from localStorage or service and assign it to userData
    this.userData = JSON.parse(localStorage.getItem('userProfile') || '{}');

    // Set the form values with user data if available
    if (this.userData) {
      this.profileForm.patchValue({
        firstName: this.userData.firstName || '',
        lastName: this.userData.lastName || '',
        email: this.userData.email || '',
      });
    }
  }

  /**
   * Initializes the form.
   *
   * @return {void}
   */
  initForm(): void {
    this.profileForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Toggles the edit mode of the profile form.
   *
   * @return {void} - This function doesn't return anything.
   */
  toggleEdit(): void {
    this.isEditEnabled = !this.isEditEnabled;
    if (this.isEditEnabled) {
      const { firstName, lastName, email } = this;
      this.profileForm.patchValue({ firstName, lastName, email });
    }
  }

  /**
   * Submits the form data and updates the stored users in the local storage.
   *
   * @return {void} This function does not return a value.
   */
  onSubmit(): void {
    if (this.profileForm.valid) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      let updateProfileData = {};

      let newArray = storedUsers.map((user: any) => {
        if (user.email === this.userData.email) {
          updateProfileData = {
            ...user,
            email: this.profileForm.value?.email,
            firstName: this.profileForm.value?.firstName,
            lastName: this.profileForm.value?.lastName,
          };
          return updateProfileData;
        }
        return user;
      });

      localStorage.setItem('users', JSON.stringify(newArray));
      localStorage.setItem('userProfile', JSON.stringify(updateProfileData));

      // After processing, toggle the edit mode
      this.toggleEdit();
    } else {
      // Handle form validation errors or display messages
    }
  }

  /**
   * Logs the user out by removing the userProfile from localStorage
   * and navigating to the login page.
   *
   * @return {void} No return value.
   */

  /**
   * Retrieves the value of the firstName control from the profileForm.
   *
   * @return {string} The value of the firstName control, or an empty string if the control is null.
   */
  get firstName(): string {
    const firstNameControl = this.profileForm.get('firstName');
    return firstNameControl ? firstNameControl.value : '';
  }

  /**
   * Get the last name value from the profile form.
   *
   * @return {string} The value of the last name field, or an empty string if the field is not found.
   */
  get lastName(): string {
    const lastNameControl = this.profileForm.get('lastName');
    return lastNameControl ? lastNameControl.value : '';
  }

  /**
   * Returns the value of the email control in the profile form.
   *
   * @return {string} The value of the email control, or an empty string if the email control does not exist.
   */
  get email(): string {
    const emailControl = this.profileForm.get('email');
    return emailControl ? emailControl.value : '';
  }
}
