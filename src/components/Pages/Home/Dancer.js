import { useGLTF, useAnimations } from "@react-three/drei";
import Dancer from "../../../assets/models/Dancer";

export default function DancerModel({ dance }) {
  return (
    <>
      <ambientLight />
      <Dancer dance={dance} />
    </>
  );
}
