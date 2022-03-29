import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(private webReq:WebRequestService) { }

  postMission(){
    //Return All Missions.
    return this.webReq.get('missions');
  }
  myMission(id:string){
    //Return a specific Mission with a given Id.
    return this.webReq.get('missions'+ '/'+ id);
  }

  addMission(mission:object){
    //Add a Mission.
    return this.webReq.post('missions',mission);

  }
}
