import { LoginService } from './../services/login.service';
import { MesMissionsService } from './../services/mes-missions.service';
import { MissionsService } from './../services/missions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mes-missions',
  templateUrl: './mes-missions.component.html',
  styleUrls: ['./mes-missions.component.css']
})
export class MesMissionsComponent implements OnInit, OnDestroy {
  mesMissions:any;
  subscription:any;

  constructor(
    public logService :LoginService,
    private meMiss:MesMissionsService) { }

  ngOnInit(): void {
    this.subscription=this.meMiss.getMyMission().subscribe(res=> this.mesMissions=res);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 

}
