import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"farmer",component:FarmerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
