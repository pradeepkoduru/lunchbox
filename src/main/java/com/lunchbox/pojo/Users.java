package com.lunchbox.pojo;

import java.io.Serializable;
import java.sql.Date;

public class Users implements Serializable {


	private ShoppingCart shoppingCart=new ShoppingCart();
	private long userID;
	private String firstName;
	private String lastName;
	private long phoneNumber;
	private long shippingAddressID;
	private Address shippingAddress=new Address();
	private Date createdDateTime;
	public long getUserID() {
		return userID;
	}
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}
	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	public Date getCreatedDateTime() {
		return createdDateTime;
	}
	public void setCreatedDateTime(Date createdDateTime) {
		this.createdDateTime = createdDateTime;
	}
	public void setUserID(long userID) {
		this.userID = userID;
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
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public long getShippingAddressID() {
		return shippingAddressID;
	}
	public void setShippingAddressID(long shippingAddressID) {
		this.shippingAddressID=shippingAddressID;
	}
	public Address getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(Address shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
		
}
