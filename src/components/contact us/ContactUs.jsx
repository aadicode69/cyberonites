import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center font-clash"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/540849924/photo/hacker-using-phone.jpg?s=612x612&w=0&k=20&c=oz1z2K-z7C5-hueoFXMkLuypcRznhGPcu_PhHEU7mTU=')",
      }}
    >
      <div className="w-full max-w-md p-8 bg-transparent rounded-lg shadow-lg backdrop-blur-xl bg-opacity-30">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label
              htmlFor="Name"
              className="block text-white text-md mb-2 font-semibold"
            >
              Name_Tag
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
            <label
              htmlFor="Email"
              className="block text-white text-md mb-2 font-semibold"
            >
              Contact_Id
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
            <label
              htmlFor="Message"
              className="block text-white text-md mb-2 font-semibold"
            >
              Note
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
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white w-4 aspect-square inline mr-2"
            >
              <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
            Submit
          </button>
        </form>
      </div>

      <button
        className="fixed bottom-5 right-5 z-50 bg-gradient-to-tl from-blue-500 to-teal-500 hover:shadow-lg hover:scale-105 transition-all duration-300 py-4 px-4 rounded-full flex items-center justify-center"
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
  );
};

export default ContactUs;
