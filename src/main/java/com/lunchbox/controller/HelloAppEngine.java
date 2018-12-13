package com.lunchbox.controller;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;

@WebServlet(
    name = "HelloAppEngine",
    urlPatterns = {"/hello"}
)
public class HelloAppEngine extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) 
      throws IOException {
	  HttpSession session;
	  String tokenValue="";

String token=request.getHeader("x-auth-token");

System.out.println("Test");
	session=request.getSession(true);
	tokenValue=session.getId();

	response.setContentType("application/json;charset=UTF-8");
	session=request.getSession();
	tokenValue=session.getId();
	Cookie cookie = new Cookie("JSESSIONID", session.getId());

	//cookie.setDomain("your domain");
	cookie.setPath("/");
response.addCookie(cookie);

session.setAttribute("cart", 1);
JSONObject sessionJsonObject=new JSONObject();
sessionJsonObject.put("token", session.getId());

 response.getWriter().print(sessionJsonObject.toString());
  }
}