import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  let token: string | null = null;

  // Vérifier si `localStorage` est disponible
  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('token');
  }

  if (token) {
    const cloneRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    return next(cloneRequest);
  } else {
    const cloneRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer`) });
    return next(cloneRequest);
  }
};
