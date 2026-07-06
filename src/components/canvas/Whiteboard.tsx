"use client";

import React, { useRef, useEffect, useState } from "react";
import { getStroke } from "perfect-freehand";

interface Point {
  x: number;
  y: number;
  pressure?: number;
}

interface LineElement {
  points: Point[];
  color: string;
}

export default function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [lines, setLines] = useState<LineElement[]>([]);
  const [currentLine, setCurrentLine] = useState<Point[] | null>(null);

  const drawStroke = (ctx: CanvasRenderingContext2D, points: Point[]) => {
    if (points.length === 0) return;
    const strokePoints = getStroke(points, { size: 8, thinning: 0.5, smoothing: 0.5 });

    ctx.beginPath();
    if (strokePoints.length > 0) {
      ctx.moveTo(strokePoints[0][0], strokePoints[0][1]);
      for (let i = 1; i < strokePoints.length; i++) {
        ctx.lineTo(strokePoints[i][0], strokePoints[i][1]);
      }
    }
    ctx.fill();
  };

  // Handle High-DPI Resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      const nextDpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * nextDpr;
      canvas.height = window.innerHeight * nextDpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(nextDpr, 0, 0, nextDpr, 0, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Redraw Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";

    // Draw completed lines
    for (const line of lines) {
      drawStroke(ctx, line.points);
    }

    // Draw active line
    if (currentLine) {
      drawStroke(ctx, currentLine);
    }
  }, [lines, currentLine]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const point: Point = { x: e.clientX - rect.left, y: e.clientY - rect.top, pressure: e.pressure };
    setCurrentLine([point]);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!currentLine) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const point: Point = { x: e.clientX - rect.left, y: e.clientY - rect.top, pressure: e.pressure };
    setCurrentLine((previous) => (previous ? [...previous, point] : [point]));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!currentLine) return;
    setLines((previous) => [...previous, { points: currentLine, color: "#000000" }]);
    setCurrentLine(null);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="absolute inset-0 bg-slate-50 touch-none"
      aria-label="Collaborative whiteboard canvas"
      role="img"
    />
  );
}