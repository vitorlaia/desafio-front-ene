import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppIdentifierHttpInterceptor } from './interceptors/app-identifier-http.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: '<router-outlet></router-outlet>', 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppIdentifierHttpInterceptor, multi: true }
  ],
})
export class AppComponent {
  title = 'desafio-front';
}
