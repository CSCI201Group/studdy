CREATE DATABASE studdy;

CREATE TABLE students(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL,
    password VARCHAR(64) NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    classes VARCHAR(45),
    locations VARCHAR(255),
    subjects VARCHAR(45),
    schedule VARCHAR(255),
    matchList VARCHAR(255),
    rejectList VARCHAR(255),
    PRIMARY KEY (id)
);

-- INSERT PLACEHOLDER VALUES FOR TESTING
INSERT INTO students(email, password, first_name, last_name, classes, locations, subjects, schedule, matchList, rejectList)
VALUES('sthuynh@usc.edu', 1234, 'Serena', 'Huynh', '100100', '01000', '11000', 'Mon9-12,Tues13-14,Wed13-15,Thur12-16,Fri9-13', 'test@usc.edu', '');

INSERT INTO students(email, password, first_name, last_name, classes, locations, subjects, schedule, matchList, rejectList)
VALUES('test@usc.edu', 123, 'Test', 'One', '000000', '00000', '00000', 'Mon9-10,Tues11-12,Wed10-11,Thurs0-0,Fri8-12', 'sthuynh@usc.edu', '');

SELECT * FROM students;