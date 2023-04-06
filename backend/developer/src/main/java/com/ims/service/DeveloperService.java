package com.ims.service;

import java.util.List;

import com.ims.entity.Developer;
import com.ims.vo.DeveloperVo;


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
