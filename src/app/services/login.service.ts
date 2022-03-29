import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay,tap } from 'rxjs';
import { HttpResponse, JsonpClientBackend } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private jwtHelper:JwtHelperService,
    private router:Router,
    private webReq:WebRequestService) { }

    login(user:Object){
      return this.webReq.login(user).pipe(
        shareReplay(),
        tap((res:HttpResponse<any>)=>{
          this.setSession(res.body._id,res.headers.get('x-auth-token'));
          this.autoLogout(1800000);
        })
      )

    }

    logout(){
      this.removeSession();
      this.router.navigate(['/']);

    }

    autoLogout(expirationDate:number){
      setTimeout(()=>{
        this.logout();
      },expirationDate)

    }
    getToken(){
      return localStorage.getItem('x-auth-token');
    }
    isLoggedIn(){
      const helper= new JwtHelperService();
      const token =localStorage.getItem('x-auth-token');
       if(!token) 
          return false;
       
          const expirationDate=helper.getTokenExpirationDate(token);
          const isExpired=helper.isTokenExpired(token);

          return !isExpired;

    }
    
    get currentUser(){
      const token = localStorage.getItem('x-auth-token');
      if(!token)
      return null;
      return new JwtHelperService().decodeToken(token);
       
    }

    get UserId(){ 
      return localStorage.getItem('user-id');
    }

    private setSession(userId:string,accessToken:any){
      localStorage.setItem('user-id',userId)

      localStorage.setItem('x-auth-token',accessToken);

    }
  

    private removeSession(){
      localStorage.removeItem('user-id');
      localStorage.removeItem('x-auth-token');

    }
}

