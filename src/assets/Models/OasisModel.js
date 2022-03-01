import oasis from "./oasis.glb";
import * as THREE from "three";
import {
  // useThree,
  // useFrame,
  Canvas,
  extend,
  useLoader,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import oasisBaked from "../materials/Oasisbake.jpg";
import { Water } from "three/examples/jsm/objects/Water.js";
import lava from "../materials/textures/Lava_005_COLOR.jpg";

extend({ Water });

export default function Oasis() {
  // Oasis Texture
  const bakedTexture = useLoader(TextureLoader, oasisBaked);
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;
  const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
  const gltf = useLoader(GLTFLoader, oasis);
  gltf.scene.traverse(function (child) {
    child.material = bakedMaterial;
  });

  // Lava Texture
  const lavaTexture = useLoader(TextureLoader, lava);
  lavaTexture.repeat.set(0.85, 0.85);

  return (
    <>
      <div style={{ position: "absolute", height: "100vh" }}>
        <Canvas
          colorManagement="srgb"
          camera={{ position: [0, 0, 0] }}
          style={{ height: "100vh", width: "100vw" }}
        >
          <ambientLight intensity={1} />
          <group>
            <mesh>
              <primitive
                is="custom"
                object={gltf.scene}
                dispose={null}
                scale={8}
                position={[13, -7, 10]}
                rotation={[Math.PI * 0.07, Math.PI * 0.36, 0]}
              />
            </mesh>
            <mesh rotation={[Math.PI * 1.58, 0, 0]} position={[0, -4, -12]}>
              <planeGeometry attach="geometry" args={[500, 500]} />
              <meshBasicMaterial attach="material" map={lavaTexture} />
            </mesh>
          </group>
        </Canvas>
      </div>
    </>
  );
}
