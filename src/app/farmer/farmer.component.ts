import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { LandService } from '../Services/land.service';


@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  addland = false;
  viewlands = false;
  latitude: number;
  longitude: number;
  zoom:number;
  constructor(private Land : LandService) { }

  form= new FormGroup({
    Size:new FormControl('',[Validators.required]),
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
    this.viewlands=false;
    this.setCurrentLocation();
  }


  lands : any;

  ViewLands(){
    this.addland=false;
    this.viewlands=true;
    var  farmerID = localStorage.getItem("farmerId")
    this.Land.viewLands(farmerID)
    .subscribe(res=>{
      this.lands=res
    })
  }

  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    
  }
  submitland(data){
    console.log(data,this.latitude,this.longitude)
    var  farmerID = localStorage.getItem("farmerId")
    console.log(farmerID)
    const land = {
       Size : data.Size,
       Latitude : this.latitude,
       Longitude : this.longitude,
       farmerId : farmerID
    }
    
    console.log(land)

    this.Land.addLand(land)
    .subscribe(res=>console.log(res))

  }
  

}
