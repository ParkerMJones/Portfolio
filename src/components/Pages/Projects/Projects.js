import FadeIn from "../../FadeIn";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Oasis from "./Oasis2";
import Dumbbell from "./Dumbbell";
import BeatPad from "./MPC";
import Bolex from "./Bolex";
import clouds from "../../../assets/images/clouds3.jpg";

import SolinHome from "./Solin/SolinHome";
import FreesoundHome from "./Freesound/FreesoundHome";
import AaronGlasserHome from "./AaronGlasser/AaronGlasserHome";

export default function Projects() {
  return (
    <Switch>
      <Route exact path="/projects">
        <FadeIn>
          <Suspense fallback={null}>
            <Background src={clouds} />
            <Oasis />
          </Suspense>
          <Suspense fallback={null}>
            <Dumbbell />
          </Suspense>
          <Suspense fallback={null}>
            <BeatPad />
          </Suspense>
          <Suspense fallback={null}>
            <Bolex />
          </Suspense>
        </FadeIn>
      </Route>
      <Route path="/projects/solin">
        <SolinHome />
      </Route>
      <Route path="/projects/freesound">
        <FreesoundHome />
      </Route>
      <Route path="/projects/aaronglasser">
        <AaronGlasserHome />
      </Route>
    </Switch>
  );
}

const Background = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
