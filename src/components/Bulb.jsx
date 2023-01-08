import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

const Bulb = (props) => {
  const ref = useRef();
  const { scene } = useThree();
  useEffect(() => {
    if (scene.lights) scene.lights.push(ref);
    else scene.lights = [ref];
  });
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[0.2, 10, 20]} />
      <pointLight
        castShadow
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={10}
      />

      <meshPhongMaterial emissive="white" />
    </mesh>
  );
};
export default Bulb;
