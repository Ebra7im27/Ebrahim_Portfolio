
import React from 'react';
import { Link } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    category: string;
  };
  index: number;
  visible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, visible }) => {
  return (
    <div 
      className={`project-card bg-navy-light p-6 rounded-lg border border-slate-dark/30 relative overflow-hidden transition-all duration-500 hover:translate-y-[-5px] ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`} 
      style={{ 
        animationDelay: `${0.1 * (index % 3)}s`,
        animationFillMode: 'forwards' 
      }}
    >
      <div className="flex justify-between items-start mb-5">
        <div className="font-mono text-accent text-lg">{String(project.id).padStart(2, '0')}</div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate hover:text-accent transition-colors duration-300"
          aria-label="External Link"
        >
          <Link size={20} />
        </a>
      </div>
      
      <h4 className="text-xl font-bold mb-3 text-white">{project.title}</h4>
      <p className="text-slate mb-6">{project.description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="text-xs font-mono text-accent bg-navy/60 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
