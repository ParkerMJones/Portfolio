import oasis from "../../../assets/models/oasisuncompressed.glb";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import oasisBaked from "../../../assets/materials/Oasisbake.jpg";

export default function Oasis() {
  const bakedTexture = useLoader(TextureLoader, oasisBaked);
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;
  const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
  const gltf = useLoader(GLTFLoader, oasis);
  gltf.scene.traverse(function (child) {
    child.material = bakedMaterial;
  });
  return (
    <>
      <div style={{ position: "absolute", height: "100vh" }}>
        <Canvas
          colorManagement="srgb"
          camera={{ position: [0, 0, 0] }}
          style={{ height: "100vh", width: "100vw" }}
        >
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
        </Canvas>
      </div>
    </>
  );
}
