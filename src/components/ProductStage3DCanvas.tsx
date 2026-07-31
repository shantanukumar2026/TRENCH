import React, { useRef, useEffect, useState } from 'react';

interface ProductStage3DCanvasProps {
  isExploded: boolean;
  viewMode: '3d' | 'section' | 'specs';
}

export const ProductStage3DCanvas: React.FC<ProductStage3DCanvasProps> = ({ isExploded, viewMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let currRotation = rotationAngle;
    let explodeProgress = isExploded ? 1 : 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const targetExplode = isExploded ? 1 : 0;
      explodeProgress += (targetExplode - explodeProgress) * 0.08;

      if (isRotating) {
        currRotation += 0.008;
      }

      const centerX = width / 2;
      const centerY = height / 2 + 10;

      // 1. Stage Floor & Blueprint Grid
      const floorY = centerY + 110;
      ctx.strokeStyle = 'rgba(33, 102, 209, 0.1)';
      ctx.lineWidth = 1;
      for (let i = -6; i <= 6; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * 40, floorY - 30);
        ctx.lineTo(centerX + i * 60, floorY + 60);
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(33, 102, 209, 0.05)';
      ctx.beginPath();
      ctx.ellipse(centerX, floorY, 200, 30, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. 3D Product Assembly
      const panelHeight = 160;
      const spreadDistance = 140 + explodeProgress * 90;

      const leftX = centerX - spreadDistance / 2 - (explodeProgress * 40);
      const rightX = centerX + spreadDistance / 2 + (explodeProgress * 40);

      // Left Panel
      ctx.fillStyle = '#0754AE';
      ctx.fillRect(leftX - 15, centerY - panelHeight / 2, 24, panelHeight);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(leftX - 15, centerY - panelHeight / 2, 24, panelHeight);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      for (let y = -panelHeight / 2 + 30; y < panelHeight / 2; y += 40) {
        ctx.beginPath();
        ctx.moveTo(leftX - 15, centerY + y);
        ctx.lineTo(leftX + 9, centerY + y);
        ctx.stroke();
      }

      // Right Panel
      ctx.fillStyle = '#2166D1';
      ctx.fillRect(rightX - 9, centerY - panelHeight / 2, 24, panelHeight);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(rightX - 9, centerY - panelHeight / 2, 24, panelHeight);

      // Spreader Steel Pipes
      const topSpreaderY = centerY - panelHeight / 2 + 25;
      const botSpreaderY = centerY + panelHeight / 2 - 25;

      const topOffsetY = isExploded ? -35 * explodeProgress : 0;
      const botOffsetY = isExploded ? 35 * explodeProgress : 0;

      ctx.fillStyle = '#3B82F6';
      ctx.fillRect(leftX + 9, topSpreaderY - 8 + topOffsetY, (rightX - leftX - 18), 16);
      ctx.strokeStyle = '#FFFFFF';
      ctx.strokeRect(leftX + 9, topSpreaderY - 8 + topOffsetY, (rightX - leftX - 18), 16);

      ctx.fillRect(leftX + 9, botSpreaderY - 8 + botOffsetY, (rightX - leftX - 18), 16);
      ctx.strokeRect(leftX + 9, botSpreaderY - 8 + botOffsetY, (rightX - leftX - 18), 16);

      // Pin Lock Circles (Trench Blue)
      ctx.fillStyle = '#1E73E8';
      ctx.beginPath();
      ctx.arc(leftX + 9, topSpreaderY + topOffsetY, 5, 0, Math.PI * 2);
      ctx.arc(rightX - 9, topSpreaderY + topOffsetY, 5, 0, Math.PI * 2);
      ctx.arc(leftX + 9, botSpreaderY + botOffsetY, 5, 0, Math.PI * 2);
      ctx.arc(rightX - 9, botSpreaderY + botOffsetY, 5, 0, Math.PI * 2);
      ctx.fill();

      // 3. Exploded Leader Lines
      if (explodeProgress > 0.3) {
        ctx.fillStyle = '#0754AE';
        ctx.font = 'bold 11px JetBrains Mono, monospace';

        ctx.strokeStyle = '#2166D1';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(leftX - 15, centerY);
        ctx.lineTo(leftX - 70, centerY - 40);
        ctx.lineTo(leftX - 160, centerY - 40);
        ctx.stroke();

        ctx.fillStyle = '#2166D1';
        ctx.beginPath();
        ctx.arc(leftX - 15, centerY, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0754AE';
        ctx.fillText('01 HIGH-TENSILE STEEL PANEL (4.0" WALL)', leftX - 160, centerY - 46);

        ctx.beginPath();
        ctx.moveTo(centerX, topSpreaderY + topOffsetY);
        ctx.lineTo(centerX, topSpreaderY + topOffsetY - 40);
        ctx.lineTo(centerX + 120, topSpreaderY + topOffsetY - 40);
        ctx.stroke();

        ctx.fillStyle = '#2166D1';
        ctx.beginPath();
        ctx.arc(centerX, topSpreaderY + topOffsetY, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0754AE';
        ctx.fillText('02 SCH 80 SPREADER PIPE & PIN LOCKS', centerX + 10, topSpreaderY + topOffsetY - 46);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isExploded, viewMode, isRotating]);

  return (
    <div className="relative w-full h-[450px] bg-[#F0F7FF] rounded-lg overflow-hidden border border-blue-200 shadow-inner">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block cursor-grab active:cursor-grabbing" 
        onClick={() => setIsRotating(!isRotating)}
      />

      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded border border-blue-200 text-[11px] font-mono text-[#0754AE] flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${isRotating ? 'bg-[#2166D1] animate-pulse' : 'bg-slate-400'}`}></span>
        {isRotating ? '3D AUTO-ROTATE ACTIVE' : 'PAUSED (CLICK CANVAS TO ROTATE)'}
      </div>
    </div>
  );
};
