import React, { useState, useEffect } from "react";
import problemsData from "./problems.json";
import { motion, AnimatePresence } from "framer-motion";

const Problem_S = () => {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProblems, setFilteredProblems] = useState(problemsData);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectionProgress, setSelectionProgress] = useState(0);
  const [selectionComplete, setSelectionComplete] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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

    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, Math.random() * 10000 + 5000);

    return () => clearInterval(glitchInterval);
  }, [searchTerm]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const toggleProblem = (id) => {
    setExpandedProblem(expandedProblem === id ? null : id);
  };

  const handleSelectChallenge = (problemId) => {
    if (selectedProblem !== problemId) {
      setSelectionComplete(false);
      setSelectionProgress(0);
      const selectedChallenge = filteredProblems.find(
        (p) => p.id === problemId
      );
      setToastMessage(
        `INITIALIZING: Challenge ${String(problemId).padStart(4, "0")} - ${
          selectedChallenge.title || "Unknown"
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
        const selectedChallenge = filteredProblems.find(
          (p) => p.id === problemId
        );
        setToastMessage(
          `ACCESS GRANTED: Challenge ${String(problemId).padStart(
            4,
            "0"
          )} loaded successfully`
        );
        setShowToast(true);
      }
    }, 70);
  };

  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono overflow-hidden pb-16">
      {glitchEffect && (
        <div className="absolute inset-0 bg-green-500/10 z-20 pointer-events-none"></div>
      )}

      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-6 right-6 z-50 max-w-md"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-gray-900 border-l-4 border-green-500 shadow-lg p-4 flex items-start">
              <div className="mr-3 text-green-500 mt-0.5">
                {selectionComplete ? "✓" : "!"}
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <h4 className="text-green-400 font-bold text-sm">
                    {selectionComplete
                      ? "SYSTEM NOTIFICATION"
                      : "SYSTEM PROCESSING"}
                  </h4>
                </div>
                <p className="text-green-300 text-sm font-mono">
                  {toastMessage}
                </p>
                <div className="mt-2 h-1 w-full bg-green-900/50 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
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

      <motion.div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"
        initial={{ top: "-5%" }}
        animate={{ top: "105%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <header className="mb-6 sm:mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-2 glitch-text">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                [INTRUSION<span className="text-4xl sm:text-7xl">X</span>]
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <div className="h-px w-8 sm:w-16 bg-cyan-600"></div>
              <h2 className="text-sm sm:text-xl text-cyan-400 tracking-widest">
                PROBLEM STATEMENTS
              </h2>
              <div className="h-px w-8 sm:w-16 bg-cyan-600"></div>
            </div>
            <p className="max-w-2xl mx-auto text-green-300 opacity-80 text-sm sm:text-base px-2">
              Decrypt. Exploit. Hack. Prove your elite skills in these
              cybersecurity challenges.
            </p>
          </motion.div>

          <motion.div
            className="mt-6 max-w-xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center bg-gray-900 border border-green-800 rounded overflow-hidden">
              <div className="px-2 sm:px-3 text-green-500 select-none">$</div>
              <input
                type="text"
                placeholder="search challenges..."
                className="w-full bg-transparent border-none text-green-300 px-2 py-2 sm:py-3 text-sm sm:text-base focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="px-2 sm:px-3 text-green-500 animate-pulse">_</div>
            </div>
          </motion.div>
        </header>

        <motion.div layout className="grid grid-cols-1 gap-3 sm:gap-4">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`border-l-4 ${
                  expandedProblem === problem.id
                    ? "border-green-500"
                    : "border-cyan-800"
                } bg-gradient-to-r from-gray-900/80 to-black/90 shadow-lg`}
              >
                <div
                  className="p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer group"
                  onClick={() => toggleProblem(problem.id)}
                >
                  <div className="flex items-center w-full sm:w-auto">
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                        expandedProblem === problem.id
                          ? "bg-green-500"
                          : "bg-cyan-700"
                      } mr-2 sm:mr-3 animate-pulse`}
                    ></div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-xl font-bold text-cyan-300 group-hover:text-green-300 transition-colors pr-6 sm:pr-0">
                        {problem.title || `Challenge #${problem.id}`}
                      </h3>
                      <div className="mt-1 text-xs text-gray-500 flex items-center justify-between sm:justify-start">
                        <span>ID: {String(problem.id).padStart(4, "0")}</span>
                        {problem.category && (
                          <span className="ml-0 sm:ml-3 text-xs bg-cyan-900/30 text-cyan-400 px-2 py-0.5 rounded">
                            {problem.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 sm:relative sm:top-auto sm:right-auto flex items-center mt-0 sm:mt-0">
                    <div
                      className={`transition-transform duration-300 transform ${
                        expandedProblem === problem.id ? "rotate-180" : ""
                      } text-cyan-500`}
                    >
                      ▼
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
                      <div className="p-3 sm:p-5 bg-black/50 border-t border-cyan-900/50">
                        <div className="terminal-text text-green-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                          {problem.description ||
                            "No description available for this challenge."}
                        </div>

                        {problem.challenges &&
                          problem.challenges.length > 0 && (
                            <div className="mt-4 sm:mt-5 bg-green-900/10 border border-green-900/30 p-3 sm:p-4 rounded">
                              <h4 className="text-sm sm:text-base text-green-400 mb-2 sm:mb-3 font-bold flex items-center">
                                <span className="mr-2">[!]</span> CHALLENGES:
                              </h4>
                              <ul className="space-y-1 sm:space-y-2 text-sm">
                                {problem.challenges.map((req, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-green-200"
                                  >
                                    <span className="text-green-500 mr-2 font-mono">
                                      ▶
                                    </span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                        <div className="mt-4 sm:mt-6 flex justify-end">
                          <button
                            className={`px-3 sm:px-5 py-1.5 sm:py-2 ${
                              selectedProblem === problem.id &&
                              selectionComplete
                                ? "bg-green-500 hover:bg-green-500"
                                : "bg-green-700 hover:bg-green-600"
                            } text-black text-sm sm:text-base font-bold rounded-sm transition-colors flex items-center`}
                            onClick={() => handleSelectChallenge(problem.id)}
                            disabled={
                              selectedProblem === problem.id &&
                              selectionComplete
                            }
                          >
                            <span className="mr-1 sm:mr-2">
                              {selectedProblem === problem.id &&
                              selectionComplete
                                ? "SELECTED"
                                : "SELECT_CHALLENGE"}
                            </span>
                            {selectedProblem === problem.id &&
                              selectionProgress > 0 &&
                              selectionProgress < 100 && (
                                <span className="text-xs sm:text-sm text-green-400">
                                  {selectionProgress}%
                                </span>
                              )}
                          </button>
                        </div>

                        {selectedProblem === problem.id &&
                          selectionProgress > 0 &&
                          selectionProgress < 100 && (
                            <div className="mt-3 bg-green-900/30 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className="h-full bg-green-500"
                                initial={{ width: "0%" }}
                                animate={{ width: `${selectionProgress}%` }}
                                transition={{ duration: 0.15 }}
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
              className="text-center py-8 sm:py-12"
            >
              <div className="inline-block border-2 border-cyan-800 px-6 sm:px-8 py-4 sm:py-6 rounded-md bg-black/50">
                <div className="text-2xl sm:text-4xl mb-3 sm:mb-4 text-red-500">
                  [ NO_MATCH ]
                </div>
                <p className="text-cyan-400 text-sm sm:text-base">
                  Query returned zero results. Adjust search parameters.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-green-900 text-xs sm:text-md text-green-500 z-50 py-2 sm:py-4">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="sm:hidden">
            <div className="flex justify-between items-center mb-1">
              <div>SYSTEM: SECURE</div>
              <div className="flex items-center">
                STATUS: <span className="ml-1 text-green-400">OPERATIONAL</span>
                <span className="ml-1 h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                CHALLENGES: {filteredProblems.length}/{problemsData.length}
              </div>
              <button
                onClick={navigateToHome}
                className="px-2 py-1 bg-green-600 hover:bg-green-700 font-semibold text-black rounded-sm transition-colors flex items-center text-xs"
              >
                <span>RETURN_HOME</span>
              </button>
            </div>
          </div>
          <div className="hidden sm:flex justify-between items-center">
            <div>SYSTEM: SECURE</div>
            <div>
              CHALLENGES: {filteredProblems.length}/{problemsData.length}
            </div>
            <div>INTRUSION_X::2025</div>
            <div className="flex items-center">
              STATUS: <span className="ml-1 text-green-400">OPERATIONAL</span>
              <span className="ml-1 h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <button
              onClick={navigateToHome}
              className="ml-4 px-3 py-1 bg-green-600 hover:bg-green-700 font-semibold text-black rounded-sm transition-colors flex items-center text-sm"
            >
              <span className="mr-1">RETURN_HOME</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem_S;
