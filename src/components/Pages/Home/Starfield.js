import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import particle from "../../../assets/1.png";
import { AdditiveBlending } from "three";
// import Link from "./LinkPlane";

const Stars = () => {
  // Particles
  // Texture
  const particlesTexture = new THREE.TextureLoader().load(particle);

  // Geometry
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 50000;

  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 2000;
    positions[i3 + 1] = (Math.random() - 0.5) * 800;
    positions[i3 + 2] = (Math.random() - 0.5) * 400;
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  // Animation
  const acceleration = 0.5;
  useFrame(() => {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      particlesGeometry.attributes.position.array[i3 + 2] += acceleration;
      if (particlesGeometry.attributes.position.array[i3 + 2] > 1) {
        particlesGeometry.attributes.position.array[i3 + 2] -= 600;
      }
    }
    particlesGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <points args={[particlesGeometry]}>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        color={"white"}
        map={particlesTexture}
        depthWrite={false}
        transparent={true}
        blending={AdditiveBlending}
      />
    </points>
  );
};

const Starfield = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        backgroundColor: "black",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default Starfield;