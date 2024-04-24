import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  createUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.createUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.createUserForm.valid) {
      const userData: User = {
        username: this.createUserForm.value.username,
        password: this.createUserForm.value.password,
        email: this.createUserForm.value.email
      };

      this.userService.createUser(userData).subscribe(
        (user: User) => {
          console.log('User created successfully:', user);
          // Optionally, navigate to another page or perform any other action
        },
        (error) => {
          console.error('Error creating user:', error);
          // Handle error, display error message, etc.
        }
      );
    }
  }
}