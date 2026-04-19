'use client';

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  useEffect(() => {
    // Lenis smooth scroll
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        const raf = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};
        requestAnimationFrame(raf);

        return () => lenis.destroy();
      } catch (e) {
        // Lenis not available, use native scroll
      }
    };

    initLenis();
  }, []);

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
