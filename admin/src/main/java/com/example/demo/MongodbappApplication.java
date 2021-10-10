package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@EnableEurekaClient
public class MongodbappApplication implements CommandLineRunner {

	
	public static void main(String[] args) {
		SpringApplication.run(MongodbappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	
		
	}

}
