
import React, { useEffect, useState } from 'react';
import SkillBadge from './SkillBadge';

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const skills = [
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'React.js', color: 'bg-cyan-500' },
    { name: 'Redux Toolkit', color: 'bg-purple-500' },
    { name: 'Bootstrap', color: 'bg-indigo-500' },
    { name: 'Framer Motion', color: 'bg-pink-500' },
    { name: 'Git & GitHub', color: 'bg-gray-500' },
    { name: 'OOP', color: 'bg-green-500' },
    { name: 'Problem Solving', color: 'bg-red-500' },
    { name: 'RESTful APIs', color: 'bg-teal-500' },
    { name: 'Responsive Design', color: 'bg-blue-400' },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className={`mb-16 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title">01. About Me</h2>
          <h3 className="text-3xl font-bold mb-8">Get to know me</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-slate mb-4">
                Hello! I'm Ebrahim, a Front-End Developer passionate about building exceptional web experiences. 
                I enjoy creating efficient and user-friendly interfaces that bring designs to life with clean 
                code, animations, and optimized performance.
              </p>
              <p className="text-slate mb-4">
                I'm currently pursuing a B.Sc. in Computer Science from the Higher Institute of Engineering Technology, 
                Kafr El-Sheikh. I've been working as a Junior Front-End Developer at 4th-Pyramid since March 2025, 
                where I focus on building responsive web applications and integrating APIs.
              </p>
              <p className="text-slate mb-4">
                I also work as a Freelance Front-End Developer at Nexus Agency, specializing in React and 
                JavaScript to build scalable web applications with great user experiences.
              </p>
              <p className="text-slate">
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <div className="md:col-span-1 bg-navy-light p-6 rounded-lg border border-slate-dark/30">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <div className="mb-4">
                <p className="text-slate-light font-medium">B.Sc. Computer Science</p>
                <p className="text-slate">Higher Institute of Engineering Technology</p>
                <p className="text-slate">Kafr El-Sheikh</p>
                <p className="text-slate-dark text-sm">In Progress</p>
              </div>
              <h4 className="text-xl font-semibold mb-4">Certifications</h4>
              <div>
                <p className="text-slate-light font-medium">Front-End Developer Training</p>
                <p className="text-slate">SEFAcademy</p>
                <p className="text-slate-dark text-sm">2024 - 2025</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold mb-8">My Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillBadge 
                key={index} 
                name={skill.name} 
                color={skill.color}
                delay={0.1 * index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
