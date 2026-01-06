import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { resumeData } from '../constants/data';
import { FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                Education
            </h2>

            <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
                {resumeData.education.map((edu, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'none' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.05)' }}
                        date={edu.years}
                        iconStyle={{ background: '#00f0ff', color: '#fff' }}
                        icon={<FaGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold text-xl">{edu.institution}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-cyan-400 mt-2">{edu.degree}</h4>
                        <p className="!text-gray-400 !font-light mt-4">
                            CGPA: {edu.cgpa}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Experience;
