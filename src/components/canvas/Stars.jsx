// Import necessary hooks and components
import React, { useRef, useState } from "react";
import styled from "styled-components";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Styled Components
export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

// Stars Component
export const Stars = (props) => {
  const ref = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="green"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
