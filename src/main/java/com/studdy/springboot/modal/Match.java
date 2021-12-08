package com.studdy.springboot.modal;

import com.studdy.springboot.controller.StudentController;
import com.studdy.springboot.dao.StudentDAOImp;
import com.studdy.springboot.service.StudentServiceImp;

import java.util.ArrayList;
import java.util.List;

public class Match {
    private ArrayList<Student> matchList;
    private ArrayList<Student> rejectList;

    public Match() {
        this.matchList = new ArrayList<>();
        this.rejectList = new ArrayList<>();
    }

    // Calculate compatibility
    private boolean compatibility(Student s1, Student s2) {
        for (int i = 0; i < s1.getClasses().length(); i++) {
            if (s1.getClasses().charAt(i) == '1' &&  s2.getClasses().charAt(i) == '1') {
                return true;
            }
        }

        return false;
    }

    // Return list of matches
    public List<Student> getMatchList() {
        return matchList;
    }

    public void setMatchList(ArrayList<Student> matchList) {
        this.matchList = matchList;
    }

    public ArrayList<Student> getRejectList() {
        return rejectList;
    }

    public void setRejectList(ArrayList<Student> rejectList) {
        this.rejectList = rejectList;
    }

    // Get string of matched student' email
    public String getMatchString() {
        String emails = "";

        for (Student s : matchList) {
            emails = emails + s.getEmail() + ",";
        }

        return emails;
    }

    // Get string of rejected students' email
    public String getRejectString() {
        String emails = "";

        for (Student s : rejectList) {
            emails = emails + s.getEmail() + ",";
        }

        return emails;
    }

    // Add given student to list of matches
    public void add(Student s) {
        matchList.add(s);
        System.out.println("add in match: " + matchList);
    }

    // Remove student with given id from list of matches
    public void remove(Student s) {
        matchList.remove(s);
    }

    // Add given student to list of rejected
    public void addReject(Student s) {
        rejectList.add(s);
    }

    // Get potential match
    public List<Student> getPotentialNext(Student student, ArrayList<Student> studentList) {
        /*
        Student temp;

        while (true) {
            temp = studentList.get(currId);
            currId++;

            if (compatibility(student, temp)) {
                break;
            }
        }

        return temp;
        */

        ArrayList<Student> tempList = new ArrayList<>();

        for (Student s : studentList) {
            if (compatibility(student, s) && !matchList.contains(s) && !rejectList.contains(s)) {
//            	added if statement so it doesn't include the user itself
            	if(s != student) {
            		tempList.add(s);
            	}
            }
        }

        return tempList;
    }

    // Get list of potential matches for guests
    public List<Student> getPotentialList(Student student, ArrayList<Student> studentList) {
        ArrayList<Student> tempList = new ArrayList<>();
        
        for (Student s : studentList) {
            if (compatibility(student, s)) {
                tempList.add(s);
            }
        }

        return tempList;
    }

    // Return list of mutuals
    public List<Student> getMutuals(Student s1) {
        ArrayList<Student> mutuals = new ArrayList<>();

        for (Student tempS : matchList) {
            if (tempS.getMatch().isMatched(s1)) {
                mutuals.add(tempS);
            }
        }

        return mutuals;
    }

    // Check if this student matched with student with given id
    public boolean isMatched(Student s) {
        if (matchList.contains(s)) {
            return true;
        }

        return false;
    }
}
