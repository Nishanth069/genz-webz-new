"use client";

import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
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
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="flex justify-center">
                  <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[9px] font-bold tracking-[0.5em] uppercase text-white/60">
                    Established 2023
                  </span>
                </motion.div>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] text-white"
                >
                  ENGINEERING <br />
                  <span className="text-white/20 italic font-light">EXCELLENCE.</span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-tight"
                >
                  At Zyxen, we blend mathematical precision with artistic intuition to create digital experiences that resonate.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Core Content - Elegant Story */}
          <section className="py-32 border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-32 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="space-y-10"
                >
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                    Crafting the <br />
                    <span className="text-white/30 italic font-light">Digital Future.</span>
                  </h2>
                  <div className="space-y-6 text-white/50 text-lg leading-relaxed font-light">
                    <p>
                      Zyxen was born from a vision to bridge the gap between complex engineering and human-centric design. We believe that technology should be an invisible enabler, allowing stories to be told and businesses to thrive without friction.
                    </p>
                    <p>
                      Our philosophy is rooted in "Invisible Engineering"—building systems so robust and fluid that they disappear into the background, leaving only the experience.
                    </p>
                    <p className="text-white italic pt-4 border-l border-white/20 pl-6">
                      "If it's not perfect, it's not Zyxen."
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02]"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Section - Numbers from current version */}
          <section className="py-32 bg-white/[0.01] border-y border-white/[0.03]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { label: "Founded", value: "2023" },
                  { label: "Projects", value: "150+" },
                  { label: "Regions", value: "12" },
                  { label: "Uptime", value: "99.9%" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-2 text-center md:text-left"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</p>
                    <p className="text-4xl md:text-6xl font-bold tracking-tighter text-white">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Legacy/Mission Section */}
          <section className="py-40">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
              >
                Building for the <br />
                <span className="text-white/20 italic">Next Generation.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/40 text-lg font-light max-w-2xl mx-auto"
              >
                We don't just build websites; we architect digital legacies. Join us in redefining the boundaries of what's possible in the modern web.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
