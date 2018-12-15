package com.lunchbox.database;

import java.sql.Connection;
import java.sql.SQLException;

import com.mysql.jdbc.jdbc2.optional.MysqlConnectionPoolDataSource;
import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

public class DataBaseConnection {

	public static Connection getConnection(){
		MysqlDataSource dataSource = new MysqlConnectionPoolDataSource();
		//String url="jdbc:mysql://google/lunchbox?useSSL=false&amp;cloudSqlInstance=lunchbox-223320:us-east1:lunch-box1&amp;socketFactory=com.google.cloud.sql.mysql.SocketFactory&amp;user=applicationuser&amp;password=Msrp";
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
