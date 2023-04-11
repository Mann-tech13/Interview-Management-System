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

import com.project.ims.entity.Developer;
import com.project.ims.service.DeveloperService;
import com.project.ims.vo.DeveloperVo;

@CrossOrigin
@RestController
public class DeveloperController {
	
	@Autowired
	private DeveloperService developerservice;
	
	//Post Developer
	@PostMapping("/developer")
	public DeveloperVo addDeveloper(@RequestBody DeveloperVo developervo) {
		return this.developerservice.addDeveloper(developervo);
	}
	
	//Get Developers
	@GetMapping("/developer")
	public List<DeveloperVo> getDeveloper(){
		return this.developerservice.getDeveloper();
	}
	
	
//	//Get by name
//	@GetMapping("/Developerbyfname/{name}")
//	public List<Developer> findbyName(@PathVariable String name){
//		return this.developerservice.findbyName(name);
//	}
	
	//Update Developer
	@PutMapping("/developer")
	public DeveloperVo updateDeveloper(@RequestBody DeveloperVo developervo){
		return this.developerservice.updateDeveloper(developervo);
	}
	
	//Delete Developer
	@DeleteMapping("/developer/{developerid}")
	public Developer deleteDeveloper(@PathVariable("developerid") int developerid) {
		return this.developerservice.deleteDeveloper(developerid);
		
	}
		
}
