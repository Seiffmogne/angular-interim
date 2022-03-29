import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntreAuthGuardService implements CanActivate {

  constructor(private router:Router,
    private logService:LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const user= this.logService.currentUser;

        if(user && user.isEntreprise) return true;

        this.router.navigate(['/no-access']);
        return false;
    }


}
