import React from 'react';
import { ArrowLeft, Compass, Gift, Flame, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
    return (
        <div className="pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
            <Link
                to="/"
                className="group flex items-center text-textSecondary hover:text-primary transition-colors mb-8 font-medium"
            >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-8">Built for Believers, by Believers</h1>

            <div className="prose prose-stone prose-lg max-w-none font-body text-textSecondary leading-relaxed mb-16">
                <p className="mb-6 text-xl text-text font-serif italic">
                    Pocket Pastor was born from a simple observation: we carry our phones everywhere, but often leave our faith for Sunday mornings. We wanted to change that.
                </p>

                <p className="mb-6">
                    We are a team of developers, designers, and believers passionate about using technology to build the Kingdom. We don’t believe screens have to be distractions; we believe they can be tools for connection.
                </p>

                <p>
                    Our goal is to create a digital sanctuary where you can ask difficult questions, find biblical truth, and encounter God’s peace—anytime, anywhere.
                </p>
            </div>

            {/* What We Believe Section */}
            <div className="border-t border-primary/10 pt-16">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">What We Believe</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-text mb-6">Our Foundation</h3>
                    <p className="text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
                        We stand on historic Christian faith, rooted in grace and guided by truth. Our AI is trained to reflect these core biblical values:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {/* Point 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                            <Compass size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-text font-serif mb-3">The Bible is Our Compass</h4>
                            <p className="text-textSecondary leading-relaxed">
                                "We believe Scripture is the inspired word of God and the final authority for faith and life. It is the lens through which we view the world and the anchor for our souls."
                            </p>
                        </div>
                    </div>

                    {/* Point 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                            <Gift size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-text font-serif mb-3">Grace Alone, Faith Alone</h4>
                            <p className="text-textSecondary leading-relaxed">
                                "We rest in the truth that salvation is an unearned gift of God’s grace (Sola Gratia), received through faith in Jesus Christ alone (Sola Fide), and not by our own efforts."
                            </p>
                        </div>
                    </div>

                    {/* Point 3 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                            <Flame size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-text font-serif mb-3">An Active God</h4>
                            <p className="text-textSecondary leading-relaxed">
                                "We believe God is still at work today. We affirm the active presence of the Holy Spirit, the power of prayer, and God's heart for healing and restoration in our daily lives."
                            </p>
                        </div>
                    </div>

                    {/* Point 4 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-text font-serif mb-3">Truth Delivered with Love</h4>
                            <p className="text-textSecondary leading-relaxed">
                                "We believe in addressing modern questions with ancient wisdom. We strive to speak truth with humility, gentleness, and compassion, always pointing back to the redemption found in Jesus."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
