import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddExperienceService {

  constructor(private webReq:WebRequestService) { }


  addExperience(experience:any){
    return this.webReq.post('experienceInterim',experience);

  }
  editExperience(id:string,experience:any){
    //Modifier mon expérience...
    return this.webReq.put('experienceInterim' + '/'+id, experience);
  }

  deleteExperience(id:string){
    return this.webReq.delete('experienceInterim' + '/'+id);

  }

  getExperience(){
    //Should return only the experience of a User who is login.
    return this.webReq.get('experienceInterim/me');
  }
  getExperienceById(id:string){
    return this.webReq.get('experienceInterim'+ '/'+ id);

  }
}
