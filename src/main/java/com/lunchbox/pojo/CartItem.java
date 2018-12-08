package com.lunchbox.pojo;

import java.io.Serializable;

public class CartItem implements Serializable{

	private long productID;

	private long qty;

	public long getProductID() {
		return productID;
	}

	public void setProductID(long productID) {
		this.productID = productID;
	}

	public long getQty() {
		return qty;
	}

	public void setQty(long qty) {
		this.qty = qty;
	}
	
}
