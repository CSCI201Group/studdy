package com.studdy.springboot.service;

import java.util.List;
import com.studdy.springboot.modal.Student;

public interface StudentService {
	List<Student> get();
	Student get(Long id);
	void save(Student student);
	void delete(Long id);
}