import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-dark-bg pt-8 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <Link
          to="/"
          className="group inline-flex items-center text-textSecondary dark:text-dark-textSecondary hover:text-primary dark:hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-dark-text mb-6">Terms of Service</h1>
        <p className="text-textSecondary dark:text-dark-textSecondary text-lg mb-12">Effective Date: October 24, 2024</p>

        <div className="prose prose-stone prose-lg dark:prose-invert max-w-none font-body text-textSecondary dark:text-dark-textSecondary leading-relaxed">
          <p className="mb-6 text-xl text-text dark:text-dark-text font-serif italic">
            Welcome to Pocket Pastor. By accessing or using our mobile application, you agree to be bound by these Terms of Service.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">1. Acceptance of Terms</h3>
          <p className="mb-8">
            By downloading, installing, or using the Pocket Pastor app, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">2. Use of Service</h3>
          <p className="mb-4">
            Pocket Pastor provides digital tools for spiritual growth, including Bible verses, prayer tracking, and AI-assisted pastoral guidance. You agree to use these services only for lawful purposes and in accordance with these Terms.
          </p>
          <ul className="list-disc pl-5 mb-8 space-y-3 marker:text-primary">
            <li>You must be at least 13 years old to use this Service.</li>
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>You agree not to misuse the AI chat feature for harmful or illegal activities.</li>
          </ul>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">3. AI Disclaimer</h3>
          <p className="mb-8">
            The "Pastor Chat" feature is powered by Artificial Intelligence. While trained on biblical texts and theological data, it is a tool for guidance and reflection, not a replacement for professional counseling, mental health services, or human pastoral care.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">4. User Content</h3>
          <p className="mb-8">
            Any prayer requests, notes, or other content you create remains yours. Pocket Pastor claims no ownership over your personal spiritual data.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">5. Limitation of Liability</h3>
          <p className="mb-8">
            Pocket Pastor is provided "as is". We are not liable for any damages arising from your use of the app or inability to use the app.
          </p>

          <p className="italic text-sm text-textSecondary/60 dark:text-dark-textSecondary/40 mt-10 border-t border-primary/10 dark:border-white/5 pt-4">
            These Terms of Service are for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;