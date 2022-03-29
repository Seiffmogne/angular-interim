import { LoginService } from './login.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WebReqIntercepterService implements HttpInterceptor {

  constructor(
    private toastService:ToastrService,
    private route:Router,
    private logService:LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Handle the request
    req= this.addAuthHeader(req);

    //call next() and handle the response
      return next.handle(req).pipe(
        catchError((error:HttpErrorResponse)=>{
         if(error.status===401){
           this.route.navigate(['/login']);

         }
         else if(error.status===200){
           this.toastService.success("Vous allez reçevoir un mail");
           this.route.navigate(['/login']);

         }
         else if(error.status ===0) {
          this.toastService.error("Nous rencontrons un probème réessayer plus tard.");

         }
         else {
           //alert(error.error);
           this.toastService.error(error.error);
         }
          return throwError(error);
        })
      )
  }

  addAuthHeader(req:HttpRequest<any>){

    //get the acces Token
    const token= this.logService.getToken();

    if(token){
      //append the access token
      return req.clone({
        setHeaders:{
          'x-auth-token':token
        }
      })
    }
    return req;

  }
}
