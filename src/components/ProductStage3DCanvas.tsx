import React, { useRef, useEffect, useState } from 'react';

interface ProductStage3DCanvasProps {
  isExploded: boolean;
  viewMode: '3d' | 'section' | 'specs';
}

export const ProductStage3DCanvas: React.FC<ProductStage3DCanvasProps> = ({ isExploded, viewMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
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

    let currRotation = 0;
    let explodeProgress = isExploded ? 1 : 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Clean Light Studio Background Fill
      ctx.fillStyle = '#F8F8F8';
      ctx.fillRect(0, 0, width, height);

      const targetExplode = isExploded ? 1 : 0;
      explodeProgress += (targetExplode - explodeProgress) * 0.08;

      if (isRotating) {
        currRotation += 0.008;
      }

      const centerX = width / 2;
      const centerY = height / 2 + 10;

      // 1. Stage Studio Grid (Light Blue Lines)
      const floorY = centerY + 110;
      ctx.strokeStyle = 'rgba(0, 133, 244, 0.12)';
      ctx.lineWidth = 1;
      for (let i = -6; i <= 6; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * 40, floorY - 30);
        ctx.lineTo(centerX + i * 60, floorY + 60);
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(0, 74, 173, 0.06)';
      ctx.beginPath();
      ctx.ellipse(centerX, floorY, 220, 35, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. 3D Product Assembly (Steel Trench Box Model)
      const panelHeight = 160;
      const spreadDistance = 140 + explodeProgress * 90;

      const leftX = centerX - spreadDistance / 2 - (explodeProgress * 40);
      const rightX = centerX + spreadDistance / 2 + (explodeProgress * 40);

      // Left Heavy Steel Panel (#004AAD)
      ctx.fillStyle = '#004AAD';
      ctx.fillRect(leftX - 15, centerY - panelHeight / 2, 26, panelHeight);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(leftX - 15, centerY - panelHeight / 2, 26, panelHeight);

      // Panel Rib Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      for (let y = -panelHeight / 2 + 30; y < panelHeight / 2; y += 40) {
        ctx.beginPath();
        ctx.moveTo(leftX - 15, centerY + y);
        ctx.lineTo(leftX + 11, centerY + y);
        ctx.stroke();
      }

      // Right Heavy Steel Panel (#0085F4)
      ctx.fillStyle = '#0085F4';
      ctx.fillRect(rightX - 11, centerY - panelHeight / 2, 26, panelHeight);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(rightX - 11, centerY - panelHeight / 2, 26, panelHeight);

      // Spreader Steel Pipes (#00BBFF)
      const topSpreaderY = centerY - panelHeight / 2 + 25;
      const botSpreaderY = centerY + panelHeight / 2 - 25;

      const topOffsetY = isExploded ? -35 * explodeProgress : 0;
      const botOffsetY = isExploded ? 35 * explodeProgress : 0;

      ctx.fillStyle = '#00BBFF';
      ctx.fillRect(leftX + 11, topSpreaderY - 8 + topOffsetY, (rightX - leftX - 22), 16);
      ctx.strokeStyle = '#004AAD';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(leftX + 11, topSpreaderY - 8 + topOffsetY, (rightX - leftX - 22), 16);

      ctx.fillRect(leftX + 11, botSpreaderY - 8 + botOffsetY, (rightX - leftX - 22), 16);
      ctx.strokeRect(leftX + 11, botSpreaderY - 8 + botOffsetY, (rightX - leftX - 22), 16);

      // Collar Pin Markers
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(leftX + 18, topSpreaderY + topOffsetY, 5, 0, Math.PI * 2);
      ctx.arc(rightX - 18, topSpreaderY + topOffsetY, 5, 0, Math.PI * 2);
      ctx.arc(leftX + 18, botSpreaderY + botOffsetY, 5, 0, Math.PI * 2);
      ctx.arc(rightX - 18, botSpreaderY + botOffsetY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Technical Annotations
      ctx.fillStyle = '#004AAD';
      ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText('360° INSPECTION CANVAS // ROTATION ACTIVE', 20, 30);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isExploded, isRotating]);

  return (
    <div className="relative w-full h-[450px] bg-[#F8F8F8] border-2 border-[#0085F4]/30 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-[#0085F4] text-xs font-mono font-bold text-[#004AAD]">
        MODEL // TU-8000 STEEL SHIELD
      </div>
    </div>
  );
};
