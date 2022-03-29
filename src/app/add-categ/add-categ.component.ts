import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategService } from './../services/categ.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-categ',
  templateUrl: './add-categ.component.html',
  styleUrls: ['./add-categ.component.css']
})
export class AddCategComponent implements OnInit {

  constructor(private categService:CategService,
    private tostrServi:ToastrService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  addCategorie(categ:any){
    this.categService.createCateg(categ).subscribe(res=>{
     if(res){
       this.tostrServi.success('La catégorie à bien été ajoutée.');
       this.router.navigate(['/addMissions']);
       
     }
    });
 
   }

}
