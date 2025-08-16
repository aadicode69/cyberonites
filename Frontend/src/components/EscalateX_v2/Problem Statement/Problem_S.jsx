import React, { useState, useEffect } from "react";
import problemsData from "./problems.json";
import { motion, AnimatePresence } from "framer-motion";

const Problem_S = () => {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProblems, setFilteredProblems] = useState(problemsData);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectionProgress, setSelectionProgress] = useState(0);
  const [selectionComplete, setSelectionComplete] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let results = problemsData;

    if (searchTerm) {
      results = results.filter(
        (problem) =>
          problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          problem.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProblems(results);
  }, [searchTerm]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleProblem = (id) => {
    setExpandedProblem(expandedProblem === id ? null : id);
  };

  const handleSelectChallenge = (problemId) => {
    if (selectedProblem !== problemId) {
      setSelectionComplete(false);
      setSelectionProgress(0);
      const selectedChallenge = filteredProblems.find((p) => p.id === problemId);
      setToastMessage(
        `Initializing Challenge #${String(problemId).padStart(4, "0")} - ${
          selectedChallenge.title
        }`
      );
      setShowToast(true);
    }

    setSelectedProblem(problemId);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 3;
      setSelectionProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setSelectionComplete(true);
        const selectedChallenge = filteredProblems.find((p) => p.id === problemId);
        setToastMessage(
          `Challenge #${String(problemId).padStart(4, "0")} loaded successfully!`
        );
        setShowToast(true);
      }
    }, 50);
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/5"></div>
        <div
          className="absolute w-96 h-96 rounded-full bg-orange-500/10 blur-3xl transition-transform duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-6 right-6 z-50 max-w-md"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="backdrop-blur-xl bg-white/10 border border-orange-500/30 rounded-2xl shadow-2xl p-4 flex items-start">
              <div className="mr-3 text-orange-500 mt-0.5">
                {selectionComplete ? "✓" : "⚡"}
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="h-2 w-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                  <h4 className="text-white font-bold text-sm">
                    {selectionComplete ? "SUCCESS" : "PROCESSING"}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">{toastMessage}</p>
                <div className="mt-2 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "linear" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 sm:py-10">
        {/* Header */}
        <header className="mb-8 sm:mb-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ESCALATE
              </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl">
                X
              </span>
              <span className="text-white text-2xl sm:text-4xl md:text-5xl ml-2">
                v2
              </span>
            </h1>

            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-orange-500"></div>
              <h2 className="text-lg sm:text-2xl text-orange-400 font-semibold tracking-wider">
                CHALLENGE CATEGORIES
              </h2>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>

            <p className="max-w-3xl mx-auto text-gray-400 text-sm sm:text-base px-4 leading-relaxed">
              Master the domains:{" "}
              <span className="text-orange-400 font-semibold">
                Web Exploitation
              </span>{" "}
              •{" "}
              <span className="text-orange-400 font-semibold">
                Digital Forensics
              </span>{" "}
              •{" "}
              <span className="text-orange-400 font-semibold">OSINT</span> •{" "}
              <span className="text-orange-400 font-semibold">Cryptography</span> •{" "}
              <span className="text-orange-400 font-semibold">Steganography</span> •{" "}
              <span className="text-orange-400 font-semibold">
                Reverse Engineering
              </span>
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="mt-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center">
                <div className="px-4 text-orange-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search challenges..."
                  className="w-full bg-transparent border-none text-white px-2 py-4 text-sm sm:text-base focus:outline-none placeholder-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="px-4 text-orange-500 animate-pulse">|</div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Problems Grid */}
        <motion.div layout className="space-y-6">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${
                    expandedProblem === problem.id
                      ? "via-orange-500"
                      : "via-white/30"
                  } to-transparent transition-colors duration-300`}
                ></div>

                <div
                  className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start cursor-pointer"
                  onClick={() => toggleProblem(problem.id)}
                >
                  <div className="flex items-start w-full">
                    <div
                      className={`w-3 h-3 rounded-full mr-4 mt-2 shadow-lg transition-colors duration-300 ${
                        expandedProblem === problem.id
                          ? "bg-orange-500 shadow-orange-500/50"
                          : "bg-white/30"
                      }`}
                    ></div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 pr-4">
                          {problem.title || `Challenge #${problem.id}`}
                        </h3>
                        <div
                          className={`transition-transform duration-300 ${
                            expandedProblem === problem.id ? "rotate-180" : ""
                          } text-orange-500`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-gray-400">
                        <span className="px-3 py-1 bg-white/10 rounded-full mr-3">
                          ID: {String(problem.id).padStart(4, "0")}
                        </span>
                        {problem.category && (
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full">
                            {problem.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedProblem === problem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/10">
                        <div className="mt-6 text-gray-300 leading-relaxed mb-6">
                          {problem.description ||
                            "No description available for this challenge."}
                        </div>

                        {problem.challenges && problem.challenges.length > 0 && (
                          <div className="backdrop-blur-xl bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-6">
                            <h4 className="text-orange-400 font-bold mb-4 flex items-center">
                              <span className="mr-2">⚡</span> KEY CHALLENGES:
                            </h4>
                            <ul className="space-y-3">
                              {problem.challenges.map((challenge, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-gray-300"
                                >
                                  <span className="text-orange-500 mr-3 font-bold">
                                    ▶
                                  </span>
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex justify-end">
                          <button
                            className={`group/btn relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden ${
                              selectedProblem === problem.id && selectionComplete
                                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
                                : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectChallenge(problem.id);
                            }}
                            disabled={selectedProblem === problem.id && selectionComplete}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center">
                              {selectedProblem === problem.id &&
                              selectionComplete ? (
                                <>
                                  <svg
                                    className="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  SELECTED
                                </>
                              ) : (
                                <>
                                  SELECT CHALLENGE
                                  {selectedProblem === problem.id &&
                                    selectionProgress > 0 &&
                                    selectionProgress < 100 && (
                                      <span className="ml-2 text-sm">
                                        ({selectionProgress}%)
                                      </span>
                                    )}
                                </>
                              )}
                            </span>
                          </button>
                        </div>

                        {selectedProblem === problem.id &&
                          selectionProgress > 0 &&
                          selectionProgress < 100 && (
                            <div className="mt-4 bg-white/10 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                                initial={{ width: "0%" }}
                                animate={{ width: `${selectionProgress}%` }}
                                transition={{ duration: 0.1 }}
                              />
                            </div>
                          )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 px-8 py-12 rounded-3xl max-w-md mx-auto">
                <div className="text-4xl mb-4 text-orange-500">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  No Results Found
                </h3>
                <p className="text-gray-400">
                  No challenges match your search criteria. Try adjusting your
                  search terms.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-black/50 border-t border-white/10 text-sm text-gray-400 z-50 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <div>
                SYSTEM:{" "}
                <span className="text-green-400">SECURE</span>
              </div>
              <div>
                CHALLENGES: {filteredProblems.length}/{problemsData.length}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div>ESCALATE_X::v2::2025</div>
              <div className="flex items-center">
                STATUS: <span className="ml-1 text-green-400">OPERATIONAL</span>
                <span className="ml-2 h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <button
                onClick={navigateToHome}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                ← HOME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem_S;
