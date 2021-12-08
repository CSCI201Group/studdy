package com.studdy.springboot.modal;

//import java.sql.Date;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column
	private int id;
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;

	@Column
	private String classes; // String of 1's and 0's
	
	@Column
	private String locations; // String of 1's and 0's

	@Column
	private String subjects; // String of 1's and 0's
	
	@Column
	private String schedule; // Numbers separated by , e.g. 8,10,9,13 is Mon 8-10, Tue 9-13

	@Column
	private String matchString;

	@Column
	private String rejectString;

	@Transient
	private static final String[] classList = {"102", "103", "104", "170", "201", "270"};

	@Transient
	private static final String[] locationList = {"Leavey Library", "Doheny Library", "Study rooms", "Outdoors", "Other"};

	@Transient
	private static final String[] subjectList = {"Exams", "Homework", "Labs", "Projects", "Other"};

	@Transient
	private Match match;

	public Student() {
		this.match = new Match();
		this.matchString = "";
		this.rejectString = "";
	}

	public Student(int id, String email, String password, String firstName, String lastName, String classes, String locations, String subjects, String schedule) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.classes = classes;
		this.locations = locations;
		this.subjects = subjects;
		this.schedule = schedule;
		this.matchString = "";
		this.rejectString = "";
		this.match = new Match();
	}

	public Student(String classes) {
		this.id = -1;
		this.email = "guest@usc.edu";
		this.password = "0";
		this.firstName = "Guest";
		this.lastName = "User";
		this.classes = classes;
		this.locations = "00000";
		this.subjects = "00000";
		this.schedule = "00000";
		this.matchString = "";
		this.rejectString = "";
		this.match = new Match();
	}

	@Override
	public String toString() {
		return "Student{" +
				"id=" + id +
				", email='" + email + '\'' +
				", password='" + password + '\'' +
				", firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", classes='" + classes + '\'' +
				", locations='" + locations + '\'' +
				", subjects='" + subjects + '\'' +
				", schedule='" + schedule + '\'' +
				", match=" + match +
				'}';
	}

	public List<String> getClassesList() {
		ArrayList<String> tempClasses = new ArrayList<>();

		for (int i = 0; i < classList.length; i++) {
			if (classes.charAt(i) == '1') {
				tempClasses.add(classList[i]);
			}
		}

		return tempClasses;
	}

	public List<String> getLocationsList() {
		ArrayList<String> tempLocations = new ArrayList<>();

		for (int i = 0; i < locationList.length; i++) {
			if (locations.charAt(i) == '1') {
				tempLocations.add(locationList[i]);
			}
		}

		return tempLocations;
	}

	public List<String> getSubjectsList() {
		ArrayList<String> tempSubjects = new ArrayList<>();

		for (int i = 0; i < subjectList.length; i++) {
			if (subjects.charAt(i) == '1') {
				tempSubjects.add(subjectList[i]);
			}
		}

		return tempSubjects;
	}

	public void saveMatches() {
		matchString = match.getMatchString();
		System.out.println("saveMatches in student: "+ matchString);
	}

	public void saveRejected() {
		rejectString = match.getRejectString();
	}

	public String getMatchString() {
		return matchString;
	}

	public void setMatchString(String matchList) {
		this.matchString = matchList;
	}

	public String getRejectString() {
		return rejectString;
	}

	public void setRejectString(String rejectList) {
		this.rejectString = rejectList;
	}

	public int getId() {
		return id;
	}
	
	public void setID(int id) {
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

	public String getClasses() {
		return classes;
	}

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
	}

	public Match getMatch() {
		return match;
	}

	public void setMatch(Match match) {
		this.match = match;
	}

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}
}