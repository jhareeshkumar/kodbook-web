import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';
import { AuthRequest, AuthService } from '../../api-client';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  // isLoggedIn = signal<boolean>(false);

  private router = inject(Router);
  private toastService = inject(ToastService);
  constructor(private authService: AuthService) { }

  isAuthenticated() {
    const token = localStorage.getItem('accessToken');
    return token !== null;
  }

  login(authRequest: AuthRequest) {
    this.authService.login(authRequest).subscribe({
      next: (response) => {
        response.accessToken && localStorage.setItem('accessToken', response.accessToken);
        this.toastService.showSuccess('auth', 'Success', 'Login successful', true);
        this.router.navigate(['feed']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.toastService.showError('auth', error.error.message, 'Please check your credentials.', true);
        }
      }
    });
  }
}
