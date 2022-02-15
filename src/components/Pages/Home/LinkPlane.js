import styled from "styled-components";
import React from "react";
import DelayLink from "react-delay-link";
// import { acceleration } from "./Starfield";

export default function Links({ onWarp }) {
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
        <LinkBox
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
          }}
        >
          Projects
        </LinkBox>
      </DelayLink>

      <DelayLink to="/about" delay={1000} replace={false} clickAction={onWarp}>
        <LinkBox
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          About Me
        </LinkBox>
      </DelayLink>
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

const LinkBox = styled.h2`
  color: white;
  width: 40%;
  height: 35%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  box-shadow: inset 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.015);
  backdrop-filter: blur(0.25px);
  text-align: center;

  &:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  &:hover {
    border: 1px solid rgba(50, 255, 50, 0.75);
    box-shadow: inset 0 0 0.5rem 0.25rem rgba(50, 255, 50, 0.25);
  }
`;
