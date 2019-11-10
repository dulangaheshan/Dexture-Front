import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient) { }


  GetFarmerDetails(farmerId){
    return this.http.get(`https://localhost:44374/api/farmer/${farmerId}`)
  }

}
