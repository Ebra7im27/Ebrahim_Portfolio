
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.querySelector('#contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="contact" className="py-16 md:py-32 bg-navy-dark">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <div className={visible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="section-title">04. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h3>
          <p className="text-slate text-lg mb-12 mx-auto max-w-xl">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll do my best to get back to you!
          </p>

          <a href="https://wa.me/201068054735" target='_blank' className="btn-primary text-base px-8 py-4">
            Say Hello
          </a>

          <div className="mt-16 flex justify-center space-x-8">
            <a
              href="https://github.com/Ebra7im27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ebrahim-elngar-6860a2333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://t.me/Ebrahim_elngar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-accent transition-colors duration-300"
              aria-label="Website"
            >
              <Send size={24} />
            </a>
            <a
              href="mailto:ebrahimmohamed2325@gmail.com"
              className="text-slate hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
