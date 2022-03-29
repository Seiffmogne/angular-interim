import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(
    private router:Router,
    private logSevice:LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     if(this.logSevice.isLoggedIn()) return true;
     
     this.router.navigate(['/login'], {queryParams: {returnUrl: state.url }});
     return false;
  }
}
