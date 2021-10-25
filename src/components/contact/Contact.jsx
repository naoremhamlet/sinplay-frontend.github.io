import React, { Component } from "react";
import Axios from "axios";
import { withAlert } from "react-alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faGlobe,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

// import message from "../../Images/message.svg";
// import phone from "../../Images/phone.svg";
// import website from "../../Images/website.svg";
// import address from "../../Images/address.svg";
// import email from "../../Images/email.png";
// import phone from "../../Images/phone.png";
// import website from "../../Images/website.png";
// import location from "../../Images/location.png";
import "./contact.css";
import Meeting from "./Meeting";

const REQUEST_BASE_URL = process.env.REACT_APP_REQUEST_BASE_URL;

// const info = [
//   {
//     head: "Address",
//     image: address,
//     text: "Laxmi Nagar, New Delhi, India 110012",
//     href: "",
//   },
//   {
//     head: "Phone",
//     image: phone,
//     text: "+91 1234567890",
//     href: "tel:1234567890",
//   },
//   {
//     head: "Email",
//     image: message,
//     text: "sinplay@sinplaymail.com",
//     href: "sinplay@sinplaymail.com",
//   },
//   {
//     head: "Website",
//     image: website,
//     text: "sinplay.com",
//     href: "https://sinplay.com",
//   },
// ];

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      company: "",
      email: "",
      about: "",
    };

    this.Details = this.Details.bind(this);
    this.SubmitButton = this.SubmitButton.bind(this);
    this.submitContact = this.submitContact.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  Details() {
    const { name, phone, company, email } = this.state;
    return (
      <div className="contact_details">
        <div className="contact_info">
          <p>
            <label>NAME</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => this.changeInput(e)}
              placeholder="Full Name"
            />
            <label>PHONE</label>
            <input
              id="phone"
              type="number"
              max="50"
              value={phone}
              onChange={(e) => this.changeInput(e)}
              placeholder="Phone Number"
            />
          </p>
          <p>
            <label>COMPANY</label>
            <input
              id="company"
              type="text"
              max="50"
              value={company}
              onChange={(e) => this.changeInput(e)}
              placeholder="Company Name"
            />
            <label>EMAIL</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => this.changeInput(e)}
              placeholder="Email"
            />
          </p>
        </div>
        <p className="about">
          <label>DESCRIPTION</label>
          <textarea
            id="about"
            value={this.state.about}
            onChange={(e) => this.changeInput(e)}
            placeholder="Message"
          />
        </p>
      </div>
    );
  }

  // InfoSection() {
  //   return (
  //     <div className="contact_info_container">
  //       {info.map((v, i) => (
  //         <div className="contact_info_content">
  //           <div className="content_image">
  //             <img src={v.image} alt="" />
  //           </div>
  //           <p className="content_details">
  //             <b>{v.head}: </b>{" "}
  //             <a style={{ textDecoration: "none" }} href={v.href}>
  //               {v.text}
  //             </a>
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  SubmitButton() {
    return (
      <div className="contact_button">
        <input
          type="button"
          value="Send Message"
          className="submit_button"
          onClick={() => this.submitContact()}
        />
      </div>
    );
  }

  changeInput(e) {
    document.getElementById(e.target.id).style.borderBottom =
      "solid 1px #8a8989";
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        return;
      case "phone":
        this.setState({ phone: e.target.value });
        return;
      case "company":
        this.setState({ company: e.target.value });
        return;
      case "email":
        this.setState({ email: e.target.value });
        return;
      case "about":
        this.setState({ about: e.target.value });
        return;
      default:
        return;
    }
  }

  submitContact() {
    const alert = this.props.alert;
    const state = this.state;

    let isValid = true;
    const data = {};

    for (let field in state) {
      if (state[field] === "") {
        document.getElementById(field).style.borderBottom = "solid 2px red";
        alert.show(`${field} cannot be blank.`);
        isValid = false;
      }
      data[field] = state[field];
    }

    if (isValid) {
      Axios.post(`${REQUEST_BASE_URL}/api/recieve_message`, { data }).then(
        (response) => {
          if (!response.data.success) {
            document.getElementById("email").style.borderBottom =
              "solid 2px red";
            alert.show("Email already used.");
          } else {
            this.setState({
              name: "",
              phone: "",
              company: "",
              email: "",
              about: "",
            });
            alert.show("Thanky you. Your message is recieved.");
          }
        }
      );
    }
  }

  render() {
    return (
      <div className="contact_container">
        {window.scrollTo({ top: 0, behavior: "smooth" })}
        <div className="contact_detail_container">
          <div className="contact">
            <p className="contact_us_header">Contact Us</p>
            <this.Details />
            <this.SubmitButton />
            <div className="contact-info">
              <div className="contact-info-email contact-info-child">
                <h1>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </h1>
                <p>akashapukhram@gmail.com</p>
              </div>
              <div className="contact-info-phone-number contact-info-child">
                <h1>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </h1>
                <p>+91 7005577049</p>
              </div>
              <div className="contact-info-website contact-info-child">
                <h1>
                  {" "}
                  <FontAwesomeIcon icon={faGlobe} />
                </h1>
                <p>https://sinplay.com</p>
              </div>
              <div className="contact-info-address contact-info-child">
                <h1 className="location-icon">
                  <FontAwesomeIcon icon={faMapMarker} />
                </h1>
                <p>Laxmi Nagar, New Delhi, India 11001</p>
              </div>
            </div>
          </div>
          <Meeting />
        </div>
        {/* <this.InfoSection /> */}
      </div>
    );
  }
}

export default withAlert()(Contact);
