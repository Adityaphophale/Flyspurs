import React, { useEffect, useRef } from 'react';

export const HeroGlobeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Hub coordinates on custom projection
    const hubs = [
      { name: 'Vadodara (HQ)', x: 0.62, y: 0.48, isHQ: true },
      { name: 'Singapore', x: 0.74, y: 0.58 },
      { name: 'Dubai', x: 0.55, y: 0.45 },
      { name: 'Frankfurt', x: 0.46, y: 0.35 },
      { name: 'London', x: 0.42, y: 0.32 },
      { name: 'New York', x: 0.25, y: 0.36 },
      { name: 'Tokyo', x: 0.85, y: 0.42 },
    ];

    // Flying particle routes
    const routes = [
      { from: 0, to: 1, progress: 0, speed: 0.005 },
      { from: 0, to: 2, progress: 0.3, speed: 0.006 },
      { from: 2, to: 3, progress: 0.6, speed: 0.004 },
      { from: 3, to: 5, progress: 0.1, speed: 0.003 },
      { from: 0, to: 6, progress: 0.8, speed: 0.005 },
    ];

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.002;

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const radius = Math.min(width, height) * 0.38;

      if (radius <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // 1. Draw Globe Outer Atmosphere Glow
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        Math.max(0.001, radius * 0.8),
        centerX,
        centerY,
        Math.max(0.002, radius * 1.25)
      );
      glowGrad.addColorStop(0, 'rgba(10, 45, 104, 0.08)');
      glowGrad.addColorStop(0.6, 'rgba(213, 175, 88, 0.06)');
      glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Latitude / Longitude Globe Grid
      ctx.strokeStyle = 'rgba(10, 45, 104, 0.15)';
      ctx.lineWidth = 1;

      // Latitude lines
      for (let i = -3; i <= 3; i++) {
        const rY = centerY + (i * radius) / 4;
        const rX = Math.max(0.001, Math.sqrt(Math.max(0, radius * radius - ((i * radius) / 4) ** 2)));
        ctx.beginPath();
        ctx.ellipse(centerX, rY, rX, Math.max(0.001, rX * 0.25), 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines
      for (let i = 0; i < 6; i++) {
        const rot = angle + (i * Math.PI) / 6;
        const rx = Math.max(0.001, Math.abs(radius * Math.cos(rot)));
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, rx, radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Draw Connecting Curved Flight Paths
      routes.forEach((route) => {
        const h1 = hubs[route.from];
        const h2 = hubs[route.to];

        const x1 = centerX + (h1.x - 0.5) * radius * 1.8;
        const y1 = centerY + (h1.y - 0.5) * radius * 1.8;
        const x2 = centerX + (h2.x - 0.5) * radius * 1.8;
        const y2 = centerY + (h2.y - 0.5) * radius * 1.8;

        const controlX = (x1 + x2) / 2;
        const controlY = Math.min(y1, y2) - 40;

        // Draw Arc Line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(controlX, controlY, x2, y2);
        ctx.strokeStyle = 'rgba(213, 175, 88, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated Flying Jet Particle
        route.progress = (route.progress + route.speed) % 1;
        const t = route.progress;
        const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * controlX + t * t * x2;
        const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * controlY + t * t * y2;

        // Glowing Airplane Pulse Point
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#0A2D68';
        ctx.shadowColor = '#D5AF58';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 4. Draw Hub Pins & Labels
      hubs.forEach((hub) => {
        const hx = centerX + (hub.x - 0.5) * radius * 1.8;
        const hy = centerY + (hub.y - 0.5) * radius * 1.8;

        // Outer Pulse ring for HQ
        if (hub.isHQ) {
          ctx.beginPath();
          ctx.arc(hx, hy, 10 + Math.sin(angle * 5) * 3, 0, Math.PI * 2);
          ctx.strokeStyle = '#D5AF58';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Hub Dot
        ctx.beginPath();
        ctx.arc(hx, hy, hub.isHQ ? 6 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = hub.isHQ ? '#D5AF58' : '#0A2D68';
        ctx.fill();

        // Label Text
        ctx.font = hub.isHQ ? 'bold 11px Inter, sans-serif' : '10px Inter, sans-serif';
        ctx.fillStyle = hub.isHQ ? '#0A2D68' : '#4B5563';
        ctx.fillText(hub.name, hx + 8, hy + 3);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
