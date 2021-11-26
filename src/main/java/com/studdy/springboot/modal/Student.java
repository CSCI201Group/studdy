package com.studdy.springboot.modal;

//import java.sql.Date;

import javax.persistence.*;

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
	private String year;
	
	@Column
	private String major;

	@Transient
	private Match match;

	public Student(Long id, String email, String password, String firstName, String lastName, String year, String major, Match match) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.year = year;
		this.major = major;
		this.match = match;
	}

	public Student() {

	}

	@Override
	public String toString() {
		return "Student [id= " + id + "email= " + email + ", password=" + password + ", first name=" + firstName
				+ ", last name=" + lastName + ", year=" + year + ", major=" + major + "]";
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
	
	public String getYear() {
		return year;
	}
	
	public void setYear(String year) {
		this.year = year;
	}
	
	public String getMajor() {
		return major;
	}
	
	public void setMajor(String major) {
		this.major = major;
	}
}