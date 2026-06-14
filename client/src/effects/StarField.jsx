import React, { useMemo } from "react";

export default function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 6}s`,
        opacity: Math.random() * 0.5 + 0.1,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            "--tw-opacity": s.opacity,
          }}
        />
      ))}

      {/* inline keyframes for twinkle since Tailwind won't generate dynamic opacity values */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: var(--tw-opacity, 0.4); }
        }
      `}</style>
    </div>
  );
}
