import dumbbell from "../../../assets/models/dumbbell.glb";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

export default function Dumbbell() {
  const { scene } = useLoader(GLTFLoader, dumbbell);
  return (
    <>
      <div>
        <Link to="/projects/solin">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <directionalLight
              intensity={20}
              is="custom"
              position={[-1, 0, 1]}
            />
            <mesh>
              <primitive is="custom" object={scene} dispose={null} scale={3} />
            </mesh>
          </Canvas>
        </Link>
      </div>
    </>
  );
}
