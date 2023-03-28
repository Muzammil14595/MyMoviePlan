package com.example.demo.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.user.entity.User;
import com.example.demo.user.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;
	
	public User addUser(User user) {
		return userRepo.save(user);
	}
	
	public User login(User user) {
		// TODO Auto-generated method stub
		return userRepo.findByEmailPass(user.getEmail(), user.getPassword());
	}
}
