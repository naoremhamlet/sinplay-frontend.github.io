import React, { Component } from "react";
import WhatsAppWidget from "react-whatsapp-widget";
import { withAlert } from "react-alert";

import "react-whatsapp-widget/dist/index.css";
import Phone from "../../Images/chat_phone.svg";
import Message from "../../Images/chat_message.svg";
import Cross from "../../Images/chat_cross.svg";

import "./Chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.rotateParent = this.rotateParent.bind(this);
  }

  rotateParent() {
    let { active } = this.state;
    console.log(active);
    let img = document.getElementById("parent_img");
    if (active) {
      let turnAngle = 180;
      img.setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
      document.querySelector("#parent_img").src = Cross;
    } else {
      let turnAngle = 0;
      img.setAttribute("style", "transform: rotate(" + turnAngle + "deg)");
      document.querySelector("#parent_img").src = Message;
    }
  }

  render() {
    const { active } = this.state;
    const alert = this.props.alert;
    return (
      <div className="chat_widget">
        {active ? (
          <>
            <div className="child_whatsapp">
              <WhatsAppWidget
                phoneNumber={"917005577049"}
                companyName={"Sinplay"}
                message={"Hello!  \n\nWhat can we do for you?"}
                textReplyTime={"Reply within 12 hours."}
              />
            </div>
            <div
              className="child_phone"
              onClick={() => alert.show("you can call on 07005577049")}
            >
              <a href="tel:+919366309563">
                <img src={Phone} style={{ display: "flex" }} alt="" />
              </a>
            </div>
          </>
        ) : null}
        <div
          className="parent"
          onClick={() =>
            this.setState({ active: !active }, () => this.rotateParent())
          }
        >
          <img id="parent_img" src={Message} alt="" />
        </div>
      </div>
    );
  }
}

export default withAlert()(Chat);
