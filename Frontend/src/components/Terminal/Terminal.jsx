import { useState } from "react";
import { motion } from "framer-motion";
import jokesData from "./jokes.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themes } from "./ThemeSwitcher";

const Terminal = () => {
  const defaultHistory = [{ output: "$ Enter 'help' to get supported commands" }];
  const [hist, setHistory] = useState(defaultHistory);
  const [input, setInput] = useState("");
  const [hacks, setHacking] = useState(false);
  const [randomText, setRandomText] = useState("");
  const [theme, setTheme] = useState(themes.default || { display: { bg: "#000", text: "#fff" }, input: { bg: "#222", text: "#fff" } });

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokesData.jokes.length);
    return jokesData.jokes[randomIndex];
  };

  const generateRandomGlitch = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[];:'<>?,./";
    return Array.from({ length: 800 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
  };

  const handleThemeChange = (themeName) => {
    if (themes[themeName]) {
      setTheme(themes[themeName]);
      setHistory((prev) => [...prev, { output: `$ Switched to ${themeName} theme.` }]);
    } else {
      setHistory((prev) => [...prev, { output: `$ Theme not found: ${themeName}. Available themes: ${Object.keys(themes).join(", ")}` }]);
    }
  };

  const commands = {
    help: [
      "sudo motivate",
      "sudo joke",
      "sudo hack",
      "sudo nmap",
      "sudo whoami",
      "sudo rm -rf /",
      "sudo trace",
      "sudo theme <theme-name> (Change theme)",
      "theme",
      "echo <message>",
      "clear",
    ],
    "sudo motivate": ["Keep pushing forward! Success is near."],
    "sudo nmap": ["Scanning open ports...", "No ports found. You're secure!"],
    "sudo whoami": ["You are an elite hacker! Or at least pretending to be..."],
    "sudo rm -rf /": ["Nice try! But this is a fake terminal 😆"],
    "sudo trace": ["Tracing IP...", "Location: Somewhere in the Matrix."],
    "theme": [`Available themes: ${Object.keys(themes).join(", ")}`],
    clear: [],
  };

  const handleCommand = (cmd) => {
    let output = [];

    if (cmd === "sudo hack") {
      setHacking(true);
      let interval = setInterval(() => setRandomText(generateRandomGlitch()), 200);

      setTimeout(() => {
        clearInterval(interval);
        setHacking(false);
        toast.success("💀 Hacked Successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
          style: {
            background: theme.toast?.bg || "#333",
            color: theme.toast?.text || "#fff",
            border: `1px solid ${theme.toast?.border || "#fff"}`,
            fontFamily: "monospace",
            textAlign: "center",
          },
        });

        setHistory((prev) => [...prev, { output: "$ Your machine is now compromised. Welcome to the dark side!" }]);
      }, 5000);

      return;
    }

    if (cmd === "clear") {
      setHistory(defaultHistory);
      return;
    }

    if (cmd.startsWith("sudo theme ")) {
      const themeName = cmd.split(" ")[2];
      handleThemeChange(themeName);
      return;
    }

    if (cmd.startsWith("echo ")) {
      output = [`$ ${cmd.replace("echo ", "")}`];
    } else if (cmd === "sudo joke") {
      output = [`$ ${getRandomJoke()}`];
    } else {
      output = commands[cmd] ? commands[cmd].map((line) => `$ ${line}`) : [`$ Command not found: ${cmd}`];
    }

    setHistory((prev) => [...prev, { output: output.join("\n") }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen p-4 font-mono border border-gray-700 rounded-lg flex flex-col"
      style={{ backgroundColor: theme.display?.bg || "#000", color: theme.display?.text || "#fff" }}>
      
      <div className="p-2 rounded-md flex-1 overflow-y-auto">
        {hist.map((entry, index) => (
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="whitespace-pre-wrap text-left">{entry.output}</div>
          </motion.div>
        ))}
        {hacks && <div className="pl-4 animate-pulse text-left">$ {randomText}</div>}
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="flex p-2 border border-gray-700 rounded-md"
        style={{ backgroundColor: theme.input?.bg || "#222", color: theme.input?.text || "#fff" }}
      >
        <span>$</span>
        <input
          type="text"
          className="bg-transparent outline-none ml-2 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>

      <ToastContainer />
    </div>
  );
};

export default Terminal;
