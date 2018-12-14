package com.lunchbox.util;

import java.util.Date;
import java.util.Calendar;

public class CommonUtil {
	
	public static Date  getCurrentDateTime() {
		Calendar calender = Calendar.getInstance();
		Date currentDate =  calender.getTime();
		return currentDate;
		
	}

	
}
