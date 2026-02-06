import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Box } from '@react-three/drei';
import * as THREE from 'three';

export default function ISS() {
    const groupRef = useRef();

    // Random initial position
    const [position] = useState(() => {
        return new THREE.Vector3(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            -5 // Start slightly behind
        );
    });

    // Random velocity vector
    const [velocity] = useState(() => {
        return new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            0
        );
    });

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Move
        groupRef.current.position.add(velocity);

        // Rotate slowly
        groupRef.current.rotation.x += delta * 0.1;
        groupRef.current.rotation.y += delta * 0.1;

        // Boundary check (looping)
        const boundary = 8;
        if (groupRef.current.position.x > boundary) groupRef.current.position.x = -boundary;
        if (groupRef.current.position.x < -boundary) groupRef.current.position.x = boundary;
        if (groupRef.current.position.y > boundary) groupRef.current.position.y = -boundary;
        if (groupRef.current.position.y < -boundary) groupRef.current.position.y = boundary;
    });

    const solarPanelMaterial = new THREE.MeshStandardMaterial({
        color: "#2a2a2a",
        metalness: 0.8,
        roughness: 0.2,
        emissive: "#1a1a1a",
        side: THREE.DoubleSide
    });

    const moduleMaterial = new THREE.MeshStandardMaterial({
        color: "#e0e0e0",
        metalness: 0.5,
        roughness: 0.5
    });

    return (
        <group ref={groupRef} position={position} scale={0.3}>
            {/* Main Module - Central Cylinder */}
            <Cylinder args={[0.5, 0.5, 4, 16]} rotation={[0, 0, Math.PI / 2]} material={moduleMaterial} />

            {/* Perpendicular Module */}
            <Cylinder args={[0.4, 0.4, 2.5, 16]} position={[0, 0, 0]} material={moduleMaterial} />

            {/* Solar Array Truss */}
            <Box args={[8, 0.2, 0.2]} position={[0, 0, 0]} material={moduleMaterial} />

            {/* Solar Panels (Left) */}
            <Box args={[2, 4, 0.05]} position={[-3, 0, 0]} material={solarPanelMaterial} />
            <Box args={[2, 4, 0.05]} position={[-2.8, 0, -1]} rotation={[0, 0.5, 0]} material={solarPanelMaterial} />

            {/* Solar Panels (Right) */}
            <Box args={[2, 4, 0.05]} position={[3, 0, 0]} material={solarPanelMaterial} />
            <Box args={[2, 4, 0.05]} position={[2.8, 0, 1]} rotation={[0, -0.5, 0]} material={solarPanelMaterial} />

            {/* Docking Port/Cupola */}
            <Cylinder args={[0.6, 0.3, 0.5, 16]} position={[0, -1, 0]} material={moduleMaterial} />
        </group>
    );
}
