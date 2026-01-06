import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../constants/data';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="glass-panel p-8 md:p-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            {resumeData.summary}
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            I am passionate about bridging the gap between hardware and software, leveraging my knowledge in electronics and modern web technologies to build impactful solutions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4">
                        {resumeData.skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                className="glass-panel p-6"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/10 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
