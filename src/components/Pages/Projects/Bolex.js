import bolex from "../../../assets/models/bolex.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

export default function Bolex() {
  const { scene } = useLoader(GLTFLoader, bolex);
  return (
    <>
      <div>
        <Link to="/projects/aaronglasser">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <ambientLight intensity={1} is="custom" />
            <mesh>
              <primitive
                is="custom"
                object={scene}
                dispose={null}
                scale={4}
                rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}
              />
            </mesh>
          </Canvas>
        </Link>
      </div>
    </>
  );
}
