import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
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

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-dark-text mb-6">Cookie Policy</h1>
        <p className="text-textSecondary dark:text-dark-textSecondary text-lg mb-12">Effective Date: October 24, 2024</p>

        <div className="prose prose-stone prose-lg dark:prose-invert max-w-none font-body text-textSecondary dark:text-dark-textSecondary leading-relaxed">
          <p className="mb-6 text-xl text-text dark:text-dark-text font-serif italic">
            This Cookie Policy explains how Pocket Pastor uses cookies and similar technologies to recognize you when you visit our website or use our app.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">1. What are cookies?</h3>
          <p className="mb-8">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">2. How we use cookies</h3>
          <p className="mb-4">
            We use cookies for several reasons:
          </p>
          <ul className="list-disc pl-5 mb-8 space-y-3 marker:text-primary">
            <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Performance & Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.</li>
            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).</li>
          </ul>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">3. Managing cookies</h3>
          <p className="mb-8">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.
          </p>
          <p className="mb-8">
            If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
          </p>

          <h3 className="text-2xl font-bold text-text dark:text-dark-text mt-12 mb-6 font-serif border-b border-primary/10 dark:border-white/5 pb-2">4. Updates to this policy</h3>
          <p className="mb-8">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <p className="italic text-sm text-textSecondary/60 dark:text-dark-textSecondary/40 mt-10 border-t border-primary/10 dark:border-white/5 pt-4">
            This Cookie Policy is for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;