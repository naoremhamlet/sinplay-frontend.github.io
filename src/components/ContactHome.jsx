import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function ContactHome() {
  return (
    <div className="contact-us">
      <h1 className="container-title">Contact Us</h1>
      <div className="address-email-container">
        <div className="contact-us-address">
          <p className="contact-us-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </p>
          <h1 className="address-header">Address</h1>
          <p className="line-height">
            153, fz1,
            <br />
            Lorem ipsum awsd fwas,
            <br />
            MH - 656 854 486
          </p>
        </div>
        <div className="contact-us-email">
          <p className="contact-us-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </p>
          <h1 className="address-header">Email Us</h1>
          <p className="line-height">
            akashapukhram@gmail.com
            <br />
            imresonsalam2001@gmail.com
            <br />
            dr.akash@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
export default ContactHome;
