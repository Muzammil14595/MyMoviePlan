import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {

  movie:Movie = new Movie();
  constructor(private service:MovieService, private router:Router){}

  onSubmit(){
    this.service.addMovie(this.movie).subscribe(x=>console.log(x));
    alert("Movie added successful!")
    this.router.navigate(['adminallmovies']);
  }
}
