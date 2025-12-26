import React from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-primary/10 dark:border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-serif font-bold transition-colors ${isOpen ? 'text-primary' : 'text-text dark:text-dark-text group-hover:text-primary'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="text-primary" /> : <Plus className="text-textSecondary dark:text-dark-textSecondary" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-textSecondary dark:text-dark-textSecondary leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is Pocket Pastor free to use?",
      answer: "Yes, Pocket Pastor offers a free tier that includes the Verse of the Day, Prayer Journal, and limited daily chats with the AI Pastor. We also offer a Premium subscription that unlocks unlimited chats, advanced study tools, and multiple Bible translations."
    },
    {
      question: "How does the AI Pastor work?",
      answer: "Our AI Pastor is built on advanced language models that have been specifically trained on the Bible, theological commentaries, and pastoral care resources. It provides biblical answers and spiritual encouragement, but it is designed to supplement—not replace—your local church community and pastoral leadership."
    },
    {
      question: "Is my prayer journal private?",
      answer: "Absolutely. Privacy is our top priority. Your prayer requests and journal entries are encrypted end-to-end. No one at Pocket Pastor can read your personal entries unless you explicitly choose to share them."
    },
    {
      question: "Which Bible translations are available?",
      answer: "We currently support NIV, ESV, KJV, NLT, and CSB. You can easily switch between translations in the settings menu to find the one that speaks to you most clearly."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes! You can access downloaded Bible versions, your saved notes, and the Prayer Journal while offline. The AI Pastor and community features require an active internet connection."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can manage your subscription directly through your device's app store settings (Apple App Store or Google Play Store). There are no long-term contracts, and you can cancel at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-cream dark:bg-dark-bg pt-8 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <Link
          to="/"
          className="group inline-flex items-center text-textSecondary dark:text-dark-textSecondary hover:text-primary dark:hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-dark-text mb-6">Frequently Asked Questions</h1>
          <p className="text-textSecondary dark:text-dark-textSecondary text-lg max-w-xl mx-auto">
            Find answers to common questions about features, privacy, and your spiritual journey with Pocket Pastor.
          </p>
        </div>

        <div className="bg-white dark:bg-dark-surface rounded-[2rem] shadow-soft dark:shadow-none p-8 border border-primary/5 dark:border-white/5">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;