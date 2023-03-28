import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  admin:Admin= new Admin();

  constructor(private service:AdminService,private router:Router){}

  onSubmit(){
    this.service.adminLogin(this.admin).subscribe(x=>console.log(x));
    alert("Login successful!")
    this.router.navigate(['adminhome'])
  }
}
