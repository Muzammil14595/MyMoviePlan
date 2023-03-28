import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-bookseats',
  templateUrl: './bookseats.component.html',
  styleUrls: ['./bookseats.component.css']
})
export class BookseatsComponent {
  movie:Movie;
  constructor(private service:MovieService, private actRoute:ActivatedRoute){}

  ngOnInit(){
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.service.getById(Number(id)).subscribe(x=>this.movie=x)
  }
}
