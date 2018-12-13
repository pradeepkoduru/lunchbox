package com.lunchbox.pojo;

import java.io.Serializable;
import java.sql.Date;



public class Order implements Serializable{

	private ShoppingCart shoppingCart=new ShoppingCart();
	private Users users=new Users();
	private Address shippingAddress=new Address();
	private long orderNumber;
	private long shippingAddressID;
	private String chargeID;
	private String orderStatus;
	private Date createdDateTime;
	public Date getCreatedDateTime() {
		return createdDateTime;
	}
	public void setCreatedDateTime(Date createdDateTime) {
		this.createdDateTime = createdDateTime;
	}
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}
	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	public Users getUsers() {
		return users;
	}
	public void setUsers(Users users) {
		this.users = users;
	}
	public Address getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(Address shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	public long getOrderNumber() {
		return orderNumber;
	}
	public void setOrderNumber(long orderNumber) {
		this.orderNumber = orderNumber;
	}
	public long getShippingAddressID() {
		return shippingAddressID;
	}
	public void setShippingAddressID(long shippingAddressID) {
		this.shippingAddressID=shippingAddressID;
	}
	
	public String getChargeID() {
		return chargeID;
	}
	public void setChargeID(String chargeID) {
		this.chargeID=chargeID;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus=orderStatus;
	}
	
}
