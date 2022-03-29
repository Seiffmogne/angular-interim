import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesMissionsService {

  constructor(private webReq:WebRequestService) { }

  getMyMission(){
    //Return the mission that an User Accept
    return this.webReq.get('userMissions/me');
  }
  getMyMissionId(id:String){
    //Return the mission that a user have accept with a given Id
    return this.webReq.get('userMissions' + '/' +id);
  }
  editAMission(id:any,mission:any){

    //Edit the mission create by a user who are login.
    return this.webReq.put('missions'+'/'+ id, mission);

  }
  deleteCreateMission(id:any){
    // Should delete the mission that an Entreprise have create.

    return this.webReq.delete('missions'+'/'+ id);
  }

  deleteMission(id:any){
    //Delete the mission that a user have accepted.

    return this.webReq.delete('userMissions' +'/'+ id);
  }

  myMissionsCreate(){
    //Should return only the mission that an User have create.
    return this.webReq.get('missions/me');
  }
  deleteMissionCreate(id:any){
    //should delete the mission that a auth user have created.
    return this.webReq.delete('missions'+ '/' +id);


  }
}
