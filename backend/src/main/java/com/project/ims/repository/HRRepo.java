package com.project.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ims.entity.HR;

@Repository
public interface HRRepo extends JpaRepository<HR, Integer> {

}
