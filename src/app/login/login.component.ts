import { HttpResponse } from '@angular/common/http';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private logService:LoginService) { }

  ngOnInit(): void {
  }
  onLogin(user:object){
    this.logService.login(user).subscribe((response:HttpResponse<any>)=>{
      if(response){
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/missions']);
      }
    });


  }

}
