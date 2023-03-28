package com.example.demo.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.user.entity.Movie;
import com.example.demo.user.repository.MovieRepo;

@Service
public class MovieService {

	@Autowired
	MovieRepo movieRepo;
	
	public Movie addMovie(Movie movie) {
		return movieRepo.save(movie);
	}

	public List<Movie> getAllMovies() {
		// TODO Auto-generated method stub
		return movieRepo.findAll();
	}

	public void delMovie(int id) {
		// TODO Auto-generated method stub
		movieRepo.deleteById(id);
	}

	public void updMovie(int id, Movie movie) {
		if(movieRepo.findById(id).isPresent()) {
			
			Movie oldMovie = movieRepo.findById(id).get();
			oldMovie.setName(movie.getName());
			oldMovie.setLanguage(movie.getLanguage());
			oldMovie.setGenre(movie.getGenre());
			oldMovie.setDescription(movie.getDescription());
			oldMovie.setPrice(movie.getPrice());
			oldMovie.setShowTime(movie.getShowTime());
			oldMovie.setImageUrl(movie.getImageUrl());
			movieRepo.save(oldMovie);
		}
	}

	public Movie getById(int id) {
		// TODO Auto-generated method stub
		return movieRepo.findById(id).get();
	}
}
