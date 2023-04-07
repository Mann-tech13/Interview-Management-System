package com.project.ims.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.ims.vo.OpeningsVO;

@Service
public interface OpeningsServices {
	
	public List<OpeningsVO> getOpenings();
	
	public OpeningsVO getOpeningsbyID(int openingsID);
	
	public OpeningsVO addOpenings(OpeningsVO openingsvo);

	public OpeningsVO updateOpenings(OpeningsVO openingsvo);

	public void deleteOpenings(int openingsID);

	
}
	