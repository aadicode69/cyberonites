import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HForm = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    universityRollNumber: "",
    collegeEmail: "",
    contactNumber: "",
    yearOfStudy: "",
    courseOfStudy: "",
    applyingFor: "",
  });
  const navigate = useNavigate();

  const handleCheckboxChange = () => setIsAccepted(!isAccepted);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAccepted) {
      //   console.log("Form submitted with data: ", formData);
      alert("Your application has been submitted");
      setFormData({
        fullName: "",
        universityRollNumber: "",
        collegeEmail: "",
        contactNumber: "",
        yearOfStudy: "",
        courseOfStudy: "",
        applyingFor: "",
      });
      setIsAccepted(false);
      navigate("/join_hiringLobby");
    } else {
      alert("You must accept the code of conduct to submit the form");
    }
  };

  return (
    <motion.div
      className="max-w mx-auto p-4 sm:p-6 md:p-8 bg-gray-100 shadow-lg w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-clash">
          Cyberonites Club - Recruitment Form
        </h1>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-lg font-quicksand">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <label
                  className="text-gray-700 capitalize font-semibold"
                  htmlFor={key}
                >
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                {key === "yearOfStudy" || key === "applyingFor" ? (
                  <select
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    required
                  >
                    <option value="">
                      Select {key.replace(/([A-Z])/g, " $1")}
                    </option>
                    {key === "yearOfStudy"
                      ? ["First Year", "Second Year"].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))
                      : [
                          "Design Team",
                          "Technical Team",
                          "Management Team",
                        ].map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                  </select>
                ) : (
                  <input
                    type={
                      key.includes("Email")
                        ? "email"
                        : key.includes("Number")
                        ? "tel"
                        : "text"
                    }
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    className="p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300 w-full"
                    required
                  />
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border rounded-lg bg-gray-50 text-sm">
            <h3 className="text-lg font-semibold mb-2">Code of Conduct</h3>
            <div className="p-6 text-sm text-gray-800 bg-gray-50 rounded-lg shadow-md">
              <p className="text-md mb-4">
                The <b>Cyberonites Team</b> is committed to upholding the
                highest standards of professionalism, ethical behavior and
                collaboration in all activities. As members of the Security Task
                Force at GLA University, we adhere to the following principles:
              </p>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong className="text-md font-semibold ">
                    Integrity and Ethical Conduct
                  </strong>
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>
                      <strong>Respect Confidentiality:</strong> Team members
                      must maintain the confidentiality of all sensitive
                      information, whether related to team projects,
                      cybersecurity incidents, or personal data.
                    </li>
                    <li>
                      <strong>Report Security and Concerns:</strong> Any
                      discovered vulnerabilities or suspicious activities must
                      be reported immediately to the appropriate authorities.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="text-md font-semibold">
                    Professionalism
                  </strong>
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>
                      <strong>Maintain a Positive Attitude:</strong> Team
                      members should approach all tasks with a positive mindset,
                      show commitment to continuous learning, and strive for
                      excellence.
                    </li>
                    <li>
                      <strong>Respect Others:</strong> Treat all fellow members,
                      stakeholders, and partners with respect, regardless of
                      their skill level, background, or role.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="text-md font-semibold">
                    Responsibility
                  </strong>
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>
                      <strong>Adhere to Deadlines:</strong> Complete assigned
                      tasks and responsibilities on time and ensure high-quality
                      deliverables.
                    </li>
                    <li>
                      <strong>Be Accountable:</strong> Take ownership of your
                      actions, admit mistakes, and work to resolve issues when
                      they arise.
                    </li>
                    <li>
                      <strong>Use Resources Wisely:</strong> Follow best
                      practices in using tools, systems, and data, ensuring that
                      team resources are used responsibly.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="text-md font-semibold">
                    Anti-Harassment and Inclusivity
                  </strong>
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>
                      <strong>Zero Tolerance for Harassment:</strong> The
                      Cyberonites Team is dedicated to providing a
                      harassment-free experience for everyone, regardless of
                      gender, sexual orientation, disability, ethnicity, or
                      religion.
                    </li>
                    <li>
                      <strong>Promote Inclusivity:</strong> Strive to create an
                      environment where everyone feels welcome, respected, and
                      valued.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="text-md font-semibold">
                    Consequences of Violations
                  </strong>
                  <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                    <li>
                      <strong>Disciplinary Actions:</strong> Any violation of
                      this Code Of Conduct may result in disciplinary actions,
                      including suspension or removal from the Cyberonites Team.
                    </li>
                    <li>
                      <strong>Escalation Process:</strong> In case of dispute or
                      violation, team members are encouraged to report the
                      matter to the designated team lead or university
                      authority.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="acceptCode"
                checked={isAccepted}
                onChange={handleCheckboxChange}
                className="mr-2 h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="acceptCode" className="text-sm text-gray-700">
                I, hereby acknowledge that I have read, understood and agreed to
                adhere to the <b>Cyberonites Team</b> Code of Conduct. I commit
                to upholding the standards of integrity, professionalism,
                responsibility and ethical behavior as outlined in the Code. I
                understand that any violation of this Code of Conduct may result
                in disciplinary action, including suspension or removal from the
                Cyberonites Team.
              </label>
            </div>
          </div>
          <motion.button
            type="submit"
            disabled={!isAccepted}
            className={`w-full py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform text-sm sm:text-base ${
              isAccepted
                ? "bg-indigo-500 hover:bg-indigo-600 scale-105"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            whileHover={{ scale: isAccepted ? 1.05 : 1 }}
          >
            Submit Application
          </motion.button>
        </form>
        <button
          className="fixed bottom-5 right-5 z-50 bg-indigo-400 transition-all duration-300 hover:-translate-y-1 transform py-4 px-4 rounded-full flex items-center justify-center"
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
      </section>
    </motion.div>
  );
};

export default HForm;
