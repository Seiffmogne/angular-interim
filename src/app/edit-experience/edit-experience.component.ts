import { DialogService } from './../services/dialog.service';
import { LoginService } from './../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { AddExperienceService } from './../services/add-experience.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit, OnDestroy {
  actualJobs:boolean=false;
  id:any;
  experience:any;
  subscription:any;
  theDateEnd:any=new Date();


  constructor(
    private dialogServ:DialogService,
    private logService:LoginService,
    private router: Router,
    private toastrServ:ToastrService,
    private experinceServ:AddExperienceService,
    private route:ActivatedRoute) {

    this.id=this.route.snapshot.paramMap.get('id');

   }

  ngOnInit(): void {
    this.subscription=this.experinceServ.getExperienceById(this.id).subscribe(exper=>this.experience=exper);
  
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }
  editExperience(experience:any){
    experience.userId=this.logService.UserId;
    this.experinceServ.editExperience(this.id,experience).subscribe(res=>{
      if(res){
        this.toastrServ.success(`L'expérience a bien été enregistré.`);
        this.router.navigate(['/parameter']);
        
      }

    });

  }
  deleteExperience(){
    this.dialogServ.confirmDialog({
      title:'Confirmer la suppression',
      message:'Vous êtes sur de vouloir supprimer cette expérience',
      confirmText:'Oui',
      cancelText:'Non'

    }).subscribe(data=>{
      if(data){
        this.experinceServ.deleteExperience(this.id).subscribe(res=>{
          if(res){
            this.toastrServ.info(`L'experience a bien été supprimé.`);
            this.router.navigate(['/parameter']);
          }
        });

      }
    });
   
  }

}
