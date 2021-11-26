package com.studdy.springboot.modal;

import com.studdy.springboot.service.StudentServiceImp;

import java.util.ArrayList;

public class Match {
    private final StudentServiceImp studentService;
    private ArrayList<Student> matchList;
    private ArrayList<Student> potentialMatchList;

    public Match(StudentServiceImp studentService) {
        this.studentService = studentService;
        this.matchList = new ArrayList<>();
        this.potentialMatchList = new ArrayList<>();
    }

    // Return list of matches
    public ArrayList<Student> get() {
        return matchList;
    }

    // Add given student to list of matches
    public void add(int id) {
        matchList.add(studentService.get(id));
    }
}
