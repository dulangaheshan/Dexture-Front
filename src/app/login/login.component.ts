import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Farmer = false;
  Buyer = false;
  Agricultural_officer = false;
  Admin = false;

  form= new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]), 
    role:new FormControl()
 })

  constructor(private Auth : AuthService, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  function(x){
    if(x=="1"){
      this.Farmer = true;
      this.Buyer = false;
      this.Agricultural_officer = false;
      this.Admin = false;
      
    }
    if(x=="2"){
      this.Farmer = false;
      this.Buyer = true;
      this.Agricultural_officer = false;
      this.Admin = false;
      
      
    }
    if(x=="3"){

      this.Farmer = false;
      this.Buyer = false;
      this.Agricultural_officer = true;
      this.Admin = false;
     
      
    }
    if(x=="4"){

      this.Farmer = false;
      this.Buyer = false;
      this.Agricultural_officer = false;
      this.Admin = true;
      
      
    }

    console.log(this.Farmer,this.Agricultural_officer,this.Buyer,this.Admin)
    
  }

  res : any;
LogIn(data){
  if(data.role == "1"){
    this.Auth.farmerLogIn(data)
    .subscribe(data => {
      console.log(data)
      this.res = data['farmer'];
      console.log(this.res.farmerId)
      if(this.res.accepted===false){
        window.alert("Admin Not Approved Yet")
      }else{
        localStorage.setItem("farmerId",this.res.farmerId)
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          this.router.navigate([returnUrl || "/farmer"]);
      }
    },
    error => window.alert("Error Email or Password"))
  }
  if(data.role == "4"){
        this.Auth.adminLogin(data)
        .subscribe(data => {
          let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          this.router.navigate([returnUrl || "/admin"]);
        },
        error => window.alert("Email or Password Error"))
  }
}

}
