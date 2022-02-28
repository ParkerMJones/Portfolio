import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import particle from "../../../assets/materials/1.png";
import { AdditiveBlending } from "three";

export const Stars = ({ acceleration, starCount }) => {
  // Particles
  // Texture
  const particlesTexture = new THREE.TextureLoader().load(particle);

  // Geometry
  const particlesGeometry = new THREE.BufferGeometry();

  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
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
  useFrame(() => {
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      particlesGeometry.attributes.position.array[i3 + 2] += acceleration;
      if (particlesGeometry.attributes.position.array[i3 + 2] > 1) {
        particlesGeometry.attributes.position.array[i3 + 2] -= 400;
      }
    }
    particlesGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <points args={[particlesGeometry]}>
      <pointsMaterial
        size={0.15}
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

const Starfield = ({ acceleration, starCount }) => {
  return (
    <div
      style={{
        height: "calc(100vh - 72px)",
        backgroundColor: "black",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars acceleration={acceleration} starCount={starCount} />
      </Canvas>
    </div>
  );
};

export default Starfield;
