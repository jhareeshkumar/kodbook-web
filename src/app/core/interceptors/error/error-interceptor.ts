import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../../services/toast/toast.service';
import { OnlineStatusService } from '../../services/online-status/online-status.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastService = inject(ToastService);
  const onlineStatusService = inject(OnlineStatusService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (onlineStatusService.isOnline() === false) {
        toastService.showError('network', 'Connection Lost', 'You appear to be offline. Please check your internet connection.',true);
        console.log(onlineStatusService.isOnline());
      }
      return throwError(() => error);
    })
  );
};
