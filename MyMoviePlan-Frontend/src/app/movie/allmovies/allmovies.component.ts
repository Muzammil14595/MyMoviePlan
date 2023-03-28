import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css']
})
export class AllmoviesComponent {

  term:any;
  movies:Movie[];
  constructor(private service:MovieService){}

  ngOnInit(){
    this.service.getAllMovies().subscribe(x=>this.movies=x);
  }
}
