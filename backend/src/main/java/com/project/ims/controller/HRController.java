package com.project.ims.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.ims.service.HRServices;
import com.project.ims.vo.HRVO;

@RestController
public class HRController {
	
	@Autowired
	private HRServices hrservices;
	
	//Get all HR
	@GetMapping("/hr")
	public List<HRVO> getHR() {
		return this.hrservices.getHR();
	}
	
	//Get HR by ID
	@GetMapping("/hr/{hrID}")
	public HRVO getHRbyID(@PathVariable int hrID) {
		return this.hrservices.getHRbyID(hrID);
	}
	
	//Add HR
	@PostMapping("/hr")
	public HRVO addHR(@RequestBody HRVO hrvo) {
		return this.hrservices.addHR(hrvo);
	}
	
	// Update HR
	@PutMapping("/hr")
	public HRVO updateHR(@RequestBody HRVO hrvo) {
		return this.hrservices.updateHR(hrvo);
	}
	
	// Delete HR
	@DeleteMapping("/hr/{hrID}")
	public void deleteHR(@PathVariable int hrID) {
		this.hrservices.deleteHR(hrID);
	}
}
