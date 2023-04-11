package com.project.ims.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.ims.entity.Candidate;
import com.project.ims.vo.CandidateVo;

@Service
public interface CandidateService {
	
	//Add Candidate
	public CandidateVo addCandidate(CandidateVo candidatevo);
	
	//Get Candidate
	public List<CandidateVo> getCandidate();
	
	//Update Candidate
	public CandidateVo updateCandidate(CandidateVo candidatevo);
	
	//Delete Candidate
	public Candidate deleteCandidate(int candidateid);
	
}
