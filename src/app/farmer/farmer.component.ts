import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  addland = false;
  latitude: number;
  longitude: number;
  zoom:number;
  constructor() { }

  form= new FormGroup({
    Email:new FormControl('',[Validators.required]),
 })

  ngOnInit() {
    
  }
  private setCurrentLocation() {
    console.log("ssas")
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }

    console.log(this.latitude,this.longitude)

  }
  AddLand(){
    this.addland=true;
    this.setCurrentLocation();
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    
  }

}
