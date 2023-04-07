package com.project.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ims.entity.Candidate;


@Repository
public interface CandidateRepo extends JpaRepository<Candidate, Integer> {

	//Candidate deleteCandidate(int developerid);

	//Candidate save(Candidate candidate);

}
