import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TextInput } from '../../../shared/components/input-fields/text-input/text-input';
import { BaseButton } from '../../../shared/components/base-button/base-button';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { PasswordInput } from '../../../shared/components/input-fields/password-input/password-input';

@Component({
  selector: 'app-login',
  imports: [CardModule,TextInput,ReactiveFormsModule,BaseButton,RouterLink,DividerModule
    ,PasswordInput
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  formBuilder = inject(FormBuilder);
  login() {
    console.log(this.loginForm.value);
  }
  loginForm = this.formBuilder.group({
    username: ['',Validators.required],
    password: [,Validators.required]
  });
}
