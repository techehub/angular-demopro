import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.access_token; // you probably want to store it in localStorage or something
    console.log ("Token is -"+ token)
    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', ('Bearer '+token)),
    });

    console.log ("headers -"+ req1.headers.get("Authorization"))
    return next.handle(req1);
  }


}
