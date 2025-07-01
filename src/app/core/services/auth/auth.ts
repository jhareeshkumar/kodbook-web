import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../toast/toast.service';
import { ApiResponseAuthUserDto, AuthRequest, AuthService, RegisterRequest } from '../../api-client';
import { jwtDecode } from "jwt-decode";

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

  register(registerRequest: RegisterRequest) {
    debugger;
    this.authService.register(registerRequest).subscribe({
      next: (response: ApiResponseAuthUserDto) => {
        if (response.success) {
          this.toastService.showSuccess('auth', 'Sign Up Sucessful', 'You can log in to your account.', true);
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 1500);
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409 && error.error.success === false) {
          this.toastService.showWarn('auth', 'Account Already Exists!', 'An account with this username already exists. Please log in instead.', true);
        }
      }
    });
  }
}
