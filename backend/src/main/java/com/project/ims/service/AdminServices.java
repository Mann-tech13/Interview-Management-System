package com.project.ims.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.ims.vo.AdminVO;

@Service
public interface AdminServices {
	
	public List<AdminVO> getAdmin();
	
	public AdminVO getAdminbyID(int adminID);
	
	public AdminVO addAdmin(AdminVO adminvo);
	
	public AdminVO updateAdmin(AdminVO adminvo);
	
	public void deleteAdmin(int adminID);
}
