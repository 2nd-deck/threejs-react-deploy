import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";
const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  //const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "rough_wood_diff_1k.jpg");
  // useFrame((state) => {
  //   ref.current.rotation.x += 0.01;
  //   ref.current.rotation.y += 0.01;
  // });
  const handlePointerDown = (e) => {
    console.log(e);
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };
  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };
  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };
  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };
  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      //receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        map={texture}
        //color="white"
        //opacity={0.7}
        // transparent
        // metalness={1}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        // side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Box;
