CREATE DATABASE studdy;

CREATE TABLE students(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL,
    password VARCHAR(64) NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    year VARCHAR(4) DEFAULT NULL,
    major VARCHAR(4) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE classes(
	classID INT NOT NULL AUTO_INCREMENT,
    class VARCHAR(7) DEFAULT NULL,
    PRIMARY KEY (classID)
);

CREATE TABLE currentClasses(
	classes_id INT,
    student_id INT,
    FOREIGN KEY (classes_id) REFERENCES classes(classID),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE swipes(
	swipeID INT NOT NULL AUTO_INCREMENT,
    student1_id INT,
    student2_id INT,
    PRIMARY KEY (swipeID),
    FOREIGN KEY (student1_id) REFERENCES students(id),
    FOREIGN KEY (student2_id) REFERENCES students(id)
);

CREATE TABLE chats(
	chatID INT NOT NULL AUTO_INCREMENT,
    student1_id INT,
    student2_id INT,
    PRIMARY KEY (chatID),
    FOREIGN KEY (student1_id) REFERENCES students(id),
    FOREIGN KEY (student2_id) REFERENCES students(id)
);

CREATE TABLE messages(
	messageID INT NOT NULL AUTO_INCREMENT,
    chatID INT,
    message VARCHAR(255),
    timestamp TIMESTAMP,
    sender_id INT,
    PRIMARY KEY (messageID),
    FOREIGN KEY (chatID) REFERENCES chats(chatID),
    FOREIGN KEY (sender_id) REFERENCES students(id)
);

-- INSERT PLACEHOLDER VALUES FOR TESTING
INSERT INTO students(email, password, first_name, last_name, year, major)
VALUES('sthuynh@usc.edu', 1234, 'Serena', 'Huynh', '2024', 'CS');

INSERT INTO students(email, password, first_name, last_name, year, major)
VALUES('test@usc.edu', 123, 'Test', 'One', '2023', 'CSBA');

SELECT * FROM students;