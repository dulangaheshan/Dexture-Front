import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"farmer",component:FarmerComponent},
  {path:"graph",component:GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
