import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainHeader } from '../../shared/components/main-header/main-header';
import { Auth } from '../../core/services/auth/auth';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, MainHeader],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout implements OnInit {

  private router = inject(Router);
  private authService = inject(Auth)

  ngOnInit() {
    if (this.authService.isTokenExpired()) {
      localStorage.removeItem('authToken');
      this.router.navigate(['/login']);
    }
  }
}
