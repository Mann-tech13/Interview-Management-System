package com.project.ims.vo;

import java.time.LocalDate;

public class OpeningsVO {
	private int jobID;
	private String job;
	private String jobDescription;
	private String experiance;
	private int vacancy;
	private String location;
	private String jobType;
	private LocalDate date;
	
	public OpeningsVO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OpeningsVO(int jobID, String job, String jobDescription, String experiance, int vacancy, String location, String jobType,
			LocalDate date) {
		super();
		this.jobID = jobID;
		this.job = job;
		this.jobDescription = jobDescription;
		this.experiance = experiance;
		this.vacancy = vacancy;
		this.location = location;
		this.jobType = jobType;
		this.date = date;
	}

	public int getJobID() {
		return jobID;
	}

	public void setJobID(int jobID) {
		this.jobID = jobID;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getJobDescription() {
		return jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public String getExperiance() {
		return experiance;
	}

	public void setExperiance(String experiance) {
		this.experiance = experiance;
	}

	public int getVacancy() {
		return vacancy;
	}

	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}
	
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getJobType() {
		return jobType;
	}

	public void setJobType(String jobType) {
		this.jobType = jobType;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
	
	
}
