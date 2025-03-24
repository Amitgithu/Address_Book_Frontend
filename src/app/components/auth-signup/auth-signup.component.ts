import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatError } from '@angular/material/form-field'; // ✅ Check if it's needed


@Component({
  selector: 'app-auth-signup',
  standalone: true,
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // ✅ Import ReactiveFormsModule
})
export class AuthSignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      console.log('Signup Successful', this.signupForm.value);
    }
  }
}
