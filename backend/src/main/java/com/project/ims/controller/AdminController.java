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

import com.project.ims.service.AdminServices;
import com.project.ims.vo.AdminVO;

@RestController
public class AdminController {
	
	@Autowired
	private AdminServices adminservices;
	
	//Get all Admin
	@GetMapping("/admin")
	public List<AdminVO> getAdmin(){
		return this.adminservices.getAdmin();
	}
	
	//Get Admin by ID
	@GetMapping("/admin/{adminID}")
	public AdminVO getAdminbyID(@PathVariable int adminID) {
		return this.adminservices.getAdminbyID(adminID);
	}
	
	//Add Admin
	@PostMapping("/admin")
	public AdminVO addAdmin(@RequestBody AdminVO adminvo) {
		return this.adminservices.addAdmin(adminvo);
	}
	
	//Update Admin
	@PutMapping("/admin")
	public AdminVO updateAdmin(@RequestBody AdminVO adminvo) {
		return this.adminservices.updateAdmin(adminvo);
	}
	
	//Delete Admin
	@DeleteMapping("/admin/{adminID}")
	public void deleteAdmin(@PathVariable int adminID) {
		this.adminservices.deleteAdmin(adminID);
	}
	
	
}
