package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Student;
import com.example.Repository.StudentRepository;

		//this annotation  used to create RESTful web services using Spring MVC

@RestController

		//this annotation used to enables cross-origin resource sharing only for this specific method

@CrossOrigin(origins = "http://localhost:4200")

public class StudentController {
	
		
			//this annotation used to automatic dependency injection
	@Autowired
	StudentRepository studentRepository;
	
			// mapping HTTP GET requests onto specific handler methods
	@GetMapping("/student")
	public List<Student> findAllStudent()
	{
		return (List<Student>)studentRepository.findAll();
	}
		
			// mapping HTTP Post requests onto specific handler methods
	@PostMapping("/student")
	public Student createStudent(@RequestBody Student student)
	{
		return studentRepository.save(student);
	}
	
			//mapping HTTP Delete requests onto specific handler methods
	@DeleteMapping("/student/{id}")
	public void deleteStudent(@PathVariable int id)
	{
		studentRepository.deleteById(id);
	}
	
			//mapping HTTP Put requests onto specific handler methods
	@PutMapping("/student/{id}")
	public Student updateStudent(@PathVariable int id,@RequestBody Student student)
	{
		Student _student=studentRepository.findById(student.getId()).get();
		_student.setName(student.getName());
		_student.setEmail(student.getEmail());
		return studentRepository.save(_student);
		
	}

}
