import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineStatusService {

  private onlineStatus = signal(navigator.onLine);

  constructor() {
    window.addEventListener('online', () => this.onlineStatus.set(true));
    window.addEventListener('offline', () => this.onlineStatus.set(false));

    effect(() => {
      console.log("Online Status changed to", this.onlineStatus());
    });
  }

  readonly isOnline = computed(() => this.onlineStatus());
}
