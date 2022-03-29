import { SearchMissionService } from './../services/search-mission.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-mission',
  templateUrl: './search-mission.component.html',
  styleUrls: ['./search-mission.component.css']
})
export class SearchMissionComponent implements OnInit {
  missionSearch:any;
  number:boolean=false;

  constructor(private route:ActivatedRoute, private searchService:SearchMissionService) { }

  ngOnInit(): void {
    
    let name=this.route.snapshot.queryParamMap.get('name');
    let zipCode= this.route.snapshot.queryParamMap.get('zipCode');
    this.searchService.Search(name,zipCode).subscribe(res=>{
      this.missionSearch=res;
      if(this.missionSearch['length']!== 0){
       this.number=false;
       

      }else{
        this.number=true;
      
      }
    });

  }

}
