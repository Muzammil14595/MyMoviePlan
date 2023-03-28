import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-adminallmovies',
  templateUrl: './adminallmovies.component.html',
  styleUrls: ['./adminallmovies.component.css']
})
export class AdminallmoviesComponent {
  term:any;
  movies:Movie[];
  constructor(private service:MovieService){}

  ngOnInit(){
    this.service.getAllMovies().subscribe(x=>this.movies=x);
  }
}
