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
// import { useRef, useMemo } from "react";

extend({ Water });

// function Ocean() {
//   const ref = useRef();
//   const gl = useThree((state) => state.gl);
//   const waterNormals = useLoader(
//     THREE.TextureLoader,
//     "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
//   );

//   waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
//   const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), []);
//   const config = useMemo(
//     () => ({
//       textureWidth: 512,
//       textureHeight: 512,
//       waterNormals,
//       sunDirection: new THREE.Vector3(),
//       sunColor: 0xeb8934,
//       waterColor: 0x0064b5,
//       distortionScale: 40,
//       fog: false,
//       format: gl.encoding,
//     }),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [waterNormals]
//   );
//   useFrame(
//     (state, delta) => (ref.current.material.uniforms.time.value += delta)
//   );
//   return (
//     <water
//       ref={ref}
//       args={[geom, config]}
//       rotation-x={-Math.PI / 2}
//       position={[0, 0, 0]}
//     />
//   );
// }

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
          </group>
          {/* <Ocean /> */}
        </Canvas>
      </div>
    </>
  );
}
