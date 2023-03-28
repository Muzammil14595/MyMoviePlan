import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  user:User= new User();

  constructor(private service:UserService,private router:Router){}

  onSubmit(){
    this.service.login(this.user).subscribe(resp=>{
      this.router.navigate(['allmovies']);
    }, error=>(console.log(error), alert("User Not Found")));
  }
}
