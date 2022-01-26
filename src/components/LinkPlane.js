import styled from "styled-components";

export default function Link() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
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
      <LinkBox
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
        }}
      >
        Animations
      </LinkBox>
      <LinkBox
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
        }}
      >
        About Me
      </LinkBox>
      <LinkBox
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
        }}
      >
        Contact
      </LinkBox>
    </div>
  );
}

const LinkBox = styled.h2`
  color: white;
  width: 40%;
  height: 35%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  box-shadow: inset 0 0 0.25rem 0.25rem rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.025);
  backdrop-filter: blur(0.35px);
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
