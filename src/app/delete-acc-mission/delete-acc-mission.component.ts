import { ToastrService } from 'ngx-toastr';
import { DialogService } from './../services/dialog.service';
import { MesMissionsService } from './../services/mes-missions.service';
import { MissionsService } from './../services/missions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-acc-mission',
  templateUrl: './delete-acc-mission.component.html',
  styleUrls: ['./delete-acc-mission.component.css']
})
export class DeleteAccMissionComponent implements OnInit {
  missionDeleted:any;
  id;
  

  constructor(
    private toastrServ:ToastrService,
    private dialoService:DialogService,
    private router:Router,
    private route:ActivatedRoute,
    private myMiss:MesMissionsService
    ) {
    this.id=this.route.snapshot.paramMap.get('myId');
    if(this.id) this.myMiss.getMyMissionId(this.id).subscribe(mesMiss=>this.missionDeleted=mesMiss);

   }

  ngOnInit(): void {
  }
  deleteTheMission(){
    this.dialoService.confirmDialog({
      title:'Confirmer la suppression',
      message:'Vous êtes sur de vouloir supprimer cette mission',
      confirmText:'Oui',
      cancelText:'Non'

    }).subscribe(data=>{
      if(data){
        this.myMiss.deleteMission(this.id).subscribe(res=>{
          if(res){
            this.toastrServ.info('La mission a bien été supprimer');
            this.router.navigate(['/missions']);
          }
    
        });
      }
    });
      
    
    
  }

}
