'use client';

import { useEffect } from 'react';
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
    let lenis: any;

    // Lenis smooth scroll initialization
    const initLenis = async () => {
      try {
        const LenisModule = (await import('lenis')).default;
        
        lenis = new LenisModule({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });

        // Fixed: Defined as a const arrow function to avoid ES5 strict mode errors
        const raf = (time: number) => {
          if (lenis) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
        };

        requestAnimationFrame(raf);
      } catch (e) {
        console.error('Lenis failed to initialize:', e);
      }
    };

    initLenis();

    // Proper cleanup outside the async scope
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
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