import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./Earth";

export const EarthCanva = () => {
  return (
    <Canvas
      shadows
      frameloop="always" // 'demand' can lead to lag, use 'always' for smoother updates
      dpr={[1, 1.25]} // Slightly lower DPR for better performance
      gl={{ antialias: true, preserveDrawingBuffer: false }} // Enable antialiasing, but disable buffer preservation
      camera={{
        fov: 50, // Adjusted FOV for a more natural view and performance
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableDamping
          dampingFactor={0.1} // Enable damping for smoother controls
          autoRotate
          autoRotateSpeed={0.5} // Further reduce speed for better performance
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
