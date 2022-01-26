import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Links() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Link to="/projects">
        <LinkBox
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
          }}
        >
          Projects
        </LinkBox>
      </Link>
      <Link to="/animations">
        <LinkBox
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          Animations
        </LinkBox>
      </Link>
      <Link to="/about">
        <LinkBox
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
          }}
        >
          About Me
        </LinkBox>
      </Link>
      <Link to="/contact">
        <LinkBox
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
          }}
        >
          Contact
        </LinkBox>
      </Link>
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
