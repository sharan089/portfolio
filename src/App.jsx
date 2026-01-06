import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="relative w-full min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-white">
            {/* 3D Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Suspense fallback={null}>
                        <ThreeScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full">
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
