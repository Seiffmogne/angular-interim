import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcceptMissionService {

  constructor(private webReq:WebRequestService) { }

  accept(userMission:any){
    return this.webReq.post('userMissions',userMission);
  

  }
}
