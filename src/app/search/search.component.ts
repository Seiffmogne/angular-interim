import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchMission(searchName:any,searchLocation:any){
    this.router.navigate(['missionsSearch'],{
      queryParams:{name:searchName,zipCode:searchLocation}
    });

  }

}
