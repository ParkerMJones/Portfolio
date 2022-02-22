import TowerModel from "../../../assets/models/RadioTower";

export default function Tower() {
  return (
    <>
      <ambientLight intensity={0.4} is="custom" />
      <pointLight intensity={1} position={[0, 0, 0]} is="custom" />
      <TowerModel />
    </>
  );
}
