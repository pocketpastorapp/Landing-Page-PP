import React from 'react';
import { Apple, Play } from 'lucide-react';


const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-cream dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface dark:bg-dark-surface border border-primary/20 dark:border-white/5 text-textSecondary dark:text-dark-textSecondary text-sm font-medium mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary/40 mr-2 animate-pulse"></span>
              Launching Soon on iOS & Android
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text dark:text-dark-text leading-tight mb-6 animate-fade-in-up delay-100">
              Your Spiritual Companion, <br className="hidden lg:block" />
              <span className="text-primary italic">Anytime, Anywhere.</span>
            </h1>

            <p className="text-lg sm:text-xl text-textSecondary dark:text-dark-textSecondary mb-10 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
              Pocket Pastor helps you grow in faith with daily verses, prayer tracking, and an AI-powered pastor to answer your questions instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <div className="flex items-center justify-center space-x-3 bg-text dark:bg-dark-surface text-white dark:text-dark-text px-8 py-4 rounded-2xl cursor-not-allowed shadow-lg border border-transparent dark:border-white/5 group transition-all">
                <Apple size={24} className="text-white/70 dark:text-dark-text/70" />
                <div className="text-left">
                  <div className="text-xs text-white/40 dark:text-dark-textSecondary/40 font-sans uppercase tracking-wider leading-tight">Coming soon to</div>
                  <div className="text-lg font-bold font-sans leading-none">App Store</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 bg-surface dark:bg-dark-surface/50 text-text dark:text-dark-text border border-text/10 dark:border-white/5 px-8 py-4 rounded-2xl cursor-not-allowed shadow-lg group transition-all">
                <Play size={24} className="fill-text/30 dark:fill-dark-textSecondary/30 text-text/30 dark:text-dark-textSecondary/30" />
                <div className="text-left">
                  <div className="text-xs text-textSecondary/40 dark:text-dark-textSecondary/40 font-sans uppercase tracking-wider leading-tight">Coming soon to</div>
                  <div className="text-lg font-bold font-sans leading-none">Google Play</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-4 text-sm text-textSecondary dark:text-dark-textSecondary animate-fade-in-up delay-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-cream dark:border-dark-bg bg-gray-200 dark:bg-gray-800 overflow-hidden`}>
                    <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ believers</p>
            </div>
          </div>

          {/* Image/Mockup Content */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right w-full">
            <div className="relative w-full max-w-[600px] lg:max-w-none">
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>

              {/* Desktop Layout: Overlapping Fan Style */}
              <div className="hidden lg:flex justify-center items-center space-x-[-60px] xl:space-x-[-80px]">
                <img
                  src="/app-bible.png"
                  alt="Bible Reading"
                  className="w-[240px] xl:w-[260px] h-auto rounded-[2.5rem] shadow-xl transform -rotate-12 translate-y-8 hover:rotate-0 hover:translate-y-0 hover:z-30 transition-all duration-500 z-10"
                />
                <img
                  src="/app-home.png"
                  alt="Home Screen"
                  className="w-[260px] xl:w-[280px] h-auto rounded-[2.5rem] shadow-xl z-20 hover:scale-105 hover:z-30 transition-all duration-500"
                />
                <img
                  src="/app-chat.png"
                  alt="AI Chat"
                  className="w-[240px] xl:w-[260px] h-auto rounded-[2.5rem] shadow-xl transform rotate-12 translate-y-8 hover:rotate-0 hover:translate-y-0 hover:z-30 transition-all duration-500 z-10"
                />
              </div>

              {/* Mobile Layout: Horizontal Scroll Carousel */}
              <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-8 px-4 -mx-4 scrollbar-hide">
                <div className="snap-center shrink-0 first:pl-4 last:pr-4">
                  <img src="/app-home.png" alt="Home Screen" className="w-[260px] h-auto rounded-[2rem] shadow-lg" />
                </div>
                <div className="snap-center shrink-0 first:pl-4 last:pr-4">
                  <img src="/app-bible.png" alt="Bible Reading" className="w-[260px] h-auto rounded-[2rem] shadow-lg" />
                </div>
                <div className="snap-center shrink-0 first:pl-4 last:pr-4">
                  <img src="/app-chat.png" alt="AI Chat" className="w-[260px] h-auto rounded-[2rem] shadow-lg" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;