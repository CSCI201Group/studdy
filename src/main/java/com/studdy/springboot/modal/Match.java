package com.studdy.springboot.modal;

import com.studdy.springboot.service.StudentServiceImp;

import java.util.ArrayList;

public class Match {
    private final StudentServiceImp studentService;
    private ArrayList<Student> matchList;
    private ArrayList<Student> potentialMatchList;
    private Long currId;
    private int batchSize;

    public Match(StudentServiceImp studentService) {
        this.studentService = studentService;
        this.matchList = new ArrayList<>();
        this.potentialMatchList = new ArrayList<>();
        this.currId = 0L;
        this.batchSize = 0;
    }

    // Calculate compatibility
    private double compatibility(Student s1, Student s2) {
        return 0.5;
    }

    // Return list of matches
    public ArrayList<Student> get() {
        return matchList;
    }

    // Add given student to list of matches
    public void add(Long id) {
        matchList.add(studentService.get(id));
    }

    // Remove student with given id from list of matches
    public void remove(Long id) {
        matchList.remove(studentService.get(id));
    }

    // Get potential match
    public Student getPotentialNext(Student student) {
        if (potentialMatchList.isEmpty()) {
            int count = 0;

            while (true) {
                if (count >= batchSize) {
                    break;
                }

                Student temp = studentService.get(currId);
                currId++;

                if (compatibility(student, temp) > 0.5) {
                    potentialMatchList.add(temp);
                    count++;
                }
            }
        }

        Student temp = potentialMatchList.get(0);
        potentialMatchList.remove(0);
        return temp;
    }

    // Check if this.student matched with student with given id
    public boolean isMatched(Long id) {
        if (matchList.contains(studentService.get(id))) {
            return true;
        }

        return false;
    }
}
