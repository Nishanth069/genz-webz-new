"use client";

import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.setItem('showLoading', 'true');
    window.location.href = '/';
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sessionStorage.setItem('skipLoading', 'true');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-black/20 backdrop-blur-lg border-b border-white/[0.05] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 smooth-transition hover:opacity-80">
          <Image
            src="/previews/logo.png"
            alt="ZYXEN Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-logo text-white font-bold tracking-tighter">
            <span className="text-[1.5rem]">Z</span>YXEN
          </span>
        </a>

          <nav className="hidden md:flex items-center gap-10">
            <a
              href="/#crafted"
              onClick={handleWorkClick}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white smooth-transition"
            >
              Work
            </a>
            <a
              href="/about"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white smooth-transition"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white smooth-transition"
            >
              Contact
            </a>
          </nav>

          <a 
            href="/contact" 
            className="md:hidden text-xs uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded-full backdrop-blur-md bg-white/5"
          >
            Start
          </a>
      </div>
    </header>
  );
};

export default Header;