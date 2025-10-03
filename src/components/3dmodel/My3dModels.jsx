import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const My3DModel = () => {
  const { scene } = useGLTF("./book.glb"); // Path to your 3D model
  return <primitive object={scene} scale={2} />;
};

const ModelScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <My3DModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelScene;
