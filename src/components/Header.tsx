
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import LogoPer from '../assets/LogoPer.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01. About', href: '#about' },
    { name: '02. Experience', href: '#experience' },
    { name: '03. Projects', href: '#projects' },
    { name: '04. Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white font-heading">
          {/* <span className="text-accent">E</span>lngar */}
          <span>
            <img src={LogoPer} alt="Logo Personal" width={175} />
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/18SChbqWhzv0pK9TxuBsePQd0SxcHXay6/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-slate hover:text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-navy-light shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="text-slate hover:text-accent"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-8 mt-16">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-8">
            <a
              href="https://drive.google.com/file/d/18SChbqWhzv0pK9TxuBsePQd0SxcHXay6/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
