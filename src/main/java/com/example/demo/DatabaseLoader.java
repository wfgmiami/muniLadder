package com.example.demo;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import java.util.List;
import java.io.File;

@Component
public class DatabaseLoader implements CommandLineRunner {
	
	private ProjectedCashRepository projectedCash;

	@Autowired
	public DatabaseLoader(ProjectedCashRepository projectedCash) {
		this.projectedCash = projectedCash;
	}
	
	@Override
	public void run(String ...strings) throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		TypeReference<List<ProjectedCash>> typeReference = new TypeReference<List<ProjectedCash>>() {};
		
		List<ProjectedCash> projectedCash = objectMapper.readValue(new File("muniData.json"), typeReference);
	
		this.projectedCash.save(projectedCash);
		ProjectedCash pc = this.projectedCash.findOne(5L);
		System.out.println(pc.toString());

	}
}