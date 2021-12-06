// DAO - Database access object
package com.studdy.springboot.dao;

import java.util.List;
import com.studdy.springboot.modal.Student;

public interface StudentDAO {
	List<Student> get();
	Student get(int id);
	Student getEmail(String email);
	void save(Student student);
	void delete(int id);
	Boolean validateEmail(String email, String password);
}