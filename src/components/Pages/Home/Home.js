import { useState } from "react";
import Starfield from "./Starfield";
import Links from "./LinkPlane";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const [acceleration, setAcceleration] = useState(0.5);
  const [starCount, setStarCount] = useState(50000);
  function onWarp() {
    setAcceleration(30);
    setStarCount(300000);
  }

  return (
    <>
      <Starfield acceleration={acceleration} starCount={starCount} />
      <Links onWarp={onWarp} />
    </>
  );
}
