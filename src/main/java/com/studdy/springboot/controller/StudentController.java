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

	@GetMapping("/student/{id}")
	public void add(@PathVariable int id1, @PathVariable int id2 ) {
		Student s1 = studentService.get(id1);
		Student s2 = studentService.get(id2);

		s1.getMatch().add(s2);
	}

	@GetMapping("/student/{id}")
	public Student GetPotentialMatch(@PathVariable int id) {
		Student s = studentService.get(id);

		return s.getMatch().getPotentialNext(s, (ArrayList) get());
	}

	@GetMapping("/student/{id}")
	public ArrayList<Student> getMutuals(@PathVariable int id) {
		Student s = studentService.get(id);

		return s.getMatch().getMutuals(s);
	}


}