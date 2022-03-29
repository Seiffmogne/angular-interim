import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AddUserService } from './../services/add-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  aEntreprise:boolean=false;
  haveAnAccount: boolean=false;
  dontHave:any;

  constructor(
    private toastrSer:ToastrService,
    private router:Router,
    private addServ:AddUserService) { }

  ngOnInit(): void {
  }
  isSelected(){
    this.haveAnAccount=!this.haveAnAccount;
  }

  createUser(user:any){
    this.addServ.create(user).subscribe(res=>{
     if(res){
      // alert('Vous vous êtes  bien inscris , un mail va vous être envoyé pour valider votre adresse mail.');
      this.toastrSer.success('Vous vous êtes  bien inscris , un mail va vous être envoyé pour valider votre adresse mail.');
       this.router.navigate(['/']);
     }
    });
    
  }

}
