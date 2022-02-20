import { useRef } from "react";
import EarthDayMap from "../../../assets/materials/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../../assets/materials/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../../assets/materials/textures/8k_earth_specular_map.jpg";
import EarthClouds from "../../../assets/materials/textures/8k_earth_clouds.jpg";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime * 0.25;
    cloudsRef.current.rotation.y = elapsedTime * 0.26;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[1, 0, 3]} intensity={1.2} />
      <mesh ref={cloudsRef} scale={1.6}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} scale={1.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
}
