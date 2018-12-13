package com.lunchbox.controller;

import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.TwilioRestException;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Account;
import com.twilio.sdk.resource.instance.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

// [START gae_flex_twilio_send_sms]
@SuppressWarnings("serial")
@WebServlet(name = "sendsms", value = "/sms/send")
public class SendSmsServlet extends HttpServlet {

  @Override
  public void service(HttpServletRequest req, HttpServletResponse resp) throws IOException,
      ServletException {
    final String twilioAccountSid = "AC26361bfc9ae5fec983f9a72808825074";
    final String twilioAuthToken = "da18c39889938cb6c67c8a42953e4baf";
    final String twilioNumber = "+15017084022";
    final String toNumber = (String) req.getParameter("to");
    if (toNumber == null) {
      resp.getWriter()
          .print("Please provide the number to message in the \"to\" query string parameter.");
      return;
    }
    TwilioRestClient client = new TwilioRestClient(twilioAccountSid, twilioAuthToken);
    Account account = client.getAccount();
    MessageFactory messageFactory = account.getMessageFactory();
    List<NameValuePair> params = new ArrayList<NameValuePair>();
    params.add(new BasicNameValuePair("To", toNumber));
    params.add(new BasicNameValuePair("From", twilioNumber));
    params.add(new BasicNameValuePair("Body", "Hey Pradeep is very good person but I am idoit"));
    try {
      Message sms = messageFactory.create(params);
      resp.getWriter().print(sms.getBody());
    } catch (TwilioRestException e) {
      throw new ServletException("Twilio error", e);
    }
  }
}
