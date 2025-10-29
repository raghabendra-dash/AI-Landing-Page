// "use client";

// import { useRef, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";

// function getRandomColor() {
//   const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#F59E0B"];
//   return colors[Math.floor(Math.random() * colors.length)];
// }

// function Particles() {
//   const pointsRef = useRef<any>();

//   const { positions, colors, sphere } = useMemo(() => {
//     const positions = new Float32Array(800 * 3);
//     const colors = new Float32Array(800 * 3);
//     const sphere = new Float32Array(800).fill(0).map(() => Math.random() * Math.PI * 2);

//     for (let i = 0; i < 800; i++) {
//       const x = (Math.random() - 0.5) * 15;
//       const y = (Math.random() - 0.5) * 15;
//       const z = (Math.random() - 0.5) * 15;
//       positions.set([x, y, z], i * 3);

//       const color = new THREE.Color(getRandomColor());
//       colors.set([color.r, color.g, color.b], i * 3);
//     }

//     return { positions, colors, sphere };
//   }, []);

//   useFrame((state) => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.y += 0.001;
//       pointsRef.current.rotation.x += 0.0005;

//       const positions = pointsRef.current.geometry.attributes.position.array;
//       const time = state.clock.getElapsedTime() * 0.5;

//       for (let i = 0; i < positions.length; i += 3) {
//         const i3 = i / 3;
//         const x = positions[i];
//         const y = positions[i+1];
//         const z = positions[i+2];

//         positions[i+1] += Math.sin(time + sphere[i3]) * 0.01;
//       }
//       pointsRef.current.geometry.attributes.position.needsUpdate = true;
//     }
//   });

//   return (
//     <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
//       <PointMaterial
//         transparent
//         vertexColors
//         size={0.08}
//         sizeAttenuation={true}
//         depthWrite={false}
//       />
//     </Points>
//   );
// }

// export default function AnimatedBallsBackground() {
//   return (
//     <div className="absolute inset-0 z-0">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <Particles />
//       </Canvas>
//     </div>
//   );
// }
