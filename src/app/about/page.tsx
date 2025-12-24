"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Shield, Sparkles, Zap, Cpu, Globe, Layers } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-[#050505] text-white antialiased selection:bg-white selection:text-black">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">
                    The Zyxen Protocol
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white"
                >
                  ENGINEERING <br />
                  THE UNSEEN.
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  We are a specialized engineering collective focused on the intersection of performance architecture and evocative digital design.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="py-40 border-t border-white/5 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-12">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                    Beyond the <br />
                    <span className="text-white/30 italic">Surface Layer.</span>
                  </h2>
                  <div className="space-y-8 text-white/50 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                      At ZYXEN, we believe that true elegance in software is found where most never look: in the architecture. We don't just build interfaces; we engineer ecosystems designed for longevity, speed, and absolute resilience.
                    </p>
                    <p>
                      Our philosophy is rooted in <span className="text-white">Invisible Engineering</span>—the art of creating experiences so fluid and intuitive that the technology itself disappears, leaving only the value it creates.
                    </p>
                  </div>
                </div>
                
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-xs uppercase tracking-[0.5em] text-white/40 mb-2">Our Aesthetic</p>
                    <h3 className="text-2xl font-bold tracking-tight">Obsessive. Minimal. Functional.</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Pillars */}
          <section className="py-40">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                {[
                  {
                    icon: <Cpu size={24} />,
                    title: "High-Scale Systems",
                    description: "Architecture built to withstand the demands of global scale without compromising on millisecond-level responsiveness."
                  },
                  {
                    icon: <Sparkles size={24} />,
                    title: "Evocative Design",
                    description: "Interfaces that don't just function, but feel. We prioritize human-centric motion and atmospheric aesthetics."
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Cryptographic Security",
                    description: "Security is baked into every line of code, ensuring your data and your users' trust remain impenetrable."
                  }
                ].map((pillar, i) => (
                  <div key={i} className="bg-[#050505] p-12 space-y-8 hover:bg-white/[0.02] transition-colors">
                    <div className="text-white/40">{pillar.icon}</div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                      <p className="text-white/40 font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="py-40 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">OUR SCOPE.</h2>
                <p className="text-white/30 font-mono text-sm uppercase tracking-widest">Global Operations / 2025</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                {[
                  "Intelligent Web Infrastructures",
                  "AI-Powered User Experiences",
                  "Performance Optimization Audit",
                  "Custom Enterprise Solutions",
                  "Brand Digital Transformation",
                  "Next-Gen Mobile Ecosystems"
                ].map((item, i) => (
                  <div key={i} className="group border-b border-white/10 pb-8 hover:border-white transition-colors cursor-default">
                    <span className="text-[10px] font-mono text-white/30 block mb-4">0{i+1}</span>
                    <h4 className="text-xl font-medium tracking-tight group-hover:pl-2 transition-all">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership CTA */}
          <section className="py-40 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
                Let's construct <br />
                the future.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
                >
                  Start an Enquiry
                </Link>
                <Link
                  href="/#crafted"
                  className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Browse Portfolio
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Shield, Sparkles, Zap, Cpu, Globe, Layers } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">
                    The Zyxen Protocol
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white"
                >
                  ENGINEERING <br />
                  THE UNSEEN.
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  We are a specialized engineering collective focused on the intersection of performance architecture and evocative digital design.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="py-40 border-t border-white/5 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-12">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                    Beyond the <br />
                    <span className="text-white/30 italic">Surface Layer.</span>
                  </h2>
                  <div className="space-y-8 text-white/50 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                      At ZYXEN, we believe that true elegance in software is found where most never look: in the architecture. We don't just build interfaces; we engineer ecosystems designed for longevity, speed, and absolute resilience.
                    </p>
                    <p>
                      Our philosophy is rooted in <span className="text-white">Invisible Engineering</span>—the art of creating experiences so fluid and intuitive that the technology itself disappears, leaving only the value it creates.
                    </p>
                  </div>
                </div>
                
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-xs uppercase tracking-[0.5em] text-white/40 mb-2">Our Aesthetic</p>
                    <h3 className="text-2xl font-bold tracking-tight">Obsessive. Minimal. Functional.</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Pillars */}
          <section className="py-40">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                {[
                  {
                    icon: <Cpu size={24} />,
                    title: "High-Scale Systems",
                    description: "Architecture built to withstand the demands of global scale without compromising on millisecond-level responsiveness."
                  },
                  {
                    icon: <Sparkles size={24} />,
                    title: "Evocative Design",
                    description: "Interfaces that don't just function, but feel. We prioritize human-centric motion and atmospheric aesthetics."
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Cryptographic Security",
                    description: "Security is baked into every line of code, ensuring your data and your users' trust remain impenetrable."
                  }
                ].map((pillar, i) => (
                  <div key={i} className="bg-[#050505] p-12 space-y-8 hover:bg-white/[0.02] transition-colors">
                    <div className="text-white/40">{pillar.icon}</div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                      <p className="text-white/40 font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="py-40 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">OUR SCOPE.</h2>
                <p className="text-white/30 font-mono text-sm uppercase tracking-widest">Global Operations / 2025</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                {[
                  "Intelligent Web Infrastructures",
                  "AI-Powered User Experiences",
                  "Performance Optimization Audit",
                  "Custom Enterprise Solutions",
                  "Brand Digital Transformation",
                  "Next-Gen Mobile Ecosystems"
                ].map((item, i) => (
                  <div key={i} className="group border-b border-white/10 pb-8 hover:border-white transition-colors cursor-default">
                    <span className="text-[10px] font-mono text-white/30 block mb-4">0{i+1}</span>
                    <h4 className="text-xl font-medium tracking-tight group-hover:pl-2 transition-all">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership CTA */}
          <section className="py-40 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
                Let's construct <br />
                the future.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
                >
                  Start an Enquiry
                </Link>
                <Link
                  href="/#crafted"
                  className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Browse Portfolio
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Shield, Sparkles, Zap, Cpu, Globe, Layers } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">
                    The Zyxen Protocol
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white"
                >
                  ENGINEERING <br />
                  THE UNSEEN.
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  We are a specialized engineering collective focused on the intersection of performance architecture and evocative digital design.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="py-40 border-t border-white/5 bg-[#080808]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-12">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                    Beyond the <br />
                    <span className="text-white/30 italic">Surface Layer.</span>
                  </h2>
                  <div className="space-y-8 text-white/50 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                      At ZYXEN, we believe that true elegance in software is found where most never look: in the architecture. We don't just build interfaces; we engineer ecosystems designed for longevity, speed, and absolute resilience.
                    </p>
                    <p>
                      Our philosophy is rooted in <span className="text-white">Invisible Engineering</span>—the art of creating experiences so fluid and intuitive that the technology itself disappears, leaving only the value it creates.
                    </p>
                  </div>
                </div>
                
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-xs uppercase tracking-[0.5em] text-white/40 mb-2">Our Aesthetic</p>
                    <h3 className="text-2xl font-bold tracking-tight">Obsessive. Minimal. Functional.</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-40 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-12 text-center"
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">THE GENESIS.</h2>
                <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/60">
                  <p>
                    ZYXEN wasn't born in a boardroom; it was born in the silence of late-night debugging and the shared frustration of watching the web become a template of itself. We saw engineering becoming a commodity and design becoming a layer of paint rather than the foundation.
                  </p>
                  <p>
                    We started ZYXEN to prove that performance and poetry can coexist. To build digital artifacts that don't just solve problems, but command presence. This website is our manifest—a testament to the belief that the most powerful engineering is often the most invisible.
                  </p>
                  <p className="text-white italic">
                    We don't just build for the web; we engineer for the human experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* The Pillars */}
          <section className="py-40">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                {[
                  {
                    icon: <Cpu size={24} />,
                    title: "High-Scale Systems",
                    description: "Architecture built to withstand the demands of global scale without compromising on millisecond-level responsiveness."
                  },
                  {
                    icon: <Sparkles size={24} />,
                    title: "Evocative Design",
                    description: "Interfaces that don't just function, but feel. We prioritize human-centric motion and atmospheric aesthetics."
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Cryptographic Security",
                    description: "Security is baked into every line of code, ensuring your data and your users' trust remain impenetrable."
                  }
                ].map((pillar, i) => (
                  <div key={i} className="bg-[#050505] p-12 space-y-8 hover:bg-white/[0.02] transition-colors">
                    <div className="text-white/40">{pillar.icon}</div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                      <p className="text-white/40 font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="py-40 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">OUR SCOPE.</h2>
                <p className="text-white/30 font-mono text-sm uppercase tracking-widest">Global Operations / 2025</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                {[
                  "Intelligent Web Infrastructures",
                  "AI-Powered User Experiences",
                  "Performance Optimization Audit",
                  "Custom Enterprise Solutions",
                  "Brand Digital Transformation",
                  "Next-Gen Mobile Ecosystems"
                ].map((item, i) => (
                  <div key={i} className="group border-b border-white/10 pb-8 hover:border-white transition-colors cursor-default">
                    <span className="text-[10px] font-mono text-white/30 block mb-4">0{i+1}</span>
                    <h4 className="text-xl font-medium tracking-tight group-hover:pl-2 transition-all">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership CTA */}
          <section className="py-40 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
                Let's construct <br />
                the future.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
                >
                  Start an Enquiry
                </Link>
                <Link
                  href="/#crafted"
                  className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Browse Portfolio
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Shield, Sparkles, Zap, Cpu, Globe, Layers } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">
                    The Zyxen Protocol
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white"
                >
                  ENGINEERING <br />
                  THE UNSEEN.
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  We are a specialized engineering collective focused on the intersection of performance architecture and evocative digital design.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="py-40 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="space-y-12">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                    Beyond the <br />
                    <span className="text-white/30 italic">Surface Layer.</span>
                  </h2>
                  <div className="space-y-8 text-white/50 text-lg md:text-xl font-light leading-relaxed">
                    <p>
                      At ZYXEN, we believe that true elegance in software is found where most never look: in the architecture. We don't just build interfaces; we engineer ecosystems designed for longevity, speed, and absolute resilience.
                    </p>
                    <p>
                      Our philosophy is rooted in <span className="text-white">Invisible Engineering</span>—the art of creating experiences so fluid and intuitive that the technology itself disappears, leaving only the value it creates.
                    </p>
                  </div>
                </div>
                
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-xs uppercase tracking-[0.5em] text-white/40 mb-2">Our Aesthetic</p>
                    <h3 className="text-2xl font-bold tracking-tight">Obsessive. Minimal. Functional.</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-40 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-12 text-center"
              >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">THE GENESIS.</h2>
                <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-white/60">
                  <p>
                    ZYXEN wasn't born in a boardroom; it was born in the silence of late-night debugging and the shared frustration of watching the web become a template of itself. We saw engineering becoming a commodity and design becoming a layer of paint rather than the foundation.
                  </p>
                  <p>
                    We started ZYXEN to prove that performance and poetry can coexist. To build digital artifacts that don't just solve problems, but command presence. This website is our manifest—a testament to the belief that the most powerful engineering is often the most invisible.
                  </p>
                  <p className="text-white italic">
                    We don't just build for the web; we engineer for the human experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* The Pillars */}
          <section className="py-40">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                {[
                  {
                    icon: <Cpu size={24} />,
                    title: "High-Scale Systems",
                    description: "Architecture built to withstand the demands of global scale without compromising on millisecond-level responsiveness."
                  },
                  {
                    icon: <Sparkles size={24} />,
                    title: "Evocative Design",
                    description: "Interfaces that don't just function, but feel. We prioritize human-centric motion and atmospheric aesthetics."
                  },
                  {
                    icon: <Shield size={24} />,
                    title: "Cryptographic Security",
                    description: "Security is baked into every line of code, ensuring your data and your users' trust remain impenetrable."
                  }
                ].map((pillar, i) => (
                  <div key={i} className="bg-[#050505] p-12 space-y-8 hover:bg-white/[0.02] transition-colors">
                    <div className="text-white/40">{pillar.icon}</div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                      <p className="text-white/40 font-light leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="py-40 bg-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">OUR SCOPE.</h2>
                <p className="text-white/30 font-mono text-sm uppercase tracking-widest">Global Operations / 2025</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
                {[
                  "Intelligent Web Infrastructures",
                  "AI-Powered User Experiences",
                  "Performance Optimization Audit",
                  "Custom Enterprise Solutions",
                  "Brand Digital Transformation",
                  "Next-Gen Mobile Ecosystems"
                ].map((item, i) => (
                  <div key={i} className="group border-b border-white/10 pb-8 hover:border-white transition-colors cursor-default">
                    <span className="text-[10px] font-mono text-white/30 block mb-4">0{i+1}</span>
                    <h4 className="text-xl font-medium tracking-tight group-hover:pl-2 transition-all">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership CTA */}
          <section className="py-40 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
                Let's construct <br />
                the future.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
                >
                  Start an Enquiry
                </Link>
                <Link
                  href="/#crafted"
                  className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Browse Portfolio
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
