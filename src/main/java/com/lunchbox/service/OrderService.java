package com.lunchbox.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
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
public Order insertOrder(Order order) throws SQLException, ClassNotFoundException {



	Connection conn = DataBaseConnection.getConnection();
	PreparedStatement stmt;
	System.out.println("After Connection");
	try {
		Users user =new Users();
		java.sql.Date date=new java.sql.Date(CommonUtil.getCurrentDateTime().getTime());
		System.out.println("Before Connection");
		conn.setAutoCommit(false);
		System.out.println("After  Connection autocommit");
		Address address=new Address();
		address=order.getShippingAddress();
		
		stmt = conn.prepareStatement(sqlToInsertIntoAddress(address),Statement.RETURN_GENERATED_KEYS);
		stmt.setString(1, address.getAddressType().toString());
		stmt.setString(2, address.getAddress1());
		stmt.setString(3, address.getAddress2());
		stmt.setString(4, address.getAddress3());
		stmt.setString(5, address.getCity());
		stmt.setString(6, address.getState());
		stmt.setString(7, address.getCountry());
		stmt.setLong(8, address.getZipcode());
		stmt.setDate(9,  date);
		System.out.println("Before  Update for address");
		stmt.executeUpdate();
		
		ResultSet addressID = stmt.getGeneratedKeys();

		if (addressID.next()) {
			order.setShippingAddressID( addressID.getLong(1));
			order.getShippingAddress().setAddressID(addressID.getLong(1));
			address.setAddressID(addressID.getLong(1));
			
		}
		System.out.println("Before  Statement close for address");
		stmt.close();
		
		user.setFirstName(order.getUsers().getFirstName());
		user.setLastName(order.getUsers().getLastName());
		user.setShippingAddressID(order.getShippingAddressID());
		user.setPhoneNumber(order.getUsers().getPhoneNumber());
		user.setCreatedDateTime(CommonUtil.getCurrentDateTime());
		stmt = conn.prepareStatement(sqlToInsertIntoUsers(user),Statement.RETURN_GENERATED_KEYS);
		stmt.setString(1, user.getFirstName());
		stmt.setString(2, user.getLastName());
		stmt.setLong(3, user.getPhoneNumber());
		stmt.setLong(4, user.getShippingAddressID());		
		stmt.setDate(5, date);

		stmt.executeUpdate();
		ResultSet userId = stmt.getGeneratedKeys();

		if (userId.next()) {
			order.getUsers().setUserID(userId.getLong(1));
			user.setUserID(userId.getLong(1));
			
		}
		System.out.println("Before  Statement close for address");
		stmt.close();
		
		
		stmt = conn.prepareStatement(sqlToInsertIntoOrders(order),Statement.RETURN_GENERATED_KEYS);
		stmt.setLong(1, order.getUsers().getUserID());
		stmt.setDouble(2, order.getShoppingCart().getTotal());
		stmt.setLong(3, order.getShippingAddressID());
		stmt.setString(4, order.getOrderStatus().toString());	
		stmt.setString(5, order.getChargeID());
		stmt.setDate(6, date);
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
			stmt = conn.prepareStatement(sqlToInsertIntoOrderItem(orderItem),Statement.RETURN_GENERATED_KEYS);
			
			stmt.setLong(1, orderItem.getProductID());
			stmt.setLong(2, orderItem.getQuantity());
			stmt.setLong(3, order.getOrderNumber());				
			stmt.setDate(4,  date);
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
	String sql=	"INSERT INTO Orders( UserID, OrderCost,ShippingAddressID,OrderStatus,ChargeID,CreatedDateTime)" +
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
