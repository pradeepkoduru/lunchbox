package com.lunchbox.util;

import java.io.BufferedReader;

import javax.servlet.http.HttpServletRequest;

public class RequestUtil {
	public static String getRequestBody(HttpServletRequest request)
	{
		 StringBuffer jb = new StringBuffer();
		  String line = null;
		  try {
		    BufferedReader reader = request.getReader();
		    while ((line = reader.readLine()) != null)
		      jb.append(line);
		  } catch (Exception e) { /*report an error*/ }
return jb.toString();
	}

}
