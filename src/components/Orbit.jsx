import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <OrbitControls attach="orbitControls" args={[camera, gl.domElement]} />
  );
};

export default Orbit;
