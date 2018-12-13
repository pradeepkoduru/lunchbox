package com.lunchbox.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;

import com.lunchbox.pojo.Address;
import com.lunchbox.pojo.Order;
import com.lunchbox.pojo.ShoppingCart;
import com.lunchbox.pojo.Users;
import com.lunchbox.service.OrderService;
import com.lunchbox.util.JSONUtil;
import com.lunchbox.util.RequestUtil;
import com.stripe.Stripe;
import com.stripe.model.Charge;

//[START example]
@SuppressWarnings("serial")

public class StripePaymentServlet extends HttpServlet {

	 private static final Logger LOGGER = Logger.getLogger(StripePaymentServlet.class.getName());
	    
	    @SuppressWarnings("unchecked")
		protected void processRequest(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	 
	        response.setContentType("application/json");
	        HttpSession session = request.getSession();
			System.out.println(session.getId());
	        PrintWriter out = response.getWriter();
	        String requestBodyJSON = RequestUtil.getRequestBody(request);
			JSONObject reqJSON = JSONUtil.converStringToJSON(requestBodyJSON);
			 Users users=new Users();
			 users.setFirstName(reqJSON.get("FirstName").toString());
			 users.setLastName(reqJSON.get("LastName").toString());
			 users.setPhoneNumber((Long)reqJSON.get("PhoneNumber"));
			 users.getShippingAddress().setAddress1(reqJSON.get("Address1").toString());
			 users.getShippingAddress().setAddress2(reqJSON.get("Address2").toString());
			 users.getShippingAddress().setAddress3(reqJSON.get("Address3").toString());
			 users.getShippingAddress().setCity(reqJSON.get("City").toString());
			 users.getShippingAddress().setState(reqJSON.get("State").toString());
			 users.getShippingAddress().setCountry(reqJSON.get("Country").toString());
			 users.getShippingAddress().setZipcode((Long)reqJSON.get("Zipcode"));
	        try {
	 
	            Stripe.apiKey = "pk_test_RInXie0Z1yjLjBjKh01BnlbS";
	            Map<String, String[]> httpParameters = request.getParameterMap();
	            ShoppingCart shoppingCart=new ShoppingCart();
	           
	            users=(Users) request.getAttribute("Users");
	    		if(session.getAttribute("shoppingCart")!=null)
	    		{
	    			shoppingCart=(ShoppingCart)session.getAttribute("shoppingCart");
	    			users=(Users)session.getAttribute("users");
	 
	            //esctract request parameters
	            Map<String, Object> userBillingData = new HashMap<>();
	            String userEmail = httpParameters.get("stripeEmail")[0];
	            userBillingData.put("email", userEmail);
	            userBillingData.put("stripeToken", httpParameters.get("stripeToken")[0]);
	            Map<String, Object> params = new HashMap<>();
	            params.put("amount", shoppingCart.getTotal()); // or get from request
	            params.put("currency", "usd");  // or get from request
	            params.put("source", userBillingData.get("stripeToken"));// or get from request
	            params.put("receipt_email", userEmail);
//	            Map<String, String> metadata = new HashMap<>();
//	            metadata.put("order_id", orderID.toString());
//	            params.put("metadata", metadata);
	 
	            Charge charge;
	 
	            charge = Charge.create(params);
	           
	            String chargeID = charge.getId();
	            String status=charge.getStatus();
	            
				if (status.equalsIgnoreCase("succeeded") ||
						status.equalsIgnoreCase("pending")	) {
					OrderService orderService = new OrderService();
					Order order = new Order();

					order.setShoppingCart(shoppingCart);
					order.setUsers(users);
					order.setShippingAddress(users.getShippingAddress());
					order.setChargeID(chargeID);
					order.setOrderStatus("Pending");
					order = orderService.insertOrder(order);
					JSONObject productJSONObj = new JSONObject();
					productJSONObj.put("orderNumber", order.getOrderNumber());
					productJSONObj.put("status", status);
					out.print(productJSONObj.toString());
				}else {
					JSONObject productJSONObj = new JSONObject();
					productJSONObj.put("orderNumber", "");
					productJSONObj.put("status", status);
					out.print(productJSONObj.toString());
				}
	    		}  
	 
	        } catch (Exception ex) {
	           
	        	String status="Failed";
	        	JSONObject productJSONObj=new JSONObject();
				productJSONObj.put("orderNumber","" );
				productJSONObj.put("status",status );
				out.print(productJSONObj.toString());
	            out.close();
	        }
	    }
	 
	  
	    protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	        processRequest(request, response);
	    }
	 
	   
}
