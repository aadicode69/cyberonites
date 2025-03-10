
import React from "react";
import "./KnowUs.css";

const KnowUs = () => {
  return (
    <div id="About" className="know-us-container">
      <div className="animated-bg"></div>
      <div className="content-wrapper">
        <div className="heading-container">
          <h2 className="subtitle font-quicksand">KNOW US</h2>
          <h1 className="title font-clash">Fostering Cybersecurity Excellence</h1>
        </div>
        
        <div className="cards-container">
          <div className="card mission">
            <div className="card-content">
              <h3 className="font-clash" >MISSION</h3>
              <p className="font-cyberfont">
                At Cyberonites Club, our mission is to foster a community of
                passionate tech enthusiasts dedicated to exploring and advancing
                the field of cybersecurity. We aim to provide our members with the
                knowledge, skills, and experiences needed to excel in the
                ever-evolving digital landscape.
              </p>
            </div>
            <div className="card-bg"></div>
          </div>

          <div className="card who-we-are">
            <div className="card-content">
              <h3 className="font-clash">WHO WE ARE</h3>
              <p className="font-cyberfont">
                Cyberonites Club is a vibrant and diverse group of students,
                professionals, and hobbyists who share a common interest in
                cybersecurity. Founded in 2016, our club has grown into a
                supportive network where members collaborate, learn, and innovate.
              </p>
            </div>
            <div className="card-bg"></div>
          </div>

          <div className="card our-story">
            <div className="card-content">
              <h3 className="font-clash">OUR STORY</h3>
              <p className="font-cyberfont">
                The Cyberonites Club was established with a vision to create a
                platform for like-minded individuals to come together and delve
                into the world of cybersecurity. From humble beginnings as a small
                group of enthusiasts, we have expanded to include regular
                workshops, guest lectures, hackathons, and collaborative projects.
              </p>
            </div>
            <div className="card-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
