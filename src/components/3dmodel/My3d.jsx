import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const My3d = () => {
  const { scene } = useGLTF("./man.glb"); // Path to your 3D model

  return <primitive object={scene} scale={2} />;
};

const Model = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <My3d />
      <OrbitControls />
    </Canvas>
  );
};

export default Model;