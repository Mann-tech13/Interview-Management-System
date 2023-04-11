package com.project.ims.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ims.repository.OpeningsRepo;
import com.project.ims.entity.Openings;
import com.project.ims.vo.OpeningsVO;

@Service
public class OpeningsServicesImpl implements OpeningsServices  {
	
	@Autowired
	private OpeningsRepo openingsdao;
	
	@Override
	public OpeningsVO addOpenings(OpeningsVO openingsvo) {
		Openings O = new Openings(openingsvo.getJobID(), openingsvo.getJob(), openingsvo.getJobDescription(), openingsvo.getExperiance(),
				openingsvo.getVacancy(), openingsvo.getLocation(), openingsvo.getJobType(), openingsvo.getDate() );
		
		openingsdao.save(O);
		
		return openingsvo;	
	}
	
	@Override
	public List<OpeningsVO> getOpenings(){
		List<Openings> openingsList = openingsdao.findAll();
		List<OpeningsVO> openingsListVO = new ArrayList<OpeningsVO>();
		
		for(int i=0; i<openingsList.size(); i++) {
			Openings openings = openingsList.get(i);
			OpeningsVO openingsvo = new OpeningsVO(openings.getJobID(), openings.getJob(), openings.getJobDescription(), openings.getExperience(), openings.getVacancy(), openings.getLocation(), openings.getJobType(), openings.getDate());
			openingsListVO.add(openingsvo);
		}
		return openingsListVO;
	}
	
	@Override
	public OpeningsVO getOpeningsbyID(int openingsID) {
		Optional<Openings> openingsbyid = openingsdao.findById(openingsID);
		OpeningsVO openingsvo = null;
		Openings O = null;
		
		if(openingsbyid.isPresent()) {
			O = openingsbyid.get();
			openingsvo = new OpeningsVO(O.getJobID(), O.getJob(), O.getJobDescription(), O.getExperience(), O.getVacancy(), O.getLocation(), O.getJobType(), O.getDate());
		}
		return openingsvo;
	}
	
	@Override
	public OpeningsVO updateOpenings(OpeningsVO openingsvo) {
		Openings openings = new Openings(openingsvo.getJobID(), openingsvo.getJob(), openingsvo.getJobDescription(), openingsvo.getExperiance(),
				openingsvo.getVacancy(), openingsvo.getLocation(), openingsvo.getJobType(), openingsvo.getDate());
		openingsdao.save(openings);
		return openingsvo;
	}
	
	@Override
	public void deleteOpenings(int openingsID) {
		openingsdao.deleteById(openingsID);
	}

}
