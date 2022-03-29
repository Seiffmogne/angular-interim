import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../services/login.service';
import { AcceptMissionService } from './../services/accept-mission.service';
import { MissionsService } from './../services/missions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-mission',
  templateUrl: './my-mission.component.html',
  styleUrls: ['./my-mission.component.css']
})
export class MyMissionComponent implements OnInit {
  myMission:any;
  id;
  

  constructor(
    private toastrServ:ToastrService,
    private router:Router,
    private logServ:LoginService,
    private accept:AcceptMissionService,
    private missService:MissionsService,
    private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id) this.missService.myMission(this.id).subscribe( miss => this.myMission=miss);
   }

  ngOnInit(): void {
  }

  acceptMission(userMission={
    userId:this.logServ.UserId,
    missionId:this.id
  }){
    this.accept.accept(userMission).subscribe(res =>{
      if(res){
        //alert('vous avez bien accepter la mission!');
        this.toastrServ.success('vous avez bien accepter la mission!');
        this.router.navigate(['/mesMissions'])
        
      } 
    });

  }

}
