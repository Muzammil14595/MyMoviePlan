package com.example.demo.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.user.entity.Movie;
import com.example.demo.user.service.MovieService;

@RestController
@RequestMapping("/api/movie")
@CrossOrigin("http://localhost:4200/")
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	@PostMapping("")
	public ResponseEntity<Object> addMovie(@RequestBody Movie movie){
		Movie createdMovie = movieService.addMovie(movie);
		if(createdMovie != null) {
			return new ResponseEntity<Object> (createdMovie, HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("")
	public List<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	
	@GetMapping("/{id}")
	public Movie getbyId(@PathVariable int id) {
		return movieService.getById(id);
	}
	
	@DeleteMapping("/{id}")
	public void delMovie(@PathVariable int id) {
		movieService.delMovie(id);
	}
	
	@PutMapping("/{id}")
	public void updMovie(@PathVariable int id, @RequestBody Movie movie) {
		movieService.updMovie(id, movie);		
	}
}
