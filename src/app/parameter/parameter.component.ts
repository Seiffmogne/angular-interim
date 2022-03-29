import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { AddExperienceService } from './../services/add-experience.service';
import { VerifCountService } from './../services/verif-count.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit,OnDestroy {
  nothing:any;
  isSelected:boolean=false;
  actualJobs:boolean=false;
  selection=null;
  experience:any;
  subscription:any;

  constructor(
    private router:Router,
    private logService:LoginService,
    private toastrService:ToastrService,
    private experienceService:AddExperienceService,
    private veriServ:VerifCountService) { }

  ngOnInit(): void {
   this.subscription= this.experienceService.getExperience().subscribe(exper=>this.experience=exper);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

  verifAccount(){
    this.veriServ.verifCount(this.nothing).subscribe(res=>{
    });

  }

  clickTheBtn(){
    this.isSelected=!this.isSelected;
  }

  saveExperience(experience:any){
    experience.userId=this.logService.UserId;
   this.experienceService.addExperience(experience).subscribe(res=>{
     if(res){
       this.toastrService.success(`L'expérience a bien été enregistré.`);
       this.router.navigate(['/missions']);

     }
   });

  }

}
