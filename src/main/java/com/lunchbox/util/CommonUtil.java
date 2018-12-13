package com.lunchbox.util;

import java.sql.Date;
import java.util.Calendar;

public class CommonUtil {
	
	public static Date getCurrentDateTime() {
		Calendar calender = Calendar.getInstance();
		Date currentDate = (Date) calender.getTime();
		return currentDate;
		
	}

	
}
