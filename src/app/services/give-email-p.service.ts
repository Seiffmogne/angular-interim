import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiveEmailPService {

  constructor(private webService:WebRequestService) { }

  send(mail:string){
     return this.webService.post('forgotPassword',mail);

  }
}
