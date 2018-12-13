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
		address=order.getShippingAddress();
		
		stmt = conn.prepareStatement(sqlToInsertIntoAddress(address));
		stmt.setString(1, address.getAddressType().toString());
		stmt.setString(2, address.getAddress1());
		stmt.setString(3, address.getAddress2());
		stmt.setString(4, address.getAddress3());
		stmt.setString(5, address.getCity());
		stmt.setString(6, address.getState());
		stmt.setString(7, address.getCountry());
		stmt.setLong(8, address.getZipcode());
		stmt.setDate(9, CommonUtil.getCurrentDateTime());
		stmt.executeUpdate();
		
		ResultSet addressID = stmt.getGeneratedKeys();

		if (addressID.next()) {
			order.setShippingAddressID( addressID.getLong(1));
			order.getShippingAddress().setAddressID(addressID.getLong(1));
			address.setAddressID(addressID.getLong(1));
		}
		stmt.close();
		
		user.setFirstName(order.getUsers().getFirstName());
		user.setLastName(order.getUsers().getLastName());
		user.setShippingAddressID(order.getUsers().getShippingAddressID());
		user.setPhoneNumber(order.getUsers().getPhoneNumber());
		user.setCreatedDateTime(CommonUtil.getCurrentDateTime());
		stmt = conn.prepareStatement(sqlToInsertIntoUsers(user));
		stmt.setString(1, user.getFirstName());
		stmt.setString(2, user.getLastName());
		stmt.setLong(3, user.getPhoneNumber());
		stmt.setLong(4, user.getShippingAddressID());		
		stmt.setDate(5, CommonUtil.getCurrentDateTime());

		stmt.executeUpdate();
		ResultSet userId = stmt.getGeneratedKeys();

		if (userId.next()) {
			order.getUsers().setUserID(userId.getLong(1));
			user.setUserID(userId.getLong(1));
			
		}
		stmt.close();
		
		
		stmt = conn.prepareStatement(sqlToInsertIntoOrders(order));
		stmt.setLong(1, order.getUsers().getUserID());
		stmt.setDouble(2, order.getShoppingCart().getTotal());
		stmt.setLong(3, order.getShippingAddressID());
		stmt.setString(4, order.getOrderStatus().toString());	
		stmt.setString(5, order.getChargeID());
		stmt.setDate(6, CommonUtil.getCurrentDateTime());
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
			
			stmt.setLong(1, orderItem.getProductID());
			stmt.setLong(2, orderItem.getQuantity());
			stmt.setLong(3, order.getOrderNumber());				
			stmt.setDate(4, CommonUtil.getCurrentDateTime());
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
                " VALUES (?,?,?,?,?,?)" ;
		return sql;
	}
	public String sqlToInsertIntoUsers(Users user) {
		String sql=	"INSERT INTO Users( FirstName, LastName,PhoneNumber,ShippingAddressID, CreatedDateTime)" +
	                " VALUES (?,?,?,?,?)";
			return sql;
	}
	public String readUsersByPhoneNumber(long phoneNumber) {
		String sql=	"SELECT * FROM Users WHERE PhoneNumber =" + phoneNumber+");";
			return sql;
	}
	public String sqlToInsertIntoOrderItem(OrderItem orderItem) {
		String sql=	"INSERT INTO OrderItem( ProductID, Quantity,OrderNumber,CreatedDateTime)" +
	                " VALUES (?,?,?,?)" ;
			return sql;
		}
	
	public String sqlToInsertIntoAddress(Address address) {
		String sql=	"INSERT INTO Address( AddressType,Address1, Address2,Address3,City,State,Country,Zipcode,CreatedDateTime)" +
	                " VALUES (?,?,?,?,?,?,?,?,?)";
			return sql;
		}
	
}
