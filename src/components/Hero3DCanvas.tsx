import React, { useRef, useEffect, useState } from 'react';

export const Hero3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeLayerInfo, setActiveLayerInfo] = useState<string>('TRENCH SHORING BOX — TU-8000 (OSHA SUBPART P COMPLIANT)');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 580);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Fluid flow particles inside the C900 water pipe
    const particles: { x: number; y: number; speed: number; radius: number; alpha: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: 0,
        speed: 1.8 + Math.random() * 2.2,
        radius: 2 + Math.random() * 2,
        alpha: 0.4 + Math.random() * 0.5
      });
    }

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      pulse += 0.03;

      // Dynamic tilt based on cursor
      const tiltX = (mousePos.x / width - 0.5) * 12;
      const tiltY = (mousePos.y / height - 0.5) * 8;

      // Safety bounds for content drawing (avoid top header bar and bottom spec bar)
      const topBoundary = 56;
      const bottomBoundary = height - 68;
      const usableHeight = bottomBoundary - topBoundary;

      // ────── 1. BACKGROUND BLUEPRINT & STRATA GRADIENT ──────
      const bgGradient = ctx.createLinearGradient(0, topBoundary, 0, bottomBoundary);
      bgGradient.addColorStop(0, '#FFFFFF');
      bgGradient.addColorStop(0.25, '#F0F7FF');
      bgGradient.addColorStop(0.65, '#E2EAF8');
      bgGradient.addColorStop(1, '#D0DFEE');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, topBoundary, width, usableHeight);

      // Blueprint Mesh Grid
      ctx.strokeStyle = 'rgba(33, 102, 209, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 28;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, topBoundary);
        ctx.lineTo(x, bottomBoundary);
        ctx.stroke();
      }
      for (let y = topBoundary; y < bottomBoundary; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ────── 2. SURFACE ROAD GRADE (AASHTO H-20 TRAFFIC DECK) ──────
      const roadTop = topBoundary + 10;
      const roadHeight = 44;

      ctx.fillStyle = '#0754AE';
      ctx.fillRect(0, roadTop, width, roadHeight);

      // Asphalt texture stripe
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, roadTop);
        ctx.lineTo(x + 8, roadTop + roadHeight);
        ctx.stroke();
      }

      // Yellow Centerline Dashes
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      ctx.setLineDash([18, 14]);
      ctx.beginPath();
      ctx.moveTo(0, roadTop + roadHeight / 2);
      ctx.lineTo(width, roadTop + roadHeight / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Surface Grade Elevation Marker
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 11px JetBrains Mono, monospace';
      ctx.fillText('ELEV: 0.00m [AASHTO H-20 HEAVY TRAFFIC DECK]', 24, roadTop + 26);

      // ────── 3. EXCAVATED TRENCH CAVITY & SOIL STRATA ──────
      const trenchTop = roadTop + roadHeight;
      const trenchBottom = bottomBoundary - 10;
      const trenchLeft = width * 0.24 + tiltX * 0.3;
      const trenchRight = width * 0.76 + tiltX * 0.3;

      // Soil Side Walls (Hatched Pattern)
      ctx.fillStyle = 'rgba(7, 84, 174, 0.08)';
      
      // Left Soil Wall
      ctx.beginPath();
      ctx.moveTo(0, trenchTop);
      ctx.lineTo(trenchLeft, trenchTop);
      ctx.lineTo(trenchLeft + 15, trenchBottom);
      ctx.lineTo(0, trenchBottom);
      ctx.closePath();
      ctx.fill();

      // Right Soil Wall
      ctx.beginPath();
      ctx.moveTo(width, trenchTop);
      ctx.lineTo(trenchRight, trenchTop);
      ctx.lineTo(trenchRight - 15, trenchBottom);
      ctx.lineTo(width, trenchBottom);
      ctx.closePath();
      ctx.fill();

      // Wall Hatch Lines
      ctx.strokeStyle = 'rgba(7, 84, 174, 0.15)';
      ctx.lineWidth = 1;
      for (let y = trenchTop + 15; y < trenchBottom; y += 24) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(trenchLeft, y - 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(trenchRight, y - 10);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ────── 4. STEEL TRENCH SHIELD BOX (TU-8000 3D RENDERING) ──────
      const boxLeft = trenchLeft + 28;
      const boxRight = trenchRight - 28;
      const boxTop = trenchTop + 24;
      const boxBottom = trenchBottom - 75;
      const boxWidth = boxRight - boxLeft;
      const boxHeight = boxBottom - boxTop;
      const wallThickness = 22;

      // Side Wall Shoring Plates (Steel Blue Gradient)
      const steelGradLeft = ctx.createLinearGradient(boxLeft - wallThickness, 0, boxLeft, 0);
      steelGradLeft.addColorStop(0, '#0754AE');
      steelGradLeft.addColorStop(0.5, '#2166D1');
      steelGradLeft.addColorStop(1, '#1E73E8');

      const steelGradRight = ctx.createLinearGradient(boxRight, 0, boxRight + wallThickness, 0);
      steelGradRight.addColorStop(0, '#1E73E8');
      steelGradRight.addColorStop(0.5, '#2166D1');
      steelGradRight.addColorStop(1, '#0754AE');

      // Left Plate
      ctx.fillStyle = steelGradLeft;
      ctx.fillRect(boxLeft - wallThickness, boxTop, wallThickness, boxHeight);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(boxLeft - wallThickness, boxTop, wallThickness, boxHeight);

      // Right Plate
      ctx.fillStyle = steelGradRight;
      ctx.fillRect(boxRight, boxTop, wallThickness, boxHeight);
      ctx.strokeRect(boxRight, boxTop, wallThickness, boxHeight);

      // Wall Reinforcement Flanges & Ribs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      for (let y = boxTop + 20; y < boxBottom; y += 32) {
        ctx.beginPath();
        ctx.moveTo(boxLeft - wallThickness, y);
        ctx.lineTo(boxLeft, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(boxRight, y);
        ctx.lineTo(boxRight + wallThickness, y);
        ctx.stroke();
      }

      // Chrome Telescopic Spreader Pipes (Top & Bottom Crossbraces)
      const topSpreaderY = boxTop + 30;
      const botSpreaderY = boxBottom - 30;

      const spreaderGrad = ctx.createLinearGradient(0, topSpreaderY - 8, 0, topSpreaderY + 8);
      spreaderGrad.addColorStop(0, '#E2EAF8');
      spreaderGrad.addColorStop(0.4, '#2166D1');
      spreaderGrad.addColorStop(1, '#0754AE');

      // Top Spreader Pipe
      ctx.fillStyle = spreaderGrad;
      ctx.fillRect(boxLeft, topSpreaderY - 8, boxWidth, 16);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(boxLeft, topSpreaderY - 8, boxWidth, 16);

      // Bottom Spreader Pipe
      ctx.fillRect(boxLeft, botSpreaderY - 8, boxWidth, 16);
      ctx.strokeRect(boxLeft, botSpreaderY - 8, boxWidth, 16);

      // Pin Locking Hubs (Precision Blue Rings)
      const pins = [
        { x: boxLeft, y: topSpreaderY },
        { x: boxRight, y: topSpreaderY },
        { x: boxLeft, y: botSpreaderY },
        { x: boxRight, y: botSpreaderY }
      ];

      pins.forEach((pin) => {
        ctx.fillStyle = '#2166D1';
        ctx.beginPath();
        ctx.arc(pin.x, pin.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Shield Dimension Label
      ctx.fillStyle = '#0754AE';
      ctx.font = 'bold 10px JetBrains Mono, monospace';
      ctx.fillText('TU-8000 DOUBLE-WALL STEEL SHIELD', boxLeft + 12, boxTop + 16);

      // ────── 5. AWWA C900 WATER MAIN PIPE & FLUID FLOW ──────
      const pipeY = trenchBottom - 38;
      const pipeRadius = 24;

      // Pipe Crushed Stone Bedding Layer
      ctx.fillStyle = '#BFDBFE';
      ctx.fillRect(boxLeft - 10, pipeY + pipeRadius - 4, boxWidth + 20, 24);
      ctx.strokeStyle = '#3B82F6';
      ctx.strokeRect(boxLeft - 10, pipeY + pipeRadius - 4, boxWidth + 20, 24);

      ctx.fillStyle = '#0754AE';
      ctx.font = '9px JetBrains Mono, monospace';
      ctx.fillText('ENGINEERED PEA GRAVEL BEDDING (-5.00m)', boxLeft, pipeY + pipeRadius + 13);

      // AWWA C900 PVC Pressure Pipe Cylinder
      const pipeGrad = ctx.createLinearGradient(0, pipeY - pipeRadius, 0, pipeY + pipeRadius);
      pipeGrad.addColorStop(0, '#3B82F6');
      pipeGrad.addColorStop(0.3, '#2166D1');
      pipeGrad.addColorStop(1, '#0754AE');

      ctx.fillStyle = pipeGrad;
      ctx.fillRect(boxLeft - 18, pipeY - pipeRadius, boxWidth + 36, pipeRadius * 2);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(boxLeft - 18, pipeY - pipeRadius, boxWidth + 36, pipeRadius * 2);

      // Pipe Gasket Collar Joints
      ctx.fillStyle = '#0754AE';
      ctx.fillRect(boxLeft + 40, pipeY - pipeRadius - 3, 10, pipeRadius * 2 + 6);
      ctx.fillRect(boxRight - 50, pipeY - pipeRadius - 3, 10, pipeRadius * 2 + 6);

      // Internal Hydro Fluid Particles
      particles.forEach((p) => {
        p.y = pipeY + (Math.sin(p.x * 0.03 + pulse) * 8);
        p.x += p.speed;
        if (p.x > boxRight + 18) p.x = boxLeft - 18;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Clear Floating Pipe Badge (positioned safely ABOVE pipe, zero overlap)
      const badgeWidth = 240;
      const badgeX = boxLeft + (boxWidth - badgeWidth) / 2;
      const badgeY = pipeY - pipeRadius - 28;

      ctx.fillStyle = 'rgba(7, 84, 174, 0.92)';
      ctx.fillRect(badgeX, badgeY, badgeWidth, 20);
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 1;
      ctx.strokeRect(badgeX, badgeY, badgeWidth, 20);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 9.5px JetBrains Mono, monospace';
      ctx.fillText('ANSI/AWWA C900 16" WATER MAIN (235 PSI)', badgeX + 10, badgeY + 13);

      // ────── 6. DEPTH RULER & STRATA ELEVATION MARKERS ──────
      const levels = [
        { label: '0.00m SURFACE GRADE', y: roadTop + 22 },
        { label: '-1.50m ACCESS VAULT', y: boxTop + 25 },
        { label: '-3.00m SHORING SHIELD', y: topSpreaderY + 40 },
        { label: '-5.00m UTILITY BEDDING', y: pipeY }
      ];

      levels.forEach((lvl) => {
        ctx.strokeStyle = '#2166D1';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(trenchRight + wallThickness + 5, lvl.y);
        ctx.lineTo(width - 15, lvl.y);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#2166D1';
        ctx.beginPath();
        ctx.arc(width - 15, lvl.y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0754AE';
        ctx.font = 'bold 10px JetBrains Mono, monospace';
        ctx.fillText(lvl.label, width - 160, lvl.y - 5);
      });

      // ────── 7. INTERACTIVE CROSSHAIR & DEPTH READOUT ──────
      if (mousePos.x > 0 && mousePos.y > topBoundary && mousePos.y < bottomBoundary) {
        ctx.strokeStyle = '#2166D1';
        ctx.lineWidth = 1;
        
        // Vertical Crosshair line
        ctx.beginPath();
        ctx.moveTo(mousePos.x, topBoundary);
        ctx.lineTo(mousePos.x, bottomBoundary);
        ctx.stroke();

        // Horizontal Crosshair line
        ctx.beginPath();
        ctx.moveTo(0, mousePos.y);
        ctx.lineTo(width, mousePos.y);
        ctx.stroke();

        // Glowing node
        ctx.fillStyle = '#2166D1';
        ctx.beginPath();
        ctx.arc(mousePos.x, mousePos.y, 5, 0, Math.PI * 2);
        ctx.fill();

        // Tooltip box (placed safely above cursor to prevent bottom collision)
        const depthVal = (((mousePos.y - trenchTop) / (trenchBottom - trenchTop)) * 6).toFixed(2);
        const tooltipY = Math.max(topBoundary + 20, Math.min(mousePos.y - 30, bottomBoundary - 40));

        ctx.fillStyle = 'rgba(7, 84, 174, 0.95)';
        ctx.fillRect(mousePos.x + 14, tooltipY, 185, 24);
        ctx.strokeStyle = '#3B82F6';
        ctx.strokeRect(mousePos.x + 14, tooltipY, 185, 24);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px JetBrains Mono, monospace';
        ctx.fillText(`STRATA DEPTH: -${depthVal}m`, mousePos.x + 22, tooltipY + 16);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div 
      className="relative w-full h-[520px] lg:h-[580px] rounded-xl overflow-hidden border border-blue-200 shadow-xl bg-[#F0F7FF] group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Top Floating Status Header Bar */}
      <div className="absolute top-3 left-3 right-3 flex justify-between items-center bg-white/90 backdrop-blur-md px-4 py-2 rounded border border-blue-200 shadow-sm text-xs font-mono z-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2166D1] animate-pulse"></span>
          <span className="font-bold text-[#0754AE]">REAL-TIME 3D UNDERGROUND CUTAWAY MODEL</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-600">
          <span>LATERAL EARTH: <strong className="text-[#0754AE]">1,450 PSF</strong></span>
          <span>SOIL: <strong className="text-[#0754AE]">TYPE B/C</strong></span>
          <span>CAD MODE: <strong className="text-[#2166D1]">ACTIVE</strong></span>
        </div>
      </div>

      {/* Bottom Floating Technical Specification Panel (Fixed bounds, zero collision) */}
      <div className="absolute bottom-3 left-3 right-3 bg-[#0754AE]/95 text-white p-3.5 rounded border border-blue-400 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono z-10">
        <div className="flex items-center gap-2">
          <span className="text-[#DBEAFE] font-bold">▲ SPECIFICATION:</span>
          <span>{activeLayerInfo}</span>
        </div>
        <div className="flex items-center gap-2 text-blue-200">
          <span className="px-2 py-0.5 bg-blue-800 rounded text-[10px]">PARALLAX CONTROLLED</span>
          <span className="text-white">HOVER TO EXPLORE DEPTH</span>
        </div>
      </div>
    </div>
  );
};
