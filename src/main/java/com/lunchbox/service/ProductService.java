package com.lunchbox.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.lunchbox.database.DataBaseConnection;
import com.lunchbox.pojo.Product;

public class ProductService {

	public List<Product> listActiveProducts() {
		List<Product> productList = new ArrayList<Product>();
		Connection conn = DataBaseConnection.getConnection();
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement(sqlToGetAllProducts());

			ResultSet rs;

			rs = stmt.executeQuery();

			while (rs.next()) {
				Product product = new Product();
				product.setProductID(rs.getLong("ProductID"));
				product.setDescription(rs.getString("Description"));
				product.setProductMsrp(rs.getDouble("Price"));
				product.setCreatedDateTime(rs.getDate("CreatedDateTime"));
				productList.add(product);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (conn != null)
				try {
					conn.close();
				} catch (SQLException e) {
				}
		}
		return productList;
	}

	public String sqlToGetAllProducts() {
		String sql = "select * from Product";
		return sql;
	}
	
	public double getPriceOfProductID(long productID)
	{
		//TODO Hard coding for now because we don't want to hit db. in future we can get it from DB or from request
		return 6.99;
	}
}
