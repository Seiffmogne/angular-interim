import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed=true;
  public isMenuCollapsed=true;

  constructor(public logService:LoginService) { }

  ngOnInit(): void {
  }

}
