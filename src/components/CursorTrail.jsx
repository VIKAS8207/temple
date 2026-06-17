// src/components/CursorTrail.jsx
import { useState, useEffect } from 'react';

export default function CursorTrail() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let timeoutId;
    
    const handleMouseMove = (e) => {
      // Create a new particle on mouse move
      const newParticle = {
        id: Math.random().toString(36).substring(2, 9),
        x: e.clientX,
        y: e.clientY,
      };

      // Keep only the last 20 particles to prevent lag
      setParticles((current) => [...current.slice(-20), newParticle]);

      // Clear particles when mouse stops moving
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setParticles([]);
      }, 800); // Particles fade out after 800ms
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden ">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-[twinkleFade_0.8s_ease-out_forwards]"
          style={{
            left: p.x,
            top: p.y,
            // Offset the icon so the center is exactly on the cursor
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* A 4-point twinkle star SVG */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      ))}

      {/* Injecting the custom keyframe animation for the twinkle effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes twinkleFade {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(0) rotate(0deg); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2) rotate(90deg); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0) rotate(180deg); }
        }
      `}} />
    </div>
  );
}