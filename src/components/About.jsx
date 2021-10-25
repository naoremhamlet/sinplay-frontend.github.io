import React from "react";

import person1 from "../Images/Imerson.jpg";
import person2 from "../Images/Akash.jpg";

function About() {
  return (
    <div>
      <h1 className="container-title about-us-heading" id="about">
        About Us
      </h1>
      <div className="about-container">
        <div className="about">
          <div className="about-content">
            <p className="content-small-title">WHO WE ARE</p>
            <h1 className="content-title">
              We are a team of experienced creators who love creating content
            </h1>
            <p className="content-body">
              We specialize in various forms of content creation, anything from
              video production to graphic design to creating creative memes that
              engage with the right audience.
            </p>
            <p className="about-button contact-button">Contact Us</p>
          </div>
          <div className="team-members">
            <div className="about-member1 about-card">
              <div className="about-card-image">
                <img src={person1} alt="name_of_person" />
              </div>
              <div className="about-details">
                <p className="about-card-name">Imerson Salam</p>
                <p className="about-card-position">Co Founder</p>
                <p className="about-card-description">
                  Siemen's foundation Scholar.<br></br>
                  YouTuber with 180K+ subscribers and experienced in making
                  content for multiple successful brands like Unacademy,
                  GeeksforGeeks, Leap Scholar Able Jobs(YC '19).
                </p>
              </div>
            </div>
            <div className="about-member1 about-card">
              <div className="about-card-image">
                <img src={person2} alt="name_of_person" />
              </div>
              <div className="about-details">
                <p className="about-card-name">Akash Pukhrmabam</p>
                <p className="about-card-position">Co Founder</p>
                <p className="about-card-description">
                  ONGC foundation Scholar.<br></br>
                  He is also a content creator and a meme marketer. He has worked with various brands
                  to build their growth strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
