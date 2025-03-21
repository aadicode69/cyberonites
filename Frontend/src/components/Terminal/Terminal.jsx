// import { useState } from "react";
// import { motion } from "framer-motion";
// import jokesData from "./jokes.json";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { themes } from "./ThemeSwitcher";

// const Terminal = () => {
//   const defaultHistory = [{ output: "$ Enter 'help' to get supported commands" }];
//   const [hist, setHistory] = useState(defaultHistory);
//   const [input, setInput] = useState("");
//   const [hacks, setHacking] = useState(false);
//   const [randomText, setRandomText] = useState("");
//   const [theme, setTheme] = useState(themes.default || { display: { bg: "#000", text: "#fff" }, input: { bg: "#222", text: "#fff" } });

//   const getRandomJoke = () => {
//     const randomIndex = Math.floor(Math.random() * jokesData.jokes.length);
//     return jokesData.jokes[randomIndex];
//   };

//   const generateRandomGlitch = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[];:'<>?,./";
//     return Array.from({ length: 800 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
//   };

//   const handleThemeChange = (themeName) => {
//     if (themes[themeName]) {
//       setTheme(themes[themeName]);
//       setHistory((prev) => [...prev, { output: `$ Switched to ${themeName} theme.` }]);
//     } else {
//       setHistory((prev) => [...prev, { output: `$ Theme not found: ${themeName}. Available themes: ${Object.keys(themes).join(", ")}` }]);
//     }
//   };

//   const commands = {
//     help: [
//       "sudo motivate",
//       "sudo joke",
//       "sudo hack",
//       "sudo nmap",
//       "sudo whoami",
//       "sudo rm -rf /",
//       "sudo trace",
//       "sudo theme <theme-name> (Change theme)",
//       "theme",
//       "echo <message>",
//       "clear",
//     ],
//     "sudo motivate": ["Keep pushing forward! Success is near."],
//     "sudo nmap": ["Scanning open ports...", "No ports found. You're secure!"],
//     "sudo whoami": ["You are an elite hacker! Or at least pretending to be..."],
//     "sudo rm -rf /": ["Nice try! But this is a fake terminal 😆"],
//     "sudo trace": ["Tracing IP...", "Location: Somewhere in the Matrix."],
//     "theme": [`Available themes: ${Object.keys(themes).join(", ")}`],
//     clear: [],
//   };

//   const handleCommand = (cmd) => {
//     let output = [];

//     if (cmd === "sudo hack") {
//       setHacking(true);
//       let interval = setInterval(() => setRandomText(generateRandomGlitch()), 200);

//       setTimeout(() => {
//         clearInterval(interval);
//         setHacking(false);
//         toast.success("💀 Hacked Successfully!", {
//           position: "bottom-right",
//           autoClose: 3000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: false,
//           draggable: true,
//           theme: "dark",
//           style: {
//             background: theme.toast?.bg || "#333",
//             color: theme.toast?.text || "#fff",
//             border: `1px solid ${theme.toast?.border || "#fff"}`,
//             fontFamily: "monospace",
//             textAlign: "center",
//           },
//         });

//         setHistory((prev) => [...prev, { output: "$ Your machine is now compromised. Welcome to the dark side!" }]);
//       }, 5000);

//       return;
//     }

//     if (cmd === "clear") {
//       setHistory(defaultHistory);
//       return;
//     }

//     if (cmd.startsWith("sudo theme ")) {
//       const themeName = cmd.split(" ")[2];
//       handleThemeChange(themeName);
//       return;
//     }

//     if (cmd.startsWith("echo ")) {
//       output = [`$ ${cmd.replace("echo ", "")}`];
//     } else if (cmd === "sudo joke") {
//       output = [`$ ${getRandomJoke()}`];
//     } else {
//       output = commands[cmd] ? commands[cmd].map((line) => `$ ${line}`) : [`$ Command not found: ${cmd}`];
//     }

//     setHistory((prev) => [...prev, { output: output.join("\n") }]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       handleCommand(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="w-full h-screen p-4 font-mono border border-gray-700 rounded-lg flex flex-col"
//       style={{ backgroundColor: theme.display?.bg || "#000", color: theme.display?.text || "#fff" }}>

