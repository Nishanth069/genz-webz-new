"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Rocket, Paintbrush, Shield, ArrowRight, Target, Zap, Heart, Code } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-triggered');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500/30">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,28,135,0.15),transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-10"
              >
                  <motion.div variants={fadeInUp} className="flex justify-center">
                    <span className="px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase backdrop-blur-sm">
                      Distinction in Engineering
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent"
                  >
                    Defining the <br />
                    Invisible Standard.
                  </motion.h1>
                  
                  <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
                  >
                    ZYXEN is a boutique collective of artisans and engineers dedicated to the pursuit of digital perfection.
                  </motion.p>

              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-500"
            >
              <span className="text-[10px] uppercase tracking-[0.4em]">Scroll to explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
            </motion.div>
          </section>

          {/* Philosophy Section */}
          <section className="py-32 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                      The Geometry of <br />
                      <span className="text-purple-500 italic font-medium">Digital Artistry.</span>
                    </motion.h2>
                    <motion.div variants={fadeInUp} className="space-y-6 text-zinc-500 text-lg leading-relaxed font-light">
                      <p>
                        We operate at the delicate intersection of logic and beauty. Where others see software as a utility, we see it as a canvas for technical excellence.
                      </p>
                      <p>
                        The ZYXEN ethos is rooted in the fusion of <span className="text-white">Kinetic Velocity</span> and <span className="text-white">Infinite Horizon</span>. We craft ecosystems that are as resilient as they are breathtaking.
                      </p>
                    </motion.div>

                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 group"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcbb9c8?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-black/40 rounded-2xl border border-white/10">
                    <p className="text-sm font-light italic text-white/80">"Architecture is the learned game, correct and magnificent, of forms assembled in the light."—Le Corbusier</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Pillars */}
          <section className="py-32 bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Fundamentals</h2>
                  <div className="w-24 h-[1px] bg-purple-500/50 mx-auto" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    {
                      icon: <Zap className="w-8 h-8 text-purple-500" />,
                      title: "Frictionless Velocity",
                      desc: "Performance is an absolute. We engineer environments that respond at the speed of thought, ensuring your vision is never hindered by latency."
                    },
                    {
                      icon: <Target className="w-8 h-8 text-purple-500" />,
                      title: "Surgical Precision",
                      desc: "Complexity refined. We dissect intricate problems to deliver solutions that are robust, scalable, and meticulously executed to the last pixel."
                    },
                    {
                      icon: <Heart className="w-8 h-8 text-purple-500" />,
                      title: "Aesthetic Intent",
                      desc: "Beauty with purpose. Every design decision is an invitation into a world where form and function exist in seamless, evocative harmony."
                    }
                  ].map((pillar, i) => (
px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-lg"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}

                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-purple-500/20 transition-colors group"
                  >
                    <div className="mb-6 p-4 rounded-2xl bg-purple-500/5 w-fit group-hover:bg-purple-500/10 transition-colors">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Capabilities */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">Expertise Redefined.</h2>
                  <p className="text-zinc-400 text-lg">Our multi-disciplinary team dissolves the boundaries between software, strategy, and design.</p>
                </div>
                <div className="text-purple-500 font-mono text-sm tracking-widest">EST. 2025</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
                {[
                  "Intelligent Web Platforms",
                  "Generative UI Engineering",
                  "High-Scale Architecture",
                  "Predictive Analytics Integration",
                  "Brand Identity Design",
                  "Cross-Platform Ecosystems"
                ].map((skill, i) => (
                  <div key={i} className="bg-black p-12 hover:bg-zinc-900/50 transition-colors group">
                    <span className="text-zinc-600 block mb-6 font-mono text-xs">0{i+1}</span>
                    <h4 className="text-xl font-medium group-hover:text-purple-400 transition-colors">{skill}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-40">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center space-y-12">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Ready to Build <br />
                  the Exceptional?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/contact"
                    className="group relative px-10 py-5 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105"
                  >
                    <span className="relative z-10">Initiate Partnership</span>
                    <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="/#crafted"
                    className="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-lg"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
