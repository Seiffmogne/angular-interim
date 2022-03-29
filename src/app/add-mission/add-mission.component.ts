import { ToastrService } from 'ngx-toastr';
import { CategService } from './../services/categ.service';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { MissionsService } from './../services/missions.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit, OnDestroy {
totalPrice:any;
isSelected:any;
category:any;
subscription:any;
minDate=new Date();
theDate:any;


  constructor(
    private tostrServi:ToastrService,
    private categService:CategService,
    private router:Router,
    private logService:LoginService,
    private missService:MissionsService) {
     
   }

  ngOnInit(): void {
   this.subscription= this.categService.categoryName().subscribe(res=>{
     this.category=res;
    });
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
      
  }

  addMission(mission:any){
    mission.when=this.theDate;  
   mission.userId=this.logService.UserId;
    this.missService.addMission(mission).subscribe(res=>{
      if(res){
        //alert('La mission a été ajouté');
        this.tostrServi.success('La mission à bien été ajoutée.');
      } 
    });


  }
  
  showFormCateg(){
    this.router.navigate(['/add-category'])

  }
  getHours(year:number, month:number, day:number, hours:number, minute:number){
    const aDate= new Date(year, month-1, day, hours, minute);
    if(aDate<this.minDate){
      this.tostrServi.error('La date est déja passé.')

    }else{
      this.theDate=aDate;
      this.tostrServi.success('La date à bien été enregistré.');

    }

   

  }
  


   calculateTotalPrice(time:number,priceOfHours:number,nmbreJour:number){
     this.totalPrice=(time*priceOfHours) *nmbreJour;

  }


}
