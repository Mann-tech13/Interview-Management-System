package com.ims.service;

import java.util.List;

import com.ims.entity.Candidate;
import com.ims.vo.CandidateVo;

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
