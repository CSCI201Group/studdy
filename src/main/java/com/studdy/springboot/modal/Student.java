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
	private int year;

	@Column
	private String classes; // String of 1's and 0's representing true false

	@Transient
	private static final int[] classList = {103, 104, 170, 201, 270};

	@Transient
	private Match match;

	public Student() {

	}

	public Student(Long id, String email, String password, String firstName, String lastName, int year, String classes, Match match) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.year = year;
		this.classes = classes;
		this.match = match;
	}

	@Override
	public String toString() {
		return "Student [first name= " +  firstName + ", last name=" + lastName + ", year=" + year + ", id=" + id + ", email= " + email + ", password=" + password + "]";
	}

	public String matchedToString () {
		return "first name=" + firstName + ", last name=" + lastName + ", year=" + year + ", id= " + id;
	}

	public String unmatchedToString() {
		return "first name=" + firstName + ", last name=" + lastName + "email= " + email + ", year=" + year + ", id= " + id;
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
	}
}