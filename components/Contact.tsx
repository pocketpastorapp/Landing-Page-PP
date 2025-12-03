import React, { useState } from 'react';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-fade-in">
      <Link
        to="/"
        className="group flex items-center text-textSecondary hover:text-primary transition-colors mb-8 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6">Get in Touch</h1>
          <p className="text-textSecondary text-lg mb-12 leading-relaxed">
            We'd love to hear from you. Whether you have a question about features, need technical support, or just want to share your testimony, our team is here to listen.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text font-serif mb-1">Email Us</h3>
                <p className="text-textSecondary mb-2">Our friendly team is here to help.</p>
                <a href="mailto:support@pocketpastor.app" className="text-primary font-medium hover:underline">
                  support@pocketpastor.app
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[2rem] shadow-soft p-8 md:p-10 border border-primary/5">
          {isSent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-text mb-2">Message Sent!</h3>
              <p className="text-textSecondary">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => { setIsSent(false); setFormState({ name: '', email: '', subject: '', message: '' }) }}
                className="mt-8 text-primary font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white py-4 rounded-xl font-medium shadow-md transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#435525] hover:shadow-lg active:scale-95'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;