import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form= new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    LastName:new FormControl('',Validators.required),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]), 
    ContactNo:new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]), 
    PersonalAddress:new FormControl('',Validators.required), 
    Nic:new FormControl('',Validators.required),
    GramaNiladariDivision:new FormControl('',Validators.required),
    role:new FormControl('')


 })
  constructor(private Auth : AuthService) { }

  ngOnInit() {
  }

Flag1=false;
Flag2=false; 
Flag3=false; 
function(x) {
if(x==1){
  this.Flag1=true;
  this.Flag2=false;
  this.Flag3=false;
}
else if(x==2){
  this.Flag1=false;
  this.Flag2=true;
  this.Flag3=false;

}
else if(x==3){
  this.Flag1=true;
  this.Flag2=true;
  this.Flag3=true;
 }
}

SignIn(data){
  console.log(data)
  if(data.role==="1"){
    this.Auth.farmerSignUp(data)
    .subscribe(data => window.alert('register sucess wait untill approval'),
    error => window.alert("User Email already used"))
  }
}

}
