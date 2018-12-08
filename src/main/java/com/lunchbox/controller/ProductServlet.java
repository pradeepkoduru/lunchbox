package com.lunchbox.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.lunchbox.pojo.Product;
import com.lunchbox.service.ProductService;
import com.lunchbox.util.JSONUtil;

/**
 * Servlet implementation class ProductServlet
 */
@WebServlet(urlPatterns = { "/api/products" })
public class ProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProductServlet() {
        super();
      
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ProductService productService=new ProductService();
		List<Product> productList=	productService.listActiveProducts();
		JSONArray productJSONObj=JSONUtil.converListProductToJSON(productList);
		response.getWriter().print(productJSONObj.toString());
	}

}
