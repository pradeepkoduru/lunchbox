package com.lunchbox.pojo;

import java.io.Serializable;
import java.util.Date;

public class Product implements Serializable {

	private long productID;
	private String description;
	private String status;
	private double productMsrp;
	private Date createdDateTime;
	public long getProductID() {
		return productID;
	}
	public Date getCreatedDateTime() {
		return createdDateTime;
	}
	public void setCreatedDateTime(Date createdDateTime) {
		this.createdDateTime = createdDateTime;
	}
	public void setProductID(long productID) {
		this.productID = productID;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getProductMsrp() {
		return productMsrp;
	}
	public void setProductMsrp(double productMsrp) {
		this.productMsrp = productMsrp;
	}
}
