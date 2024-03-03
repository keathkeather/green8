import emailjs from "@emailjs/browser";

export default  function sendEmail(fromName:string,fromEmail:string , toName:string, message:string) {
 

  const emailParams = {
    from_name: fromName,
    from_email:fromEmail,
    to_name: toName,
    message: message,
  };
  emailjs.send(
    'service_ln34e4m', 
    'template_jbz53cl', emailParams, 
    'RcBrF1skyONHEMFFM'
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

