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
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-black/40 backdrop-blur-xl border-b border-white/[0.03] transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 smooth-transition hover:opacity-80">
            <Image
              src="/previews/logo.png"
              alt="ZYXEN Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain filter invert"
            />
            <span className="text-logo text-white font-bold tracking-tighter">
              <span className="text-[1.2rem]">Z</span>YXEN
            </span>
          </a>
  
          {/* Navigation - Always visible now */}
          <nav className="flex items-center gap-6 md:gap-10">
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