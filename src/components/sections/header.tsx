"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.setItem('showLoading', 'true');
    window.location.href = '/';
  };

  const handleWorkClick = () => {
    sessionStorage.setItem('skipLoading', 'true');
  };

  const navLinks = [
    { href: "/#crafted", label: "Work", onClick: handleWorkClick },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.05] py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 smooth-transition hover:opacity-80">
          <Image
            src="/previews/logo.png"
            alt="ZYXEN Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain filter invert"
          />
          <span className="text-white font-bold tracking-tighter text-lg">
            ZYXEN
          </span>
        </a>

        {/* Navigation - Always visible on all devices */}
        <nav className="flex items-center gap-5 md:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.onClick}
              className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white smooth-transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
