import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox, { type LightboxImage } from "./components/Lightbox";

export default function App() {
  // Always return to top/landing page on refresh
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Immediately scroll to landing page
    window.scrollTo(0, 0);

    // If a hash exists in the URL (e.g. #projects), remove it so the browser doesn't scroll down
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }

    const onBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: LightboxImage[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const handleOpenLightbox = (images: LightboxImage[], index: number = 0) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: newIndex,
    }));
  };

  return (
    <div className="relative min-h-screen font-sans antialiased selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience onOpenImage={handleOpenLightbox} />
        <Projects onOpenImage={handleOpenLightbox} />
        <Skills />
        <Education />
        <Certifications onOpenImage={handleOpenLightbox} />
        <Contact />
      </main>
      <Footer />

      {/* Global Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
