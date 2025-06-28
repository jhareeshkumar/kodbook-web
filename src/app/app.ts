import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from './shared/components/toast/toast';
import { RouteLoadingService } from './core/services/route-loading/route-loading.service';
import { TopLoadingBar } from './shared/components/top-loading-bar/top-loading-bar';
import { ThemeService } from './core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, TopLoadingBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'kodbook-web';

  private routeLoadingService = inject(RouteLoadingService);


  constructor(private themeService: ThemeService) { }

  isRouteLoading = this.routeLoadingService.isRouteloading;

  isApiLoading = this.routeLoadingService.isApiloading;

  progressValue = this.routeLoadingService.progressValue;


}
