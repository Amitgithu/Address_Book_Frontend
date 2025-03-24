import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // ✅ Import MatCardModule

@Component({
  selector: 'app-auth-login',
  standalone: true,
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatError, MatCardModule] // ✅ Add MatCardModule
})
export class AuthLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Successful', this.loginForm.value);
    }
  }
}
