import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../constants/data';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-cyan-400 mb-4 uppercase">
                        Portfolio
                    </h2>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-500 mb-6 font-display"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {resumeData.name}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Electronics & Communication Engineer | Creative Developer
                </motion.p>

                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <a href="#projects" className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all tracking-wider uppercase text-sm">
                        Explore Work
                    </a>
                </motion.div>
            </div>

            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default Hero;
