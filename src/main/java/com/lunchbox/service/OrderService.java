package com.lunchbox.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.lunchbox.database.DataBaseConnection;
import com.lunchbox.pojo.Address;
import com.lunchbox.pojo.CartItem;
import com.lunchbox.pojo.Order;
import com.lunchbox.pojo.OrderItem;
import com.lunchbox.pojo.Product;
import com.lunchbox.pojo.Users;
import com.lunchbox.util.CommonUtil;

public class OrderService {

	
@SuppressWarnings({ "null", "unused" })
public Order insertOrder(Order order) throws SQLException {

	Connection conn = DataBaseConnection.getConnection();
	PreparedStatement stmt;
	
	try {
		Users user =new Users();

		conn.setAutoCommit(false);
		
		Address address=new Address();
		address.setAddress1(order.getShippingAddress().getAddress1());
		address.setAddress2(order.getShippingAddress().getAddress2());
		address.setAddress3(order.getShippingAddress().getAddress3());
		address.setCity(order.getShippingAddress().getCity());
		address.setState(order.getShippingAddress().getState());
		address.setCountry(order.getShippingAddress().getCountry());
		address.setZipcode(order.getShippingAddress().getZipcode());
		address.setAddressType(order.getShippingAddress().getAddressType());
		stmt = conn.prepareStatement(sqlToInsertIntoAddress(address));
		stmt.executeUpdate();
		
		ResultSet addressID = stmt.getGeneratedKeys();

		if (addressID.next()) {
			order.setShippingAddressID( addressID.getLong(1));
			order.getShippingAddress().setAddressID(addressID.getLong(1));
		}
		stmt.close();
		
		user.setFirstName(order.getUsers().getFirstName());
		user.setLastName(order.getUsers().getLastName());
		user.setShippingAddressID(order.getUsers().getShippingAddressID());
		user.setPhoneNumber(order.getUsers().getPhoneNumber());
		user.setCreatedDateTime(CommonUtil.getCurrentDateTime());
		stmt = conn.prepareStatement(sqlToInsertIntoUsers(user));
		stmt.executeUpdate();
		ResultSet userId = stmt.getGeneratedKeys();

		if (userId.next()) {
			order.getUsers().setUserID(userId.getLong(1));
		    
		}
		stmt.close();
		
		order.setCreatedDateTime(CommonUtil.getCurrentDateTime());
		stmt = conn.prepareStatement(sqlToInsertIntoOrders(order));
		stmt.executeUpdate();
		ResultSet orderNumber = stmt.getGeneratedKeys();

		if (orderNumber.next()) {
			order.setOrderNumber(orderNumber.getLong(1));
		    
		}
		stmt.close();
		for (CartItem cartItem : order.getShoppingCart().getCartItems()) {
					
			OrderItem orderItem= new OrderItem();
			orderItem.setOrderNumber(order.getOrderNumber());
			orderItem.setProductID(cartItem.getProductID());
			orderItem.setQuantity(cartItem.getQty());
			orderItem.setCreatedDateTime(CommonUtil.getCurrentDateTime());
			stmt = conn.prepareStatement(sqlToInsertIntoOrderItem(orderItem));
			stmt.executeUpdate();
			stmt.close();
		}
		conn.commit();
		
		
		
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		conn.rollback();
	} finally {
		if (conn != null)
			try {
				conn.close();
			} catch (SQLException e) {
			}
	}

	return order;	
}
	
	public String sqlToInsertIntoOrders(Order order) {
	String sql=	"INSERT INTO Order( UserID, OrderCost,ShippingAddressID,OrderStatus,ChargeID,CreatedDateTime)" +
                " VALUES" + "("+order.getUsers().getUserID()+
                "," + order.getShoppingCart().getTotal()+","+order.getShippingAddressID()+","
                +order.getOrderStatus()+","+order.getChargeID()+","
                +order.getCreatedDateTime()+")";
		return sql;
	}
	public String sqlToInsertIntoUsers(Users user) {
		String sql=	"INSERT INTO Users( FirstName, LastName,PhoneNumber,ShippingAddressID, CreatedDateTime)" +
	                " VALUES" + "("+user.getFirstName()+
	                "," + user.getLastName()+","+user.getPhoneNumber()+","+user.getShippingAddressID()+
	                ","+user.getCreatedDateTime()+")";
			return sql;
	}
	public String readUsersByPhoneNumber(long phoneNumber) {
		String sql=	"SELECT * FROM Users WHERE PhoneNumber =" + phoneNumber+");";
			return sql;
	}
	public String sqlToInsertIntoOrderItem(OrderItem orderItem) {
		String sql=	"INSERT INTO OrderItem( ProductID, Quantity,OrderNumber,CreatedDateTime)" +
	                " VALUES" + "("+
	                "," +orderItem.getProductID()+
	                "," + orderItem.getQuantity()+","+orderItem.getOrderNumber()+
	                ","+orderItem.getCreatedDateTime()+")";
			return sql;
		}
	
	public String sqlToInsertIntoAddress(Address address) {
		String sql=	"INSERT INTO Address( AddressType,Address1, Address2,Address3,City,State,Country,Zipcode,CreatedDateTime)" +
	                " VALUES" + "("+address.getAddressType()+
	                ","+address.getAddress1()+
	                "," + address.getAddress2()+","+address.getAddress3()+
	                ","+address.getCity()+","+address.getState()+","+address.getCountry()+
	                ","+address.getZipcode()+
	                ","+address.getCreatedDateTime()+")";
			return sql;
		}
	
}
