package com.ims.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Candidate {
	@Id
	@GeneratedValue
	private int candidateid;
	private String firstName;
	private String lastName;
	private String email;
	private int experience;
	private Long phoneNo;
	private LocalDate date;
	private String role;
	private String jobtype;
	private int currentctc;
	private int expectedctc;
	private String attachment;
	private String pan;
	private String createdby;
	public Candidate() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Candidate(int candidateid, String firstName, String lastName, String email, int experience, Long phoneNo,
			LocalDate date, String role, String jobtype, int currentctc, int expectedctc, String attachment, String pan,
			String createdby) {
		super();
		this.candidateid = candidateid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.experience = experience;
		this.phoneNo = phoneNo;
		this.date = LocalDate.now();
		this.role = role;
		this.jobtype = jobtype;
		this.currentctc = currentctc;
		this.expectedctc = expectedctc;
		this.attachment = attachment;
		this.pan = pan;
		this.createdby = createdby;
	}
	public int getCandidateid() {
		return candidateid;
	}
	public void setCandidateid(int candidateid) {
		this.candidateid = candidateid;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public Long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getJobtype() {
		return jobtype;
	}
	public void setJobtype(String jobtype) {
		this.jobtype = jobtype;
	}
	public int getCurrentctc() {
		return currentctc;
	}
	public void setCurrentctc(int currentctc) {
		this.currentctc = currentctc;
	}
	public int getExpectedctc() {
		return expectedctc;
	}
	public void setExpectedctc(int expectedctc) {
		this.expectedctc = expectedctc;
	}
	public String getAttachment() {
		return attachment;
	}
	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public String getCreatedby() {
		return createdby;
	}
	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}
	

}
