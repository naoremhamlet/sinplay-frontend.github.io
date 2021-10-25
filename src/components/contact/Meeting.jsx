import React, { Component } from "react";
import Axios from "axios";
import Datetime from "react-datetime";
import moment from "moment";
import { withAlert } from "react-alert";
import "react-datetime/css/react-datetime.css";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const REQUEST_BASE_URL = process.env.REACT_APP_REQUEST_BASE_URL;

var yesterday = moment().subtract(1, "day");
var valid = function (current) {
  return (
    current.isAfter(yesterday) && current.day() !== 0 && current.day() !== 6
  );
};

class Meeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      name: "",
      about: "",
      email: "",
      guest_email: [],
    };

    this.createGuestInput = this.createGuestInput.bind(this);
    this.setMeetingTime = this.setMeetingTime.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.submitMeeting = this.submitMeeting.bind(this);
  }

  createGuestInput() {
    let parent = document.getElementsByClassName("meeting_guest")[0];
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Guest Email");
    input.setAttribute("class", "guest_email_input");

    parent.appendChild(input).focus();
  }

  setMeetingTime(e, type) {
    let d = e._d;
    let { date } = this.state;
    date = new Date(date);

    if (type === "date") {
      date =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      this.setState({ date });
    } else {
      date =
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      this.setState({ date });
    }
  }

  changeInput(e, type) {
    switch (type) {
      case "name":
        this.setState({ name: e.target.value });
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

  submitMeeting() {
    const alert = this.props.alert;
    /* eslint-disable no-unused-vars */

    const { date, guest_email } = this.state;
    const state = this.state;
    let isValid = true;
    let data = {};

    if (new Date(date) < new Date()) {
      alert.show("Please Select a valid datetime.");
      return;
    }
    for (let field in state) {
      if (field !== "date" && field !== "guest_email") {
        if (state[field] === "") {
          alert.show(`${field} cannot be blank.`);
          isValid = false;
        }
      }
      data[field] = state[field];
    }

    let guest_email_input =
      document.getElementsByClassName("guest_email_input");
    console.log(guest_email_input);
    for (let i = 0; i < guest_email_input.length; i++) {
      if (
        guest_email_input[i].value !== "" &&
        guest_email_input[i].value !== undefined
      )
        data.guest_email.push(guest_email_input[i].value);
    }

    if (isValid) {
      console.log(data);
      Axios.post(`${REQUEST_BASE_URL}/api/set_meeting`, { data }).then(
        (response) => {
          if (response.data.success) {
            alert.show("meeting set successfully on " + data.date);
            this.setState({ name: "", email: "", about: "", guest_email: [] });
            while (guest_email_input.length > 1) guest_email_input[0].remove();
            guest_email_input[0].value = "";
          }
        }
      );
    }
  }

  render() {
    const { name, email, about } = this.state;
    return (
      <div className="meeting_container">
        <div className="meeting_header">
          <p className="contact_us_header schedule-header">
            Schedule a Meeting
          </p>
          <p className="meeting_description">Please Select a date</p>
        </div>
        <div className="meeting_details">
          <div className="meeting_date_container">
            <Datetime
              input={false}
              timeFormat={false}
              isValidDate={valid}
              onChange={(e) => this.setMeetingTime(e, "date")}
            />
            <Datetime
              input={false}
              dateFormat={false}
              isValidDate={valid}
              onChange={(e) => this.setMeetingTime(e, "time")}
            />
          </div>
          <div className="meeting_info">
            <input
              value={name}
              type="text"
              placeholder="Name"
              maxLength={40}
              onChange={(e) => this.changeInput(e, "name")}
            />
            <input
              value={email}
              type="email"
              placeholder="Email"
              maxLength={40}
              onChange={(e) => this.changeInput(e, "email")}
            />
            <textarea
              value={about}
              placeholder="About the meeting"
              maxLength={100}
              onChange={(e) => this.changeInput(e, "about")}
            />
          </div>
          <div className="meeting_guest">
            <p>
              <FontAwesomeIcon icon={faPlus} />
              <button
                id="add"
                className="add_guest_button"
                onClick={this.createGuestInput}
              ></button>
              <label for="add"> Add guests </label>
            </p>
            <input
              type="text"
              placeholder="Guest Email"
              className="guest_email_input"
            />
          </div>
        </div>
        <input
          className="meeting_submit"
          type="button"
          value="Confirm"
          onClick={this.submitMeeting}
        />
      </div>
    );
  }
}

export default withAlert()(Meeting);