//       <div className="p-2 rounded-md flex-1 overflow-y-auto">
//         {hist.map((entry, index) => (
//           <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <div className="whitespace-pre-wrap text-left">{entry.output}</div>
//           </motion.div>
//         ))}
//         {hacks && <div className="pl-4 animate-pulse text-left">$ {randomText}</div>}
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="flex p-2 border border-gray-700 rounded-md"
//         style={{ backgroundColor: theme.input?.bg || "#222", color: theme.input?.text || "#fff" }}
//       >
//         <span>$</span>
//         <input
//           type="text"
//           className="bg-transparent outline-none ml-2 w-full"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           autoFocus
//         />
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Terminal;



// import React, { useState, useRef, useEffect } from 'react';

// const Terminal = () => {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState([]);
//   const [theme, setTheme] = useState('dark');
//   const [commandHistory, setCommandHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const inputRef = useRef(null);
//   const terminalRef = useRef(null);

//   const username = 'student';
//   const hostname = 'linux-playground';
//   const currentDirectory = '~';

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//     inputRef.current?.focus();
//   }, [history]);

//   const handleClick = () => {
//     inputRef.current?.focus();
//   };

//   const addToHistory = (command, output) => {
//     setHistory(prev => [...prev,
//       { type: 'command', content: `${username}@${hostname}:${currentDirectory}$ ${command}` },
//       ...(output ? [{ type: 'output', content: output }] : [])
//     ]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const command = input.trim();

//     if (command) {
//       // Add to command history for up/down arrow navigation
//       setCommandHistory(prev => [command, ...prev].slice(0, 50));
//       setHistoryIndex(-1);

//       // Process the command
//       processCommand(command);
//       setInput('');
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (commandHistory.length > 0) {
//         const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[newIndex]);
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[newIndex]);
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setInput('');
//       }
//     } else if (e.key === 'Tab') {
//       e.preventDefault();
//       // Simple tab completion
//       const commands = [
//         'ls', 'cd', 'pwd', 'echo', 'cat', 'touch', 'mkdir', 'rm', 'hack',
//         'motivate', 'joke', 'whoami', 'clear', 'trace', 'theme', 'help'
//       ];

//       const match = commands.find(cmd => cmd.startsWith(input));
//       if (match) {
//         setInput(match + ' ');
//       }
//     }
//   };

//   const processCommand = (command) => {
//     const parts = command.split(' ');
//     const cmd = parts[0].toLowerCase();
//     const args = parts.slice(1);

//     switch (cmd) {
//       case 'clear':
//         setHistory([]);
//         break;

//       case 'ls':
//         addToHistory(command, 'Documents  Downloads  Pictures  projects.txt  script.sh');
//         break;

//       case 'pwd':
//         addToHistory(command, '/home/student');
//         break;

//       case 'cd':
//         addToHistory(command, args.length ? `Changed directory to ${args[0]}` : 'Changed directory to ~');
//         break;

//       case 'echo':
//         addToHistory(command, args.join(' '));
//         break;

//       case 'cat':
//         if (args[0] === 'projects.txt') {
//           addToHistory(command, 'My Linux Projects:\n1. Create a shell script\n2. Learn vim basics\n3. Set up a LAMP server');
//         } else {
//           addToHistory(command, `cat: ${args[0]}: No such file or directory`);
//         }
//         break;

//       case 'touch':
//         addToHistory(command, args.length ? `Created file ${args[0]}` : 'touch: missing file operand');
//         break;

//       case 'mkdir':
//         addToHistory(command, args.length ? `Created directory ${args[0]}` : 'mkdir: missing operand');
//         break;

//       case 'rm':
//         addToHistory(command, args.length ? `Removed ${args[0]}` : 'rm: missing operand');
//         break;

//       case 'hack':
//         const hackOutput = [
//           'Initializing hack sequence...',
//           'Scanning network... found 3 devices',
//           'Exploiting vulnerabilities...',
//           'Bypassing firewall...',
//           'Access granted! You\'re in the mainframe!',
//           '(Note: This is just a simulation. Real hacking is illegal and unethical unless authorized.)'
//         ].join('\n');
//         addToHistory(command, hackOutput);
//         break;

//       case 'theme':
//         if (args.length && ['dark', 'light', 'matrix', 'retro'].includes(args[0])) {
//           setTheme(args[0]);
//           addToHistory(command, `Theme changed to ${args[0]}`);
//         } else {
//           addToHistory(command, 'Available themes: dark, light, matrix, retro');
//         }
//         break;

