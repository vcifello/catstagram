import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private toastrService: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((err) => {
        let message = ""
        if (err.status === 401) {
          //refresh token or navigate to login
          message="Token has expired or login"
        }
        else if (err.status === 404) {
          //custom msg

        }
        else if (err.status ===400) {
          //some msg
          message = "400"
        }
        else {
          //global msg
          message = "Unexpected error"
        }
        this.toastrService.error(message)
        return throwError(() => err);
      })
    )
  }
}
