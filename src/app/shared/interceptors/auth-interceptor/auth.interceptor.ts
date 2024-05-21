import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req : HttpRequest<unknown>, next : HttpHandlerFn) : Observable<HttpEvent<unknown>> => {

  const token = localStorage.getItem('token') ?? undefined

  if(typeof token !== undefined){
    const cloneRequest = req.clone({ headers :req.headers.set('Authorization', `Bearer ${token}`) })
    return next(cloneRequest);
  }
  else{
    const cloneRequest = req.clone({ headers :req.headers.set('Authorization', `Bearer`) })
    return next(cloneRequest)
  }
}
