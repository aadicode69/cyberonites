import React, { useState, useEffect } from "react";
import problemsData from "./problems.json";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBullseye, 
  FaIndustry, 
  FaRobot, 
  FaMobile, 
  FaCloud, 
  FaLink, 
  FaVirus 
} from "react-icons/fa";

const ProblemsEscXv2 = () => {
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProblems, setFilteredProblems] = useState(problemsData);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Enhanced problem categories
  const categories = [
    { id: "all", name: "All Challenges", icon: <FaBullseye />, count: problemsData.length },
    { id: "iiot", name: "IIoT Security", icon: <FaIndustry />, count: 3 },
    { id: "ai", name: "AI/ML Security", icon: <FaRobot />, count: 6 },
    { id: "mobile", name: "Mobile Security", icon: <FaMobile />, count: 2 },
    { id: "cloud", name: "Cloud Security", icon: <FaCloud />, count: 2 },
    { id: "blockchain", name: "Blockchain", icon: <FaLink />, count: 2 },
    { id: "malware", name: "Malware Detection", icon: <FaVirus />, count: 4 },
  ];

  // Enhanced problem formatting
  const formatProblemTitle = (title) => {
    return title
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace(/iiot/gi, 'IIoT')
      .replace(/ai/gi, 'AI')
      .replace(/usb/gi, 'USB');
  };

  const formatDescription = (description) => {
    return description
      .toLowerCase()
      .split('. ')
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ')
      .replace(/iiot/gi, 'IIoT')
      .replace(/ai/gi, 'AI')
      .replace(/aml/gi, 'AML');
  };

  const getCategoryFromProblem = (problem) => {
    const title = problem.title.toLowerCase();
    const description = problem.description.toLowerCase();
    
    if (title.includes('iiot') || description.includes('iiot')) return 'iiot';
    if (title.includes('ai') || title.includes('malware') || description.includes('ai')) return 'ai';
    if (title.includes('mobile') || title.includes('app') || description.includes('mobile')) return 'mobile';
    if (title.includes('cloud') || description.includes('cloud')) return 'cloud';
    if (title.includes('blockchain') || description.includes('blockchain')) return 'blockchain';
    if (title.includes('malware') || title.includes('antivirus') || title.includes('ransomware')) return 'malware';
    return 'other';
  };

  const getDifficultyLevel = (id) => {
    if (id <= 6) return { level: 'Beginner', color: 'bg-green-500', textColor: 'text-green-400' };
    if (id <= 12) return { level: 'Intermediate', color: 'bg-orange-500', textColor: 'text-orange-400' };
    return { level: 'Advanced', color: 'bg-red-500', textColor: 'text-red-400' };
  };

  useEffect(() => {
    let results = problemsData;

    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(problem => getCategoryFromProblem(problem) === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (problem) =>
          formatProblemTitle(problem.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
          formatDescription(problem.description).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProblems(results);
  }, [searchTerm, selectedCategory]);

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
    setSelectedProblem(problemId);
    const selectedChallenge = filteredProblems.find((p) => p.id === problemId);
    setToastMessage(`Challenge "${formatProblemTitle(selectedChallenge.title)}" selected successfully!`);
    setShowToast(true);
  };

  const navigateBack = () => {
    window.location.href = "/escalateXv2";
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Enhanced Background Effects */}
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

      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-5 animate-pulse"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 165, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 165, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-6 right-6 z-50 max-w-sm"
            initial={{ x: 300, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 300, opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="backdrop-blur-xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl shadow-2xl p-4 flex items-center">
              <div className="mr-3 text-orange-400 text-xl">✨</div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 exv2-font-cybero">Success!</h4>
                <p className="text-gray-300 text-sm leading-tight">{toastMessage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 sm:py-10">
        {/* Enhanced Header */}
        <header className="mb-8 sm:mb-16">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-2 bg-orange-500/10 rounded-full mb-4">
              <span className="text-orange-400 text-2xl">🎯</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 exv2-font-cyberjunkies">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PROBLEM
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                STATEMENTS
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mb-8">
              Dive into real-world cybersecurity challenges across multiple domains. 
              Select a problem that matches your expertise and interests.
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 exv2-font-cyberjunkies">{problemsData.length}</div>
                <div className="text-sm text-gray-500">Challenges</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 exv2-font-cyberjunkies">7</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 exv2-font-cyberjunkies">3</div>
                <div className="text-sm text-gray-500">Difficulty Levels</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Search and Filter */}
          <motion.div
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center">
                  <div className="px-4 text-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search challenges by keywords..."
                    className="w-full bg-transparent border-none text-white px-2 py-4 text-base focus:outline-none placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="px-4 text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <nav className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium exv2-font-clouds ${
                    selectedCategory === category.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-base">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    selectedCategory === category.id ? "bg-white/20" : "bg-orange-500/20 text-orange-400"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </nav>
          </motion.div>
        </header>

        {/* Enhanced Problems Grid */}
        <motion.section layout className="space-y-8">
          {filteredProblems.length > 0 ? (
            <div className="grid gap-6">
              {filteredProblems.map((problem, index) => {
                const difficulty = getDifficultyLevel(problem.id);
                const category = getCategoryFromProblem(problem);
                const categoryInfo = categories.find(c => c.id === category) || { icon: "📋", name: "General" };
                
                return (
                  <motion.article
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

                    <div className="p-6 sm:p-8">
                      {/* Problem Header */}
                      <header className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/30 exv2-font-cyberjunkies">
                            {String(problem.id).padStart(2, '0')}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-lg">{categoryInfo.icon}</span>
                              <span className="text-sm text-gray-400">{categoryInfo.name}</span>
                              <div className={`px-2 py-1 text-xs rounded-full ${difficulty.color}/20 ${difficulty.textColor} font-medium`}>
                                {difficulty.level}
                              </div>
                            </div>
                            
                            <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight exv2-font-cyberjunkies">
                              {formatProblemTitle(problem.title)}
                            </h2>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleProblem(problem.id)}
                          className={`flex-shrink-0 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 ${expandedProblem === problem.id ? "rotate-180" : ""}`}
                        >
                          <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </header>

                      {/* Problem Preview */}
                      <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-2">
                        {formatDescription(problem.description).substring(0, 150)}...
                      </p>

                      {/* Quick Actions */}
                      <footer className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-400">
                            {problem.challenges ? problem.challenges.length : 0} key challenges
                          </span>
                        </div>
                        
                        <button
                          onClick={() => handleSelectChallenge(problem.id)}
                          className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 exv2-font-clouds ${
                            selectedProblem === problem.id
                              ? "bg-green-500 text-white"
                              : "bg-orange-500 hover:bg-orange-600 text-white"
                          }`}
                        >
                          {selectedProblem === problem.id ? "✓ Selected" : "Select"}
                        </button>
                      </footer>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedProblem === problem.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-white/10">
                              <div className="prose prose-invert max-w-none">
                                <h3 className="text-orange-400 font-bold text-lg mb-3 exv2-font-clouds">Problem Description</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                  {formatDescription(problem.description)}
                                </p>

                                {problem.challenges && problem.challenges.length > 0 && (
                                  <div className="backdrop-blur-xl bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6">
                                    <h4 className="text-orange-400 font-bold text-lg mb-4 flex items-center exv2-font-clouds">
                                      <span className="mr-2">🎯</span> Key Challenges
                                    </h4>
                                    <ul className="grid gap-3">
                                      {problem.challenges.map((challenge, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 p-3 bg-white/5 rounded-xl">
                                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center mt-0.5 exv2-font-cyberjunkies">
                                            {idx + 1}
                                          </span>
                                          <span className="text-gray-300 leading-relaxed">
                                            {challenge.charAt(0).toUpperCase() + challenge.slice(1).toLowerCase()}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/20 px-8 py-12 rounded-3xl max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2 exv2-font-clouds">No Results Found</h3>
                <p className="text-gray-400 mb-4">
                  No challenges match your search criteria. Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-300 exv2-font-clouds"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </motion.section>
      </main>

      {/* Enhanced Footer */}
      <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-black/80 border-t border-white/10 text-sm text-gray-400 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>SYSTEM: <span className="text-green-400">OPERATIONAL</span></span>
              </div>
              <div>SHOWING: {filteredProblems.length} / {problemsData.length} challenges</div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="exv2-font-cyberjunkies">ESCALATE_X::v2::2025</div>
              <button
                onClick={navigateBack}
                className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 exv2-font-clouds"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProblemsEscXv2;
