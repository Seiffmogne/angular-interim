import { SearchMissionService } from './../services/search-mission.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myMissionSearch:any;
  isSelected:boolean=false;
 

 

  constructor(private router:Router,private searchService:SearchMissionService) {
    
   }
  

  ngOnInit(): void {    
  
  }
  closebtn(){
    this.isSelected=!this.isSelected;
  

  }
  

}
