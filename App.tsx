import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CookiePolicy from './components/CookiePolicy';

export type PageView = 'home' | 'privacy' | 'terms' | 'faq' | 'contact' | 'cookies';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | null, sectionId: string) => {
    if (e) e.preventDefault();
    
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for render then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Helper for footer to trigger section scroll
  const handleSectionNavigate = (sectionId: string) => {
    handleNavClick(null, sectionId);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavigate('home')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ks06ttrumobl7vg6g6x7x" 
                alt="Pocket Pastor Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="ml-3 text-xl font-serif font-bold text-text hidden sm:block">Pocket Pastor</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Features
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                Mission
              </a>
              <button className="bg-primary hover:bg-[#435525] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
                Download App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text hover:text-primary p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream border-b border-primary/10 shadow-soft animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className="block px-3 py-3 rounded-md text-base font-medium text-text hover:bg-surface hover:text-primary transition-colors"
              >
                Features
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="block px-3 py-3 rounded-md text-base font-medium text-text hover:bg-surface hover:text-primary transition-colors"
              >
                Mission
              </a>
              <div className="pt-4">
                <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-medium shadow-md">
                  Download App
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <Features />
            <About />
          </div>
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicy onBack={() => handleNavigate('home')} />
        )}
        {currentPage === 'terms' && (
          <TermsOfService onBack={() => handleNavigate('home')} />
        )}
        {currentPage === 'faq' && (
          <FAQ onBack={() => handleNavigate('home')} />
        )}
        {currentPage === 'contact' && (
          <Contact onBack={() => handleNavigate('home')} />
        )}
        {currentPage === 'cookies' && (
          <CookiePolicy onBack={() => handleNavigate('home')} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} onSectionClick={handleSectionNavigate} />
    </div>
  );
};

export default App;