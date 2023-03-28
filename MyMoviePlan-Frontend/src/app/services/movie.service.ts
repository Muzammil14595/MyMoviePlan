import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl:string = "http://localhost:8080/api/movie";
  constructor(private http:HttpClient) { }

  addMovie(movie:Movie){
    return this.http.post(this.baseUrl,movie);
  }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getById(id:number): Observable<Movie>{
    return this.http.get<Movie>(this.baseUrl+"/"+id);
  }

  updMovie(id:number,movie:Movie){
    return this.http.put(this.baseUrl+"/"+id,movie);
  }

  delMovie(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
}
