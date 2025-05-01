
import React, { useEffect, useState } from 'react';

const ExperienceSection = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.querySelector('#experience');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 bg-navy-dark">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className={`mb-12 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title">02. Experience</h2>
          <h3 className="text-3xl font-bold mb-8">Where I've Worked</h3>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-slate-dark transform md:-translate-x-1/2"></div>
          
          {/* 4th-Pyramid */}
          <div className={`relative mb-12 md:mb-24 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-accent transform translate-x-1.5"></div>
                <p className="font-mono text-accent text-sm">MARCH 2025 - PRESENT</p>
                <h4 className="text-2xl font-bold my-2">Junior Front-End Developer</h4>
                <p className="text-white text-lg">4th-Pyramid</p>
              </div>
              <div className="md:pl-12">
                <div className="md:hidden absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-1.5"></div>
                <ul className="text-slate space-y-3 list-disc pl-5">
                  <li>Built responsive web applications using React.js&nbsp;&nbsp;&nbsp; and modern JavaScript (ES6+)</li>
                  <li>Integrated RESTful APIs to create dynamic user experiences</li>
                  <li>Collaborated with designers to implement visually appealing interfaces</li>
                  <li>Optimized front-end performance and accessibility</li>
                  <li>Participated in code reviews and adhered to best practices</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Nexus Agency */}
          <div className={`relative ${visible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="md:grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full bg-accent transform translate-x-1.5"></div>
                <p className="font-mono text-accent text-sm">FREELANCE WORK</p>
                <h4 className="text-2xl font-bold my-2">Freelance Front-End Developer</h4>
                <p className="text-white text-lg">Nexus Agency</p>
              </div>
              <div className="md:pl-12">
                <div className="md:hidden absolute left-0 top-0 w-3 h-3 rounded-full bg-accent -translate-x-1.5"></div>
                <ul className="text-slate space-y-3 list-disc pl-5">
                  <li>Specialized in React.js and JavaScript to build scalable web applications</li>
                  <li>Created responsive layouts using CSS Grid and Flexbox</li>
                  <li>Implemented animations and interactive elements to enhance user experience</li>
                  <li>Developed interfaces with clean and maintainable code</li>
                  <li>Worked directly with clients to understand requirements and deliver solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
