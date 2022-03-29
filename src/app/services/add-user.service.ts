import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private webReq:WebRequestService) { }

  create(user:object){
   return  this.webReq.post('users',user);
  }
}
