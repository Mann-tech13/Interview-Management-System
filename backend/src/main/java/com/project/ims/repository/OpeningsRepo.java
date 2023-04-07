package com.project.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ims.entity.Openings;

@Repository
public interface OpeningsRepo extends JpaRepository<Openings, Integer> {

}
