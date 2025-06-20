
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.querySelector('#projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Modern-Cars Website',
      description: 'A responsive car showcase website using float-based layout with smooth animations and interactive elements.',
      tags: ['HTML', 'CSS'],
      link: 'https://ebra7im27.github.io/Modern-Cars/',
      category: 'web',
    },
    {
      id: 2,
      title: 'Apple Website Clone',
      description: 'A responsive clone of Apple website using modern CSS Flexbox and Grid for layout structure and animations.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Grid'],
      link: 'https://ebra7im27.github.io/Apple/',
      category: 'web',
    },
    {
      id: 3,
      title: 'adidas-Egypt Website',
      description: 'A responsive e-commerce website for Adidas Egypt with Bootstrap grid and custom responsive navigation menu.',
      tags: ['HTML5', 'CSS3', 'Bootstrap'],
      link: 'https://ebra7im27.github.io/adidas-Egypt/',
      category: 'ecommerce',
    },
    {
      id: 4,
      title: 'Fluency-Quest',
      description: 'An e-commerce user interface with shopping cart functionality and interactive product previews.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://ebra7im27.github.io/Fluency-Quest/',
      category: 'ecommerce',
    },
    {
      id: 5,
      title: 'Proj-Portfolio',
      description: 'A multi-page portfolio website built with React Router for seamless navigation between project showcases.',
      tags: ['HTML5', 'CSS3', 'React.js '],
      link: 'https://proj-portfolio-sigma.vercel.app/',
      category: 'portfolio',
    },
    {
      id: 6,
      title: 'ToDo List',
      description: 'A task manager application built with React, featuring drag-and-drop organization and filter functionality.',
      tags: ['HTML5', 'CSS3', 'React.js', 'JavaScript'],
      link: 'https://to-do-list-web-two.vercel.app/',
      category: 'app',
    },
    {
      id: 7,
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with Redux for state management, user authentication, and order processing.',
      tags: ['HTML5', 'CSS3', 'React.js', 'JavaScript', 'Redux', 'API'],
      link: 'https://e-commerce-rouge-sigma.vercel.app/',
      category: 'ecommerce',
    },
    {
      id: 8,
      title: 'Demo University Website',
      description: 'A university system user interface with course catalog, student portal, and administrative dashboard.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
      link: 'https://demo-project-lilac.vercel.app/login',
      category: 'web',
    },
    {
      id: 9,
      title: 'Weather App',
      description: 'A real-time weather application with geolocation and forecast data visualization using external weather API.',
      tags: ['HTML5', 'CSS3', 'React.js', 'JavaScript', 'API'],
      link: 'https://weather-app-opal-two-64.vercel.app/',
      category: 'app',
    },
    {
      id: 10,
      title: 'Cold Room Bussma',
      description: 'A modern industrial website for a cold room solutions company, featuring a clean layout and service-focused interface built with React.',
      tags: ['Next.js', 'JavaScript', 'Tailwind CSS', 'API'],
      link: 'https://cold-room-bussma-front.vercel.app/',
      category: 'web',
    }

  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Websites' },
    { id: 'app', name: 'Applications' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'portfolio', name: 'Portfolio' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className={`mb-12 ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="section-title">03. Projects</h2>
          <h3 className="text-3xl font-bold mb-8">Some Things I've Built</h3>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 ${filter === category.id
                  ? 'bg-accent text-navy font-medium'
                  : 'bg-navy-light text-slate hover:text-accent'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
