package com.project.ims.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ims.entity.Developer;

@Repository
public interface DeveloperRepo  extends JpaRepository<Developer, Integer>{

//	List<Developer> findbyName(String name);
	

}
