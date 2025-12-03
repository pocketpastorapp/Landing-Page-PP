import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSectionClick: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onSectionClick }) => {
  return (
    <footer className="bg-white border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
              <img 
                src="https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ks06ttrumobl7vg6g6x7x" 
                alt="Pocket Pastor Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="ml-2 text-lg font-serif font-bold text-text">Pocket Pastor</span>
            </div>
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
                <button onClick={() => onSectionClick('features')} className="hover:text-primary transition-colors text-left">Features</button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-primary transition-colors text-left">FAQ</button>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-text mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>
                 <button onClick={() => onSectionClick('about')} className="hover:text-primary transition-colors text-left">About Us</button>
              </li>
              <li>
                 <button onClick={() => onNavigate('contact')} className="hover:text-primary transition-colors text-left">Contact</button>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-text mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-textSecondary">
              <li>
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('terms')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Cookie Policy
                </button>
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