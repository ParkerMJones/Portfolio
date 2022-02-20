import styled from "styled-components";
import React, { Suspense, useState } from "react";
import DelayLink from "react-delay-link";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./Earth";
import DancerModel from "./Dancer";

export default function Links({ onWarp }) {
  const [dance, setDance] = useState(0);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <DelayLink
        to="/projects"
        delay={1000}
        replace={false}
        clickAction={onWarp}
      >
        <LinkBox style={{ top: "5%", left: "5%" }}>
          <LinkText>Projects</LinkText>
          <Canvas>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
          </Canvas>
        </LinkBox>
      </DelayLink>
      <DelayLink to="/about" delay={1000} replace={false} clickAction={onWarp}>
        <LinkBox
          style={{
            top: "5%",
            right: "5%",
          }}
        >
          <LinkText>About Me</LinkText>
          <Canvas>
            <Suspense fallback={null}>
              <DancerModel dance={dance} />
            </Suspense>
          </Canvas>
        </LinkBox>
      </DelayLink>
      <div style={{ position: "absolute", zIndex: "99", bottom: "10%" }}>
        <button onClick={() => setDance(1)}>Run Forward</button>
        <button onClick={() => setDance(2)}>Death</button>
        <button onClick={() => setDance(3)}>Idle</button>
      </div>
      <DelayLink
        to="/contact"
        delay={1000}
        replace={false}
        clickAction={onWarp}
      >
        <LinkBox
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
          }}
        >
          Contact
        </LinkBox>
      </DelayLink>
      <DelayLink
        to="/credits"
        delay={1000}
        replace={false}
        clickAction={onWarp}
      >
        <LinkBox
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
          }}
        >
          Credits
        </LinkBox>
      </DelayLink>
    </div>
  );
}

const LinkBox = styled.div`
  width: 40%;
  height: 35%;
  position: absolute;
`;

const LinkText = styled.h2`
  color: white;
  font-size: 2em;
  text-align: center;
  margin: 0 auto;
`;

// const LinkBox = styled.h2`
//   color: white;
//   width: 40%;
//   height: 35%;
//   border: 1px solid rgba(255, 255, 255, 0.35);
//   border-radius: 10px;
//   box-shadow: inset 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.15);
//   background-color: rgba(255, 255, 255, 0.015);
//   backdrop-filter: blur(0.25px);
//   text-align: center;

//   &:before {
//     content: "";
//     display: inline-block;
//     height: 100%;
//     vertical-align: middle;
//   }

//   &:hover {
//     border: 1px solid rgba(50, 255, 50, 0.75);
//     box-shadow: inset 0 0 0.5rem 0.25rem rgba(50, 255, 50, 0.25);
//   }
// `;
