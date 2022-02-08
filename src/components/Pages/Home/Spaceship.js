// import { useGLTF, useHelper } from "@react-three/drei";
import spaceship from "../../../assets/models/spaceship.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useMousePosition from "../../../hooks/MouseTracker";

export default function Spaceship() {
  const { scene } = useLoader(GLTFLoader, spaceship);
  const ParticleEmitter1Position = scene.traverse((child) => {
    if (child.name === "ParticleEmitter1") {
      return child.position.x;
    }
    // useEffect(() => {
    //   scene.traverse((child) => {
    //     if (child.name === "ParticleEmitter1") {
    //       console.log(child.position);
    //     }
    //   });
  });
  // // const particleEmitter1 = scene.children.find((child) => {
  // //   return child.name === "ParticleEmitter1";
  // // });
  // const particleEmitter2 = scene.children.find((child) => {
  //   console.log(child.name === "ParticleEmitter2");
  //   return child.name === "ParticleEmitter2";
  // });
  // const particleEmitter3 = scene.children.find(
  //   (child) => child.name === "ParticleEmitter3"
  // );
  // const particleEmitter4 = scene.children.find(
  //   (child) => child.name === "ParticleEmitter4"
  // );

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
          Math.PI * 0.025 + -normalize(y, 0, window.innerHeight, -1, 1) / 3,
        ]}
      />
    </>
  );
}
