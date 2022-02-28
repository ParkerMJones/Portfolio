import { useRef } from "react";
import PlanetMap from "../../../assets/materials/textures/2k_makemake_fictional.jpg";
import PlanetClouds from "../../../assets/materials/textures/2k_earth_clouds.jpg";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, cloudsMap] = useLoader(TextureLoader, [
    PlanetMap,
    PlanetClouds,
  ]);

  const planetRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    planetRef.current.rotation.y = elapsedTime * 0.25;
    cloudsRef.current.rotation.y = elapsedTime * 0.25;
  });

  return (
    <>
      <mesh ref={cloudsRef} scale={1.5}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshBasicMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={planetRef} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={colorMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  );
}
