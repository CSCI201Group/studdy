package com.studdy.springboot.modal;

//import java.sql.Date;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column
	private Long id;
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;

	@Column
<<<<<<< HEAD
	private int year;

=======
	private String classes; // use "," (comma) as delimiter
	
	@Column
	private String locations; //use "," (comma) as delimiter
	
>>>>>>> c7f5c13fad4951c9a4599492e3ec86db35a21678
	@Column
	private String subjects; //use "," (comma) as delimiter

	@Transient
	private static final int[] classList = {102, 103, 104, 170, 201, 270};

	@Transient
	private Match match;

	public Student() {

	}

<<<<<<< HEAD
	public Student(Long id, String email, String password, String firstName, String lastName, int year, String classes, Match match) {
=======
	public Student(Long id, String email, String password, String firstName, String lastName, String classes, String locations, String subjects, Match match) {
>>>>>>> c7f5c13fad4951c9a4599492e3ec86db35a21678
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
<<<<<<< HEAD
		this.year = year;
		this.classes = classes;
=======
		this.classes = classes;
		this.locations = locations;
		this.subjects = subjects;
>>>>>>> c7f5c13fad4951c9a4599492e3ec86db35a21678
		this.match = match;
	}

	@Override
	public String toString() {
<<<<<<< HEAD
		return "Student [first name= " +  firstName + ", last name=" + lastName + ", year=" + year + ", id=" + id + ", email= " + email + ", password=" + password + "]";
	}

	public String matchedToString () {
		return "first name=" + firstName + ", last name=" + lastName + ", year=" + year + ", id= " + id;
	}

	public String unmatchedToString() {
		return "first name=" + firstName + ", last name=" + lastName + "email= " + email + ", year=" + year + ", id= " + id;
=======
		return "Student [id= " + id + "email= " + email + ", password=" + password + ", first name=" + firstName
				+ ", last name=" + lastName + ", classes=" + classes + ", locations=" + locations + ", subjects=" + subjects + "]";
>>>>>>> c7f5c13fad4951c9a4599492e3ec86db35a21678
	}
	
	public Long getId() {
		return id;
	}
	
	public void setID(Long id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
//		
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getClasses() {
		return classes;
	}
	
<<<<<<< HEAD
	public int getYear() {
		return year;
	}
	
	public void setYear(int year) {
		this.year = year;
	}

	public String getClasses() {
		return classes;
	}

	public void setClasses(String classes) {
		this.classes = classes;
=======
	public void setClasses(String classes) {
		this.classes = classes;
	}
	
	public String getLocations() {
		return locations;
	}
	
	public void setLocations(String locations) {
		this.locations = locations;
	}

	public String getSubjects() {
		return subjects;
	}
	
	public void setSubjects(String subjects) {
		this.subjects = subjects;
>>>>>>> c7f5c13fad4951c9a4599492e3ec86db35a21678
	}
}