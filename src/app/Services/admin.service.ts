import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  GetAllFarmers(){
    return this.http.get("https://localhost:44374/api/farmer")
  }

  
adminApproved(id,user){
  return this.http.put(`https://localhost:44374/api/farmer/${id}`,user)
}

}
