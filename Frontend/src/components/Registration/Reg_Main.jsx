import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TrueFocus from "../../blocks/TextAnimations/TrueFocus/TrueFocus";
import eventData from "../../components/Registration/events.json";
import QR from "../../img/teamwork/QR.jpg";
import { ToastContainer, toast } from "react-toastify";
import Particles from "../../blocks/Backgrounds/Particles/Particles";

function Reg_Main() {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    collegeEmail: "",
    personalEmail: "",
    collegeName: "",
    contactNumber: "",
    selectedEvent: "",
    paymentRef: "",
    availability: false,
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [events, setEvents] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [selectedEventPrice, setSelectedEventPrice] = useState("");

  useEffect(() => {
    setEvents(eventData);
  }, []);

  useEffect(() => {
    const selectedEvent = events.find(
      (event) => event.name === formData.selectedEvent
    );
    if (selectedEvent) {
      setEventDate(selectedEvent.date);
      setSelectedEventPrice(selectedEvent.price);
    }
  }, [formData.selectedEvent, events]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required.";
      if (!formData.rollNumber.trim())
        newErrors.rollNumber = "Roll number is required.";
      if (!formData.collegeEmail.trim())
        newErrors.collegeEmail = "College email is required.";
      if (!formData.personalEmail.trim())
        newErrors.personalEmail = "Personal email is required.";
      if (!formData.collegeName.trim())
        newErrors.collegeName = "College name is required.";
      if (!formData.contactNumber.trim())
        newErrors.contactNumber = "WhatsApp number is required.";
    }
    if (step === 2 && !formData.selectedEvent)
      newErrors.selectedEvent = "Please select an event.";
    if (step === 3 && !formData.paymentRef.trim())
      newErrors.paymentRef = "Payment reference is required.";
    if (step === 4 && !formData.availability)
      newErrors.availability = "You must confirm your availability.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Submitted:", formData);
      toast.success("Registered to the event successfully. Check your mail inbox for further updates.",
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          className:"bg-black border-y rounded-lg border-green-500 text-green-500 font-clash text-center shadow-none",
        }
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else if (!formData.availability) {
      toast.error("Please confirm your availability before submitting.", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className:"bg-black border-x rounded-lg border-red-600 text-red-600 font-clash text-center shadow-none",
        bodyClassName: "text-red-500",
      });
    }
  };

  const progressSteps = ["User Info", "Event Selection", "Payment", "Confirm"];

  const getStepWidth = () => {
    switch (step) {
      case 1:
        return "max-w-5xl";
      case 2:
        return "max-w-xl";
      case 3:
        return "max-w-4xl";
      case 4:
        return "max-w-4xl";
      default:
        return "max-w-2xl";
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent text-white">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#26c6da", "#26c6da"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <ToastContainer />

      {/* mob-prog-steps */}
      <div className="md:hidden w-full bg-transparent p-4 z-10 border-b border-cyan-600 mb-7">
        <h2 className="text-xl font-semibold mb-3 text-center font-clash">
          Registration Progress
        </h2>
        <div className="flex justify-between items-center">
          {progressSteps.map((label, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${
                index < progressSteps.length - 1 ? "w-1/4" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1 ${
                  step >= index + 1
                    ? "bg-cyan-400 text-black"
                    : "bg-black border border-cyan-600"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs text-center font-clash">{label}</span>
              {index < progressSteps.length - 1 && (
                <div
                  className={`absolute top-4 left-[calc(50%+16px)] w-[calc(100%-32px)] h-0.5 ${
                    step > index + 1 ? "bg-cyan-400" : "bg-cyan-900"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* main content */}
      <div className="flex flex-col md:flex-row flex-grow z-10">
        <aside className="hidden md:block md:w-1/4 lg:w-1/5 bg-transparent border-r border-cyan-800 pt-16 px-6">
          <div className="sticky top-16">
            <h2 className="text-2xl font-semibold mb-8 text-center font-clash text-cyan-400">
              Registration Steps
            </h2>
            <nav className="space-y-4">
              {progressSteps.map((label, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition flex items-center ${
                    step >= index + 1
                      ? "bg-black/30 text-white font-normal border-l-4 border-cyan-400 font-clash"
                      : "bg-black/20 font-clash border-l-4 border-cyan-800 text-gray-400"
                  }`}
                >
                  <div
                    className={`mr-3 w-7 h-7 rounded-full flex items-center justify-center ${
                      step >= index + 1
                        ? "bg-cyan-400 text-black"
                        : "bg-transparent border border-cyan-800"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <div className="w-full md:w-3/4 lg:w-4/5 flex flex-col items-center">
          <div className="w-full mx-auto pt-10 pb-10 px-4">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-clash inline-block">
                <TrueFocus
                  sentence="Registrations Are Live"
                  manualMode={false}
                  blurAmount={2.5}
                  borderColor="#67e8f9"
                  animationDuration={0.5}
                  pauseBetweenAnimations={0.8}
                />
              </h2>
            </div>
            <motion.div
              className={`p-8 bg-transparent backdrop-blur-sm border border-cyan-700 rounded-2xl shadow-xl mx-auto ${getStepWidth()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {step === 1 && (
                <>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center font-clash">
                    User Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-clash text-cyan-300 mb-3 pb-1">
                        Personal Details
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-cyan-300 mb-1 font-clash">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 text-white bg-transparent rounded-xl border-b-2 border-cyan-800 focus:border-y focus:border-cyan-500 outline-none font-quicksand transition-all duration-200"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs pl-2 mt-1 font-quicksand">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm text-cyan-300 mb-1 font-clash">
                            WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            name="contactNumber"
                            placeholder="Enter WhatsApp Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full p-2 text-white bg-transparent rounded-xl border-b-2 border-cyan-800 focus:border-y focus:border-cyan-500 outline-none font-quicksand transition-all duration-200"
                          />
                          {errors.contactNumber && (
                            <p className="text-red-500 text-xs pl-2 mt-1 font-quicksand">
                              {errors.contactNumber}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm text-cyan-300 mb-1 font-clash">
                            Personal Email
                          </label>
                          <input
                            type="email"
                            name="personalEmail"
                            placeholder="Enter Personal Email"
                            value={formData.personalEmail}
                            onChange={handleChange}
                            className="w-full p-2 text-white bg-transparent rounded-xl border-b-2 border-cyan-800 focus:border-y focus:border-cyan-500 outline-none font-quicksand transition-all duration-200"
                          />
                          {errors.personalEmail && (
                            <p className="text-red-500 text-xs pl-2 mt-1 font-quicksand">
                              {errors.personalEmail}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-clash text-cyan-300 mb-3 pb-1">
                        College Details
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-cyan-300 mb-1 font-clash">
                            College Name
                          </label>
                          <input
                            type="text"
                            name="collegeName"
                            placeholder="Enter College Name"
                            value={formData.collegeName}
                            onChange={handleChange}
                            className="w-full p-2 text-white bg-transparent rounded-xl border-b-2 border-cyan-800 focus:border-y focus:border-cyan-500 outline-none font-quicksand transition-all duration-200"
                          />
                          {errors.collegeName && (
                            <p className="text-red-500 text-xs pl-2 mt-1 font-quicksand">
                              {errors.collegeName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm text-cyan-300 mb-1 font-clash">
                            Roll Number
                          </label>
                          <input
                            type="text"
                            name="rollNumber"
                            placeholder="Enter Roll Number"
                            value={formData.rollNumber}
                            onChange={handleChange}
                            className="w-full p-2 text-white bg-transparent rounded-xl border-b-2 border-cyan-800 focus:border-y focus:border-cyan-500 outline-none font-quicksand transition-all duration-200"
                          />
                          {errors.rollNumber && (
                            <p className="text-red-500 text-xs pl-2 mt-1 font-quicksand">
                              {errors.rollNumber}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm text-cyan-300 mb-1 font-clash">
                            College Email
                          </label>
                          <input
                            type="email"
                            name="collegeEmail"
                            placeholder="Enter College Email"
                            value={formData.collegeEmail}
                            onChange={handleChange}
                            className="w-full p-2 text-white bg-transparent rounded-xl border-b-2 border-cyan-800 focus:border-y focus:border-cyan-500 outline-none font-quicksand transition-all duration-200"
                          />
                          {errors.collegeEmail && (
                            <p className="text-red-500 text-xs pl-2 mt-1 font-quicksand">
                              {errors.collegeEmail}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-8 text-center font-clash">
                    Pick Your Event
                  </h3>
                  <div className="mb-6">
                    <label className="block text-sm text-cyan-300 mb-2 font-clash">
                      Select Event
                    </label>
                    <select
                      name="selectedEvent"
                      value={formData.selectedEvent}
                      onChange={handleChange}
                      className="w-full p-3 text-white font-normal font-clash bg-black/50 rounded-xl border-y border-cyan-800 focus:border-cyan-500 outline-none transition-all duration-200"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-black text-gray-400"
                      >
                        Select an Event
                      </option>
                      {events.map((event) => (
                        <option
                          key={event.id}
                          value={event.name}
                          className="bg-black text-white"
                        >
                          {event.name} (₹{event.price})
                        </option>
                      ))}
                    </select>
                    {errors.selectedEvent && (
                      <p className="text-red-500 text-xs pl-3 mt-2 font-quicksand">
                        {errors.selectedEvent}
                      </p>
                    )}
                  </div>

                  {formData.selectedEvent && (
                    <div className="mt-8 p-4 bg-cyan-900/20 border border-cyan-800 rounded-lg">
                      <h4 className="font-clash text-cyan-400 mb-2">
                        Selected Event Details
                      </h4>
                      <p className="text-sm font-quicksand">
                        Event:{" "}
                        <span className="text-white">
                          {formData.selectedEvent}
                        </span>
                      </p>
                      <p className="text-sm font-quicksand">
                        Date:{" "}
                        <span className="text-white">{eventDate || "TBA"}</span>
                      </p>
                      <p className="text-sm font-quicksand">
                        Price:{" "}
                        <span className="text-white">
                          ₹{selectedEventPrice}
                        </span>
                      </p>
                    </div>
                  )}
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="text-2xl font-clash text-cyan-400 font-semibold mb-6 text-center">
                    Payment Details
                  </h3>
                  <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0">
                    <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                      <p className="text-sm text-cyan-300 mb-3 font-clash">
                        Scan QR Code to Pay:
                      </p>
                      <div className="border-y-2 border-cyan-600 p-2 rounded-lg">
                        <img
                          src={QR}
                          alt="QR Code"
                          className="w-40 h-40 md:w-52 md:h-52 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <label className="block text-sm text-cyan-300 mb-2 font-clash">
                            Transaction ID / Reference Number
                          </label>
                          <input
                            type="text"
                            name="paymentRef"
                            placeholder="Enter your payment reference"
                            value={formData.paymentRef}
                            onChange={handleChange}
                            className="w-full p-3 font-clash bg-transparent rounded-xl border-y border-cyan-600 focus:border-cyan-500 outline-none text-white transition-all duration-200"
                          />
                          {errors.paymentRef && (
                            <p className="text-red-500 text-xs pl-3 mt-2 font-quicksand">
                              {errors.paymentRef}
                            </p>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm text-cyan-300 mb-2 font-clash">
                            Upload Payment Proof
                          </label>
                          <div className="border-y border-dashed border-cyan-600 rounded-xl p-4 text-center">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setFormData((prev) => ({
                                      ...prev,
                                      paymentImage: reader.result,
                                    }));
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="w-full p-2 bg-transparent font-cyberfont text-cyan-300 rounded-xl cursor-pointer"
                            />
                            <p className="text-xs text-cyan-600 mt-2">
                              Upload PNG, JPG, or JPEG (Max: 2MB)
                            </p>
                          </div>
                        </div>
                      </div>
                      {formData.paymentImage && (
                        <div className="mt-4 flex justify-center md:justify-start">
                          <div className="border border-cyan-600 p-1 rounded-lg">
                            <img
                              src={formData.paymentImage}
                              alt="Payment Proof"
                              className="w-40 h-40 rounded-lg object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="text-2xl font-clash text-cyan-400 font-semibold mb-6 text-center">
                    Confirm Registration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-cyan-900/15 border border-cyan-600 rounded-lg p-5 shadow-lg">
                      <h4 className="font-clash text-cyan-400 mb-3 text-lg border-b border-cyan-800 pb-2">
                        Personal Info
                      </h4>
                      <div className="space-y-3 font-quicksand text-sm">
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Name:</span>
                          <span className="text-white">{formData.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">WhatsApp:</span>
                          <span className="text-white">
                            {formData.contactNumber}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-cyan-300">Personal Email:</span>
                          <span className="text-white break-words">
                            {formData.personalEmail}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-cyan-900/15 border border-cyan-600 rounded-lg p-5 shadow-lg">
                      <h4 className="font-clash text-cyan-400 mb-3 text-lg border-b border-cyan-800 pb-2">
                        College Info
                      </h4>
                      <div className="space-y-3 font-quicksand text-sm">
                        <div className="flex justify-between">
                          <span className="text-cyan-300">College:</span>
                          <span className="text-white break-words">
                            {formData.collegeName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Roll Number:</span>
                          <span className="text-white">
                            {formData.rollNumber}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-cyan-300">College Email:</span>
                          <span className="text-white break-words">
                            {formData.collegeEmail}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-cyan-900/15 border border-cyan-600 rounded-lg p-5 shadow-lg">
                      <h4 className="font-clash text-cyan-400 mb-3 text-lg border-b border-cyan-800 pb-2">
                        Event & Payment
                      </h4>
                      <div className="space-y-3 font-quicksand text-sm">
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Event:</span>
                          <span className="text-white break-words">
                            {formData.selectedEvent}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Event Date:</span>
                          <span className="text-white">
                            {eventDate || "TBA"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Ticket Price:</span>
                          <span className="text-white font-medium">
                            ₹{selectedEventPrice}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-cyan-300">Payment Ref:</span>
                          <span className="text-white truncate">
                            {formData.paymentRef}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-cyan-800/20 border border-cyan-600 rounded-lg p-4 shadow-lg">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="availability"
                        checked={formData.availability}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 accent-cyan-500 rounded"
                      />
                      <label className="ml-3 text-sm font-quicksand text-white">
                        I confirm that I will be available for the event on{" "}
                        <span className="font-semibold text-cyan-400">
                          {eventDate || "the scheduled date"}
                        </span>{" "}
                        and all the information provided above is correct.
                      </label>
                    </div>
                    {errors.availability && (
                      <p className="text-red-500 text-xs pl-8 mt-2 font-quicksand">
                        {errors.availability}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* navi-buttons */}
              <div className="flex justify-between items-center mt-8">
                {step > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBack}
                    className="px-6 py-2.5 bg-transparent border-y border-cyan-600 text-cyan-300 rounded-lg hover:border-cyan-400 hover:text-cyan-200 focus:border-cyan-400 transition-all duration-200 font-clash"
                  >
                    Back
                  </motion.button>
                )}
                {step < 4 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className={`px-6 py-2.5 bg-transparent border-y border-cyan-600 text-cyan-300 rounded-lg hover:border-cyan-400 hover:text-cyan-200 focus:border-cyan-400 transition-all duration-200 font-clash ${
                      step === 1 && !formData.name ? "ml-auto" : ""
                    }`}
                  >
                    Next
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="px-7 py-2.5 bg-cyan-700/30 border-x-2 border-cyan-500 text-white rounded-lg hover:bg-cyan-600/30 hover:border-cyan-400 focus:border-cyan-400 transition-all duration-200 font-clash"
                  >
                    Submit Registration
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reg_Main;
