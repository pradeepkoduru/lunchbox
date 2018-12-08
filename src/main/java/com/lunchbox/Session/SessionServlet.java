package com.lunchbox.Session;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.http.impl.cookie.BasicClientCookie;
import org.json.simple.JSONObject;

//[START example]
@SuppressWarnings("serial")
//With @WebServlet annotation the webapp/WEB-INF/web.xml is no longer required.
@WebServlet(name = "Session",
 description = "Session Managment",
 urlPatterns = "/session")
public class SessionServlet extends HttpServlet {

	  @Override
	  public void doGet(HttpServletRequest request, HttpServletResponse response) 
	      throws IOException {
		  HttpSession session;
		  String tokenValue="";
	response.setContentType("application/json;charset=UTF-8");
	String token=request.getHeader("x-auth-token");


		session=request.getSession();
		if(session==null ||!request.isRequestedSessionIdValid())
		{
			session=request.getSession(true);
		}
		tokenValue=session.getId();
	
	response.setContentType("application/json");
		session=request.getSession();
		tokenValue=session.getId();
		Cookie cookie = new Cookie("JSESSIONID", session.getId());

		//cookie.setDomain("your domain");
		cookie.setPath("/");
	response.addCookie(cookie);
	
	
	JSONObject sessionJsonObject=new JSONObject();
	sessionJsonObject.put("token", session.getId());
	
	 response.getWriter().print(sessionJsonObject.toString());
	  }
}
