import { useState } from "react";
import Starfield from "./Starfield";
import Links from "./LinkPlane";
import Navbar from "../../Nav";

export default function Home() {
  const [acceleration, setAcceleration] = useState(0.25);
  const [starCount, setStarCount] = useState(200000);
  function onWarp() {
    setAcceleration(20);
  }
  return (
    <>
      <Navbar />
      <Starfield acceleration={acceleration} starCount={starCount} />
      <Links onWarp={onWarp} />
    </>
  );
}
