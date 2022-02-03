// import { useGLTF, useHelper } from "@react-three/drei";
import spaceship from "../../../assets/Models/spaceship.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useMousePosition from "../../../hooks/MouseTracker";

export default function Spaceship() {
  const { scene } = useLoader(GLTFLoader, spaceship);
  let { x, y } = useMousePosition();

  const normalize = (val, minVal, maxVal, newMin, newMax) => {
    return newMin + ((val - minVal) * (newMax - newMin)) / (maxVal - minVal);
  };

  return (
    <>
      <ambientLight intensity={0.9} is="custom" />
      <primitive
        is="custom"
        object={scene}
        dispose={null}
        scale={[0.025, 0.025, 0.025]}
        rotation={[
          0,
          Math.PI * 0.5 + -normalize(x, 0, window.innerWidth, -1, 1),
          -normalize(y, 0, window.innerHeight, -1, 1) / 3,
        ]}
      />
    </>
  );
}
