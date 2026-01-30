"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    type: number;
}

export function TerminalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationId: number;

        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        const particleCount = 60;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 8 + 4,
                opacity: Math.random() * 0.3 + 0.1,
                type: Math.floor(Math.random() * 4),
            });
        }

        const drawParticle = (p: Particle) => {
            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
            ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.lineWidth = 1;

            if (p.type === 0) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size / 3, 0, Math.PI * 2);
                ctx.fill();
            } else if (p.type === 1) {
                ctx.font = `${p.size * 2}px monospace`;
                ctx.fillText('<>', p.x, p.y);
            } else if (p.type === 2) {
                ctx.beginPath();
                ctx.moveTo(p.x - p.size / 2, p.y);
                ctx.lineTo(p.x + p.size / 2, p.y);
                ctx.moveTo(p.x, p.y - p.size / 2);
                ctx.lineTo(p.x, p.y + p.size / 2);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.restore();
        };

        const draw = () => {
            ctx.fillStyle = "rgba(3, 3, 3, 0.08)";
            ctx.fillRect(0, 0, width, height);

            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.05 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -20) p.x = width + 20;
                if (p.x > width + 20) p.x = -20;
                if (p.y < -20) p.y = height + 20;
                if (p.y > height + 20) p.y = -20;

                drawParticle(p);
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, [isClient]);

    if (!isClient) {
        return <div className="fixed inset-0 z-0 bg-[#030303]" />;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
