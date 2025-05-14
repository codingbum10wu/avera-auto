import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function DigitalWaveModel() {
  const waveGroupRef = useRef<THREE.Group>(null);
  
  // Create multiple refs for different wave elements
  const wave1Ref = useRef<THREE.Mesh>(null);
  const wave2Ref = useRef<THREE.Mesh>(null);
  const wave3Ref = useRef<THREE.Mesh>(null);
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  
  // Animation logic
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (waveGroupRef.current) {
      waveGroupRef.current.rotation.y = Math.sin(t * 0.2) * 0.3;
    }
    
    if (wave1Ref.current) {
      // Make waves move up and down with different speeds
      wave1Ref.current.position.y = Math.sin(t * 0.8) * 0.2;
      wave1Ref.current.rotation.z = Math.sin(t * 0.5) * 0.2;
    }
    
    if (wave2Ref.current) {
      wave2Ref.current.position.y = Math.sin(t * 0.5 + 1) * 0.3;
      wave2Ref.current.rotation.z = Math.sin(t * 0.3) * 0.3;
    }
    
    if (wave3Ref.current) {
      wave3Ref.current.position.y = Math.sin(t * 0.7 + 2) * 0.2;
      wave3Ref.current.rotation.z = Math.sin(t * 0.4) * 0.2;
    }
    
    if (orb1Ref.current) {
      // Orbiting motion for the orbs
      orb1Ref.current.position.x = Math.sin(t * 0.6) * 1.2;
      orb1Ref.current.position.z = Math.cos(t * 0.6) * 1.2;
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.sin(t * 0.4 + 2) * 1.5;
      orb2Ref.current.position.z = Math.cos(t * 0.4 + 2) * 1.5;
    }
  });

  return (
    <group ref={waveGroupRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* Main waves */}
      <mesh ref={wave1Ref} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[2, 0.2, 16, 100, Math.PI * 2]} />
        <MeshDistortMaterial 
          color="#77c5e9" 
          speed={2} 
          distort={0.3} 
          metalness={0.8} 
          roughness={0.2}
          transparent
          opacity={0.7} 
        />
      </mesh>
      
      <mesh ref={wave2Ref} position={[0, 0.5, 0]} rotation={[0, 0, 0.5]}>
        <torusGeometry args={[1.8, 0.15, 16, 100, Math.PI * 2]} />
        <MeshDistortMaterial 
          color="#8dd7f7" 
          speed={3} 
          distort={0.2} 
          metalness={0.6} 
          roughness={0.3}
          transparent
          opacity={0.8} 
        />
      </mesh>
      
      <mesh ref={wave3Ref} position={[0, -0.3, 0]} rotation={[0, 0, -0.3]}>
        <torusGeometry args={[1.5, 0.1, 16, 100, Math.PI * 2]} />
        <MeshDistortMaterial 
          color="#a5e0ff" 
          speed={4} 
          distort={0.4} 
          metalness={0.7} 
          roughness={0.2}
          transparent
          opacity={0.9} 
        />
      </mesh>
      
      {/* Orbiting spheres */}
      <mesh ref={orb1Ref} position={[1.2, 0, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#77c5e9" 
          emissiveIntensity={2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      <mesh ref={orb2Ref} position={[-1.2, 0.5, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#a5e0ff" 
          emissiveIntensity={2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Center sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial 
          color="#77c5e9" 
          emissive="#77c5e9" 
          emissiveIntensity={0.5} 
          speed={5} 
          distort={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}
