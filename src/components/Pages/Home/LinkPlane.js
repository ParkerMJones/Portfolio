import styled from "styled-components";
import React, { Suspense, useState } from "react";
import DelayLink from "react-delay-link";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./Earth";
import Astra from "./Astra";

export default function Links({ onWarp }) {
  const [dance, setDance] = useState(3);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
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
        <LinkBox style={{ top: "5%", right: "5%" }}>
          <LinkText>About Me</LinkText>

          <Canvas>
            <Suspense fallback={null}>
              <Astra dance={dance} />
            </Suspense>
          </Canvas>
        </LinkBox>
      </DelayLink>
      <button
        style={{
          position: "absolute",
          top: "calc(5% + 16px)",
          right: "calc(40% + 16px)",
        }}
        onClick={() => {
          dance === 3 ? setDance(0) : setDance(dance + 1);
        }}
      >
        {" "}
        Next Move
      </button>
      <DelayLink
        to="/contact"
        delay={1000}
        replace={false}
        clickAction={onWarp}
      >
        <LinkBox
          style={{
            bottom: "5%",
            left: "5%",
          }}
        >
          <LinkText>Contact</LinkText>
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
          <LinkText>Credits</LinkText>
        </LinkBox>
      </DelayLink>
    </div>
  );
}

const LinkBox = styled.div`
  width: 30%;
  height: 40%;
  padding: 16px;
  position: absolute;

  &:hover {
    border: 1px solid rgba(50, 255, 50, 0.75);
    padding: 15px;
    box-shadow: inset 0 0 0.5rem 0.25rem rgba(50, 255, 50, 0.25);
  }
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
