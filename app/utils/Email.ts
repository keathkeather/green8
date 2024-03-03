import emailjs from "@emailjs/browser";
import React from "react";

export default  function sendEmail(fromName:string,fromEmail:string , toName:string, message:string) {
 

  const emailParams = {
    from_name: fromName,
    from_email:fromEmail,
    to_name: toName,
    message: message,
  };
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  try{
    const response = emailjs.send(serviceId, templateId, emailParams, publicKey);
    console.log("Email sent successfully")
    return response;

  }catch (error) {
    console.error("Error sending email:", error);
    throw error;  
  }
}

