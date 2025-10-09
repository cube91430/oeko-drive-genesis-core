import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create grid pattern
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)'; // tech-green with opacity
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Create random dots (data points)
    const dots: Array<{ x: number; y: number; size: number; opacity: number; pulseSpeed: number }> = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.4,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawGrid();

      // Draw pulsing dots
      dots.forEach((dot) => {
        const pulse = Math.sin(frame * dot.pulseSpeed) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(16, 185, 129, ${dot.opacity * pulse})`; // tech-green
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(16, 185, 129, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connecting lines between nearby dots
        dots.forEach((otherDot) => {
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - distance / 120) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        });
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Industrial manufacturing facility"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98"></div>
      </div>

      {/* Animated map canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Darker vignette on edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="max-w-2xl">
          {/* Small label above title */}
          <div className="mb-6">
            <span className="text-xs md:text-sm font-mono text-tech-green tracking-widest uppercase border border-tech-green/30 px-3 py-1 rounded-sm">
              Industrial Robotics Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
            Dream, Build, Deploy
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            Open Source Modules for System Control, Flexible Analysis, and High Performance Motor Control in Robotics and Physical AI Applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-tech-green hover:bg-tech-green/90 text-slate-900 px-8 py-6 text-base font-bold rounded-md transition-all transform hover:scale-[1.02] shadow-lg shadow-tech-green/20 uppercase tracking-wider"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-600 bg-transparent text-white hover:bg-slate-800/50 hover:border-tech-cyan px-8 py-6 text-base font-semibold rounded-md transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
