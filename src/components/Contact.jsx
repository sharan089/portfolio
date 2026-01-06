import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../constants/data';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 min-h-[50vh] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />

            <motion.div
                className="max-w-4xl w-full glass-panel p-8 md:p-16 text-center relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-400 mb-12 text-lg">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href={`mailto:${resumeData.email}`} className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors w-full md:w-auto">
                        Say Hello
                    </a>
                    <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 hover:border-cyan-500 hover:text-cyan-400 rounded-full transition-colors w-full md:w-auto">
                        LinkedIn
                    </a>
                    <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white/20 hover:border-cyan-500 hover:text-cyan-400 rounded-full transition-colors w-full md:w-auto">
                        GitHub
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-gray-500 text-sm">
                    <p>Designed & Built by {resumeData.name}</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
