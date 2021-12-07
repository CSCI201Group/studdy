package com.studdy.springboot.modal;

import com.studdy.springboot.controller.StudentController;
import com.studdy.springboot.dao.StudentDAOImp;
import com.studdy.springboot.service.StudentServiceImp;

import java.util.ArrayList;

public class Match {
    private ArrayList<Student> matchList;
    private int currId;

    public Match() {
        this.matchList = new ArrayList<>();
        this.currId = 0;
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
    public ArrayList<Student> get() {
        return matchList;
    }

    public void setMatchList(ArrayList<Student> matchList) {
        this.matchList = matchList;
    }

    // Get string of matches' email
    public String getMatchString() {
        String emails = "";

        for (Student s : matchList) {
            emails = emails + s.getEmail() + ",";
        }

        return emails;
    }

    // Add given student to list of matches
    public void add(Student s) {
        matchList.add(s);
    }

    // Remove student with given id from list of matches
    public void remove(Student s) {
        matchList.remove(s);
    }

    // Get potential match
    public ArrayList<Student> getPotentialNext(Student student, ArrayList<Student> studentList) {
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

        int tempCurrId = currId;

        if (currId == studentList.size()) {
            currId = 0;
        }

        for (int i = tempCurrId; i < studentList.size(); i++) {
            currId++;
            if (compatibility(student, studentList.get(i))) {
                tempList.add(studentList.get(i));
            }
        }

        return tempList;
    }

    // Get list of potential matches for guests
    public ArrayList<Student> getPotentialList(Student student, ArrayList<Student> studentList) {
        ArrayList<Student> tempList = new ArrayList<>();
        
        for (Student s : studentList) {
            if (compatibility(student, s)) {
                tempList.add(s);
            }
        }

        return tempList;
    }

    // Return list of mutuals
    public ArrayList<Student> getMutuals(Student s1) {
        ArrayList<Student> mutuals = new ArrayList<>();

        for (Student tempS : matchList) {
            if (tempS.getMatch().isMatched(s1)) {
                mutuals.add(tempS);
            }
        }

        return mutuals;
    }

    // Check if this.student matched with student with given id
    public boolean isMatched(Student s) {
        if (matchList.contains(s)) {
            return true;
        }

        return false;
    }
}
