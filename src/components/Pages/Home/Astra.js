import AstraModel from "../../../assets/models/AstraModel";

export default function Astra({ dance }) {
  return (
    <>
      <ambientLight intesity={2.5} />
      <AstraModel dance={dance} />
    </>
  );
}
