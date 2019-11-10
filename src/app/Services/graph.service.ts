import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http:HttpClient) { }

  getgraph(){

    return this.http.get('http://localhost:5000/')

  }

  getperdiction(year){

    return this.http.post('http://localhost:5000/hello',JSON.stringify(year))

  }

}
