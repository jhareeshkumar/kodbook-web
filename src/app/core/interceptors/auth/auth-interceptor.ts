import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem('accessToken');
  const excludedPaths = ['/auth/login', '/auth/register'];
  const skip: boolean = excludedPaths.some((path) => req.url.includes(path));
  if (!skip && accessToken) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
    });
    return next(clonedReq);
  }
  return next(req);
};
