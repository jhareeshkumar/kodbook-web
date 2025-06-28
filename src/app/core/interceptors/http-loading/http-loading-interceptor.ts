import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { RouteLoadingService } from '../../services/route-loading/route-loading.service';
import { finalize } from 'rxjs';

export const httpLoadingInterceptor: HttpInterceptorFn = (req, next) => {

  const routeloadingservice = inject(RouteLoadingService);
  routeloadingservice.start();
  return next(req).pipe(
    finalize(() => {
        routeloadingservice.complete();
      })
  );
};
