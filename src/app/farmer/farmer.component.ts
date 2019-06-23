import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  addland = false;
  constructor() { }

  ngOnInit() {
  }
  AddLand(){
    this.addland=true;
  }
}
