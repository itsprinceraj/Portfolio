import React, { Suspense, useState } from "react";
import { Stars } from "./Stars";
import { CanvasWrapper } from "./Stars";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

export const StarCanva = () => {
  const [loading, setLoading] = useState(true);

  const handleLoading = () => setLoading(false);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="shapes"></div>
        </div>
      )}
      <CanvasWrapper>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          onCreated={handleLoading}
          pixelRatio={window.devicePixelRatio <= 1 ? 1 : 2} // Optimize for lower pixel ratio
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </CanvasWrapper>
    </>
  );
};
