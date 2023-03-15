package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Student;

		//Jpa Repository contains the APIs for basic CRUD operations, the APIS for pagination, and the APIs for sorting
public interface StudentRepository extends JpaRepository<Student,Integer> {

}
