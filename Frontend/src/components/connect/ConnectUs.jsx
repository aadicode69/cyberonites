import {FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp} from "react-icons/fa";
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
        <h1 className="text-4xl md:text-5xl font-bold font-clash text-white mt-4 md:mt-2">
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
        <div className="bg-black flex justify-start space-x-3 md:space-x-5 mt-6">
          {[
            {
              icon: <FaEnvelope className="text-3xl md:text-3xl" />,
              link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@cyberonites.com",
            },
            {
              icon: <FaLinkedin className="text-3xl md:text-3xl" />,
              link: "https://www.linkedin.com/in/cyberonites-club/",
            },
            {
              icon: <FaInstagram className="text-3xl md:text-3xl" />,
              link: "https://www.instagram.com/official_cyberonites/",
            },
            {
              icon: <FaWhatsapp className="text-3xl md:text-3xl" />,
              link: "https://chat.whatsapp.com/Hq3fqUz5J0eD4i4bYUSzR1",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative group transition-all duration-500 ease-in-out"
            >
              <span className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 text-white rounded-full bg-black shadow-lg transition-all duration-200 group-hover:-scale-125 group-hover:rotate-180 group-hover:shadow-cyan-500/50 group-hover:-translate-y-2">
                {item.icon}
              </span>
              <span className="absolute inset-0 h-full w-full bg-cyan-400 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
