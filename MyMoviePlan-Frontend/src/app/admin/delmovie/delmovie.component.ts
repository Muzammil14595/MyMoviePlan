import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-delmovie',
  templateUrl: './delmovie.component.html',
  styleUrls: ['./delmovie.component.css']
})
export class DelmovieComponent {
  movie:Movie;
  constructor(private service:MovieService,private actRoute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    const id= this.actRoute.snapshot.paramMap.get("id");
    this.service.delMovie(Number(id)).subscribe(resp=>{
      this.router.navigate(['adminallmovies']);
    }, error=>console.log(error));
    alert("Item deleted");
  }
}
