import oasis from "./oasis.glb";
import * as THREE from "three";
import {
  // useThree,
  Canvas,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import oasisBaked from "../materials/Oasisbake.jpg";
import lava from "../materials/textures/Lava_005_COLOR.jpg";
import lavaNormal from "../materials/textures/Lava_005_NORM.jpg";
import lavaDisplacement from "../materials/textures/Lava_005_DISP.png";
import lavaRoughness from "../materials/textures/Lava_005_DISP.png";
import lavaAO from "../materials/textures/Lava_005_OCC.jpg";

function OasisSetup() {
  // Dune Texture
  const bakedTexture = useLoader(TextureLoader, oasisBaked);
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;
  const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
  const gltf = useLoader(GLTFLoader, oasis);
  gltf.scene.traverse(function (child) {
    child.material = bakedMaterial;
  });

  // Lava Texture
  let lavaRepeat = 0.9;
  const [
    lavaColor,
    lavaDisplacementMap,
    lavaNormalMap,
    lavaRoughnessMap,
    lavaAmbientOcclusion,
  ] = useLoader(TextureLoader, [
    lava,
    lavaDisplacement,
    lavaNormal,
    lavaRoughness,
    lavaAO,
  ]);
  lavaColor.repeat.set(lavaRepeat, lavaRepeat);
  lavaNormalMap.repeat.set(lavaRepeat, lavaRepeat);
  lavaDisplacementMap.repeat.set(lavaRepeat, lavaRepeat);
  lavaRoughnessMap.repeat.set(lavaRepeat, lavaRepeat);
  lavaAmbientOcclusion.repeat.set(lavaRepeat, lavaRepeat);
  useFrame(({ clock }) => {
    const delta = clock.getDelta() * 5;
    lavaColor.offset.y += delta;
    lavaNormalMap.offset.y += delta;
    lavaDisplacementMap.offset.y += delta;
    lavaRoughnessMap.offset.y += delta;
    lavaAmbientOcclusion.offset.y += delta;
  });

  return (
    <>
      <pointLight intensity={1.5} position={[0, 1, 0]} />
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
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial
            displacementScale={2}
            map={lavaColor}
            normalMap={lavaNormalMap}
            displacementMap={lavaDisplacementMap}
            roughnessMap={lavaRoughnessMap}
            ambientOcclusionMap={lavaAmbientOcclusion}
          />
        </mesh>
      </group>
    </>
  );
}

export default OasisSetup;
