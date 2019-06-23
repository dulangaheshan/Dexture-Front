import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor(private http: HttpClient) { }

  addLand(data){
    return this.http.post("https://localhost:44374/api/land",data)
  }

  viewLands(id){
    return this.http.get(`https://localhost:44374/api/land/${id}`)
  }

}
