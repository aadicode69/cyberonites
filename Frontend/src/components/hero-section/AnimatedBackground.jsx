import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Create dots array - reduced from 150 to 50
    const dots = [];
    const dotCount = 50;
    
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1 + 0.5, // Reduced from 2+1 to 1+0.5
        opacity: Math.random() * 0.4 + 0.3, // Slightly higher base opacity
        blinkSpeed: Math.random() * 0.015 + 0.005,
        blinkPhase: Math.random() * Math.PI * 2
      });
    }

    // Gradient positions - reduced opacity for less glow
    const gradients = [
      { 
        x: 0.35, y: 0.25, 
        vx: (Math.random() - 0.5) * 0.003, 
        vy: (Math.random() - 0.5) * 0.002, 
        size: 0.3, 
        color: 'rgba(6, 182, 212, 0.04)', // Reduced from 0.1 to 0.04
        centerX: 0.35, centerY: 0.25, radius: 0.15
      },
      { 
        x: 0.65, y: 0.3, 
        vx: (Math.random() - 0.5) * 0.0025, 
        vy: (Math.random() - 0.5) * 0.003, 
        size: 0.4, 
        color: 'rgba(34, 211, 238, 0.03)', // Reduced from 0.08 to 0.03
        centerX: 0.65, centerY: 0.3, radius: 0.2
      },
      { 
        x: 0.25, y: 0.4, 
        vx: (Math.random() - 0.5) * 0.004, 
        vy: (Math.random() - 0.5) * 0.0015, 
        size: 0.25, 
        color: 'rgba(6, 182, 212, 0.02)', // Reduced from 0.06 to 0.02
        centerX: 0.25, centerY: 0.4, radius: 0.12
      },
      { 
        x: 0.75, y: 0.45, 
        vx: (Math.random() - 0.5) * 0.0035, 
        vy: (Math.random() - 0.5) * 0.0025, 
        size: 0.32, 
        color: 'rgba(14, 165, 233, 0.025)', // Reduced from 0.05 to 0.025
        centerX: 0.75, centerY: 0.45, radius: 0.18
      },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw moving gradients with random movement around title
      gradients.forEach(gradient => {
        const centerX = gradient.x * canvas.width;
        const centerY = gradient.y * canvas.height;
        const radius = gradient.size * Math.max(canvas.width, canvas.height);

        const radialGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );
        
        radialGradient.addColorStop(0, gradient.color);
        radialGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update gradient positions with random movement
        gradient.x += gradient.vx;
        gradient.y += gradient.vy;

        // Check distance from center point
        const distanceFromCenter = Math.sqrt(
          Math.pow(gradient.x - gradient.centerX, 2) + 
          Math.pow(gradient.y - gradient.centerY, 2)
        );

        // If gradient moves too far from center, change direction back towards center
        if (distanceFromCenter > gradient.radius) {
          gradient.vx = (gradient.centerX - gradient.x) * 0.001 + (Math.random() - 0.5) * 0.002;
          gradient.vy = (gradient.centerY - gradient.y) * 0.001 + (Math.random() - 0.5) * 0.002;
        } else {
          // Random direction change occasionally
          if (Math.random() < 0.01) {
            gradient.vx = (Math.random() - 0.5) * 0.004;
            gradient.vy = (Math.random() - 0.5) * 0.003;
          }
        }

        // Clamp position to stay within reasonable bounds
        gradient.x = Math.max(0.1, Math.min(0.9, gradient.x));
        gradient.y = Math.max(0.1, Math.min(0.8, gradient.y));
      });

      // Draw and animate dots with glow effects
      dots.forEach(dot => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;

        // Update blinking
        dot.blinkPhase += dot.blinkSpeed;
        const currentOpacity = dot.opacity * (0.5 + 0.5 * Math.sin(dot.blinkPhase));

        // Enhanced glow effect
        ctx.save();
        
        // Outer glow (largest)
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${currentOpacity * 0.08})`;
        ctx.filter = 'blur(6px)';
        ctx.fill();
        
        // Middle glow
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${currentOpacity * 0.2})`;
        ctx.filter = 'blur(3px)';
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${currentOpacity * 0.4})`;
        ctx.filter = 'blur(1px)';
        ctx.fill();
        
        // Core dot
        ctx.filter = 'none';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`;
        ctx.fill();
        
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 0.8,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AnimatedBackground;
