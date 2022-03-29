import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategService {

  constructor(private webRequest:WebRequestService) { }

  categoryName(){
    return this.webRequest.get('category');
  }
  createCateg(categ:any){
    return this.webRequest.post('category',categ);
  }
}
