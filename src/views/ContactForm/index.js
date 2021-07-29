import React, { useState } from "react";
import SocialLinks from "../../components/SocialLinks";
import "./style.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (

<div className="viewContact" id="contact">
<div className="row contact-row">
  <div className="formDiv" id="contact">
    <h3 className="viewTitle" id="contactTitle">CONTACT</h3>


    <form onSubmit={handleSubmit}>
      <div>
        <label className="formLabel" htmlFor="name">Name:</label>
        <input className="pHolder" type="text" placeholder="Jane Doe" id="name" required />
      </div>
      <div>
        <label className="formLabel" htmlFor="email">Email:</label>
        <input className="pHolder"type="email" placeholder="jdoe@email.com" id="email" required />
      </div>
      <div>
        <label className="formLabel" htmlFor="message">Message:</label>
        <textarea className="pHolder" placeholder="Type your message here." id="message" required />
      </div>
      <button className="explore" type="submit">{status}</button>
    </form>

    {/* <ContactForm /> */}
    <SocialLinks />

    </div>
</div>      
</div>





  );
};

export default ContactForm;