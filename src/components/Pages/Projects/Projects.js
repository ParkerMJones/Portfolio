import { useEffect, useState, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Loader from "../../Loader";

import backArrow from "../../../assets/arrow-left.svg";
import OasisSetup from "../../../assets/Models/OasisModel";
import Dumbbell from "./Dumbbell";
import BeatPad from "./MPC";
import Bolex from "./Bolex";
import { Stars } from "@react-three/drei";

import SolinHome from "./Solin/SolinHome";
import FreesoundHome from "./Freesound/FreesoundHome";
import AaronGlasserHome from "./AaronGlasser/AaronGlasserHome";

const NightSky = () => {
  return (
    <Background>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Stars
          radius={300}
          depth={100}
          count={8000}
          factor={6}
          saturation={0.2}
          fade={true}
          visible={true}
          scale={0.5}
        />
      </Canvas>
    </Background>
  );
};

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <Switch>
        <Route exact path="/projects">
          <>
            <NightSky acceleration={0.05} starCount={2000} />
            <BackArrow />
            <div style={{ position: "absolute", height: "100vh" }}>
              <Canvas
                colorManagement="srgb"
                camera={{ position: [0, 0, 0] }}
                style={{ height: "100%", width: "100vw" }}
              >
                <Suspense fallback={null}>
                  <OasisSetup />
                </Suspense>
              </Canvas>
            </div>
            <ProjectsContainer>
              <h1
                style={{
                  color: "white",
                  margin: "0 auto",
                  zIndex: 1,
                }}
              >
                Projects
              </h1>
              <ModelsContainer>
                <BeatPad />
                <Dumbbell />
                <Bolex />
              </ModelsContainer>
            </ProjectsContainer>
          </>
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
    <div
      style={{
        position: "absolute",
        top: "5%",
        left: "5%",
        maxWidth: "fit-content",
        zIndex: 3,
      }}
    >
      <Link exact to="/">
        <img src={backArrow} alt="back arrow" />
      </Link>
    </div>
  );
};

const Background = styled.div`
  position: absolute;
  height: 50vh;
  width: 100vw;
  background: linear-gradient(to top, #283e51, #0a2342);
`;

const ProjectsContainer = styled.div`
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
  z-index: 2;
  width: 100vw;
  gap: 128px;
`;
