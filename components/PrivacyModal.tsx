import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-cream rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up border border-white/50">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-primary/10 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-serif font-bold text-text">Privacy Policy</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-textSecondary transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          <div className="prose prose-stone max-w-none font-body text-textSecondary leading-relaxed">
            <p className="mb-6"><strong>Last Updated:</strong> October 24, 2024</p>
            
            <p className="mb-6">
              At Pocket Pastor, we honor the trust you place in us. This Privacy Policy details how we collect, use, and protect your information, ensuring your spiritual journey remains personal and secure.
            </p>

            <h3 className="text-xl font-bold text-text mt-8 mb-4 font-serif">1. Information Collection</h3>
            <p className="mb-4">
              We collect information to provide a seamless spiritual experience:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-primary">
              <li><strong>Personal Information:</strong> Data you voluntarily provide (name, email) when creating an account.</li>
              <li><strong>Usage Data:</strong> Anonymous metrics on feature usage to help us improve the app.</li>
              <li><strong>Prayer & Journal Data:</strong> Your private entries are encrypted and securely stored. We do not access the content of your personal prayers or notes.</li>
            </ul>

            <h3 className="text-xl font-bold text-text mt-8 mb-4 font-serif">2. How We Use Information</h3>
            <p className="mb-4">
              Your data is used solely to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 marker:text-primary">
              <li>Personalize your daily verses and content.</li>
              <li>Maintain and improve app functionality.</li>
              <li>Communicate important updates regarding the service.</li>
            </ul>

            <h3 className="text-xl font-bold text-text mt-8 mb-4 font-serif">3. Data Protection</h3>
            <p className="mb-6">
              We implement industry-standard security measures to protect your personal information. Your spiritual data is treated with the highest level of confidentiality.
            </p>
            
            <p className="italic text-sm text-textSecondary/60 mt-10 border-t border-primary/10 pt-4">
              This is a demonstration Privacy Policy for the Pocket Pastor landing page.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-primary/10 bg-white/50 backdrop-blur-sm flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-[#435525] transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;