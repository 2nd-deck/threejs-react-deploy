import Dragable from "./Dragable";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import { Suspense } from "react";
const Cars = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          position={[4, 2, 0]}
          offset={[-3.7, -1.4, -1.6]}
          dims={[3, 2.2, 6.5]}
        >
          <Model
            path="tesla_cybertruck/scene.gltf"
            scale={new Array(3).fill(2)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          position={[-4, 2, 0]}
          offset={[-1.3, -1.1, -0.2]}
          dims={[3, 2.2, 6.5]}
        >
          <Model path="v60/scene.gltf" scale={new Array(3).fill(0.3)} />
        </BoundingBox>
        <group rotation={[0, Math.PI, 0]}>
          <Model path="mech_drone/scene.gltf" scale={new Array(3).fill(5)} />
        </group>
      </Dragable>
    </Suspense>
  );
};

export default Cars;
