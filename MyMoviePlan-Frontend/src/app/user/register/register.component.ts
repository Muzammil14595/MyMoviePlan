import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:User= new User();

  constructor(private service:UserService,private router:Router){}

  onSubmit(){
    this.service.register(this.user).subscribe(x=>console.log(x));
    alert("Registeration successful!")
    this.router.navigate(['homepage'])
  }
}
