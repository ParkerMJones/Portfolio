import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function AstraModel({ dance }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/astra.glb");
  const { actions } = useAnimations(animations, group);
  const prevDance = usePrevious(dance) || 0;
  useEffect(() => {
    Object.values(actions)[prevDance].fadeOut(0.2);
    Object.values(actions)[prevDance].stop();
    let danceMove = Object.values(actions)[dance];
    danceMove.play();
    danceMove.fadeIn(0.2);
  }, [dance, actions, prevDance]);

  return (
    <group ref={group} dispose={null}>
      <group
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.02}
        position={[0, -0.5, 0]}
      >
        <primitive object={nodes.mixamorig1Hips} />
        <skinnedMesh
          geometry={nodes.Mesh.geometry}
          material={materials.Ch48_body1}
          skeleton={nodes.Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.Ch48_body}
          skeleton={nodes.Mesh_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_2.geometry}
          material={nodes.Mesh_2.material}
          skeleton={nodes.Mesh_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Ch48_hair1.geometry}
          material={nodes.Ch48_hair1.material}
          skeleton={nodes.Ch48_hair1.skeleton}
        />
      </group>
      <mesh rotation={[Math.PI * 1.58, 0, 0]} position={[0, -0.5, -2]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload("/astra.glb");

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}