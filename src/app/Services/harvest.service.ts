import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HarvestService {

  constructor(private http:HttpClient) { }

addHarvest(harvest,landId){
  var harvestData = []
  harvestData.push(harvest)
  harvestData.push(landId)
return this.http.post("https://localhost:44374/api/Harvests",harvestData)
}

}
