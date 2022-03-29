import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchMissionService {

  constructor(private webService: WebRequestService) { }

 Search(searchName:any,searchZip:any){
   return this.webService.get(`?name=${searchName}&zipCode=${searchZip}`);
 }

}
