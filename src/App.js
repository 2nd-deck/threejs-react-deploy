import "./App.css";
import React, { Suspense } from "react";
import Orbit from "./components/Orbit";
import Background from "./components/Background";
import Floor from "./components/Floor";
import ColorPicker from "./components/ColorPicker";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        shadows={true}
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <CameraControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        {/* <mesh> */}
        {/* <boxBufferGeometry /> */}
        {/* <meshBasicMaterial color="red" /> */}
        <Orbit />
        <Lights />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Cars />

          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects />
        {/* </mesh> */}
      </Canvas>
    </div>
  );
}

export default App;
