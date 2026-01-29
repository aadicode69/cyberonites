import React, { useState, useEffect, useRef, useCallback } from "react";
import RotatingText from "../../blocks/TextAnimations/RotatingText/RotatingText";
import { useNavigate } from "react-router-dom";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const configRef = useRef({
    get particleCount() {
      if (window.innerWidth < 640) return 25;
      if (window.innerWidth < 1024) return 50;
      return 100;
    },
    connectionDistance: 100,
    particleColor: "rgba(103, 232, 249, 0.5)",
    lineColor: "rgba(56, 189, 248, 0.3)",
  });

  const createParticle = useCallback((width, height) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    speedX: (Math.random() - 0.5) * 1,
    speedY: (Math.random() - 0.5) * 1,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particlesRef.current = Array.from(
        { length: configRef.current.particleCount },
        () => createParticle(canvas.width, canvas.height)
      );
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        const dx = mousePosition.x - p.x;
        const dy = mousePosition.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          p.x += dx * 0.005;
          p.y += dy * 0.005;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.y > canvas.height) p.y = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = configRef.current.particleColor;
        ctx.fill();

        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx2 = p.x - particlesRef.current[j].x;
          const dy2 = p.y - particlesRef.current[j].y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (d < configRef.current.connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(
              particlesRef.current[j].x,
              particlesRef.current[j].y
            );
            ctx.strokeStyle = configRef.current.lineColor;
            ctx.lineWidth = (1 - d / configRef.current.connectionDistance);
            ctx.stroke();
          }
        }
      });

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
    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [createParticle, mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
};

const TeamCard = () => {
  const navigate = useNavigate();

  const handleNavigate = (year) => {
    navigate(`/team${year}`);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-6 overflow-hidden rounded-xl border border-gray-500 backdrop-blur-lg bg-white/10 font-clash">
      <InteractiveBackground />

      <div className="relative z-10 flex flex-col items-center p-6 md:p-10 min-h-[16rem]">
        <h3 className="mb-3 text-3xl font-bold text-white text-center">
          Meet Our Amazing
        </h3>

        <RotatingText
          texts={["Team", "Leaders", "Professionals", "Experts"]}
          mainClassName="px-5 font-extrabold text-4xl bg-cyan-400 text-black rounded-lg py-2"
          rotationInterval={1500}
        />

        <p className="mt-6 text-white text-center">
          Discover the talented individuals behind our success!
        </p>

        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => handleNavigate("2025")}
            className="px-6 py-2 font-semibold text-black bg-gradient-to-r from-sky-400 to-cyan-500 rounded-md hover:scale-105 transition"
          >
            Current Team →
          </button>

          <button
            onClick={() => handleNavigate("2024")}
            className="px-6 py-2 font-semibold text-white border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black hover:scale-105 transition"
          >
            Team 2024 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
