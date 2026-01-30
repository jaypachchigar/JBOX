"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    type: 'dot' | 'bracket' | 'plus' | 'circle';
}

export function TerminalBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationId: number;
        let mouseX = width / 2;
        let mouseY = height / 2;

        canvas.width = width;
        canvas.height = height;

        // Create floating tech particles
        const particles: Particle[] = [];
        const particleCount = 60;
        const types: Particle['type'][] = ['dot', 'bracket', 'plus', 'circle'];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 8 + 4,
                opacity: Math.random() * 0.3 + 0.1,
                type: types[Math.floor(Math.random() * types.length)],
            });
        }

        const drawParticle = (p: Particle) => {
            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.6)';
            ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.lineWidth = 1;

            switch (p.type) {
                case 'dot':
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size / 3, 0, Math.PI * 2);
                    ctx.fill();
                    break;

                case 'bracket':
                    ctx.font = `${p.size * 2}px monospace`;
                    ctx.fillText('<>', p.x, p.y);
                    break;

                case 'plus':
                    ctx.beginPath();
                    ctx.moveTo(p.x - p.size / 2, p.y);
                    ctx.lineTo(p.x + p.size / 2, p.y);
                    ctx.moveTo(p.x, p.y - p.size / 2);
                    ctx.lineTo(p.x, p.y + p.size / 2);
                    ctx.stroke();
                    break;

                case 'circle':
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                    ctx.stroke();
                    break;
            }

            ctx.restore();
        };

        const draw = () => {
            ctx.fillStyle = "rgba(3, 3, 3, 0.08)";
            ctx.fillRect(0, 0, width, height);

            // Draw connection lines between nearby particles
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

            // Update and draw particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
