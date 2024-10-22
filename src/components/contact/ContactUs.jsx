import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import React from "react";
import contactSvg from "../../img/undraw_personal_text_re_vqj3.svg";

function ContactUs() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly p-4 md:p-10">
      <img
        src={contactSvg}
        alt="contactus_svg"
        className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-10 lg:mb-0 mx-auto"
      />
      <div className="bg-black p-6 md:p-10 text-left font-cyberfont w-full lg:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 md:mt-2">
          Connect with <br />
          <span className="text-cyan-400">Cyberonites</span> Club
        </h1>
        <p className="text-white mt-4 text-base md:text-lg">
          We're here to answer your questions and engage with cybersecurity
          enthusiasts like you! Reach out to us for inquiries about our club
          activities, collaborations, or any cybersecurity-related discussions.
          Whether you're a student, faculty member, or industry professional, we
          welcome your interest and participation.
        </p>
        <div className="bg-black flex justify-start space-x-4 md:space-x-6 mt-6">
          <a href="#">
            <FaEnvelope className="text-white rounded h-6 w-6 md:h-8 md:w-8 hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaLinkedin className="text-white rounded h-6 w-6 md:h-8 md:w-8 hover:text-cyan-400" />
          </a>
          <a href="#">
            <FaInstagram className="text-white rounded h-6 w-6 md:h-8 md:w-8 hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
