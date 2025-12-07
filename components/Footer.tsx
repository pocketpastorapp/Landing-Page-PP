import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-3 md:col-span-1">
            <Link to="/" className="flex items-center mb-4 cursor-pointer">
              <img
                src="https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ks06ttrumobl7vg6g6x7x"
                alt="Pocket Pastor Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="ml-2 text-lg font-serif font-bold text-text">Pocket Pastor</span>
            </Link>
            <p className="text-textSecondary text-sm leading-relaxed mb-6">
              Your daily companion for spiritual growth, prayer, and biblical wisdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textSecondary hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-textSecondary hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-text mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>
                <button onClick={() => handleSectionClick('features')} className="hover:text-primary transition-colors text-left">Features</button>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors text-left">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-text mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>
                <Link to="/about-us" className="hover:text-primary transition-colors text-left">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors text-left">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-text mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-primary transition-colors text-left"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-primary transition-colors text-left"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="hover:text-primary transition-colors text-left"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-textSecondary/60">
          <p>© 2026 Pocket Pastor. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="italic">Soli Deo Gloria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;