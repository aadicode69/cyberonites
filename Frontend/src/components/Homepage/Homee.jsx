import { useState, useEffect, useRef } from 'react';
import { Terminal, Shield, Code, Users, Zap, Award, ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';

export default function Homee() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [terminalLines, setTerminalLines] = useState([]);
  const terminalCommands = [
    'sudo access --grant cybersecurity_training',
    'npm install @cyberonites/advanced-protection',
    'scanning network vulnerabilities...',
    'initializing defense protocols...',
    'welcome to cyberonites.sh'
  ];
  
  const slides = [
    {
      title: 'EMPOWERING STUDENTS',
      subtitle: 'PROTECTING CYBERSPACE',
      description: 'Join the elite force of cybersecurity experts through our advanced training program',
      buttonText: 'INFILTRATE NOW',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'HANDS-ON HACKING LABS',
      subtitle: 'MASTER THE DIGITAL BATTLEFIELD',
      description: 'Access our state-of-the-art virtual environments and learn by doing',
      buttonText: 'ACCESS LABS',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'CYBER COMPETITIONS',
      subtitle: 'PROVE YOUR SKILLS',
      description: 'Participate in CTF challenges, hackathons, and security competitions',
      buttonText: 'JOIN TEAM',
      image: '/api/placeholder/600/400'
    }
  ];

  // Terminal typing effect
  useEffect(() => {
    const terminalInterval = setInterval(() => {
      const randomCommand = terminalCommands[Math.floor(Math.random() * terminalCommands.length)];
      setTerminalLines(prev => [...prev.slice(-4), randomCommand]);
    }, 3000);

    return () => clearInterval(terminalInterval);
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Matrix rain effect in the background
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = 'ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0fa';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    const matrixInterval = setInterval(draw, 33);
    
    return () => clearInterval(matrixInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-black text-green-400 min-h-screen font-mono relative overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20 z-0"></canvas>
      
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="border-b border-green-400/30 px-6 py-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 border-2 border-green-400 flex items-center justify-center rounded-full mr-3">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <h1 className="text-2xl font-bold glitch-text">
                <span className="text-white">CYBER</span>
                <span className="text-green-400">ONITES</span>
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['PROGRAMS', 'TRAINING', 'TOOLS', 'CTF', 'ABOUT'].map((item) => (
                <a key={item} href="#" className="hover:text-white transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            
            <button className="bg-green-400/10 border border-green-400 text-green-400 px-4 py-2 hover:bg-green-400 hover:text-black transition-all duration-300">
              [ ACCESS ]
            </button>
          </div>
        </nav>
        
        {/* Hero Section with Carousel */}
        <div className="relative h-screen max-h-[800px] overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-1000 ease-in-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="mb-2 inline-block px-3 py-1 border border-green-400 text-sm">
                      SYSTEM: OPERATIONAL
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white">
                      {slide.title}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 text-green-400">
                      {slide.subtitle}
                    </h3>
                    <p className="mb-8 text-gray-300 max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex space-x-4">
                      <button className="bg-green-400 text-black px-6 py-3 font-bold hover:bg-white transition-all duration-300 group flex items-center">
                        {slide.buttonText}
                        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="border border-green-400 text-green-400 px-6 py-3 hover:bg-green-400/10 transition-all duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                  <div className="relative hidden md:block">
                    <div className="absolute inset-0 bg-green-400/20 backdrop-blur-sm border border-green-400/50 rounded-lg transform -rotate-3"></div>
                    <img 
                      src={slide.image} 
                      alt="Cybersecurity Training" 
                      className="relative z-10 rounded-lg transform rotate-3 border border-green-400/50 shadow-lg shadow-green-400/20"
                    />
                    <div className="absolute -bottom-4 -right-4 p-3 bg-black border border-green-400 rounded font-mono text-xs">
                      SECURE_CONNECTION_ESTABLISHED
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-green-400 w-10' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>
        </div>
        
        {/* Terminal Section */}
        <div className="bg-black/80 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="terminal-container bg-gray-900 rounded-lg border border-green-400/50 overflow-hidden shadow-lg shadow-green-400/20">
              <div className="terminal-header bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-center w-full text-gray-400">cyberonites@secure-terminal:~</div>
              </div>
              <div className="terminal-body bg-gray-900 p-4 h-64 overflow-y-auto font-mono text-sm">
                <div className="typing-effect">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="mb-2">
                      <span className="text-green-400">root@cyberonites:~$ </span>
                      <span className="text-gray-200">{line}</span>
                      {index === terminalLines.length - 1 && (
                        <span className="animate-pulse ml-1">▋</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">ELITE</span>
                <span className="text-green-400"> TRAINING MODULES</span>
              </h2>
              <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Terminal className="w-10 h-10" />,
                  title: "Command Line Mastery",
                  description: "Master the terminal and command line tools essential for security professionals."
                },
                {
                  icon: <Shield className="w-10 h-10" />,
                  title: "Defense Protocols",
                  description: "Learn advanced defensive techniques to protect systems from sophisticated attacks."
                },
                {
                  icon: <Code className="w-10 h-10" />,
                  title: "Exploit Development",
                  description: "Discover vulnerabilities and develop secure code to prevent exploitation."
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Social Engineering",
                  description: "Understand the human element of security and counter social engineering tactics."
                },
                {
                  icon: <Zap className="w-10 h-10" />,
                  title: "Network Penetration",
                  description: "Learn ethical hacking techniques to identify and address network weaknesses."
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  title: "CTF Competitions",
                  description: "Apply your skills in competitive Capture The Flag security challenges."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="border border-green-400/30 bg-black/60 backdrop-blur-sm p-6 rounded-lg hover:border-green-400 transition-all duration-300 group"
                >
                  <div className="text-green-400 mb-4 bg-green-400/10 inline-block p-3 rounded-lg group-hover:bg-green-400/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <button className="mt-6 flex items-center text-green-400 hover:text-white transition-colors duration-300">
                    <span>Access Module</span>
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="py-16 bg-black border-y border-green-400/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2,500+", label: "ACTIVE MEMBERS" },
                { value: "150+", label: "COMPETITIONS WON" },
                { value: "35+", label: "UNIVERSITIES" },
                { value: "96%", label: "EMPLOYMENT RATE" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-green-400/5 backdrop-blur-sm"></div>
            <div className="grid grid-cols-10 h-full">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="border-r border-green-400/20 h-full"></div>
              ))}
            </div>
            <div className="grid grid-rows-10 w-full h-full absolute top-0">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="border-b border-green-400/20 w-full"></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-white">READY TO</span>
                <span className="text-green-400"> ENTER THE MATRIX?</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join Cyberonites today and begin your journey to becoming an elite cybersecurity expert. 
                Our specialized training, cutting-edge resources, and active community await.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-green-400 text-black px-8 py-4 font-bold hover:bg-white transition-all duration-300 group flex items-center justify-center">
                  INITIATE SEQUENCE
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-green-400 text-green-400 px-8 py-4 hover:bg-green-400/10 transition-all duration-300">
                  SPONSOR OUR MISSION
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-black border-t border-green-400/30 pt-16 pb-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 border-2 border-green-400 flex items-center justify-center rounded-full mr-2">
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">
                    <span className="text-white">CYBER</span>
                    <span className="text-green-400">ONITES</span>
                  </h3>
                </div>
                <p className="text-gray-400 mb-6">
                  A university-based cybersecurity club dedicated to empowering students with 
                  cutting-edge skills to protect the digital frontier.
                </p>
              </div>
              
              {[
                {
                  title: "NAVIGATION",
                  links: ["Home", "Programs", "About", "Events", "Resources", "Contact"]
                },
                {
                  title: "TRAINING",
                  links: ["Beginner Courses", "Advanced Modules", "Certifications", "Workshops", "Labs", "Competitions"]
                },
                {
                  title: "CONNECT",
                  links: ["Join Discord", "GitHub Repo", "Twitter", "LinkedIn", "YouTube", "Blog"]
                }
              ].map((column, index) => (
                <div key={index}>
                  <h3 className="text-white font-bold mb-6 border-b border-green-400/30 pb-2">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center">
                          <span className="text-green-400 mr-2">&gt;</span> {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="border-t border-green-400/20 pt-6 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Cyberonites. All systems monitored. Access granted to authorized personnel only.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}