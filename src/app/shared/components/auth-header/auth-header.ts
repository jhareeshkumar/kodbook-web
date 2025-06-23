import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BaseButton } from '../base-button/base-button';

@Component({
  selector: 'app-auth-header',
  imports: [MenubarModule,BaseButton],
  templateUrl: './auth-header.html',
  styleUrl: './auth-header.scss'
})
export class AuthHeader {
items: MenuItem[] = [
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      routerLink: '/auth/login'
    },
    {
      label: 'Register',
      icon: 'pi pi-user-plus',
      routerLink: '/auth/register'
    }
  ];

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
