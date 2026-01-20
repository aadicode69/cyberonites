import React, { useState, useEffect, useRef, useCallback } from "react";
import RotatingText from "../../blocks/TextAnimations/RotatingText/RotatingText";
import { useNavigate } from "react-router-dom";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const configRef = useRef({
    get particleCount() {
      if (screenSize.width < 640) return 25; // Mobile (very low)
      if (screenSize.width < 1024) return 50; // Tablet
      return 100; // Desktop
    },
    connectionDistance: 100,
    particleColor: "rgba(103, 232, 249, 0.5)", // Cyan-like color
    lineColor: "rgba(56, 189, 248, 0.3)", // Blue-like color
  });

  const createParticle = useCallback((width, height) => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const newWidth = canvas.offsetWidth;
      const newHeight = canvas.offsetHeight;

      canvas.width = newWidth;
      canvas.height = newHeight;

      setScreenSize({ width: newWidth, height: newHeight });

      particlesRef.current = Array.from(
        { length: configRef.current.particleCount },
        () => createParticle(newWidth, newHeight)
      );
    };

    const updateParticle = (particle, mouseX, mouseY, width, height) => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        particle.x += dx * 0.005;
        particle.y += dy * 0.005;
      }

      particle.x = (particle.x + width) % width;
      particle.y = (particle.y + height) % height;

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      return particle;
    };

    const drawParticle = (ctx, particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = configRef.current.particleColor;
      ctx.fill();
    };

    const drawConnections = (ctx, particles) => {
      const { connectionDistance, lineColor } = configRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = (1 - distance / connectionDistance) * 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.map((particle) =>
        updateParticle(
          particle,
          mousePosition.x,
          mousePosition.y,
          canvas.width,
          canvas.height
        )
      );

      particlesRef.current.forEach((particle) => drawParticle(ctx, particle));

      drawConnections(ctx, particlesRef.current);

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    animate();
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [createParticle, mousePosition]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
  );
};

const TeamCard = () => {
  const navigate = useNavigate();
  const handleNavigateToTeam = () => {
    navigate("/our_team");
  };

  return (
    <div
      className="relative w-full max-w-xs sm:max-w-md font-clash md:max-w-2xl lg:max-w-4xl mx-auto my-4 sm:my-8 md:my-12 overflow-hidden rounded-xl border border-gray-500 backdrop-blur-lg bg-white/10 cursor-pointer group"
      onClick={handleNavigateToTeam}
    >
      <InteractiveBackground />

      <div className="relative z-10 flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem]">
        <div className="mb-4 sm:mb-6 text-center">
          <h3 className="mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Meet Our Amazing
          </h3>
          <div className="flex justify-center">
            <RotatingText
              texts={["Team", "Leaders", "Professionals", "Experts"]}
              mainClassName="px-4 sm:px-4 font-extrabold text-4xl md:px-5 bg-cyan-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-4 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={1500}
            />
          </div>
        </div>

        <div className="w-full">
          <div className="text-center">
            <p className="mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-white">
              Discover the talented individuals behind our success!
            </p>
            <button className="px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-base text-black font-semibold bg-gradient-to-r from-sky-400 to-cyan-500 rounded-md transition-all duration-300 hover:bg-indigo-700 group-hover:scale-105">
              View Full Team
              <span className="inline-block ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;