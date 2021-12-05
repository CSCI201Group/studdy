package com.studdy.springboot.modal;

import com.studdy.springboot.controller.StudentController;
import com.studdy.springboot.dao.StudentDAOImp;
import com.studdy.springboot.service.StudentServiceImp;

import java.util.ArrayList;

public class Match {
    private StudentDAOImp DAO;
    private ArrayList<Student> matchList;
    private ArrayList<Student> potentialMatchList;
    private Long currId;
    private int batchSize;

    public Match(StudentDAOImp DAO) {
        this.DAO = DAO;
        this.matchList = new ArrayList<>();
        this.potentialMatchList = new ArrayList<>();
        this.currId = 0L;
        this.batchSize = 1;
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

    // Add given student to list of matches
    public void add(Student s) {
        matchList.add(s);
    }

    // Remove student with given id from list of matches
    public void remove(Student s) {
        matchList.remove(s);
    }

    // Get potential match
    public Student getPotentialNext(Student student) {
        if (potentialMatchList.isEmpty()) {
            int count = 0;

            while (true) {
                if (count >= batchSize) {
                    break;
                }

                Student temp = DAO.get(currId);
                currId++;

                if (compatibility(student, temp)) {
                    potentialMatchList.add(temp);
                    count++;
                }
            }
        }

        Student temp = potentialMatchList.get(0);
        potentialMatchList.remove(0);
        return temp;
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
