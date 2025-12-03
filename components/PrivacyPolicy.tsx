import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
      <Link
        to="/"
        className="group flex items-center text-textSecondary hover:text-primary transition-colors mb-8 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6">Privacy Policy</h1>
      <p className="text-textSecondary text-lg mb-12">Last Updated: October 24, 2024</p>

      <div className="prose prose-stone prose-lg max-w-none font-body text-textSecondary leading-relaxed">
        <p className="mb-6 text-xl text-text font-serif italic">
          At Pocket Pastor, we honor the trust you place in us. This Privacy Policy details how we collect, use, and protect your information, ensuring your spiritual journey remains personal and secure.
        </p>

        <h3 className="text-2xl font-bold text-text mt-12 mb-6 font-serif border-b border-primary/10 pb-2">1. Information Collection</h3>
        <p className="mb-4">
          We collect information to provide a seamless spiritual experience:
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-3 marker:text-primary">
          <li><strong>Personal Information:</strong> Data you voluntarily provide (name, email) when creating an account.</li>
          <li><strong>Usage Data:</strong> Anonymous metrics on feature usage to help us improve the app.</li>
          <li><strong>Prayer & Journal Data:</strong> Your private entries are encrypted and securely stored. We do not access the content of your personal prayers or notes.</li>
        </ul>

        <h3 className="text-2xl font-bold text-text mt-12 mb-6 font-serif border-b border-primary/10 pb-2">2. How We Use Information</h3>
        <p className="mb-4">
          Your data is used solely to:
        </p>
        <ul className="list-disc pl-5 mb-8 space-y-3 marker:text-primary">
          <li>Personalize your daily verses and content.</li>
          <li>Maintain and improve app functionality.</li>
          <li>Communicate important updates regarding the service.</li>
        </ul>

        <h3 className="text-2xl font-bold text-text mt-12 mb-6 font-serif border-b border-primary/10 pb-2">3. Data Protection</h3>
        <p className="mb-8">
          We implement industry-standard security measures to protect your personal information. Your spiritual data is treated with the highest level of confidentiality. We utilize end-to-end encryption for all prayer requests and journal entries.
        </p>

        <h3 className="text-2xl font-bold text-text mt-12 mb-6 font-serif border-b border-primary/10 pb-2">4. Contact Us</h3>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="font-bold text-primary">support@pocketpastor.app</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;