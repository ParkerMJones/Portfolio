import FadeIn from "../../FadeIn";
import { Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

import backArrow from "../../../assets/arrow-left.svg";
import Oasis from "./Oasis";
import Dumbbell from "./Dumbbell";
import BeatPad from "./MPC";
import Bolex from "./Bolex";
import { Stars } from "../Home/Starfield";

import SolinHome from "./Solin/SolinHome";
import FreesoundHome from "./Freesound/FreesoundHome";
import AaronGlasserHome from "./AaronGlasser/AaronGlasserHome";

const NightSky = ({ acceleration, starCount }) => {
  return (
    <Background>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Stars acceleration={acceleration} starCount={starCount} />
      </Canvas>
    </Background>
  );
};

export default function Projects() {
  return (
    <>
      <BackArrow />
      <Switch>
        <Route exact path="/projects">
          <FadeIn>
            <NightSky acceleration={0.05} starCount={2000} />
            <Suspense fallback={null}>
              <Oasis />
            </Suspense>
            <ProjectsContainer>
              <h1
                style={{
                  color: "white",
                  margin: "0 auto",
                }}
              >
                Projects
              </h1>
              <ModelsContainer>
                <BeatPad />
                <Dumbbell />
                <Bolex />
              </ModelsContainer>
              <div style={{ height: "7vh" }}></div>
            </ProjectsContainer>
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
    </>
  );
}

const BackArrow = () => {
  return (
    <Link to="/">
      <img
        src={backArrow}
        alt="back arrow"
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          zIndex: "3",
        }}
      />
    </Link>
  );
};

const Background = styled.div`
  position: absolute;
  height: 50vh;
  width: 100vw;
  background: linear-gradient(to top, #283e51, #0a2342);
`;

const ProjectsContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
`;

const ModelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100vw;
  gap: 32px;
`;
