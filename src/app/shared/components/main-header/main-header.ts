import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-main-header',
  imports: [MenubarModule],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss'
})
export class MainHeader {
items: MenuItem[] = [
    {
      label: 'feed',
      icon: 'pi pi-home',
      routerLink: '/feed'
    },
    {
      label: 'profile',
      icon: 'pi pi-user',
      routerLink: '/profile'
    },
    {
      label: 'logout',
      icon: 'pi pi-sign-out',
      routerLink: '/logout'
    }
  ]

}
