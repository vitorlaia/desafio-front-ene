import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppIdentifierHttpInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: { 'x-api-key': 'live_TrXAYPziDOJV5sN9pRqAcH7ab8k27kCdrvXh4EHSYep46Kkif5jgfdCGp9MJJFtK' }  
        });
        return next.handle(request);
    }
}