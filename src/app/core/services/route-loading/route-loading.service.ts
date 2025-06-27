import { Injectable, Signal, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteLoadingService {

  private loading = signal(false);

  isloading:Signal<boolean>  = this.loading.asReadonly();

  constructor(private router:Router) {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
       this.loading.set(true);
      }
      if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
        setTimeout(() => {
           this.loading.set(false);
        }, 600);
      }
    });
   }
}
