package com.project.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ims.entity.Block;

@Repository
public interface BlockRepo extends JpaRepository<Block, Integer> {

}
