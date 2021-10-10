package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.CrossOrigin;



@EnableDiscoveryClient
@SpringBootApplication
@CrossOrigin
public class ApigatewayApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(ApigatewayApplication.class, args);
	}
	
	
}
