package com.project.ims.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ims.entity.Developer;
import com.project.ims.repository.DeveloperRepo;
import com.project.ims.vo.DeveloperVo;

@Service
public class DeveloperServiceImpl  implements DeveloperService{
	
	
	@Autowired
	private DeveloperRepo developerrepo;
	
	//Post Developer
	public DeveloperVo addDeveloper(DeveloperVo developervo) {
		Developer dev = new Developer(developervo.getDeveloperid(),developervo.getFirstName(),developervo.getLastName(),developervo.getDesignation(),developervo.getExperience(),developervo.getEmail(),developervo.getPhoneNo(),developervo.getFlag());	
		developerrepo.save(dev);
		return developervo;
		}
	
	//Get Developers
	public List<DeveloperVo> getDeveloper() {
		List<DeveloperVo> dev = new ArrayList<DeveloperVo>();
		List<Developer>List = developerrepo.findAll();
		for(int i=0; i<List.size(); i++) {
			Developer gd = List.get(i);
			DeveloperVo de =  new DeveloperVo(gd.getDeveloperid(), gd.getFirstName(), gd.getLastName(), gd.getDesignation(), gd.getExperience(), gd.getEmail(),gd.getPhoneNo(), gd.getFlag());
			dev.add(de);
		}
		return dev;
	}
	
	//Update Developers
	public DeveloperVo updateDeveloper(DeveloperVo developervo){
		Developer devs = new Developer(developervo.getDeveloperid(), developervo.getFirstName(), developervo.getLastName(), developervo.getDesignation(), developervo.getExperience(), developervo.getEmail(), developervo.getPhoneNo(), developervo.getFlag());
		developerrepo.save(devs);
		return developervo;
	}
	
		//Delete developer
		public Developer deleteDeveloper(int developerid) {
			Developer dev = new Developer();
		 developerrepo.deleteById(developerid);
		return dev;
		}

//	//Get by fName
//	public List<Developer> findbyName(String name) {
//		List<Developer> listofdev = new ArrayList<Developer>();
//		List<Developer> devs = developerrepository.findbyName(name);
//		for(Developer developer:devs) {
//			listofdev.add(developer);
//		}
//		return listofdev;
//	}
	

}
