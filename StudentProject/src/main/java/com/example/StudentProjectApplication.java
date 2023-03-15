package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

  // this annotation is equivalent to using @Configuration, @EnableAutoConfiguration, and @ComponentScan with their default attributes

@SpringBootApplication
public class StudentProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentProjectApplication.class, args);
	}

}
