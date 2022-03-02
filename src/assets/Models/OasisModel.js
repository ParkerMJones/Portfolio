import oasis from "./oasis.glb";
import * as THREE from "three";
import {
  // useThree,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import oasisBaked from "../materials/Oasisbake.jpg";
import lava from "../materials/textures/Lava_005_COLOR.jpg";
import lavaNormal from "../materials/textures/Lava_005_NORM.jpg";
import lavaRoughness from "../materials/textures/Lava_005_ROUGH.jpg";
import lavaDisplacement from "../materials/textures/Lava_005_DISP.png";
import lavaAO from "../materials/textures/Lava_005_OCC.jpg";

const OasisSetup = () => {
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
  let lavaRepeat = 2;
  let lavaSpeed = 0.000075;
  const [
    lavaColor,
    lavaDisplacementMap,
    lavaNormalMap,
    lavaRoughnessMap,
    lavaAOMap,
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
  lavaAOMap.repeat.set(lavaRepeat, lavaRepeat);

  lavaColor.wrapS = THREE.RepeatWrapping;
  lavaColor.wrapT = THREE.RepeatWrapping;
  lavaNormalMap.wrapS = THREE.RepeatWrapping;
  lavaNormalMap.wrapT = THREE.RepeatWrapping;
  lavaDisplacementMap.wrapS = THREE.RepeatWrapping;
  lavaDisplacementMap.wrapT = THREE.RepeatWrapping;
  lavaRoughnessMap.wrapS = THREE.RepeatWrapping;
  lavaRoughnessMap.wrapT = THREE.RepeatWrapping;
  lavaAOMap.wrapS = THREE.RepeatWrapping;
  lavaAOMap.wrapT = THREE.RepeatWrapping;
  useFrame(() => {
    lavaColor.offset.y += lavaSpeed;
    lavaDisplacementMap.offset.y += lavaSpeed;
    lavaNormalMap.offset.y += lavaSpeed;
    lavaRoughnessMap.offset.y += lavaSpeed;
    lavaAOMap.offset.y += lavaSpeed;
  });

  return (
    <>
      <pointLight intensity={2} position={[0, 1, 0]} color={"#FFE373"} />
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
            displacementScale={1.5}
            map={lavaColor}
            normalMap={lavaNormalMap}
            displacementMap={lavaDisplacementMap}
            roughnessMap={lavaRoughnessMap}
            aoMap={lavaAOMap}
            emissive={"#cf1020"}
            emissiveIntensity={0.5}
            emissiveMap={lavaColor}
          />
        </mesh>
      </group>
    </>
  );
};

export default OasisSetup;
