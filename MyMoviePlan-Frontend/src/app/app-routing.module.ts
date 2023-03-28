import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminallmoviesComponent } from './admin/adminallmovies/adminallmovies.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DelmovieComponent } from './admin/delmovie/delmovie.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { AllmoviesComponent } from './movie/allmovies/allmovies.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { RegisterComponent } from './user/register/register.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { BookseatsComponent } from './user/bookseats/bookseats.component';

const routes: Routes = [
  {path:"addmovie",component:AddmovieComponent},
  {path:"allmovies",component:AllmoviesComponent},
  {path:"register",component:RegisterComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"adminallmovies",component:AdminallmoviesComponent},
  {path:"editmovie/:id",component:EditmovieComponent},
  {path:"delmovie/:id",component:DelmovieComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"bookseats/:id",component:BookseatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