//       case 'motivate':
//         const motivations = [
//           'The only way to learn a new programming language is by writing programs in it.',
//           'The best error message is the one that never shows up.',
//           'First, solve the problem. Then, write the code.',
//           'The expert at anything was once a beginner.',
//           'The best way to predict the future is to create it.'
//         ];
//         addToHistory(command, motivations[Math.floor(Math.random() * motivations.length)]);
//         break;

//       case 'joke':
//         const jokes = [
//           'Why do programmers prefer dark mode? Because light attracts bugs!',
//           'Why did the programmer quit his job? Because he didn\'t get arrays!',
//           'A SQL query walks into a bar, walks up to two tables and asks, "Can I join you?"',
//           'Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!',
//           'How many programmers does it take to change a light bulb? None, that\'s a hardware problem.'
//         ];
//         addToHistory(command, jokes[Math.floor(Math.random() * jokes.length)]);
//         break;

//       case 'whoami':
//         addToHistory(command, username);
//         break;

//       case 'trace':
//         const traceOutput = [
//           'Tracing route to example.com [93.184.216.34]',
//           'over a maximum of 30 hops:',
//           '',
//           '  1    <1 ms    <1 ms    <1 ms  router.local [192.168.1.1]',
//           '  2     7 ms     6 ms     7 ms  isp-gateway.net [10.0.0.1]',
//           '  3    15 ms    14 ms    15 ms  core1.isp.net [203.0.113.1]',
//           '  4    22 ms    21 ms    22 ms  core2.isp.net [203.0.113.2]',
//           '  5    30 ms    28 ms    29 ms  example-cdn.com [198.51.100.1]',
//           '  6    35 ms    36 ms    35 ms  example.com [93.184.216.34]',
//           '',
//           'Trace complete.'
//         ].join('\n');
//         addToHistory(command, traceOutput);
//         break;

//       case 'help':
//         const helpOutput = [
//           'Available commands:',
//           '  ls              List directory contents',
//           '  cd [dir]        Change directory',
//           '  pwd             Print working directory',
//           '  echo [text]     Display text',
//           '  cat [file]      Display file contents',
//           '  touch [file]    Create a file',
//           '  mkdir [dir]     Create a directory',
//           '  rm [file]       Remove a file',
//           '  hack            Simulate a hacking sequence',
//           '  theme [name]    Change terminal theme (dark, light, matrix, retro)',
//           '  motivate        Display a motivational quote',
//           '  joke            Tell a programming joke',
//           '  whoami          Display current user',
//           '  trace           Simulate a network trace',
//           '  clear           Clear the terminal',
//           '  help            Display this help message'
//         ].join('\n');
//         addToHistory(command, helpOutput);
//         break;

//       default:
//         addToHistory(command, `${cmd}: command not found`);
//     }
//   };

//   // Theme styles
//   const themeStyles = {
//     dark: {
//       bg: 'bg-gray-900',
//       text: 'text-gray-100',
//       prompt: 'text-green-400',
//       input: 'bg-gray-900 text-gray-100',
//     },
//     light: {
//       bg: 'bg-gray-100',
//       text: 'text-gray-900',
//       prompt: 'text-blue-600',
//       input: 'bg-gray-100 text-gray-900',
//     },
//     matrix: {
//       bg: 'bg-black',
//       text: 'text-green-500',
//       prompt: 'text-green-300',
//       input: 'bg-black text-green-400',
//     },
//     retro: {
//       bg: 'bg-blue-900',
//       text: 'text-amber-400',
//       prompt: 'text-amber-300',
//       input: 'bg-blue-900 text-amber-400',
//     }
//   };

//   const currentTheme = themeStyles[theme];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
//       <div className={`w-full max-w-3xl rounded-lg overflow-hidden shadow-xl border border-gray-700 ${currentTheme.bg}`}>
//         <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
//           <div className="flex space-x-2">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           </div>
//           <div className="mx-auto text-sm font-semibold text-gray-300">
//             {username}@{hostname}: {currentDirectory}
//           </div>
//         </div>

//         {/* Terminal content */}
//         <div
//           ref={terminalRef}
//           className={`p-4 h-96 overflow-y-auto font-mono ${currentTheme.text}`}
//           onClick={handleClick}
//         >
//           {/* Welcome message */}
//           {history.length === 0 && (
//             <div className="mb-4">
//               <p className="font-bold">Welcome to Linux Terminal Playground!</p>
//               <p>Type 'help' to see available commands.</p>
//             </div>
//           )}

