package com.project.ims.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ims.entity.Candidate;
import com.project.ims.repository.CandidateRepo;
import com.project.ims.vo.CandidateVo;

@Service
public class CandidateServiceImpl implements CandidateService {
	
	@Autowired
	private CandidateRepo candidaterepo;

	//Post Candidate
	public CandidateVo addCandidate(CandidateVo candidatevo) {
		Candidate can = new Candidate(candidatevo.getCandidateid(),candidatevo.getFirstName(),candidatevo.getLastName(),candidatevo.getEmail(),candidatevo.getExperience(),candidatevo.getPhoneNo(),candidatevo.getDate(),candidatevo.getRole(),candidatevo.getJobtype(),candidatevo.getCurrentctc(),candidatevo.getExpectedctc(),candidatevo.getAttachment(),candidatevo.getPan(),candidatevo.getCreatedby());
		
		 candidaterepo.save(can);
		 return candidatevo;
	}
	
	//Get Candidate
	public List<CandidateVo> getCandidate(){
		List<CandidateVo> can = new ArrayList<CandidateVo>();
		List<Candidate>List = candidaterepo.findAll();
		for(int i=0; i<List.size(); i++) {
			Candidate gc =List.get(i);
			CandidateVo ca = new CandidateVo(gc.getCandidateid(), gc.getFirstName(),gc.getLastName(), gc.getEmail(),gc.getExperience(),gc.getPhoneNo(),gc.getDate(),gc.getRole(),gc.getJobtype(),gc.getCurrentctc(),gc.getExpectedctc(),gc.getAttachment(),gc.getPan(),gc.getCreatedby());
			can.add(ca);
		}
		return can;
	}
	
	//Update Candidate
	public CandidateVo updateCandidate(CandidateVo candidatevo) {
		Candidate can = new Candidate(candidatevo.getCandidateid(),candidatevo.getFirstName(),candidatevo.getLastName(), candidatevo.getEmail(),candidatevo.getExperience(),candidatevo.getPhoneNo(),candidatevo.getDate(),candidatevo.getRole(),candidatevo.getJobtype(),candidatevo.getCurrentctc(),candidatevo.getExpectedctc(),candidatevo.getAttachment(),candidatevo.getPan(),candidatevo.getCreatedby());
		candidaterepo.save(can);
		return candidatevo;	
		
	}
	
	//Delete Candidate
	public Candidate deleteCandidate(int candidateid) {
		Candidate can = new Candidate();
		candidaterepo.deleteById(candidateid);
		return can;
	}



	

}
