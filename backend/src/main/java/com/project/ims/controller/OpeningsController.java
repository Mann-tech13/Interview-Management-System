package com.project.ims.controller;

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

import com.project.ims.service.OpeningsServices;
import com.project.ims.vo.OpeningsVO;
@CrossOrigin
@RestController
public class OpeningsController {
	
	@Autowired
	private OpeningsServices openingsservices;
	
	
	@GetMapping("/openings")
	public List<OpeningsVO> getOpenings(){
		return this.openingsservices.getOpenings();
	}
	
	//Get Openings by ID
	@GetMapping("/openings/{openingsID}")
	public OpeningsVO getOpeningsbyID(@PathVariable int openingsID) {
		return this.openingsservices.getOpeningsbyID(openingsID);
	}
		
	//Add Openings
	@PostMapping("/openings")
	public OpeningsVO addOpenings(@RequestBody OpeningsVO openingsvo) {
		return this.openingsservices.addOpenings(openingsvo);
	}
	
	//Update Openings
	@PutMapping("/openings")
	public OpeningsVO updateOpenings(@RequestBody OpeningsVO openingsvo) {
		return this.openingsservices.updateOpenings(openingsvo);
	}
	
	@DeleteMapping("/openings/{openingsID}")
	public void deleteOpenings(@PathVariable int openingsID) {
		this.openingsservices.deleteOpenings(openingsID);
	}
	
	
}
