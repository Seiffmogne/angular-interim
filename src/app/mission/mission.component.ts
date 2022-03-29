import { MissionsService } from './../services/missions.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit, OnDestroy {
  missions:any;
  subscription:any;
  number:boolean=false;


  constructor(private missService:MissionsService) { }

  ngOnInit(): void {
    this.subscription=this.missService.postMission().subscribe(miss=>{
      this.missions=miss
      if(this.missions['length']!== 0){
        this.number=false;
        
 
       }else{
         this.number=true;
       
       }
    });
  
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();

  }

}
