import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  islogin = false
  issignup = false;
  constructor() { }

  ngOnInit() {
  }

  login(){
    this.issignup = false;
    this.islogin = true;
  }

  signup(){
    this.issignup = true;
    this.islogin = false;
  }

}
