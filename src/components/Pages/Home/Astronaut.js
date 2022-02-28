import AstronautModel from "../../../assets/models/AstronautModel";

export default function Astronaut() {
  return (
    <>
      <directionalLight intesity={1} />
      <ambientLight intensity={0.5} />
      <AstronautModel />
    </>
  );
}
