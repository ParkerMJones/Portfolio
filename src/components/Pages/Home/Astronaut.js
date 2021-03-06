import AstronautModel from "../../../assets/Models/AstronautModel";

export default function Astronaut() {
  return (
    <>
      <directionalLight intesity={1} />
      <ambientLight intensity={0.5} />
      <AstronautModel />
    </>
  );
}
