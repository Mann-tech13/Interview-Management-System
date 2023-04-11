package com.project.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.ims.entity.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {

}
