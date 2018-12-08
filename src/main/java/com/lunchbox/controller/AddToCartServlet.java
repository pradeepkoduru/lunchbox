package com.lunchbox.controller;

import java.util.logging.Logger;



import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpStatus;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.lunchbox.pojo.CartItem;
import com.lunchbox.pojo.ShoppingCart;
import com.lunchbox.service.AddToCartService;
import com.lunchbox.util.JSONUtil;
import com.lunchbox.util.RequestUtil;

import jnr.ffi.annotations.Out;

//[START example]
@SuppressWarnings("serial")
//With @WebServlet annotation the webapp/WEB-INF/web.xml is no longer required.
@WebServlet(name = "AddToCartServlet",
 description = "Session Managment",
 urlPatterns = "/api/addToCart")
public class AddToCartServlet extends HttpServlet {

	 private static final Logger LOGGER = Logger.getLogger(AddToCartServlet.class.getName());
	  @Override
	  public void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws IOException {
		
		HttpSession session = request.getSession();
		System.out.println(session.getId());
		String requestBodyJSON = RequestUtil.getRequestBody(request);
		JSONObject reqJSON = JSONUtil.converStringToJSON(requestBodyJSON);
		AddToCartService addToCartService=new AddToCartService();
		JSONObject json=addToCartService.addToCart(session, reqJSON);
				response.getWriter().print(json.toString());
	}
	  
	  
	  @Override
	  public void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws IOException {
		
		HttpSession session = request.getSession();
		System.out.println(session.getId());
		AddToCartService addToCartService=new AddToCartService();
		ShoppingCart shoppingCart=new ShoppingCart();
		if(session.getAttribute("shoppingCart")!=null)
		{
			shoppingCart=(ShoppingCart)session.getAttribute("shoppingCart");
		}
		JSONObject json=addToCartService.getJSONObjectShoppingCart(shoppingCart, session.getId());
				response.getWriter().print(json.toString());
	}
}
