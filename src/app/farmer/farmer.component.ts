import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { LandService } from '../Services/land.service';
import { FarmerService } from '../Services/farmer.service';
import { HarvestService } from '../Services/harvest.service';


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
  farmerFirstName :any
  farmerLastName :any
  addHarvestForm = false
  landId = ''

  constructor(private Land : LandService,private farmer :FarmerService,private harvest :HarvestService) { }
farmerDetails:any
//   form= new FormGroup({
//     Size:new FormControl('',[Validators.required]),
//  })

 form= new FormGroup({
  Name:new FormControl('',[Validators.required]), 
  SellingQuantity: new FormControl('',[Validators.required]),
  AllQuantity:new FormControl('',[Validators.required]),
  DateTime:new FormControl('',[Validators.required])
  //role:new FormControl()
})

  ngOnInit() {
    var  farmerID = localStorage.getItem("farmerId")
    this.farmer.GetFarmerDetails(farmerID)
    .subscribe(res=>{
      this.farmerDetails=res[0]
      console.log(res[0])
     

    })

    
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
    .subscribe(res=>{
      if(res === true){
        window.alert("land add sucess")
      }else{
        window.alert("something going wrong")
      }
    })

  }

  addHarvest(landData){
    
    this.landId = landData.landId
    console.log(this.landId)
    this.addHarvestForm = true
  }

  HarvestSubmit(harvest){
    
    // console.log(harvest)
    this.harvest.addHarvest(harvest,this.landId)
    .subscribe(res=>{
      console.log(res)
    })
  }
  

}
