import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-xl relative">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">Our Mission</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 font-serif leading-relaxed italic mb-8">
                "To help believers stay connected to their faith in a busy world, bridging the gap between ancient wisdom and modern life."
              </p>
              <p className="text-lg text-white/80 mb-10 font-light">
                We believe that technology, when used intentionally, can be a powerful vessel for spiritual growth. Pocket Pastor isn't just an app; it's a sanctuary in your pocket, designed to bring moments of peace, reflection, and biblical truth to your daily routine.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50k+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Prayers Logged</div>
                </div>
                <div className="w-px bg-white/20 hidden sm:block"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">1M+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Verses Read</div>
                </div>
                 <div className="w-px bg-white/20 hidden sm:block"></div>
                 <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;