import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  private darkModelClassName = 'my-app-dark';
  private themeStorageKey = 'theme';

  constructor() {
    this.loadTheme();
  }



  toggleDarkMode() {
    const savedTheme = localStorage.getItem(this.themeStorageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const element = document.querySelector('html');
    if (savedTheme === null && prefersDark) {
      localStorage.setItem(this.themeStorageKey, 'dark');
      element?.classList.add(this.darkModelClassName);
    }
    else if (savedTheme === 'dark') {
      localStorage.setItem(this.themeStorageKey, 'light');
      element?.classList.remove(this.darkModelClassName);
    }
    else if (savedTheme === 'light') {
      localStorage.setItem(this.themeStorageKey, 'dark');
      element?.classList.add(this.darkModelClassName);
    }
  }

  loadTheme() {
    const savedTheme = localStorage.getItem(this.themeStorageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('savedTheme', savedTheme);
    console.log('prefersDark', prefersDark);
    const element = document.querySelector('html');
    if (prefersDark && savedTheme === null) {
      element?.classList.add(this.darkModelClassName);
      localStorage.setItem(this.themeStorageKey, 'dark');
    }
    else if (savedTheme === 'dark') {
      element?.classList.add(this.darkModelClassName);
      localStorage.setItem(this.themeStorageKey, 'dark');
    }
    else if (savedTheme === 'light') {
      element?.classList.remove(this.darkModelClassName);
      localStorage.setItem(this.themeStorageKey, 'light');
    }
  }

}
