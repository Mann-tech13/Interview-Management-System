package com.ims.vo;

public class DeveloperVo {

	private int developerid;
	private String firstName;
	private String lastName;
	private String designation;
	private int experience;
	private String email;
	private Long phoneNo;
	private String flag;
	
	public DeveloperVo(int developerid, String firstName, String lastName, String designation, int experience,
			String email, Long phoneNo, String flag) {
		super();
		
		this.developerid = developerid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.designation = designation;
		this.experience = experience;
		this.email = email;
		this.phoneNo = phoneNo;
		this.flag = flag;
	}
	
	public DeveloperVo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getDeveloperid() {
		return developerid;
	}
	public void setDeveloperid(int developerid) {
		this.developerid = developerid;
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
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
}
