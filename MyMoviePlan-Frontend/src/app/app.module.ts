import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { AllmoviesComponent } from './movie/allmovies/allmovies.component';
import { RegisterComponent } from './user/register/register.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminallmoviesComponent } from './admin/adminallmovies/adminallmovies.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
import { DelmovieComponent } from './admin/delmovie/delmovie.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { BookseatsComponent } from './user/bookseats/bookseats.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    AllmoviesComponent,
    RegisterComponent,
    HomepageComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminallmoviesComponent,
    EditmovieComponent,
    DelmovieComponent,
    UserloginComponent,
    BookseatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
