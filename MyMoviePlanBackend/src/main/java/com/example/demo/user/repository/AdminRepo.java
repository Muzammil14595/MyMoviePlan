package com.example.demo.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.user.entity.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{

	@Query("from Admin a where a.email=:email and a.password=:password")
	public Admin adminLogin(String email, String password);
	
	@Query("from Admin a where a.email=:email")
	public Admin getByEmail(String email);
}
