import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Admin : AdminService) { }

  ngOnInit() {
  }

  data:any;

  ViewFarmers(){
    this.Admin.GetAllFarmers()
    .subscribe(res=>{
      console.log(res)
      this.data=res
    })
  }

  approved(id,user){
      console.log(id,user)
      this.Admin.adminApproved(id,user)
      .subscribe(data => {
        this.ViewFarmers();
      },
      error => window.alert("something went wrong"))
  }

}
