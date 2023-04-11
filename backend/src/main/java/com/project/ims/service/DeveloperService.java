package com.project.ims.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.ims.entity.Developer;
import com.project.ims.vo.DeveloperVo;

@Service
public interface DeveloperService {
	
	//Post Developer
	public DeveloperVo addDeveloper(DeveloperVo developervo);
	
	//Get Developer 
	public List<DeveloperVo> getDeveloper();
	
//	//Get by name
//	 public List<Developer> findbyName(String name);
	
	//Update Developers
	public DeveloperVo updateDeveloper(DeveloperVo developervo);
	
	//Delete Developer
	public Developer deleteDeveloper(int developerid);


	 

}
