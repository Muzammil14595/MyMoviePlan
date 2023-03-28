package com.example.demo.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.user.entity.User;
import com.example.demo.user.service.UserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:4200/")
public class UserController {

	@Autowired
	UserService service;
	
	@PostMapping("")
	public ResponseEntity<Object> register(@RequestBody User user){
		//calling method to save object and taking response in variable named 'created'
		User created= service.addUser(user);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.CREATED);
		else
			return new ResponseEntity<Object>("Error while registering the user",
					HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody User user){
		//calling method login to save object of Customer and taking response in variable named 'created'
		User created= service.login(user);
		if(created!=null)
			return new ResponseEntity<Object>(created,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("Not Found",
					HttpStatus.NOT_FOUND);
	}
}
