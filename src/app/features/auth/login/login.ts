import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TextInput } from '../../../shared/components/input-fields/text-input/text-input';
import { BaseButton } from '../../../shared/components/base-button/base-button';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { PasswordInput } from '../../../shared/components/input-fields/password-input/password-input';

import { AuthRequest } from '../../../core/api-client';
import { Auth } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-login',
  imports: [
    CardModule,
    TextInput,
    ReactiveFormsModule,
    BaseButton,
    RouterLink,
    DividerModule,
    PasswordInput,

  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  formBuilder = inject(FormBuilder);
  private authService = inject(Auth);


  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: [, Validators.required],
  });


  getPayload() {
    const authRequest: AuthRequest = {
      username: this.loginForm.controls.username.value || '',
      password: this.loginForm.controls.password.value || '',
    };
    return authRequest;
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.getPayload());
    }
  }
}
