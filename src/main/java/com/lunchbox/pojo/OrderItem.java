package com.lunchbox.pojo;

import java.io.Serializable;
import java.sql.Date;



public class OrderItem implements Serializable{


	private long orderItemID;
	private long productID;
	private long quantity;
	private long orderNumber;
	private Date createdDateTime;
	
	public Date getCreatedDateTime() {
		return createdDateTime;
	}
	public void setCreatedDateTime(Date createdDateTime) {
		this.createdDateTime = createdDateTime;
	}
	public long getOrderItemID() {
		return orderItemID;
	}
	public void setOrderItemID(long orderItemID) {
		this.orderItemID = orderItemID;
	}
	public long getProductID() {
		return productID;
	}
	public void setProductID(long productID) {
		this.productID = productID;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	
	public long getOrderNumber() {
		return orderNumber;
	}
	public void setOrderNumber(long orderNumber) {
		this.orderNumber = orderNumber;
	}
	
}
