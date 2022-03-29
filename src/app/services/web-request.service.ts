import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly Root_Url: string;

  constructor(private http:HttpClient) {
    this.Root_Url = 'https://still-meadow-41486.herokuapp.com/api'

   }
   get(url: string) {
    return this.http.get(`${this.Root_Url}/${url}`);

  }
  post(url: string, paylodad: Object) {
    return this.http.post(`${this.Root_Url}/${url}`, paylodad);
  }
  
  postVoid(url:string,paylodad:any){
    return this.http.post(`${this.Root_Url}/${url}`,paylodad);
  }

  put(url: string, paylodad: Object) {
   return this.http.put(`${this.Root_Url}/${url}`, paylodad);
 }
 delete(url: String) {
   return this.http.delete(`${this.Root_Url}/${url}`);
 }
 login(user:object){
   return this.http.post(`${this.Root_Url}/auth`,user,
   {
     observe:'response',
     responseType:'json'
   });

 }

}
