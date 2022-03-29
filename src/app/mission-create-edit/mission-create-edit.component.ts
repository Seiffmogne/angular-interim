import { DialogService } from './../services/dialog.service';
import { ToastrService } from 'ngx-toastr';
import { CategService } from './../services/categ.service';
import { LoginService } from './../services/login.service';
import { MesMissionsService } from './../services/mes-missions.service';
import { MissionsService } from './../services/missions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mission-create-edit',
  templateUrl: './mission-create-edit.component.html',
  styleUrls: ['./mission-create-edit.component.css']
})
export class MissionCreateEditComponent implements OnInit, OnDestroy {
  myMissionCreate:any;
  id;
  category:any;
  subscription:any;
  dateMin=new Date();
  theDate:any;



  constructor(
    private dialgServ:DialogService,
    private toastrServ:ToastrService,
    private categService:CategService,
    private router:Router,
    private logService:LoginService,
    private missServ:MissionsService,
    private mesMiss:MesMissionsService,
    private route:ActivatedRoute,) {
      this.id=this.route.snapshot.paramMap.get('id');
      if(this.id) this.missServ.myMission(this.id).subscribe(miss=>this.myMissionCreate=miss);

     }

  ngOnInit(): void {
    this.subscription= this.categService.categoryName().subscribe(res=>{
      this.category=res;
     });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  editMission(mission:any){
    //edit a mission that a user have Created
    mission.userId=this.logService.UserId;
    mission.when=this.theDate; 
    this.mesMiss.editAMission(this.id,mission).subscribe(res=>{
       if(res) {
        // alert('la mission a bien été modifié');
        this.toastrServ.success('la mission a bien été modifié');
         this.router.navigate(['/missions']);
       }
    });

  }

  changeDate(year:number, month:number, day:number, hours:number, minute:number){
    const aDate= new Date(year,month -1,day,hours,minute);
    if(aDate<this.dateMin){
      this.toastrServ.error('La date est déja passé.')

    }else{
      this.theDate=aDate;
      this.toastrServ.success('Date modifié.');

    }


  }


  deleteMission(){
    // this.mesMiss.deleteCreateMission(this.id).subscribe(res=>{
    //   if(res){
    //     //alert('LA mission a bien été supprimer');
    //     this.toastrServ.info('La mission a bien été supprimer');
    //     this.router.navigate(['/missions']);
    //   }
    // });
   this.dialgServ.confirmDialog({
      title:'Confirmer la suppression',
      message:'Vous êtes sur de vouloir supprimer cette mission',
      confirmText:'Oui',
      cancelText:'Non'

    }).subscribe(data=>{
      if(data){
            this.mesMiss.deleteCreateMission(this.id).subscribe(res=>{
          if(res){
            //alert('LA mission a bien été supprimer');
            this.toastrServ.info('La mission a bien été supprimer');
            this.router.navigate(['/missions']);
          }
        });
      }
    });

  }
  

}