//           {/* Command history */}
//           {history.map((item, index) => (
//             <div key={index} className="mb-1">
//               {item.type === 'command' ? (
//                 <div>
//                   <span className={currentTheme.prompt}>{item.content.split('$')[0]}$</span>
//                   <span> {item.content.split('$')[1]}</span>
//                 </div>
//               ) : (
//                 <div className="whitespace-pre-wrap pl-4">{item.content}</div>
//               )}
//             </div>
//           ))}

//           {/* Current input */}
//           <form onSubmit={handleSubmit} className="flex">
//             <span className={currentTheme.prompt}>
//               {username}@{hostname}:{currentDirectory}$
//             </span>
//             <input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               className={`flex-grow ml-2 outline-none ${currentTheme.input}`}
//               spellCheck="false"
//               autoComplete="off"
//             />
//           </form>
//         </div>
//       </div>

//       {/* Info panel */}
//       <div className="mt-4 text-sm text-gray-600 max-w-3xl">
//         <p>Tab for auto-completion • Up/Down arrows for command history</p>
//         <p>Try typing 'help' to see all available commands</p>
//       </div>
//     </div>
//   );
// };

// export default Terminal;




















import React, { useState, useRef, useEffect } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [animatingOutput, setAnimatingOutput] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const username = "student";
  const hostname = "linux-playground";
  const currentDirectory = "~";

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const animateOutput = (output, speed = 10) => {
    setAnimatingOutput(true);

    if (currentAnimation) {
      clearInterval(currentAnimation);
    }

    const lines = typeof output === "string" ? output.split("\n") : [output];
    const animatedHistory = [];
    let lineIndex = 0;
    let charIndex = 0;

    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        content: `${username}@${hostname}:${currentDirectory}$ ${input}`,
      },
    ]);

    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (!animatedHistory[lineIndex]) {
          animatedHistory[lineIndex] = "";
        }

        if (charIndex <= currentLine.length) {
          animatedHistory[lineIndex] = currentLine.substring(0, charIndex);
          charIndex++;

          setHistory((prev) => {
            const newHistory = [...prev];
            newHistory.pop(); 
            return [
              ...newHistory,
              { type: "output", content: animatedHistory.join("\n") },
            ];
          });
        } else {
          charIndex = 0;
          lineIndex++;
        }
      } else {
        clearInterval(interval);
        setAnimatingOutput(false);
        setCurrentAnimation(null);
      }
    }, speed);

    setCurrentAnimation(interval);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  };

  const addToHistory = (command, output) => {
    if (output) {
      animateOutput(output);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "command",
          content: `${username}@${hostname}:${currentDirectory}$ ${command}`,
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const command = input.trim();

    if (command) {
      setCommandHistory((prev) => [command, ...prev].slice(0, 50));
      setHistoryIndex(-1);
      processCommand(command);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "ls",
        "cd",
        "pwd",
        "echo",
        "hack",
        "motivate",
        "joke",
        "whoami",
        "clear",
        "trace",
        "theme",
        "help",
        "weather",
        "scan",
        "crypto",
        "starwars",
        "matrix",
      ];

      const match = commands.find((cmd) => cmd.startsWith(input));
      if (match) {
        setInput(match + " ");
      }
    }
  };

  const processCommand = (command) => {
    const parts = command.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (cmd) {
      case "clear":
        setHistory([]);
        break;

      case "ls":
        addToHistory(
          command,
          "Documents  Downloads  Pictures  projects.txt  script.sh"
        );
        break;

      case "pwd":
        addToHistory(command, "/home/student");
        break;

      case "cd":
        addToHistory(
          command,
          args.length
            ? `Changed directory to ${args[0]}`
            : "Changed directory to ~"
        );
        break;

      case "echo":
        addToHistory(command, args.join(" "));
        break;

      case "hack":
        const hackOutput = [
          "Initializing hack sequence...",
          "Scanning network... found 3 devices",
          "Exploiting vulnerabilities...",
          "Bypassing firewall...",
          "Decrypting secure channels...",
          "Deploying rootkit...",
          "Establishing persistence...",
          "Access granted! You're in the mainframe!",
          "(Note: This is just a simulation. Real hacking is illegal and unethical unless authorized.)",
        ].join("\n");
        addToHistory(command, hackOutput);
        break;

      case "theme":
        if (
          args.length &&
          ["dark", "light", "matrix", "retro", "neon", "sunset"].includes(
            args[0]
          )
        ) {
          setTheme(args[0]);
          addToHistory(command, `Theme changed to ${args[0]}`);
        } else {
          addToHistory(
            command,
            "Available themes: dark, light, matrix, retro, neon, sunset"
          );
        }
        break;

      case "motivate":
        const motivations = [
          "The only way to learn a new programming language is by writing programs in it.",
          "The best error message is the one that never shows up.",
          "First, solve the problem. Then, write the code.",
          "The expert at anything was once a beginner.",
          "The best way to predict the future is to create it.",
          "Code is like humor. When you have to explain it, it's bad.",
          "Simplicity is the soul of efficiency.",
          "Make it work, make it right, make it fast.",
        ];
        addToHistory(
          command,
          motivations[Math.floor(Math.random() * motivations.length)]
        );
        break;

      case "joke":
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs!",
          "Why did the programmer quit his job? Because he didn't get arrays!",
          'A SQL query walks into a bar, walks up to two tables and asks, "Can I join you?"',
          "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
          "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
          "There are 10 types of people in this world: those who understand binary and those who don't.",
          'Why was the JavaScript developer sad? Because he didn\'t know how to "null" his feelings.',
          "What's a pirate's favorite programming language? R!",
        ];
        addToHistory(command, jokes[Math.floor(Math.random() * jokes.length)]);
        break;

      case "whoami":
        addToHistory(command, username);
        break;

      case "trace":
        const traceOutput = [
          "Tracing route to example.com [93.184.216.34]",
          "over a maximum of 30 hops:",
          "",
          "  1    <1 ms    <1 ms    <1 ms  router.local [192.168.1.1]",
          "  2     7 ms     6 ms     7 ms  isp-gateway.net [10.0.0.1]",
          "  3    15 ms    14 ms    15 ms  core1.isp.net [203.0.113.1]",
          "  4    22 ms    21 ms    22 ms  core2.isp.net [203.0.113.2]",
          "  5    30 ms    28 ms    29 ms  example-cdn.com [198.51.100.1]",
          "  6    35 ms    36 ms    35 ms  example.com [93.184.216.34]",
          "",
          "Trace complete.",
        ].join("\n");
        addToHistory(command, traceOutput);
        break;

      case "weather":
        const cities = args.length ? args[0] : "New York";
        const weatherOutput = [
          `Weather for ${cities}:`,
          "------------------------",
          "Temperature: 72°F / 22°C",
          "Condition: Partly Cloudy",
          "Humidity: 45%",
          "Wind: 8 mph NE",
          "Forecast: Sunny conditions expected tomorrow with a high of 78°F.",
          "",
          "(This is simulated weather data for educational purposes)",
        ].join("\n");
        addToHistory(command, weatherOutput);
        break;

      case "scan":
        const scanOutput = [
          "Initiating system scan...",
          "Checking CPU usage: 32%",
          "Checking memory usage: 4.2GB / 16GB",
          "Checking disk space: 234GB free of 512GB",
          "Checking network interfaces: eth0, wlan0",
          "Checking active connections: 7 established",
          "Checking running processes: 142 processes",
          "Checking system load: 1.23, 1.15, 0.89 (1, 5, 15 min)",
          "Scanning for vulnerabilities...",
          "No critical vulnerabilities found.",
          "System scan complete.",
        ].join("\n");
        addToHistory(command, scanOutput);
        break;

      case "crypto":
        const cryptoOutput = [
          "Cryptocurrency Price Simulator",
          "----------------------------",
          "BTC: $53,245.67  (↑2.3%)",
          "ETH: $2,891.42   (↓0.7%)",
          "SOL: $129.85     (↑5.2%)",
          "ADA: $0.58       (↑1.1%)",
          "DOT: $7.45       (↓0.9%)",
          "",
          "Market Cap: $1.95T",
          "24h Volume: $87.3B",
          "",
          "(This is simulated data for educational purposes)",
        ].join("\n");
        addToHistory(command, cryptoOutput);
        break;

      case "starwars":
        const starwarsOutput = [
          "                       .-.                          ",
          "                      |_:_|                         ",
          "                     /(_Y_)\\                        ",
          "                    ( \\/M\\/ )                       ",
          ".'               _.'-.'''-.'._                     ",
          "|:'            _/.''     ''.\\._                    ",
          "|:'           /.'           '.\\                    ",
          "|:'          |               |                     ",
          "|:'          |      STAR     |                     ",
          "|:'          |      WARS     |                     ",
          "|:'          |               |                     ",
          "|:'          \\             /                       ",
          "|:'           \\._       _./                        ",
          "|:'             '-'-'-''                           ",
          "                                                   ",
          "May the Force be with you!                         ",
        ].join("\n");
        addToHistory(command, starwarsOutput);
        break;

      case "matrix":
        let matrixLines = [];
        const characters =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*(){}[]|;:,.<>?/~`";
        for (let i = 0; i < 15; i++) {
          let line = "";
          for (let j = 0; j < 50; j++) {
            line += characters.charAt(
              Math.floor(Math.random() * characters.length)
            );
          }
          matrixLines.push(line);
        }
        matrixLines.push("");
        matrixLines.push("Wake up, Neo...");
        matrixLines.push("The Matrix has you...");
        addToHistory(command, matrixLines.join("\n"));
        break;

      case "help":
        const helpOutput = [
          "Available commands:",
          "  ls              List directory contents",
          "  cd [dir]        Change directory",
          "  pwd             Print working directory",
          "  echo [text]     Display text",
          "  hack            Simulate a hacking sequence",
          "  weather [city]  Show weather information",
          "  scan            Scan system resources",
          "  crypto          Display cryptocurrency prices",
          "  starwars        Show Star Wars ASCII art",
          "  matrix          Enter the Matrix",
          "  theme [name]    Change terminal theme (dark, light, matrix, retro, neon, sunset)",
          "  motivate        Display a motivational quote",
          "  joke            Tell a programming joke",
          "  whoami          Display current user",
          "  trace           Simulate a network trace",
          "  clear           Clear the terminal",
          "  help            Display this help message",
        ].join("\n");
        addToHistory(command, helpOutput);
        break;

      default:
        addToHistory(command, `${cmd}: command not found`);
    }
  };

  const themeStyles = {
    dark: {
      bg: "bg-gray-900",
      text: "text-gray-100",
      prompt: "text-green-400",
      input: "bg-gray-900 text-gray-100",
    },
    light: {
      bg: "bg-gray-100",
      text: "text-gray-900",
      prompt: "text-blue-600",
      input: "bg-gray-100 text-gray-900",
    },
    matrix: {
      bg: "bg-black",
      text: "text-green-500",
      prompt: "text-green-300",
      input: "bg-black text-green-400",
    },
    retro: {
      bg: "bg-blue-900",
      text: "text-amber-400",
      prompt: "text-amber-300",
      input: "bg-blue-900 text-amber-400",
    },
    neon: {
      bg: "bg-purple-900",
      text: "text-pink-300",
      prompt: "text-cyan-400",
      input: "bg-purple-900 text-pink-300",
    },
    sunset: {
      bg: "bg-gray-800",
      text: "text-orange-300",
      prompt: "text-yellow-400",
      input: "bg-gray-800 text-orange-300",
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div
        className={`w-full max-w-4xl rounded-lg overflow-hidden shadow-xl border border-gray-700 ${currentTheme.bg}`}
      >
        <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mx-auto text-sm font-semibold text-gray-300">
            {username}@{hostname}: {currentDirectory}
          </div>
        </div>

        <div
          ref={terminalRef}
          className={`p-4 overflow-y-auto font-mono ${currentTheme.text}`}
          onClick={handleClick}
          style={{ height: "500px" }}
        >
          {history.length === 0 && (
            <div className="mb-4">
              <p className="font-bold">Welcome to Linux Terminal Playground!</p>
              <p>Type 'help' to see available commands.</p>
            </div>
          )}

          {history.map((item, index) => (
            <div key={index} className="mb-1">
              {item.type === "command" ? (
                <div>
                  <span className={currentTheme.prompt}>
                    {item.content.split("$")[0]}$
                  </span>
                  <span> {item.content.split("$")[1]}</span>
                </div>
              ) : (
                <div className="whitespace-pre-wrap pl-4">{item.content}</div>
              )}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex">
            <span className={currentTheme.prompt}>
              {username}@{hostname}:{currentDirectory}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`flex-grow ml-2 outline-none ${currentTheme.input}`}
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 max-w-4xl">
        <p>Tab for auto-completion • Up/Down arrows for command history</p>
        <p>Try typing 'help' to see all available commands</p>
        <p>Type 'theme' to see available themes</p>
      </div>
    </div>
  );
};

export default Terminal;
