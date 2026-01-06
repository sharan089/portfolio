import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, useTexture, Icosahedron } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField(props) {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function FloatingPlanet() {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.1;
        meshRef.current.rotation.x = time * 0.05;

        // Subtle floating movement
        meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    });

    return (
        <Icosahedron args={[1, 1]} ref={meshRef} position={[2, 0, 0]}>
            <meshStandardMaterial
                color="#00f0ff"
                wireframe
                transparent
                opacity={0.3}
                emissive="#00f0ff"
                emissiveIntensity={0.5}
            />
        </Icosahedron>
    );
}

export default function ThreeScene() {
    return (
        <group>
            <StarField />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Lights for the planet */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <FloatingPlanet />
        </group>
    );
}
