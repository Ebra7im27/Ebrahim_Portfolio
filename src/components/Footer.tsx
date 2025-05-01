
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-dark bg-navy-dark border-t border-slate-dark/10">
      <div className="container mx-auto px-4">
        {/* <p className="text-sm font-mono">
          Designed & Built by Ebrahim Mohamed Elngar
        </p> */}
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
