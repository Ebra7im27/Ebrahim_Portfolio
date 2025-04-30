
import React from 'react';

interface SkillBadgeProps {
  name: string;
  color: string;
  delay?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, color, delay = 0 }) => {
  return (
    <div 
      className={`px-4 py-2 rounded-full border border-slate-dark/30 flex items-center animate-fade-in opacity-0`}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards' 
      }}
    >
      <div className={`w-2 h-2 rounded-full ${color} mr-2`}></div>
      <span className="font-mono text-sm text-slate-light">{name}</span>
    </div>
  );
};

export default SkillBadge;
