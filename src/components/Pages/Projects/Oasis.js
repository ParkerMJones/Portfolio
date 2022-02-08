import oasis from "../../../assets/models/oasis.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Oasis() {
  const { scene } = useLoader(GLTFLoader, oasis);
  return (
    <>
      <div style={{ position: "absolute", height: "100vh" }}>
        <Canvas
          camera={{ position: [5, 4, 5] }}
          style={{ height: "100vh", width: "100vw" }}
        >
          <OrbitControls />
          <ambientLight intensity={1} is="custom" />
          <mesh>
            <primitive
              is="custom"
              object={scene}
              dispose={null}
              scale={8}
              position={[6, 2, 30]}
              rotation={[-0.5, 1.15, 0.4]}
            />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}
