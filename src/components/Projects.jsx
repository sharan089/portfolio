import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../constants/data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel p-8 hover:bg-white/5 transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            {project.status && (
                                <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-cyan-900/50 text-cyan-200 rounded mb-4">
                                    {project.status}
                                </span>
                            )}
                            <p className="text-gray-400 mb-6 line-clamp-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-mono text-cyan-300/80">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
