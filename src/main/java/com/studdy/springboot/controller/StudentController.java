package com.studdy.springboot.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

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

	// Add s2 to matchlist of s1
	@GetMapping("/student/add/{e1}/{e2}")
	public void add(@PathVariable String e1, @PathVariable String e2) {
		Student s1 = studentService.getEmail(e1);
		Student s2 = studentService.getEmail(e2);

		s1.getMatch().add(s2);
	}

	// Get a compatible student for student s
	@GetMapping("/student/potential/{e}")
	public Student GetPotentialMatch(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getMatch().getPotentialNext(s, (ArrayList) get());
	}

	// Get list of mutuals for student s
	@GetMapping("/student/mutual/{e}")
	public ArrayList<Student> getMutuals(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getMatch().getMutuals(s);
	}

	// Check if s2 matches with s1
	@GetMapping("/student/match/{e}")
	public boolean isMatched(@PathVariable String e1, @PathVariable String e2) {
		Student s1 = studentService.getEmail(e1);
		Student s2 = studentService.getEmail(e2);

		return s1.getMatch().isMatched(s2);
	}

	// Save s's matches into database
	@GetMapping("/student/save/{e}")
	public void saveMatches(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		s.saveMatches();
	}

	// Load s's matches into match class
	@GetMapping("/student/load/{e}")
	public void loadMatches(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		String matchString = s.getMatchList();

		Scanner sc = new Scanner(matchString);
		sc.useDelimiter(",");

		ArrayList<Student> sList = new ArrayList<>();

		while (sc.hasNext()) {
			sList.add(studentService.getEmail(sc.next()));
		}

		s.getMatch().setMatchList(sList);
	}
}