package com.project.ims.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.ims.vo.HRVO;


@Service
public interface HRServices {
	
	public List<HRVO> getHR();
	
	public HRVO getHRbyID(int hrID);
	
	public HRVO addHR(HRVO hrvo);
	
	public HRVO updateHR(HRVO hrvo);
	
	public void deleteHR(int hrID);

}
