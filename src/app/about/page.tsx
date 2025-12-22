"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Rocket, Paintbrush, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-trigger-item');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

    return (
      <SmoothTransitionsProvider>
        <div className="min-h-screen bg-black text-white antialiased">
          <Header />
          <main>
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full"
                >
                  About ZYXEN
                </motion.span>
                
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent"
                >
                  Architecting Elegance in the Digital Frontier.
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
                >
                  At ZYXEN, we synthesize technical mastery with avant-garde design to craft digital ecosystems that transcend conventional boundaries.
                </motion.p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/50 to-black" />
            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-12"
              >
                <div className="text-center space-y-4">
                  <motion.h2
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold"
                  >
                    THE ZYXEN STORY
                  </motion.h2>
                  <motion.p
                    variants={fadeInUp}
                    className="text-purple-400 font-mono text-sm tracking-widest"
                  >
                    PRONOUNCED: "ZY-ZEN"
                  </motion.p>
                </div>
                
                  <motion.div
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-shadow" />
                    <div className="pl-8 space-y-6">
                      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                        ZYXEN is the linguistic convergence of kinetic vitality and nascent horizons.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed text-justify font-light">
                        Born from a desire to harmonize raw engineering power with sophisticated aesthetics, our name encapsulates our dual nature. 
                        <span className="text-white font-semibold"> "Zy"</span> evokes the kinetic momentum and competitive edge essential in the modern technological landscape. 
                        <span className="text-white font-semibold"> "Xen"</span>, derived from the Greek <span className="italic text-purple-300">xenos</span>, signifies our dedication to exploring the unknown, welcoming future challenges as distinguished guests.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-shadow" />
                    <div className="pl-8 space-y-6">
                      <p className="text-lg text-gray-300 leading-relaxed text-justify font-light">
                        We established ZYXEN on the premise that technology should be an instrument of profound impact. We identified an industry-wide dissonance between products that possess visual appeal and those that demonstrate true performance. ZYXEN was engineered to eliminate this divide, delivering solutions defined by intelligence, elegance, and surgical precision.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-shadow" />
                    <div className="pl-8 space-y-6">
                      <p className="text-lg text-gray-300 leading-relaxed text-justify font-light">
                        Every engagement within our studio is an opportunity to push the zenith of digital engineering. Our narrative is one of relentless refinement—a continuous quest to provide visionary brands with the technical architecture they deserve.
                      </p>
                    </div>
                  </motion.div>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-b from-black to-slate-950/30">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center space-y-4 mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold"
                >
                  WHAT DRIVES US
                </motion.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                  <motion.div
                    variants={scaleIn}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl font-bold text-white">Intuitive Intellect</h3>
                      <p className="text-gray-400 leading-relaxed font-light">
                        We develop cognitive digital solutions that solve complex challenges with lucidity and profound purpose.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl font-bold text-white">Engineered Mastery</h3>
                      <p className="text-gray-400 leading-relaxed font-light">
                        Transcending code through scalable architecture and performance-centric systems design.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl font-bold text-white">Aesthetic Precision</h3>
                      <p className="text-gray-400 leading-relaxed font-light">
                        Meticulous design that harmonizes high-fidelity usability with distinctive brand identity.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleIn}
                    className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl font-bold text-white">Future Ascendance</h3>
                      <p className="text-gray-400 leading-relaxed font-light">
                        An unwavering commitment to evolution, ensuring our partners remain at the vanguard of innovation.
                      </p>
                    </div>
                  </motion.div>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-b from-slate-950/30 to-black">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="text-center space-y-4 mb-16"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block text-sm font-semibold uppercase tracking-[0.15em] text-purple-400"
                >
                  Who We Are
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold"
                >
                  Our Core Strengths
                </motion.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { title: "Innovation-Driven", desc: "We build forward-thinking digital solutions powered by creativity and modern engineering principles." },
                  { title: "Expert Engineering", desc: "Our skilled engineers craft scalable, reliable, and high-performance software systems." },
                  { title: "User-Focused", desc: "We design intuitive, user-centered products that deliver seamless digital experiences." },
                  { title: "Scalable Systems", desc: "We develop future-proof systems engineered for long-term business growth and evolution." },
                  { title: "End-to-End Solutions", desc: "We handle the full product lifecycle, delivering complete and dependable solutions." },
                  { title: "Seamless Delivery", desc: "We ensure smooth collaboration with clear communication and predictable delivery timelines." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-3 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={scaleIn}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900 to-slate-900 border border-purple-500/20 p-12 md:p-16 text-center"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_50%)]" />
                
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Let's Build Something Amazing Together.
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Ready to transform your vision into reality? Let's create digital experiences that define your brand.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:scale-105"
                    >
                      Work With Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}