package com.project.ims.vo;

import java.time.LocalDate;

public class BlockVO {
	private int blockId;
	private String firstName;
	private String lastName;
	private String email;
	private int contactNo;
	private String pan;
	private LocalDate date;
//	private String createdBy;
	public BlockVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BlockVO(int blockId, String firstName, String lastName, String email, int contactNo, String pan,
			LocalDate date) {
		super();
		this.blockId = blockId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contactNo = contactNo;
		this.pan = pan;
		this.date = date;
//		this.createdBy = createdBy;
	}
	public int getBlockId() {
		return blockId;
	}
	public void setBlockId(int blockId) {
		this.blockId = blockId;
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
	public int getContactNo() {
		return contactNo;
	}
	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
//	public String getCreatedBy() {
//		return createdBy;
//	}
//	public void setCreatedBy(String createdBy) {
//		this.createdBy = createdBy;
//	}
}
