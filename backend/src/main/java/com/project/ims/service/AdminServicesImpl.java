package com.project.ims.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ims.repository.AdminRepo;
import com.project.ims.entity.Admin;
import com.project.ims.vo.AdminVO;

@Service
public class AdminServicesImpl implements AdminServices {
	
	@Autowired
	private AdminRepo admindao;
	
	@Override
	public List<AdminVO> getAdmin(){
		List<Admin> adminList = admindao.findAll();
		List<AdminVO> adminVOList = new ArrayList<AdminVO>();
		
		for(int i=0; i<adminList.size(); i++) {
			Admin a = adminList.get(i);
			AdminVO adminvo = new AdminVO(a.getAdminID(), a.getFirstName(), a.getLastName(), 
					a.getDesignation(), a.getRole(), a.getEmail(), a.getContactNo(), a.isFlag());
			adminVOList.add(adminvo);	
		}
		return adminVOList;
	}
	
	@Override
	public AdminVO getAdminbyID(int adminID) {
		Optional<Admin> adminbyID = admindao.findById(adminID);
		AdminVO adminbyIDVO = null;
		Admin a = null;
		if(adminbyID.isPresent()) {
			a = adminbyID.get();
			adminbyIDVO = new AdminVO(a.getAdminID(), a.getFirstName(), a.getLastName(), 
					a.getDesignation(), a.getRole(), a.getEmail(), a.getContactNo(), a.isFlag());
		}
		return adminbyIDVO;
	}
	
	@Override
	public AdminVO addAdmin(AdminVO adminvo) {
		Admin admin = new Admin(adminvo.getAdminID(), adminvo.getFirstName(), adminvo.getLastName(),
				adminvo.getDesignation(), adminvo.getRole(), adminvo.getEmail(), adminvo.getContactNo(),adminvo.isFlag());
		admindao.save(admin);
		return adminvo;
	}
	
	@Override
	public AdminVO updateAdmin(AdminVO adminvo) {
		Admin a = new Admin(adminvo.getAdminID(), adminvo.getFirstName(), adminvo.getLastName(), 
				adminvo.getDesignation(), adminvo.getRole(), adminvo.getEmail(), adminvo.getContactNo(), adminvo.isFlag());
		admindao.save(a);
		return adminvo;
	}
	
	@Override
	public void deleteAdmin(int adminID) {
		admindao.deleteById(adminID);
	}

}
