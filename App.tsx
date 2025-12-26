import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CookiePolicy from './components/CookiePolicy';

// Wrapper component to handle scroll-to-top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // Default to dark mode unless explicitly set to light
      return savedTheme !== 'light';
    }
    return true;
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | null, sectionId: string) => {
    if (e) e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
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

  return (
    <div className="min-h-screen bg-cream dark:bg-dark-bg flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-primary/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ks06ttrumobl7vg6g6x7x"
                alt="Pocket Pastor Logo"
                className="h-12 w-auto object-contain brightness-100 dark:brightness-110"
              />
              <span className="ml-3 text-xl font-serif font-bold text-text dark:text-dark-text hidden sm:block">Pocket Pastor</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/#features"
                onClick={(e) => handleNavClick(e, 'features')}
                className="text-text dark:text-dark-text/80 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-text dark:text-dark-text/80 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                Mission
              </a>
              <Link
                to="/about-us"
                className="text-text dark:text-dark-text/80 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                About Us
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-full bg-surface dark:bg-dark-surface text-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-800 transition-all border border-primary/10 dark:border-white/5 shadow-sm"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>

              <button className="bg-primary hover:bg-[#435525] dark:bg-primary dark:hover:bg-accent text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
                Download App
              </button>
            </div>

            {/* Mobile menu and Dark Mode Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-text dark:text-dark-text hover:bg-surface dark:hover:bg-dark-surface transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text dark:text-dark-text hover:text-primary p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-cream dark:bg-dark-bg border-b border-primary/10 dark:border-white/5 shadow-soft animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a
                href="/#features"
                onClick={(e) => handleNavClick(e, 'features')}
                className="block px-3 py-3 rounded-md text-base font-medium text-text dark:text-dark-text/80 hover:bg-surface dark:hover:bg-dark-surface hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="block px-3 py-3 rounded-md text-base font-medium text-text dark:text-dark-text/80 hover:bg-surface dark:hover:bg-dark-surface hover:text-primary transition-colors"
              >
                Mission
              </a>
              <Link
                to="/about-us"
                className="block px-3 py-3 rounded-md text-base font-medium text-text dark:text-dark-text/80 hover:bg-surface dark:hover:bg-dark-surface hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
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
        {children}
      </main>

      <Footer />
    </div>
  );
};

const HomePage = () => (
  <div className="animate-fade-in">
    <Hero />
    <Features />
    <About />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;