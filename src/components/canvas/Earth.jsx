import React, { Suspense, useMemo } from "react";

import {  useGLTF } from "@react-three/drei";

export const Earth = () => {
  // Memoize the GLTF model to prevent unnecessary reloading
  const earth = useGLTF("./planet/scene.gltf");

  // Use useMemo to avoid unnecessary re-renders
  const memoizedEarth = useMemo(
    () => (
      <primitive
        object={earth.scene}
        scale={[2.5, 2.5, 2.5]}
        position-y={0}
        rotation-y={0}
      />
    ),
    [earth.scene]
  );

  return memoizedEarth;
};




