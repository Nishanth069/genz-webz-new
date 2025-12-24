"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sessionStorage.setItem('showLoading', 'true');
    window.location.href = '/';
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    sessionStorage.setItem('skipLoading', 'true');
  };

  const navLinks = [
    { href: "/#crafted", label: "Work", onClick: handleWorkClick },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-black/40 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 smooth-transition hover:opacity-80">
          <Image
            src="/previews/logo.png"
            alt="ZYXEN Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain filter invert"
          />
          <span className="text-logo text-white font-bold tracking-tighter">
            <span className="text-[1.5rem]">Z</span>YXEN
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.onClick}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white smooth-transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white/70 hover:text-white transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-white/10 backdrop-blur-xl w-full sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-white font-bold tracking-tighter text-left">
                  <span className="text-xl">Z</span>YXEN
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-8 mt-12 px-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={link.onClick}
                    className="text-2xl font-bold tracking-tighter text-white/50 hover:text-white transition-all hover:pl-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  className="mt-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full text-center"
                >
                  Start Project
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA */}
        <a 
          href="/contact" 
          className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-white border border-white/20 px-6 py-2.5 rounded-full backdrop-blur-md bg-white/5 hover:bg-white hover:text-black transition-all duration-300 font-bold"
        >
          Start
        </a>
      </div>
    </header>
  );
};

export default Header;