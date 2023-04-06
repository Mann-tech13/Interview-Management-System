package com.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ims.entity.Candidate;


@Repository
public interface CandidateRepo extends JpaRepository<Candidate, Integer> {

	//Candidate deleteCandidate(int developerid);

	//Candidate save(Candidate candidate);

}
