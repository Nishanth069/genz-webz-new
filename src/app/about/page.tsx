"use client";

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Shield, Sparkles, Cpu, Zap, Eye, Globe } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold tracking-[0.5em] uppercase text-white/60">
                    The Genesis of Zyxen
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-7xl md:text-[11rem] font-bold tracking-tighter leading-[0.8] text-white"
                >
                  BEYOND <br />
                  <span className="text-white/20">ORDINARY.</span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  We didn't start Zyxen to build websites. We started it to build the future of digital resonance.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Our Story - The "Why" */}
          <section className="py-32 border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-32 items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-10"
                >
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                    The Spark of <br />
                    <span className="text-white/30 italic font-light">ZYXEN Engineering.</span>
                  </h2>
                  <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                    <p>
                      Zyxen was born from a simple, yet profound realization: the digital world was becoming predictable. Every interface looked the same, every interaction felt mechanical, and the "soul" of engineering was being lost in favor of rapid templates.
                    </p>
                    <p>
                      We envisioned a collective where <span className="text-white">mathematical precision</span> meets <span className="text-white">artistic intuition</span>. A place where high-performance code isn't just a requirement, but a canvas.
                    </p>
                    <p>
                      Our journey began in a small workspace with a singular goal: to create "Invisible Engineering"—technology so fluid, so responsive, and so intuitive that it disappears, leaving only the experience. Today, Zyxen stands as a testament to those who refuse to settle for "good enough."
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/40 mb-3 font-bold">Foundation</p>
                    <h3 className="text-2xl font-bold tracking-tight text-white leading-tight italic">"If it's not perfect, it's not Zyxen."</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Philosophy Pillars */}
          <section className="py-32 bg-white/[0.01] border-y border-white/[0.03]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-16">
                {[
                  {
                    title: "Invisible Architecture",
                    description: "We build systems that are robust enough to handle the world, yet light enough to feel non-existent."
                  },
                  {
                    title: "Aesthetic Logic",
                    description: "Every pixel serves a purpose. We believe beauty is a functional requirement, not an aesthetic choice."
                  },
                  {
                    title: "Future Proofing",
                    description: "We don't build for today. We architect for what's coming, ensuring your legacy stays ahead of the curve."
                  }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-6"
                  >
                    <div className="h-px w-12 bg-white/20" />
                    <h3 className="text-2xl font-bold tracking-tight">{pillar.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed text-sm">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats/Legacy */}
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { label: "Founded", value: "2023" },
                  { label: "Projects", value: "150+" },
                  { label: "Regions", value: "12" },
                  { label: "Uptime", value: "99.9%" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</p>
                    <p className="text-4xl md:text-5xl font-bold tracking-tighter text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-40">
            <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                Ready to transcend <br />
                <span className="text-white/20 italic">the ordinary?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
              >
                Start Your Journey
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
