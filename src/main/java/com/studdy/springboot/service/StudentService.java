package com.studdy.springboot.service;

import java.util.List;
import com.studdy.springboot.modal.Student;

public interface StudentService {
	List<Student> get();
	Student get(int id);
	Student getEmail(String email);
	void save(Student student);
	void delete(int id);
	Boolean validate(String email, String password);
}