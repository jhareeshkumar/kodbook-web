import { Injectable, Signal, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteLoadingService {

  private routeLoading = signal(false);

  private apiLoading = signal(false);

  isRouteloading:Signal<boolean>  = this.routeLoading.asReadonly();

  isApiloading:Signal<boolean>  = this.apiLoading.asReadonly();

  private progress = signal(0);

  progressValue:Signal<number> = this.progress.asReadonly();

  constructor(private router:Router) {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
       this.routeLoading.set(true);
      }
      if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
        setTimeout(() => {
           this.routeLoading.set(false);
        }, 400);
      }
    });
   }


  start() {
    this.apiLoading.set(true);
    this.progress.set(0);
}

  complete() {
    for (let i = 0; i <= 100; i++) {
      this.progress.update(()=>this.progress() + 1);
      setTimeout(() => {
        this.apiLoading.set(false);
      }, 1000);
    }
  }
}