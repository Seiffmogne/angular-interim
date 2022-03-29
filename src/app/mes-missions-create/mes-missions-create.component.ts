import { MesMissionsService } from './../services/mes-missions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'missionsCreate',
  templateUrl: './mes-missions-create.component.html',
  styleUrls: ['./mes-missions-create.component.css']
})
export class MesMissionsCreateComponent implements OnInit,OnDestroy {
  mesMissionsCreate:any;
  subscription:any;

  constructor(private mesMiss:MesMissionsService) { }

  ngOnInit(): void {
    //Should return only the mission that the log User have Create.
    this.subscription=this.mesMiss.myMissionsCreate().subscribe(res=>this.mesMissionsCreate=res);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}
