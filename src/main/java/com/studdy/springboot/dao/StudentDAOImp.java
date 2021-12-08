package com.studdy.springboot.dao;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.studdy.springboot.modal.Student;
@Repository
public class StudentDAOImp implements StudentDAO {
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Student> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Student> query = currSession.createQuery("from Student", Student.class);
		List<Student> list = query.getResultList();
		return list;
	}
	
	@Override
	public Student get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Student student = currSession.get(Student.class, id);
		return student;
	}

	public Student getEmail(String email) {
		Session currSession = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		List<Student> students = currSession
				.createQuery("SELECT s FROM Student s WHERE email = :email")
				.setParameter("email", email).getResultList();
		if(students.size() == 0) {
			return null;
		}
		return students.get(0);
	}
	
	@Override
	public void save(Student student) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(student);
	}
	
	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Student student = currSession.get(Student.class, id);
		currSession.delete(student);
	}
	
	@Override
	public Boolean validateEmail(String email, String password) {
		Session currSession = entityManager.unwrap(Session.class);
		@SuppressWarnings("unchecked")
		Query<Student> q = currSession.createQuery("SELECT s.email, s.password FROM Student s WHERE s.email = :email AND s.password = :password");
		q.setCacheable(true);
		q.setParameter("email", email);
		q.setParameter("password", password);
		List<Student> list = q.getResultList();
		if(list.size() == 0) {
			return false;
		}
		else {
			return true;
		}
	}
}