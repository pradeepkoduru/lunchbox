package com.lunchbox.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.lunchbox.pojo.CartItem;
import com.lunchbox.pojo.ShoppingCart;

public class AddToCartService {

	public JSONObject addToCart(HttpSession session,JSONObject reqCartItem)
	{
		Map<Long,Double> productPriceMap= new HashMap<Long,Double>();
		CartItem cartItem = new CartItem();
		
		cartItem.setProductID((Long) reqCartItem.get("productID"));
		cartItem.setQty((Long) reqCartItem.get("qty"));
		  ShoppingCart shoppingCart  =new ShoppingCart();

		if (session.getAttribute("shoppingCart") != null) {
			shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
			List<CartItem> cartItemList = shoppingCart.getCartItems();
			boolean isItemFound=false;
			if (cartItemList.size() != 0) {
				for (CartItem existingCartItem : cartItemList) {
					
					if (existingCartItem.getProductID() == cartItem.getProductID()) {
						isItemFound=true;
						existingCartItem.setQty(existingCartItem.getQty() + cartItem.getQty());
						
					}
					
				}
				if(!isItemFound)
				{
					shoppingCart.getCartItems().add(cartItem);
					
				}
			} else {
				List<CartItem> newCartList = new ArrayList<CartItem>();
				newCartList.add(cartItem);
				shoppingCart.setCartItems(newCartList);
			}
		}

		else {
			List<CartItem> newCartList = new ArrayList<CartItem>();
			newCartList.add(cartItem);

			
			shoppingCart.setCartItems(newCartList);
			session.setAttribute("shoppingCart", shoppingCart);

		}
		ProductService productService=new ProductService();
		double cartTotal=0.00;
		for(CartItem cartItemObj:shoppingCart.getCartItems())
		{
			if(productPriceMap.get(cartItemObj.getProductID())==null)
			{
			double price=	productService.getPriceOfProductID(cartItemObj.getProductID());
					productPriceMap.put(cartItemObj.getProductID(), price);
			}
			
			cartTotal=cartTotal+caluclateCartTotal(productPriceMap,cartItemObj);
		}
		shoppingCart.setTotal(cartTotal);
		session.setAttribute("shoppingCart", shoppingCart);
		
		JSONObject json=getJSONObjectShoppingCart(shoppingCart,session.getId());
		return json;
	}
	
	public double caluclateCartTotal(Map<Long,Double> productPriceMap,CartItem cartItemObj)
	{
		return productPriceMap.get(cartItemObj.getProductID()) * cartItemObj.getQty();
	}
	
	public JSONObject removeCartItem(HttpSession session,JSONObject reqCartItem)
	{
		Map<Long,Double> productPriceMap= new HashMap<Long,Double>();
		CartItem cartItem = new CartItem();
		long productID=0;
		cartItem.setProductID((Long) reqCartItem.get("productID"));
		  ShoppingCart shoppingCart  =new ShoppingCart();

		if (session.getAttribute("shoppingCart") != null) {
			shoppingCart = (ShoppingCart) session.getAttribute("shoppingCart");
			List<CartItem> cartItemList = shoppingCart.getCartItems();
			Iterator<CartItem> itr=cartItemList.iterator();
			while(itr.hasNext())
			{
				CartItem cartItemInList=itr.next();
				if(cartItemInList.getProductID()==cartItem.getProductID())
				{
					itr.remove();
				}
			}
		
		}
		ProductService productService=new ProductService();
		double cartTotal=0.00;
		for(CartItem cartItemObj:shoppingCart.getCartItems())
		{
			if(productPriceMap.get(cartItemObj.getProductID())==null)
			{
			double price=	productService.getPriceOfProductID(cartItemObj.getProductID());
					productPriceMap.put(cartItemObj.getProductID(), price);
			}
			
			cartTotal=cartTotal+caluclateCartTotal(productPriceMap,cartItemObj);
		}
		shoppingCart.setTotal(cartTotal);
		session.setAttribute("shoppingCart", shoppingCart);
		
		session.setAttribute("shoppingCart", shoppingCart);
		JSONObject json=getJSONObjectShoppingCart(shoppingCart,session.getId());
		
		return json;
	}
	
	public JSONObject getJSONObjectShoppingCart(ShoppingCart shoppingCart,String sessionID)
	{
		Map<Long,Double> productPriceMap= new HashMap<Long,Double>();
		JSONObject json=new JSONObject();
		double cartTotal=0.00;
		json.put("sessionid", sessionID);
		ProductService productService=new ProductService();
		JSONArray jsonArray=new JSONArray();
		for(CartItem cartItemObj:shoppingCart.getCartItems())
		{
			if(productPriceMap.get(cartItemObj.getProductID())==null)
			{
			double price=	productService.getPriceOfProductID(cartItemObj.getProductID());
					productPriceMap.put(cartItemObj.getProductID(), price);
			}
			cartTotal=cartTotal+caluclateCartTotal(productPriceMap,cartItemObj);
			JSONObject jsonObj=new JSONObject();
			jsonObj.put("productID", cartItemObj.getProductID());
			jsonObj.put("qty", cartItemObj.getQty());
			jsonArray.add(jsonObj);
		}
		json.put("cartItem",jsonArray);
		json.put("cartTotal", cartTotal);
		return json;
	}
}
