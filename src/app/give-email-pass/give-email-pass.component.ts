import { Router } from '@angular/router';
import { GiveEmailPService } from './../services/give-email-p.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-email-pass',
  templateUrl: './give-email-pass.component.html',
  styleUrls: ['./give-email-pass.component.css']
})
export class GiveEmailPassComponent implements OnInit {

  constructor(
    private router:Router,
    private emailService:GiveEmailPService) { }

  ngOnInit(): void {
  }
  sendMail(email:string){
    this.emailService.send(email).subscribe(res=>{
    
    });

  }

}
