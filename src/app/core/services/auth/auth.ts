import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';
import { AuthRequest, AuthService } from '../../api-client';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class Auth {

  // isLoggedIn = signal<boolean>(false);

  private router = inject(Router);
  private toastService = inject(ToastService);
  constructor(private authService: AuthService) { }

  isAuthenticated(): boolean {
    return !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) return true;
    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      const now = Math.floor(Date.now() / 1000);
      if (exp < now) {
        this.toastService.showWarn('auth', 'Session Expired', 'Please login again.', false);
        localStorage.removeItem('accessToken');
        return true;
      }
      return false;
    } catch (error) {
      this.toastService.showWarn('auth', 'Invalid Session', 'Please login again.', false);
      localStorage.removeItem('accessToken');
      return true;
    }
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
