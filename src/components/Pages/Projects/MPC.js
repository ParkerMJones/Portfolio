import MPC from "../../../assets/models/MPC.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

export default function BeatPad() {
  const { scene } = useLoader(GLTFLoader, MPC);
  return (
    <>
      <div>
        <Link to="/projects/freesound">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <ambientLight intensity={1} is="custom" />
            <mesh>
              <primitive
                is="custom"
                object={scene}
                dispose={null}
                scale={0.3}
                rotation={[Math.PI * 0.25, Math.PI * 1.5, 0]}
              />
            </mesh>
          </Canvas>
        </Link>
      </div>
    </>
  );
}
