import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TextInput } from '../../../shared/components/input-fields/text-input/text-input';
import { PasswordInput } from '../../../shared/components/input-fields/password-input/password-input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequest } from '../../../core/api-client';
import { BaseButton } from '../../../shared/components/base-button/base-button';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-sign-up',
  imports: [CardModule, TextInput, PasswordInput, ReactiveFormsModule, BaseButton, DividerModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {

  private formBuilder = inject(FormBuilder);
  private authService = inject(Auth);

  signUpForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: [, Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  registerRequest: RegisterRequest = {
    username: '',
    password: '',
    email: '',
  }

  onSignUp() {
    debugger;
    this.registerRequest = this.signUpForm.value as RegisterRequest;
    if (this.signUpForm.valid) {
      this.authService.register(this.registerRequest);
    }
    this.signUpForm.markAllAsTouched();
  }
}
