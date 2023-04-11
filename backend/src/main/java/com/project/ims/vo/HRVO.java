package com.project.ims.vo;

public class HRVO {
	private int hrID;
	private String firstName;
	private String lastName;
	private String designation;
	private String role;
	private String email;
	private int contactNo;
	private boolean flag;
	
	public int getHrID() {
		return hrID;
	}
	public void setHrID(int hrID) {
		this.hrID = hrID;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getContactNo() {
		return contactNo;
	}
	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}
	public boolean isFlag() {
		return flag;
	}
	public void setFlag(boolean flag) {
		this.flag = flag;
	}
	
	public HRVO(int hrID, String firstName, String lastName, String designation, String role, String email,
			int contactNo, boolean flag) {
		super();
		this.hrID = hrID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.designation = designation;
		this.role = role;
		this.email = email;
		this.contactNo = contactNo;
		this.flag = flag;
	}
	
	public HRVO() {
		super();
		// TODO Auto-generated constructor stub
	}
		
}
