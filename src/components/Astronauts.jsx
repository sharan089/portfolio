import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere } from '@react-three/drei';

export default function Astronauts() {
    const [count, setCount] = useState(null);
    const groupRef = useRef();

    useEffect(() => {
        // Fetch astronaut count from Open Notify API
        const fetchAstronauts = async () => {
            try {
                const response = await fetch('https://api.allorigins.win/get?url=http://api.open-notify.org/astros.json');
                if (!response.ok) throw new Error('Proxy network response was not ok');

                const data = await response.json();
                // allorigins returns the actual response in the 'contents' field string
                const parsedContents = JSON.parse(data.contents);

                if (parsedContents && parsedContents.number) {
                    setCount(parsedContents.number);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                console.error("Error fetching astronaut count:", error);
                // Fallback to a realistic number (usually 7-14) if API fails
                setCount(10);
            }
        };

        fetchAstronauts();

        // Refresh every 5 minutes
        const interval = setInterval(fetchAstronauts, 300000);
        return () => clearInterval(interval);
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Orbit/Revolve logic could go here, or just local rotation
            groupRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <group position={[-4, 2, -2]}>
            <group ref={groupRef}>
                {/* Planet Representation */}
                <Sphere args={[0.8, 16, 16]} >
                    <meshStandardMaterial
                        color="#00f0ff"
                        wireframe
                        emissive="#00f0ff"
                        emissiveIntensity={0.2}
                        transparent
                        opacity={0.5}
                    />
                </Sphere>

                {/* Orbital Ring ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.2, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#ffffff" opacity={0.2} transparent />
                </mesh>
            </group>

            {/* Floating UI for Count */}
            <group position={[0, 1.2, 0]}>
                <Text
                    color="white"
                    fontSize={0.5}
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {count !== null ? count : "Loading..."}
                </Text>
                <Text
                    position={[0, -0.4, 0]}
                    color="#a0a0a0"
                    fontSize={0.2}
                    anchorX="center"
                    anchorY="middle"
                >
                    Humans in Space
                </Text>
            </group>
        </group>
    );
}
