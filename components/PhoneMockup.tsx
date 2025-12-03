import React from 'react';
import { MessageCircle, Heart, Share2, Bookmark, Menu } from 'lucide-react';

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Notch */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen Content */}
      <div className="w-full h-full rounded-[2rem] bg-cream overflow-hidden flex flex-col relative z-10">
        
        {/* Status Bar Placeholder */}
        <div className="h-8 w-full flex items-center justify-between px-6 pt-2">
            <span className="text-[10px] font-bold text-gray-800">9:41</span>
            <div className="flex space-x-1">
                <div className="w-4 h-2.5 bg-gray-800 rounded-[2px]"></div>
                <div className="w-3 h-2.5 bg-gray-800 rounded-[2px]"></div>
            </div>
        </div>

        {/* App Header */}
        <div className="px-5 pt-4 pb-2 flex justify-between items-center">
            <Menu className="text-text w-6 h-6" />
            <span className="font-serif font-bold text-lg text-primary">Pocket Pastor</span>
            <div className="w-8 h-8 rounded-full bg-surface border border-primary/20 flex items-center justify-center">
                 <img src="https://picsum.photos/100/100?random=user" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 pb-8 no-scrollbar">
            
            {/* Greeting */}
            <div className="mt-4 mb-6">
                <h2 className="text-2xl font-serif font-bold text-text">Good Morning,</h2>
                <p className="text-textSecondary text-sm">May your day be filled with grace.</p>
            </div>

            {/* Verse Card */}
            <div className="bg-white p-5 rounded-2xl shadow-soft mb-6 border border-gray-50">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold tracking-wider text-accent uppercase">Verse of the Day</span>
                    <Share2 className="w-4 h-4 text-textSecondary" />
                </div>
                <p className="font-serif text-lg leading-relaxed text-text mb-4">
                    "Trust in the LORD with all your heart and lean not on your own understanding."
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-textSecondary">Proverbs 3:5</span>
                    <div className="flex space-x-3">
                        <Heart className="w-5 h-5 text-accent" />
                        <Bookmark className="w-5 h-5 text-accent" />
                    </div>
                </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#E8F0E0] p-4 rounded-xl flex flex-col items-center justify-center text-center h-32 cursor-pointer hover:bg-[#D8E6CC] transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-text">Ask Pastor</span>
                </div>
                 <div className="bg-[#F5F3ED] p-4 rounded-xl flex flex-col items-center justify-center text-center h-32 cursor-pointer hover:bg-[#EDE9DF] transition-colors">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                        <Heart className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-bold text-text">Prayer Log</span>
                </div>
            </div>

            {/* Recent Sermon Notes */}
             <div className="mb-4">
                <h3 className="text-md font-bold text-text mb-3">Recent Notes</h3>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex items-start space-x-3">
                    <div className="w-1 h-10 bg-accent rounded-full"></div>
                    <div>
                        <h4 className="text-sm font-bold text-text">Sunday Service: Hope</h4>
                        <p className="text-xs text-textSecondary line-clamp-2 mt-1">Faith is the substance of things hoped for, the evidence of things not seen...</p>
                    </div>
                </div>
            </div>

        </div>

        {/* Bottom Nav Mockup */}
        <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-2">
            <div className="flex flex-col items-center justify-center w-12 text-primary">
                 <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                 </div>
            </div>
             <div className="flex flex-col items-center justify-center w-12 text-gray-300">
                <div className="w-6 h-6 rounded-md bg-gray-100"></div>
            </div>
             <div className="flex flex-col items-center justify-center w-12 text-gray-300">
                <div className="w-6 h-6 rounded-md bg-gray-100"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;