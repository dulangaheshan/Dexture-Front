import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  farmerSignUp(data){
   // console.log(data,"sdsd")
    return this.http.post("https://localhost:44374/api/farmer",data);
  }

  farmerLogIn(data){
    // console.log(data,"sdsd")
    return this.http.post("https://localhost:44374/api/farmer/login",data)
  }

adminLogin(data){
  return this.http.post("https://localhost:44374/api/admin/login",data)
}


}
