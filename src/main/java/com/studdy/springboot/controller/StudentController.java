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

import com.studdy.springboot.modal.Match;
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

	@GetMapping("/student/email/{email}")
	public Student getEmail(@PathVariable String email) {
		return studentService.getEmail(email);
	}
	
	@GetMapping("/student/validate-email/{email}")
	public Boolean validateEmail(@PathVariable String email) {
		if(studentService.getEmail(email) == null) {
			return false;
		}
		return true;
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
		if(s1.getMatch() == null) {
			s1.setMatch(new Match());
		}
		if(s2.getMatch() == null) {
			s2.setMatch(new Match());
		}
		s1.getMatch().add(s2);

		s1.saveMatches();
		save(s1);
	}

	// Add a rejected student
	@GetMapping("/student/reject/{e1}/{e2}")
	public void addRejected(String e1, String e2) {
		Student s1 = studentService.getEmail(e1);
		Student s2 = studentService.getEmail(e2);
		if(s1.getMatch() == null) {
			s1.setMatch(new Match());
		}
		if(s2.getMatch() == null) {
			s2.setMatch(new Match());
		}
		s1.getMatch().addReject(s2);

		s1.saveRejected();
		save(s1);
	}

	// Save s's matches into database
	@GetMapping("/student/save/{e}")
	public void saveMatches(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		s.saveMatches();
	}

	// Save s's rejected into database
	@GetMapping("/student/saveReject/{e}")
	public void saveRejected(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		s.saveRejected();
	}

	// Get a compatible student for student s
	@GetMapping("/student/potential/{e}")
	public List<Student> GetPotentialMatch(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		if(s.getMatch() == null) {
			s.setMatch(new Match());			
		}
		return s.getMatch().getPotentialNext(s, (ArrayList<Student>) get());
	}

//	USE THIS FOR GUEST
	@GetMapping("/student/potentialList/{c}")
	public List<Student> GetPotentialList(@PathVariable String c) {
		Student s = new Student(c);
		return s.getMatch().getPotentialList(s, (ArrayList<Student>) get());
	}

	// Get list of mutuals for student s
	@GetMapping("/student/mutual/{e}")
	public List<Student> getMutuals(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		if(s.getMatch() == null) {
			s.setMatch(new Match());
		}
		if(s.getMatch() == null) {
			ArrayList<Student> none = new ArrayList<Student>(0);
			return none;
		}
		return s.getMatch().getMutuals(s);
	}

	// Check if s2 matches with s1
	@GetMapping("/student/match/{e1}/{e2}")
	public boolean isMatched(@PathVariable String e1, @PathVariable String e2) {
		Student s1 = studentService.getEmail(e1);
		Student s2 = studentService.getEmail(e2);
		if(s1.getMatch() == null) {
			s1.setMatch(new Match());
		}
		if(s2.getMatch() == null) {
			s2.setMatch(new Match());
		}
		return s1.getMatch().isMatched(s2);
	}

	// Load s's matches into match class
	@GetMapping("/student/load/{e}")
	public void loadMatches(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		String matchString = s.getMatchString();

		Scanner sc = new Scanner(matchString);
		sc.useDelimiter(",");

		ArrayList<Student> sList = new ArrayList<>();

		while (sc.hasNext()) {
			sList.add(studentService.getEmail(sc.next()));
		}

		s.getMatch().setMatchList(sList);
	}

	// Load s's rejected into match class
	@GetMapping("/student/loadRejected/{e}")
	public void loadRejected(@PathVariable String e) {
		Student s = studentService.getEmail(e);
		String rejectedString = s.getRejectString();

		Scanner sc = new Scanner(rejectedString);
		sc.useDelimiter(",");

		ArrayList<Student> sList = new ArrayList<>();

		while (sc.hasNext()) {
			sList.add(studentService.getEmail(sc.next()));
		}

		s.getMatch().setRejectList(sList);
	}

	// Get list of classes for student s
	@GetMapping("/student/classes/{e}")
	public List<String> getClassesList(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getClassesList();
	}

	// Get list of locations for subject s
	@GetMapping("/student/locations/{e}")
	public List<String> getLocationsList(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getLocationsList();
	}

	// Get list of subjects for student s
	@GetMapping("/student/subjects/{e}")
	public List<String> getSubjectsList(@PathVariable String e) {
		Student s = studentService.getEmail(e);

		return s.getSubjectsList();
	}
}