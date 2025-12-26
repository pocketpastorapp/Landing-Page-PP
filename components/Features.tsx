import React from 'react';
import { MessageCircle, Sun, HeartHandshake, NotebookPen, Globe, BookOpen } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl shadow-soft dark:shadow-none hover:shadow-lg dark:hover:border-primary/30 transition-all duration-300 border border-transparent dark:border-white/5 hover:border-primary/10 group h-full">
    <div className="w-14 h-14 bg-surface dark:bg-dark-bg rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-text dark:text-dark-text mb-3">{title}</h3>
    <p className="text-textSecondary dark:text-dark-textSecondary leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle size={28} />,
      title: "Chat with Pastor",
      description: "Get biblical answers and spiritual guidance instantly from our AI-powered pastoral assistant, trained on theological depth and compassion."
    },
    {
      icon: <Sun size={28} />,
      title: "Verse of the Day",
      description: "Start your morning with hand-picked inspiration from Scripture, beautifully presented to lift your spirit before the day begins."
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Prayer Journal",
      description: "Keep a dedicated space for your prayer requests. Track your spiritual journey and mark prayers as answered to see God's faithfulness."
    },
    {
      icon: <NotebookPen size={28} />,
      title: "My Notes",
      description: "Jot down sermons, thoughts, and quiet time reflections. Organize them with tags so you can always find that specific insight later."
    },
    {
      icon: <Globe size={28} />,
      title: "Multi-language Support",
      description: "Access spiritual resources in your heart language. Available in English, Spanish, French, Portuguese, Arabic, and Chinese."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Bible Reading Plans",
      description: "Stay consistent with curated reading plans designed to guide you through specific books, themes, or the entire Bible in a year."
    }
  ];

  return (
    <section id="features" className="py-24 bg-surface/50 dark:bg-dark-bg/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary font-bold tracking-wide uppercase mb-2">Features</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-text dark:text-dark-text mb-4">Everything you need to grow in faith</h3>
          <p className="text-lg text-textSecondary dark:text-dark-textSecondary">
            Designed with simplicity and depth, providing the tools you need for a consistent walk with God.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;