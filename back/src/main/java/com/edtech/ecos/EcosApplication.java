package com.edtech.ecos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@ConfigurationPropertiesScan
@SpringBootApplication
public class EcosApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcosApplication.class, args);
	}

}
