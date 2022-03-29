import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cookies-style',
  templateUrl: './cookies-style.component.html',
  styleUrls: ['./cookies-style.component.css']
})
export class CookiesStyleComponent implements OnInit {
  isSelected:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  closebtn(){
    this.isSelected=!this.isSelected;
  

  }

}
