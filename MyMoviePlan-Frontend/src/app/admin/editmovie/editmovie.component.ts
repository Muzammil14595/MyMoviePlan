import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent {

  movie:Movie = new Movie();
  constructor(private service:MovieService, private actRoute:ActivatedRoute, private router:Router){}
  
  ngOnInit(){

  }

  onSubmit(){
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.service.updMovie(Number(id),this.movie).subscribe(x=>console.log(x)); 
    this.router.navigate(['adminallmovies']);
  }
}
