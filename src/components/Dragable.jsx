import { extend, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Scene } from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
extend({ DragControls });
const Dragable = (props) => {
  const groupRef = useRef();
  const controlsRef = useRef();
  const [children, setChildren] = useState([]);
  const { camera, gl, scene } = useThree();
  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);
  useEffect(() => {
    controlsRef.current.addEventListener(
      "hoveron",
      (e) => (scene.orbitControls.enabled = false)
    );
    controlsRef.current.addEventListener(
      "hoveroff",
      (e) => (scene.orbitControls.enabled = true)
    );
    controlsRef.current.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0);
      //   console.log(e.object);
    });
    controlsRef.current.addEventListener("dragend", (e) =>
      e.object.api?.mass.set(1)
    );
    controlsRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      // 드래그로 인한 돌아가는 현상을 막는다.
      e.object.api.velocity.set(0, 0, 0);
    });
  }, [children]);

  return (
    <group ref={groupRef}>
      <dragControls
        //   그룹으로 묶어준다
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Dragable;
