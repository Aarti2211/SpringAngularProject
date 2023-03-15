package com.example.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

	//this annotation specifies that the class is an entity and is mapped to a database table

@Entity

@Table(name="Student_Data")
public class Student {
	
			//default constructor
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	
		//parameterized constructor
	public Student(int id, String name, String email) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
	}
	
			//getter setter method  of each private variable of class
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
			//declare all private variable of class
	
		//this annotation used to set primary key
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private String email;

}
