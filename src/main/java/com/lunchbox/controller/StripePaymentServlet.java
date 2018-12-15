package com.lunchbox.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.json.simple.JSONObject;
import com.lunchbox.pojo.Order;
import com.lunchbox.pojo.ShoppingCart;
import com.lunchbox.pojo.Users;
import com.lunchbox.service.OrderService;
import com.lunchbox.util.AddressTypeEnum;
import com.lunchbox.util.JSONUtil;
import com.lunchbox.util.OrderStatusEnum;
import com.lunchbox.util.RequestUtil;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.TwilioRestException;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Account;
import com.twilio.sdk.resource.instance.Message;

@SuppressWarnings("serial")
@WebServlet(name = "StripePaymentServlet",
description = "Session Managment",
urlPatterns = "/api/order")

public class StripePaymentServlet extends HttpServlet {

	 private static final Logger LOGGER = Logger.getLogger(StripePaymentServlet.class.getName());
	 final String twilioAccountSid = "AC26361bfc9ae5fec983f9a72808825074";
	    final String twilioAuthToken = "da18c39889938cb6c67c8a42953e4baf";
	    final String twilioNumber = "+15017084022";
	    
	    @SuppressWarnings("unchecked")
		protected void processRequest(HttpServletRequest request, HttpServletResponse response)
	            throws ServletException, IOException {
	 
	        response.setContentType("application/json");
	        HttpSession session = request.getSession();
			System.out.println(session.getId());
			 Users users=new Users();
	        PrintWriter out = response.getWriter();
	        String requestBodyJSON = RequestUtil.getRequestBody(request);
			JSONObject reqJSON = JSONUtil.converStringToJSON(requestBodyJSON);
			
			 JSONObject user =(JSONObject)reqJSON.get("user");
			 users.setFirstName(user.get("firstName").toString());
			 users.setLastName(user.get("lastName").toString());
			 users.setPhoneNumber(Long.valueOf(user.get("phone").toString()));
			 
			 JSONObject address =(JSONObject)reqJSON.get("shippingAddress");
			 String formatedAddress=address.get("formattedAddress").toString();
			 
			 users.getShippingAddress().setAddress3(formatedAddress);
			 String[] addressElementArray = formatedAddress.split(",");
			 users.getShippingAddress().setAddress1(addressElementArray[0]);
			// users.getShippingAddress().setAddress2(reqJSON.get("Address2").toString());			 
			// users.getShippingAddress().setAddress3(reqJSON.get("Address3").toString());
			 users.getShippingAddress().setCity(addressElementArray[1]);
			 String stateZip=addressElementArray[2];
			 String[] stateZipArray = stateZip.split(" ");
			 users.getShippingAddress().setState(stateZipArray[1]);
			 users.getShippingAddress().setZipcode(Long.valueOf(stateZipArray[2]));
			 users.getShippingAddress().setCountry(addressElementArray[3]);
			 users.getShippingAddress().setAddressType(AddressTypeEnum.SHIPPINGADDRESS);
			 
	        try {
	 
	            Stripe.apiKey = "sk_test_evJNIxbfsoYSjvZOEOHv2TUP";
	            ShoppingCart shoppingCart=new ShoppingCart();
	            
	    		if(session.getAttribute("shoppingCart")!=null)
	    		{
	    		shoppingCart=(ShoppingCart)session.getAttribute("shoppingCart");
	    			
	    		Double amountDouble=shoppingCart.getTotal()*100;
	    		int amount=amountDouble.intValue();
	    		Map<String, Object> params = new HashMap<>();
	            params.put("amount", amount); // or get from request
	            params.put("currency", "usd");  // or get from request
	            params.put("source", reqJSON.get("token").toString());// or get from request
	      
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
					order.setOrderStatus(OrderStatusEnum.RECEIVED);
					order = orderService.insertOrder(order);
					JSONObject productJSONObj = new JSONObject();
					productJSONObj.put("orderNumber", order.getOrderNumber());
					productJSONObj.put("status", status);
					out.print(productJSONObj.toString());
				   
				    final String toNumber = "+1"+String.valueOf(users.getPhoneNumber());
				    
				    TwilioRestClient client = new TwilioRestClient(twilioAccountSid, twilioAuthToken);
				    Account account = client.getAccount();
				    MessageFactory messageFactory = account.getMessageFactory();
				    List<NameValuePair> twilioParams = new ArrayList<NameValuePair>();
				    twilioParams.add(new BasicNameValuePair("To", toNumber));
				    twilioParams.add(new BasicNameValuePair("From", twilioNumber));
					twilioParams.add(new BasicNameValuePair("Body",
							"Hey Pradeep is very good person but I am idoit .Your Order NUmber is :"
									+ order.getOrderNumber()+" and it will be delivered to "+order.getShippingAddress().getAddress3()
									+ "address.Please call Pradeep if you dont get the order within 5 mins"));
				    try {
				      Message sms = messageFactory.create(twilioParams);
				     
				    } catch (TwilioRestException e) {
				      throw new ServletException("Twilio error", e);
				    }
				}else {
					JSONObject productJSONObj = new JSONObject();
					productJSONObj.put("status", status);
					out.print(productJSONObj.toString());
				}
	    		}  
	    	
	        } catch (Exception ex) {
	           ex.printStackTrace();
	        	String status=ex.getMessage();
	        	JSONObject productJSONObj=new JSONObject();
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
