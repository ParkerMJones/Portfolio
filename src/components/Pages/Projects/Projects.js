import FadeIn from "../../FadeIn";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Dumbbell from "./Dumbbell";
import BeatPad from "./MPC";
import Bolex from "./Bolex";

import SolinHome from "./Solin/SolinHome";
import FreesoundHome from "./Freesound/FreesoundHome";
import AaronGlasserHome from "./AaronGlasser/AaronGlasserHome";

export default function Projects() {
  return (
    <Switch>
      <Route exact path="/projects">
        <FadeIn>
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
        <FadeIn>
          <SolinHome />
        </FadeIn>
      </Route>
      <Route path="/projects/freesound">
        <FadeIn>
          <FreesoundHome />
        </FadeIn>
      </Route>
      <Route path="/projects/aaronglasser">
        <FadeIn>
          <AaronGlasserHome />
        </FadeIn>
      </Route>
    </Switch>
  );
}
