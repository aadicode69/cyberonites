import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import Footer from "../footer/Footer";

const ContactUs = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          backgroundColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    navigate("/");
    setIsSubmitting(false);
  };

  return (
    <>
    <div ref={vantaRef} className="flex justify-center items-center min-h-screen font-clash">
      <div className="w-full max-w-md p-8 bg-transparent rounded-lg shadow-lg backdrop-blur-xl bg-opacity-30">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="Name" className="block text-white text-md mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-cyan-300 placeholder:text-sm"
              required
              placeholder="Enter Your Name"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="Email" className="block text-white text-md mb-2 font-semibold">
              Contact
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-cyan-300 placeholder:text-sm"
              required
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="Message" className="block text-white text-md mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-0 focus:border-cyan-300 placeholder:text-sm"
              rows="4"
              required
              placeholder="Your query goes here. . ."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer p-3 text-white bg-[#212121] w-28 aspect-[4/1] rounded-md outline outline-1 outline-[#353535] border-0 shadow-md transition-all duration-300 relative hover:scale-110 hover:shadow-lg hover:bg-[radial-gradient(circle_at_bottom,rgba(50,100,180,0.5)_10%,#212121_70%)] hover:outline-0 text-center"
          >
            Submit
          </button>
        </form>
      </div>

      <button
        className="fixed bottom-5 text-white right-5 z-50 bg-gradient-to-tl from-gray-800 to-white hover:shadow-lg hover:scale-105 transition-all duration-300 py-4 px-4 rounded-full flex items-center justify-center"
        onClick={() => navigate("/")}
        aria-label="Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75l8.485-7.485a2.25 2.25 0 013.03 0L23 9.75M3.75 9.75V21a2.25 2.25 0 002.25 2.25h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5a.75.75 0 00.75.75h4.5A2.25 2.25 0 0020.25 21V9.75m-16.5 0L12 3m8.25 6.75L12 3"
          />
        </svg>
      </button>
    </div>
    </>
  );
};

export default ContactUs;
