import React from 'react';
import { Apple, Play } from 'lucide-react';


const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-primary/20 text-textSecondary text-sm font-medium mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              Now available on iOS and Android
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text leading-tight mb-6 animate-fade-in-up delay-100">
              Your Spiritual Companion, <br className="hidden lg:block" />
              <span className="text-primary italic">Anytime, Anywhere.</span>
            </h1>

            <p className="text-lg sm:text-xl text-textSecondary mb-10 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
              Pocket Pastor helps you grow in faith with daily verses, prayer tracking, and an AI-powered pastor to answer your questions instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <button className="flex items-center justify-center space-x-3 bg-text text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95 group">
                <Apple size={24} className="group-hover:text-gray-300 transition-colors" />
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-sans">Download on the</div>
                  <div className="text-lg font-bold font-sans leading-none">App Store</div>
                </div>
              </button>

              <button className="flex items-center justify-center space-x-3 bg-surface text-text border border-text/10 px-8 py-4 rounded-2xl hover:bg-white hover:border-primary/30 transition-all shadow-lg hover:shadow-xl active:scale-95 group">
                <Play size={24} className="fill-text text-text group-hover:text-primary group-hover:fill-primary transition-colors" />
                <div className="text-left">
                  <div className="text-xs text-textSecondary font-sans">GET IT ON</div>
                  <div className="text-lg font-bold font-sans leading-none">Google Play</div>
                </div>
              </button>
            </div>

            <div className="mt-8 flex items-center space-x-4 text-sm text-textSecondary animate-fade-in-up delay-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-cream bg-gray-200 overflow-hidden`}>
                    <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ believers</p>
            </div>
          </div>

          {/* Image/Mockup Content */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Decorative elements behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-3xl -z-10"></div>
              <img
                src="/app-mockup.png"
                alt="Pocket Pastor App Interface"
                className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;