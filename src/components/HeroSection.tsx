
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 md:pt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <p className="font-mono text-accent mb-5 text-lg">Hi, my name is</p>
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Ebrahim <span className="text-accent">Elngar</span>.
          </h1>
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-light mb-8">
            I build things for the web.
          </h2>
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <p className="text-slate text-lg max-w-xl mb-10">
            I'm a <span className="text-accent">Front-End Developer</span> specializing in creating exceptional digital experiences. 
            Currently, I'm focused on building responsive web applications with clean code and optimized performance.
          </p>
        </div>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a href="#projects" className="btn-primary">
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
