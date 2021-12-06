package com.studdy.springboot.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studdy.springboot.modal.Student;
import com.studdy.springboot.service.StudentService;

@RestController
@RequestMapping("/api")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/student")
	public List<Student> get() {
		return studentService.get();
	}
	
	@GetMapping("/student/{email}/{password}")
	public Boolean validate( @PathVariable String email, @PathVariable String password) {
		return studentService.validate(email, password);
	}
	
	@PostMapping("/student")
	public Student save(@RequestBody Student student) {
		studentService.save(student);
		return student;
	}

	@GetMapping("/student/{id}")
	public Student get(@PathVariable int id) {
		return studentService.get(id);
	}

	@GetMapping("/student/{email}")
	public Student getEmail(@PathVariable String email) {
		return studentService.getEmail(email);
	}

	@DeleteMapping("/student/{id}")
 	public String delete(@PathVariable int id) {
		studentService.delete(id);
		return "Student removed with id "+id;
	}
	
	@PutMapping("/student")
	public Student update(@RequestBody Student student) {
		studentService.save(student);
		return student;
	}

	@GetMapping("/student/add/{e1}/{e2}")
	public void add(@PathVariable String e1, @PathVariable String e2 ) {
		Student s1 = studentService.getEmail(e1);
		Student s2 = studentService.getEmail(e2);

		s1.getMatch().add(s2);
	}

	@GetMapping("/student/potential/{e}")
	public Student GetPotentialMatch(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getMatch().getPotentialNext(s, (ArrayList) get());
	}

	@GetMapping("/student/mutual/{e}")
	public ArrayList<Student> getMutuals(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getMatch().getMutuals(s);
	}


}