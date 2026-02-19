"use client";
import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const points = useRef<{ x: number; y: number }[]>([]);
  
  // Количество сегментов в нити
  const totalPoints = 20; 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Инициализируем точки в текущей позиции мыши
    for (let i = 0; i < totalPoints; i++) {
      points.current.push({ x: mouse.current.x, y: mouse.current.y });
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Логика движения: каждая точка следует за предыдущей
      let head = points.current[0];
      head.x = mouse.current.x;
      head.y = mouse.current.y;

      for (let i = 1; i < totalPoints; i++) {
        const p = points.current[i];
        const prev = points.current[i - 1];
        
        // Коэффициент "подтягивания" (0.4 - быстро, 0.1 - лениво)
        p.x += (prev.x - p.x) * 0.4;
        p.y += (prev.y - p.y) * 0.4;
      }

      // 2. Рисуем след
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < totalPoints; i++) {
        const ratio = 1 - i / totalPoints; // Хвост тоньше головы
        const p = points.current[i];
        const prev = points.current[i - 1];

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(p.x, p.y);

        // Цвет и свечение
        ctx.strokeStyle = `rgba(168, 85, 247, ${ratio})`;
        ctx.lineWidth = ratio * 12;
        ctx.shadowBlur = 15 * ratio;
        ctx.shadowColor = "#a855f7";
        
        ctx.stroke();
      }

      // 3. Рисуем саму точку-курсор
      ctx.shadowBlur = 25;
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 7, 0, Math.PI * 2);
      ctx.fillStyle = "#a855f7";
      ctx.fill();
      
      // Белый центр
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[10000] pointer-events-none"
    />
  );
}