import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BaseButton } from '../base-button/base-button';
import { ThemeService } from '../../../core/services/theme/theme.service';

@Component({
  selector: 'app-auth-header',
  imports: [MenubarModule, BaseButton],
  templateUrl: './auth-header.html',
  styleUrl: './auth-header.scss'
})
export class AuthHeader {

  private themeService = inject(ThemeService);

  items: MenuItem[] = [
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      routerLink: '/auth/login'
    },
    {
      label: 'Signup',
      icon: 'pi pi-user-plus',
      routerLink: '/auth/signup'
    }
  ];

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
