import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifCountService {

  constructor(private webReq:WebRequestService) { }

  verifCount(noThing:any){
    return this.webReq.postVoid('verifyEmail',noThing);
  }
}
