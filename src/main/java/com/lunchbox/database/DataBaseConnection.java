package com.lunchbox.database;

import java.sql.Connection;
import java.sql.SQLException;

import com.mysql.jdbc.jdbc2.optional.MysqlConnectionPoolDataSource;
import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

public class DataBaseConnection {

	public static Connection getConnection(){
		MysqlDataSource dataSource = new MysqlConnectionPoolDataSource();
		dataSource.setURL(System.getProperty("cloudsql"));
		Connection conn=null;
		try {
			conn = dataSource.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

return conn;
}
}
