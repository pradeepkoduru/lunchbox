package com.lunchbox.util;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.lunchbox.pojo.Product;

public class JSONUtil {

	public static JSONArray converListProductToJSON(List<Product> productList)
	{
		JSONObject parentProductJSONObj=new JSONObject();
		JSONArray productJSONArray=new JSONArray();
		for(Product product:productList)
		{
			JSONObject productJSONObj=new JSONObject();
			productJSONObj.put("productID", product.getProductID());
			productJSONObj.put("description", product.getDescription());
			productJSONObj.put("price", product.getProductMsrp());
			productJSONObj.put("qty", 1);
			productJSONArray.add(productJSONObj);
		}
		//parentProductJSONObj.put("product", productJSONArray);
		return productJSONArray;
	}
	
	
	
	public static JSONObject converStringToJSON(String reqBodyString)
	{
		JSONObject json=new JSONObject();
		try {
			json = (JSONObject)new JSONParser().parse(reqBodyString);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return json;
	}
}
