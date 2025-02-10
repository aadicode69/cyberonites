import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hiring() {
  const [visibleContact, setVisibleContact] = useState(false);

  const contacts = [
    {
      name: "Aaditya Goyal",
      position: "Web Development Head",
      number: "+91 9927456566",
      email: "aadityagoyalofficial@gmail.com",
    },
    {
      name: "Nitin Sikarwar",
      position: "Deputy Technical Head",
      number: "+91 9548514037",
      email: "nitin.sikarwar939@gmail.com",
    },
  ];

  const navigate = useNavigate();

  const handleToggle = () => {
    setVisibleContact(!visibleContact);
  };

  const handleApplyNow = () => {
    navigate("/recruitment_form");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-700 text-white p-6 shadow-md text-center">
        <h1 className="text-4xl font-bold font-clash">We Are Hiring Now!</h1>
      </header>
      <main className="p-4 sm:p-8 max-w-5xl mx-auto">
        <div className="bg-gray-100 shadow-lg rounded-xl p-6 sm:p-10 text-left font-cyberfont">
          <p className="text-lg mb-4">
            Are you passionate about cybersecurity? Do you have a knack for
            solving complex problems and defending systems from threats?{" "}
            <strong>Cyberonites Club</strong>, the Security Task Force at GLA
            University, is now recruiting talented and enthusiastic students to
            join our team!
          </p>
          <p className="text-lg mb-4">
            As a member, you'll have the opportunity to:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <strong>Learn and Grow:</strong> Participate in hands-on sessions,
              workshops, and events focused on the latest trends and techniques
              in cybersecurity.
            </li>
            <li>
              <strong>Compete and Excel:</strong> Represent GLA University in
              national and international CTF competitions and showcase your
              skills.
            </li>
            <li>
              <strong>Collaborate and Network:</strong> Work alongside
              experienced peers and industry experts, and expand your
              professional network.
            </li>
            <li>
              <strong>Contribute and Lead:</strong> Take responsibilities by
              organizing cybersecurity events, contributing to tech projects,
              and leading teams to drive innovation.
            </li>
          </ul>
          <p className="text-lg font-normal mb-6">
            LAST DATE TO APPLY: <b>18th February 2025 12.00 A.M. IST</b>
          </p>
          <p className="text-lg mb-4">
            For any issues mail us at:{" "}
            <a
              href="mailto:hiring@cyberonites.com"
              className="text-blue-600 underline font-semibold"
            >
              hiring@cyberonites.com
            </a>
          </p>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 w-full max-w-x">
            <div className="flex flex-row items-center justify-between" onClick={handleToggle}>
              <span className="font-semibold text-lg">
                {" "}
                Other Points of Contact
              </span>
              <button
                className="mt-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-transform duration-300"
                onClick={handleToggle}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L6 9L11 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${visibleContact ? "max-h-64" : "max-h-0"}`}
              style={{ transitionProperty: "max-height" }}
            >
              {visibleContact && (
                <div className="mt-4 text-sm text-gray-700">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    {contacts.map((contact, index) => (
                      <div key={index} className="flex-1">
                        <p>
                          <strong>{contact.name}</strong> -{" "}
                          <em>{contact.position}</em>
                        </p>
                        <p>
                          <strong>Phone:</strong> {contact.number}
                        </p>
                        <p>
                          <strong>Email:</strong>{" "}
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-600 underline font-semibold"
                          >
                            {contact.email}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleApplyNow}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 px-8 py-4 rounded-lg text-lg font-bold shadow-md hover:shadow-lg transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      </main>
      <button
            className="fixed bottom-5 right-5 z-50 bg-blue-500 transition-all duration-300 hover:-translate-y-1 transform py-4 px-4 rounded-full flex items-center justify-center"
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
}
